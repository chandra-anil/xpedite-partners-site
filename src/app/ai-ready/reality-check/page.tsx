import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RealityCheck from "@/components/reality-check/RealityCheck";
import { aiReady } from "@/data/ai-ready";
import { COUNTS } from "@/data/reality-check/questions";

const TITLE = "AI Reality Check — free AI readiness scorecard | Xpedite AI Ready";
const DESCRIPTION =
  "A free, structured read on how ready your business is for AI: the rules around it, how work runs, and your people. Under 5 minutes, no typing, full result on screen without giving an email address.";
const URL = "https://xpeditepartners.com.au/ai-ready/reality-check";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI readiness assessment",
    "free AI scorecard",
    "AI governance small business",
    "National AI Centre essential practices",
    "Queensland SME AI",
  ],
  alternates: { canonical: "/ai-ready/reality-check" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: URL,
    siteName: "Xpedite Partners",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

/**
 * Booking destination for the results CTA.
 *
 * Env var first so a real scheduler can be swapped in from Vercel without a
 * deploy; falls back to the same mailto the rest of /ai-ready uses, so nothing
 * on the page is ever broken.
 */
const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || aiReady.bookingUrl;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AI Reality Check",
  applicationCategory: "BusinessApplication",
  url: URL,
  description: DESCRIPTION,
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "AUD" },
  provider: {
    "@type": "Organization",
    name: "Xpedite Partners",
    url: "https://xpeditepartners.com.au",
  },
};

export default function RealityCheckPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Rendered with JS disabled, so the page is never a blank dark screen
            to a crawler or a locked-down browser. The instrument itself needs
            JS; saying so plainly beats an empty page. */}
        <noscript>
          <div className="bg-[#0F0F0F] px-5 py-16 text-white">
            <div className="mx-auto max-w-2xl">
              <h1 className="xr-h2 font-bold">AI Reality Check</h1>
              <p className="mt-4 text-white/70">
                {COUNTS.scored} scored questions, {COUNTS.context} quick details and one final
                question — under 5 minutes, and your full result shows on screen without an
                email address. It needs JavaScript switched on to run.
              </p>
            </div>
          </div>
        </noscript>
        <RealityCheck bookingUrl={bookingUrl} />
      </main>
      <Footer />
    </>
  );
}
