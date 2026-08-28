/**
 * Xpedite AI Ready — content configuration for /ai-ready
 * ------------------------------------------------------
 * This is the single source of truth for everything on the AI Ready page that
 * Anil is likely to want to change without a developer.
 *
 * Change a value here, commit, redeploy. Nothing else needs touching.
 *
 * THE ONE VALUE YOU MUST SWAP:  `bookingUrl` (see below).
 */

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface AiReadyStat {
  /** The headline claim. Rendered as the <dt> in the stat list. */
  value: string;
  /** What the claim refers to. Rendered as the <dd>. */
  label: string;
  /**
   * Typographic weight for the value.
   * "lg" = short, punchy claims ($15M+, 700+) set at display size.
   * "md" = phrases that need a smaller, tighter setting so they don't wrap badly.
   * Deliberate: a row where every value is the same size looks machine-generated.
   */
  scale: "lg" | "md";
}

export interface AiReadySector {
  name: string;
  body: string;
  /** The "most start with X" line. Styled distinctly from the body. */
  routing: string;
}

export interface AiReadyDifferentiator {
  title: string;
  /** Body text. If `linkText` is present, it is substituted into this string. */
  body: string;
  /** Optional inline link. `linkText` must appear verbatim inside `body`. */
  linkText?: string;
  linkUrl?: string;
}

export interface AiReadyStep {
  title: string;
  body: string;
}

export interface AiReadyService {
  name: string;
  /** Shown as a badge next to the name. Only used for the free scorecard. */
  badge?: string;
  /** One-line promise, set above the detail. */
  promise: string;
  body: string;
}

export interface AiReadySecondaryService {
  name: string;
  body: string;
}

export interface AiReadyConfig {
  /**
   * ⚠️ SWAP THIS. Destination for every "Book a 20-minute call" button.
   *
   * Currently a mailto so nothing on the page is broken at launch. Replace with
   * the real scheduler link (Calendly / Microsoft Bookings / TidyCal) as soon as
   * it exists — a mailto will convert worse than a calendar.
   *
   * Example: "https://calendly.com/xpeditepartners/20min"
   */
  bookingUrl: string;

  /**
   * Master switch for the AI Reality Check scorecard.
   *
   * false (current) → hero secondary CTA becomes a quiet "coming shortly" text
   *                   link, the Reality Check service card CTA becomes
   *                   "register interest", and the closing secondary CTA is hidden.
   * true            → all three become live links to `scorecardUrl`.
   *
   * Flip to true ONLY once `scorecardUrl` below points at a working tool.
   */
  scorecardEnabled: boolean;

  /** Where the AI Reality Check lives. Ignored while `scorecardEnabled` is false. */
  scorecardUrl: string;

  /**
   * Public independence policy. UNSET on purpose.
   * Leave empty and no link renders. Set it to a real URL (e.g. "/independence")
   * and a "Read our independence policy" link appears under the Independent card.
   * Never point this at a page that does not exist.
   */
  independencePolicyUrl?: string;

  /**
   * Next AI Operating Model Cohort start date, e.g. "Starts 3 March 2026".
   * UNSET on purpose. Leave empty and no date renders on the cohort row.
   */
  cohortDate?: string;

  /** Used for every mailto fallback on the page. */
  contactEmail: string;

  /* --- page content --- */
  stats: AiReadyStat[];
  situation: string[];
  sectors: AiReadySector[];
  differentiators: AiReadyDifferentiator[];
  steps: AiReadyStep[];
  services: AiReadyService[];
  secondaryServices: AiReadySecondaryService[];
}

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

const CONTACT_EMAIL = "info@xpeditepartners.com.au";

export const aiReady: AiReadyConfig = {
  // ⚠️ SWAP THIS ONE. See the note on the type above.
  bookingUrl: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Book a 20-minute call with Xpedite AI Ready"
  )}&body=${encodeURIComponent(
    "Hi Anil,\n\nI'd like to book a 20-minute call about AI in my business.\n\nBusiness name:\nWhat we do:\nRoughly how many staff:\nBest times to call:\n\nThanks,"
  )}`,

  scorecardEnabled: false,
  scorecardUrl: "/ai-ready/reality-check",

  // Unset on purpose — see the type comments. Do not point these at dead pages.
  independencePolicyUrl: undefined,
  cohortDate: undefined,

  contactEmail: CONTACT_EMAIL,

  stats: [
    {
      value: "6 months to 1 week",
      label:
        "how long an improvement took to reach the people using it, across a 1,000+ engineer global engineering organisation",
      scale: "md",
    },
    { value: "$15M+", label: "business value realised over 2 years", scale: "lg" },
    {
      value: "60+ products, 800+ staff",
      label:
        "digital products and delivery teams governed inside some of the world's largest mining and industrial organisations",
      scale: "md",
    },
    {
      value: "Zero to production",
      label: "AI capability built from scratch in an enterprise environment",
      scale: "md",
    },
    { value: "700+", label: "professionals trained globally", scale: "lg" },
  ],

  situation: [
    "A few tools bought, a few subscriptions running, nothing you can point to as a result.",
    "Staff using AI in ways nobody has agreed to, sometimes with client information.",
    "A major customer or government client has started asking AI, data and security questions in tenders and prequalification.",
    "A pilot that looked promising, then quietly stopped, usually because nobody owned it rather than because the tool was wrong.",
    "Competitors turning around quotes and tenders faster than you can.",
    "Nobody owns AI in the business, so progress depends on whoever is interested this month.",
  ],

  sectors: [
    {
      name: "Industrial supply chain",
      body: "Mining services, engineering and technical services, manufacturers, and suppliers to mining, energy, utilities and government. Your biggest customers are about to ask you hard questions about AI and data. We know what they will ask, because we have worked on their side of the table.",
      routing: "Most start with the Governance Pack or the Readiness Assessment.",
    },
    {
      name: "Construction",
      body: "Head contractors, civil contractors, subcontractors and trade businesses. Tenders, progress claims, WHS documentation, site diaries and QA records are exactly where AI saves real hours, if it is set up and governed properly.",
      routing: "Most construction businesses start with the Governance Pack.",
    },
    {
      name: "Professional and technical services",
      body: "Engineering consultancies, accounting, legal, architecture and project management firms. The biggest gains and the biggest confidentiality risks in one place. Both need to be managed deliberately.",
      routing: "Most professional firms start with the Readiness Assessment.",
    },
  ],

  differentiators: [
    {
      title: "Independent.",
      body: "We do not resell software. We do not take commissions. We are not the right fit if you want a software recommendation from someone who earns a commission on it. If we ever refer you to anyone, the relationship is disclosed in writing. Our only revenue is the advice and implementation you pay for.",
    },
    {
      title: "Senior only.",
      body: "You work with the principal and hand-picked senior practitioners. No juniors, no rotating consultants, no handovers.",
    },
    {
      title: "Governed by default.",
      body: "Every engagement is aligned to the National AI Centre's six essential practices for safe AI adoption. Clear accountability, human control, and answers you can give your customers, your insurer and your board.",
      linkText: "six essential practices",
      linkUrl:
        "https://www.ai.gov.au/staying-safe-and-responsible/essential-ai-practices/guidance-ai-adoption-foundations",
    },
    {
      title: "Measured.",
      body: "Baselines in week one, so you can see what changed and what it was worth. If something is not working, we tell you.",
    },
  ],

  steps: [
    {
      title: "A 20-minute call.",
      body: "You describe the business and where AI sits today. We tell you honestly whether we can help, which service fits, and what it costs. If none fits, we point you somewhere free.",
    },
    {
      title: "A two-week assessment.",
      body: "Fixed price, agreed up front. You get a scorecard, a shortlist of the jobs in your business where AI will actually pay off, and a 90-day plan, ending in a decision meeting.",
    },
    {
      title: "You decide.",
      body: "Run the plan yourself, run it with us as a sprint or retainer, or stop. Some businesses only ever need the assessment. That is a fine outcome.",
    },
  ],

  services: [
    {
      name: "AI Reality Check",
      badge: "Free",
      promise: "Find out where you stand in 10 minutes.",
      body: "Answer a short set of questions and get an instant readiness result across governance, operations and capability.",
    },
    {
      name: "AI Governance Pack",
      promise: "Answer your biggest customer's AI questions with confidence.",
      body: "An AI policy, an AI register, a vendor and tool checklist, customer disclosure wording, an incident process, and one training session for your team. Aligned to the National AI Centre's six essential practices. Delivered in two to three weeks.",
    },
    {
      name: "AI Readiness Assessment",
      promise: "Know exactly what to do in the next 90 days.",
      body: "Two weeks, senior-led: interviews, a tool and data audit, a governance gap check, a shortlist of the jobs where AI will pay off in your business, a board-ready scorecard and a 90-day plan. Ends with a decision meeting, not a report handover.",
    },
  ],

  secondaryServices: [
    {
      name: "90-Day AI Acceleration Sprint",
      body: "Two or three of those jobs working in your daily operations, with the policy, roles and routines to keep them there. Workflow redesign, team capability, and measurement against week-one baselines.",
    },
    {
      name: "AI Operating Partner",
      body: "A senior AI advisor on call. A quarterly plan, monthly steering, tool and vendor decisions, governance, and the first phone call when something goes wrong. AI keeps moving in your business without the owner carrying it alone. Monthly retainer, six-month minimum.",
    },
    {
      name: "AI Operating Model Cohort",
      body: "Work through it alongside 8 to 12 other owners in your sector over eight weeks. One session a week plus office hours. You leave with your AI policy, your register, a use-case plan and a 90-day roadmap.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

/** Build a mailto for the page's "register interest" style CTAs. */
export function interestMailto(subject: string, body?: string): string {
  const q = new URLSearchParams({ subject });
  if (body) q.set("body", body);
  return `mailto:${aiReady.contactEmail}?${q.toString()}`;
}

/** Where the scorecard CTAs should point, given the current switch. */
export const scorecardHref = aiReady.scorecardEnabled
  ? aiReady.scorecardUrl
  : interestMailto(
      "AI Reality Check",
      "Hi Anil,\n\nPlease let me know when the AI Reality Check is available.\n\nBusiness name:\n\nThanks,"
    );
