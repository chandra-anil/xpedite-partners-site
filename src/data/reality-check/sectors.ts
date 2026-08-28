/**
 * AI Reality Check — the sector layer
 * -----------------------------------
 * What stops the results page reading as a template. The generic copy in
 * `narrative.ts` says what the score means; this file says where it shows up in
 * the reader's actual work, naming the documents they handle.
 *
 * HOUSE STYLE: no em-dashes, no figurative language, no assumed context. See
 * the header of `narrative.ts`. In particular, do not assume the reader works
 * somewhere with partners, and do not use a phrase the reader has to decode.
 *
 * Two facts corrected by sector review that must not drift back:
 *
 * 1. QUEENSLAND GOVERNMENT PREQUALIFICATION DOES NOT ASK ABOUT AI OR DATA
 *    SECURITY. Checked 27 Aug 2026: the checklist for building contractors
 *    covers financial capacity, licensing, insurance, and certified safety,
 *    quality and environmental systems. It says nothing about data or AI. The
 *    pressure is real, but it arrives through insurance renewals and through
 *    contracts with large clients, not through prequalification. Construction
 *    owners will know if we get this wrong.
 *
 * 2. THE PROFESSIONAL OBLIGATIONS BLOCK IS THE MOST CHECKABLE COPY ON THE SITE.
 *    Every regulatory reference was verified against a primary or near-primary
 *    source and is dated. Do not add a claim here without a source, and do not
 *    let one go stale.
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

/**
 * Prefix shown before the sector line on each dimension.
 *
 * Per sector, because a managing partner reading "in a business like yours"
 * hears a company. The word firms use about themselves is "firm", and mixing
 * the two was the tell that this copy had been written for a company and
 * retrofitted.
 */
export const SECTOR_LINE_PREFIX: Record<SectorKey, string> = {
  construction: "In a business like yours, this usually shows up as",
  industrial: "In a business like yours, this usually shows up as",
  professional: "In a firm like yours, this usually shows up as",
};

/* ------------------------------------------------------------------ */
/* Dimension and band, per sector                                      */
/* ------------------------------------------------------------------ */

export const SECTOR_LINES: Record<
  SectorKey,
  Record<DimensionId, Record<BandId, string>>
> = {
  construction: {
    people: {
      emerging:
        "tenders, site diaries and claim paperwork still being written from scratch every time. Only the person who wrote the last good one knows where it is.",
      developing:
        "one person, usually an estimator or a contract administrator, having worked out that a scope letter takes a fraction of the time now, and nobody else in the business knowing how they do it.",
      established:
        "a team using it as a matter of course, such as contract administrators on requests for information (RFIs) and variation write-ups, or safety staff on method statements and toolbox talks, with at least one session behind them on what not to put into a tool.",
      leading:
        "capability that survives a resignation. How your people use AI on estimates, claims and reporting is written down, more than one person can run it, and a new starter is shown it in their first week.",
    },
    work: {
      emerging:
        "the progress claim, the quality records and the monthly client report being put together the same way they were five years ago, with any AI use being someone experimenting between jobs.",
      developing:
        "help with the occasional task, such as a difficult letter to the superintendent or a first draft of a method statement, but no step in the claim cycle or the tender process depending on it, so a busy month pushes it aside.",
      established:
        "at least one regular step genuinely done differently, such as first-draft variation write-ups, RFI responses, or the written summary in the monthly report, and you could point at the step that changed.",
      leading:
        "several everyday things running differently, such as how an estimate is handed to the delivery team, how claim paperwork is assembled, and how the monthly report is written, with real before-and-after numbers on at least one of them.",
    },
    rules: {
      emerging:
        "nobody owning it, so if AI-drafted wording ended up in a variation claim or a safety document and turned out to be wrong, there is no way you would find out how it got there.",
      developing:
        "someone having said out loud that client drawings and pricing should not go into public tools, but that being a conversation rather than a rule, with nothing written down and nobody checking a new tool before it gets used on real work.",
      established:
        "a named person, an agreed list of tools, and a check before AI-touched work leaves the office. It is the same discipline you already apply to a hold point or an inspection sign-off, applied to documents.",
      leading:
        "being able to answer a client's data and AI questions in writing today, covering who is accountable, which tools are approved, and what gets checked and by whom, without stopping work to invent it.",
    },
  },
  industrial: {
    people: {
      emerging:
        "quotes, job cards and supplier correspondence being rebuilt from scratch every time, with what a good one looks like sitting in one estimator's folder.",
      developing:
        "one person, usually an estimator or a technical salesperson, having worked out that a covering note takes a fraction of the time now, and nobody else in the business knowing how they do it.",
      established:
        "a team using it as a matter of course, such as quoting and technical sales on customer enquiries, or quality staff on procedures and non-conformance write-ups, with at least one session behind them on what not to put into a tool.",
      leading:
        "capability that survives a resignation. How your people use AI on quotes, job packs and reporting is written down, more than one person can run it, and a new starter is shown it in their first week.",
    },
    work: {
      emerging:
        "quotes, works orders and the monthly customer report being put together the same way they were five years ago, with any AI use being someone experimenting between jobs.",
      developing:
        "help with the occasional task, such as a difficult customer email or a first draft of a work instruction, but no step in quoting, scheduling or dispatch depending on it, so a busy month pushes it aside.",
      established:
        "at least one regular step genuinely done differently, such as quote covering letters, technical responses to customer enquiries, or the written summary in the monthly production report, and you could point at the step that changed.",
      leading:
        "several everyday things running differently, such as how a quote is handed to production, how job packs are assembled, and how customer reporting is written, with real before-and-after numbers on at least one of them.",
    },
    rules: {
      emerging:
        "nobody owning it, so if AI-drafted wording ended up in a quote, a work instruction or a specification response and turned out to be wrong, there is no way you would find out how it got there.",
      developing:
        "someone having said out loud that customer drawings and pricing should not go into public tools, but that being a conversation rather than a rule, with nothing written down and nobody checking a new tool before it gets used on real work.",
      established:
        "a named person, an agreed list of tools, and a check before AI-touched work leaves the business. It is the same discipline you already apply to an inspection sign-off, applied to documents.",
      leading:
        "being able to answer a customer's data and AI questions in writing today, covering who is accountable, which tools are approved, and what gets checked and by whom, without stopping work to invent it.",
    },
  },
  professional: {
    people: {
      emerging:
        "nobody here having been shown what these tools do with a working paper, a client file or a set of design calculations, so the firm's view of AI comes from headlines rather than from anything anyone has tried on real work.",
      developing:
        "one or two people, usually someone senior who bills client work, drafting client reports, file notes and first-cut advice noticeably faster than everyone else, and nobody having asked them to show the rest of the business how.",
      established:
        "at least one team using it as a normal part of the work, such as proposal and tender writing, first-pass document review, or summarising a large set of documents, and the people doing it can tell you where it helps and where it does not.",
      leading:
        "the knowledge written down and held by more than one person, so if the person who has driven this left next month, everyone else could still use your templates, precedents and review checklists.",
    },
    work: {
      emerging:
        "the engagement letter, the working paper template, the review checklist and the sign-off step all looking exactly as they did two years ago.",
      developing:
        "help with the occasional draft, such as a client email, a scoping note or a section of a tender, but no change to how a job is opened, managed or reviewed. The person doing it finishes a little earlier. The firm gets no extra capacity it can sell.",
      established:
        "one process genuinely running differently, such as first-draft advice, standard terms of engagement, tender writing, or the summarising stage of a large review, and you could point at the step that changed and say what it used to cost in hours.",
      leading:
        "several processes rebuilt around it, before-and-after numbers on at least one, and a clear view of which parts of a job a junior still does because they are learning, rather than because the job needs it.",
    },
    rules: {
      emerging:
        "no agreed answer to what may go into a tool, so client information, draft advice and unissued reports move on individual judgement, and the business would not know if that judgement were wrong.",
      developing:
        "people having been told to be careful, but nothing about AI in your terms of engagement, nothing in the checks you run when you take on a new client or open a new job, and nothing in the review step where a senior person's name goes on the work.",
      established:
        "rules that exist and that people can state: what may go into which tool, which work needs a named reviewer before it leaves the business, and a straight answer for the client who asks.",
      leading:
        "AI sitting inside the quality system you already run, covering how you accept work, supervise it, review it and record it, with a record of where AI touched a job. That is what an insurer, a regulator or a quality reviewer may ask you for.",
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
    name: "Drafting the writing you do over and over",
    body: "Scope letters, qualifications and exclusions, capability write-ups, quote covering material, drafted from your own past submissions rather than from a blank page. It drafts the words, not the numbers. Every rate and quantity still comes from the estimator.",
  },
  {
    name: "Turning site records into a written report",
    body: "Site diaries, daily reports and photo captions pulled together into a readable account for a claim, a delay notice or a client report. You get a first draft in minutes. Anything about entitlement or contract wording goes to your commercial people, and where it matters, to a lawyer.",
  },
  {
    name: "Searching your own documents for an answer",
    body: "Specifications, subcontract scopes, standards and product data, so you can ask what a document says about something and get a fast first answer across hundreds of pages. It will miss things. Use it to find the clause quickly, never as a substitute for reading it.",
  },
  {
    name: "Producing job-specific versions of standard documents",
    body: "A safe work method statement built from your approved template for this job and this activity. It removes the retyping. The competent person who knows the hazard still writes the controls and still signs it.",
  },
  {
    name: "Building a reusable set of answers for prequalification and tender questionnaires",
    body: "The same forty questions arrive every year in slightly different words. Assembling answers from what you have already submitted saves days. Someone still has to confirm the insurances, licences and certifications are current, because an out-of-date answer is worse than no answer.",
  },
  {
    name: "Turning meeting and site-walk notes into actions",
    body: "A site meeting or a defect walk turned into a written record and a list of who owes what by when. This is the cheapest real win on the list. Get consent before recording anyone, and check the names, numbers and dates before it goes out.",
  },
];

const INDUSTRIAL_USE_CASES: NamedItem[] = [
  {
    name: "Drafting the writing you do over and over",
    body: "Quote covering material, capability write-ups and technical responses to customer enquiries, drafted from your own past submissions rather than from a blank page. It drafts the words, not the numbers. Every rate and quantity still comes from the estimator.",
  },
  {
    name: "Turning shift records into a written report",
    body: "Shift and production records pulled together into a readable account for a customer report or a non-conformance write-up. You get a first draft in minutes. Anything a customer could dispute goes to a person who knows the job.",
  },
  {
    name: "Searching your own documents for an answer",
    body: "Specifications, standards, product data and customer drawings, so you can ask what a document says about something and get a fast first answer across hundreds of pages. It will miss things. Use it to find the clause quickly, never as a substitute for reading it.",
  },
  {
    name: "Producing job-specific versions of standard documents",
    body: "A work instruction built from an existing standard procedure for this production run. It removes the retyping. The competent person who knows the hazard still writes the controls and still signs it.",
  },
  {
    name: "Building a reusable set of answers for prequalification and tender questionnaires",
    body: "The same forty questions arrive every year in slightly different words. Assembling answers from what you have already submitted saves days. Someone still has to confirm the insurances, licences and certifications are current, because an out-of-date answer is worse than no answer.",
  },
  {
    name: "Turning meeting and production-review notes into actions",
    body: "A production review or a customer meeting turned into a written record and a list of who owes what by when. This is the cheapest real win on the list. Get consent before recording anyone, and check the names, numbers and dates before it goes out.",
  },
];

const PROFESSIONAL_USE_CASES: NamedItem[] = [
  {
    name: "Drafting internal documents that never leave the firm",
    body: "File notes, meeting minutes, handover summaries and internal scoping notes. This is the lowest-risk place to start, because if it is wrong the only person misled is you.",
  },
  {
    name: "Writing proposals and tenders from your own past submissions",
    body: "The fastest real return in most firms. The limit is unchanged: someone senior still has to check that every claim in it is true.",
  },
  {
    name: "Summarising a large set of documents",
    body: "A due diligence bundle, a discovery set or a contract pack. Useful, but it summarises what you gave it and will never tell you what is missing, and a missed clause is your error rather than the tool's.",
  },
  {
    name: "Comparing a document against your own standard",
    body: "A lease against a precedent, a subcontract against your standard terms, a specification against the client brief. Use it to check work a person has already done. Do not use it instead of that person.",
  },
  {
    name: "Research and finding sources, which is where firms get caught",
    body: "Fabricated cases and references are why Queensland courts issued the practice direction above, and Australian practitioners have been referred to legal regulators over it. Treat every reference as unverified until a person has opened the source.",
  },
  {
    name: "Calculations and figures, which are not a job for AI",
    body: "A language model predicts text. Unless it is running a calculation tool it is not doing arithmetic, and it will not tell you which it did. Use it for the words around the numbers. The numbers come from your own software and a person who checks them.",
  },
];

export const USE_CASES: Record<SectorKey, UseCaseBlock> = {
  construction: {
    heading: "What this typically looks like",
    leadIn:
      "These are the uses that pay off at your size. None of them are magic, and all of them still need someone who knows the job.",
    items: CONSTRUCTION_USE_CASES,
  },
  industrial: {
    heading: "What this typically looks like",
    leadIn:
      "These are the uses that pay off at your size. None of them are magic, and all of them still need someone who knows the job.",
    items: INDUSTRIAL_USE_CASES,
  },
  professional: {
    heading: "Six places AI turns up in a firm your size, and what each is worth",
    leadIn:
      "Ordered by risk, lowest first. The last two are on the list because they are where firms most often get caught.",
    items: PROFESSIONAL_USE_CASES,
  },
};

/* ------------------------------------------------------------------ */
/* Buyer pressure, construction and industrial, keyed on the trigger   */
/* ------------------------------------------------------------------ */

export interface PressureBlock {
  heading: string;
  body: string;
}

export const BUYER_PRESSURE: Record<string, PressureBlock> = {
  yes_recent: {
    heading: "You have already been asked. That puts you ahead of most.",
    body: "Most of what is being asked right now is about data rather than AI: where your information is held, who can see it, and what happens if it is exposed. AI is the newer addition, and it is arriving through insurance renewals and through clients large enough to have their own procurement team, rather than through prequalification. The problem is not the question. It is that a real answer takes weeks to put together and you usually get days.",
  },
  expecting: {
    heading: "Reasonable. Here is where it is actually coming from.",
    body: "Not the government prequalification pack. As at August 2026 that still asks about financial capacity, licences, insurance, safety, quality and environmental systems, and says nothing about data or AI. It is coming from two other places. Insurers are rewriting cyber and liability policy wording around AI, so a renewal is a likely first encounter. And clients large enough to carry their own security obligations pass those obligations down inside a contract, which is how it reaches a subcontractor or a supplier: not as a question, but as a term you have already signed.",
  },
  no: {
    heading: "Then you have time, which is the useful position to be in.",
    body: "Two things are worth watching: your next insurance renewal, and any client large enough to have a procurement team. The Games venue programme moves into delivery contracts through 2026, which means many Queensland businesses are about to work for clients with far more paperwork than they are used to. Getting to the point where you can answer takes a few weeks of unglamorous work. Being asked takes one email.",
  },
  // "Not sure" is a different state from "no". This reader does not know
  // whether they have been asked, so telling them they have time assumes an
  // answer they have not given.
  unsure: {
    heading: "Worth finding out, because it is easy to miss.",
    body: "The question usually arrives inside a tender pack or an insurance renewal rather than as a phone call, so it can sit unanswered in someone's inbox for weeks. Ask whoever handles your tenders and whoever handles your renewals whether anything has come through about AI, data or IT security. If nothing has, you have time, and the work to get ready takes a few weeks. If something has, you will want to know now rather than the day before it is due.",
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
 * Every reference verified 27 Aug 2026 against a primary or near-primary
 * source. Review dates:
 *   • TPB(GS) 55/2026, finalised 22 July 2026
 *   • Queensland Law Society Guidance Statement No. 37, issued 31 May 2024
 *   • Supreme Court of Queensland Practice Direction 5 of 2025, 24 Sept 2025
 *   • Professional Engineers Act 2002 (Qld) s 115, direct supervision
 *   • APES 110 technology amending standard, issued 20 June 2024
 *
 * No claim is made that Engineers Australia, BPEQ, the Board of Architects of
 * Queensland or the AIA have issued AI guidance. A search on 27 Aug 2026 found
 * none. Do not add one without checking.
 */
export const PROFESSIONAL_OBLIGATIONS: ObligationBlock[] = [
  {
    heading: "Client confidentiality",
    body: "Putting client information into a third-party tool may count as disclosing it to a third party, and that is the question to answer before the question about which tool. For registered tax and BAS agents, the Tax Practitioners Board finalised TPB(GS) 55/2026 in July 2026. It creates no new obligations, but it applies the existing code to AI use, including the rule against disclosing client information to a third party without permission. The practical gap is usually the engagement letter. Check whether yours says anything about client information being processed by third-party software, including software hosted overseas. For solicitors, the confidentiality duty in the solicitors' conduct rules already covers this. Queensland Law Society Guidance Statement No. 37, issued 31 May 2024, sets out what that means for AI, including reading what the provider's terms let them do with your data before you use the tool. Whether legal professional privilege survives a particular tool is a question for your own advisers rather than for us.",
  },
  {
    heading: "Professional standards and supervision",
    body: "The obligation to supervise does not change because the first draft came from software. For accountants, APES 110 applies, and the Accounting Professional and Ethical Standards Board issued a technology amendment to it in June 2024 covering professional competence and due care. For solicitors, Supreme Court of Queensland Practice Direction 5 of 2025 requires written submissions to name an individual practitioner who has verified every reference in them, and naming the firm is not enough. For engineers, section 115 of the Professional Engineers Act 2002 (Qld) is blunt: a professional engineering service must be carried out by a registered professional engineer, or by someone that engineer directs, oversees and evaluates, with that engineer responsible for the service. Software is not a person you can supervise. Its output is simply your own work, unchecked.",
  },
  {
    heading: "Professional indemnity insurance",
    body: "The general position is that a professional indemnity policy responds to the professional service regardless of the tools used to produce it, but exclusions can be added at any renewal and policies differ. Two things are worth doing before your next renewal: ask your broker in writing what your policy says about AI, and read your client contracts and tender conditions, because some clients are starting to prohibit AI use or require it to be disclosed.",
  },
];

export const PROFESSIONAL_OBLIGATIONS_DISCLAIMER =
  "None of this is legal, tax or insurance advice. It is a prompt to check with the people who give it.";

/* ------------------------------------------------------------------ */
/* Sector risks                                                        */
/* ------------------------------------------------------------------ */

const CONSTRUCTION_RISKS: NamedItem[] = [
  {
    name: "Someone put the drawings into a free account",
    body: "The client's drawings, a subcontract sum, a tender you are still bidding, a site layout, all into a tool nobody checked, on an account nobody owns, under terms nobody read. In this industry the confidentiality obligation is usually sitting in the contract you already signed, which makes it a contract problem before it is a technology problem. You would also have no way to prove what left the business or when.",
  },
  {
    name: "A draft went out with your name on it and nobody checked it",
    body: "An AI first draft of a safety document, an inspection and test plan, a variation claim or a technical response is a document someone relies on to do something. Where there is no sign-off between the draft and the client, you have taken on the liability and kept no record of who checked what. You already apply this discipline to inspection and test work. It has not yet been extended to documents.",
  },
  {
    name: "A number nobody could trace",
    body: "An AI-assisted quantity, allowance or escalation figure that reads plausibly, sits inside a tender you are bidding on a two to five per cent margin, and is not found until the job is running. These tools produce confident numbers as easily as correct ones. The estimate is where the business is actually decided, and it is the one place a plausible-looking output does the most damage.",
  },
];

const PROFESSIONAL_RISKS: NamedItem[] = [
  {
    name: "Client information leaving without anyone deciding it could",
    body: "Not a hack. A manager putting a client's figures, a draft opinion or a valuation into a tool nobody assessed, under an engagement letter that never contemplated it.",
  },
  {
    name: "Work going out with a senior name on it and no real review behind it",
    body: "Every framework that applies to you, including the tax agent code, the solicitors' conduct rules and the Professional Engineers Act, assumes a named person read the work and takes responsibility for it. A review that has quietly become a quick read is the failure. Nobody finds out until a client, an insurer or a court checks the work.",
  },
  {
    name: "Junior staff stop learning the work",
    body: "The first drafts, the schedules, the summaries and the search work were how your junior staff learned to think. If the machine does that work and nobody replaces the learning, you will notice in about four years, when the people you needed to promote cannot do the work. Nobody decides this. It just happens.",
  },
];

/**
 * Industrial businesses previously shared the construction risks. A fabricator
 * was being shown "a subcontract sum", "a site layout" and "a tender priced at
 * two to five per cent", none of which are their documents or their margins.
 * Same three failure patterns, their nouns.
 */
const INDUSTRIAL_RISKS: NamedItem[] = [
  {
    name: "Someone put the customer's drawings into a free account",
    body: "Customer drawings, a quoted rate, a specification you are still bidding on, all into a tool nobody checked, on an account nobody owns, under terms nobody read. The confidentiality obligation is usually sitting in the supply agreement you already signed, which makes it a contract problem before it is a technology problem. You would also have no way to prove what left the business or when.",
  },
  {
    name: "A document went out with your name on it and nobody checked it",
    body: "An AI first draft of a work instruction, a non-conformance report, a technical response or a specification comparison is a document someone relies on to make or accept a part. Where there is no sign-off between the draft and the customer, you have taken on the liability and kept no record of who checked what. You already apply this discipline to inspection and release. It has not yet been extended to documents.",
  },
  {
    name: "A number nobody could trace",
    body: "An AI-assisted quantity, material allowance or rate that reads plausibly, goes into a quote, and is not found until the job is in production. These tools produce confident numbers as easily as correct ones. The quote is where the margin is actually decided, and it is the one place a plausible-looking output does the most damage.",
  },
];

export const SECTOR_RISKS: Record<SectorKey, NamedItem[]> = {
  construction: CONSTRUCTION_RISKS,
  industrial: INDUSTRIAL_RISKS,
  professional: PROFESSIONAL_RISKS,
};

/* ------------------------------------------------------------------ */
/* Next-step framing                                                   */
/* ------------------------------------------------------------------ */

export const SECTOR_NEXT_STEP: Record<SectorKey, { heading: string; body: string }> = {
  construction: {
    heading: "What to close",
    body: "The gap is not AI. It is that you cannot yet put in writing the answers a large client, a resources company or a government client will eventually ask you for: who is accountable, which tools are approved, what gets checked before work leaves the office, and what happens when something goes wrong. That is a short and fairly dull set of documents that most businesses your size do not have. It also keeps working when the project team disbands and reforms on the next job, which is the only test that matters here.",
  },
  industrial: {
    heading: "What to close",
    body: "The gap is not AI. It is that you cannot yet put in writing the answers a large customer or a government client will eventually ask you for: who is accountable, which tools are approved, what gets checked before work leaves the business, and what happens when something goes wrong. That is a short and fairly dull set of documents that most businesses your size do not have. It also keeps working when the people change, which is the only test that matters here.",
  },
  professional: {
    heading: "Where this usually goes next",
    body: "Most firms this size are not short of enthusiasm. They are short of an agreed position: one page saying what may go into which tool, which work needs a named reviewer, and what you would say if a client asked. That is a decision for the people who own the firm rather than a technology project, and it is usually a shorter conversation than people expect once someone puts the actual questions in front of them.",
  },
};

/**
 * The "advisor who says no" line for professional services. It earns the
 * position by contradicting what every vendor tells them.
 */
export const PROFESSIONAL_CAUTION =
  "A vendor telling you a tool is “enterprise grade”, and that your data is not used for training, answers a security question. It does not answer your confidentiality question. Whether you may put a client's information into it at all is decided by your engagement letter and your professional obligations, and no vendor can answer that for you.";
