/**
 * AI Reality Check — storage
 * --------------------------
 * One interface, two implementations, chosen by whether a Postgres connection
 * string is present in the environment.
 *
 *   DATABASE_URL / POSTGRES_URL set → Neon (serverless driver over HTTP)
 *   neither set                     → in-memory store, process-lifetime only
 *
 * The in-memory store exists so the whole route runs locally, and on a Vercel
 * preview, before anyone has created a database. It is not a fallback in
 * production: `isPersistent()` reports which one is live so the results page
 * can avoid promising a percentile it cannot deliver, and so the deploy
 * checklist can be verified at a glance.
 *
 * The schema is created on first write (CREATE TABLE IF NOT EXISTS). That keeps
 * the ops burden for a one-person firm at zero — there is no migration step to
 * forget. It is safe to call repeatedly and safe to run concurrently.
 *
 * WHAT IS DELIBERATELY NOT STORED: no name, no business name, no phone, no IP
 * address in the clear. The IP is kept only as a salted hash, and only so
 * repeat submissions can be rate-limited and excluded from the benchmark.
 */

import { createHash, randomBytes } from "node:crypto";
import { neon } from "@neondatabase/serverless";
import type { ArchetypeId } from "./scoring";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface StoredResponse {
  token: string;
  createdAt: string;
  answers: Record<string, number>;
  context: Record<string, string>;
  closer: string | null;
  scores: { rules: number; work: number; people: number };
  archetype: ArchetypeId;
  instrumentVersion: string;
  completionSeconds: number | null;
  /** True when the response is excluded from the benchmark (too fast, or flagged). */
  flagged: boolean;
  email: string | null;
  consentBriefing: boolean;
}

export interface NewResponse extends Omit<StoredResponse, "token" | "createdAt" | "email" | "consentBriefing"> {
  ipHash: string | null;
}

export interface BenchmarkAggregate {
  /** Responses eligible for the benchmark (unflagged, complete). */
  total: number;
  /** Eligible responses from Queensland regions only. */
  queensland: number;
  /** Mean score per dimension across eligible Queensland responses, or null below threshold. */
  means: { rules: number; work: number; people: number } | null;
  bySector: Record<string, number>;
}

export interface Storage {
  save(response: NewResponse): Promise<string>;
  get(token: string): Promise<StoredResponse | null>;
  attachEmail(token: string, email: string, consentBriefing: boolean): Promise<boolean>;
  aggregates(): Promise<BenchmarkAggregate>;
  /** Submissions from this hashed IP in the trailing window. */
  recentCountForIp(ipHash: string, withinMinutes: number): Promise<number>;
  isPersistent(): boolean;
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

/**
 * 22 characters of base64url from 16 random bytes. Long enough that result
 * URLs cannot be enumerated — someone's result is their own business, and the
 * page is reachable without a login.
 */
export function newToken(): string {
  return randomBytes(16).toString("base64url");
}

/**
 * Salted so the stored value cannot be reversed into an address by anyone who
 * gets a copy of the table. If REALITY_CHECK_IP_SALT is unset the hash is still
 * computed, but with a fixed salt — rate limiting keeps working, and the
 * deploy checklist flags the missing value.
 */
export function hashIp(ip: string | null): string | null {
  if (!ip) return null;
  const salt = process.env.REALITY_CHECK_IP_SALT ?? "xpedite-reality-check";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 32);
}

const QLD_REGIONS = new Set(["brisbane", "gc_sc", "regional_qld"]);

/** Below this, no percentile is reported. Stated publicly, and enforced here. */
export const BENCHMARK_THRESHOLD = 100;

/* ------------------------------------------------------------------ */
/* In-memory store                                                     */
/* ------------------------------------------------------------------ */

class MemoryStorage implements Storage {
  private rows = new Map<string, StoredResponse>();
  private ips: { ipHash: string; at: number }[] = [];

  isPersistent() {
    return false;
  }

  async save(response: NewResponse): Promise<string> {
    const token = newToken();
    this.rows.set(token, {
      ...response,
      token,
      createdAt: new Date().toISOString(),
      email: null,
      consentBriefing: false,
    });
    if (response.ipHash) this.ips.push({ ipHash: response.ipHash, at: Date.now() });
    return token;
  }

  async get(token: string) {
    return this.rows.get(token) ?? null;
  }

  async attachEmail(token: string, email: string, consentBriefing: boolean) {
    const row = this.rows.get(token);
    if (!row) return false;
    row.email = email;
    row.consentBriefing = consentBriefing;
    return true;
  }

  async aggregates(): Promise<BenchmarkAggregate> {
    const eligible = [...this.rows.values()].filter((r) => !r.flagged);
    const qld = eligible.filter((r) => QLD_REGIONS.has(r.context.C4));
    const bySector: Record<string, number> = {};
    for (const r of qld) {
      const s = r.context.C1 ?? "unknown";
      bySector[s] = (bySector[s] ?? 0) + 1;
    }
    return {
      total: eligible.length,
      queensland: qld.length,
      means:
        qld.length >= BENCHMARK_THRESHOLD
          ? {
              rules: mean(qld.map((r) => r.scores.rules)),
              work: mean(qld.map((r) => r.scores.work)),
              people: mean(qld.map((r) => r.scores.people)),
            }
          : null,
      bySector,
    };
  }

  async recentCountForIp(ipHash: string, withinMinutes: number) {
    const cutoff = Date.now() - withinMinutes * 60_000;
    this.ips = this.ips.filter((e) => e.at >= cutoff);
    return this.ips.filter((e) => e.ipHash === ipHash).length;
  }
}

function mean(values: number[]): number {
  if (values.length === 0) return 0;
  return Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 10) / 10;
}

/* ------------------------------------------------------------------ */
/* Neon (Postgres) store                                               */
/* ------------------------------------------------------------------ */

type SqlClient = ReturnType<typeof neon>;

class NeonStorage implements Storage {
  private ready: Promise<void> | null = null;

  constructor(private sql: SqlClient) {}

  isPersistent() {
    return true;
  }

  /** Idempotent. Awaited before every operation; the promise is cached. */
  private ensureSchema(): Promise<void> {
    if (!this.ready) {
      this.ready = (async () => {
        await this.sql`
          CREATE TABLE IF NOT EXISTS reality_check_responses (
            token               TEXT PRIMARY KEY,
            created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            answers             JSONB       NOT NULL,
            context             JSONB       NOT NULL,
            closer              TEXT,
            score_rules         NUMERIC(4,1) NOT NULL,
            score_work          NUMERIC(4,1) NOT NULL,
            score_people        NUMERIC(4,1) NOT NULL,
            archetype           TEXT        NOT NULL,
            instrument_version  TEXT        NOT NULL,
            completion_seconds  INTEGER,
            flagged             BOOLEAN     NOT NULL DEFAULT FALSE,
            ip_hash             TEXT,
            email               TEXT,
            consent_briefing    BOOLEAN     NOT NULL DEFAULT FALSE
          )
        `;
        await this.sql`
          CREATE INDEX IF NOT EXISTS reality_check_ip_recent
            ON reality_check_responses (ip_hash, created_at)
        `;
        await this.sql`
          CREATE INDEX IF NOT EXISTS reality_check_benchmark
            ON reality_check_responses (flagged, created_at)
        `;
      })();
    }
    return this.ready;
  }

  async save(response: NewResponse): Promise<string> {
    await this.ensureSchema();
    const token = newToken();
    await this.sql`
      INSERT INTO reality_check_responses (
        token, answers, context, closer,
        score_rules, score_work, score_people,
        archetype, instrument_version, completion_seconds, flagged, ip_hash
      ) VALUES (
        ${token}, ${JSON.stringify(response.answers)}, ${JSON.stringify(response.context)}, ${response.closer},
        ${response.scores.rules}, ${response.scores.work}, ${response.scores.people},
        ${response.archetype}, ${response.instrumentVersion}, ${response.completionSeconds},
        ${response.flagged}, ${response.ipHash}
      )
    `;
    return token;
  }

  async get(token: string): Promise<StoredResponse | null> {
    await this.ensureSchema();
    const rows = (await this.sql`
      SELECT * FROM reality_check_responses WHERE token = ${token} LIMIT 1
    `) as Record<string, unknown>[];
    const row = rows[0];
    if (!row) return null;
    return {
      token: row.token as string,
      createdAt: new Date(row.created_at as string).toISOString(),
      answers: row.answers as Record<string, number>,
      context: row.context as Record<string, string>,
      closer: (row.closer as string) ?? null,
      scores: {
        rules: Number(row.score_rules),
        work: Number(row.score_work),
        people: Number(row.score_people),
      },
      archetype: row.archetype as ArchetypeId,
      instrumentVersion: row.instrument_version as string,
      completionSeconds: (row.completion_seconds as number) ?? null,
      flagged: Boolean(row.flagged),
      email: (row.email as string) ?? null,
      consentBriefing: Boolean(row.consent_briefing),
    };
  }

  async attachEmail(token: string, email: string, consentBriefing: boolean) {
    await this.ensureSchema();
    const rows = (await this.sql`
      UPDATE reality_check_responses
         SET email = ${email}, consent_briefing = ${consentBriefing}
       WHERE token = ${token}
      RETURNING token
    `) as unknown[];
    return rows.length > 0;
  }

  async aggregates(): Promise<BenchmarkAggregate> {
    await this.ensureSchema();
    const qldList = `{${[...QLD_REGIONS].join(",")}}`;
    const rows = (await this.sql`
      SELECT
        COUNT(*) FILTER (WHERE NOT flagged)                                   AS total,
        COUNT(*) FILTER (WHERE NOT flagged AND context->>'C4' = ANY(${qldList}::text[])) AS qld,
        AVG(score_rules)  FILTER (WHERE NOT flagged AND context->>'C4' = ANY(${qldList}::text[])) AS m_rules,
        AVG(score_work)   FILTER (WHERE NOT flagged AND context->>'C4' = ANY(${qldList}::text[])) AS m_work,
        AVG(score_people) FILTER (WHERE NOT flagged AND context->>'C4' = ANY(${qldList}::text[])) AS m_people
      FROM reality_check_responses
    `) as Record<string, unknown>[];

    const sectorRows = (await this.sql`
      SELECT context->>'C1' AS sector, COUNT(*) AS n
        FROM reality_check_responses
       WHERE NOT flagged AND context->>'C4' = ANY(${qldList}::text[])
       GROUP BY 1
    `) as Record<string, unknown>[];

    const r = rows[0] ?? {};
    const queensland = Number(r.qld ?? 0);
    const bySector: Record<string, number> = {};
    for (const s of sectorRows) {
      bySector[(s.sector as string) ?? "unknown"] = Number(s.n);
    }

    return {
      total: Number(r.total ?? 0),
      queensland,
      means:
        queensland >= BENCHMARK_THRESHOLD
          ? {
              rules: round1(Number(r.m_rules ?? 0)),
              work: round1(Number(r.m_work ?? 0)),
              people: round1(Number(r.m_people ?? 0)),
            }
          : null,
      bySector,
    };
  }

  async recentCountForIp(ipHash: string, withinMinutes: number) {
    await this.ensureSchema();
    const rows = (await this.sql`
      SELECT COUNT(*) AS n
        FROM reality_check_responses
       WHERE ip_hash = ${ipHash}
         AND created_at > NOW() - (${withinMinutes} * INTERVAL '1 minute')
    `) as Record<string, unknown>[];
    return Number(rows[0]?.n ?? 0);
  }
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

/* ------------------------------------------------------------------ */
/* Selection                                                           */
/* ------------------------------------------------------------------ */

let cached: Storage | null = null;

export function getStorage(): Storage {
  if (cached) return cached;

  const url = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
  if (url) {
    // Statically imported at the top of this file rather than require()d here.
    // The driver is a thin HTTP client, so loading it unconditionally costs
    // almost nothing — and a CommonJS require() inside an ES module is exactly
    // the kind of thing that works in dev and then fails in a serverless build,
    // which would take storage down at the only moment it matters.
    cached = new NeonStorage(neon(url));
  } else {
    cached = new MemoryStorage();
  }
  return cached;
}

/** Test seam. Not used by the app. */
export function __resetStorageForTests() {
  cached = null;
}
