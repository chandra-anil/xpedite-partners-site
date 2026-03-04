"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Delivery Planning and Management",
    description:
      "We architect the end to end delivery system for programs and digital products. This includes mobilisation, planning, structuring work, establishing the right cadence, sequencing, risk and dependency control, and ensuring teams operate with focus and discipline. We bring clarity to complexity from day one.",
    image: "/images/whatwedo-1.jpg",
  },
  {
    title: "Delivery Governance And Assurance",
    description:
      "We establish governance that gives leaders confidence. Clear decision pathways, transparent reporting, investment visibility, risk intelligence, and structured oversight ensure predictable outcomes and reduce uncertainty across large, multi-vendor environments.",
    image: "/images/whatwedo-2.webp",
  },
  {
    title: "Operating Model and Framework Design",
    description:
      "We design modern delivery operating models that bring coherence, alignment, and flow. Our frameworks define roles, cadences, governance forums, and processes suited to Agile, hybrid, or traditional contexts. Clients receive practical, scalable models that uplift the entire organisation.",
    image: "/images/whatwedo-3.webp",
  },
  {
    title: "Product Delivery Systems",
    description:
      "We create the conditions for strong digital product delivery. From product visioning and roadmap design to backlog structures, prioritisation models, and product governance, we help organisations turn ideas into sustainable, high-performing digital products.",
    image: "/images/whatwedo-4.jpg",
  },
  {
    title: "Change Management and Adoption",
    description:
      "We deliver change that drives real adoption. Our approach integrates stakeholder alignment, readiness planning, communication, training, and behavioural reinforcement to ensure technology and product investments create visible business impact.",
    image: "/images/whatwedo-5.webp",
  },
  {
    title: "Capability Uplift",
    description:
      "We strengthen internal capability across delivery, product, and leadership roles. Through coaching, role clarity, playbooks, and structured uplift programs, we help organisations build high-performing teams without expanding headcount or adding complexity.",
    image: "/images/whatwedo-6.jpg",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-black mb-12"
        >
          WHAT WE DO
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-[#1a1a1a] rounded-lg overflow-hidden min-h-[280px] flex flex-col justify-end group"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 pointer-events-none" />
              <div className="relative z-10 p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
