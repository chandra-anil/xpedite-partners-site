"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const frameworks = [
  {
    title: "Path to Value",
    subtitle: "Delivery System Diagnostic",
    description:
      "A context-weighted diagnostic that identifies which parts of your delivery system matter most, ranks improvement priorities by business impact, and generates a phased action plan across three horizons.",
    href: "/path-to-value",
    image: "/images/ptv-priorities.webp",
    tags: ["Diagnostic", "Prioritisation", "Delivery Improvement"],
    status: "Available",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FrameworksContent() {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-[#E8632B] text-sm font-semibold tracking-widest uppercase mb-4">
              Our Frameworks
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Proprietary Tools for Delivery Excellence
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Built from 20+ years of hands-on delivery leadership and grounded in empirical
              research. These aren&apos;t generic templates. They&apos;re precision instruments
              designed for complex, high-stakes environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Framework Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frameworks.map((fw, index) => (
              <motion.div
                key={fw.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Link href={fw.href} className="block group">
                  <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#E8632B]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#E8632B]/5">
                    {/* Screenshot */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={fw.image}
                        alt={fw.title}
                        fill
                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="text-xs px-3 py-1 bg-[#E8632B] text-white rounded font-medium">
                          {fw.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-[#E8632B] text-xs font-semibold tracking-widest uppercase mb-2">
                        {fw.subtitle}
                      </p>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-[#E8632B] transition-colors">
                        {fw.title}
                      </h2>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">
                        {fw.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {fw.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 border border-white/10 rounded text-white/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Coming Soon placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white/[0.02] border border-dashed border-white/10 rounded-lg flex items-center justify-center min-h-[360px]"
            >
              <div className="text-center px-8">
                <p className="text-white/20 text-4xl mb-4">+</p>
                <p className="text-white/30 text-sm font-medium">More frameworks in development</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
