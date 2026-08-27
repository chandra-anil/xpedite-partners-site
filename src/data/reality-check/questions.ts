/**
 * AI Reality Check — the instrument
 * ---------------------------------
 * The question set, verbatim from `reality-check-questions.md` v0.2 (27 Aug 2026),
 * after review by the construction, professional-services and UX advisers.
 *
 * Three rules govern edits to this file:
 *
 * 1. EVERY RESPONDENT GETS IDENTICAL QUESTIONS. No adaptive branching, ever.
 *    Different respondents answering different questions destroys the dataset,
 *    and the dataset is what the published Queensland report is built on.
 *    Sector flavour belongs in the results copy (`narrative.ts`, `sectors.ts`),
 *    never here.
 *
 * 2. THE SIX AI6 QUESTIONS ARE LOAD-BEARING. Q11–Q16 map one-to-one onto the
 *    National AI Centre's six essential practices, and the methodology page
 *    publishes that mapping. If completions need to be shortened, cut from the
 *    operating-model or capability dimensions — never from these six.
 *
 * 3. ANCHORS DESCRIBE OBSERVABLE BEHAVIOUR. Not attitudes, not agreement scales.
 *    Every anchor should be verifiable by walking into the business. Changing an
 *    anchor changes the scoring distribution, so any edit invalidates comparison
 *    against responses collected before it — bump INSTRUMENT_VERSION if you do.
 */

export const INSTRUMENT_VERSION = "1.0";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type DimensionId = "rules" | "work" | "people";

export interface Dimension {
  id: DimensionId;
  /** Shown to respondents. Plain language — no "governance", no "operating model". */
  publicName: string;
  /** Used internally and on the methodology page. */
  internalName: string;
  /** Part number in the flow. Only scored parts are numbered. */
  part: 1 | 2 | 3;
}

/**
 * Scored 0–3. The order in the array IS the display order and the score:
 * index 0 scores 0, index 3 scores 3. Never reorder to "improve" the reading —
 * it silently rewrites every stored response's meaning.
 */
export interface Anchor {
  score: 0 | 1 | 2 | 3;
  text: string;
}

export interface ScoredQuestion {
  id: string;
  dimension: DimensionId;
  stem: string;
  anchors: [Anchor, Anchor, Anchor, Anchor];
  /** The NAIC essential practice this question maps to, verbatim. Q11–Q16 only. */
  ai6?: string;
  /** Published on the methodology page as the question's stated purpose. */
  measures: string;
}

export interface ContextOption {
  value: string;
  label: string;
}

export interface ContextQuestion {
  id: string;
  stem: string;
  /** Small print under the stem. Present where the field must visibly earn its keep. */
  why?: string;
  options: ContextOption[];
}

/* ------------------------------------------------------------------ */
/* Dimensions                                                          */
/* ------------------------------------------------------------------ */

export const DIMENSIONS: Dimension[] = [
  {
    id: "people",
    publicName: "Your people",
    internalName: "Capability and adoption",
    part: 1,
  },
  {
    id: "work",
    publicName: "How work actually runs",
    internalName: "Operating model",
    part: 2,
  },
  {
    id: "rules",
    publicName: "Rules and risk",
    internalName: "Governance and trust",
    part: 3,
  },
];

export const DIMENSION_BY_ID: Record<DimensionId, Dimension> = Object.fromEntries(
  DIMENSIONS.map((d) => [d.id, d])
) as Record<DimensionId, Dimension>;

/* ------------------------------------------------------------------ */
/* Part 1 — Your people (capability and adoption)                      */
/* ------------------------------------------------------------------ */

const PART_1: ScoredQuestion[] = [
  {
    id: "Q01",
    dimension: "people",
    measures: "Whether AI use in the business is known and agreed, or unseen.",
    stem: "Are people in your business using AI tools today — including AI built into software you already have — whether or not you've said they can?",
    anchors: [
      { score: 0, text: "As far as we know, nobody is using AI for work." },
      {
        score: 1,
        text: "Some people use tools they found themselves. There's no agreed list and no one tracks it.",
      },
      {
        score: 2,
        text: "People use AI openly and we roughly know who uses what, but it grew up informally.",
      },
      {
        score: 3,
        text: "We've agreed which tools we use, and we know who uses what, for what.",
      },
    ],
  },
  {
    id: "Q02",
    dimension: "people",
    measures: "How far AI use has spread beyond individuals into teams.",
    stem: "How widely is AI used across the business?",
    anchors: [
      { score: 0, text: "One or two people at most, occasionally." },
      {
        score: 1,
        text: "A few individuals use it regularly; it's personal, not part of how any team works.",
      },
      {
        score: 2,
        text: "At least one team uses it as part of how their work gets done.",
      },
      { score: 3, text: "Part of daily work in most parts of the business." },
    ],
  },
  {
    id: "Q03",
    dimension: "people",
    measures: "Whether people have been taught how to use AI, including its limits.",
    stem: "What training have people had in using AI for work?",
    anchors: [
      { score: 0, text: "None — people work it out themselves." },
      {
        score: 1,
        text: "Tips and links get shared; one person shows others informally.",
      },
      {
        score: 2,
        text: "At least one proper session on using AI for our work, including what not to put into it.",
      },
      {
        score: 3,
        text: "Regular training, new starters get it, and it's refreshed as tools change.",
      },
    ],
  },
  {
    id: "Q04",
    dimension: "people",
    measures: "Whether AI capability survives the loss of the person carrying it.",
    stem: "If the person who drives AI in your business left tomorrow, what would happen?",
    anchors: [
      { score: 0, text: "Nothing — no one is driving it." },
      { score: 1, text: "It would mostly stop. It lives in one person's head." },
      {
        score: 2,
        text: "It would slow down. Others use the tools, but the know-how sits with one or two people.",
      },
      {
        score: 3,
        text: "It would carry on. The tools and ways of working are written down and more than one person runs them.",
      },
    ],
  },
  {
    id: "Q05",
    dimension: "people",
    measures: "Whether the business's own records are in a state AI could work from.",
    stem: "Where does the information AI would need actually live?",
    anchors: [
      { score: 0, text: "Mostly in people's heads, inboxes and personal drives." },
      {
        score: 1,
        text: "In shared systems, but messy — duplicates, old versions, nobody sure what's current.",
      },
      { score: 2, text: "Core records in agreed systems, mostly kept current." },
      {
        score: 3,
        text: "Core records in agreed systems, kept current, with someone responsible for keeping them that way.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Part 2 — How work actually runs (operating model)                   */
/* ------------------------------------------------------------------ */

const PART_2: ScoredQuestion[] = [
  {
    id: "Q06",
    dimension: "work",
    measures: "Whether AI has changed how work is actually done, or sits beside it.",
    stem: "Where does AI actually sit in how work gets done?",
    anchors: [
      {
        score: 0,
        text: "It doesn't — any use is people experimenting on the side.",
      },
      {
        score: 1,
        text: "It helps with odd tasks, but no regular process depends on it.",
      },
      {
        score: 2,
        text: "It's a standard step in at least one regular process — that work is done differently because of it.",
      },
      {
        score: 3,
        text: "Several everyday processes now run differently because of AI, and you could point to which steps changed.",
      },
    ],
  },
  {
    id: "Q07",
    dimension: "work",
    measures: "Whether decision rights for AI changes are clear, or bottlenecked, or absent.",
    stem: "When a team wants to change how a job gets done using AI, who has the call?",
    anchors: [
      { score: 0, text: "No one in particular — changes just happen, or don't." },
      {
        score: 1,
        text: "The owner, MD or a lead partner decides everything AI, whenever it comes up.",
      },
      {
        score: 2,
        text: "Partners or managers can decide for their own team's work, within limits the whole business has agreed.",
      },
      {
        score: 3,
        text: "It's clear which calls are team-level and which are business-level, and decisions get noted down.",
      },
    ],
  },
  {
    id: "Q08",
    dimension: "work",
    measures: "Whether the business can tell if AI is paying off, with numbers.",
    stem: "How do you know whether AI is actually paying off?",
    anchors: [
      { score: 0, text: "We don't measure it. It feels useful, or it doesn't." },
      {
        score: 1,
        text: "We could name wins — “quotes go out faster”, “first drafts take half the time” — but we've never put numbers on them.",
      },
      {
        score: 2,
        text: "For at least one use, we compared before and after with real numbers — time, cost or errors.",
      },
      {
        score: 3,
        text: "Anything significant gets measured before and after — and the numbers have changed what we do.",
      },
    ],
  },
  {
    id: "Q09",
    dimension: "work",
    measures: "Whether new AI tools are chosen against any check, or arrive unseen.",
    stem: "How does a new AI tool get into your business?",
    anchors: [
      {
        score: 0,
        text: "Anyone signs up for anything, often on free accounts we'd never find.",
      },
      {
        score: 1,
        text: "People ask first, but there's nothing we check the tool against.",
      },
      {
        score: 2,
        text: "Someone checks the basics before we sign up — what it costs, where our data goes, who can see it.",
      },
      {
        score: 3,
        text: "A tool has to pass a short checklist — data, cost, who owns the account — and there's a list of what's approved.",
      },
    ],
  },
  {
    id: "Q10",
    dimension: "work",
    measures: "Whether an AI error that reached a client would be seen, fixed and learned from.",
    stem: "If AI got something wrong that reached a client — a wrong figure, a made-up detail — what would happen next?",
    anchors: [
      { score: 0, text: "We'd probably never know it was the AI." },
      { score: 1, text: "We'd fix that job and move on." },
      {
        score: 2,
        text: "We'd fix it, work out how it got through, and change how we check that kind of work.",
      },
      {
        score: 3,
        text: "There's an agreed process — who's told, how it's fixed, what the client hears — and it's been used or tested.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Part 3 — Rules and risk (governance)                                */
/* One question per NAIC essential practice. Practice names are verbatim. */
/* ------------------------------------------------------------------ */

const PART_3: ScoredQuestion[] = [
  {
    id: "Q11",
    dimension: "rules",
    ai6: "Decide who is accountable",
    measures: "Whether a named person owns AI decisions, and whether leadership looks at it.",
    stem: "Who is responsible for AI in your business?",
    anchors: [
      {
        score: 0,
        text: "No one. If something went wrong with AI tomorrow, it isn't clear whose problem it would be.",
      },
      {
        score: 1,
        text: "Informally the owner, MD or a lead partner, along with everything else — it's never been made anyone's actual job.",
      },
      {
        score: 2,
        text: "A named person owns AI decisions and people know to go to them.",
      },
      {
        score: 3,
        text: "A named person owns it, and it comes up in management meetings — not just when something breaks.",
      },
    ],
  },
  {
    id: "Q12",
    dimension: "rules",
    ai6: "Understand impacts and plan accordingly",
    measures: "Whether anyone considers who could be harmed before AI touches their information.",
    stem: "Before AI touches other people's information — clients' or staff's — does anyone think through what could go wrong for them?",
    anchors: [
      { score: 0, text: "It hasn't come up." },
      {
        score: 1,
        text: "We know client information in AI tools is a worry, but we've never worked out where the real risks are.",
      },
      {
        score: 2,
        text: "We've worked out which information and which uses are the sensitive ones, and people know which those are.",
      },
      {
        score: 3,
        text: "Before anything new starts, someone checks who could be affected — clients, staff, suppliers — and it's noted down.",
      },
    ],
  },
  {
    id: "Q13",
    dimension: "rules",
    ai6: "Measure and manage risks",
    measures: "Whether AI risks have been identified and acted on, or only discussed.",
    stem: "What's been done about the ways AI could hurt the business — bad output, leaked information, a tool going down?",
    anchors: [
      { score: 0, text: "Nothing — we haven't looked at it." },
      {
        score: 1,
        text: "We've talked about it, but nothing is written down and nothing changed.",
      },
      {
        score: 2,
        text: "We've listed the main risks and done something concrete about the biggest — settings changed, rules set, a tool dropped.",
      },
      {
        score: 3,
        text: "AI risks sit alongside our other business risks, get reviewed, and each big one has something in place — there's a list you could pull up.",
      },
    ],
  },
  {
    id: "Q14",
    dimension: "rules",
    ai6: "Share essential information",
    measures: "Whether clients and staff know where AI touches their work, and can raise a concern.",
    stem: "Do the people affected by your AI use — clients, staff — know about it?",
    anchors: [
      { score: 0, text: "No. It's not something we've told anyone." },
      { score: 1, text: "Staff know informally; clients haven't been told." },
      {
        score: 2,
        text: "Staff know the rules, and if a client asked, we could give a straight answer about where AI touches their work.",
      },
      {
        score: 3,
        text: "We're upfront without being asked, and there's a way for a client or staff member to raise a concern.",
      },
    ],
  },
  {
    id: "Q15",
    dimension: "rules",
    ai6: "Test and monitor",
    measures: "Whether AI output is checked before it reaches real work, as a requirement.",
    stem: "How is AI output checked before it goes into real work?",
    anchors: [
      { score: 0, text: "It isn't. Output gets used as it comes out." },
      {
        score: 1,
        text: "People are told to check it; whether they do depends on the person and the deadline.",
      },
      {
        score: 2,
        text: "For work that reaches a client, checking is a required step — someone signs it off, and skipping it would be noticed.",
      },
      {
        score: 3,
        text: "Checking is built in, and we look back over where AI has been wrong so the checks improve.",
      },
    ],
  },
  {
    id: "Q16",
    dimension: "rules",
    ai6: "Maintain human control",
    measures: "Whether the line a machine cannot cross is agreed, and whether it would hold.",
    stem: "Who has the final say when AI is involved in a decision that matters — pricing a job, work going out to a client, hiring?",
    anchors: [
      {
        score: 0,
        text: "It's never been discussed. If a tool produced an answer, it might well get used as is.",
      },
      {
        score: 1,
        text: "In practice a person always decides — that's just how we work, but no one has actually set a rule about AI.",
      },
      {
        score: 2,
        text: "We've agreed which decisions always need a person's call, and everyone knows which they are.",
      },
      {
        score: 3,
        text: "The line is written down, tools are set up so it can't be quietly crossed, and we'd know if it was.",
      },
    ],
  },
];

export const SCORED_QUESTIONS: ScoredQuestion[] = [...PART_1, ...PART_2, ...PART_3];

export const SCORED_QUESTIONS_BY_PART: Record<1 | 2 | 3, ScoredQuestion[]> = {
  1: PART_1,
  2: PART_2,
  3: PART_3,
};

/* ------------------------------------------------------------------ */
/* Context block — unscored, sits between Part 1 and Part 2            */
/* ------------------------------------------------------------------ */

export const CONTEXT_QUESTIONS: ContextQuestion[] = [
  {
    id: "C1",
    stem: "Which best fits your business?",
    options: [
      {
        value: "construction",
        label: "Construction and trades — builders, civil contractors, subcontractors, plant hire",
      },
      {
        value: "industrial",
        label:
          "Manufacturing, fabrication or industrial supply — including suppliers to construction, mining, energy and utilities",
      },
      {
        value: "professional",
        label:
          "Professional services — accounting, legal, engineering consulting, architecture, project management, quantity surveying",
      },
      { value: "other", label: "Something else" },
    ],
  },
  {
    id: "C2",
    stem: "How many people work in the business?",
    options: [
      { value: "under_20", label: "Under 20" },
      { value: "20_50", label: "20 to 50" },
      { value: "51_200", label: "51 to 200" },
      { value: "over_200", label: "Over 200" },
    ],
  },
  {
    id: "C3",
    stem: "What's your role?",
    why: "Your result is written differently depending on what you can actually decide.",
    options: [
      { value: "owner", label: "Owner, partner or MD" },
      { value: "gm_ops", label: "General manager or operations" },
      { value: "finance", label: "Finance" },
      { value: "asked_to_sort_ai", label: "I've been asked to sort out AI" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "C4",
    stem: "Where are you based?",
    why: "For the Queensland benchmark.",
    options: [
      { value: "brisbane", label: "Greater Brisbane" },
      { value: "gc_sc", label: "Gold Coast or Sunshine Coast" },
      {
        value: "regional_qld",
        label:
          "Regional Queensland — Toowoomba, Mackay, Gladstone, Townsville, Cairns and surrounds",
      },
      { value: "interstate", label: "Outside Queensland" },
    ],
  },
  {
    id: "C5",
    stem: "Has a client, a tender or prequal, or an insurer asked how you use AI or handle data?",
    options: [
      { value: "yes_recent", label: "Yes — in the last 12 months" },
      { value: "expecting", label: "Not yet, but we're expecting it" },
      { value: "no", label: "No" },
      { value: "unsure", label: "Not sure" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* The closer — unscored, final tap                                    */
/* ------------------------------------------------------------------ */

export const CLOSER: ContextQuestion = {
  id: "Q17",
  stem: "What would make AI clearly worth it for your business?",
  why: "Pick the one that matters most.",
  options: [
    { value: "win_work", label: "Winning more work — tenders, quotes and proposals out faster" },
    { value: "hours_back", label: "Getting hours back — less time on paperwork, admin and compliance" },
    { value: "fewer_mistakes", label: "Fewer mistakes reaching clients" },
    {
      value: "confidence_data",
      label:
        "Confidence we can use AI without risking client information — and answer when a big client asks",
    },
    { value: "grow_no_headcount", label: "Growing without adding headcount" },
    { value: "not_convinced", label: "Honestly — I'm not convinced it's worth it yet" },
  ],
};

/* ------------------------------------------------------------------ */
/* Flow                                                                */
/* ------------------------------------------------------------------ */

export type Step =
  | { kind: "scored"; question: ScoredQuestion; part: 1 | 2 | 3 }
  | { kind: "context"; question: ContextQuestion }
  | { kind: "closer"; question: ContextQuestion };

/**
 * The exact order a respondent moves through.
 *
 * Part 1 first because the mandated opener (shadow usage) lives there, and
 * because governance questions asked cold read as an audit — asked after the
 * respondent has already disclosed informal use, they follow from their own
 * answers. The context block sits at the first section boundary as a breather,
 * and is deliberately OUTSIDE the "Part x of 3" numbering.
 */
export const STEPS: Step[] = [
  ...PART_1.map((q) => ({ kind: "scored" as const, question: q, part: 1 as const })),
  ...CONTEXT_QUESTIONS.map((q) => ({ kind: "context" as const, question: q })),
  ...PART_2.map((q) => ({ kind: "scored" as const, question: q, part: 2 as const })),
  ...PART_3.map((q) => ({ kind: "scored" as const, question: q, part: 3 as const })),
  { kind: "closer", question: CLOSER },
];

export const TOTAL_STEPS = STEPS.length;

/** Honest count for the entry screen. 16 + 5 + 1 = 22 taps. */
export const COUNTS = {
  scored: SCORED_QUESTIONS.length,
  context: CONTEXT_QUESTIONS.length,
  closer: 1,
  total: TOTAL_STEPS,
} as const;
