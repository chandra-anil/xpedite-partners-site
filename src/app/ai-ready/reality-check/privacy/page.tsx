import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { aiReady } from "@/data/ai-ready";
import { INSTRUMENT_VERSION } from "@/data/reality-check/questions";

/**
 * Privacy note for the AI Reality Check.
 *
 * Every claim on this page was checked against what the code actually does:
 * the fields collected match `questions.ts`, the storage and hashing match
 * `storage.ts`, and the overseas disclosure matches `email.ts`. If any of those
 * files change, this page changes in the same commit.
 *
 * TWO THINGS ANIL MUST SETTLE BEFORE THE SCORECARD IS LINKED PUBLICLY:
 *   1. A privacy lawyer reviews this page. That is a specialist call and it is
 *      the first item on the launch checklist in HANDOVER-reality-check.md.
 *   2. The retention periods below (90 days / 24 months) are a proposal, not a
 *      decision. They are defensible but they are a business call.
 */

const TITLE = "Privacy — AI Reality Check | Xpedite AI Ready";
const DESCRIPTION =
  "What the AI Reality Check collects, why, where it is stored, how long it is kept, and how to have it deleted.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-ready/reality-check/privacy" },
  robots: { index: true, follow: true },
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="rc-h2 mt-12 font-semibold">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 leading-[1.7]" style={{ color: "var(--rc-ink-60)" }}>
      {children}
    </p>
  );
}

const COLLECTED: [string, string][] = [
  [
    "Your 16 scored answers and your answer to the final question",
    "To produce your result, and as de-identified data in the published report",
  ],
  [
    "Your sector, staff-number band, role and region",
    "To tailor your result, and to let the report break results down by group",
  ],
  [
    "Whether a client, tender or insurer has asked about your AI or data practices",
    "Same as above",
  ],
  ["How long you took", "To spot junk submissions and keep the dataset clean"],
  [
    "Your email address — only if you choose to give it",
    "To send your PDF, to tell you when Queensland comparisons become available, and to send the monthly briefing if you tick that box",
  ],
  [
    "A one-way salted hash of your IP address",
    "To limit repeat and automated submissions. It is a scrambled value we cannot turn back into your IP address. We do not store the address itself",
  ],
];

export default function RealityCheckPrivacyPage() {
  return (
    <>
      <Header />
      <main className="rc-root rc-sheet">
        <article className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="rc-label" style={{ color: "var(--rc-accent-sm)" }}>
            AI Reality Check — privacy
          </p>
          <h1 className="rc-archetype mt-3 font-bold">What we do with your answers.</h1>

          <P>
            Xpedite Partners is a sole-principal consultancy in Brisbane, run by Anil
            Chandra. This note covers the AI Reality Check only, and it is written to the
            Australian Privacy Principles.
          </P>
          <P>
            Xpedite may currently fall under the small-business exemption in the Privacy
            Act. We do not rely on it. A firm that advises on AI governance cannot claim an
            exemption from privacy law, and reform has been proposed to remove that
            exemption in any case. We operate as though the Principles apply.
          </P>

          <H2>Read this before you start</H2>
          <P>
            Your answers, stripped of anything that identifies you, become part of a dataset
            we intend to publish as a Queensland SME AI readiness report. That is one of the
            reasons this tool is free, and we would rather you knew now than found out
            afterwards.
          </P>
          <P>
            No individual business appears in that report. It reports counts, percentages
            and ranges — never one business&rsquo;s answers, never an email address, never
            anything traceable back to you. Where a sector or size group is too small to
            report without exposing a single respondent, we do not report it at all.
          </P>
          <P>
            If you would rather your answers were not used this way, do not complete the
            assessment. There is no partial option: the dataset only works if it is complete
            and consistent.
          </P>

          <H2>What we collect</H2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[30rem] border-collapse text-[0.9375rem]">
              <thead>
                <tr>
                  <th
                    className="rc-label border-b py-2 pr-4 text-left"
                    style={{ borderColor: "var(--rc-rule-strong)", color: "var(--rc-ink-60)" }}
                  >
                    What
                  </th>
                  <th
                    className="rc-label border-b py-2 text-left"
                    style={{ borderColor: "var(--rc-rule-strong)", color: "var(--rc-ink-60)" }}
                  >
                    Why
                  </th>
                </tr>
              </thead>
              <tbody>
                {COLLECTED.map(([what, why]) => (
                  <tr key={what}>
                    <td className="border-b py-3 pr-4 align-top" style={{ borderColor: "var(--rc-rule)" }}>
                      {what}
                    </td>
                    <td
                      className="border-b py-3 align-top"
                      style={{ borderColor: "var(--rc-rule)", color: "var(--rc-ink-60)" }}
                    >
                      {why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            <strong style={{ color: "var(--rc-ink)" }}>We do not ask for and do not
            collect</strong> your name, your business name, your phone number, your address,
            your revenue, your budget or your timeline. There are no free-text boxes anywhere
            in the assessment — every answer is one of four fixed options.
          </P>
          <P>
            You see your full result on screen without giving an email address. Nothing is
            held back for it.
          </P>

          <H2>Where your data goes</H2>
          <P>
            Your responses are stored in a database hosted in Sydney, Australia. They stay
            there.
          </P>
          <P>
            If you give us your email address, that address along with your sector and result
            category is sent to our email provider, which stores data in the United States.
            That is an overseas disclosure under Australian Privacy Principle 8. Your
            individual answers are not sent to it. If you would rather that did not happen,
            do not give us the address — your result is the same either way.
          </P>
          <P>
            We do not use Google Analytics, advertising pixels or third-party trackers on
            this tool.
          </P>

          <H2>No AI is involved in your result</H2>
          <P>
            Your score is calculated by fixed rules written by Anil Chandra and run on our
            server. The wording of your result comes from a library of text written in
            advance by people. There is no artificial intelligence anywhere in that process,
            and none of your responses are sent to any AI provider.
          </P>
          <P>
            We are considering adding a clearly-labelled AI-written summary in a future
            version. If we do, it would receive only your scores and category — never free
            text, because there is none — and this page will say so before that change goes
            live, not after.
          </P>

          <H2>How long we keep it</H2>
          <ul className="mt-4 flex flex-col gap-3">
            {[
              ["The hashed IP address", "90 days, then deleted"],
              [
                "Your responses with an email attached",
                "24 months, after which the email is severed and the responses remain only as de-identified data",
              ],
              [
                "De-identified responses",
                "Kept indefinitely as research data, so a published report stays reproducible",
              ],
              ["Your email address with our email provider", "Until you unsubscribe or ask us to delete it"],
            ].map(([what, how]) => (
              <li key={what} className="border-t pt-3 text-[0.9375rem]" style={{ borderColor: "var(--rc-rule)" }}>
                <span className="font-medium">{what}</span>
                <span style={{ color: "var(--rc-ink-60)" }}> — {how}</span>
              </li>
            ))}
          </ul>

          <H2>What we never do</H2>
          <P>
            We do not sell your data. We do not share, rent or trade it with any third party,
            and we do not pass it to a lead-generation service. The only outside parties
            involved are the hosting and email providers described above, doing the jobs
            described above.
          </P>
          <P>
            If you complete the assessment, work in the kind of business we work with, and
            leave an email address, Anil may email you once about your result and once more
            about a fortnight later. That is a person writing, not an automated sequence.
            Then it stops. We do not cold-call — we do not call at all unless you ask us to.
          </P>

          <H2>The monthly briefing</H2>
          <P>
            The briefing is a separate choice and the box is unticked. You get your PDF and
            your comparison notification whether or not you tick it. Every briefing carries a
            one-click unsubscribe, and unsubscribing affects nothing else.
          </P>

          <H2>Access, correction and deletion</H2>
          <P>
            Email <strong style={{ color: "var(--rc-ink)" }}>{aiReady.contactEmail}</strong>{" "}
            and ask. You can ask what we hold, ask us to correct it, or ask us to delete your
            response and your email address. We will action a deletion within 30 days and
            confirm when it is done.
          </P>
          <P>
            One limit, stated plainly: once a response has been de-identified and included in
            a published report, we cannot pull it back out of the published figures, because
            at that point it is no longer linked to you and we cannot tell which row was
            yours. Ask before publication and we will remove the whole row.
          </P>
          <P>
            If you are unhappy with how we have handled your information, tell us first. If
            we do not resolve it, you can complain to the Office of the Australian
            Information Commissioner at oaic.gov.au.
          </P>

          <H2>Contact</H2>
          <P>
            Anil Chandra, Principal, Xpedite Partners, Brisbane, Queensland.{" "}
            {aiReady.contactEmail}
          </P>
          <P>
            Method version {INSTRUMENT_VERSION}. If we change what we collect or where it
            goes, we change this page first.
          </P>

          <p className="mt-12 border-t pt-5 text-[0.9375rem]" style={{ borderColor: "var(--rc-rule)" }}>
            <Link
              href="/ai-ready/reality-check"
              className="underline underline-offset-4"
              style={{ color: "var(--rc-accent-sm)" }}
            >
              Take the AI Reality Check
            </Link>
            {" · "}
            <Link
              href="/ai-ready/reality-check/methodology"
              className="underline underline-offset-4"
              style={{ color: "var(--rc-accent-sm)" }}
            >
              How this tool is built and governed
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
