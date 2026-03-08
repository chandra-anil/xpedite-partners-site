import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PathToValueContent from "@/components/PathToValueContent";

export const metadata: Metadata = {
  title: "Path to Value | Xpedite Partners",
  description:
    "Evidence-weighted delivery system prioritisation. We help organisations identify where to invest in their delivery system for maximum value — not just where gaps exist, but where closing them matters most.",
  openGraph: {
    title: "Path to Value | Xpedite Partners",
    description:
      "Evidence-weighted delivery system prioritisation. Identify where to invest for maximum value.",
    url: "https://xpeditepartners.com.au/path-to-value",
  },
  alternates: {
    canonical: "/path-to-value",
  },
};

export default function PathToValuePage() {
  return (
    <>
      <Header />
      <main>
        <PathToValueContent />
      </main>
      <Footer />
    </>
  );
}
