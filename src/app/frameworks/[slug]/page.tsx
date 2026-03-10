import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolDetailContent from "@/components/ToolDetailContent";
import { xdsTools, getToolBySlug } from "@/data/xds-tools";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return xdsTools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // PTV has its own page
  if (slug === "path-to-value") {
    return {
      title: "Path to Value | Xpedite Partners",
      description: "Evidence-weighted delivery system prioritisation.",
      alternates: { canonical: "/path-to-value" },
    };
  }

  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Not Found" };

  return {
    title: `${tool.title} | Xpedite Partners`,
    description: tool.heroDescription,
    openGraph: {
      title: `${tool.title} | Xpedite Partners`,
      description: tool.heroDescription,
      url: `https://xpeditepartners.com.au/frameworks/${tool.slug}`,
    },
    alternates: { canonical: `/frameworks/${tool.slug}` },
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;

  // PTV redirects to its dedicated page
  if (slug === "path-to-value") {
    const { redirect } = await import("next/navigation");
    redirect("/path-to-value");
  }

  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  return (
    <>
      <Header />
      <main>
        <ToolDetailContent tool={tool} />
      </main>
      <Footer />
    </>
  );
}
