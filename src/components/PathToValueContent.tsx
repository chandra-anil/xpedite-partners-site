"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PtvFrameworkVisual from "./PtvFrameworkVisual";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const layers = [
  {
    name: "Direct the Investment",
    elements: ["Strategic Intent & Funding Logic", "Portfolio Flow & Shaping", "Demand Management Discipline"],
    colour: "#E8632B",
  },
  {
    name: "Equip the Teams",
    elements: ["Product & Initiative Clarity", "Team Design & Ownership", "Delivery Rhythm & Cadence"],
    colour: "#d4880f",
  },
  {
    name: "Enable the System",
    elements: ["Governance & Decision Rights", "Economic Flow & Lead Time", "Dependency Management", "Technical Health"],
    colour: "#2e86ab",
  },
  {
    name: "Sustain and Evolve",
    elements: ["Feedback Loops & Learning", "Adaptive System Maturity", "Adoption & Value Realisation"],
    colour: "#27ae60",
  },
];

const differentiators = [
  {
    title: "Context changes everything",
    desc: "A mining enterprise and a SaaS startup need fundamentally different priorities. Our model adjusts for delivery model, scale, uncertainty, regulatory burden, and industry sector — because generic maturity assessments waste money.",
  },
  {
    title: "Not all gaps are equal",
    desc: "Most frameworks show you a radar chart and say \"close the gaps.\" We weight each gap by how much it actually impacts value delivery in your specific context. You get a ranked priority list, not a wall of recommendations.",
  },
  {
    title: "Evidence, not opinion",
    desc: "Scoring is grounded in research from DORA, Standish CHAOS, Pendo, McKinsey, Prosci, and Reinertsen — cross-referenced with 20+ years of hands-on delivery leadership across enterprise technology programs.",
  },
  {
    title: "Phased, realistic targets",
    desc: "We don't tell you to \"get to 10/10 on everything.\" Recommended targets are phased across three horizons, calibrated to your strategic priority — whether that's speed-to-value, cost reduction, or a balanced approach.",
  },
];

export default function PathToValueContent() {
  return (
    <div className="bg-[#1a1a1a] text-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-[#E8632B] text-sm font-semibold tracking-widest uppercase mb-4">
              Delivery Diagnostic
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Path to Value
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
              Your delivery system is a chain of interconnected capabilities — from investment logic to value realisation. We help you identify which parts of that chain matter most in your context, so you invest where it counts.
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

      {/* Problem statement */}
      <section className="py-20 px-6 bg-[#222]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-8 text-center">The Problem with Maturity Assessments</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[#E8632B] font-semibold mb-2">What most consultants do</p>
                <ul className="text-white/60 space-y-2 text-sm leading-relaxed">
                  <li>• Measure current state across every dimension</li>
                  <li>• Produce a radar chart showing gaps</li>
                  <li>• Recommend closing all gaps equally</li>
                  <li>• Generic playbook regardless of context</li>
                  <li>• No prioritisation, no phasing, no sequencing</li>
                </ul>
              </div>
              <div className="p-6 bg-[#E8632B]/10 rounded-lg border border-[#E8632B]/30">
                <p className="text-[#E8632B] font-semibold mb-2">What we do differently</p>
                <ul className="text-white/80 space-y-2 text-sm leading-relaxed">
                  <li>• Assess current capability at the practice level</li>
                  <li>• Weight every gap by context-specific impact</li>
                  <li>• Rank priorities by what actually moves value</li>
                  <li>• Generate phased targets across 3 horizons</li>
                  <li>• Tell you where to start and what to defer</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Framework overview */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <p className="text-[#E8632B] text-sm font-semibold tracking-widest uppercase mb-4 text-center">
              The Framework
            </p>
            <h2 className="text-3xl font-bold mb-4 text-center">
              13 Elements Across 4 Layers
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              Every delivery system comprises these interconnected capabilities. The question isn&apos;t whether they exist, but which ones matter most for your organisation right now.
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Layers list */}
              <div className="w-full md:w-1/2 space-y-6">
                {layers.map((layer, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div
                      className="w-1 rounded-full self-stretch flex-shrink-0"
                      style={{ backgroundColor: layer.colour }}
                    />
                    <div>
                      <h3 className="font-semibold text-lg mb-2" style={{ color: layer.colour }}>
                        {layer.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {layer.elements.map((el) => (
                          <span
                            key={el}
                            className="text-xs px-3 py-1 rounded border text-white/70"
                            style={{ borderColor: `${layer.colour}40` }}
                          >
                            {el}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated visual */}
              <div className="w-full md:w-1/2">
                <PtvFrameworkVisual />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works - steps */}
      <section className="py-20 px-6 bg-[#222]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <p className="text-[#E8632B] text-sm font-semibold tracking-widest uppercase mb-4 text-center">
              The Process
            </p>
            <h2 className="text-3xl font-bold mb-12 text-center">
              From Assessment to Action Plan
            </h2>

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Describe Your Situation",
                  desc: "We configure the model for your delivery model, scale, industry, uncertainty level, and regulatory environment. Then we assess your current capability at the practice level — 68 individual practices across 13 elements.",
                  screenshots: ["/images/ptv-context.webp", "/images/ptv-assessment.webp"],
                  alts: ["Context configuration — tailor the model to your organisation", "Practice-level capability assessment across 68 practices"],
                },
                {
                  step: "2",
                  title: "See What to Prioritise",
                  desc: "The model weights every gap by how much it impacts value delivery in your specific context. You get a ranked priority list — not a flat radar chart. Adjust your strategic priority (cost reduction vs speed-to-value) and watch priorities shift in real time.",
                  screenshots: ["/images/ptv-priorities.webp"],
                  alts: ["Context-weighted priority rankings — where closing gaps delivers the most value"],
                },
                {
                  step: "3",
                  title: "Get Your Plan",
                  desc: "Recommended targets are generated for each practice, phased across three horizons. Targets are calibrated to your context and strategic priority — higher-leverage practices get more ambitious targets. You get a clear action plan: where you are, where to aim, and what to work on first.",
                  screenshots: ["/images/ptv-plan.webp"],
                  alts: ["Phased improvement plan with targets across three horizons"],
                },
              ].map((item) => (
                <div key={item.step}>
                  <div className="flex gap-6 items-start mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#E8632B] text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className={`grid gap-4 ${item.screenshots.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
                    {item.screenshots.map((src, i) => (
                      <div key={i} className="rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                          src={src}
                          alt={item.alts[i]}
                          width={1400}
                          height={900}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-12 text-center">Why This Is Different</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {differentiators.map((d, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <h3 className="font-semibold text-[#E8632B] mb-2">{d.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 px-6 bg-[#222]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-8">Who This Is For</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Portfolio Directors",
                "PMO Leads",
                "Delivery Transformation Leads",
                "CIO / CTO Direct Reports",
                "Agile Centre of Excellence",
                "Program Directors",
              ].map((role) => (
                <span
                  key={role}
                  className="px-5 py-2 bg-white/5 border border-white/10 rounded text-sm text-white/80"
                >
                  {role}
                </span>
              ))}
            </div>
            <p className="text-white/50 text-sm mt-8 max-w-xl mx-auto">
              Particularly valuable when you&apos;re leading a delivery transformation, standing up a new portfolio function, or trying to work out where to invest next in your delivery capability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4">Ready to Prioritise What Matters?</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              A Path to Value session takes 90–120 minutes and produces a context-specific prioritised improvement plan your leadership team can act on immediately.
            </p>
            <a
              href="mailto:info@xpeditepartners.com.au?subject=Path%20to%20Value%20—%20Enquiry"
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
