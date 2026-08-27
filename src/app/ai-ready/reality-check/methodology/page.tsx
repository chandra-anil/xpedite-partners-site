import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  DIMENSIONS,
  INSTRUMENT_VERSION,
  SCORED_QUESTIONS,
  COUNTS,
} from "@/data/reality-check/questions";
import { ARCHETYPES } from "@/data/reality-check/narrative";
import { BAND_FLOORS, BAND_LABELS } from "@/lib/reality-check/scoring";
import { BENCHMARK_THRESHOLD } from "@/lib/reality-check/storage";

const TITLE = "How the AI Reality Check is built and governed | Xpedite AI Ready";
const DESCRIPTION =
  "The full method behind the AI Reality Check: what it measures, how it scores, how it maps to the National AI Centre's essential practices, how benchmarking works, and what the instrument cannot tell you.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-ready/reality-check/methodology" },
  robots: { index: true, follow: true },
};

/* The governance questions, read straight from the instrument. Generated rather
   than transcribed so the published mapping cannot drift away from the tool. */
const AI6_QUESTIONS = SCORED_QUESTIONS.filter((q) => q.ai6);

function H2({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <h2 id={id} className="rc-h2 mt-14 font-semibold">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-[1.7]" style={{ color: "var(--rc-ink-60)" }}>{children}</p>;
}

export default function MethodologyPage() {
  return (
    <>
      <Header />
      <main className="rc-root rc-sheet">
        <article className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="rc-label" style={{ color: "var(--rc-accent-sm)" }}>
            AI Reality Check — method, version {INSTRUMENT_VERSION}
          </p>
          <h1 className="rc-archetype mt-3 font-bold">
            How this tool is built and governed.
          </h1>
          <P>
            Everything the AI Reality Check does is published here: the questions, how they
            are scored, how the result is chosen, and what the instrument cannot tell you.
            You can read this before answering anything, and the link sits above the first
            question for that reason.
          </P>
          <P>
            We tell clients to be able to explain any system that makes a call in their
            business. This is us doing it for ours.
          </P>

          {/* --- 1 --- */}
          <H2 id="what">What this measures</H2>
          <P>
            Three areas, because three is what a business of 20 to 200 people can act on in
            one sitting. Each is scored separately and none is averaged into a single
            number.
          </P>
          <ul className="mt-5 flex flex-col gap-4">
            {DIMENSIONS.map((d) => (
              <li key={d.id} className="border-t pt-4" style={{ borderColor: "var(--rc-rule)" }}>
                <p className="font-semibold">{d.publicName}</p>
                <p className="mt-1 text-[0.9375rem]" style={{ color: "var(--rc-ink-60)" }}>
                  {SCORED_QUESTIONS.filter((q) => q.dimension === d.id).length} questions ·{" "}
                  {d.internalName}
                </p>
              </li>
            ))}
          </ul>
          <P>
            There is deliberately no single composite score. A number like that invites the
            question &ldquo;why is 62 better than 58?&rdquo;, and there is no defensible
            answer to it. The shape of the three scores carries the diagnosis instead.
          </P>

          {/* --- 2 --- */}
          <H2 id="ai6">The six governance questions</H2>
          <P>
            The governance questions map one to one onto the National AI Centre&rsquo;s six
            essential practices, published in its Guidance for AI Adoption. Practice names
            below are the Centre&rsquo;s, not ours.
          </P>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[30rem] border-collapse text-[0.9375rem]">
              <thead>
                <tr>
                  <th
                    className="rc-label border-b py-2 pr-4 text-left"
                    style={{ borderColor: "var(--rc-rule-strong)", color: "var(--rc-ink-60)" }}
                  >
                    Question
                  </th>
                  <th
                    className="rc-label border-b py-2 pr-4 text-left"
                    style={{ borderColor: "var(--rc-rule-strong)", color: "var(--rc-ink-60)" }}
                  >
                    Essential practice
                  </th>
                  <th
                    className="rc-label border-b py-2 text-left"
                    style={{ borderColor: "var(--rc-rule-strong)", color: "var(--rc-ink-60)" }}
                  >
                    What it looks at
                  </th>
                </tr>
              </thead>
              <tbody>
                {AI6_QUESTIONS.map((q) => (
                  <tr key={q.id}>
                    <td
                      className="rc-numeral border-b py-3 pr-4 align-top font-medium"
                      style={{ borderColor: "var(--rc-rule)" }}
                    >
                      {q.id}
                    </td>
                    <td
                      className="border-b py-3 pr-4 align-top"
                      style={{ borderColor: "var(--rc-rule)" }}
                    >
                      {q.ai6}
                    </td>
                    <td
                      className="border-b py-3 align-top"
                      style={{ borderColor: "var(--rc-rule)", color: "var(--rc-ink-60)" }}
                    >
                      {q.measures}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* --- 3 --- */}
          <H2 id="scoring">How scoring works</H2>
          <P>
            Every scored question offers four descriptions of how a business actually
            behaves. They are worth 0, 1, 2 and 3 in the order shown. There are no
            agree-or-disagree scales anywhere: they are easy to flatter yourself on, and
            they measure opinion rather than practice.
          </P>
          <P>
            An area&rsquo;s score is the sum of its item scores divided by the maximum
            available, expressed out of 100. Items within an area are weighted equally.
          </P>
          <p
            className="rc-numeral mt-4 border-l-2 py-1 pl-4 text-[0.9375rem]"
            style={{ borderColor: "var(--rc-mark)" }}
          >
            score = sum of item scores ÷ (3 × number of items) × 100
          </p>
          <P>
            Equal weighting is a choice made for want of evidence, not because every item
            matters equally. Weighting one essential practice above another would have to be
            defended, and there is no dataset to defend it with yet. When there is, the
            weights change, the version number changes, and this page says so.
          </P>
          <P>Bands are lower-inclusive:</P>
          <ul className="mt-4 flex flex-col gap-2">
            {[...BAND_FLOORS].reverse().map(({ band, floor }, i, arr) => {
              const upper = i === arr.length - 1 ? 100 : arr[i + 1].floor;
              return (
                <li key={band} className="rc-numeral text-[0.9375rem]">
                  <span className="font-medium">{BAND_LABELS[band]}</span> — {floor} to{" "}
                  {upper === 100 ? "100" : `under ${upper}`}
                </li>
              );
            })}
          </ul>
          <P>
            One boundary case exists and is worth stating: the governance area has six
            items, so a total of 9 lands on exactly 50.0. Lower-inclusive bands put that in
            Established. It is the only score in the instrument that falls precisely on a
            band edge.
          </P>

          {/* --- 4 --- */}
          <H2 id="archetypes">The five results</H2>
          <P>
            The headline result is chosen from the shape of the three band results, by rules
            evaluated in this order. The first rule that matches wins.
          </P>
          <ol className="mt-5 flex flex-col gap-4">
            {[
              ["Compounding leader", "Two or more areas Leading, and nothing below Established."],
              ["Ready to scale", "All three areas at least Developing."],
              [
                "Ungoverned adopter",
                "Governance Emerging, and either people or operating model at least Developing — AI in use with no rules around it.",
              ],
              ["Governed starter", "Governance at least Developing — rules ahead of use."],
              ["Cautious observer", "Everything else, which at this point is everything Emerging."],
            ].map(([name, rule], i) => (
              <li key={name} className="flex gap-4 border-t pt-4" style={{ borderColor: "var(--rc-rule)" }}>
                <span className="rc-numeral rc-label pt-1" style={{ color: "var(--rc-mark)" }}>
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{ARCHETYPES[
                    (
                      [
                        "compounding_leader",
                        "ready_to_scale",
                        "ungoverned_adopter",
                        "governed_starter",
                        "cautious_observer",
                      ] as const
                    )[i]
                  ].name}</p>
                  <p className="mt-1 text-[0.9375rem]" style={{ color: "var(--rc-ink-60)" }}>
                    {rule}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <P>
            The order matters. Written as independent rules they overlap in places and leave
            a gap in others; evaluated in this order they sort every possible combination of
            scores exactly once.
          </P>

          {/* --- 5 --- */}
          <H2 id="benchmark">How benchmarking works</H2>
          <P>
            No Queensland percentile is reported until this dataset holds{" "}
            {BENCHMARK_THRESHOLD} responses. Below that, a percentile is a number with
            nothing behind it, and you would have no way of knowing that from looking at it.
            Until then the results page shows the comparison scale drawn and unmarked.
          </P>
          <P>
            Once the threshold is passed, comparisons are drawn from responses collected
            through this tool. Sector breakdowns appear only where that sector holds at
            least 30 responses; below that the comparison falls back to all Queensland
            responses. Submissions completed implausibly fast, or caught by rate limiting,
            are excluded from the dataset entirely and never affect anyone&rsquo;s
            comparison.
          </P>
          <P>
            Where we compare against published national figures, the figure is named and
            dated to the survey wave it came from at the point it is used. Where the source
            publishes a qualifier rather than a number — &ldquo;about half&rdquo; — we
            repeat their wording instead of sharpening it into a percentage. And we do not
            publish a statistic nobody here has opened the source for.
          </P>

          {/* --- 6 --- */}
          <H2 id="limits">What this cannot tell you</H2>
          <P>Read this part.</P>
          <P>
            <strong style={{ color: "var(--rc-ink)" }}>It is self-reported.</strong> Every
            score comes from what one person tapped on a phone. Nobody verified any of it.
            Nobody visited your business, opened your systems, read your policies or asked
            your staff a single question.
          </P>
          <P>
            <strong style={{ color: "var(--rc-ink)" }}>It measures belief, not
            behaviour.</strong> If the person answering believes client information never
            goes into public AI tools, the score reflects that belief. It does not reflect
            what happened on someone&rsquo;s laptop on Thursday night. That is a predictable
            direction to be wrong in: an owner usually does not know what staff are doing
            with tools they found themselves, so the instrument is least reliable exactly
            where the risk tends to be highest.
          </P>
          <P>
            <strong style={{ color: "var(--rc-ink)" }}>It is a scorecard, not an audit and
            not a readiness assessment.</strong> An audit involves evidence. A readiness
            assessment involves looking at your data, your systems and your contracts. This
            is {COUNTS.scored} questions and five minutes.
          </P>
          <p className="mt-5 font-semibold">What it is not good for</p>
          <ul className="mt-3 flex flex-col gap-3">
            {[
              "Proving anything to a client, an insurer, a head contractor or a prequalification panel. It is not evidence and it will not survive being used as evidence.",
              "Demonstrating compliance with the essential practices, ISO/IEC 42001, the Privacy Act, or any tender requirement.",
              "Comparing two businesses. Two owners can answer the same reality differently — one modest, one generous — and both are answering honestly.",
              "Deciding whether to buy a tool, sign a vendor or start a project. It tells you where the gap is, not what to do about it.",
              "Any board, insurer or legal question. Those need someone who has looked at your actual situation.",
            ].map((item) => (
              <li
                key={item}
                className="border-t pt-3 text-[0.9375rem] leading-[1.6]"
                style={{ borderColor: "var(--rc-rule)", color: "var(--rc-ink-60)" }}
              >
                {item}
              </li>
            ))}
          </ul>
          <P>
            <strong style={{ color: "var(--rc-ink)" }}>What it is good for.</strong> Finding
            the one thing most obviously missing, and giving you the language to raise it
            with the people who would have to fix it. That is a real use and it is the only
            one being claimed.
          </P>
          <P>
            If your result surprises you, the honest next step is not a bigger survey. It is
            asking two of your own people the same questions and seeing whether their answers
            match yours. Where they don&rsquo;t, that gap is the finding.
          </P>

          {/* --- register --- */}
          <H2 id="register">Our own AI register entry for this tool</H2>
          <P>
            We tell clients to keep a register of every AI system running in their business.
            Here is ours, for this one.
          </P>
          <div
            className="mt-5 border-l-2 pl-5"
            style={{ borderColor: "var(--rc-mark)" }}
          >
            <p className="font-semibold">Is there an AI model in this tool?</p>
            <p className="mt-2 leading-[1.7]" style={{ color: "var(--rc-ink-60)" }}>
              No. Version {INSTRUMENT_VERSION} contains no machine-learning model, no
              language model and no external AI service in the assessment, the scoring or the
              result. It is in the register anyway, because a register that only lists the
              systems with models in them is not a register — it is a highlight reel.
            </p>

            <p className="mt-5 font-semibold">What it decides</p>
            <p className="mt-2 leading-[1.7]" style={{ color: "var(--rc-ink-60)" }}>
              Which of four fixed descriptions you chose; a score per area; a band per area;
              one of five named results; and which pre-written blocks of text to show. Every
              step is arithmetic or a lookup. The same answers produce the same page, word
              for word.
            </p>

            <p className="mt-5 font-semibold">What it does not decide</p>
            <p className="mt-2 leading-[1.7]" style={{ color: "var(--rc-ink-60)" }}>
              Nothing about you as an individual. It writes nothing — every sentence in your
              result was written by a person in advance. It does not change the questions
              based on your answers, which is what keeps the dataset comparable. And no score
              triggers a phone call.
            </p>

            <p className="mt-5 font-semibold">Where it runs, and what data moves</p>
            <p className="mt-2 leading-[1.7]" style={{ color: "var(--rc-ink-60)" }}>
              Scoring runs on our server. Responses are stored in a database hosted in
              Sydney. There are no free-text fields anywhere in the form. If you give an
              email address, that address and your sector and result category go to our email
              provider, which stores data in the United States — that is the only thing that
              leaves Australia. Nothing is sent to any AI provider.
            </p>

            <p className="mt-5 font-semibold">Accountable person</p>
            <p className="mt-2 leading-[1.7]" style={{ color: "var(--rc-ink-60)" }}>
              Anil Chandra, Principal, Xpedite Partners. He wrote the questions, the
              descriptions, the scoring rules and every block of result text, and approves
              any change to them.
            </p>

            <p className="mt-5 font-semibold">How it fails</p>
            <p className="mt-2 leading-[1.7]" style={{ color: "var(--rc-ink-60)" }}>
              By declining to answer, not by guessing. An incomplete submission is rejected
              rather than estimated. A sector too small to compare is reported as
              unavailable. A dataset below the threshold shows an unmarked scale rather than
              a placeholder figure.
            </p>

            <p className="mt-5 font-semibold">Planned, and not live</p>
            <p className="mt-2 leading-[1.7]" style={{ color: "var(--rc-ink-60)" }}>
              A future version may add one clearly-labelled section written by a language
              model. It would receive only your scores and category — never free text,
              because there is none — and could only restate findings already present in the
              text written by a person. It would not touch your score. This page, the
              disclosure line on the results page and the privacy note would all be updated
              before it went live, not after. If you are reading this, it has not shipped.
            </p>
          </div>

          <p className="mt-14 border-t pt-5 text-[0.9375rem]" style={{ borderColor: "var(--rc-rule)" }}>
            <Link
              href="/ai-ready/reality-check"
              className="underline underline-offset-4"
              style={{ color: "var(--rc-accent-sm)" }}
            >
              Take the AI Reality Check
            </Link>
            {" · "}
            <Link
              href="/ai-ready/reality-check/privacy"
              className="underline underline-offset-4"
              style={{ color: "var(--rc-accent-sm)" }}
            >
              What we do with your answers
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
