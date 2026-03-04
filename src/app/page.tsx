import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeServe from "@/components/WhoWeServe";
import DeliveryPhilosophy from "@/components/DeliveryPhilosophy";
import NetworkModel from "@/components/NetworkModel";
import WhyUs from "@/components/WhyUs";
import BannerSection from "@/components/BannerSection";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <WhoWeServe />
        <DeliveryPhilosophy />
        <NetworkModel />
        <WhyUs />
        <BannerSection />
        <About />
      </main>
      <Footer />
    </>
  );
}
