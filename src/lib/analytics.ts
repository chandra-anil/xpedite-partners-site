/**
 * Provider-agnostic analytics shim.
 *
 * No analytics provider is installed on this site. This helper no-ops safely
 * until one is, so CTAs can be instrumented now and wired up later.
 *
 * To wire GA4 later, the only change is adding the gtag.js snippet to the page —
 * `track()` will find `window.gtag` and start sending. Same for GTM
 * (`window.dataLayer`). No component needs touching.
 *
 * Events used on /ai-ready:
 *   book_call_click   { section: string }
 *   scorecard_start   { section: string }
 *   tier_cta_click    { tier: string, section: string }
 */

export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: AnalyticsParams) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: string, params: AnalyticsParams = {}): void {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", event, params);
      return;
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...params });
      return;
    }
  } catch {
    // Analytics must never break a click. Swallow and move on.
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics:noop]", event, params);
  }
}
