"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setAnimate(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background video */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          poster="/images/hero-bg.jpg"
        >
          <source src="/images/hero-bg-1080.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(135deg, transparent 30%, rgba(232, 99, 43, 0.08) 50%, transparent 70%),
              radial-gradient(ellipse at 70% 50%, rgba(30, 60, 90, 0.5), transparent 70%),
              radial-gradient(ellipse at 30% 50%, rgba(20, 40, 60, 0.5), transparent 70%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1
          className={`text-5xl md:text-7xl font-bold text-white mb-6 opacity-0 ${animate ? "animate-hero-fade-in" : ""}`}
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", animationDelay: "0s" }}
        >
          Xpedite Partners
        </h1>

        <p
          className={`text-2xl md:text-4xl text-[#E8632B] italic mb-10 font-light opacity-0 ${animate ? "animate-hero-fade-in" : ""}`}
          style={{ animationDelay: "0.2s" }}
        >
          The operating system behind successful digital delivery
        </p>

        <p
          className={`text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed opacity-0 ${animate ? "animate-hero-fade-in" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          Xpedite Partners is a specialist consultancy that brings world-class delivery discipline to
          complex technology programs and digital product portfolios. Our frameworks, operating
          models, and leadership capability have been built from over two decades guiding large-scale
          transformation across some of Australia&apos;s most demanding environments.
        </p>
      </div>
    </section>
  );
}
