"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Industry } from "@/data/industries";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ── Inline SVG icon map ── */
const icons: Record<string, React.ReactNode> = {
  /* hero / stat */
  dollar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  "hard-hat": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M2 18a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2z" /><path d="M10 15V6a2 2 0 114 0v9" /><path d="M4 15v-3a8 8 0 0116 0v3" />
    </svg>
  ),
  "trending-up": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  /* sound familiar */
  calculator: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="2" width="16" height="20" rx="2" /><rect x="8" y="6" width="8" height="4" /><line x1="8" y1="14" x2="8" y2="14.01" /><line x1="12" y1="14" x2="12" y2="14.01" /><line x1="16" y1="14" x2="16" y2="14.01" /><line x1="8" y1="18" x2="8" y2="18.01" /><line x1="12" y1="18" x2="12" y2="18.01" /><line x1="16" y1="18" x2="16" y2="18.01" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  puzzle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 01-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 10-3.214 3.214c.446.166.855.497.925.968a.979.979 0 01-.276.837l-1.61 1.611a2.404 2.404 0 01-1.705.707 2.402 2.402 0 01-1.704-.706l-1.568-1.568a1.026 1.026 0 00-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 11-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 00-.289-.877l-1.568-1.568A2.402 2.402 0 011.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 01.837-.276c.47.07.802.48.968.925a2.501 2.501 0 103.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 01.276-.837l1.61-1.611a2.404 2.404 0 011.705-.707c.618 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 113.237 3.237c-.464.18-.894.527-.967 1.02z" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 1012 0V2z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18.01" />
    </svg>
  ),
  alert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" />
    </svg>
  ),
  /* pain point icons */
  "eye-off": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" /><path d="M14.12 14.12a3 3 0 11-4.24-4.24" />
    </svg>
  ),
  "trending-down": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" />
    </svg>
  ),
  "door-open": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M13 4h3a2 2 0 012 2v14" /><path d="M2 20h3" /><path d="M13 20h9" /><path d="M10 12v.01" /><path d="M13 4.562v16.157a1 1 0 01-1.242.97L5 20V5.562a2 2 0 011.515-1.94l4-1A2 2 0 0113 4.561z" />
    </svg>
  ),
  shuffle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "x-circle": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  /* process steps */
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  "bar-chart": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  tool: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  "check-circle": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  /* before/after */
  "arrow-right": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
};

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`inline-block flex-shrink-0 ${className}`}>
      {icons[name] ?? icons["check-circle"]}
    </span>
  );
}

export default function IndustryContent({ industry }: { industry: Industry }) {
  const processSteps = [
    {
      icon: "search",
      title: "We learn your business",
      body: "We spend time on your sites, in your office, with your people. We look at how jobs flow from quote to completion \u2014 where time gets wasted, where money leaks, where things fall between the cracks.",
    },
    {
      icon: "bar-chart",
      title: "We show you the picture",
      body: "You get a clear, plain-English view of where your business is strong and where it\u2019s costing you. No jargon, no 200-page report. Just an honest assessment with real numbers.",
    },
    {
      icon: "tool",
      title: "We build the fix \u2014 with you",
      body: "We set up the right tools and processes for your size and type of work. We make sure your team actually uses them. We stay until the new way of working sticks \u2014 not just until the software is installed.",
    },
    {
      icon: "check-circle",
      title: "You run it from here",
      body: "The goal is a business that runs properly without us. Better visibility, tighter margins, less firefighting. You manage by looking at a dashboard, not by being on every site.",
    },
  ];

  return (
    <div className="bg-[#1a1a1a] text-white">
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background image */}
        <Image
          src={industry.heroImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/85 via-[#1a1a1a]/80 to-[#1a1a1a]" />
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Decorative glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E8632B]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-[#E8632B] text-sm font-semibold tracking-widest uppercase mb-4">
              {industry.name} Industry
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {industry.heroHeadline}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
              {industry.heroSub}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {industry.heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-[#E8632B]/40 transition-colors"
                >
                  <p className="text-3xl md:text-4xl font-bold text-[#E8632B] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-xs leading-tight">
                    {stat.label}
                  </p>
                  {stat.source && (
                    <p className="text-white/25 text-[10px] mt-1">
                      {stat.source}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Sound Familiar? ── */}
      <section className="py-20 px-6 bg-[#222]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-3 text-center">
              Sound familiar?
            </h2>
            <p className="text-white/50 text-center mb-10 max-w-xl mx-auto">
              If you&apos;re running a construction business in South-East
              Queensland right now, you&apos;re probably nodding at most of
              these.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {industry.soundFamiliar.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[#E8632B]/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E8632B]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={item.icon} className="w-4 h-4 text-[#E8632B]" />
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── The System Problem ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            {/* Visual break: icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#E8632B]/15 flex items-center justify-center mx-auto mb-6">
              <Icon name="zap" className="w-8 h-8 text-[#E8632B]" />
            </div>
            <h2 className="text-3xl font-bold mb-6">
              {industry.systemProblemTitle}
            </h2>
            <div className="bg-[#E8632B]/10 border border-[#E8632B]/30 rounded-lg p-8 text-left">
              <p className="text-white/80 leading-relaxed text-base">
                {industry.systemProblemBody}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Solution Sections ── */}
      {industry.sections.map((section, sIdx) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 px-6 ${sIdx % 2 === 0 ? "bg-[#222]" : ""}`}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {/* Section image + header */}
              <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 mb-12 items-center">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent" />
                  {/* Number badge on image */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-[#E8632B] flex items-center justify-center font-bold text-white text-sm">
                    {String(sIdx + 1).padStart(2, "0")}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E8632B]/15 flex items-center justify-center flex-shrink-0">
                      <Icon name={section.icon} className="w-5 h-5 text-[#E8632B]" />
                    </div>
                    <p className="text-[#E8632B] text-xs font-semibold tracking-widest uppercase">
                      {section.title.split("\u2014")[0].trim()}
                    </p>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {section.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed">
                    {section.intro}
                  </p>
                </div>
              </div>

              {/* Pain points with icons */}
              <div className="grid md:grid-cols-3 gap-6 mb-14">
                {section.painPoints.map((pp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-[#E8632B]/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#E8632B]/15 flex items-center justify-center mb-4">
                      <Icon name={pp.icon} className="w-5 h-5 text-[#E8632B]" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      {pp.hook}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {pp.body}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Before / After outcomes */}
              <div className="space-y-5">
                {section.outcomes.map((outcome, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch"
                  >
                    {/* Before */}
                    <div className="p-5 bg-white/5 border border-white/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-white/30" />
                        <p className="text-white/40 text-[10px] font-semibold tracking-widest uppercase">
                          {outcome.title} &middot; Before
                        </p>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {outcome.before}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-center">
                      <Icon name="arrow-right" className="w-5 h-5 text-[#E8632B]" />
                    </div>

                    {/* After */}
                    <div className="p-5 bg-[#E8632B]/10 border border-[#E8632B]/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#E8632B]" />
                        <p className="text-[#E8632B] text-[10px] font-semibold tracking-widest uppercase">
                          {outcome.title} &middot; After
                        </p>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {outcome.after}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ── Proof Points ── */}
      <section className="py-20 px-6 bg-[#222] relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E8632B]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-3 text-center">
              The numbers don&apos;t lie
            </h2>
            <p className="text-white/50 text-center mb-10 max-w-xl mx-auto">
              These aren&apos;t projections. They&apos;re documented results
              from builders who&apos;ve made the shift.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industry.proofPoints.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:border-[#E8632B]/40 transition-colors"
                >
                  <p className="text-3xl md:text-4xl font-bold text-[#E8632B] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm leading-tight">
                    {stat.label}
                  </p>
                  {stat.source && (
                    <p className="text-white/30 text-[10px] mt-2">
                      {stat.source}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-3 text-center">
              What working with us looks like
            </h2>
            <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
              We don&apos;t hand you a report and walk away. We work alongside
              you to change how your business runs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {processSteps.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-[#E8632B]/30 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E8632B] flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[#E8632B] text-xs font-bold">
                        Step {i + 1}
                      </p>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Orange gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D45A25] via-[#E8632B] to-[#E8975A] opacity-10" />
        <div className="absolute inset-0 bg-[#222]" style={{ mixBlendMode: "multiply" }} />
        <div className="max-w-2xl mx-auto text-center relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#E8632B]/20 flex items-center justify-center mx-auto mb-6">
              <Icon name="phone" className="w-7 h-7 text-[#E8632B]" />
            </div>
            <h2 className="text-3xl font-bold mb-4">{industry.ctaHeadline}</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              {industry.ctaBody}
            </p>
            <a
              href={`mailto:info@xpeditepartners.com.au?subject=${encodeURIComponent(industry.name)}%20Industry%20—%20Enquiry`}
              className="inline-block px-10 py-4 bg-[#E8632B] text-white rounded font-semibold text-lg hover:bg-[#c5521f] transition-colors"
            >
              {industry.ctaButtonLabel}
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
