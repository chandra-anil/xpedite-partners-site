"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { XdsTool } from "@/data/xds-tools";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ToolDetailContent({ tool }: { tool: XdsTool }) {
  return (
    <div className="bg-[#1a1a1a] text-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Link
              href="/frameworks"
              className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-[#E8632B] transition-colors mb-6"
            >
              ← Back to All Frameworks
            </Link>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: tool.phaseColour }}
            >
              {tool.phase} · {tool.subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {tool.title}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
              {tool.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#how-it-works"
                className="px-8 py-3 bg-[#E8632B] text-white rounded font-semibold hover:bg-[#c5521f] transition-colors"
              >
                How It Works
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-white/40 text-white rounded font-semibold hover:border-[#E8632B] hover:text-[#E8632B] transition-colors"
              >
                Book a Session
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 px-6 bg-[#222]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              {tool.problemTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[#E8632B] font-semibold mb-3">
                  The Problem
                </p>
                <ul className="text-white/60 space-y-2 text-sm leading-relaxed">
                  {tool.problemPoints.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-[#E8632B]/10 rounded-lg border border-[#E8632B]/30">
                <p className="text-[#E8632B] font-semibold mb-3">
                  What We Do Differently
                </p>
                <ul className="text-white/80 space-y-2 text-sm leading-relaxed">
                  {tool.solutionPoints.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={tool.image}
                alt={`${tool.title} — output view`}
                width={1440}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-[#222]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-[#E8632B] text-sm font-semibold tracking-widest uppercase mb-4 text-center">
              The Process
            </p>
            <h2 className="text-3xl font-bold mb-12 text-center">
              From Assessment to Action Plan
            </h2>
            <div className="space-y-10">
              {tool.howItWorks.map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#E8632B] text-white flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why This Is Different
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {tool.differentiators.map((d, i) => (
                <div
                  key={i}
                  className="p-6 bg-white/5 rounded-lg border border-white/10"
                >
                  <h3 className="font-semibold text-[#E8632B] mb-2">
                    {d.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 bg-[#222]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              What You Get
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tool.outputs.map((output) => (
                <span
                  key={output}
                  className="px-5 py-2 bg-white/5 border border-white/10 rounded text-sm text-white/80"
                >
                  {output}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8">Who This Is For</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tool.audience.map((role) => (
                <span
                  key={role}
                  className="px-5 py-2 bg-white/5 border border-white/10 rounded text-sm text-white/80"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6 bg-[#222]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Each framework session is facilitated by an experienced delivery
              consultant who configures the tool to your context and walks you
              through the results.
            </p>
            <a
              href={`mailto:info@xpeditepartners.com.au?subject=${encodeURIComponent(tool.title)}%20—%20Enquiry`}
              className="inline-block px-10 py-4 bg-[#E8632B] text-white rounded font-semibold text-lg hover:bg-[#c5521f] transition-colors"
            >
              Get in Touch
            </a>
            <p className="text-white/30 text-xs mt-4">
              info@xpeditepartners.com.au
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
