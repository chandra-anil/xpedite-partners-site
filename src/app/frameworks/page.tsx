import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FrameworksContent from "@/components/FrameworksContent";

export const metadata = {
  title: "Frameworks | Xpedite Partners",
  description:
    "Proprietary frameworks and diagnostic tools built from 20+ years of delivery leadership across complex technology programs.",
};

export default function FrameworksPage() {
  return (
    <>
      <Header />
      <main>
        <FrameworksContent />
      </main>
      <Footer />
    </>
  );
}
