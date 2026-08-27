"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const industries = [
  { name: "Construction", href: "/industries/construction", icon: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2 20h20M5 20V10l7-6 7 6v10M9 20v-5h6v5" /></svg>
  )},
  { name: "Mining", href: "/industries/mining", icon: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
  )},
  { name: "Utilities", href: "/industries/utilities", icon: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
  )},
  { name: "Commercial Buildings", href: "/industries/commercial-buildings", icon: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 21V7l9-4 9 4v14M9 21V11h6v10M3 7h18" /></svg>
  )},
  { name: "Manufacturing", href: "/industries/manufacturing", icon: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2 20h20M4 20V8l4-4v4l4-4v4l4-4v4h4v12" /></svg>
  )},
];

const capabilities = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 17H5a2 2 0 00-2 2 2 2 0 002 2h14a2 2 0 002-2 2 2 0 00-2-2h-4M12 3v10M8 7l4-4 4 4" /></svg>
    ),
    title: "The same rigour, right-sized for you",
    body: "Large enterprises use structured delivery systems, proper governance, and data-driven decisions. These aren\u2019t luxuries \u2014 they\u2019re what separates businesses that scale from businesses that stall. We bring those same disciplines to organisations of 20, 50, or 200 people.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
    ),
    title: "Technology has levelled the playing field",
    body: "The tools that used to cost millions are now accessible to everyone \u2014 cloud platforms, IoT sensors, analytics dashboards, mobile field apps. The gap isn\u2019t technology anymore. It\u2019s knowing how to implement it so your people actually use it. That\u2019s where we come in.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
    ),
    title: "We speak your language, not consulting jargon",
    body: "We don\u2019t talk about \u201Coperating model transformations\u201D with a builder who\u2019s running 8 jobs. We talk about getting off spreadsheets, seeing your numbers in real time, and stopping the Friday scramble. Same outcome, different conversation.",
  },
];

export default function EnterpriseForEveryone() {
  return (
    <section className="py-20 px-6 bg-[#111] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E8632B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <p className="text-[#E8632B] uppercase tracking-widest text-sm font-medium mb-4">
            Enterprise capability. Any size business.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            You don&apos;t need to be a large enterprise to run like one
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            The systems, tools, and disciplines that power Australia&apos;s biggest organisations
            are now within reach of every business. We help you adopt them — practically,
            affordably, and without the consulting overhead.
          </p>
        </motion.div>

        {/* Three capability cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#E8632B]/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-[#E8632B]/15 flex items-center justify-center mb-5 text-[#E8632B]">
                {cap.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{cap.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{cap.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Industry links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-center text-white/60 text-sm uppercase tracking-widest mb-6">
            See what we do in your industry
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  href={ind.href}
                  className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm font-medium hover:border-[#E8632B]/50 hover:text-[#E8632B] transition-all"
                >
                  <span className="text-[#E8632B]">{ind.icon}</span>
                  {ind.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Route to the AI Ready offer. #C5521F, not #E8632B: white text on
            #E8632B is ~3.4:1 and fails WCAG AA. */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 pt-10 border-t border-white/10 text-center"
        >
          <p className="text-white/70 text-sm mb-5 max-w-xl mx-auto">
            Running a business of 20 to 200 people and wondering where AI fits?
          </p>
          <Link
            href="/ai-ready"
            className="inline-flex items-center gap-2 px-7 py-3.5 min-h-[48px] rounded-lg bg-[#C5521F] text-white font-semibold hover:bg-[#A8441A] transition-colors"
          >
            See Xpedite AI Ready
            <span aria-hidden="true">&#8594;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
