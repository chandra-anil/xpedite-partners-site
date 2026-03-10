export interface XdsTool {
  slug: string;
  title: string;
  subtitle: string;
  phase: string;
  phaseColour: string;
  heroDescription: string;
  image: string;
  problemTitle: string;
  problemPoints: string[];
  solutionPoints: string[];
  howItWorks: { step: string; title: string; description: string }[];
  differentiators: { title: string; description: string }[];
  outputs: string[];
  audience: string[];
  tags: string[];
}

export const xdsTools: XdsTool[] = [
  {
    slug: "change-pulse",
    title: "Change Readiness Pulse",
    subtitle: "Adoption Risk Diagnostic",
    phase: "Diagnose",
    phaseColour: "#E8632B",
    heroDescription:
      "Most programs confuse go-live with adoption. This tool provides a practical, defensible readiness pulse using 18 structured questions across six dimensions — and translates weak signals into prioritised actions before go-live.",
    image: "/images/xds-change-pulse.webp",
    problemTitle: "Go-live Is Not Adoption",
    problemPoints: [
      "Change readiness is measured by gut feel, not structured data",
      "Stakeholder concerns surface too late to address",
      "Training plans are built without understanding actual readiness gaps",
      "Post-go-live adoption failures get blamed on 'resistance to change'",
    ],
    solutionPoints: [
      "Six-dimension readiness model grounded in Prosci and ADKAR research",
      "18 structured diagnostic questions with scoring calibrated to your context",
      "Weighted risk analysis that surfaces the highest-impact readiness gaps",
      "Prioritised action plan with specific interventions, not generic advice",
    ],
    howItWorks: [
      { step: "1", title: "Set Your Context", description: "Configure the assessment for your change type, scale, and organisational complexity." },
      { step: "2", title: "Assess Readiness", description: "Answer 18 structured questions across leadership alignment, stakeholder engagement, capability, communication, process readiness, and cultural fit." },
      { step: "3", title: "Get Your Pulse Report", description: "Receive a weighted readiness score with dimension-level breakdown, risk flags, and a prioritised action plan." },
    ],
    differentiators: [
      { title: "Structured, not subjective", description: "Replaces gut-feel readiness checks with a repeatable, evidence-based diagnostic." },
      { title: "Weighted by context", description: "A technology migration and a culture transformation have different risk profiles. The model adapts." },
      { title: "Action-oriented output", description: "Every gap maps to specific interventions — not just 'improve communication'." },
    ],
    outputs: ["Weighted readiness score", "Dimension-level breakdown", "Risk flags with severity", "Prioritised action plan", "Stakeholder engagement recommendations"],
    audience: ["Change Managers", "Program Directors", "Transformation Leads", "PMO Leads"],
    tags: ["Change Management", "Readiness", "Risk"],
  },
  {
    slug: "portfolio-flow",
    title: "Portfolio Flow Diagnostics",
    subtitle: "Flow Economics Analyser",
    phase: "Diagnose",
    phaseColour: "#E8632B",
    heroDescription:
      "Most portfolios are overloaded by design. This tool diagnoses WIP overload, queue collapse, and prioritisation failure using Little's Law, queueing theory, and portfolio flow economics.",
    image: "/images/xds-portfolio-flow.webp",
    problemTitle: "Everything Is Priority One",
    problemPoints: [
      "Portfolio WIP exceeds capacity by 2-3x, but nobody measures it",
      "Lead times blow out because queues are invisible",
      "Prioritisation is political, not economic",
      "Teams are 100% utilised but throughput is declining",
    ],
    solutionPoints: [
      "Little's Law applied to your actual portfolio data",
      "Queue visibility across intake, approval, and delivery stages",
      "Economic prioritisation frameworks (WSJF, Cost of Delay)",
      "Capacity vs demand modelling with realistic utilisation targets",
    ],
    howItWorks: [
      { step: "1", title: "Map Your Portfolio", description: "Describe your current WIP, team capacity, delivery model, and prioritisation approach." },
      { step: "2", title: "Diagnose Flow", description: "The model applies queueing theory and flow economics to identify bottlenecks, overload patterns, and prioritisation failures." },
      { step: "3", title: "Get Flow Recommendations", description: "Receive specific WIP limits, queue management strategies, and prioritisation framework recommendations calibrated to your scale." },
    ],
    differentiators: [
      { title: "Economics, not opinion", description: "Recommendations grounded in Little's Law and queueing theory — not best-practice platitudes." },
      { title: "Practical WIP guidance", description: "Specific WIP limits for your context, not generic 'reduce WIP' advice." },
      { title: "Prioritisation framework selection", description: "Recommends the right prioritisation model based on your decision environment." },
    ],
    outputs: ["Flow efficiency analysis", "WIP limit recommendations", "Queue health assessment", "Prioritisation framework recommendation", "Capacity utilisation guidance"],
    audience: ["Portfolio Directors", "PMO Leads", "Delivery Managers", "Program Directors"],
    tags: ["Portfolio", "Flow", "WIP", "Throughput"],
  },
  {
    slug: "ai-readiness",
    title: "AI Integration Readiness",
    subtitle: "Organisational AI Diagnostic",
    phase: "Diagnose",
    phaseColour: "#E8632B",
    heroDescription:
      "A consulting-grade diagnostic that measures organisational AI readiness across six dimensions: Data, Process, Governance, Team Literacy, Integration Architecture, and Change & Culture.",
    image: "/images/xds-ai-readiness.webp",
    problemTitle: "AI Initiatives Fail Without Organisational Readiness",
    problemPoints: [
      "AI pilots succeed in isolation but fail at scale",
      "Data quality and accessibility aren't assessed before AI investment",
      "Teams lack the literacy to work effectively with AI tools",
      "Governance frameworks don't account for AI-specific risks",
    ],
    solutionPoints: [
      "Six-dimension readiness model covering the full AI adoption lifecycle",
      "Practice-level assessment across data, process, governance, literacy, architecture, and culture",
      "Maturity scoring calibrated to your industry and scale",
      "Targeted recommendations for each dimension with clear sequencing",
    ],
    howItWorks: [
      { step: "1", title: "Set Your Context", description: "Configure for your industry, organisation size, and AI ambition level." },
      { step: "2", title: "Assess Readiness", description: "Rate your current capability across six dimensions with practice-level indicators." },
      { step: "3", title: "Get Your Readiness Profile", description: "Receive a comprehensive readiness score with dimension breakdown, gap analysis, and a sequenced improvement roadmap." },
    ],
    differentiators: [
      { title: "Beyond technology", description: "Assesses organisational readiness — not just technical capability. Culture and governance matter as much as data." },
      { title: "Industry-calibrated", description: "A financial services firm and a mining company have different AI readiness profiles. The model adapts." },
      { title: "Actionable roadmap", description: "Sequenced recommendations that build on each other — not a flat list of improvements." },
    ],
    outputs: ["Overall readiness score", "Six-dimension breakdown", "Gap analysis by dimension", "Sequenced improvement roadmap", "Quick-win identification"],
    audience: ["CIOs", "Digital Transformation Leads", "AI/ML Program Managers", "Technology Directors"],
    tags: ["AI", "Readiness", "Digital Transformation"],
  },
  {
    slug: "governance",
    title: "Governance Configurator",
    subtitle: "Decision Architecture Designer",
    phase: "Design",
    phaseColour: "#d4880f",
    heroDescription:
      "Stop over-governing and under-governing. Get a governance blueprint that fits your programme — right-sized approval gates, escalation paths, and decision rights generated in 60 seconds.",
    image: "/images/xds-governance.webp",
    problemTitle: "Why Governance Fails",
    problemPoints: [
      "Too many approval gates slow delivery without reducing risk",
      "Decision rights are unclear — everything escalates to the top",
      "Governance is inherited from previous programs, not designed for this one",
      "Escalation paths exist on paper but not in practice",
    ],
    solutionPoints: [
      "Context-aware governance blueprint based on program complexity and risk profile",
      "Right-sized approval gates — enough control without unnecessary friction",
      "Clear decision rights matrix with explicit escalation triggers",
      "Forum design with purpose, cadence, and membership recommendations",
    ],
    howItWorks: [
      { step: "1", title: "Describe Your Programme", description: "Configure for programme type, scale, risk profile, regulatory environment, and delivery model." },
      { step: "2", title: "Generate Blueprint", description: "The engine synthesises your context against proven governance patterns to produce a right-sized blueprint." },
      { step: "3", title: "Review & Refine", description: "Explore the recommended governance forums, decision rights, escalation paths, and approval gates. Adjust to fit." },
    ],
    differentiators: [
      { title: "Right-sized, not one-size", description: "A $5M agile delivery and a $200M regulated transformation need fundamentally different governance." },
      { title: "Decision architecture", description: "Goes beyond approval gates to design the entire decision-making architecture — who decides what, when, and how." },
      { title: "Implementation-ready", description: "Outputs include forum charters, RACI templates, and escalation trigger definitions — not just principles." },
    ],
    outputs: ["Governance blueprint", "Decision rights matrix", "Forum design with charters", "Escalation framework", "Approval gate recommendations"],
    audience: ["Program Directors", "PMO Leads", "Delivery Managers", "Portfolio Directors"],
    tags: ["Governance", "Decision Rights", "Escalation"],
  },
  {
    slug: "demand",
    title: "Demand Management Designer",
    subtitle: "Operating Model Builder",
    phase: "Design",
    phaseColour: "#d4880f",
    heroDescription:
      "A collaborative design tool that builds your demand management operating model from the ground up. Your context + proven frameworks + industry experience = an implementable system, not a slide deck.",
    image: "/images/xds-demand.webp",
    problemTitle: "Demand Management Is Where Strategy Meets Reality",
    problemPoints: [
      "Intake processes are informal or inconsistent across business units",
      "Demand exceeds capacity but there's no structured way to prioritise",
      "Categories and sizing are ad-hoc, making portfolio-level decisions impossible",
      "Governance forums exist but lack clear mandates and decision rights",
    ],
    solutionPoints: [
      "Complete operating model: intake, categorisation, prioritisation, capacity, and governance",
      "Eight design dimensions configured to your organisational context",
      "Multiple framework options at each layer with trade-off analysis",
      "90-day implementation plan with phased rollout milestones",
    ],
    howItWorks: [
      { step: "1", title: "Set Your Context", description: "Describe your organisation, delivery model, scale, and current demand challenges." },
      { step: "2", title: "Diagnostic Pulse", description: "Quick assessment of your current demand management maturity across key dimensions." },
      { step: "3", title: "Design Your Model", description: "Collaboratively configure intake channels, categorisation, prioritisation frameworks, capacity models, and governance forums." },
      { step: "4", title: "Get Your Operating Model", description: "Receive a complete, implementable operating model with a 90-day rollout plan." },
    ],
    differentiators: [
      { title: "Design-first, not diagnostic-only", description: "The diagnostic informs the design — it's not the destination. You leave with a configured operating model." },
      { title: "Framework synthesis", description: "Combines ITIL demand management, Lean portfolio management, and SAFe intake patterns — calibrated to your context." },
      { title: "Implementation-ready", description: "Includes forum charters, RACI matrices, intake templates, and a phased rollout plan." },
    ],
    outputs: ["Configured operating model", "Intake channel design", "Prioritisation framework", "Capacity allocation model", "Governance forum design", "90-day implementation plan"],
    audience: ["Portfolio Directors", "PMO Leads", "Delivery Managers", "Business Relationship Managers"],
    tags: ["Demand", "Operating Model", "Intake"],
  },
  {
    slug: "team-topology",
    title: "Team Topology Advisor",
    subtitle: "Organisational Design Tool",
    phase: "Design",
    phaseColour: "#d4880f",
    heroDescription:
      "Diagnose team-structure friction and redesign your organisation around flow, ownership, and sustainable cognitive load. Based on Team Topologies by Skelton & Pais, extended with field patterns.",
    image: "/images/xds-team-topology.webp",
    problemTitle: "Your Org Chart Is Your Architecture",
    problemPoints: [
      "Teams are structured around components, not value streams",
      "Cross-team dependencies create handoff delays and blame cycles",
      "Cognitive load is invisible — teams own too many domains",
      "Platform capabilities are duplicated across feature teams",
    ],
    solutionPoints: [
      "Team Topologies assessment (stream-aligned, platform, enabling, complicated-subsystem)",
      "Cognitive load analysis per team based on domains, services, and context switching",
      "Dependency mapping with interaction mode recommendations",
      "Restructuring options with trade-off analysis for your context",
    ],
    howItWorks: [
      { step: "1", title: "Map Your Organisation", description: "Describe team structure, product domains, and current ownership model." },
      { step: "2", title: "Assess Load & Dependencies", description: "Quantify cognitive load, dependency patterns, and communication overhead across teams." },
      { step: "3", title: "Get Topology Recommendations", description: "Receive team type assignments, boundary recommendations, interaction mode suggestions, and a migration path." },
    ],
    differentiators: [
      { title: "Beyond the book", description: "Extends Team Topologies with practical patterns from real enterprise reorganisations — not just theory." },
      { title: "Cognitive load is quantified", description: "Most assessments mention cognitive load. This one measures it based on domains, services, and switching frequency." },
      { title: "Migration path included", description: "Getting from current state to target topology requires sequencing. The tool provides a phased migration plan." },
    ],
    outputs: ["Team type recommendations", "Cognitive load analysis", "Dependency map", "Interaction mode design", "Migration path"],
    audience: ["Engineering Managers", "Delivery Leads", "CTOs", "Agile Coaches"],
    tags: ["Team Design", "Cognitive Load", "Conway's Law"],
  },
  {
    slug: "cadence",
    title: "Delivery Cadence Designer",
    subtitle: "Operating Rhythm Builder",
    phase: "Design",
    phaseColour: "#d4880f",
    heroDescription:
      "Design a complete operating rhythm across team, program, and portfolio levels — with an interactive 12-week timeline. Cadence is strategy, not ceremony.",
    image: "/images/xds-cadence.webp",
    problemTitle: "Meetings Aren't Cadence",
    problemPoints: [
      "Calendar is full of ceremonies but decisions still take weeks",
      "Team-level cadence doesn't connect to program or portfolio rhythm",
      "Retrospectives happen but nothing changes between them",
      "Stakeholder reviews are performative, not decision-oriented",
    ],
    solutionPoints: [
      "Multi-level cadence design: team, program, and portfolio tiers",
      "Purpose-driven ceremony design — every meeting has a clear decision output",
      "Interactive 12-week timeline showing how rhythms interconnect",
      "Anti-pattern detection for common cadence failures",
    ],
    howItWorks: [
      { step: "1", title: "Describe Your Context", description: "Configure for delivery model, team count, program structure, and current ceremony landscape." },
      { step: "2", title: "Design Your Cadence", description: "Select and configure ceremonies across team, program, and portfolio tiers with purpose and output definitions." },
      { step: "3", title: "Get Your Operating Rhythm", description: "Receive a complete cadence blueprint with a 12-week interactive timeline and implementation guidance." },
    ],
    differentiators: [
      { title: "Multi-level integration", description: "Most tools focus on team ceremonies. This designs the full operating rhythm — team to portfolio — showing how information flows between levels." },
      { title: "Purpose-driven", description: "Every ceremony is defined by its decision output, not its format. If a meeting doesn't drive a decision, it doesn't belong." },
      { title: "Anti-pattern aware", description: "Flags common cadence failures: zombie retrospectives, performative reviews, disconnected tiers." },
    ],
    outputs: ["Cadence blueprint", "12-week interactive timeline", "Ceremony purpose & output definitions", "Anti-pattern warnings", "Implementation guidance"],
    audience: ["Scrum Masters", "Delivery Leads", "Program Managers", "Agile Coaches"],
    tags: ["Cadence", "Ceremonies", "Operating Rhythm"],
  },
  {
    slug: "vendor-map",
    title: "Vendor Ecosystem Mapper",
    subtitle: "Multi-Vendor Governance",
    phase: "Design",
    phaseColour: "#d4880f",
    heroDescription:
      "Multi-vendor programs don't fail because individual vendors underperform. They fail because nobody owns the whitespace between them. This tool makes that whitespace visible — and governable.",
    image: "/images/xds-vendor-map.webp",
    problemTitle: "The Whitespace Problem",
    problemPoints: [
      "Each vendor delivers to their contract, but integration falls through cracks",
      "Accountability gaps between vendors create finger-pointing",
      "Risk concentrates at vendor boundaries but isn't tracked",
      "Governance treats vendors individually, not as an ecosystem",
    ],
    solutionPoints: [
      "Ecosystem visualisation showing vendor relationships and integration points",
      "Risk hotspot identification at vendor boundaries",
      "Governance gap detection with accountability recommendations",
      "Integration ownership model with clear RACI",
    ],
    howItWorks: [
      { step: "1", title: "Map Your Vendors", description: "Define vendors, their roles, contract models, and delivery approaches." },
      { step: "2", title: "Map Integrations", description: "Identify integration points, ownership, and dependencies between vendors." },
      { step: "3", title: "Get Ecosystem Analysis", description: "Receive risk hotspot analysis, governance gap detection, and integration ownership recommendations." },
    ],
    differentiators: [
      { title: "Ecosystem view", description: "Most vendor management focuses on individual performance. This tool maps the relationships between vendors — where the real risk lives." },
      { title: "Whitespace governance", description: "Identifies accountability gaps in the spaces between vendor contracts and recommends ownership models." },
      { title: "Integration risk quantified", description: "Risk scoring at each integration point based on coupling type, ownership clarity, and governance coverage." },
    ],
    outputs: ["Ecosystem map", "Risk hotspot analysis", "Governance gap report", "Integration ownership RACI", "Vendor ecosystem recommendations"],
    audience: ["Program Directors", "Vendor Managers", "PMO Leads", "Procurement Leads"],
    tags: ["Vendor Management", "Integration Risk", "Governance"],
  },
  {
    slug: "capability",
    title: "Capability Uplift Planner",
    subtitle: "Skill Investment Prioritiser",
    phase: "Build",
    phaseColour: "#2e86ab",
    heroDescription:
      "Prioritise delivery capability investments by leverage — where small uplift creates outsized delivery impact. Not all skills gaps are equal; this tool identifies which ones matter most.",
    image: "/images/xds-capability.webp",
    problemTitle: "Training Budgets Are Wasted on the Wrong Skills",
    problemPoints: [
      "Capability assessments produce flat gap lists with no prioritisation",
      "Training investments are spread thin across every gap equally",
      "Role-specific skill requirements aren't mapped to delivery outcomes",
      "High-leverage capability gaps are hidden among routine ones",
    ],
    solutionPoints: [
      "Role-specific capability assessment across key delivery roles",
      "Leverage scoring — which capability gaps have the highest delivery impact",
      "Prioritised uplift plan with specific development recommendations",
      "Investment allocation guidance based on leverage, not equal distribution",
    ],
    howItWorks: [
      { step: "1", title: "Select Roles", description: "Choose the delivery roles relevant to your organisation (Product Owner, Scrum Master, PM, Engineer, etc.)." },
      { step: "2", title: "Assess Capabilities", description: "Rate current capability levels across role-specific competencies." },
      { step: "3", title: "Get Your Uplift Plan", description: "Receive a leverage-ranked uplift plan showing where small investments create the biggest delivery improvements." },
    ],
    differentiators: [
      { title: "Leverage, not just gaps", description: "A gap in stakeholder management for a Product Owner has more delivery impact than a gap in documentation. The model knows this." },
      { title: "Role-specific", description: "Competency frameworks are tailored to each delivery role — not generic leadership competencies applied to everyone." },
      { title: "Investment-ready", description: "Output is designed for budget conversations — shows ROI potential of each capability investment." },
    ],
    outputs: ["Capability heat map", "Leverage-ranked gap analysis", "Role-specific uplift plan", "Development recommendations", "Investment prioritisation"],
    audience: ["Delivery Leads", "HR/L&D Partners", "Engineering Managers", "Agile Coaches"],
    tags: ["Capability", "Skills", "Uplift"],
  },
  {
    slug: "leadership-360",
    title: "Delivery Leadership 360",
    subtitle: "Leadership Development Mirror",
    phase: "Build",
    phaseColour: "#2e86ab",
    heroDescription:
      "A practical leadership mirror for delivery leaders. Move beyond generic leadership advice with a competency profile across systems thinking, stakeholder navigation, execution discipline, and culture.",
    image: "/images/xds-leadership-360.webp",
    problemTitle: "Generic Leadership Frameworks Don't Help Delivery Leaders",
    problemPoints: [
      "Standard 360 tools assess generic leadership traits, not delivery-specific competencies",
      "Delivery leaders need systems thinking and stakeholder navigation, not just 'communication skills'",
      "Development plans are vague — 'improve leadership presence' isn't actionable",
      "No benchmark for what 'good' looks like in a delivery leadership context",
    ],
    solutionPoints: [
      "12 competencies mapped to four delivery leadership domains",
      "Indicator-level assessment with behavioural anchors at each level",
      "Competency profile with strengths, development areas, and blind spots",
      "Targeted development actions — specific, not generic",
    ],
    howItWorks: [
      { step: "1", title: "Set Your Context", description: "Provide your role, experience level, and delivery environment." },
      { step: "2", title: "Self-Assess", description: "Rate yourself across 12 competencies using behavioural indicators — from 'not yet practising' to 'genuine mastery others would recognise'." },
      { step: "3", title: "Get Your Profile", description: "Receive a competency profile with domain scores, development priorities, and targeted action recommendations." },
    ],
    differentiators: [
      { title: "Delivery-specific", description: "Competencies designed for delivery leaders: systems thinking, stakeholder navigation, execution discipline, and people & culture." },
      { title: "Behavioural indicators", description: "Each rating level is anchored to observable behaviours — not vague descriptors." },
      { title: "Development actions, not platitudes", description: "Recommendations are specific: 'Facilitate a value stream mapping session with your team this quarter', not 'improve strategic thinking'." },
    ],
    outputs: ["Competency profile", "Domain scores", "Strengths & blind spots", "Development priority ranking", "Targeted action plan"],
    audience: ["Delivery Leads", "Program Managers", "Engineering Managers", "Aspiring Leaders"],
    tags: ["Leadership", "Development", "Competency"],
  },
  {
    slug: "metrics",
    title: "Delivery Metrics Selector",
    subtitle: "Measurement Strategy Tool",
    phase: "Build",
    phaseColour: "#2e86ab",
    heroDescription:
      "Recommends a curated 5–7 metric suite based on your delivery model, maturity level, and improvement goals. Every recommendation includes benchmarks, anti-patterns, and implementation guidance.",
    image: "/images/xds-metrics.webp",
    problemTitle: "Measuring Everything Means Measuring Nothing",
    problemPoints: [
      "Teams track 20+ metrics but can't answer 'are we getting better?'",
      "Metrics are inherited from frameworks, not chosen for purpose",
      "Vanity metrics crowd out actionable ones",
      "No connection between what's measured and what's being improved",
    ],
    solutionPoints: [
      "Curated 5–7 metric suite — enough signal, minimal noise",
      "Metrics selected based on delivery model, maturity, and improvement goals",
      "Industry benchmarks for each recommended metric",
      "Anti-pattern warnings (how each metric gets gamed and how to prevent it)",
    ],
    howItWorks: [
      { step: "1", title: "Describe Your Context", description: "Configure for delivery model, team maturity, current metrics, and improvement priorities." },
      { step: "2", title: "Get Your Suite", description: "Receive a curated metric suite with rationale for each selection." },
      { step: "3", title: "Implementation Guide", description: "Each metric comes with a definition, collection method, benchmark, anti-pattern warning, and review cadence." },
    ],
    differentiators: [
      { title: "Curation over comprehensiveness", description: "5–7 well-chosen metrics beat 25 dashboard widgets. The tool optimises for signal-to-noise ratio." },
      { title: "Anti-pattern aware", description: "Every metric recommendation includes how it gets gamed and what to watch for. Velocity without quality warnings? Covered." },
      { title: "Goal-aligned", description: "Metrics are selected to measure progress toward your stated improvement goals — not generic best practice." },
    ],
    outputs: ["Curated metric suite", "Metric definitions & collection methods", "Industry benchmarks", "Anti-pattern warnings", "Review cadence recommendations"],
    audience: ["Delivery Leads", "PMO Analysts", "Agile Coaches", "Engineering Managers"],
    tags: ["Metrics", "KPIs", "Measurement"],
  },
  {
    slug: "knowledge-arch",
    title: "Knowledge Architect",
    subtitle: "Information Architecture Designer",
    phase: "Sustain",
    phaseColour: "#27ae60",
    heroDescription:
      "Most delivery teams don't have a tooling problem — they have an information architecture problem. This tool maps where knowledge lives, diagnoses fragmentation, and designs a practical information architecture.",
    image: "/images/xds-knowledge-arch.webp",
    problemTitle: "Information Is Scattered, Duplicated, and Stale",
    problemPoints: [
      "Knowledge is spread across Confluence, SharePoint, Slack, email, and people's heads",
      "Onboarding takes weeks because there's no single source of truth",
      "Teams duplicate documentation because they can't find existing content",
      "Critical knowledge walks out the door when people leave",
    ],
    solutionPoints: [
      "Knowledge landscape mapping across tools, teams, and domains",
      "Fragmentation and duplication analysis",
      "Information architecture design with ownership and governance",
      "Knowledge retention strategies for key-person dependencies",
    ],
    howItWorks: [
      { step: "1", title: "Map Your Landscape", description: "Identify where knowledge lives — tools, repositories, tribal knowledge, and documentation practices." },
      { step: "2", title: "Diagnose Fragmentation", description: "The tool analyses overlap, gaps, staleness, and single-point-of-failure risks across your knowledge ecosystem." },
      { step: "3", title: "Design Your Architecture", description: "Receive an information architecture blueprint with ownership model, governance practices, and migration priorities." },
    ],
    differentiators: [
      { title: "Architecture, not just audit", description: "Goes beyond listing what's broken to designing how knowledge should flow — with ownership and governance." },
      { title: "Key-person risk", description: "Identifies where critical knowledge exists only in people's heads and recommends retention strategies." },
      { title: "Practical migration plan", description: "Prioritises what to consolidate first based on access frequency and business impact." },
    ],
    outputs: ["Knowledge landscape map", "Fragmentation analysis", "Information architecture blueprint", "Ownership & governance model", "Migration priority plan"],
    audience: ["Delivery Leads", "Knowledge Managers", "PMO Leads", "Engineering Managers"],
    tags: ["Knowledge Management", "Information Architecture"],
  },
  {
    slug: "ai-opportunity",
    title: "AI Opportunity Finder",
    subtitle: "AI Use Case Discovery",
    phase: "Sustain",
    phaseColour: "#27ae60",
    heroDescription:
      "A guided, adaptive interview that maps your operational pain points, data assets, and business context to proven AI use cases. Returns a ranked opportunity map with pilot guidance and timelines.",
    image: "/images/xds-ai-opportunity.webp",
    problemTitle: "AI Hype Without AI Strategy",
    problemPoints: [
      "Leadership wants AI but nobody knows where to start",
      "Use case selection is driven by vendor pitches, not business need",
      "Pilot projects are chosen for novelty, not value",
      "No structured way to assess feasibility against organisational readiness",
    ],
    solutionPoints: [
      "Structured discovery interview mapping pain points to proven use cases",
      "Feasibility scoring based on data readiness, technical complexity, and organisational fit",
      "Ranked opportunity map with ROI potential and implementation difficulty",
      "Pilot playbook with success criteria and timeline",
    ],
    howItWorks: [
      { step: "1", title: "Describe Your Operations", description: "Walk through a guided interview covering operational pain points, data assets, process bottlenecks, and strategic priorities." },
      { step: "2", title: "Match Use Cases", description: "The engine maps your context against a library of proven AI use cases, scoring each for feasibility and value." },
      { step: "3", title: "Get Your Opportunity Map", description: "Receive a ranked top-10 opportunity map with feasibility scores, pilot guidance, and implementation timelines." },
    ],
    differentiators: [
      { title: "Context-matched, not generic", description: "Use cases are scored against your actual data readiness, process maturity, and organisational capacity — not just industry averages." },
      { title: "Proven library", description: "Matches against hundreds of AI use cases validated in real enterprise environments across industries." },
      { title: "Pilot-ready output", description: "Each opportunity includes a pilot playbook with scope, success criteria, data requirements, and timeline." },
    ],
    outputs: ["Ranked opportunity map", "Feasibility scoring", "Pilot playbooks", "Implementation timelines", "Quick-win identification"],
    audience: ["CIOs", "Digital Transformation Leads", "Innovation Managers", "Business Unit Leaders"],
    tags: ["AI", "Automation", "Use Cases"],
  },
];

export function getToolBySlug(slug: string): XdsTool | undefined {
  return xdsTools.find((t) => t.slug === slug);
}
