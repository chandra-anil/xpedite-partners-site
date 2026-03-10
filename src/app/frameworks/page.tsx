import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FrameworksContent from "@/components/FrameworksContent";

export const metadata = {
  title: "Delivery System Frameworks | Xpedite Partners",
  description:
    "14 proprietary frameworks and diagnostic tools built from 20+ years of delivery leadership. Diagnose, design, build, and sustain delivery excellence.",
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
