"use client";

import { motion } from "framer-motion";

export default function BannerSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{
      background: "linear-gradient(135deg, #E8632B 0%, #F09060 50%, #E8975A 100%)",
    }}>
      {/* Animated circles */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[20%] top-[40%] w-64 h-64 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #a04020 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[20%] top-[20%] w-80 h-80 rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, #c06030 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[40%] bottom-[10%] w-32 h-32 rounded-full opacity-35"
        style={{ background: "radial-gradient(circle, #804020 0%, transparent 70%)" }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl md:text-6xl text-white italic font-light text-center max-w-4xl mx-auto leading-tight"
      >
        We believe in uncompromising delivery standards
      </motion.h2>
    </section>
  );
}
