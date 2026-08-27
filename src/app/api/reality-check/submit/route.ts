/**
 * POST /api/reality-check/submit
 *
 * Scores a completed Reality Check, stores it, and returns the results view.
 *
 * Scoring happens HERE, not on the client. The client could send any numbers it
 * liked; these scores become the Queensland dataset, so the server derives them
 * from the raw answers and stores its own working.
 */

import { NextResponse } from "next/server";
import {
  CLOSER,
  CONTEXT_QUESTIONS,
  INSTRUMENT_VERSION,
} from "@/data/reality-check/questions";
import { score, validateAnswers } from "@/lib/reality-check/scoring";
import { buildResults } from "@/lib/reality-check/results";
import { getStorage, hashIp } from "@/lib/reality-check/storage";

export const runtime = "nodejs";

/** Submissions per hashed IP per hour. Generous for a household or a shared office. */
const RATE_LIMIT = 5;
const RATE_WINDOW_MINUTES = 60;

/**
 * Below this, the response is stored but flagged out of the benchmark. Nobody
 * reads 16 behaviourally anchored questions in under a minute and a half; the
 * result is still shown, because a fast reader is not a liar and the page is
 * theirs either way.
 */
const MIN_PLAUSIBLE_SECONDS = 90;

function clientIp(req: Request): string | null {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip");
}

function validateContext(input: unknown): Record<string, string> | null {
  const record =
    typeof input === "object" && input !== null
      ? (input as Record<string, unknown>)
      : null;
  if (!record) return null;

  const context: Record<string, string> = {};
  for (const q of CONTEXT_QUESTIONS) {
    const value = record[q.id];
    if (typeof value !== "string") return null;
    if (!q.options.some((o) => o.value === value)) return null;
    context[q.id] = value;
  }
  return context;
}

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;

  // Honeypot. A real respondent never sees this field, so anything in it is a bot.
  // Answered with a 200 and a throwaway token so the sender learns nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ token: "", results: null, stored: false });
  }

  const { ok, answers, missing } = validateAnswers(body.answers);
  if (!ok) {
    return NextResponse.json({ error: "incomplete", missing }, { status: 400 });
  }

  const context = validateContext(body.context);
  if (!context) {
    return NextResponse.json({ error: "invalid_context" }, { status: 400 });
  }

  const closer =
    typeof body.closer === "string" && CLOSER.options.some((o) => o.value === body.closer)
      ? body.closer
      : null;

  const completionSeconds =
    typeof body.completionSeconds === "number" && Number.isFinite(body.completionSeconds)
      ? Math.max(0, Math.round(body.completionSeconds))
      : null;

  const storage = getStorage();
  const ipHash = hashIp(clientIp(req));

  if (ipHash) {
    const recent = await storage.recentCountForIp(ipHash, RATE_WINDOW_MINUTES);
    if (recent >= RATE_LIMIT) {
      return NextResponse.json({ error: "rate_limited" }, { status: 429 });
    }
  }

  const scored = score(answers);
  const results = buildResults(scored, context, closer);

  const flagged =
    completionSeconds !== null && completionSeconds < MIN_PLAUSIBLE_SECONDS;

  let token = "";
  let stored = false;
  try {
    token = await storage.save({
      answers,
      context,
      closer,
      scores: {
        rules: scored.dimensions.rules.score,
        work: scored.dimensions.work.score,
        people: scored.dimensions.people.score,
      },
      archetype: scored.archetype,
      instrumentVersion: INSTRUMENT_VERSION,
      completionSeconds,
      flagged,
      ipHash,
    });
    stored = true;
  } catch (err) {
    // Storage is not allowed to cost someone their result. They answered 22
    // questions; they get the page. The loss is ours — one row of dataset.
    console.error("[reality-check] failed to store response", err);
  }

  return NextResponse.json({
    token,
    stored,
    persistent: storage.isPersistent(),
    scores: {
      rules: scored.dimensions.rules.score,
      work: scored.dimensions.work.score,
      people: scored.dimensions.people.score,
    },
    results,
  });
}
