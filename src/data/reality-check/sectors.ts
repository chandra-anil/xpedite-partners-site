/**
 * AI Reality Check — the sector layer
 * -----------------------------------
 * What stops the results page reading as a template. The generic archetype and
 * dimension copy in `narrative.ts` says what the score means; this file says
 * where it shows up in the reader's actual work — the documents they handle,
 * named.
 *
 * Two things in here were corrected by sector review and must not drift back:
 *
 * 1. QUEENSLAND GOVERNMENT PREQUALIFICATION DOES NOT ASK ABOUT AI OR DATA
 *    SECURITY. Checked 27 Aug 2026: the PQC checklist for building contractors
 *    covers financial capacity, licensing, insurance, and third-party-certified
 *    safety, quality and environmental systems. It says nothing about data or
 *    AI. The pressure is real but it arrives through insurance renewals and
 *    through contractual flow-down from large clients — not through prequal.
 *    Construction owners will know if we get this wrong.
 *
 * 2. THE PROFESSIONAL OBLIGATIONS BLOCK IS THE MOST CHECKABLE COPY ON THE SITE.
 *    Every regulatory reference in it was verified against a primary or
 *    near-primary source and is dated. A partner will know these rules better
 *    than we do. Do not add a claim here without a source, and do not let one
 *    go stale — TPB, QLS and court practice directions all move.
 */

import type { BandId } from "@/lib/reality-check/scoring";
import type { DimensionId } from "./questions";
import type { NamedItem } from "./narrative";

/** Sectors with a bespoke layer. "other" deliberately has none. */
export type SectorKey = "construction" | "industrial" | "professional";

export function sectorKeyFor(sector: string): SectorKey | undefined {
  if (sector === "construction" || sector === "industrial" || sector === "professional") {
    return sector;
  }
  return undefined;
}

/** Prefix shown above the sector line on each dimension. */
export const SECTOR_LINE_PREFIX = "For a business like yours, this usually shows up as";

/* ------------------------------------------------------------------ */
/* Dimension × band, per sector                                        */
/* ------------------------------------------------------------------ */

export const SECTOR_LINES: Record<
  SectorKey,
  Record<DimensionId, Record<BandId, string>>
> = {
  construction: {
    people: {
      emerging:
        "tenders, site diaries and claim backup still getting written from scratch every time, with the only person who knows where the last good version lives being the person who wrote it.",
      developing:
        "one person — usually an estimator or a contract administrator — having quietly worked out that a scope letter takes a fraction of the time now, and nobody else in the business knowing how they do it.",
      established:
        "a team using it as a matter of course — contract administrators on RFIs and variation write-ups, or HSEQ on SWMS and toolbox material — with at least one session behind them on what not to paste in.",
      leading:
        "capability that survives a resignation: how your people use AI on estimates, claims and reporting is written down, more than one person can run it, and a new starter gets shown it in week one.",
    },
    work: {
      emerging:
        "the progress claim, the ITP pack and the monthly client report getting assembled the same way they were five years ago, with any AI use being someone experimenting between jobs.",
      developing:
        "help with the odd task — a difficult letter to the superintendent, a first cut at a method statement — but no step in the claim cycle or the tender programme depending on it, so a busy month pushes it aside.",
      established:
        "at least one regular step genuinely done differently — first-draft variation write-ups, RFI responses, or the narrative in the monthly report — and you could point at the step that changed.",
      leading:
        "several everyday things running differently — how an estimate gets handed to delivery, how claim backup is assembled, how the monthly report gets written — with real before-and-after numbers on at least one.",
    },
    rules: {
      emerging:
        "nobody owning it, so if AI-drafted wording ended up in a variation claim or a SWMS and turned out to be wrong, there's no version of events where you'd find out how it got there.",
      developing:
        "someone having said out loud that client drawings and pricing shouldn't go into public tools — but it's a conversation, not a rule, and nobody checks a new tool before it gets used on real work.",
      established:
        "a named person, an agreed list of tools, and a check before AI-touched work leaves the office — the same discipline you already run on a hold point or an ITP sign-off, applied to documents.",
      leading:
        "being able to answer a client's data and AI questions in writing today — who's accountable, which tools are approved, what gets checked and by whom — without stopping work to invent it.",
    },
  },
  industrial: {
    people: {
      emerging:
        "quotes, job cards and supplier correspondence getting rebuilt from scratch every time, with what a good one looks like sitting in one estimator's folder.",
      developing:
        "one person — usually an estimator or a technical salesperson — having quietly worked out that a covering note takes a fraction of the time now, and nobody else in the business knowing how they do it.",
      established:
        "a team using it as a matter of course — quoting and technical sales on customer enquiries, or QA on procedures and non-conformance write-ups — with at least one session behind them on what not to paste in.",
      leading:
        "capability that survives a resignation: how your people use AI on quotes, job packs and reporting is written down, more than one person can run it, and a new starter gets shown it in week one.",
    },
    work: {
      emerging:
        "quotes, works orders and the monthly customer report getting assembled the same way they were five years ago, with any AI use being someone experimenting between jobs.",
      developing:
        "help with the odd task — a difficult customer email, a first cut at a work instruction — but no step in quoting, scheduling or dispatch depending on it, so a busy month pushes it aside.",
      established:
        "at least one regular step genuinely done differently — quote covering letters, technical responses to customer enquiries, or the narrative in the monthly production report — and you could point at the step that changed.",
      leading:
        "several everyday things running differently — how a quote gets handed to production, how job packs are assembled, how customer reporting gets written — with real before-and-after numbers on at least one.",
    },
    rules: {
      emerging:
        "nobody owning it, so if AI-drafted wording ended up in a quote, a work instruction or a spec response and turned out to be wrong, there's no version of events where you'd find out how it got there.",
      developing:
        "someone having said out loud that customer drawings and pricing shouldn't go into public tools — but it's a conversation, not a rule, and nobody checks a new tool before it gets used on real work.",
      established:
        "a named person, an agreed list of tools, and a check before AI-touched work leaves the office — the same discipline you already run on an inspection sign-off, applied to documents.",
      leading:
        "being able to answer a customer's data and AI questions in writing today — who's accountable, which tools are approved, what gets checked and by whom — without stopping work to invent it.",
    },
  },
  professional: {
    people: {
      emerging:
        "nobody here having been shown what these tools do with a workpaper, a matter file or a set of design calculations, so the firm's view of AI is formed by headlines rather than by anything anyone has tried on real work.",
      developing:
        "one or two people — usually a manager or senior associate — drafting client reports, file notes and first-cut advice noticeably faster than everyone else, and nobody having asked them to show the rest of the firm how.",
      established:
        "at least one team using it as a normal part of the work — proposal and tender writing, first-pass document review, précis of a due diligence bundle — and the people doing it can tell you where it helps and where it doesn't.",
      leading:
        "the know-how written down and held by more than one person, so if the partner who champions this walked out tomorrow, your precedent bank, template library and review checklists would still work on Monday.",
    },
    work: {
      emerging:
        "the engagement letter, the workpaper template, the review checklist and the sign-off step all looking exactly as they did two years ago.",
      developing:
        "help with the odd draft — a client email, a scoping note, a section of a tender — but no step in file opening, matter management or review having actually changed, so whatever time it saves lands in someone's evening rather than on a job you can charge for.",
      established:
        "one process genuinely running differently — first-draft advice, standard terms of engagement, tender writing, or the summarising stage of due diligence — and you could point at the step that changed and say what it used to cost in hours.",
      leading:
        "several processes rebuilt around it, before-and-after numbers on at least one, and a clear view of which parts of a job a graduate still does because they are learning to do it, not because the job needs them.",
    },
    rules: {
      emerging:
        "no agreed answer to what may go into a tool, so client information, draft advice, unfiled opinions and unissued reports are moving on individual judgement — and the firm would not know if that judgement were wrong.",
      developing:
        "people having been told to be careful, but nothing about AI in your terms of engagement, nothing in the file-opening checklist, and nothing in the review step where a partner's name goes on the work.",
      established:
        "rules that exist and that people can state: what may go into which tool, which work needs a named reviewer before it leaves the office, and a straight answer for the client who asks.",
      leading:
        "AI sitting inside the quality system you already run — engagement acceptance, supervision, review, file notes — with a record of where it touched a matter, which is what an insurer, a court or a quality reviewer will ask you for.",
    },
  },
};

/* ------------------------------------------------------------------ */
/* Use cases                                                           */
/* ------------------------------------------------------------------ */

export interface UseCaseBlock {
  heading: string;
  leadIn: string;
  items: NamedItem[];
}

const CONSTRUCTION_USE_CASES: NamedItem[] = [
  {
    name: "First drafts of the writing you do over and over",
    body: "Scope letters, qualifications and exclusions, capability write-ups, quote covering material — drafted from your own past submissions rather than a blank page. It drafts the words, not the numbers; every rate and quantity still comes from the estimator.",
  },
  {
    name: "Turning field records into the written narrative",
    body: "Site diaries, daily reports and photo captions pulled into a readable account for a claim, a delay notice or a client report. It gets you a first draft in minutes. Entitlement, contractual wording and anything you'd argue about goes to your commercial people, and where it matters, to a lawyer.",
  },
  {
    name: "Asking questions of your own documents",
    body: "Specifications, subcontract scopes, standards, product data — a fast first look at “what does this say about X” across hundreds of pages. It will miss things. Treat it as a way to find the clause quickly, never as a substitute for reading it.",
  },
  {
    name: "Job-specific versions of controlled documents",
    body: "A SWMS built from your approved template for this site. It removes the retyping. The competent person who knows the hazard still writes the controls and still signs it.",
  },
  {
    name: "A reusable answer bank for prequalification and questionnaires",
    body: "The same forty questions arrive every year in slightly different words. Assembling answers from what you've already submitted saves days. Someone still has to confirm the insurances, licences and certifications are current — an out-of-date answer is worse than no answer.",
  },
  {
    name: "Meeting and site-walk notes into actions",
    body: "A site meeting, a defect walk or a production review turned into a written record and a list of who owes what by when. Cheapest real win on this list. Get consent before recording anyone, and check the names, numbers and dates before it goes out.",
  },
];

const INDUSTRIAL_USE_CASES: NamedItem[] = [
  {
    name: "First drafts of the writing you do over and over",
    body: "Quote covering material, capability write-ups, technical responses to customer enquiries — drafted from your own past submissions rather than a blank page. It drafts the words, not the numbers; every rate and quantity still comes from the estimator.",
  },
  {
    name: "Turning shift records into the written narrative",
    body: "Shift and production reports pulled into a readable account for a customer report or a non-conformance write-up. It gets you a first draft in minutes. Anything a customer could dispute goes to a person who knows the job.",
  },
  {
    name: "Asking questions of your own documents",
    body: "Specifications, standards, product data, customer drawings — a fast first look at “what does this say about X” across hundreds of pages. It will miss things. Treat it as a way to find the clause quickly, never as a substitute for reading it.",
  },
  {
    name: "Job-specific versions of controlled documents",
    body: "A work instruction built from an existing SOP for this run. It removes the retyping. The competent person who knows the hazard still writes the controls and still signs it.",
  },
  {
    name: "A reusable answer bank for prequalification and questionnaires",
    body: "The same forty questions arrive every year in slightly different words. Assembling answers from what you've already submitted saves days. Someone still has to confirm the insurances, licences and certifications are current — an out-of-date answer is worse than no answer.",
  },
  {
    name: "Meeting and production-review notes into actions",
    body: "A production review or a customer meeting turned into a written record and a list of who owes what by when. Cheapest real win on this list. Get consent before recording anyone, and check the names, numbers and dates before it goes out.",
  },
];

const PROFESSIONAL_USE_CASES: NamedItem[] = [
  {
    name: "Internal documents nobody signs",
    body: "File notes, meeting minutes, handover summaries, internal scoping notes. The lowest-risk place to start, because if it is wrong the only person misled is you.",
  },
  {
    name: "Proposal, tender and EOI writing off your own past submissions",
    body: "The fastest real return in most firms, and the limit is unchanged: someone senior still has to make every claim in it true.",
  },
  {
    name: "Summarising a large document set",
    body: "A due diligence bundle, a discovery set, a contract pack. Useful — but it summarises what you gave it and will never tell you what is missing, and a missed clause is your error, not the tool's.",
  },
  {
    name: "Comparing a document against your own standard",
    body: "A lease against a precedent, a subcontract against your standard terms, a specification against the client brief. Strongest as a second pair of eyes over human work, weakest as a substitute for it.",
  },
  {
    name: "Research and citation — treat this as a trap",
    body: "Fabricated cases, standards and references are the most-reported failure in Australian practice, and the Supreme Court of Queensland has issued a practice direction about it. Every citation is unverified until a person opens the source.",
  },
  {
    name: "Numbers — don't",
    body: "Design calculations, quantities, tax positions and valuations are the wrong job for a tool that produces plausible output without working. Use it for the words around the numbers, not the numbers.",
  },
];

export const USE_CASES: Record<SectorKey, UseCaseBlock> = {
  construction: {
    heading: "What this typically looks like",
    leadIn:
      "These are the ones that pay off at your size. None of them are magic and all of them still need someone who knows the job.",
    items: CONSTRUCTION_USE_CASES,
  },
  industrial: {
    heading: "What this typically looks like",
    leadIn:
      "These are the ones that pay off at your size. None of them are magic and all of them still need someone who knows the job.",
    items: INDUSTRIAL_USE_CASES,
  },
  professional: {
    heading: "Six uses that pay off in a firm your size",
    leadIn:
      "Ordered by risk, lowest first. The last two are on the list because they are where firms most often get caught.",
    items: PROFESSIONAL_USE_CASES,
  },
};

/* ------------------------------------------------------------------ */
/* Buyer pressure — construction and industrial, keyed on C5           */
/* ------------------------------------------------------------------ */

export interface PressureBlock {
  heading: string;
  body: string;
}

/**
 * Written after checking what Queensland Government prequalification actually
 * asks (it does not ask about AI or data security — see the file header). The
 * copy is deliberately built to survive that fact rather than assume the
 * opposite, because the assumption was wrong and a contractor would know.
 */
export const BUYER_PRESSURE: Record<string, PressureBlock> = {
  yes_recent: {
    heading: "You've already been asked. That puts you ahead of most.",
    body: "Most of what's being asked right now is about data, not AI — where your information is held, who can see it, what happens if it's breached. AI is the newer add-on, and it's arriving through insurance renewals and through clients big enough to have their own procurement function, rather than through prequalification. The problem isn't the question. It's that a real answer takes weeks to put together and you usually get days.",
  },
  expecting: {
    heading: "Reasonable. Here's where it's actually coming from.",
    body: "Not the government prequalification pack — as at August 2026 that still asks about financial capacity, licences, insurance, safety, quality and environmental systems, and says nothing about data or AI. Two other doors are open. Insurers are rewriting cyber and liability policy wording around AI, so a renewal is a likely first encounter. And clients large enough to carry their own security obligations pass them down as a schedule in a contract, which is how it lands on a subcontractor or a supplier: not as a question, as a term you've already signed.",
  },
  no: {
    heading: "Then you've got time, which is the useful position to be in.",
    body: "Two things worth watching: your next insurance renewal, and any client big enough to have a procurement team. The Games venue programme is moving into delivery contracts through 2026, which means a lot of Queensland businesses are about to work for principals with far more paperwork than they're used to. Getting to the point where you can answer takes a few weeks of unglamorous work. Being asked takes one email.",
  },
  unsure: {
    heading: "Then you've got time, which is the useful position to be in.",
    body: "Two things worth watching: your next insurance renewal, and any client big enough to have a procurement team. The Games venue programme is moving into delivery contracts through 2026, which means a lot of Queensland businesses are about to work for principals with far more paperwork than they're used to. Getting to the point where you can answer takes a few weeks of unglamorous work. Being asked takes one email.",
  },
};

/* ------------------------------------------------------------------ */
/* Professional obligations                                            */
/* ------------------------------------------------------------------ */

export interface ObligationBlock {
  heading: string;
  body: string;
}

/**
 * Every reference here was verified on 27 Aug 2026 against a primary or
 * near-primary source. Review dates:
 *   • TPB(GS) 55/2026 — finalised 22 July 2026
 *   • QLS Guidance Statement No. 37 — issued 31 May 2024
 *   • Supreme Court of Queensland Practice Direction 5 of 2025 — 24 Sept 2025
 *   • Professional Engineers Act 2002 (Qld) s 115 — direct supervision
 *   • APES 110 technology amending standard — issued 20 June 2024
 *
 * No claim is made that Engineers Australia, BPEQ, the Board of Architects of
 * Queensland or the AIA have issued AI guidance: a search on 27 Aug 2026 found
 * none. Do not add one without checking.
 */
export const PROFESSIONAL_OBLIGATIONS: ObligationBlock[] = [
  {
    heading: "Client confidentiality",
    body: "Putting client information into a third-party tool may be a disclosure to a third party, and that is the question to answer before the tool question. For registered tax and BAS agents, the Tax Practitioners Board finalised TPB(GS) 55/2026 in July 2026: it creates no new obligations, it applies the existing Code to AI use — including the item that prevents disclosing client information to a third party without permission. The practical gap is the engagement letter; most do not say client data may be processed offshore. For solicitors, Queensland Law Society Guidance Statement No. 37 requires reasonable steps to prevent misuse of confidential material, including assessing the provider's terms. Whether legal professional privilege survives a particular tool is a question for your own advisers, not for us.",
  },
  {
    heading: "Professional standards and supervision",
    body: "The obligation to supervise does not move because the first draft came from software. For accountants, APES 110 applies, and the APESB issued a technology-related amending standard dealing with professional competence and due care. For solicitors, the Supreme Court of Queensland's Practice Direction 5 of 2025 puts responsibility for the accuracy of submissions squarely on the practitioner. For engineers, section 115 of the Professional Engineers Act 2002 (Qld) is blunt: a professional engineering service must be carried out by an RPEQ, or by someone under an RPEQ's direct supervision — and direct supervision means the engineer directs, oversees and evaluates the work and takes full professional responsibility. Software is not a person you can supervise. Its output is simply your own work, unchecked.",
  },
  {
    heading: "Professional indemnity insurance",
    body: "The general position is that a professional indemnity policy responds to the professional service regardless of the tools used to produce it — but exclusions can be added at any renewal, and policies differ. Two things worth doing before your next renewal: ask your broker in writing what your policy says about AI, and read your client contracts and tender conditions, because some clients are starting to prohibit AI use or require it to be disclosed.",
  },
];

export const PROFESSIONAL_OBLIGATIONS_DISCLAIMER =
  "Nothing here is legal, tax or insurance advice. It is a prompt to check with the people who give it.";

/* ------------------------------------------------------------------ */
/* Sector risks                                                        */
/* ------------------------------------------------------------------ */

const CONSTRUCTION_RISKS: NamedItem[] = [
  {
    name: "Someone pasted the drawings into a free account",
    body: "The principal's drawings, a subcontract sum, a tender you're still live in, a client's site layout — into a tool nobody checked, on an account nobody owns, under terms nobody read. In this industry the confidentiality obligation is usually sitting in the contract you already signed. That makes it a contract problem before it's a technology problem, and you'd have no way to prove what left or when.",
  },
  {
    name: "A draft went out with your name on it and nobody checked it",
    body: "An AI first draft of a SWMS, an ITP entry, a variation claim or a technical response is a document someone relies on to do something. Where there's no sign-off between the draft and the client, you've taken on the liability and kept no record of who checked what. You already run this discipline on inspection and test — it hasn't been extended to documents.",
  },
  {
    name: "The number nobody could trace",
    body: "An AI-assisted quantity, allowance or escalation figure that reads plausibly, sits in a tender priced at two to five per cent, and isn't found until the job is running. These tools produce confident numbers as easily as correct ones. The estimate is where the business is actually decided, and it's the one place a plausible-looking output does the most damage.",
  },
];

const PROFESSIONAL_RISKS: NamedItem[] = [
  {
    name: "Client information leaving the firm without anyone deciding it could",
    body: "Not a hack — a manager pasting a client's figures, a draft opinion or a valuation into a tool nobody assessed, with an engagement letter that never contemplated it.",
  },
  {
    name: "Work going out with a partner's name on it and no real review behind it",
    body: "Every framework that applies to you — the tax agent code, the conduct rules, the Professional Engineers Act — assumes a named person read the work and takes responsibility for it. A review that has quietly become a skim is the failure, and it is invisible until it isn't.",
  },
  {
    name: "The training year you have stopped running without deciding to",
    body: "The first drafts, the schedules, the précis, the search work — that was how your graduates learned to think. If the machine does it and nobody replaces the learning, you will notice in about four years, when the people you needed to promote cannot do the work.",
  },
];

export const SECTOR_RISKS: Record<SectorKey, NamedItem[]> = {
  construction: CONSTRUCTION_RISKS,
  industrial: CONSTRUCTION_RISKS,
  professional: PROFESSIONAL_RISKS,
};

/* ------------------------------------------------------------------ */
/* Next-step framing                                                   */
/* ------------------------------------------------------------------ */

export const SECTOR_NEXT_STEP: Record<SectorKey, { heading: string; body: string }> = {
  construction: {
    heading: "What to close",
    body: "The gap isn't AI. It's that you can't yet put in writing the questions a large client, a mine site or a government principal will eventually put to you — who's accountable, which tools are approved, what gets checked before work leaves the office, and what happens when something goes wrong. That's a short, dull set of documents that most businesses your size don't have, and it holds up when the project team disbands and reforms on the next job, which is the only test that matters here.",
  },
  industrial: {
    heading: "What to close",
    body: "The gap isn't AI. It's that you can't yet put in writing the questions a large customer or a government principal will eventually put to you — who's accountable, which tools are approved, what gets checked before work leaves the office, and what happens when something goes wrong. That's a short, dull set of documents that most businesses your size don't have, and it holds up when the people change, which is the only test that matters here.",
  },
  professional: {
    heading: "Where this usually goes next",
    body: "Most firms this size are not short of enthusiasm, they are short of an agreed position — one page saying what may go into which tool, which work needs a named reviewer, and what you would say if a client asked. That is a decision for the partners, not a technology project, and it is usually a shorter conversation than people expect once someone puts the actual questions in front of them.",
  },
};

/**
 * The "advisor who says no" line for professional services. Earns the position
 * with partners by contradicting what every vendor tells them.
 */
export const PROFESSIONAL_CAUTION =
  "Being told a tool is “enterprise-grade” and that your data is not used for training answers a security question, not your confidentiality question — whether you may put a client's information into it at all is decided by your engagement letter and your professional obligations, and no vendor can answer that for you.";
