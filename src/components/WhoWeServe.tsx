"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    title: "Technical Solution Providers",
    tagline: "You build the technology. We make the delivery succeed.",
    image: "/images/who-serve-tech.avif",
    details: {
      heading: "Technical Solution Providers",
      intro:
        "We integrate seamlessly with your technical capability to create a winning delivery system around your solution.",
      items: [
        { bold: "Align Fast:", text: "Understand your architecture, context, and program/tender needs quickly." },
        { bold: "Design Delivery:", text: "Build governance, planning, risk pathways, and leadership around your technical strengths." },
        { bold: "Strengthen Tenders:", text: "Add delivery plans, governance, change strategies, and risk controls to boost competitiveness." },
        { bold: "Mobilise Quickly:", text: "Set up cadences, communication flows, and stakeholder alignment for a strong start." },
        { bold: "Assure Delivery:", text: "Provide senior oversight, PMO support, and change management for reliable outcomes." },
      ],
    },
  },
  {
    title: "Medium/Large Organisations Delivering Projects and Products",
    tagline: "More rigour, structure, clarity and control across your delivery portfolio.",
    image: "/images/who-serve-orgs.avif",
    details: {
      heading: "Medium/Large Organisations Delivering Projects and Products",
      intro:
        "We bring structure, transparency, and discipline to strengthen your delivery ecosystem.",
      items: [
        { bold: "Diagnostic & Maturity Check:", text: "Analyse governance, flow, capability, and tooling to identify gaps." },
        { bold: "Fit-for-Purpose Delivery Model:", text: "Build governance, rhythms, decision forums, and frameworks suited to your scale." },
        { bold: "Roadmap & Portfolio Alignment:", text: "Structure planning, sequencing, and prioritisation across projects and products." },
        { bold: "Capability & Leadership Uplift:", text: "Coach teams, develop leaders, and embed repeatable ways of working." },
        { bold: "Assurance & Improvement:", text: "Provide visibility, insights, and governance for predictable, low-risk delivery." },
      ],
    },
  },
  {
    title: "Medium/Large Organisations Starting Major Initiatives or Building New Products",
    tagline: "Ensure readiness, governance, and delivery discipline from day one.",
    image: "/images/who-serve-initiatives.webp",
    details: {
      heading: "Major Initiatives or New Product Builds",
      intro:
        "We design and lead the delivery engine behind your most critical investments.",
      items: [
        { bold: "Strategic Framing:", text: "Clarify vision, scope, success measures, risks, and investment expectations." },
        { bold: "Operating Model & Governance:", text: "Define roles, forums, planning structures, financial oversight, and delivery cadence." },
        { bold: "Mobilisation & Team Formation:", text: "Align cross-functional teams, stakeholders, and vendors under one delivery model." },
        { bold: "Integrated Planning:", text: "Lead structured planning (Agile, hybrid, or traditional) with clear sequencing, dependencies, and risk control." },
        { bold: "Execution & Change Leadership:", text: "Provide senior delivery leadership, assurance, and change management for confident, predictable outcomes." },
      ],
    },
  },
];

export default function WhoWeServe() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="who-we-serve"
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #D45A25 0%, #E8975A 50%, #C4884E 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-black mb-4"
        >
          WHO WE SERVE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-black/80 text-lg mb-16 max-w-2xl mx-auto"
        >
          Trusted by organisations that expect precision, discipline, and exceptional delivery outcomes
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, rotate: -5 + index * 5, y: 50 }}
              whileInView={{ opacity: 1, rotate: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-[#f5f5f5] rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded mb-4 overflow-hidden relative">
                <Image
                  src={client.image}
                  alt={client.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{client.title}</h3>
              <p className="text-gray-600 mb-6">{client.tagline}</p>
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="bg-[#E8632B] text-white px-6 py-2 rounded font-medium hover:bg-[#d55520] transition-colors"
              >
                {expandedIndex === index ? "Close" : "Read More"}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Expanded Details */}
        <AnimatePresence>
          {expandedIndex !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {clients[expandedIndex].details.heading}
                </h3>
                <p className="text-gray-600 mb-6">
                  {clients[expandedIndex].details.intro}
                </p>
                <ul className="space-y-3">
                  {clients[expandedIndex].details.items.map((item) => (
                    <li key={item.bold} className="flex gap-2">
                      <span className="text-[#E8632B] mt-1">&#8226;</span>
                      <span>
                        <strong>{item.bold}</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
