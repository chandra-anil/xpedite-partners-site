/**
 * AI Reality Check — results copy library
 * ---------------------------------------
 * Every word a respondent reads on their results page, keyed so the page is
 * assembled deterministically from their score. There is no generation step:
 * the same answers produce the same page, every time.
 *
 * That is a deliberate product decision, not a limitation. For an audience
 * whose main objection to AI is distrust of AI decisions, a machine writing a
 * live verdict about their business re-enacts the fear — and one hallucinated
 * sentence in a trust product is unrecoverable. The expertise is demonstrated
 * by the published methodology and register, not by generating prose.
 *
 * Rules for editing:
 *   • No statistics here. Benchmark figures live in `benchmarks.ts`, cited,
 *     verified, and in one place so they can be checked in one place.
 *   • No prices, ever. Xpedite quotes on the first call and confirms in writing.
 *   • At most ONE of any three decisions may point at Xpedite. For the
 *     out-of-segment route, none may.
 *   • No client names, no invented metrics, no "our team" — Xpedite is one
 *     principal and a named associate network.
 */

import type { ArchetypeId, BandId } from "@/lib/reality-check/scoring";
import type { DimensionId } from "./questions";

/** Which set of decisions and sector copy a respondent gets. */
export type RouteId = "construction" | "professional" | "outsegment";

export type RoleId = "owner" | "gm_ops" | "finance" | "asked_to_sort_ai" | "other";

export type CloserId =
  | "win_work"
  | "hours_back"
  | "fewer_mistakes"
  | "confidence_data"
  | "grow_no_headcount"
  | "not_convinced";

/* ------------------------------------------------------------------ */
/* A. Archetype narratives                                             */
/* ------------------------------------------------------------------ */

export interface ArchetypeCopy {
  /** The name shown as the headline. Sentence case, full stop, no exclamation. */
  name: string;
  headline: string;
  body: string;
}

export const ARCHETYPES: Record<ArchetypeId, ArchetypeCopy> = {
  cautious_observer: {
    name: "Cautious observer",
    headline:
      "AI hasn't landed in your business yet, and on these answers nothing is breaking because of it.",
    body: "Being last only gets expensive at one moment — when a client, an insurer or a tender asks a question you can't answer. Until then, starting from nothing is the cheaper position: you have no habits to undo. You get to choose one use and one rule, instead of unwinding what people have already started doing on their own.",
  },
  ungoverned_adopter: {
    name: "Ungoverned adopter",
    headline:
      "Your people are already using AI. The rules that would make that safe don't exist yet.",
    body: "This is the most common position for a business your size, and it isn't a failure — use always arrives before rules do. The exposure is that you can't answer a straight question about it: which tools, whose information, who checked the output. That question arrives from a client, an insurer or a prequal pack, and it arrives without notice.",
  },
  governed_starter: {
    name: "Governed starter",
    headline:
      "You've put more thought into the rules than into the use. Little is at risk, and little has changed.",
    body: "Rules ahead of use is the rarer problem and the easier one to fix. You can say yes to something without an argument about whether it's safe, which most businesses your size can't. What this position costs you is opportunity, not risk — every month the rules sit unused is a month of hours you didn't get back.",
  },
  ready_to_scale: {
    name: "Ready to scale",
    headline:
      "AI works in parts of your business. What holds it back now is structure, not tools or willingness.",
    body: "You've cleared the hard part — real work runs differently, and there are rules around it. What you have is a handful of people carrying that in their heads. It holds until one of them takes leave, resigns or gets too busy, and it turns out nobody else can run what they built.",
  },
  compounding_leader: {
    name: "Compounding leader",
    headline:
      "AI is part of how your business runs, and you've built the controls to keep it that way.",
    body: "Very few businesses your size get here. Your risk from now on isn't falling behind — it's that what you've built depends on a small number of people staying interested, and that standards slip quietly when nobody's checking. What's worth your attention is a harder problem, not wider adoption.",
  },
};

/**
 * Prepended to the Ready-to-scale body when two dimensions are Leading and one
 * is only Developing. The archetype rules resolve that shape to Ready to scale,
 * which is right — the Developing dimension is the constraint — but without
 * this line the reader sees two Leading bars and a mid-tier verdict and
 * concludes the instrument is broken.
 */
export const READY_TO_SCALE_TWO_LEADING =
  "Two of your three areas are as strong as any result we see. The third one is what's capping them, which is why this reads as structure rather than a scoring problem.";

/* ------------------------------------------------------------------ */
/* B. Dimension band readouts                                          */
/* ------------------------------------------------------------------ */

export const DIMENSION_READOUTS: Record<DimensionId, Record<BandId, string>> = {
  rules: {
    emerging:
      "No one owns AI in your business, so nothing about it gets decided until something goes wrong.",
    developing:
      "Some rules exist, mostly in conversation; if a client asked today how you handle their information in AI tools, you'd be assembling the answer on the spot.",
    established:
      "A named person owns AI decisions and the biggest risks have had something done about them, so you could answer a client's or insurer's questions without rehearsing.",
    leading:
      "AI sits inside how you already manage risk: someone owns it, checking is required, and the line a machine can't cross is written down.",
  },
  work: {
    emerging:
      "AI is happening beside the job rather than inside it, so no work costs less, takes less time or comes out more reliably because of it.",
    developing:
      "AI helps individuals get through tasks faster, but no process depends on it, so the gains stay personal and vanish the week that person is flat out.",
    established:
      "At least one regular process runs differently because of AI and you can point to the step that changed, which is the evidence most businesses never get.",
    leading:
      "Several everyday processes have been rebuilt around AI and you compare before and after, so you can tell which changes paid and stop the ones that didn't.",
  },
  people: {
    emerging:
      "Few people use AI for real work and nobody has been trained, so whatever happens depends entirely on who felt like trying something.",
    developing:
      "A small number of people use AI well, they taught themselves, and the know-how would walk out with them.",
    established:
      "At least one team uses AI as part of its normal work and people have been told what not to put into a tool, so this no longer sits in one head.",
    leading:
      "AI is part of daily work across the business, more than one person can run it, and your records are in good enough shape to feed it.",
  },
};

/* ------------------------------------------------------------------ */
/* C. Named risks — from the lowest-scoring dimension                  */
/* ------------------------------------------------------------------ */

export interface NamedItem {
  name: string;
  body: string;
}

/**
 * Only the two lower bands carry a risk. A dimension sitting at Established or
 * Leading is not the thing to warn someone about, and inventing a warning for
 * it would be the tell that this is a sales letter.
 */
export const RISKS: Record<DimensionId, Partial<Record<BandId, NamedItem>>> = {
  rules: {
    emerging: {
      name: "No one owns the decision",
      body: "AI questions land on whoever happens to be nearest, get answered differently each time, and nothing is written down. The first time a client, insurer or head contractor asks how you handle their information, you'll be writing that answer from scratch against their deadline.",
    },
    developing: {
      name: "Rules that live in conversation",
      body: "What people are allowed to do exists in a few heads and a couple of emails. It holds until someone new starts, someone is under deadline pressure, or someone asks you to put it in writing.",
    },
  },
  work: {
    emerging: {
      name: "Nothing has actually changed",
      body: "People are trying AI, but no job takes less time and no output is more reliable because of it. You're carrying whatever risk comes with AI in the business and getting none of the return.",
    },
    developing: {
      name: "Gains you can't repeat or prove",
      body: "Someone is faster at something and nobody wrote down what they changed, so you can't extend it to another team or defend it when it gets questioned. The first busy month, it quietly stops.",
    },
  },
  people: {
    emerging: {
      name: "You don't know what's already in use",
      body: "Software you already pay for has shipped AI features in the last year, so “we don't use AI” is usually “nobody has checked”. Until someone looks, you can't say where client information has been going.",
    },
    developing: {
      name: "It lives in one person's head",
      body: "One or two self-taught people carry your AI use. If they leave, the capability leaves — and while they're here, nobody else knows enough to tell whether what they're doing is safe.",
    },
  },
};

/* ------------------------------------------------------------------ */
/* D. Named strengths — from the highest-scoring dimension             */
/* ------------------------------------------------------------------ */

export const STRENGTHS: Record<DimensionId, Partial<Record<BandId, NamedItem>>> = {
  rules: {
    established: {
      name: "You can answer the hard question",
      body: "Someone owns this, and the main risks have had something done about them rather than just discussed. When the data questionnaire arrives with a tender or an insurance renewal, you can complete it honestly instead of stalling.",
    },
    leading: {
      name: "Governed, and you can show it",
      body: "Named ownership, required checks, and a written line on what a machine doesn't get to decide. That's now a commercial asset — most businesses your size can't show it, and more of them are being asked to.",
    },
  },
  work: {
    established: {
      name: "Real work runs differently",
      body: "At least one regular process has genuinely changed and you can point at the step. That's the evidence that turns the next change from an argument into a decision.",
    },
    leading: {
      name: "You measure it, so you can steer it",
      body: "You compare before and after, and the numbers have changed what you do. That's why you can kill something that isn't working early, which is where most AI money gets wasted elsewhere.",
    },
  },
  people: {
    established: {
      name: "Past the enthusiast stage",
      body: "AI is part of how at least one team works, and people have been told what not to put into a tool. Your use no longer depends on one person staying interested.",
    },
    leading: {
      name: "Capability that survives a resignation",
      body: "More than one person can run this, the way of working is written down, and your records are in shape to feed it. If your keenest person left next month, the work would carry on.",
    },
  },
};

/**
 * If the strongest dimension is still Emerging or Developing there is no honest
 * strength to name, and manufacturing one would undo the credibility the rest
 * of the page is built on. The results page omits the strength block entirely
 * in that case — the archetype body already carries the encouragement.
 */
export function strengthFor(
  dimension: DimensionId,
  band: BandId
): NamedItem | undefined {
  return STRENGTHS[dimension][band];
}

export function riskFor(
  dimension: DimensionId,
  band: BandId
): NamedItem | undefined {
  return RISKS[dimension][band];
}

/* ------------------------------------------------------------------ */
/* E. Next three decisions                                             */
/* ------------------------------------------------------------------ */

export interface Decision {
  /** The decision itself. Bolded on the page. */
  title: string;
  body: string;
  /** True where the decision points at Xpedite. At most one per set; never for outsegment. */
  pointsAtXpedite?: boolean;
}

export const DECISIONS: Record<ArchetypeId, Record<RouteId, [Decision, Decision, Decision]>> = {
  cautious_observer: {
    construction: [
      {
        title: "Find out what's already in use before you decide anything.",
        body: "Ask your estimators, your admin lead and your supervisors what software they use and whether AI is built into it — an afternoon, no cost, and it usually surprises the owner.",
      },
      {
        title: "Pick the one job you'd want back first.",
        body: "Tender and prequal responses, SWMS and QA paperwork, or chasing variations — one of them, not all three.",
      },
      {
        title: "Decide the one rule you'd enforce from Monday.",
        body: "Usually: no client details, prices or drawings into a public AI tool, and here's who to ask when it's borderline. Said at a pre-start, that puts you ahead of most of your competitors.",
      },
    ],
    professional: [
      {
        title: "Ask your practice manager what's already switched on.",
        body: "Document management, email and practice management systems have shipped AI features recently; find out what's on and who it can see.",
      },
      {
        title: "Settle your position on client information before anyone asks.",
        body: "One page: what may go into a tool, what may not, and who decides the grey ones.",
      },
      {
        title: "Pick the task you'd hand over first.",
        body: "First drafts, file notes, research summaries or proposal scoping — choose where the time freed is worth most, and test it on one matter.",
      },
    ],
    outsegment: [
      {
        title: "Check what's already switched on in the software you pay for.",
        body: "You may already have AI features included in a subscription you're not using.",
      },
      {
        title: "Pick one task that eats hours and test it for two weeks.",
        body: "Judge it on time you can actually name, not on whether it felt clever.",
      },
      {
        title: "Use the free help before you pay anyone.",
        body: "The Australian Government's Digital Solutions program provides low-cost independent digital advice to small businesses; ARM Hub in Brisbane works with manufacturers on automation and AI; UniSC runs short micro-credential courses. Check eligibility with each.",
      },
    ],
  },
  ungoverned_adopter: {
    construction: [
      {
        title: "Put one name against it.",
        body: "Not a committee — one person, announced, so the next AI question has somewhere to go. This is the single biggest gap in your result and it costs nothing.",
      },
      {
        title: "Write the two-line rule and say it at the pre-start.",
        body: "What never goes into a public tool, and who to ask when it's borderline.",
      },
      {
        title: "Have the prequal answer ready before the prequal asks.",
        body: "Head contractors and insurers increasingly send data and IT schedules. If you'd rather have that pack built — policy, tool register, disclosure wording — than draft it under deadline, that's the conversation to have with Anil.",
        pointsAtXpedite: true,
      },
    ],
    professional: [
      {
        title: "Name who owns it, at the next partners' meeting.",
        body: "One partner or manager, said out loud, so it stops being everyone's and no one's.",
      },
      {
        title: "Settle the client information question this month.",
        body: "Decide what may go into which tool, tell staff, and add a line to your terms of engagement so an honest answer exists before a client asks for one.",
      },
      {
        title: "Decide whether checking is a requirement or a preference.",
        body: "If AI touched work going out under your name, someone signs it off. If you want that turned into something the firm actually follows, that's what a conversation with Anil is for.",
        pointsAtXpedite: true,
      },
    ],
    outsegment: [
      {
        title: "Put one name against AI decisions.",
        body: "Even in a small business, “everyone” means no one.",
      },
      {
        title: "Write the one rule and say it out loud this week.",
        body: "What must never go into a public AI tool, and who to ask when it's unclear.",
      },
      {
        title: "Take the free help.",
        body: "The Digital Solutions program gives small businesses low-cost independent digital advice; ARM Hub in Brisbane and UniSC micro-credentials cover the practical side. Check eligibility with each.",
      },
    ],
  },
  governed_starter: {
    construction: [
      {
        title: "Pick the one process where hours actually leak.",
        body: "Tender and prequal responses, or the paperwork trail — diaries, ITPs, variation claims. One.",
      },
      {
        title: "Make AI a required step in it, not an option.",
        body: "You already have the rules; what's missing is a way of working someone has to follow.",
      },
      {
        title: "Time it once, before and after.",
        body: "Hours to turn a tender around this month against last quarter. One honest number decides whether you do it again.",
      },
    ],
    professional: [
      {
        title: "Choose where freed time is worth most.",
        body: "Aim at senior hours, not junior ones — that's where the economics actually move.",
      },
      {
        title: "Make it standard on one matter type and say it isn't optional.",
        body: "A permitted tool nobody is required to use changes nothing.",
      },
      {
        title: "Decide whether you'll measure it.",
        body: "If you want the first use chosen and the before-and-after set up so the number holds when a partner questions it, that's the assessment conversation with Anil.",
        pointsAtXpedite: true,
      },
    ],
    outsegment: [
      {
        title: "Pick one process, not three.",
        body: "The one that costs you the most hours per week.",
      },
      {
        title: "Make AI a required step in it and tell people it is.",
        body: "Rules without use produce nothing.",
      },
      {
        title: "Get outside help for free first.",
        body: "Digital Solutions advisers, ARM Hub, or a UniSC micro-credential will take you further than your result suggests you need to spend.",
      },
    ],
  },
  ready_to_scale: {
    construction: [
      {
        title: "Write down what your best person does, this month.",
        body: "Steps, prompts, checks — one page. That's the difference between a capability and a person.",
      },
      {
        title: "Set the decision line.",
        body: "Which AI changes an estimator or supervisor can make on their own work, and which come to you.",
      },
      {
        title: "Put a second person on everything that matters.",
        body: "If only the builder can run it, it isn't a process yet, it's a person. If you'd rather not build that structure alone, Anil does it as a defined engagement with an end date.",
        pointsAtXpedite: true,
      },
    ],
    professional: [
      {
        title: "Write it down while the person who built it is still here.",
        body: "One page per use: the steps, what gets checked, what's off-limits.",
      },
      {
        title: "Set the decision line.",
        body: "Which AI changes a team lead can make for their own files, and which need the partners.",
      },
      {
        title: "Name a second person for each thing that matters.",
        body: "If you want this made durable rather than added to a partner's list, that's the assessment conversation with Anil.",
        pointsAtXpedite: true,
      },
    ],
    outsegment: [
      {
        title: "Write down how it's done, this month.",
        body: "While the person who built it is still here to explain it.",
      },
      {
        title: "Train a second person on each thing that matters.",
        body: "Test it by having them run it while the first person is away.",
      },
      {
        title: "Use the free programs for the next step.",
        body: "ARM Hub and UniSC micro-credentials are pitched at businesses doing what you're already doing; check eligibility.",
      },
    ],
  },
  compounding_leader: {
    construction: [
      {
        title: "Work out what happens if your key person leaves.",
        body: "Tools aren't your risk any more. Concentration is.",
      },
      {
        title: "Turn what you've built into a commercial argument.",
        body: "Large clients and insurers are starting to ask this question, and you can answer it — put that in your prequal pack and your capability statement.",
      },
      {
        title: "Pick a harder problem.",
        body: "The next return isn't wider adoption; it's something you'd previously have said no to — programme scheduling, estimating accuracy, plant utilisation.",
      },
    ],
    professional: [
      {
        title: "Test the concentration risk.",
        body: "Have the person who built this take a fortnight off and see what still runs.",
      },
      {
        title: "Say it to clients before they ask.",
        body: "A clear line in your terms of engagement is a differentiator today and will be expected within a couple of years.",
      },
      {
        title: "Pick a harder problem.",
        body: "Where AI changes what you sell, not just how fast you produce it.",
      },
    ],
    outsegment: [
      {
        title: "Test the concentration risk.",
        body: "Have your key person step away for a fortnight and see what holds.",
      },
      {
        title: "Make it commercial.",
        body: "Being able to answer the AI and data question straight is becoming a reason to choose you — say so where buyers can see it.",
      },
      {
        title: "If you want an outside view, go peer-level.",
        body: "ARM Hub works with businesses at this stage on applied AI and automation; the Digital Solutions advisers sit below where you already are, so don't waste the appointment.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* F. Call to action                                                   */
/* ------------------------------------------------------------------ */

export const CTA_IN_SEGMENT = {
  heading: "Want to talk it through?",
  body: "Twenty minutes with Anil. You'll get a straight read on which of those three decisions is worth doing first, and the price of anything we'd propose — on the call, not after a scoping exercise. If a free government program is the better next step for you, we'll say that instead.",
  button: "Book 20 minutes with Anil",
  subline: "No preparation needed. Bring the result.",
};

export const CTA_OUT_OF_SEGMENT = {
  heading: "Where we'd point you instead",
  body: "On your size, we're not the right first call, and consulting fees would be the wrong use of that money. These cost nothing or close to it, and they're built for businesses like yours: the Australian Government's Digital Solutions program (independent, low-cost digital advice), ARM Hub in Brisbane (automation and AI for manufacturers), and UniSC micro-credentials (short courses your staff can actually finish). Check eligibility with each.",
  subline: "Nobody will call you. If the monthly briefing is useful, it's below.",
};

/**
 * Shown above the CTA for Compounding leaders, as a full-width ink band.
 *
 * It must not be followed by a "but if…" line. The moment this sets up a pitch
 * it becomes the thing it was written to avoid. The standard CTA still sits
 * further down the page for anyone who wants it — that is sufficient.
 */
export const BAND_MAY_NOT_NEED_US =
  "On these numbers you may not need us yet. What you've built is ahead of most businesses your size, and nothing in your answers points to a gap worth paying someone to close.";

/* ------------------------------------------------------------------ */
/* G. Role framing                                                     */
/* ------------------------------------------------------------------ */

export const ROLE_FRAMING: Record<RoleId, string | undefined> = {
  owner:
    "These are decisions, not tasks to hand over. Two of the three cost you nothing but an afternoon of attention, and they're the two most owners skip.",
  gm_ops:
    "Most of this will land on you. The parts about who's allowed to decide what aren't yours to solve sideways — take those to the owner or the partners and get an answer.",
  finance:
    "Two numbers here are yours to find: what AI already costs across subscriptions nobody has counted, and what one process would save if it ran differently. Nobody else in the business can get both.",
  asked_to_sort_ai:
    "Here's what to take back to the owner: where the business is exposed, one thing it's already doing well, and three decisions — two of which need no budget. Send them this page, and ask for a decision on the one that needs a name against it. Don't ask for permission to keep researching.",
  // No line for "Other" — a generic sentence here would be filler, and the page
  // reads perfectly well without one.
  other: undefined,
};

/* ------------------------------------------------------------------ */
/* H. Closer-keyed emphasis                                            */
/* ------------------------------------------------------------------ */

export const CLOSER_EMPHASIS: Record<CloserId, string> = {
  win_work:
    "You said the win is more work out the door. Start where quoting, tendering and proposals are made — that's where hours turn into revenue fastest.",
  hours_back:
    "You said you want hours back. Admin and compliance work pays first: the work repeats, the information already exists, and a person still checks what comes out.",
  fewer_mistakes:
    "You said fewer mistakes reaching clients. That makes checking and sign-off your first decision — AI is safest exactly where a person still has the last word.",
  confidence_data:
    "You said you want to use AI without risking client information, and to have an answer ready when a big client asks. That comes down to who owns it, what the rule is, and whether you can say both out loud.",
  grow_no_headcount:
    "You said growth without adding people. That only happens when a process changes, not when individuals get quicker — so these are about processes.",
  not_convinced:
    "You said you're not convinced it's worth it. Fair enough. Nothing below asks you to spend money; the first two are how you find out whether there's anything in this for your business.",
};

/* ------------------------------------------------------------------ */
/* I. Email exchange                                                   */
/* ------------------------------------------------------------------ */

export const EMAIL_EXCHANGE = {
  heading: "Want this as a page you can send?",
  body: "You already have the whole result — nothing is held back behind this. If it's useful as a one-page PDF you can put in front of your leadership team, or attach to a client's data questionnaire, leave an email and we'll send it.",
  items: [
    "Your result as a one-page PDF, the same document you're reading.",
    "Your Queensland percentile, sent when this dataset reaches 100 responses. We won't report one before then.",
  ],
  fieldLabel: "Email address",
  button: "Send me the PDF",
  /**
   * Deliberately does not promise "one email only". The follow-up rule sends a
   * personal email to in-segment respondents; promising silence and then
   * emailing is precisely the failure this product exists to avoid.
   */
  reassurance:
    "We don't ask for your phone number and nobody will call you. If you're in the kind of business we work with, Anil may send you one personal email about what's in your result — reply “no thanks” and that's the end of it.",
  privacyMicrocopy:
    "Your answers are stored without your email either way and feed the de-identified Queensland report. Your email is used only for what you've asked for above.",
  consentLabel:
    "Send me the monthly briefing: what's actually working for Queensland businesses on AI, once a month. Unsubscribe any time.",
  success:
    "Sent. Check your inbox — if it hasn't arrived in a few minutes, look in your junk folder.",
};

/* ------------------------------------------------------------------ */
/* Routing                                                             */
/* ------------------------------------------------------------------ */

/**
 * Which decision set and sector layer a respondent gets.
 *
 * Under-20 businesses route to `outsegment` regardless of sector: they are
 * genuinely better served by the free government programs than by senior
 * advisory fees, and saying so is the position the firm has taken publicly.
 *
 * "Something else" at 20+ also lands on `outsegment` decisions, which are
 * generic and free-programs-first. That is the honest answer for a business
 * outside the two priority markets — but it still receives the standard call
 * offer below, because the constraint is fit, not size.
 */
export function routeFor(sector: string, headcount: string): RouteId {
  if (headcount === "under_20") return "outsegment";
  if (sector === "professional") return "professional";
  if (sector === "construction" || sector === "industrial") return "construction";
  return "outsegment";
}

/**
 * The out-of-segment CTA ("we're not the right first call") is reserved for
 * under-20 businesses. Everyone else gets the offer of a conversation — a
 * 60-person business in an unlisted sector is a real prospect, just not a
 * priority-market one.
 */
export function ctaVariantFor(headcount: string): "in_segment" | "out_of_segment" {
  return headcount === "under_20" ? "out_of_segment" : "in_segment";
}
