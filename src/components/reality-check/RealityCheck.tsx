"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  COUNTS,
  DIMENSION_BY_ID,
  STEPS,
  type Step,
} from "@/data/reality-check/questions";
import type { ResultsView } from "@/lib/reality-check/results";
import { track } from "@/lib/analytics";
import ResultsSheet from "./ResultsSheet";

/**
 * The flow: entry → 22 taps → findings sheet.
 *
 * The entry screen stays on the firm's dark ground — you are still on our side
 * of the table. From question one the surface flips to paper, because from
 * there on it is the reader's own working paper being filled in, not our
 * brochure. On a phone the sheet runs full bleed: a dark frame on a 390px
 * screen is wasted pixels, and a light surface is simply more legible outdoors,
 * which is where this will actually be used.
 *
 * Every answer is one tap. There is no typing anywhere in the instrument.
 */

type Phase = "entry" | "flow" | "submitting" | "results" | "error";

const HOLD_MS = 250;

export default function RealityCheck({ bookingUrl }: { bookingUrl: string }) {
  const [phase, setPhase] = useState<Phase>("entry");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [context, setContext] = useState<Record<string, string>>({});
  const [closer, setCloser] = useState<string | null>(null);
  const [justPicked, setJustPicked] = useState<string | null>(null);
  const [results, setResults] = useState<ResultsView | null>(null);
  const [token, setToken] = useState("");
  const [persistent, setPersistent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const startedAt = useRef<number | null>(null);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  // Move focus to the new question so a screen-reader or keyboard user is not
  // stranded at the top of the document after each auto-advance.
  useEffect(() => {
    if (phase === "flow") headingRef.current?.focus();
  }, [index, phase]);

  const step: Step | undefined = STEPS[index];

  const submit = useCallback(
    async (
      finalAnswers: Record<string, number>,
      finalContext: Record<string, string>,
      finalCloser: string | null
    ) => {
      setPhase("submitting");
      const seconds = startedAt.current
        ? Math.round((Date.now() - startedAt.current) / 1000)
        : null;

      try {
        const res = await fetch("/api/reality-check/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            answers: finalAnswers,
            context: finalContext,
            closer: finalCloser,
            completionSeconds: seconds,
            website: "",
          }),
        });
        const data = await res.json();

        if (!res.ok || !data.results) {
          setPhase("error");
          setErrorMessage(
            data?.error === "rate_limited"
              ? "This has been completed several times from your connection in the last hour. Try again later."
              : "Something went wrong scoring that. Your answers are still here — try again."
          );
          return;
        }

        setResults(data.results as ResultsView);
        setToken(data.token ?? "");
        setPersistent(Boolean(data.persistent));
        setPhase("results");
        track("scorecard_complete", { section: "reality_check" });
        window.scrollTo({ top: 0, behavior: "auto" });
      } catch {
        setPhase("error");
        setErrorMessage(
          "Couldn't reach the server. Your answers are still here — try again."
        );
      }
    },
    []
  );

  const advance = useCallback(
    (
      nextAnswers: Record<string, number>,
      nextContext: Record<string, string>,
      nextCloser: string | null
    ) => {
      if (index + 1 >= STEPS.length) {
        void submit(nextAnswers, nextContext, nextCloser);
      } else {
        setIndex((i) => i + 1);
      }
      setJustPicked(null);
    },
    [index, submit]
  );

  /** Mark the box, hold a beat so the choice is visible, then move on. */
  const pick = useCallback(
    (value: string | number) => {
      if (!step || advanceTimer.current) return;

      const nextAnswers = { ...answers };
      const nextContext = { ...context };
      let nextCloser = closer;

      if (step.kind === "scored") {
        nextAnswers[step.question.id] = value as number;
        setAnswers(nextAnswers);
      } else if (step.kind === "context") {
        nextContext[step.question.id] = value as string;
        setContext(nextContext);
      } else {
        nextCloser = value as string;
        setCloser(nextCloser);
      }

      setJustPicked(String(value));
      advanceTimer.current = setTimeout(() => {
        advanceTimer.current = null;
        advance(nextAnswers, nextContext, nextCloser);
      }, HOLD_MS);
    },
    [advance, answers, closer, context, step]
  );

  /* ---------------- entry ---------------- */

  if (phase === "entry") {
    return (
      <section className="min-h-[70vh] px-5 py-16 sm:px-8" style={{ background: "#0F0F0F" }}>
        <div className="mx-auto max-w-2xl">
          <p className="rc-label" style={{ color: "#E8632B" }}>
            AI Reality Check
          </p>
          <h1 className="xr-h1 mt-3 font-bold text-white">
            Find out where your business actually stands.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-[1.6] text-white/70">
            A structured read on how ready your business is for AI — the rules around it,
            how work actually runs, and your people. You&rsquo;ll get a scored result and
            the three decisions it points to.
          </p>

          {/* The honesty framing, set like a scope clause rather than a sales bullet. */}
          <ul
            className="rc-label mt-8 flex flex-col gap-2 border-l-2 pl-4 text-white/70"
            style={{ borderColor: "#E8632B" }}
          >
            <li>{COUNTS.scored} scored questions · {COUNTS.context} quick details · 1 final question</li>
            <li>Under 5 minutes · every answer is one tap · no typing</li>
            <li>Your full result on screen — no email required</li>
          </ul>

          {/* Show the deliverable before asking for anything. */}
          <div className="mt-9 rc-sheet rc-root px-5 py-5" aria-hidden="true">
            <p className="rc-label" style={{ color: "var(--rc-ink-60)" }}>
              What you leave with
            </p>
            <div
              className="mt-3 grid grid-cols-2 border"
              style={{ borderColor: "var(--rc-rule-strong)", borderTopWidth: 3, borderTopColor: "var(--rc-mark)" }}
            >
              {["Sector", "Size", "Role", "Region"].map((k, i) => (
                <div
                  key={k}
                  className="px-3 py-2"
                  style={{
                    borderRight: i % 2 === 0 ? "1px solid var(--rc-rule)" : undefined,
                    borderBottom: i < 2 ? "1px solid var(--rc-rule)" : undefined,
                  }}
                >
                  <span className="rc-label" style={{ color: "var(--rc-ink-60)" }}>
                    {k}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {["Rules and risk", "How work actually runs", "Your people"].map((n) => (
                <div key={n}>
                  <span className="rc-label" style={{ color: "var(--rc-ink-60)" }}>
                    {n}
                  </span>
                  <div
                    className="mt-1 h-2.5 border"
                    style={{ borderColor: "var(--rc-rule-strong)" }}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              startedAt.current = Date.now();
              setPhase("flow");
              track("scorecard_start", { section: "reality_check" });
            }}
            className="mt-9 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#C5521F] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#A8441A]"
          >
            Start the check
          </button>

          {/* Before question one, deliberately: the sceptic gets to inspect the
              instrument before using it. */}
          <p className="mt-6 flex flex-col gap-2 text-[0.875rem] text-white/60 sm:flex-row sm:gap-4">
            <Link href="/ai-ready/reality-check/methodology" className="underline underline-offset-4 hover:text-[#E8632B]">
              How this tool is built and governed
            </Link>
            <Link href="/ai-ready/reality-check/privacy" className="underline underline-offset-4 hover:text-[#E8632B]">
              What we do with your answers
            </Link>
          </p>
        </div>
      </section>
    );
  }

  /* ---------------- results ---------------- */

  if (phase === "results" && results) {
    return (
      <section className="rc-root py-0 sm:py-12" style={{ background: "#0F0F0F" }}>
        <ResultsSheet
          view={results}
          token={token}
          persistent={persistent}
          bookingUrl={bookingUrl}
        />
      </section>
    );
  }

  /* ---------------- submitting / error ---------------- */

  if (phase === "submitting" || phase === "error") {
    return (
      <section
        className="flex min-h-[60vh] items-center px-5 py-16"
        style={{ background: "#0F0F0F" }}
      >
        <div className="mx-auto max-w-xl">
          {phase === "submitting" ? (
            <p className="text-lg text-white/70" role="status">
              Scoring your answers…
            </p>
          ) : (
            <>
              <h1 className="xr-h2 font-bold text-white">That didn&rsquo;t work.</h1>
              <p className="mt-4 text-white/70">{errorMessage}</p>
              <button
                type="button"
                onClick={() => void submit(answers, context, closer)}
                className="mt-6 inline-flex min-h-[48px] items-center rounded-lg bg-[#C5521F] px-7 py-3.5 font-semibold text-white hover:bg-[#A8441A]"
              >
                Try again
              </button>
            </>
          )}
        </div>
      </section>
    );
  }

  /* ---------------- the flow ---------------- */

  if (!step) return null;

  const isScored = step.kind === "scored";
  const dimension = isScored ? DIMENSION_BY_ID[step.question.dimension] : null;
  const currentValue = isScored
    ? answers[step.question.id]
    : step.kind === "context"
      ? context[step.question.id]
      : closer;

  const options = isScored
    ? step.question.anchors.map((a) => ({ value: a.score, label: a.text }))
    : step.question.options.map((o) => ({ value: o.value, label: o.label }));

  return (
    <section className="rc-root rc-sheet min-h-[100vh] px-5 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-xl">
        {/* Section-based progress. Only the three scored parts are numbered —
            the context block sits outside the count so it reads as a breather,
            not a fourth part. */}
        <div className="flex items-baseline justify-between gap-4">
          <p className="rc-label" style={{ color: "var(--rc-ink-60)" }}>
            {isScored && dimension
              ? `Part ${dimension.part} of 3 — ${dimension.publicName}`
              : step.kind === "context"
                ? "About your business"
                : "Last one"}
          </p>
          <span className="rc-label rc-numeral" style={{ color: "var(--rc-ink-60)" }}>
            {index + 1}/{COUNTS.total}
          </span>
        </div>

        <div className="mt-3 flex gap-1.5" aria-hidden="true">
          {[1, 2, 3].map((p) => {
            const done = dimension ? dimension.part > p : step.kind === "closer";
            const active = dimension?.part === p;
            return (
              <div
                key={p}
                className="h-[3px] flex-1"
                style={{
                  background: done || active ? "var(--rc-mark)" : "var(--rc-rule)",
                  opacity: active ? 0.55 : 1,
                }}
              />
            );
          })}
        </div>

        {step.kind === "context" && (
          <p className="mt-6 text-[0.9375rem]" style={{ color: "var(--rc-ink-60)" }}>
            So your result matches your business.
          </p>
        )}

        <h1
          ref={headingRef}
          tabIndex={-1}
          className="rc-question mt-6 font-semibold outline-none"
        >
          {isScored && (
            <span className="rc-label mr-2 align-middle" style={{ color: "var(--rc-mark)" }}>
              {step.question.id}
            </span>
          )}
          {step.question.stem}
        </h1>

        {!isScored && step.question.why && (
          <p className="mt-2 text-[0.875rem]" style={{ color: "var(--rc-ink-60)" }}>
            {step.question.why}
          </p>
        )}

        <div className="mt-7" role="group" aria-label={step.question.stem}>
          {options.map((o) => {
            const checked =
              String(currentValue) === String(o.value) || justPicked === String(o.value);
            return (
              <button
                key={String(o.value)}
                type="button"
                onClick={() => pick(o.value)}
                aria-pressed={checked}
                className="rc-option"
              >
                <span className="rc-box" data-checked={checked} aria-hidden="true" />
                <span className="text-base leading-[1.45]">{o.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="min-h-[44px] text-[0.9375rem] underline underline-offset-4 disabled:opacity-40"
            style={{ color: "var(--rc-ink-60)" }}
          >
            &#8592; Back
          </button>
        </div>
      </div>
    </section>
  );
}
