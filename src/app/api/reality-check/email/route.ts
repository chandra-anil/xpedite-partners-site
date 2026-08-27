/**
 * POST /api/reality-check/email
 *
 * Attaches an email address to an already-stored result, and — if an email
 * provider is configured — subscribes them.
 *
 * This endpoint exists only AFTER someone has seen their whole result. Nothing
 * is gated behind it. It buys the PDF, the percentile notification when the
 * dataset unlocks, and the briefing if they ticked the box.
 */

import { NextResponse } from "next/server";
import { emailConfigured, looksLikeEmail, subscribe } from "@/lib/reality-check/email";
import { getStorage } from "@/lib/reality-check/storage";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;

  // Honeypot, as on submit.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (!looksLikeEmail(body.email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (typeof body.token !== "string" || body.token.length === 0) {
    return NextResponse.json({ error: "missing_token" }, { status: 400 });
  }

  const consentBriefing = body.consentBriefing === true;
  const storage = getStorage();

  const record = await storage.get(body.token);
  if (!record) {
    return NextResponse.json({ error: "unknown_result" }, { status: 404 });
  }

  const attached = await storage.attachEmail(body.token, body.email, consentBriefing);

  // Provider sync is best-effort. If Kit is down or unconfigured the address is
  // already stored against the result, so nothing is lost and it can be synced
  // later. The response tells the client what actually happened rather than
  // claiming a send that did not occur.
  const delivery = await subscribe({
    email: body.email,
    sector: record.context.C1 ?? "unknown",
    archetype: record.archetype,
    consentBriefing,
  });

  if (!delivery.delivered && delivery.reason !== "email_provider_not_configured") {
    console.error("[reality-check] email provider sync failed", delivery.reason);
  }

  return NextResponse.json({
    ok: attached,
    /** False when no provider is wired up yet — the UI says so plainly. */
    providerConfigured: emailConfigured(),
    subscribed: delivery.delivered,
  });
}
