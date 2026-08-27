import BandScale from "./BandScale";
import EmailExchange from "./EmailExchange";
import { QLD_BENCHMARK, publishedReferences } from "@/data/reality-check/benchmarks";
import type { ResultsView } from "@/lib/reality-check/results";

/**
 * The findings sheet.
 *
 * Deliberately the free miniature of the paid tier's board-ready scorecard: a
 * title block, ruled sections, three marked scales. It opens with the reader's
 * own firmographics because that is what makes it read as a document about
 * their business produced under a method, rather than a quiz outcome.
 *
 * The PDF is this page, printed. That is why the print rules live in
 * globals.css rather than a separate template — the screen result and the
 * emailed document being visibly identical is itself the trust signal: nothing
 * was held back for the email.
 */

interface ResultsSheetProps {
  view: ResultsView;
  token: string;
  /** False when no database is wired up — the percentile promise is softened. */
  persistent: boolean;
  bookingUrl: string;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="rc-label mb-3" style={{ color: "var(--rc-accent-sm)" }}>
      {children}
    </p>
  );
}

function Rule() {
  return <hr className="my-8 border-0 border-t" style={{ borderColor: "var(--rc-rule)" }} />;
}

export default function ResultsSheet({
  view,
  token,
  persistent,
  bookingUrl,
}: ResultsSheetProps) {
  const references = publishedReferences();

  return (
    <div className="rc-sheet mx-auto w-full max-w-2xl px-5 py-10 sm:px-10 sm:py-14">
      {/* --- Title block ------------------------------------------- */}
      <p className="rc-label mb-3" style={{ color: "var(--rc-ink-60)" }}>
        AI Reality Check — findings
      </p>
      <dl
        className="rc-print-block grid grid-cols-2 border"
        style={{ borderColor: "var(--rc-rule-strong)", borderTopWidth: 3, borderTopColor: "var(--rc-mark)" }}
      >
        {[
          ["Sector", view.titleBlock.sector],
          ["Size", view.titleBlock.size],
          ["Role", view.titleBlock.role],
          ["Region", view.titleBlock.region],
        ].map(([k, v], i) => (
          <div
            key={k}
            className="px-3.5 py-2.5"
            style={{
              borderRight: i % 2 === 0 ? "1px solid var(--rc-rule)" : undefined,
              borderBottom: i < 2 ? "1px solid var(--rc-rule)" : undefined,
            }}
          >
            <dt className="rc-label" style={{ color: "var(--rc-ink-60)" }}>
              {k}
            </dt>
            <dd className="mt-0.5 text-[0.9375rem] font-medium">{v}</dd>
          </div>
        ))}
      </dl>

      {/* --- Archetype --------------------------------------------- */}
      <div className="rc-print-block mt-10">
        <h1
          className="rc-archetype font-semibold"
          style={{ color: "var(--rc-accent-lg)" }}
        >
          {view.archetype.name}.
        </h1>
        <p className="mt-3 text-lg leading-[1.45] font-medium">
          {view.archetype.headline}
        </p>
        <p className="mt-4 leading-[1.65]" style={{ color: "var(--rc-ink-60)" }}>
          {view.archetype.body}
        </p>
        {view.roleFraming && (
          <p
            className="mt-5 border-l-2 pl-4 text-[0.9375rem] leading-[1.6]"
            style={{ borderColor: "var(--rc-mark)" }}
          >
            {view.roleFraming}
          </p>
        )}
      </div>

      <Rule />

      {/* --- Scores ------------------------------------------------- */}
      <Label>Scores</Label>
      <div className="flex flex-col gap-9">
        {view.dimensions.map((d, i) => (
          <div key={d.id} className="rc-print-block">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="rc-label" style={{ letterSpacing: "0.14em" }}>
                {d.name}
              </h2>
              <span className="rc-numeral text-2xl font-medium leading-none">
                {d.score}
              </span>
            </div>
            <div className="mt-3.5">
              <BandScale score={d.score} band={d.band} index={i} />
            </div>
            <p className="mt-3 text-[0.9375rem] leading-[1.6]">{d.readout}</p>
            {d.sectorLine && (
              <p
                className="mt-2 text-[0.875rem] leading-[1.6]"
                style={{ color: "var(--rc-ink-60)" }}
              >
                For a business like yours, this usually shows up as {d.sectorLine}
              </p>
            )}
          </div>
        ))}
      </div>

      <Rule />

      {/* --- Risk and strength -------------------------------------- */}
      {view.risk && (
        <div className="rc-print-block mb-7">
          <Label>The risk</Label>
          <h2 className="rc-h2 font-semibold">{view.risk.name}</h2>
          <p className="mt-2 leading-[1.65]" style={{ color: "var(--rc-ink-60)" }}>
            {view.risk.body}
          </p>
        </div>
      )}

      {/* Omitted entirely when the strongest dimension is still low. Inventing a
          strength to balance the page is the tell this product avoids. */}
      {view.strength && (
        <div className="rc-print-block">
          <Label>What&rsquo;s working</Label>
          <h2 className="rc-h2 font-semibold">{view.strength.name}</h2>
          <p className="mt-2 leading-[1.65]" style={{ color: "var(--rc-ink-60)" }}>
            {view.strength.body}
          </p>
        </div>
      )}

      <Rule />

      {/* --- Decisions ---------------------------------------------- */}
      <div className="rc-print-block">
        <Label>Your next three decisions</Label>
        {view.closerEmphasis && (
          <p className="mb-5 leading-[1.65]">{view.closerEmphasis}</p>
        )}
        <ol className="flex flex-col gap-5">
          {view.decisions.map((d, i) => (
            <li key={i} className="flex gap-4">
              <span
                className="rc-numeral rc-label flex-none pt-1"
                style={{ color: "var(--rc-mark)" }}
              >
                {i + 1}
              </span>
              <div>
                <p className="font-semibold leading-[1.45]">{d.title}</p>
                <p
                  className="mt-1 text-[0.9375rem] leading-[1.6]"
                  style={{ color: "var(--rc-ink-60)" }}
                >
                  {d.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* --- Sector layer ------------------------------------------- */}
      {view.sector?.buyerPressure && (
        <>
          <Rule />
          <div className="rc-print-block">
            <Label>Who&rsquo;s asking</Label>
            <h2 className="rc-h2 font-semibold">{view.sector.buyerPressure.heading}</h2>
            <p className="mt-2 leading-[1.65]" style={{ color: "var(--rc-ink-60)" }}>
              {view.sector.buyerPressure.body}
            </p>
          </div>
        </>
      )}

      {view.sector?.obligations && (
        <>
          <Rule />
          <div className="rc-print-block">
            <Label>What you still have to satisfy</Label>
            <div className="flex flex-col gap-5">
              {view.sector.obligations.map((o) => (
                <div key={o.heading}>
                  <h3 className="font-semibold">{o.heading}</h3>
                  <p
                    className="mt-1 text-[0.9375rem] leading-[1.6]"
                    style={{ color: "var(--rc-ink-60)" }}
                  >
                    {o.body}
                  </p>
                </div>
              ))}
            </div>
            {view.sector.obligationsDisclaimer && (
              <p className="mt-4 text-[0.8125rem] italic" style={{ color: "var(--rc-ink-60)" }}>
                {view.sector.obligationsDisclaimer}
              </p>
            )}
          </div>
        </>
      )}

      {view.sector && (
        <>
          <Rule />
          <div className="rc-print-block">
            <Label>{view.sector.useCases.heading}</Label>
            <p className="mb-5 text-[0.9375rem] leading-[1.6]">
              {view.sector.useCases.leadIn}
            </p>
            <ul className="flex flex-col">
              {view.sector.useCases.items.map((u) => (
                <li
                  key={u.name}
                  className="border-t py-4"
                  style={{ borderColor: "var(--rc-rule)" }}
                >
                  <p className="font-semibold leading-[1.45]">{u.name}</p>
                  <p
                    className="mt-1 text-[0.9375rem] leading-[1.6]"
                    style={{ color: "var(--rc-ink-60)" }}
                  >
                    {u.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <Rule />
          <div className="rc-print-block">
            <Label>{view.sector.nextStep.heading}</Label>
            <p className="leading-[1.65]">{view.sector.nextStep.body}</p>
            {view.sector.caution && (
              <p
                className="mt-4 border-l-2 pl-4 text-[0.9375rem] leading-[1.6]"
                style={{ borderColor: "var(--rc-mark)" }}
              >
                {view.sector.caution}
              </p>
            )}
          </div>
        </>
      )}

      <Rule />

      {/* --- Benchmark ---------------------------------------------- */}
      <div className="rc-print-block">
        <Label>{QLD_BENCHMARK.heading}</Label>

        {references.length > 0 && (
          <ul className="mb-6 flex flex-col gap-3">
            {references.map((r) => (
              <li key={r.questionId} className="text-[0.9375rem] leading-[1.6]">
                {r.claim}{" "}
                <span style={{ color: "var(--rc-ink-60)" }}>
                  ({r.source}, {r.published})
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* The scale is drawn and left unmarked. An instrument that visibly
            declines to report on an insufficient sample is demonstrating the
            discipline the firm sells — it is not an apology. */}
        <div
          className="h-3.5 border"
          style={{ borderColor: "var(--rc-rule-strong)" }}
          role="img"
          aria-label="Queensland percentile: not yet reported."
        />
        <p className="rc-label mt-2.5" style={{ color: "var(--rc-ink-60)" }}>
          {QLD_BENCHMARK.lockedLine}
        </p>
        <p className="mt-3 text-[0.9375rem] leading-[1.6]" style={{ color: "var(--rc-ink-60)" }}>
          {QLD_BENCHMARK.lockedExplainer}
        </p>
      </div>

      {/* --- You may not need us ------------------------------------ */}
      {view.mayNotNeedUs && (
        <div
          className="rc-print-block mt-10 px-6 py-7"
          style={{ background: "var(--rc-ink)", color: "var(--rc-sheet)" }}
        >
          <p className="text-lg leading-[1.5] font-medium">{view.mayNotNeedUs}</p>
        </div>
      )}

      <Rule />

      {/* --- CTA ---------------------------------------------------- */}
      <div className="rc-print-block">
        <h2 className="rc-h2 font-semibold">{view.cta.heading}</h2>
        <p className="mt-3 leading-[1.65]" style={{ color: "var(--rc-ink-60)" }}>
          {view.cta.body}
        </p>
        {view.cta.variant === "in_segment" && (
          <div className="rc-no-print mt-5">
            <a
              href={bookingUrl}
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg px-7 py-3.5 text-base font-semibold text-white transition-colors hover:brightness-90"
              style={{ background: "var(--rc-accent-lg)" }}
            >
              {view.cta.button}
            </a>
            <p className="mt-2.5 text-[0.875rem]" style={{ color: "var(--rc-ink-60)" }}>
              {view.cta.subline}
            </p>
          </div>
        )}
        {view.cta.variant === "out_of_segment" && (
          <p className="mt-3 text-[0.875rem]" style={{ color: "var(--rc-ink-60)" }}>
            {view.cta.subline}
          </p>
        )}
      </div>

      <Rule />

      {/* --- Email exchange ----------------------------------------- */}
      <div className="rc-no-print">
        <EmailExchange token={token} persistent={persistent} />
      </div>

      {/* --- Disclosure --------------------------------------------- */}
      <div
        className="mt-10 border-t pt-5 text-[0.8125rem] leading-[1.6]"
        style={{ borderColor: "var(--rc-rule)", color: "var(--rc-ink-60)" }}
      >
        <p>
          <strong style={{ color: "var(--rc-ink)" }}>How this was built:</strong> scored by
          rules Anil wrote, computed on our server. Every word above was written by a person
          before you started — no AI generated any part of your result. The full method is
          published, question by question.
        </p>
        <p className="rc-no-print mt-3">
          <a
            href="/ai-ready/reality-check/methodology"
            className="underline underline-offset-2"
            style={{ color: "var(--rc-accent-sm)" }}
          >
            Read the method
          </a>
          {" · "}
          <a
            href="/ai-ready/reality-check/privacy"
            className="underline underline-offset-2"
            style={{ color: "var(--rc-accent-sm)" }}
          >
            Privacy
          </a>
        </p>
      </div>
    </div>
  );
}
