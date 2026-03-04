"use client";

import { motion } from "framer-motion";

const philosophies = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#E8632B" strokeWidth="1.5">
        <circle cx="24" cy="18" r="8" />
        <path d="M12 42c0-6.6 5.4-12 12-12s12 5.4 12 12" />
        <path d="M30 10l4-4M34 14l4-2" />
      </svg>
    ),
    title: "Clarity of Intent",
    description:
      "Every engagement starts with a precise understanding of desired outcomes, constraints, risks, and success measures. Ambiguity is the enemy of execution.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#E8632B" strokeWidth="1.5">
        <rect x="8" y="8" width="32" height="32" rx="2" />
        <path d="M8 18h32M18 18v22M30 18v22" />
        <circle cx="24" cy="13" r="2" fill="#E8632B" />
      </svg>
    ),
    title: "A Designed Delivery System",
    description:
      "Successful delivery does not happen organically. It is architected. We design governance, cadences, decision pathways, roles, and operating models that eliminate noise and confusion.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#E8632B" strokeWidth="1.5">
        <circle cx="24" cy="14" r="6" />
        <circle cx="12" cy="28" r="5" />
        <circle cx="36" cy="28" r="5" />
        <path d="M19 18l-4 6M29 18l4 6M17 28h14" />
      </svg>
    ),
    title: "Focused, High-Performing Teams",
    description:
      "Delivery succeeds when teams have clear purpose, strong leadership, effective communication, and the environment they need to excel.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#E8632B" strokeWidth="1.5">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 14v10l7 7" />
        <circle cx="24" cy="24" r="2" fill="#E8632B" />
        <path d="M16 8l-2-4M32 8l2-4" />
      </svg>
    ),
    title: "Rhythm and Discipline",
    description:
      "Predictability requires structure. We implement delivery rhythms that create momentum, visibility, and stability across teams and vendors.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#E8632B" strokeWidth="1.5">
        <circle cx="20" cy="24" r="10" />
        <path d="M26 14h12v20H26" />
        <path d="M14 24h12M20 18v12" />
      </svg>
    ),
    title: "Continuous Visibility and Insight",
    description:
      "Leaders should never guess. Our delivery intelligence, reporting, and governance frameworks provide real-time clarity to make informed decisions.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#E8632B" strokeWidth="1.5">
        <path d="M10 38V20l14-10 14 10v18" />
        <path d="M18 38V28h12v10" />
        <path d="M24 10v-4" />
        <circle cx="36" cy="12" r="4" />
        <path d="M34 12l2 2 4-4" />
      </svg>
    ),
    title: "Change that Enables Adoption",
    description:
      "Delivery is not complete until the organisation adopts the change. We embed change management principles throughout execution, not as an afterthought.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#E8632B" strokeWidth="1.5">
        <path d="M12 36l12-24 12 24" />
        <path d="M18 28h12" />
        <circle cx="24" cy="8" r="4" />
        <path d="M22 8l2 2 4-4" />
      </svg>
    ),
    title: "Our Operating Philosophy",
    description:
      "This philosophy underpins every engagement and allows us to deliver with precision, speed, and confidence.",
  },
];

export default function DeliveryPhilosophy() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-black mb-4"
        >
          OUR DELIVERY PHILOSOPHY
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto"
        >
          At Xpedite Partners, delivery is not a sequence of tasks. It is a disciplined system of
          clarity, governance, alignment, and human behaviour. We believe exceptional delivery comes
          from:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {philosophies.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FDEBD5] rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophies.slice(4).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
              className="bg-[#FDEBD5] rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
