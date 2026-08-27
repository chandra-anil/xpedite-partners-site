/**
 * AI Reality Check — scoring
 * --------------------------
 * Pure functions. No I/O, no randomness, no clock. Given the same answers this
 * returns the same result forever, which is what makes the published dataset
 * defensible and the methodology page checkable by anyone who wants to.
 *
 * Scoring runs on the SERVER on submit. The client never computes a stored
 * score — client maths can be tampered with, and these numbers become the
 * Queensland report.
 *
 * The maths is published at /ai-ready/reality-check/methodology. If you change
 * anything here, change that page in the same commit, and bump
 * INSTRUMENT_VERSION in `questions.ts` — scores either side of the change are
 * not comparable and must not sit in the same benchmark.
 */

import {
  DIMENSIONS,
  SCORED_QUESTIONS,
  type DimensionId,
} from "@/data/reality-check/questions";

export type BandId = "emerging" | "developing" | "established" | "leading";

export type ArchetypeId =
  | "cautious_observer"
  | "ungoverned_adopter"
  | "governed_starter"
  | "ready_to_scale"
  | "compounding_leader";

export interface DimensionScore {
  dimension: DimensionId;
  /** 0–100, rounded to one decimal for storage. */
  score: number;
  band: BandId;
  /** Raw sum of item scores, kept so a score can be re-derived and audited. */
  raw: number;
  /** Number of items in the dimension. */
  items: number;
}

export interface ScoreResult {
  dimensions: Record<DimensionId, DimensionScore>;
  archetype: ArchetypeId;
  /** The dimension the results page names a risk from (lowest score, ties → rules). */
  weakest: DimensionId;
  /** The dimension the results page names a strength from (highest, ties → rules). */
  strongest: DimensionId;
  /**
   * True when two dimensions are Leading and one is only Developing. The
   * archetype rules resolve this to "Ready to scale", which is correct — the
   * Developing dimension IS the constraint — but the reader will feel
   * mis-scored unless the copy acknowledges the two strong dimensions.
   */
  twoLeadingOneDeveloping: boolean;
}

/* ------------------------------------------------------------------ */
/* Bands                                                               */
/* ------------------------------------------------------------------ */

/**
 * Half-open, lower-inclusive: [0,25) [25,50) [50,75) [75,100].
 *
 * This matters. The Rules dimension has six items, so a raw sum of 9 lands on
 * exactly 50.0 — the only achievable score in the instrument that sits on a
 * band edge. Lower-inclusive puts it in Established. Stated on the methodology
 * page so nobody has to reverse-engineer it.
 */
export const BAND_FLOORS: { band: BandId; floor: number }[] = [
  { band: "leading", floor: 75 },
  { band: "established", floor: 50 },
  { band: "developing", floor: 25 },
  { band: "emerging", floor: 0 },
];

export const BAND_LABELS: Record<BandId, string> = {
  emerging: "Emerging",
  developing: "Developing",
  established: "Established",
  leading: "Leading",
};

/** Ordered weakest → strongest. Used for comparisons, never for display. */
const BAND_RANK: Record<BandId, number> = {
  emerging: 0,
  developing: 1,
  established: 2,
  leading: 3,
};

export function bandFor(score: number): BandId {
  for (const { band, floor } of BAND_FLOORS) {
    if (score >= floor) return band;
  }
  return "emerging";
}

export function bandAtLeast(band: BandId, floor: BandId): boolean {
  return BAND_RANK[band] >= BAND_RANK[floor];
}

/* ------------------------------------------------------------------ */
/* Scoring                                                             */
/* ------------------------------------------------------------------ */

export type Answers = Record<string, number>;

/**
 * Every scored question is worth 0–3, every item within a dimension weighs the
 * same, and the dimension is expressed as a percentage of its own maximum.
 *
 * Equal weights are a deliberate choice, not a default. Weighting one AI6
 * practice above another would have to be defended, and there is no evidence
 * base to defend it from yet. When the dataset can support it, that is a
 * methodology change with a version bump — not a quiet edit.
 */
export function scoreDimension(
  dimension: DimensionId,
  answers: Answers
): DimensionScore {
  const questions = SCORED_QUESTIONS.filter((q) => q.dimension === dimension);
  const raw = questions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
  const max = questions.length * 3;
  // Exact division, then round for storage. Computing "mean × 33.3" instead
  // puts a perfect-middle six-item dimension at 49.95 and silently drops it a
  // whole band.
  const score = Math.round((raw / max) * 1000) / 10;

  return {
    dimension,
    score,
    band: bandFor(score),
    raw,
    items: questions.length,
  };
}

/* ------------------------------------------------------------------ */
/* Archetypes                                                          */
/* ------------------------------------------------------------------ */

/**
 * Evaluated IN ORDER, first match wins.
 *
 * Order is not cosmetic. Written as independent shape rules they overlap
 * (governance Developing + capability Developing matches both "Governed
 * starter" and "Ready to scale") and leave a gap (governance Emerging +
 * capability Emerging + operating model Developing matches nothing). Evaluated
 * in this order they partition every possible score profile exactly once.
 */
export function archetypeFor(
  dimensions: Record<DimensionId, DimensionScore>
): ArchetypeId {
  const rules = dimensions.rules.band;
  const work = dimensions.work.band;
  const people = dimensions.people.band;
  const all = [rules, work, people];

  // 1. Compounding leader — two or more Leading, nothing below Established.
  const leadingCount = all.filter((b) => b === "leading").length;
  if (leadingCount >= 2 && all.every((b) => bandAtLeast(b, "established"))) {
    return "compounding_leader";
  }

  // 2. Ready to scale — everything at least Developing.
  if (all.every((b) => bandAtLeast(b, "developing"))) {
    return "ready_to_scale";
  }

  // 3. Ungoverned adopter — using AI with no rules around it. The OR covers the
  //    workflow-adoption-without-rules case as well as the people case; both are
  //    the same diagnosis and the same conversation.
  if (
    rules === "emerging" &&
    (bandAtLeast(people, "developing") || bandAtLeast(work, "developing"))
  ) {
    return "ungoverned_adopter";
  }

  // 4. Governed starter — rules ahead of use.
  if (bandAtLeast(rules, "developing")) {
    return "governed_starter";
  }

  // 5. Cautious observer — everything else. Provably all-Emerging by this point.
  return "cautious_observer";
}

/* ------------------------------------------------------------------ */
/* Entry point                                                         */
/* ------------------------------------------------------------------ */

/**
 * Ties break to `rules` for the risk, and to `rules` for the strength.
 *
 * Deliberate on both sides: governance is the dimension Xpedite can actually do
 * something about, and it is the one a client, insurer or head contractor asks
 * about. Naming it on a tie is the more useful answer, not the flattering one.
 */
const TIE_BREAK_ORDER: DimensionId[] = ["rules", "work", "people"];

export function score(answers: Answers): ScoreResult {
  const dimensions = Object.fromEntries(
    DIMENSIONS.map((d) => [d.id, scoreDimension(d.id, answers)])
  ) as Record<DimensionId, DimensionScore>;

  const byScoreAsc = [...TIE_BREAK_ORDER].sort(
    (a, b) => dimensions[a].score - dimensions[b].score
  );
  const byScoreDesc = [...TIE_BREAK_ORDER].sort(
    (a, b) => dimensions[b].score - dimensions[a].score
  );

  const bands = TIE_BREAK_ORDER.map((d) => dimensions[d].band);
  const twoLeadingOneDeveloping =
    bands.filter((b) => b === "leading").length === 2 &&
    bands.filter((b) => b === "developing").length === 1;

  return {
    dimensions,
    archetype: archetypeFor(dimensions),
    weakest: byScoreAsc[0],
    strongest: byScoreDesc[0],
    twoLeadingOneDeveloping,
  };
}

/* ------------------------------------------------------------------ */
/* Validation                                                          */
/* ------------------------------------------------------------------ */

/**
 * A submission is only scored if every scored question has a legal answer.
 * Partial submissions are not stored — a half-finished instrument would
 * pollute the benchmark with scores that mean nothing.
 */
export function validateAnswers(input: unknown): {
  ok: boolean;
  answers: Answers;
  missing: string[];
} {
  const answers: Answers = {};
  const missing: string[] = [];

  const record =
    typeof input === "object" && input !== null
      ? (input as Record<string, unknown>)
      : {};

  for (const q of SCORED_QUESTIONS) {
    const value = record[q.id];
    if (typeof value === "number" && Number.isInteger(value) && value >= 0 && value <= 3) {
      answers[q.id] = value;
    } else {
      missing.push(q.id);
    }
  }

  return { ok: missing.length === 0, answers, missing };
}
