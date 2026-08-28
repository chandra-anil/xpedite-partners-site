/**
 * AI Reality Check — results copy library
 * ---------------------------------------
 * Every word a respondent reads on their results page, keyed so the page is
 * assembled deterministically from their score. There is no generation step:
 * the same answers produce the same page, every time.
 *
 * That is a deliberate product decision, not a limitation. For an audience
 * whose main objection to AI is distrust of AI decisions, a machine writing a
 * live verdict about their business re-enacts the fear, and one hallucinated
 * sentence in a trust product is unrecoverable.
 *
 * HOUSE STYLE, ENFORCED. Anil's rules for this route:
 *   • No em-dashes anywhere in user-facing copy. Use a comma, a full stop, or
 *     rewrite the sentence. They read as machine-written.
 *   • No figurative language. If a phrase needs the reader to decode a
 *     metaphor ("it holds until", "pays first", "lands in someone's evening"),
 *     it is wrong. Say the literal thing.
 *   • Assume no context. The reader does not know who Anil is, may not work
 *     somewhere with partners, and has never seen our other pages.
 *
 * Other rules:
 *   • No statistics here. Benchmark figures live in `benchmarks.ts`.
 *   • No prices, ever. Quoted on the first call and confirmed in writing.
 *   • At most ONE of any three decisions may point at Xpedite. For the
 *     out-of-segment route, none may.
 *   • No client names, no invented metrics, no "our team".
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
  name: string;
  headline: string;
  body: string;
}

export const ARCHETYPES: Record<ArchetypeId, ArchetypeCopy> = {
  cautious_observer: {
    name: "Cautious observer",
    headline:
      "AI has not arrived in your business yet, and on these answers nothing is going wrong because of it.",
    body: "Being late only becomes expensive at one moment: when a client, an insurer or a tender asks a question you cannot answer. Until then, starting from nothing is the cheaper position, because you have no habits to undo. You get to choose one use and one rule, instead of unpicking what people have already started doing on their own.",
  },
  ungoverned_adopter: {
    name: "Ungoverned adopter",
    headline:
      "Your people are already using AI. The rules that would make that safe do not exist yet.",
    body: "This is the most common position for a business your size, and it is not a failure. Use almost always arrives before rules do. The exposure is that you cannot answer a straight question about it: which tools, whose information, who checked the output. That question tends to arrive without warning, from a client, an insurer or a tender.",
  },
  governed_starter: {
    name: "Governed starter",
    headline:
      "You have put more thought into the rules than into the use. Little is at risk, and little has changed.",
    body: "Having rules before you have any real use is the rarer problem, and the easier one to fix. You can say yes to something without an argument about whether it is safe, which most businesses your size cannot. This does not put you at risk. It costs you time you could be getting back. Every month nobody uses those rules is another month of hours you could have saved and did not.",
  },
  ready_to_scale: {
    name: "Ready to scale",
    headline:
      "AI works in parts of your business. What holds it back now is structure, not tools or willingness.",
    body: "You have already done the hard part. Real work runs differently, and there are rules around it. What you have is a small number of people carrying that knowledge themselves. It works until one of them takes leave, resigns or gets too busy, and then nobody else can run what they built.",
  },
  compounding_leader: {
    name: "Compounding leader",
    headline:
      "AI is part of how your business runs, and you have built the controls to keep it that way.",
    body: "Very few businesses your size get here. Your risk from now on is not falling behind. It is that what you have built depends on a small number of people staying interested, and that standards drop when nobody is checking. What deserves your attention now is a harder problem, not wider adoption.",
  },
};

/**
 * Prepended to the Ready-to-scale body when two dimensions are Leading and one
 * is only Developing. Without it the reader sees two full bars and a mid-tier
 * verdict and concludes the instrument is broken.
 */
export const READY_TO_SCALE_TWO_LEADING =
  "Two of your three areas are as strong as any result we see. The third one is what is limiting you, which is why your overall result is not higher.";

/* ------------------------------------------------------------------ */
/* B. Dimension band readouts                                          */
/* ------------------------------------------------------------------ */

export const DIMENSION_READOUTS: Record<DimensionId, Record<BandId, string>> = {
  rules: {
    emerging:
      "Nobody owns AI in your business, so nothing about it gets decided until something goes wrong.",
    developing:
      "Some rules exist, but mostly as conversations. If a client asked today how you handle their information in AI tools, you would be working out the answer on the spot.",
    established:
      "A named person owns AI decisions and the biggest risks have had something done about them. You could answer a client's or an insurer's questions without preparing first.",
    leading:
      "AI sits inside the way you already manage risk. Someone owns it, checking is required, and which decisions a person must always make is written down.",
  },
  work: {
    emerging:
      "AI is happening alongside the work rather than inside it. No job costs less, takes less time or comes out more reliably because of it.",
    developing:
      "AI helps individuals get through tasks faster, but no process depends on it. The gains stay with those individuals and stop the moment they get busy.",
    established:
      "At least one regular process runs differently because of AI, and you can point to the step that changed. Most businesses never get that evidence.",
    leading:
      "Several everyday processes have been rebuilt around AI, and you compare results before and after. You can tell which changes paid off and stop the ones that did not.",
  },
  people: {
    emerging:
      "Few people use AI for real work and nobody has been trained, so what happens depends entirely on who decided to try something.",
    developing:
      "A small number of people use AI well. They taught themselves, and what they know would leave with them.",
    established:
      "At least one team uses AI as part of its normal work, and people have been told what not to put into a tool. This no longer depends on one person.",
    leading:
      "AI is part of daily work across the business, more than one person can run it, and your records are in good enough shape to use with it.",
  },
};

/* ------------------------------------------------------------------ */
/* C. Named risks, from the lowest-scoring dimension                   */
/* ------------------------------------------------------------------ */

export interface NamedItem {
  name: string;
  body: string;
}

/**
 * Only the two lower bands carry a risk. A dimension at Established or Leading
 * is not the thing to warn someone about, and inventing a warning for it would
 * be the tell that this is a sales letter.
 */
export const RISKS: Record<DimensionId, Partial<Record<BandId, NamedItem>>> = {
  rules: {
    emerging: {
      name: "Nobody owns the decision",
      body: "AI questions go to whoever happens to be nearest, get answered differently each time, and nothing is written down. The first time a client, an insurer or a tender asks how you handle their information, you will be writing that answer from scratch against their deadline.",
    },
    developing: {
      name: "The rules are not written down",
      body: "What people are allowed to do exists in a few people's heads and in a couple of emails. That works until a new person starts, or someone is rushing to meet a deadline, or a client asks you to put your rules in writing.",
    },
  },
  work: {
    emerging: {
      name: "Nothing has actually changed",
      body: "People are trying AI, but no job takes less time and no output is more reliable because of it. You are carrying whatever risk comes with AI in the business and getting none of the return.",
    },
    developing: {
      name: "Gains you cannot repeat or prove",
      body: "Someone is faster at something and nobody wrote down what they changed. You cannot extend it to another team, and you cannot defend it if it gets questioned. The first busy month, it quietly stops.",
    },
  },
  people: {
    emerging: {
      name: "You do not know what is already in use",
      body: "Software you already pay for has added AI features in the last year. So “we do not use AI” usually means “nobody has checked”. Until someone looks, you cannot say where client information has been going.",
    },
    developing: {
      name: "It depends on one person",
      body: "One or two self-taught people carry your AI use. If they leave, that capability leaves with them. While they are here, nobody else knows enough to judge whether what they are doing is safe.",
    },
  },
};

/* ------------------------------------------------------------------ */
/* D. Named strengths, from the highest-scoring dimension              */
/* ------------------------------------------------------------------ */

export const STRENGTHS: Record<DimensionId, Partial<Record<BandId, NamedItem>>> = {
  rules: {
    established: {
      name: "You can answer the hard question",
      body: "Someone owns this, and the main risks have had something done about them rather than just discussed. When a data questionnaire arrives with a tender or an insurance renewal, you can fill it in honestly instead of stalling.",
    },
    leading: {
      name: "Governed, and you can show it",
      body: "You have named ownership, required checks, and a written rule about which decisions a person must always make. That is now a commercial asset. Most businesses your size cannot show it, and more of them are being asked to.",
    },
  },
  work: {
    established: {
      name: "Real work runs differently",
      body: "At least one regular process has genuinely changed and you can point at the step. That evidence turns the next change from an argument into a decision.",
    },
    leading: {
      name: "You measure it, so you can steer it",
      body: "You compare results before and after, and those numbers have changed what you do. That is why you can stop something that is not working early, which is where most AI money gets wasted elsewhere.",
    },
  },
  people: {
    established: {
      name: "Past the enthusiast stage",
      body: "AI is part of how at least one team works, and people have been told what not to put into a tool. Your use no longer depends on one person staying interested.",
    },
    leading: {
      name: "Capability that survives a resignation",
      body: "More than one person can run this, the way of working is written down, and your records are in good enough shape to use. If your keenest person left next month, the work would carry on.",
    },
  },
};

export function strengthFor(dimension: DimensionId, band: BandId): NamedItem | undefined {
  return STRENGTHS[dimension][band];
}

export function riskFor(dimension: DimensionId, band: BandId): NamedItem | undefined {
  return RISKS[dimension][band];
}

/* ------------------------------------------------------------------ */
/* E. Next three decisions                                             */
/* ------------------------------------------------------------------ */

export interface Decision {
  title: string;
  body: string;
  /** True where the decision points at Xpedite. At most one per set; never for outsegment. */
  pointsAtXpedite?: boolean;
}

export const DECISIONS: Record<ArchetypeId, Record<RouteId, [Decision, Decision, Decision]>> = {
  cautious_observer: {
    construction: [
      {
        title: "Find out what is already being used, before you decide anything.",
        body: "Ask your estimators, your admin lead and your supervisors what software they use, and whether AI is built into it. It takes an afternoon, costs nothing, and usually surprises the owner.",
      },
      {
        title: "Pick the one job you would most want time back on.",
        body: "Tender and prequalification responses, safety and quality paperwork, or chasing variations. Choose one of them, not all three.",
      },
      {
        title: "Decide the one rule you would enforce from Monday.",
        body: "Usually this one: no client details, prices or drawings go into a public AI tool, and here is who to ask when you are not sure. Said once at a pre-start, that puts you ahead of most of your competitors.",
      },
    ],
    professional: [
      {
        title: "Ask your practice manager what is already switched on.",
        body: "Document management, email and practice management systems have all added AI features recently. Find out what is turned on and what it can see.",
      },
      {
        title: "Settle your position on client information before anyone asks.",
        body: "One page: what may go into a tool, what may not, and who decides the unclear cases.",
      },
      {
        title: "Pick the task you would hand over first.",
        body: "First drafts, file notes, research summaries or proposal scoping. Choose where the time saved is worth most, and test it on one job.",
      },
    ],
    outsegment: [
      {
        title: "Check what is already switched on in the software you pay for.",
        body: "You may already have AI features included in a subscription you are not using.",
      },
      {
        title: "Pick one task that takes up hours and test it for two weeks.",
        body: "Judge it on time you can actually count, not on whether it felt clever.",
      },
      {
        title: "Use the free help before you pay anyone.",
        body: "The Australian Government's Digital Solutions program gives small businesses low-cost independent digital advice. ARM Hub in Brisbane works with manufacturers on automation and AI. UniSC runs short courses. Check eligibility with each.",
      },
    ],
  },
  ungoverned_adopter: {
    construction: [
      {
        title: "Put one person's name against AI decisions.",
        body: "Not a committee. One person, announced, so the next AI question has somewhere to go. This is the biggest single gap in your result and it costs nothing to close.",
      },
      {
        title: "Write the two-line rule and say it at the pre-start.",
        body: "What never goes into a public tool, and who to ask when you are not sure.",
      },
      {
        title: "Have your answer ready before someone asks for it.",
        body: "Large clients, head contractors and insurers do send data and IT questionnaires. If you would rather have that pack prepared in advance than write it under deadline, that is worth a conversation with us.",
        pointsAtXpedite: true,
      },
    ],
    professional: [
      {
        title: "Put one name against it, at the next meeting of the people who own the firm.",
        body: "One person, said out loud, so it stops being everyone's job and therefore nobody's.",
      },
      {
        title: "Settle the client information question this month.",
        body: "Decide what may go into which tool, tell your staff, and add a line to your terms of engagement, so an honest answer exists before a client asks for one.",
      },
      {
        title: "Decide whether checking is a requirement or a preference.",
        body: "If AI touched work going out under your name, someone should sign it off. If you want that turned into something the business actually follows, that is worth a conversation with us.",
        pointsAtXpedite: true,
      },
    ],
    outsegment: [
      {
        title: "Put one name against AI decisions.",
        body: "Even in a small business, if it is everyone's job it is nobody's.",
      },
      {
        title: "Write the one rule and say it out loud this week.",
        body: "What must never go into a public AI tool, and who to ask when it is unclear.",
      },
      {
        title: "Take the free help.",
        body: "The Digital Solutions program gives small businesses low-cost independent digital advice. ARM Hub in Brisbane and UniSC short courses cover the practical side. Check eligibility with each.",
      },
    ],
  },
  governed_starter: {
    construction: [
      {
        title: "Pick the one process where hours are actually lost.",
        body: "Tender and prequalification responses, or the paperwork trail of diaries, inspection records and variation claims. Pick one.",
      },
      {
        title: "Make AI a required step in it, not an option.",
        body: "You already have the rules. What is missing is a way of working that someone has to follow.",
      },
      {
        title: "Time it once, before and after.",
        body: "Hours to turn a tender around this month, against last quarter. One honest number tells you whether to do it again.",
      },
    ],
    professional: [
      {
        title: "Choose where saved time is worth most.",
        body: "Aim at the senior time you cannot bill: proposals, reviews, second-guessing a junior's draft, and the write-off at the end of a job. Saving a senior person's chargeable hours just shrinks the invoice.",
      },
      {
        title: "Make it standard on one type of job, and say it is not optional.",
        body: "A permitted tool that nobody is required to use changes nothing.",
      },
      {
        title: "Decide whether you will measure it.",
        body: "If you want the first use chosen and the before-and-after set up so you can show how the number was worked out if someone questions it, that is worth a conversation with us.",
        pointsAtXpedite: true,
      },
    ],
    outsegment: [
      {
        title: "Pick one process, not three.",
        body: "The one that costs you the most hours per week.",
      },
      {
        title: "Make AI a required step in it, and tell people it is required.",
        body: "Rules without use produce nothing.",
      },
      {
        title: "Get outside help for free first.",
        body: "Digital Solutions advisers, ARM Hub, or a short UniSC course will take you further than your result suggests you need to spend.",
      },
    ],
  },
  ready_to_scale: {
    construction: [
      {
        title: "Write down how your best person uses AI, this month.",
        body: "The steps they follow, what they type in, what they check afterwards. One page. That is the difference between a capability the business owns and one person's habit.",
      },
      {
        title: "Decide who is allowed to change what.",
        body: "Which AI changes an estimator or supervisor can make to their own work, and which ones come to you first.",
      },
      {
        title: "Make sure a second person can run everything that matters.",
        body: "If only one person can do it, it is not a process yet. If you would rather not build that structure on your own, we do it as a defined piece of work with an end date.",
        pointsAtXpedite: true,
      },
    ],
    professional: [
      {
        title: "Write down how your best people use AI, while they are still here.",
        body: "One page for each use: the steps they follow, what gets checked, and what is off limits.",
      },
      {
        title: "Decide who is allowed to change what.",
        body: "Which AI changes a team leader can make to their own work, and which ones need a decision from whoever owns AI for the firm.",
      },
      {
        title: "Make sure a second person can run everything that matters.",
        body: "If you want this made durable rather than added to someone's already full list, that is worth a conversation with us.",
        pointsAtXpedite: true,
      },
    ],
    outsegment: [
      {
        title: "Write down how your best person uses AI, this month.",
        body: "The steps they follow, what they type in, and what they check afterwards. Do it while the person who worked it out is still there to explain it.",
      },
      {
        title: "Train a second person on everything that matters.",
        body: "Test it by having them run it while the first person is away.",
      },
      {
        title: "Use the free programs for the next step.",
        body: "ARM Hub and short UniSC courses are aimed at businesses already doing what you are doing. Check eligibility.",
      },
    ],
  },
  compounding_leader: {
    construction: [
      {
        title: "Work out what happens if your key person leaves.",
        body: "Tools are not your risk any more. Depending on one or two people is.",
      },
      {
        title: "Turn what you have built into a commercial argument.",
        body: "Large clients and insurers are starting to ask this question, and you can answer it. Put that in your prequalification pack and your capability statement.",
      },
      {
        title: "Pick a harder problem.",
        body: "The next return is not wider adoption. It is something you would previously have said no to, such as scheduling, estimating accuracy or plant utilisation.",
      },
    ],
    professional: [
      {
        title: "Test how much depends on one person.",
        body: "Have the person who built this take a fortnight off, and see what still runs.",
      },
      {
        title: "Tell clients before they ask.",
        body: "A clear line in your terms of engagement is a differentiator today, and will be expected within a couple of years.",
      },
      {
        title: "Pick a harder problem.",
        body: "Somewhere AI changes what you sell, not just how fast you produce it.",
      },
    ],
    outsegment: [
      {
        title: "Test how much depends on one person.",
        body: "Have your key person step away for a fortnight, and see what still runs.",
      },
      {
        title: "Make it commercial.",
        body: "Being able to answer the AI and data question straight is becoming a reason to choose you. Say so where buyers can see it.",
      },
      {
        title: "If you want an outside view, aim high.",
        body: "ARM Hub works with businesses at this stage on applied AI and automation. The Digital Solutions advisers cover ground you are already past, so do not waste the appointment.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* F. Call to action                                                   */
/* ------------------------------------------------------------------ */

export const CTA_IN_SEGMENT = {
  heading: "Want to talk it through?",
  body: "Twenty minutes with Anil Chandra, who runs Xpedite Partners. You will get a straight answer on which of those three decisions is worth doing first, and the price of anything we would propose, on the call rather than after a scoping exercise.",
  button: "Book 20 minutes",
  /**
   * The second sentence replaces a line that pointed at free government
   * programs, which Anil cut from here. It does the same job, which is to say
   * plainly that we will talk someone out of spending money. Without it, the
   * in-segment path has no version of that signal at the moment of the ask,
   * which is exactly where it was working.
   */
  subline:
    "No preparation needed. Bring your result. If we think you should not spend money on this yet, we will say so on the call.",
  /**
   * Used where the "you may not need us" band is already showing. Repeating
   * the promise there would read as walking the band back.
   */
  sublineWhenAlreadySaid: "No preparation needed. Bring your result.",
};

export const CTA_OUT_OF_SEGMENT = {
  heading: "Where we would point you instead",
  body: "At your size we are not the right first call, and consulting fees would be the wrong use of that money. These cost nothing or close to it, and they are built for businesses like yours: the Australian Government's Digital Solutions program for independent digital advice, ARM Hub in Brisbane for automation and AI, and short UniSC courses your staff can actually finish. Check eligibility with each.",
  subline: "Nobody will call you.",
};

/**
 * Shown above the CTA for Compounding leaders, as a full-width band.
 *
 * It must not be followed by a "but if..." line. The moment this sets up a
 * pitch it becomes the thing it was written to avoid.
 */
export const BAND_MAY_NOT_NEED_US =
  "On these numbers you may not need us yet. What you have built is ahead of most businesses your size, and nothing in your answers points to a gap worth paying someone to close.";

/* ------------------------------------------------------------------ */
/* G. Role framing                                                     */
/* ------------------------------------------------------------------ */

export const ROLE_FRAMING: Record<RoleId, string | undefined> = {
  owner:
    "These are decisions rather than tasks to hand over. Two of the three cost you nothing but an afternoon of attention, and they are the two most owners skip.",
  gm_ops:
    "Most of this will land on you. You cannot fix the parts about who is allowed to decide what. Take those to the owner and get an answer.",
  finance:
    "Two numbers here are yours to find: what AI already costs across subscriptions nobody has counted, and what one process would save if it ran differently. Nobody else in the business can get both.",
  asked_to_sort_ai:
    "Here is what to take back to the owner: where the business is exposed, one thing it is already doing well, and three decisions, two of which need no budget. Send them this page and ask for a decision on the one that needs a name against it. Do not ask for permission to keep researching.",
  // No line for "Other". A generic sentence here would be filler.
  other: undefined,
};

/* ------------------------------------------------------------------ */
/* H. Closer-keyed emphasis                                            */
/* ------------------------------------------------------------------ */

export const CLOSER_EMPHASIS: Record<CloserId, string> = {
  win_work:
    "You said the win is more work out the door. Start where quotes, tenders and proposals are written. That is where saved hours turn into revenue fastest.",
  hours_back:
    "You said you want hours back. Start with admin and compliance paperwork. The work repeats, the information already exists, and a person still checks what comes out.",
  fewer_mistakes:
    "You said fewer mistakes reaching clients. That makes checking and sign-off your first decision. AI is safest exactly where a person still has the last word.",
  confidence_data:
    "You said you want to use AI without risking client information, and to have an answer ready when a big client asks. That comes down to That comes down to three things: who owns it, what the rule is, and whether you can state both without preparing first.",
  grow_no_headcount:
    "You said growth without adding people. That only happens when a process changes, not when individuals get quicker, so these are about processes.",
  not_convinced:
    "You said you are not convinced it is worth it. Fair enough. Nothing below asks you to spend money. The first two are how you find out whether there is anything in this for your business.",
};

/* ------------------------------------------------------------------ */
/* I. Email exchange                                                   */
/* ------------------------------------------------------------------ */

export const EMAIL_EXCHANGE = {
  // Naming the artefact, rather than asking whether they want "a copy of
  // this". Since the save button was removed, this heading is the only route
  // to something they can keep, so it has to say what they get.
  heading: "Want a copy you can forward?",
  body: "You already have the whole result. Nothing is being held back. If it would be useful to have a copy you can keep, or put in front of your leadership team, leave an email address and we will send it.",
  items: [
    "A copy of this result, exactly as it appears here.",
    "Your comparison against other Queensland businesses, and the report we publish from them, once enough have taken part.",
  ],
  fieldLabel: "Email address",
  button: "Send me a copy",
  /**
   * Deliberately does not promise "one email only". A personal email goes to
   * in-segment respondents, and promising silence then emailing is precisely
   * the failure this product exists to avoid.
   */
  reassurance:
    "We do not ask for your phone number and nobody will call you. If you are in the kind of business we work with, Anil Chandra, who runs Xpedite Partners, may send you one personal email about your result. Reply “no thanks” and that is the end of it.",
  privacyMicrocopy:
    "Your answers are stored without your email address either way, and are used only in combined figures that cannot identify your business. Your email address is used only for what you have asked for above.",
  success:
    "Sent. Check your inbox, and your junk folder if it has not arrived in a few minutes.",
};

/* ------------------------------------------------------------------ */
/* Routing                                                             */
/* ------------------------------------------------------------------ */

/**
 * Under-20 businesses route to `outsegment` regardless of sector. They are
 * genuinely better served by the free programs than by senior advisory fees,
 * and saying so is the position the firm has taken publicly.
 *
 * "Something else" at 20+ also lands on `outsegment` decisions, which are
 * generic. That is the honest answer for a business outside the two priority
 * markets, but it still receives the standard offer of a call below, because
 * the constraint is fit rather than size.
 */
export function routeFor(sector: string, headcount: string): RouteId {
  if (headcount === "under_20") return "outsegment";
  if (sector === "professional") return "professional";
  if (sector === "construction" || sector === "industrial") return "construction";
  return "outsegment";
}

/**
 * The out-of-segment CTA is reserved for under-20 businesses. Everyone else
 * gets the offer of a conversation: a 60-person business in an unlisted sector
 * is a real prospect, just not a priority-market one.
 */
export function ctaVariantFor(headcount: string): "in_segment" | "out_of_segment" {
  return headcount === "under_20" ? "out_of_segment" : "in_segment";
}
