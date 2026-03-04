"use client";

import { motion } from "framer-motion";

const reasons = [
  "Deep expertise in delivery systems and operating models",
  "Proven track record across government, mining, finance and utilities",
  "Lightweight, practical frameworks",
  "High-touch senior expertise",
  "Reduced risk and faster mobilisation",
  "Strong vendor and stakeholder alignment",
];

const clientLogos = [
  { name: "Honeywell", color: "#c8102e" },
  { name: "atturra", color: "#1a5c3a" },
  { name: "Rio Tinto", color: "#c8102e" },
  { name: "Water Corporation", color: "#003366" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 px-6 bg-[#FDEBD5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="w-full md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-black mb-8"
            >
              WHY XPEDITE PARTNERS
            </motion.h2>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.li
                  key={reason}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-3 text-lg"
                >
                  <span className="text-[#E8632B] mt-1 flex-shrink-0">&#8226;</span>
                  <span className="text-black/80 font-medium">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full aspect-[4/3] rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #8a6a4a 0%, #c4a478 100%)",
              }}
            />
          </div>
        </div>

        {/* Client Logos */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-black/60 font-medium mb-8"
        >
          Successfully delivered for
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border-2 border-[#E8632B]/30 rounded-lg p-6 flex items-center justify-center h-24 hover:border-[#E8632B] transition-colors"
            >
              <span
                className="text-2xl font-bold"
                style={{ color: logo.color }}
              >
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
