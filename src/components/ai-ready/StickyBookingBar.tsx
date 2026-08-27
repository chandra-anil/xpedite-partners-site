"use client";

import { useEffect, useState, useCallback } from "react";
import { track } from "@/lib/analytics";
import { aiReady } from "@/data/ai-ready";

/**
 * Mobile-only booking bar.
 *
 * Rules it obeys:
 *  - Appears only after ~55% scroll depth, i.e. after the proof sections. Asking
 *    before you have earned it is the fastest way to be dismissed.
 *  - Hides itself while the closing CTA is on screen — two competing "book a
 *    call" buttons in one viewport is noise.
 *  - Dismissible, and stays dismissed for the session.
 *  - Adds matching padding to <body> while visible, so it never covers content
 *    (including the footer).
 *  - Respects the iOS home indicator via safe-area-inset-bottom (see .xr-bar).
 */

const REVEAL_AT = 0.55;
const DISMISS_KEY = "xr-bar-dismissed";
const BAR_HEIGHT = 76; // px, excluding safe-area inset

export default function StickyBookingBar({
  closingSectionId,
}: {
  closingSectionId: string;
}) {
  // Read once, lazily. On the server this is `false`; on the client's first
  // render it may be `true`. Both render null (pastThreshold is false either
  // way), so there is no hydration mismatch in the DOM.
  const [dismissed, setDismissed] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [pastThreshold, setPastThreshold] = useState(false);
  const [closingInView, setClosingInView] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;
        setPastThreshold(window.scrollY / scrollable >= REVEAL_AT);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById(closingSectionId);
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setClosingInView(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [closingSectionId]);

  const visible = !dismissed && pastThreshold && !closingInView;

  // Reserve space so the bar never overlays content.
  useEffect(() => {
    if (!visible) return;
    const mq = window.matchMedia("(min-width: 768px)");
    if (mq.matches) return; // md:hidden — no bar, no padding
    const prev = document.body.style.paddingBottom;
    document.body.style.paddingBottom = `calc(${BAR_HEIGHT}px + env(safe-area-inset-bottom, 0px))`;
    return () => {
      document.body.style.paddingBottom = prev;
    };
  }, [visible]);

  const dismiss = useCallback(() => {
    setDismissed(true);
    try {
      window.sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* private mode — bar simply returns next load */
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className="xr-bar md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1a1a1a]/98 backdrop-blur-sm border-t border-[#E8632B]/40"
      style={{ boxShadow: "0 -8px 24px rgba(0,0,0,0.45)" }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <a
          href={aiReady.bookingUrl}
          onClick={() => track("book_call_click", { section: "sticky_bar" })}
          className="flex-1 inline-flex items-center justify-center min-h-[48px] rounded-lg bg-[#C5521F] text-white font-semibold text-[15px] hover:bg-[#A8441A] transition-colors"
        >
          Book a 20-minute call
        </a>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Hide the booking bar"
          className="shrink-0 w-11 h-11 inline-flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
