import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xpedite Partners | Delivery Consultancy Brisbane",
  description:
    "Xpedite Partners is a specialist delivery consultancy in Brisbane, Australia. We bring world-class delivery discipline to complex technology programs, digital portfolios, and agile transformations.",
  keywords: [
    "delivery consultancy",
    "agile transformation",
    "technology program management",
    "digital delivery",
    "Brisbane consultancy",
    "IT consulting Australia",
    "portfolio management",
    "delivery governance",
    "PMO consulting",
    "program delivery",
    "digital transformation consultancy Australia",
    "delivery operating model",
    "delivery excellence",
    "agile coaching Brisbane",
  ],
  metadataBase: new URL("https://xpeditepartners.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://xpeditepartners.com.au",
    siteName: "Xpedite Partners",
    title: "Xpedite Partners | Delivery Consultancy Brisbane",
    description:
      "Specialist delivery consultancy bringing world-class delivery discipline to complex technology programs across Australia.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Xpedite Partners — Delivery Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xpedite Partners | Delivery Consultancy Brisbane",
    description:
      "Specialist delivery consultancy bringing world-class delivery discipline to complex technology programs across Australia.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Xpedite Partners",
  description:
    "Specialist delivery consultancy bringing world-class delivery discipline to complex technology programs and digital portfolios.",
  url: "https://xpeditepartners.com.au",
  email: "info@xpeditepartners.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  founder: {
    "@type": "Person",
    name: "Anil Chandra",
    jobTitle: "Founder & Principal Consultant",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  serviceType: [
    "Delivery Governance",
    "Agile Transformation",
    "Portfolio Management",
    "Technology Program Management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
