"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const philosophies = [
  {
    icon: "/images/clarity.svg",
    title: "Clarity of Intent",
    description:
      "Every engagement starts with a precise understanding of desired outcomes, constraints, risks, and success measures. Ambiguity is the enemy of execution.",
  },
  {
    icon: "/images/structure.svg",
    title: "A Designed Delivery System",
    description:
      "Successful delivery does not happen organically. It is architected. We design governance, cadences, decision pathways, roles, and operating models that eliminate noise and confusion.",
  },
  {
    icon: "/images/staffing.svg",
    title: "Focused, High-Performing Teams",
    description:
      "Delivery succeeds when teams have clear purpose, strong leadership, effective communication, and the environment they need to excel.",
  },
  {
    icon: "/images/observation.svg",
    title: "Rhythm and Discipline",
    description:
      "Predictability requires structure. We implement delivery rhythms that create momentum, visibility, and stability across teams and vendors.",
  },
  {
    icon: "/images/document.svg",
    title: "Continuous Visibility and Insight",
    description:
      "Leaders should never guess. Our delivery intelligence, reporting, and governance frameworks provide real-time clarity to make informed decisions.",
  },
  {
    icon: "/images/responsibility.svg",
    title: "Change that Enables Adoption",
    description:
      "Delivery is not complete until the organisation adopts the change. We embed change management principles throughout execution, not as an afterthought.",
  },
  {
    icon: "/images/blueprint.svg",
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
              <div className="flex justify-center mb-4">
                <Image src={item.icon} alt={item.title} width={48} height={48} />
              </div>
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
              <div className="flex justify-center mb-4">
                <Image src={item.icon} alt={item.title} width={48} height={48} />
              </div>
              <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
