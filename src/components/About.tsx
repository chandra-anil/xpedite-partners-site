"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #C4713A 0%, #E8975A 50%, #FDEBD5 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white mb-8 italic"
            >
              About Us
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-white"
            >
              <p className="italic leading-relaxed">
                Xpedite Partners is a premium consultancy specialising in delivery excellence,
                governance, and operating model design for complex digital programs and high-stakes
                product delivery. The firm was founded by Anil Chandra, a delivery and transformation
                leader with more than two decades of experience shaping how large organisations
                execute technology investments.
              </p>
              <p className="italic leading-relaxed">
                Anil&apos;s career spans senior roles across major global enterprises, where he
                led enterprise-scale transformations, shaped global operating models, and uplifted
                delivery capability across hundreds of teams. His expertise includes large portfolio
                governance, modern delivery systems, AI productisation, and building high-performing
                teams across mining, utilities, emergency services, financial services, and industrial
                sectors.
              </p>
              <p className="italic leading-relaxed">
                With experience guiding some of Australia&apos;s most complex organisations through
                critical technology investments, we bring unmatched clarity, discipline,
                and strategic delivery leadership to every engagement.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="w-80 h-96 rounded-lg overflow-hidden shadow-2xl relative">
              <Image
                src="/images/founder.jpg"
                alt="Anil Chandra - Founder"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
