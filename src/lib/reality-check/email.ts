/**
 * AI Reality Check — email delivery
 * ---------------------------------
 * Env-gated. With no provider configured every function is a no-op that reports
 * `delivered: false`, and the caller tells the truth to the user rather than
 * pretending something was sent. Nothing here throws into a request path: a
 * failed newsletter sync must never lose someone's stored result.
 *
 * Provider is Kit (formerly ConvertKit). Chosen for a one-person firm: tagging,
 * double opt-in and broadcast scheduling with effectively no operational
 * surface. The trade-off is disclosed in the privacy note — Kit stores
 * subscriber data in the United States, which is an overseas disclosure under
 * Australian Privacy Principle 8.
 *
 * To activate, set in Vercel:
 *   KIT_API_KEY          — Kit v4 API key
 *   KIT_FORM_ID          — the form subscribers are added through (double opt-in)
 *   KIT_BRIEFING_TAG_ID  — optional; applied only with express consent
 */

const KIT_API = "https://api.kit.com/v4";

export interface DeliveryResult {
  delivered: boolean;
  /** Present when delivery was skipped or failed. Logged, never shown raw. */
  reason?: string;
}

export function emailConfigured(): boolean {
  return Boolean(process.env.KIT_API_KEY && process.env.KIT_FORM_ID);
}

/**
 * Adds a subscriber and tags them with sector and archetype so the monthly
 * briefing can be segmented later without re-deriving anything.
 *
 * The briefing tag is applied ONLY when `consentBriefing` is true. That consent
 * is a separate, unticked checkbox on the results page: the Spam Act wants
 * express consent, and a firm selling governance cannot have sloppy consent in
 * its own funnel.
 */
export async function subscribe(params: {
  email: string;
  sector: string;
  archetype: string;
  consentBriefing: boolean;
}): Promise<DeliveryResult> {
  if (!emailConfigured()) {
    return { delivered: false, reason: "email_provider_not_configured" };
  }

  const tags = [`rc-sector-${params.sector}`, `rc-archetype-${params.archetype}`];
  if (params.consentBriefing && process.env.KIT_BRIEFING_TAG_ID) {
    tags.push(process.env.KIT_BRIEFING_TAG_ID);
  }

  try {
    const res = await fetch(`${KIT_API}/forms/${process.env.KIT_FORM_ID}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": process.env.KIT_API_KEY as string,
      },
      body: JSON.stringify({
        email_address: params.email,
        fields: { rc_archetype: params.archetype, rc_sector: params.sector },
        tags,
      }),
      // A slow newsletter provider must not hold up someone's results page.
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      return { delivered: false, reason: `kit_http_${res.status}` };
    }
    return { delivered: true };
  } catch (err) {
    return {
      delivered: false,
      reason: err instanceof Error ? err.name : "kit_request_failed",
    };
  }
}

/**
 * Basic shape check only. Deliverability is the provider's job, and rejecting
 * unusual-but-valid addresses is a worse failure than accepting a typo — the
 * result is already on screen either way.
 */
export function looksLikeEmail(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  );
}
