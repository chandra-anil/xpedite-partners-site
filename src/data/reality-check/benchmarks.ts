/**
 * AI Reality Check — benchmarks
 * -----------------------------
 * The only statistics in the entire product live in this file. One place, so
 * they can be checked in one place.
 *
 * THE RULE: a figure renders only if `verified` is true AND it carries a source
 * URL and a date it was checked. An unverified figure does not appear on the
 * page at all — it does not appear hedged, or with a caveat, or in small print.
 * A fabricated or stale percentile from a firm selling AI governance would end
 * this product, and a journalist asking "how many responses is that based on?"
 * is a question we have to be able to answer without flinching.
 *
 * Benchmarking runs in two phases:
 *
 *   Phase 1 (now, and until 100 Queensland responses): compare against
 *   published national data, cited, at item level where the question was
 *   deliberately written to match how the source asked it.
 *
 *   Phase 2 (100+): report a real Queensland percentile from our own dataset.
 *   Sector cuts only where that cell holds 30 or more responses.
 *
 * The locked state is deliberately shown as a drawn-but-unmarked scale on the
 * results page. An instrument that visibly declines to report on an
 * insufficient sample is demonstrating the discipline the firm sells.
 */

import type { DimensionId } from "./questions";

export interface NationalReference {
  /** Question this can legitimately be compared against, item to item. */
  questionId: string;
  dimension: DimensionId;
  /** The comparison, written for a reader, not a statistician. */
  claim: string;
  /** Which anchors of that question count as meeting the claim. */
  meets: number[];
  source: string;
  sourceUrl: string;
  /** Publication date of the source. */
  published: string;
  /** Date we last checked the figure against the source. */
  checked: string;
  /**
   * Set true ONLY after someone has opened the source and confirmed the figure.
   * Anything false is invisible to the reader — see the rule at the top.
   */
  verified: boolean;
}

/**
 * Item-level national comparisons.
 *
 * ALL THREE ARE `verified: false`, so none of them renders. That is deliberate
 * and it is not an oversight.
 *
 * A research pass on 28 Aug 2026 could not load ai.gov.au directly — it timed
 * out on five attempts across two pages — so these figures are corroborated
 * from search extracts and secondary sources only. That is not good enough to
 * publish under a claim of having checked. Someone opens the two NAIC pages,
 * confirms the wording, sets `published` and `checked`, and flips `verified`.
 * It is a ten-minute job and it is item 2 on the launch checklist.
 *
 * Three corrections already applied to the claims below, from that pass:
 *
 *   1. NAIC says "approximately half of current users" check outputs. It does
 *      NOT publish 50%. Our own documents had turned that hedge into a number.
 *      The wording below repeats theirs. Never sharpen a source's hedge.
 *   2. 43% is a quarter figure (Dec 2025 – Feb 2026) and it FELL from 45% the
 *      previous quarter. Nothing may describe it as rising.
 *   3. Every claim is dated to its survey wave, because that wave is already
 *      six months old and will keep ageing.
 */
export const NATIONAL_REFERENCES: NationalReference[] = [
  {
    questionId: "Q01",
    dimension: "people",
    claim:
      "Across Australia, 43% of small and medium businesses reported using AI in some form.",
    meets: [1, 2, 3],
    source: "National AI Centre, SME AI Pulse, December 2025 – February 2026 wave",
    sourceUrl:
      "https://www.ai.gov.au/news-and-insights/blog/ai-adoption-insights-december-2025-february-2026",
    published: "quarter to February 2026",
    checked: "",
    verified: false,
  },
  {
    questionId: "Q02",
    dimension: "people",
    claim:
      "Only 8% have AI embedded across multiple parts of the business — the level this question's top answer describes.",
    meets: [3],
    source: "National AI Centre, SME AI Pulse, December 2025 – February 2026 wave",
    sourceUrl:
      "https://www.ai.gov.au/news-and-insights/blog/ai-adoption-insights-december-2025-february-2026",
    published: "quarter to February 2026",
    checked: "",
    verified: false,
  },
  {
    questionId: "Q15",
    dimension: "rules",
    claim:
      "Nationally, about half of businesses using AI check its output before it reaches customers.",
    meets: [2, 3],
    source: "National AI Centre, SME AI Pulse, December 2025 – February 2026 wave",
    sourceUrl:
      "https://www.ai.gov.au/news-and-insights/blog/ai-adoption-insights-december-2025-february-2026",
    published: "quarter to February 2026",
    checked: "",
    verified: false,
  },
];

/** Only these are ever shown. */
export function publishedReferences(): NationalReference[] {
  return NATIONAL_REFERENCES.filter(
    (r) => r.verified && r.claim.trim() !== "" && r.sourceUrl.trim() !== ""
  );
}

/* ------------------------------------------------------------------ */
/* The locked Queensland percentile                                    */
/* ------------------------------------------------------------------ */

export const QLD_BENCHMARK = {
  heading: "Queensland benchmark",
  /**
   * Shown while the dataset is below threshold. Deliberately does not include a
   * live response count: a count of seven in week one invites the reader to
   * judge the sample rather than the promise, and the promise is the point.
   */
  lockedLine: "Reported at 100 responses.",
  lockedExplainer:
    "We won't publish a Queensland percentile until this dataset can carry one. Below 100 responses a percentile is a number with nothing behind it, and you would have no way of knowing that.",
  unlockedExplainer:
    "Your position against other Queensland businesses that have completed this. Sector comparisons appear only where that sector has at least 30 responses.",
  /** Shown next to the email field as the reason to leave one. */
  notifyPromise:
    "Leave an email and we'll send your percentile when the dataset reaches 100.",
};

/* ------------------------------------------------------------------ */
/* Free programs — the honest alternative                              */
/* ------------------------------------------------------------------ */

/**
 * Named on the out-of-segment results page and in the "you may not need us"
 * path. Descriptions are deliberately broad: eligibility for each changes, and
 * every mention tells the reader to check rather than implying we have.
 */
export const FREE_PROGRAMS = [
  {
    name: "Digital Solutions",
    what: "Low-cost independent digital advice for small businesses, funded by the Australian Government.",
    url: "https://business.gov.au/",
  },
  {
    name: "ARM Hub AI Adopt Centre",
    what: "Brisbane-based, works with manufacturers and industrial businesses on automation and AI.",
    url: "https://aiadopt.ai/",
  },
  {
    name: "UniSC micro-credentials",
    what: "Short Queensland Government-funded courses in AI, cyber security and procurement for small and family businesses.",
    url: "https://www.usc.edu.au/",
  },
] as const;

export const FREE_PROGRAMS_CAVEAT = "Check eligibility with each — it changes.";
