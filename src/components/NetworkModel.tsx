"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const tabs = [
  {
    id: "different",
    label: "How we are different",
    image: "/images/network-model.jpg",
    imageAlt: "Business professionals collaborating in a team meeting",
    content: {
      heading: "How we are different",
      text: "Xpedite Partners brings over 20 years of hands-on delivery leadership across mining, utilities, finance, government, and industrial sectors. Our recommendations aren't opinion — they're grounded in empirical evidence, industry research, and proven patterns from enterprise-scale programs. Combined with a modern, network-based consulting model, we provide senior, specialised expertise without the overhead of large consultancies:",
      items: [
        "Evidence-based frameworks built from real-world delivery patterns and academic research",
        "Two decades of experience shaping delivery systems for Australia's most complex organisations",
        "Delivery leaders, program directors, and PMO specialists — senior practitioners only",
        "Product managers, agile coaches, and transformation consultants",
        "Solution architects, change professionals, and data/AI delivery experts",
        "A curated network — not a bench of available generalists",
      ],
    },
  },
  {
    id: "works",
    label: "How it works",
    image: "/images/network-model-works.jpg",
    imageAlt: "Team working together in a collaborative office environment",
    content: {
      heading: "How it works",
      text: "A modern, flexible, and high-calibre approach that ensures every engagement is staffed with exactly the right expertise at the right time.",
      items: [
        "Bespoke Team Formation \u2014 For each engagement, we assemble a hand-picked team tailored to the unique needs, scale, and complexity of the initiative.",
        "A Trusted, High-Calibre Network \u2014 Our experts are proven practitioners with deep industry experience, not generalist consultants.",
        "Recruitment Partnerships \u2014 When required, we leverage specialist recruitment partners to secure niche or high-demand skills rapidly.",
        "Senior Expertise Only \u2014 Clients are never staffed with juniors or rotating consultants. Every contributor is a senior, outcome-focused professional.",
        "Flexible and Scalable \u2014 The network model allows us to scale up quickly for large initiatives and scale down when required, keeping costs efficient and value high.",
      ],
    },
  },
  {
    id: "matters",
    label: "Why the Network Model matters",
    image: "/images/network-model-matters.jpg",
    imageAlt: "Digital network visualization representing global connectivity",
    content: {
      heading: "Why the Network Model matters",
      text: "A precision-built model that delivers higher quality, lower overheads, and stronger outcomes than traditional consulting approaches.",
      items: [
        "Clients receive the right expertise, not whoever is available.",
        "We avoid the bureaucracy and overhead of large consultancies.",
        "We provide specialist capability on demand.",
        "Quality remains consistently high across engagements.",
        "It enables a boutique consultancy to deliver enterprise-grade outcomes.",
      ],
    },
  },
];

export default function NetworkModel() {
  const [activeTab, setActiveTab] = useState("different");

  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="network-model" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-black mb-4"
        >
          THE NETWORK MODEL
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 text-lg mb-12"
        >
          A high-performance taskforce of proven experts, assembled with purpose and precision
        </motion.p>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 px-6 text-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-black bg-[#FDEBD5] border-b-3 border-[#E8632B]"
                  : "text-gray-500 bg-[#f5f5f5] hover:text-black hover:bg-[#FDEBD5]/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FDEBD5] rounded-lg p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <div className="w-full aspect-square rounded-lg overflow-hidden relative">
                  <Image
                    src={activeContent.image}
                    alt={activeContent.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-black mb-4">
                  {activeContent.content.heading}
                </h3>
                <p className="text-gray-700 mb-6">{activeContent.content.text}</p>
                <ul className="space-y-3">
                  {activeContent.content.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#E8632B] mt-1 flex-shrink-0">&#8226;</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
