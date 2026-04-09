import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustryContent from "@/components/IndustryContent";
import { industries, getIndustryBySlug } from "@/data/industries";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Not Found" };

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://xpeditepartners.com.au/industries/${industry.slug}`,
    },
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <Header />
      <main>
        <IndustryContent industry={industry} />
      </main>
      <Footer />
    </>
  );
}
