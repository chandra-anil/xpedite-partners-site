"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Tool {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

interface Phase {
  id: string;
  label: string;
  colour: string;
  description: string;
  tools: Tool[];
}

const phases: Phase[] = [
  {
    id: "diagnose",
    label: "Diagnose",
    colour: "#E8632B",
    description:
      "Identify what's actually happening in your delivery system — where value leaks, what's overloaded, and which signals matter.",
    tools: [
      {
        slug: "path-to-value",
        title: "Path to Value",
        subtitle: "Delivery System Diagnostic",
        description:
          "Context-weighted diagnostic that ranks delivery improvement priorities by business impact and generates a phased action plan across three horizons.",
        image: "/images/ptv-priorities.webp",
        tags: ["Diagnostic", "Prioritisation", "Delivery Improvement"],
      },
      {
        slug: "change-pulse",
        title: "Change Readiness Pulse",
        subtitle: "Adoption Risk Diagnostic",
        description:
          "Measures real change readiness across six dimensions using 18 structured questions. Translates weak signals into prioritised actions before go-live.",
        image: "/images/xds-change-pulse.webp",
        tags: ["Change Management", "Readiness", "Risk"],
      },
      {
        slug: "portfolio-flow",
        title: "Portfolio Flow Diagnostics",
        subtitle: "Flow Economics Analyser",
        description:
          "Diagnoses WIP overload, queue collapse, and prioritisation failure using Little's Law, queueing theory, and portfolio flow economics.",
        image: "/images/xds-portfolio-flow.webp",
        tags: ["Portfolio", "Flow", "WIP", "Throughput"],
      },
      {
        slug: "ai-readiness",
        title: "AI Integration Readiness",
        subtitle: "Organisational AI Diagnostic",
        description:
          "Consulting-grade diagnostic across six dimensions: Data, Process, Governance, Team Literacy, Integration Architecture, and Change & Culture.",
        image: "/images/xds-ai-readiness.webp",
        tags: ["AI", "Readiness", "Digital Transformation"],
      },
    ],
  },
  {
    id: "design",
    label: "Design",
    colour: "#d4880f",
    description:
      "Configure operating models, governance structures, and team topologies that fit your context — not generic templates.",
    tools: [
      {
        slug: "governance",
        title: "Governance Configurator",
        subtitle: "Decision Architecture Designer",
        description:
          "Generates a governance blueprint that fits your programme — right-sized approval gates, escalation paths, and decision rights based on your context.",
        image: "/images/xds-governance.webp",
        tags: ["Governance", "Decision Rights", "Escalation"],
      },
      {
        slug: "demand",
        title: "Demand Management Designer",
        subtitle: "Operating Model Builder",
        description:
          "Builds your demand management operating model from the ground up: intake, categorisation, prioritisation, capacity allocation, and governance forums.",
        image: "/images/xds-demand.webp",
        tags: ["Demand", "Operating Model", "Intake"],
      },
      {
        slug: "team-topology",
        title: "Team Topology Advisor",
        subtitle: "Organisational Design Tool",
        description:
          "Diagnoses team-structure friction and redesigns your organisation around flow, ownership, and sustainable cognitive load.",
        image: "/images/xds-team-topology.webp",
        tags: ["Team Design", "Cognitive Load", "Conway's Law"],
      },
      {
        slug: "cadence",
        title: "Delivery Cadence Designer",
        subtitle: "Operating Rhythm Builder",
        description:
          "Designs a complete operating rhythm across team, program, and portfolio levels with an interactive 12-week timeline. Cadence is strategy, not ceremony.",
        image: "/images/xds-cadence.webp",
        tags: ["Cadence", "Ceremonies", "Operating Rhythm"],
      },
      {
        slug: "vendor-map",
        title: "Vendor Ecosystem Mapper",
        subtitle: "Multi-Vendor Governance",
        description:
          "Maps vendor relationships, integration risks, and governance gaps across your ecosystem. Makes the whitespace between vendors visible and manageable.",
        image: "/images/xds-vendor-map.webp",
        tags: ["Vendor Management", "Integration Risk", "Governance"],
      },
    ],
  },
  {
    id: "build",
    label: "Build",
    colour: "#2e86ab",
    description:
      "Equip teams with the right capabilities, metrics, and leadership practices to execute effectively.",
    tools: [
      {
        slug: "capability",
        title: "Capability Uplift Planner",
        subtitle: "Skill Investment Prioritiser",
        description:
          "Prioritises delivery capability investments by leverage — where small uplift creates outsized delivery impact across key delivery roles.",
        image: "/images/xds-capability.webp",
        tags: ["Capability", "Skills", "Uplift"],
      },
      {
        slug: "leadership-360",
        title: "Delivery Leadership 360",
        subtitle: "Leadership Development Mirror",
        description:
          "A practical leadership mirror for delivery leaders. Assesses 12 competencies across systems thinking, stakeholder navigation, execution, and culture.",
        image: "/images/xds-leadership-360.webp",
        tags: ["Leadership", "Development", "Competency"],
      },
      {
        slug: "metrics",
        title: "Delivery Metrics Selector",
        subtitle: "Measurement Strategy Tool",
        description:
          "Recommends a curated 5–7 metric suite based on your delivery model, maturity, and goals. Every recommendation includes benchmarks and anti-patterns.",
        image: "/images/xds-metrics.webp",
        tags: ["Metrics", "KPIs", "Measurement"],
      },
    ],
  },
  {
    id: "sustain",
    label: "Sustain",
    colour: "#27ae60",
    description:
      "Embed continuous improvement, knowledge architecture, and AI-driven opportunities that compound over time.",
    tools: [
      {
        slug: "knowledge-arch",
        title: "Knowledge Architect",
        subtitle: "Information Architecture Designer",
        description:
          "Maps where knowledge lives, diagnoses fragmentation and duplication, then designs a practical information architecture for delivery teams.",
        image: "/images/xds-knowledge-arch.webp",
        tags: ["Knowledge Management", "Information Architecture"],
      },
      {
        slug: "ai-opportunity",
        title: "AI Opportunity Finder",
        subtitle: "AI Use Case Discovery",
        description:
          "Maps your operational pain points, data assets, and business context to proven AI use cases. Returns a ranked opportunity map with pilot guidance.",
        image: "/images/xds-ai-opportunity.webp",
        tags: ["AI", "Automation", "Use Cases"],
      },
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FrameworksContent() {
  const totalTools = phases.reduce((sum, p) => sum + p.tools.length, 0);

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="text-[#E8632B] text-sm font-semibold tracking-widest uppercase mb-4">
              Xpedite Delivery System
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {totalTools} Frameworks for Delivery Excellence
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Built from 20+ years of hands-on delivery leadership across complex
              technology programs. Each tool synthesises industry frameworks, your
              organisational context, and empirical field patterns into actionable
              recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formula */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white/5 border border-white/10 rounded-lg p-8 text-center"
          >
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
              Our Approach
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-xl font-semibold">
              <span className="text-white/80">Industry Frameworks</span>
              <span className="text-[#E8632B]">+</span>
              <span className="text-white/80">Your Context</span>
              <span className="text-[#E8632B]">+</span>
              <span className="text-white/80">Field Experience</span>
              <span className="text-[#E8632B]">=</span>
              <span className="text-[#E8632B]">Optimal Solution</span>
            </div>
            <p className="text-white/50 text-sm mt-4 max-w-xl mx-auto">
              Generic maturity assessments waste money. Every recommendation is
              weighted by your delivery model, scale, industry, and strategic
              priority.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Phase Sections */}
      {phases.map((phase, phaseIndex) => (
        <section
          key={phase.id}
          className={`py-16 px-6 ${phaseIndex % 2 === 1 ? "bg-[#222]" : ""}`}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {/* Phase header */}
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: phase.colour }}
                />
                <p
                  className="text-sm font-semibold tracking-widest uppercase"
                  style={{ color: phase.colour }}
                >
                  {phase.label}
                </p>
              </div>
              <p className="text-white/50 text-sm mb-10 max-w-2xl">
                {phase.description}
              </p>

              {/* Tool cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {phase.tools.map((tool, i) => (
                  <motion.div
                    key={tool.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Link
                      href={`/frameworks/${tool.slug}`}
                      className="block group h-full"
                    >
                      <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#E8632B]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#E8632B]/5 h-full flex flex-col">
                        {/* Screenshot */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={tool.image}
                            alt={tool.title}
                            fill
                            className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                          <p
                            className="text-xs font-semibold tracking-widest uppercase mb-1.5"
                            style={{ color: phase.colour }}
                          >
                            {tool.subtitle}
                          </p>
                          <h3 className="text-lg font-bold mb-2 group-hover:text-[#E8632B] transition-colors">
                            {tool.title}
                          </h3>
                          <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                            {tool.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {tool.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] px-2 py-0.5 border border-white/10 rounded text-white/40"
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
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-6 bg-[#222]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Improve Your Delivery System?
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Each framework session is facilitated by an experienced delivery
              consultant who configures the tool to your context and walks you
              through the results. No generic reports — just actionable,
              context-specific recommendations.
            </p>
            <a
              href="mailto:info@xpeditepartners.com.au?subject=Delivery%20System%20Frameworks%20—%20Enquiry"
              className="inline-block px-10 py-4 bg-[#E8632B] text-white rounded font-semibold text-lg hover:bg-[#c5521f] transition-colors"
            >
              Get in Touch
            </a>
            <p className="text-white/30 text-xs mt-4">
              info@xpeditepartners.com.au
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
