"use client";

import { useState } from "react";
import { EMAIL_EXCHANGE } from "@/data/reality-check/narrative";
import { QLD_BENCHMARK } from "@/data/reality-check/benchmarks";
import { track } from "@/lib/analytics";

/**
 * The email ask. It sits AFTER the whole result, and it gates nothing.
 *
 * That was the contested call in the spec and it went this way deliberately:
 * for an audience whose main objection is distrust, holding someone's own
 * answers hostage is exactly the bait they expected, and it would contradict
 * "the advisor who says no" on the firm's first product. What the address buys
 * is the PDF and the percentile notification — things you can only get later,
 * not things being withheld now.
 *
 * The briefing checkbox is unticked and separate. The Spam Act wants express
 * consent, and a firm selling governance cannot have sloppy consent in its own
 * funnel.
 */

type State = "idle" | "sending" | "sent" | "error";

export default function EmailExchange({
  token,
  persistent,
}: {
  token: string;
  persistent: boolean;
}) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  // With no database wired up there is no stored result to attach an address
  // to, and no way to honour the percentile promise. Saying so is better than
  // taking the address and quietly dropping it.
  const canSubmit = persistent && token !== "";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "sending") return;

    setState("sending");
    track("scorecard_email_submit", { section: "results" });

    try {
      const res = await fetch("/api/reality-check/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          email,
          consentBriefing: consent,
          website: honeypot,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setState("error");
        setMessage(
          data?.error === "invalid_email"
            ? "That address doesn't look right. Check it and try again."
            : "That didn't send. Try again in a moment."
        );
        return;
      }

      setState("sent");
      // Tell the truth about what actually happened. If no provider is wired up
      // the address is stored but nothing was emailed, and claiming otherwise
      // is the kind of small lie this whole product is arguing against.
      setMessage(
        data?.subscribed
          ? EMAIL_EXCHANGE.success
          : "Saved. The mailing setup isn't live yet, so Anil will send this one by hand."
      );
    } catch {
      setState("error");
      setMessage("That didn't send. Try again in a moment.");
    }
  }

  return (
    <div>
      <h2 className="rc-h2 font-semibold">{EMAIL_EXCHANGE.heading}</h2>
      <p className="mt-3 leading-[1.65]" style={{ color: "var(--rc-ink-60)" }}>
        {EMAIL_EXCHANGE.body}
      </p>

      <ul className="mt-4 flex flex-col gap-2">
        {EMAIL_EXCHANGE.items.map((item) => (
          <li key={item} className="flex gap-3 text-[0.9375rem] leading-[1.6]">
            <span aria-hidden="true" style={{ color: "var(--rc-mark)" }}>
              &#8594;
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {state === "sent" ? (
        <p
          className="mt-6 border-l-2 pl-4 leading-[1.6]"
          style={{ borderColor: "var(--rc-mark)" }}
          role="status"
        >
          {message}
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6">
          {/* Honeypot. Off-screen rather than display:none, which some bots skip. */}
          <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="rc-website">Website</label>
            <input
              id="rc-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <label htmlFor="rc-email" className="rc-label block" style={{ color: "var(--rc-ink-60)" }}>
            {EMAIL_EXCHANGE.fieldLabel}
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              id="rc-email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!canSubmit}
              className="min-h-[48px] flex-1 border bg-transparent px-3.5 py-2.5 text-base disabled:opacity-50"
              style={{ borderColor: "var(--rc-rule-strong)", color: "var(--rc-ink)" }}
            />
            <button
              type="submit"
              disabled={!canSubmit || state === "sending"}
              className="min-h-[48px] rounded-lg px-6 py-3 text-base font-semibold text-white transition-colors hover:brightness-90 disabled:opacity-50"
              style={{ background: "var(--rc-accent-lg)" }}
            >
              {state === "sending" ? "Sending…" : EMAIL_EXCHANGE.button}
            </button>
          </div>

          <label className="mt-4 flex cursor-pointer gap-3 text-[0.9375rem] leading-[1.5]">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              disabled={!canSubmit}
              className="mt-1 h-4 w-4 flex-none"
            />
            <span>{EMAIL_EXCHANGE.consentLabel}</span>
          </label>

          {!canSubmit && (
            <p className="mt-3 text-[0.875rem]" style={{ color: "var(--rc-ink-60)" }}>
              Email delivery isn&rsquo;t switched on yet. Your result is on this page — use
              &ldquo;Save as PDF&rdquo; below to keep a copy.
            </p>
          )}

          {state === "error" && (
            <p className="mt-3 text-[0.875rem]" role="alert" style={{ color: "var(--rc-accent-sm)" }}>
              {message}
            </p>
          )}

          <p className="mt-4 text-[0.8125rem] leading-[1.6]" style={{ color: "var(--rc-ink-60)" }}>
            {EMAIL_EXCHANGE.reassurance}
          </p>
          <p className="mt-2 text-[0.8125rem] leading-[1.6]" style={{ color: "var(--rc-ink-60)" }}>
            {EMAIL_EXCHANGE.privacyMicrocopy} {QLD_BENCHMARK.notifyPromise}
          </p>
        </form>
      )}

      <div className="mt-6">
        <button
          type="button"
          onClick={() => {
            track("scorecard_print", { section: "results" });
            window.print();
          }}
          className="min-h-[48px] border px-6 py-3 text-[0.9375rem] font-semibold transition-colors hover:bg-black/5"
          style={{ borderColor: "var(--rc-rule-strong)", color: "var(--rc-ink)" }}
        >
          Save as PDF
        </button>
        <p className="mt-2 text-[0.8125rem]" style={{ color: "var(--rc-ink-60)" }}>
          Prints as a one-page document. Same result you&rsquo;re reading — nothing is held
          back.
        </p>
      </div>
    </div>
  );
}
