"use client";

import { useState } from "react";
import { EMAIL_EXCHANGE } from "@/data/reality-check/narrative";
import { track } from "@/lib/analytics";

/**
 * The email ask. It sits after the whole result, and it gates nothing.
 *
 * That was the contested call in the spec and it went this way deliberately.
 * For an audience whose main objection is distrust, holding someone's own
 * answers back would be exactly the bait they expected. What the address buys
 * is a copy they can keep and the comparison when it is ready, both of which
 * can only be delivered later. Nothing is being withheld now.
 *
 * There is no newsletter sign-up here. A monthly briefing was specced, but
 * committing to one before it exists would be a promise the firm has not
 * decided to keep yet.
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
  const [honeypot, setHoneypot] = useState("");
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  // With no database wired up there is no stored result to attach an address
  // to. Saying so is better than taking the address and quietly dropping it.
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
          consentBriefing: false,
          website: honeypot,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setState("error");
        setMessage(
          data?.error === "invalid_email"
            ? "That address does not look right. Check it and try again."
            : "That did not send. Try again in a moment."
        );
        return;
      }

      setState("sent");
      // Tell the truth about what actually happened. If no provider is wired
      // up the address is stored but nothing was emailed, and claiming
      // otherwise is the kind of small lie this product argues against.
      setMessage(
        data?.subscribed
          ? EMAIL_EXCHANGE.success
          : "Saved. Email sending is not switched on yet, so Anil Chandra, who runs Xpedite Partners, will send it to you himself."
      );
    } catch {
      setState("error");
      setMessage("That did not send. Try again in a moment.");
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
          {/* Honeypot. Positioned off-screen rather than display:none, which
              some bots skip. */}
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
              // Tie the error and the "not switched on" note to the field, so a
              // screen-reader user hears why the input is refusing them rather
              // than an announcement with nothing to attach it to.
              aria-invalid={state === "error" || undefined}
              aria-describedby={
                state === "error" ? "rc-email-error" : !canSubmit ? "rc-email-note" : undefined
              }
              className="min-h-[48px] flex-1 border bg-transparent px-3.5 py-2.5 text-base disabled:opacity-50"
              style={{ borderColor: "var(--rc-rule-strong)", color: "var(--rc-ink)" }}
            />
            <button
              type="submit"
              disabled={!canSubmit || state === "sending"}
              className="min-h-[48px] rounded-lg px-6 py-3 text-base font-semibold text-white transition-colors hover:brightness-90 disabled:opacity-50"
              style={{ background: "var(--rc-accent-lg)" }}
            >
              {state === "sending" ? "Sending" : EMAIL_EXCHANGE.button}
            </button>
          </div>

          {/* This state should not survive to launch. With the save button
              removed, email is the only route to a copy, so a reader here can
              take the whole check and leave with nothing they can keep. It is
              on the launch checklist for that reason. Until then, say what to
              do rather than telling someone to leave a browser tab open. */}
          {!canSubmit && (
            <p id="rc-email-note" className="mt-3 text-[0.875rem]" style={{ color: "var(--rc-ink-60)" }}>
              Email is not switched on yet. Print this page from your browser to keep a copy,
              or write to {" "}
              <a
                href="mailto:info@xpeditepartners.com.au?subject=AI%20Reality%20Check%20result"
                className="underline underline-offset-2"
                style={{ color: "var(--rc-accent-sm)" }}
              >
                info@xpeditepartners.com.au
              </a>{" "}
              and Anil will send you one.
            </p>
          )}

          {state === "error" && (
            <p id="rc-email-error" className="mt-3 text-[0.875rem]" role="alert" style={{ color: "var(--rc-accent-sm)" }}>
              {message}
            </p>
          )}

          <p className="mt-4 text-[0.8125rem] leading-[1.6]" style={{ color: "var(--rc-ink-60)" }}>
            {EMAIL_EXCHANGE.reassurance}
          </p>
          <p className="mt-2 text-[0.8125rem] leading-[1.6]" style={{ color: "var(--rc-ink-60)" }}>
            {EMAIL_EXCHANGE.privacyMicrocopy}
          </p>
        </form>
      )}
    </div>
  );
}
