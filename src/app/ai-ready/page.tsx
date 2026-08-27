import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AiReadyContent from "@/components/ai-ready/AiReadyContent";

const TITLE =
  "AI advisory and implementation for Queensland businesses | Xpedite AI Ready";
const DESCRIPTION =
  "Senior AI advisory and hands-on implementation for Queensland businesses of 20 to 200 people. Fixed price. Independent: no software sales, no commissions.";
const URL = "https://xpeditepartners.com.au/ai-ready";

/*
 * The 1200×630 share card lives in opengraph-image.tsx (and twitter-image.tsx)
 * in this folder. Next wires it up from the file name, so no `images` key
 * belongs in the metadata below — declaring one here would override the card.
 */

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI advisory Queensland",
    "AI consulting Brisbane",
    "AI governance policy small business",
    "AI readiness assessment",
    "AI implementation SME Australia",
    "National AI Centre essential practices",
  ],
  alternates: { canonical: "/ai-ready" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: URL,
    siteName: "Xpedite Partners",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${URL}#service`,
  name: "Xpedite AI Ready",
  description: DESCRIPTION,
  url: URL,
  email: "info@xpeditepartners.com.au",
  parentOrganization: {
    "@type": "Organization",
    name: "Xpedite Partners",
    url: "https://xpeditepartners.com.au",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "State",
    name: "Queensland",
  },
  founder: {
    "@type": "Person",
    name: "Anil Chandra",
    jobTitle: "Founder and Principal",
  },
  serviceType: [
    "AI advisory",
    "AI governance",
    "AI readiness assessment",
    "AI implementation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Xpedite AI Ready services",
    itemListElement: [
      "AI Reality Check",
      "AI Governance Pack",
      "AI Readiness Assessment",
      "90-Day AI Acceleration Sprint",
      "AI Operating Partner",
      "AI Operating Model Cohort",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function AiReadyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <AiReadyContent />
      </main>
      <Footer />
    </>
  );
}
