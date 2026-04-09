export interface IndustryStat {
  value: string;
  label: string;
  source?: string;
}

export interface PainPoint {
  icon: string;
  hook: string;
  body: string;
}

export interface BeforeAfter {
  title: string;
  before: string;
  after: string;
}

export interface IndustrySection {
  id: string;
  icon: string;
  image: string;
  title: string;
  intro: string;
  painPoints: PainPoint[];
  outcomes: BeforeAfter[];
}

export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  heroHeadline: string;
  heroSub: string;
  heroStats: IndustryStat[];
  soundFamiliar: { icon: string; text: string }[];
  soundFamiliarSub: string;
  proofPointsSub: string;
  processSteps: { icon: string; title: string; body: string }[];
  systemProblemTitle: string;
  systemProblemBody: string;
  sections: IndustrySection[];
  proofPoints: IndustryStat[];
  ctaHeadline: string;
  ctaBody: string;
  ctaButtonLabel: string;
  metaTitle: string;
  metaDescription: string;
}

export const industries: Industry[] = [
  {
    slug: "construction",
    name: "Construction",
    tagline: "Built for builders. Not consultants.",
    heroImage: "/images/construction-hero.webp",
    metaTitle: "Construction Delivery Consulting SEQ | Xpedite Partners",
    metaDescription:
      "Helping South-East Queensland construction companies get control of costs, crews, and cash flow. Practical systems for builders who want to grow without the chaos.",
    heroHeadline:
      "50,000 workers short. Costs up 7.5%. And you\u2019re still expected to deliver on a fixed price.",
    heroSub:
      "SEQ construction is booming \u2014 but it\u2019s breaking the builders who made it happen. We help you get control of your business so you can take on more work, make more money, and stop flying blind.",
    heroStats: [
      { value: "$77B", label: "QLD construction pipeline by 2027", source: "CSQ" },
      { value: "50,000", label: "Worker shortfall at peak", source: "CSQ" },
      { value: "7.5%", label: "Brisbane cost escalation 2026", source: "Altus Group" },
      { value: "3,490", label: "Builders collapsed in 2024\u201325", source: "AICM" },
    ],

    soundFamiliar: [
      { icon: "calculator", text: "You quoted a job 6 months ago and the numbers don\u2019t work anymore" },
      { icon: "users", text: "Your best carpenter is 58 and there\u2019s nobody coming up behind him" },
      { icon: "puzzle", text: "You\u2019ve got 3 apps, 2 spreadsheets, and a whiteboard \u2014 and you still don\u2019t know if you\u2019re making money" },
      { icon: "trophy", text: "You want to bid on bigger work but you don\u2019t have the systems to prove you can handle it" },
      { icon: "phone", text: "You bought software but half the team still uses WhatsApp and notebooks" },
      { icon: "alert", text: "You find out a job\u2019s losing money when the accountant calls, not when you can still fix it" },
      { icon: "clock", text: "You\u2019re working 60-hour weeks and still feel like you\u2019re behind" },
      { icon: "clipboard", text: "Compliance paperwork is eating your weekends" },
    ],
    soundFamiliarSub:
      "If you\u2019re running a construction business in South-East Queensland right now, you\u2019re probably nodding at most of these.",
    proofPointsSub:
      "These aren\u2019t projections. They\u2019re documented results from builders who\u2019ve made the shift.",
    processSteps: [
      {
        icon: "search",
        title: "We learn your business",
        body: "We spend time on your sites, in your office, with your people. We look at how jobs flow from quote to completion \u2014 where time gets wasted, where money leaks, where things fall between the cracks.",
      },
      {
        icon: "bar-chart",
        title: "We show you the picture",
        body: "You get a clear, plain-English view of where your business is strong and where it\u2019s costing you. No jargon, no 200-page report. Just an honest assessment with real numbers.",
      },
      {
        icon: "tool",
        title: "We build the fix \u2014 with you",
        body: "We set up the right tools and processes for your size and type of work. We make sure your team actually uses them. We stay until the new way of working sticks \u2014 not just until the software is installed.",
      },
      {
        icon: "check-circle",
        title: "You run it from here",
        body: "The goal is a business that runs properly without us. Better visibility, tighter margins, less firefighting. You manage by looking at a dashboard, not by being on every site.",
      },
    ],

    systemProblemTitle: "It\u2019s not one problem. It\u2019s how your business runs.",
    systemProblemBody:
      "Most builders run each job like its own island. What works for 3 jobs breaks at 8. The information that should flow between your estimator, your site managers, and your accountant\u2026 doesn\u2019t. You end up chasing people for updates, finding problems too late, and making decisions on gut feel instead of real numbers. The tools exist to fix this. But 70% of software rollouts fail because nobody changes how the business actually works around them. That\u2019s the bit we do.",

    sections: [
      {
        id: "money",
        icon: "dollar",
        image: "/images/construction-blueprints.webp",
        title: "Know where your money is \u2014 on every job, every week",
        intro:
          "The #1 reason builders go under isn\u2019t lack of work \u2014 it\u2019s not knowing a job is bleeding until it\u2019s too late. Fixed-price contracts and rising costs have wiped out thousands of businesses in the last two years.",
        painPoints: [
          {
            icon: "eye-off",
            hook: "Quoting blind",
            body: "You\u2019re estimating jobs with last year\u2019s prices in a market where materials jump monthly. Builders using proper estimating systems earn 17% more revenue and quote 56% faster.",
          },
          {
            icon: "alert",
            hook: "No early warning",
            body: "By the time the accountant flags a problem, you\u2019ve already burned through the margin. Real-time cost tracking lets you catch a job going sideways in week 2, not month 4.",
          },
          {
            icon: "trending-down",
            hook: "Cash flow gaps",
            body: "Slow progress claims and 60-90 day payment cycles create cash crunches that kill profitable businesses. Automated invoicing cuts payment wait times by 20\u201335%.",
          },
        ],
        outcomes: [
          {
            title: "Estimating",
            before: "Spreadsheet quotes take days, based on outdated supplier prices. One bad estimate can wipe out a year\u2019s profit.",
            after: "Live supplier pricing, digital takeoff, and historical job data. You quote faster, more accurately, and with confidence in your margins.",
          },
          {
            title: "Job tracking",
            before: "You find out a job is losing money from the accountant \u2014 weeks after you could have done something about it.",
            after: "You see cost vs budget on your phone, updated weekly. Every job has a health score. Problems surface early enough to fix.",
          },
          {
            title: "Cash flow",
            before: "Progress claims are manual, slow, and always chasing. Cash flow is a mystery until the bank statement arrives.",
            after: "Claims go out on time, every time. You can see your cash position 8 weeks ahead and plan around it.",
          },
        ],
      },
      {
        id: "people",
        icon: "hard-hat",
        image: "/images/construction-team.webp",
        title: "Do more with the crew you\u2019ve got",
        intro:
          "You can\u2019t hire your way out of a 50,000-worker shortfall. The builders who thrive in this market will be the ones who get more done with fewer people \u2014 not by working them harder, but by wasting less of their time.",
        painPoints: [
          {
            icon: "clock",
            hook: "Crews waiting around",
            body: "When a 15-person crew turns up and materials aren\u2019t there, that\u2019s $10,000+ in dead labour. Smart scheduling and logistics coordination stop this happening.",
          },
          {
            icon: "door-open",
            hook: "Knowledge walking out the door",
            body: "Your best site manager is 54. When he leaves, 30 years of know-how goes with him. Capturing how your best people work turns individual skill into a repeatable system.",
          },
          {
            icon: "shuffle",
            hook: "Everyone doing it differently",
            body: "Each site manager runs jobs their own way. Some are great, some aren\u2019t. When your best people\u2019s approach becomes the standard approach, everyone lifts.",
          },
        ],
        outcomes: [
          {
            title: "Scheduling",
            before: "Crews arrive to find materials delayed or trades double-booked. Hours lost, money wasted, people frustrated.",
            after: "Coordinated scheduling across trades, materials, and equipment. Your crews spend their time building, not waiting.",
          },
          {
            title: "Consistency",
            before: "Job quality depends on which site manager you\u2019ve got. Your best guy is stretched across too many jobs.",
            after: "Standard processes mean your average crew delivers like your best crew. Quality becomes the system, not the person.",
          },
          {
            title: "Onboarding",
            before: "New hires take months to learn your way of doing things. Half of them leave before they\u2019re productive.",
            after: "Clear processes and practical training get new people productive in weeks, not months.",
          },
        ],
      },
      {
        id: "growth",
        icon: "trending-up",
        image: "/images/construction-building.webp",
        title: "Win bigger work without bigger risk",
        intro:
          "There\u2019s $77 billion in the QLD pipeline and the Olympics haven\u2019t even started. But scaling up without the right systems is how good builders go broke. The ones who grow safely will be the ones with proper business infrastructure.",
        painPoints: [
          {
            icon: "lock",
            hook: "Locked out of bigger contracts",
            body: "Head contractors and government agencies want to see systems, safety records, and reporting capability. If you can\u2019t demonstrate it, you don\u2019t get past prequalification.",
          },
          {
            icon: "zap",
            hook: "Scaling breaks things",
            body: "What worked at $5M turnover falls apart at $15M. More jobs means more balls in the air, more people to manage, and more ways for things to slip through the cracks.",
          },
          {
            icon: "shield",
            hook: "Compliance is getting harder",
            body: "NCC 2025 coming in May 2027. Silica bans. QBCC MFR reporting. Different rules in every council from Brisbane to Gold Coast. The admin burden is growing every year.",
          },
        ],
        outcomes: [
          {
            title: "Prequalification",
            before: "You know you can do the work, but your paperwork doesn\u2019t prove it. You lose contracts to builders who aren\u2019t better \u2014 just better documented.",
            after: "Your project data, safety records, and reporting are in one system. Prequalification submissions become straightforward, not a scramble.",
          },
          {
            title: "Scaling safely",
            before: "Adding a 4th or 5th concurrent job means you personally have to be across everything. You\u2019re the bottleneck.",
            after: "Clear systems for how jobs get run, how information flows, and how problems get escalated. You manage by exception, not by firefighting.",
          },
          {
            title: "Compliance",
            before: "Safety paperwork, council variations, and QBCC requirements eat up evenings and weekends. Mistakes mean fines or worse.",
            after: "Digital safety checklists, automated record-keeping, and a compliance system that works across all your jobs and council areas.",
          },
        ],
      },
      {
        id: "tech",
        icon: "monitor",
        image: "/images/construction-tablet.webp",
        title: "Get the right tech \u2014 and actually use it",
        intro:
          "The average construction business now uses 7 different tools but runs 11 separate data systems. That\u2019s not a technology problem \u2014 it\u2019s a mess. The right tech, set up around how your team actually works, can save you 10+ hours a week. The wrong tech, badly implemented, just adds another thing nobody uses.",
        painPoints: [
          {
            icon: "x-circle",
            hook: "Bought software, nobody uses it",
            body: "You spent thousands on a platform and 6 months later half the team is back on spreadsheets. 70% of software rollouts fail because the tool was set up for how software companies think, not how builders work.",
          },
          {
            icon: "layers",
            hook: "Data everywhere, answers nowhere",
            body: "Job info in one app, finances in another, safety in a third, and the real story in someone\u2019s head. You can\u2019t make good decisions when your information is scattered across a dozen places.",
          },
          {
            icon: "compass",
            hook: "Don\u2019t know where to start",
            body: "There are hundreds of construction tech tools out there. Procore, Buildxact, HammerTech, SafetyCulture \u2014 which ones are worth it for your size and type of work?",
          },
        ],
        outcomes: [
          {
            title: "Right tools for you",
            before: "You picked software based on a sales demo or a mate\u2019s recommendation. It doesn\u2019t fit how your business actually runs.",
            after: "We match tools to your specific problems, size, and workflow. You invest in what actually moves the needle.",
          },
          {
            title: "People actually use it",
            before: "The office uses the new system. The site guys don\u2019t. You\u2019re running two parallel systems and getting the worst of both.",
            after: "The system is set up around how your people work, not the other way around. Site teams adopt it because it makes their day easier, not harder.",
          },
          {
            title: "One source of truth",
            before: "To get a clear picture of any job, you need to check 4 different places and call 2 people.",
            after: "One place to see how every job is tracking. Costs, schedule, safety, quality \u2014 all connected.",
          },
        ],
      },
    ],

    proofPoints: [
      { value: "48%", label: "More work per person with proper project systems", source: "Procore" },
      { value: "16x", label: "Return on investment from estimating software", source: "Buildxact" },
      { value: "17%", label: "More revenue for builders using digital estimating", source: "Buildxact" },
      { value: "10.5 hrs", label: "Saved per week with connected data systems", source: "Deloitte 2025" },
      { value: "20\u201335%", label: "Faster payment with automated invoicing", source: "Industry benchmark" },
      { value: "70%", label: "Of software rollouts fail without proper setup", source: "Industry benchmark" },
    ],

    ctaHeadline: "Let\u2019s have a straight conversation about your business",
    ctaBody:
      "No jargon. No 200-page reports. We\u2019ll spend time with you \u2014 on your sites, in your office, with your people. You\u2019ll get a clear picture of where you\u2019re losing time, money, and margin, and a practical plan to fix it. 30 minutes. No pitch. Just an honest look at where you are and what\u2019s possible.",
    ctaButtonLabel: "Book a Conversation",
  },
  {
    slug: "mining",
    name: "Mining",
    tagline: "Built for miners. Not theorists.",
    heroImage: "/images/mining-hero.webp",
    metaTitle: "Mining Delivery & Technology Consulting Australia | Xpedite Partners",
    metaDescription:
      "Helping Australian mining companies and mining services contractors get more out of their operations. Practical systems for productivity, project delivery, and digital adoption.",
    heroHeadline:
      "Productivity down 5 years straight. 83% of projects over budget. And you still can\u2019t find enough people.",
    heroSub:
      "Australian mining is sitting on the biggest opportunity in a generation \u2014 critical minerals, energy transition, record pipelines. But the operations underneath aren\u2019t keeping up. We help you fix the systems that turn opportunity into output.",
    heroStats: [
      { value: "56,000", label: "Extra workers needed by 2033", source: "Industry forecast" },
      { value: "83%", label: "Of major projects over budget", source: "McKinsey" },
      { value: "3.3%", label: "Productivity fell again in 2024\u201325", source: "ABS" },
      { value: "43%", label: "Average cost overrun on capital projects", source: "McKinsey" },
    ],

    soundFamiliar: [
      { icon: "users", text: "You can\u2019t fill roles fast enough \u2014 and the people you do get take months to be productive" },
      { icon: "trending-down", text: "You\u2019re running more trucks and more shifts but moving less material per dollar spent" },
      { icon: "layers", text: "Your fleet system doesn\u2019t talk to your maintenance system, which doesn\u2019t talk to your planning system" },
      { icon: "alert", text: "Capital projects keep blowing their budget, and nobody sees it coming until it\u2019s too late" },
      { icon: "shield", text: "ESG reporting went from a nice-to-have to a compliance requirement and you\u2019re scrambling" },
      { icon: "clock", text: "Unplanned downtime on critical equipment is eating your production targets" },
      { icon: "clipboard", text: "Safety paperwork, contractor compliance, and regulatory reporting consume whole teams" },
      { icon: "puzzle", text: "You bought the technology but your people are still running the old way alongside it" },
    ],
    soundFamiliarSub:
      "If you\u2019re running a mining operation in Australia right now, you\u2019re probably nodding at most of these.",
    proofPointsSub:
      "These aren\u2019t projections. They\u2019re documented results from mining operators who\u2019ve made the shift.",
    processSteps: [
      {
        icon: "search",
        title: "We learn your operation",
        body: "We spend time on your site \u2014 in the pit, the control room, the planning office. We look at how information flows from drill to dump, where decisions get delayed, and where systems don\u2019t talk to each other.",
      },
      {
        icon: "bar-chart",
        title: "We show you the picture",
        body: "You get a clear, straight-talking view of where your operation is strong and where it\u2019s bleeding time, production, and money. No jargon, no 200-slide deck. Just an honest assessment with real numbers.",
      },
      {
        icon: "tool",
        title: "We build the fix \u2014 with you",
        body: "We set up the right systems and processes for your operation. We make sure your people actually use them. We stay until the new way of working sticks \u2014 not just until the vendor\u2019s gone.",
      },
      {
        icon: "check-circle",
        title: "You run it from here",
        body: "The goal is an operation that runs properly without us. Better visibility, tighter cost control, less firefighting. You manage by dashboard, not by radio and spreadsheet.",
      },
    ],

    systemProblemTitle: "It\u2019s not the gear. It\u2019s how the operation runs.",
    systemProblemBody:
      "Most mining operations have invested heavily in equipment and technology. But the systems connecting them \u2014 how information flows from the pit to the plant to the office \u2014 are held together with spreadsheets, radio calls, and people\u2019s heads. When your fleet management, maintenance, planning, safety, and finance systems don\u2019t talk to each other, you\u2019re making million-dollar decisions on partial information. The technology exists to fix this. But 70% of digital transformations in mining fail because nobody changes how the operation actually works around the new tools. That\u2019s the gap we close.",

    sections: [
      {
        id: "productivity",
        icon: "trending-up",
        image: "/images/mining-equipment.webp",
        title: "Get more out of every truck, every shift, every tonne",
        intro:
          "Mining productivity in Australia has fallen for five consecutive years. You\u2019re spending more on labour, fuel, and equipment but producing less per dollar. The gap between what your fleet could do and what it actually does is where the money is.",
        painPoints: [
          {
            icon: "trending-down",
            hook: "Fleet sitting idle",
            body: "Trucks waiting at shovels, queuing at dumps, idling through shift changes. Proper fleet management systems improve productivity 10\u201334% by eliminating these dead spots.",
          },
          {
            icon: "eye-off",
            hook: "Can\u2019t see the real picture",
            body: "Your dispatch system, maintenance logs, and production reports live in different worlds. Connecting them saves roughly 4 extra production hours per week \u2014 just from faster decisions.",
          },
          {
            icon: "zap",
            hook: "Breakdowns you didn\u2019t see coming",
            body: "Unplanned downtime on a haul truck costs $10,000\u201350,000 per day. Predictive maintenance using sensor data reduces unplanned stops by 25\u201330%.",
          },
        ],
        outcomes: [
          {
            title: "Fleet utilisation",
            before: "Trucks queue at shovels, idle through shift changes, and run sub-optimal routes. You know it\u2019s happening but can\u2019t quantify it.",
            after: "Real-time dispatching, dynamic truck assignment, and shift-change optimisation. Every truck spends more of its shift actually hauling.",
          },
          {
            title: "Maintenance",
            before: "You fix things when they break. Critical equipment goes down mid-shift. Spares arrive too late or sit on shelves too long.",
            after: "Sensors flag problems before they become failures. Maintenance shifts from reactive to planned. Downtime drops, availability climbs.",
          },
          {
            title: "Decision speed",
            before: "Getting a clear picture of today\u2019s production means chasing data from 3 systems and 2 people. By the time you have it, the shift is over.",
            after: "One dashboard showing fleet position, production vs plan, and equipment health. You make decisions in minutes, not hours.",
          },
        ],
      },
      {
        id: "projects",
        icon: "dollar",
        image: "/images/mining-landscape.webp",
        title: "Deliver capital projects on time and on budget",
        intro:
          "83% of major mining projects come in late and over budget, with average cost overruns of 43%. For mid-tier miners, a blown capital project doesn\u2019t just hurt the balance sheet \u2014 it can sink the company. The fix isn\u2019t more engineers. It\u2019s better project systems.",
        painPoints: [
          {
            icon: "alert",
            hook: "Budget blowouts found too late",
            body: "Most overruns are identified in execution, long after the estimates were locked in. EY found that digital strategy needs to be set at the estimation phase \u2014 not bolted on later.",
          },
          {
            icon: "shuffle",
            hook: "Contractors pulling in different directions",
            body: "Multiple contractors, multiple systems, no single view of progress. The gaps between contracts are where the real risk lives.",
          },
          {
            icon: "x-circle",
            hook: "Commissioning disasters",
            body: "Construction finishes on time but the plant doesn\u2019t reach capacity for months. The commissioning team wasn\u2019t consulted early enough, and the build sequence didn\u2019t match startup needs.",
          },
        ],
        outcomes: [
          {
            title: "Cost visibility",
            before: "You find out the project is over budget at the next steering committee \u2014 weeks or months after the overspend started.",
            after: "Real-time cost tracking against baseline. Variances surface in days, not months. You can intervene while there\u2019s still room to course-correct.",
          },
          {
            title: "Contractor coordination",
            before: "Each contractor reports in their own format, on their own schedule. Integrating across contracts requires heroic manual effort.",
            after: "One reporting framework, one set of milestones, one view of progress. Integration risks are visible and managed, not discovered at handover.",
          },
          {
            title: "Commissioning",
            before: "Construction and commissioning are treated as sequential. The plant is built but can\u2019t start because the handover sequence doesn\u2019t work.",
            after: "Commissioning requirements shape the construction sequence from day one. The plant starts up as planned because it was built to start up.",
          },
        ],
      },
      {
        id: "people",
        icon: "hard-hat",
        image: "/images/mining-workers.webp",
        title: "Do more with the people you\u2019ve got",
        intro:
          "The mining industry needs 56,000 extra workers by 2033. You\u2019re not going to find them all. The operations that win will be the ones that get more from every person on site \u2014 through better systems, smarter automation, and less time wasted on things that don\u2019t move dirt.",
        painPoints: [
          {
            icon: "clock",
            hook: "People doing admin, not mining",
            body: "Shift supervisors spending hours on compliance paperwork, manual reporting, and chasing approvals. Digital safety and compliance platforms cut this dramatically.",
          },
          {
            icon: "door-open",
            hook: "Knowledge leaving with every departure",
            body: "FIFO turnover is 30\u201340% higher than residential. Every time someone leaves, operational knowledge walks out with them. You need systems, not just people.",
          },
          {
            icon: "shield",
            hook: "Safety systems still paper-based",
            body: "Fatigue monitoring reduces incidents by up to 90%. Proximity detection prevents collisions. But many mid-tier operators are still running manual safety processes.",
          },
        ],
        outcomes: [
          {
            title: "Site admin",
            before: "Supervisors spend 2\u20133 hours per shift on paperwork, manual logs, and compliance forms. That\u2019s production time you\u2019re not getting back.",
            after: "Digital checklists, automated reporting, and compliance platforms. Your supervisors supervise. Your data captures itself.",
          },
          {
            title: "Safety technology",
            before: "Fatigue management is self-reporting. Near-miss data is inconsistent. You\u2019re reactive to incidents rather than preventing them.",
            after: "In-cab fatigue monitoring, proximity detection, and real-time incident tracking. You shift from investigating incidents to preventing them.",
          },
          {
            title: "Workforce capability",
            before: "New starters take months to be productive. Training is ad-hoc and depends on who\u2019s available to show them the ropes.",
            after: "Structured onboarding, digital SOPs, and clear competency frameworks. People get productive faster and stay longer.",
          },
        ],
      },
      {
        id: "digital",
        icon: "monitor",
        image: "/images/mining-control.webp",
        title: "Make your technology actually work together",
        intro:
          "63% of mining executives struggle to integrate data across systems. The average operation has dozens of disconnected platforms \u2014 fleet, maintenance, planning, safety, finance, ESG. Each one works fine on its own. Together, they\u2019re a mess. There\u2019s a 13-year average lag between a technology being released and mining actually adopting it.",
        painPoints: [
          {
            icon: "layers",
            hook: "Data in silos, decisions in the dark",
            body: "Your fleet system knows truck positions. Your maintenance system knows component health. Your planning system knows the schedule. But nobody has the full picture.",
          },
          {
            icon: "x-circle",
            hook: "Digital projects that don\u2019t stick",
            body: "You\u2019ve invested in platforms that promised transformation. Twelve months later, half the site is still using the old way. 70% of digital transformations in mining fail.",
          },
          {
            icon: "compass",
            hook: "ESG reporting is a scramble",
            body: "Mandatory climate reporting is here. Scope 3 from 2026. You need automated data collection and compliant reports, not more spreadsheets.",
          },
        ],
        outcomes: [
          {
            title: "Connected systems",
            before: "Getting a complete operational picture means pulling data from 5+ systems, reconciling formats, and hoping nothing was missed.",
            after: "Integrated data architecture where fleet, maintenance, planning, safety, and finance speak the same language. One source of truth.",
          },
          {
            title: "Digital adoption",
            before: "You bought the system. The vendor installed it. Six months later, adoption is patchy and the promised benefits haven\u2019t materialised.",
            after: "Technology implemented around how your people actually work. Change management built in from day one. Adoption sticks because the system makes their job easier.",
          },
          {
            title: "ESG compliance",
            before: "Environmental and ESG reporting is manual, inconsistent, and takes weeks to compile. You\u2019re not confident in the numbers.",
            after: "Automated emissions tracking, water monitoring, and regulatory reporting. Compliant data generated as a byproduct of operations, not a separate exercise.",
          },
        ],
      },
    ],

    proofPoints: [
      { value: "15\u201332%", label: "Productivity gain from autonomous haulage", source: "BHP / Rio Tinto / FMG" },
      { value: "25\u201330%", label: "Reduction in unplanned downtime with predictive maintenance", source: "Deloitte / Gartner" },
      { value: "90%", label: "Reduction in fatigue incidents with in-cab monitoring", source: "Seeing Machines" },
      { value: "10\u201334%", label: "Fleet productivity improvement from management systems", source: "Cat / Wenco / Modular" },
      { value: "5.3x", label: "Higher success rate when change management leads the transformation", source: "McKinsey" },
      { value: "70%", label: "Of mining digital transformations fail without proper implementation", source: "Industry benchmark" },
    ],

    ctaHeadline: "Let\u2019s talk about what\u2019s actually slowing you down",
    ctaBody:
      "No consultancy theatre. No death-by-PowerPoint. We\u2019ll spend time at your operation \u2014 on site, in the control room, with your people. You\u2019ll get a clear, honest picture of where your systems are costing you production, money, and time, and a practical plan to fix it. 30 minutes. No pitch. Just a straight conversation.",
    ctaButtonLabel: "Book a Conversation",
  },
  {
    slug: "utilities",
    name: "Utilities",
    tagline: "Built for utilities. Not ivory towers.",
    heroImage: "/images/utilities-hero.webp",
    metaTitle: "Utilities Delivery & Technology Consulting Australia | Xpedite Partners",
    metaDescription:
      "Helping Australian electricity, gas, and water utilities get more from their assets, people, and systems. Practical consulting for network operators and utility services contractors.",
    heroHeadline:
      "Pipes from the 1960s. Power lines at end of life. And not enough people to fix either.",
    heroSub:
      "Australia\u2019s electricity, water, and gas utilities are all hitting the same wall \u2014 aging infrastructure, tighter regulation, a workforce walking out the door, and systems that don\u2019t talk to each other. Whether you\u2019re replacing water mains or upgrading substations, we help you fix the delivery and operating systems so you can actually keep up.",
    heroStats: [
      { value: "300,000", label: "Infrastructure worker shortfall by 2027", source: "Infrastructure Australia" },
      { value: "$87B", label: "Energy network investment needed by 2050", source: "AEMO ISP" },
      { value: "30%+", label: "Water lost to leaks in some networks", source: "Bureau of Meteorology" },
      { value: "20\u201322%", label: "Capital spend increase proposed by networks", source: "IEEFA" },
    ],

    soundFamiliar: [
      { icon: "users", text: "Your most experienced operators are retiring \u2014 and their knowledge of the network, the pipes, and the workarounds is walking out with them" },
      { icon: "clock", text: "Water mains are bursting, power assets are failing, and the replacement backlog grows faster than your crews can work through it" },
      { icon: "layers", text: "Your SCADA, GIS, asset management, and work management systems all live in separate worlds \u2014 and nobody has the full picture" },
      { icon: "alert", text: "Capital works programs keep slipping \u2014 and the regulator wants to know why you\u2019re underspending your allowance" },
      { icon: "shield", text: "Safety and compliance reporting takes whole teams \u2014 from electrical safety to water quality to environmental monitoring" },
      { icon: "trending-down", text: "Field crews spend more time on paperwork, travel, and chasing information than actually maintaining infrastructure" },
      { icon: "puzzle", text: "You\u2019ve invested in new systems but half the field crews are still running off paper forms and local knowledge" },
      { icon: "clipboard", text: "Regulatory submissions across multiple agencies \u2014 AER, state safety, water quality, environmental \u2014 consume months of effort every cycle" },
    ],
    soundFamiliarSub:
      "If you\u2019re running a utility or network operation in Australia right now, you\u2019re probably nodding at most of these.",
    proofPointsSub:
      "These aren\u2019t projections. They\u2019re documented results from utilities that have made the shift.",
    processSteps: [
      {
        icon: "search",
        title: "We learn your operation",
        body: "We spend time in your control room, with your field crews, and in your planning offices. We look at how work flows from fault detection to completion \u2014 where decisions get delayed, where data gets lost, and where systems don\u2019t connect.",
      },
      {
        icon: "bar-chart",
        title: "We show you the picture",
        body: "You get a clear, straight-talking view of where your operation is strong and where it\u2019s bleeding time, reliability, and money. No jargon, no 200-slide deck. Just an honest assessment with real numbers.",
      },
      {
        icon: "tool",
        title: "We build the fix \u2014 with you",
        body: "We set up the right systems and processes for your network and your people. We make sure your field crews and planners actually use them. We stay until the new way of working sticks \u2014 not just until the vendor\u2019s gone.",
      },
      {
        icon: "check-circle",
        title: "You run it from here",
        body: "The goal is a utility that runs properly without us. Better asset visibility, fewer unplanned outages, less firefighting. You manage by dashboard, not by radio and reactive dispatch.",
      },
    ],

    systemProblemTitle: "It\u2019s not the pipes or the poles. It\u2019s how the business runs around them.",
    systemProblemBody:
      "Most utilities have invested in network assets and field technology. But the systems connecting them \u2014 how work flows from a burst main or a network fault through to dispatch, completion, and reporting \u2014 are held together with spreadsheets, emails, and tribal knowledge. When your SCADA, GIS, asset management, work management, and finance systems don\u2019t talk to each other, you\u2019re making million-dollar capital decisions on incomplete information. Whether it\u2019s a water network losing 30% to leaks or a power network with a growing maintenance backlog, the technology to fix this exists. But 70% of digital transformations in utilities fail because nobody changes how the organisation actually works around the new tools. That\u2019s the gap we close.",

    sections: [
      {
        id: "assets",
        icon: "tool",
        image: "/images/utilities-grid.webp",
        title: "Get ahead of your aging infrastructure before it gets ahead of you",
        intro:
          "Water mains from the 1960s. Power lines at end of life. Treatment plants running beyond design capacity. Across electricity and water, Australian utilities are proposing 20\u201322% capital spend increases just to keep up with replacement. But throwing money at assets without the right systems means you\u2019re replacing things too early, too late, or in the wrong order.",
        painPoints: [
          {
            icon: "alert",
            hook: "Replacing assets on age, not condition",
            body: "Without condition monitoring, you\u2019re either replacing pipes and poles too early (wasting capital) or too late (after they\u2019ve already burst or failed). Predictive maintenance reduces unplanned failures by 70\u201375% and cuts maintenance costs 25\u201330%.",
          },
          {
            icon: "eye-off",
            hook: "No single view of asset health",
            body: "Your asset register lives in one system, maintenance history in another, and condition data \u2014 pressure sensors, leak detection, transformer monitoring \u2014 in a third. Getting a complete picture means chasing data across platforms.",
          },
          {
            icon: "trending-down",
            hook: "Reactive maintenance eating your budget",
            body: "Every burst main or emergency callout costs 4\u20135x more than planned work and displaces scheduled maintenance. Some water networks lose over 30% of supply to leaks. The backlog just keeps growing.",
          },
        ],
        outcomes: [
          {
            title: "Asset decisions",
            before: "You replace pipes and poles based on age and gut feel. Some fail before replacement. Others get swapped out with years of life left.",
            after: "Condition-based data drives every replacement decision. You spend capital where it matters most \u2014 whether that\u2019s a critical water main or an aging feeder line.",
          },
          {
            title: "Maintenance approach",
            before: "Your team spends most of its time reacting to burst mains, equipment failures, and emergency callouts. Planned work keeps getting bumped.",
            after: "Predictive analytics flag problems before they become failures. Leak detection catches losses early. Maintenance shifts from reactive to planned across the whole network.",
          },
          {
            title: "Asset visibility",
            before: "Getting a complete picture of network health means pulling data from 4+ systems and reconciling it manually. Nobody fully trusts the numbers.",
            after: "One integrated view \u2014 pipes, valves, transformers, treatment assets \u2014 showing condition, maintenance history, and risk. Capital decisions made with confidence, not guesswork.",
          },
        ],
      },
      {
        id: "projects",
        icon: "dollar",
        image: "/images/utilities-field.webp",
        title: "Deliver your capital program without the cost blowouts",
        intro:
          "Whether it\u2019s transmission upgrades, water treatment plant expansions, or pipe renewal programs \u2014 the pressure to deliver on time and on budget has never been higher. Regulators are watching. Customers are paying. Material costs have jumped 30%+ since contracts were signed. And the workforce to deliver it all is in short supply.",
        painPoints: [
          {
            icon: "clock",
            hook: "Programs slipping quarter after quarter",
            body: "Capital works programs consistently underspend against allowances \u2014 not because the money isn\u2019t there, but because delivery capacity can\u2019t keep up. Regulators notice, and it affects future determinations.",
          },
          {
            icon: "shuffle",
            hook: "Contractors with no common systems",
            body: "Multiple delivery partners, multiple reporting formats, no single view of program progress. The gaps between contracts are where the real risks and cost overruns live.",
          },
          {
            icon: "x-circle",
            hook: "Project costs discovered too late",
            body: "Cost overruns are identified in execution, long after scope and estimates were locked in. By the time you see the problem, the money is already spent.",
          },
        ],
        outcomes: [
          {
            title: "Program delivery",
            before: "You track capital programs in spreadsheets. Progress reporting depends on which contractor sends their update first. Underspend surprises hit at year-end.",
            after: "One program view across all contractors and work streams. Progress, spend, and risk visible in real time. You deliver against your regulatory allowance consistently.",
          },
          {
            title: "Cost control",
            before: "You find out a project is over budget weeks after the overspend started. Variation claims pile up and there\u2019s no audit trail for scope changes.",
            after: "Real-time cost tracking against baseline. Variations require digital approval with full history. You intervene while there\u2019s still room to course-correct.",
          },
          {
            title: "Contractor management",
            before: "Each delivery partner reports differently. Integrating across contracts takes days of manual effort every reporting cycle.",
            after: "Common reporting framework, standardised milestones, one source of truth. You manage the program, not the spreadsheets.",
          },
        ],
      },
      {
        id: "people",
        icon: "hard-hat",
        image: "/images/utilities-workers.webp",
        title: "Do more with the people you\u2019ve got \u2014 because you can\u2019t find more",
        intro:
          "Australia faces a shortfall of 300,000 infrastructure workers by 2027. Electricians, water treatment operators, network technicians, plumbers \u2014 every trade is stretched. You\u2019re not going to hire your way out of this. The utilities that win will be the ones that get more from every field crew, every planner, and every hour on the network.",
        painPoints: [
          {
            icon: "door-open",
            hook: "Decades of knowledge walking out the door",
            body: "Your most experienced operators \u2014 the ones who know every valve, every feeder, every quirk in the network \u2014 are retiring. Their knowledge lives in their heads, not in any system.",
          },
          {
            icon: "clock",
            hook: "Field crews drowning in admin",
            body: "Crews spend hours on safety paperwork, water quality sampling forms, job close-outs, and compliance logs. That\u2019s wrench time you\u2019re not getting back. Digital field solutions reclaim 1\u20132 hours per crew per day.",
          },
          {
            icon: "users",
            hook: "The trade pipeline can\u2019t keep up",
            body: "Australia needs 20,500 apprentice electricians commencing annually \u2014 40% higher than recent averages. Water and wastewater operators face similar shortages. There\u2019s even a shortage of trainers to train them.",
          },
        ],
        outcomes: [
          {
            title: "Knowledge capture",
            before: "Critical network knowledge lives in the heads of your most experienced people. When they retire, it goes with them.",
            after: "Digital SOPs, structured handover processes, and knowledge management systems. The network\u2019s history and quirks are captured in the system, not lost at retirement.",
          },
          {
            title: "Field productivity",
            before: "Crews spend 30\u201340% of their day on paperwork, travel coordination, and chasing information. Actual wrench time is lower than it should be.",
            after: "Mobile work management, digital safety forms, and real-time job dispatch. Crews get the right information before they leave the depot and close jobs from the field.",
          },
          {
            title: "Workforce development",
            before: "New starters take years to be effective. Training is ad-hoc and depends on whoever happens to be available to mentor them.",
            after: "Structured competency frameworks, digital training records, and clear progression pathways. People get productive faster and you can prove their competency to regulators.",
          },
        ],
      },
      {
        id: "digital",
        icon: "monitor",
        image: "/images/utilities-control.webp",
        title: "Make your systems actually work together",
        intro:
          "The average utility runs dozens of disconnected platforms \u2014 SCADA, telemetry, GIS, asset management, work management, water quality monitoring, outage management, finance. Each one works on its own. Together, they\u2019re a mess. And the gap between what technology can do and what most mid-tier utilities actually use is enormous.",
        painPoints: [
          {
            icon: "layers",
            hook: "Data in silos, decisions in the dark",
            body: "Your SCADA knows network state. Your GIS knows asset location. Your telemetry knows pressure and flow. Your work management knows job status. But nobody has the full picture without hours of manual reconciliation.",
          },
          {
            icon: "x-circle",
            hook: "Digital projects that don\u2019t deliver",
            body: "You\u2019ve invested in platforms that promised transformation. Twelve months later, adoption is patchy and the old spreadsheets are still running alongside. 70% of utility digital transformations fail.",
          },
          {
            icon: "compass",
            hook: "OT/IT convergence is a minefield",
            body: "Connecting operational technology to IT systems \u2014 whether it\u2019s smart grid analytics or real-time water quality monitoring \u2014 is essential. But security concerns, legacy protocols, and organisational silos make it one of the hardest problems in the sector.",
          },
        ],
        outcomes: [
          {
            title: "Connected systems",
            before: "Getting a complete operational picture means pulling data from 5+ systems and reconciling formats. By the time you have the answer, the situation has changed.",
            after: "Integrated data architecture where SCADA, telemetry, GIS, asset management, and work management speak the same language. One source of truth for operations and planning.",
          },
          {
            title: "Digital adoption",
            before: "You bought the system. The vendor installed it. Six months later, adoption is patchy and the old ways persist alongside the new platform.",
            after: "Technology implemented around how your people actually work. Change management built in from day one. Adoption sticks because the system makes their job easier, not harder.",
          },
          {
            title: "Regulatory reporting",
            before: "Every regulatory submission is a months-long manual exercise. Teams scramble to pull data, reconcile numbers, and compile reports under deadline pressure.",
            after: "Automated data collection feeds directly into reporting frameworks. Submissions are faster, more accurate, and auditable. Your team focuses on insights, not data entry.",
          },
        ],
      },
    ],

    proofPoints: [
      { value: "70\u201375%", label: "Reduction in unplanned asset failures with predictive maintenance", source: "DOE / Deloitte" },
      { value: "25\u201330%", label: "Lower maintenance costs with condition-based approach", source: "McKinsey" },
      { value: "30%+", label: "Non-revenue water reduced with smart leak detection and pressure management", source: "Bureau of Meteorology" },
      { value: "20\u201340%", label: "Asset life extension with condition monitoring", source: "Industry benchmark" },
      { value: "10:1", label: "Average ROI from predictive maintenance programs", source: "U.S. DOE" },
      { value: "70%", label: "Of utility digital transformations fail without proper implementation", source: "Industry benchmark" },
    ],

    ctaHeadline: "Let\u2019s talk about what\u2019s actually slowing your operation down",
    ctaBody:
      "No consultancy theatre. No death-by-PowerPoint. We\u2019ll spend time with your operation \u2014 in the control room, at the treatment plant, with your field crews. You\u2019ll get a clear, honest picture of where your systems are costing you reliability, money, and time, and a practical plan to fix it. 30 minutes. No pitch. Just a straight conversation.",
    ctaButtonLabel: "Book a Conversation",
  },
  {
    slug: "commercial-buildings",
    name: "Commercial Buildings",
    tagline: "Built for building operators. Not theorists.",
    heroImage: "/images/buildings-hero.webp",
    metaTitle: "Commercial Building Operations & Technology Consulting Australia | Xpedite Partners",
    metaDescription:
      "Helping Australian commercial building owners and facility managers get more from their assets. Practical consulting for energy performance, BMS modernisation, compliance, and tenant experience.",
    heroHeadline:
      "68% of rated buildings about to lose a NABERS star. Gas bans rolling in. And you can\u2019t find a technician to fix the BMS.",
    heroSub:
      "Australian commercial buildings are being hit from every direction \u2014 forced electrification, mandatory climate reporting, tenants demanding better air and smarter spaces, and a trades workforce that\u2019s disappeared. We help you fix the operating systems behind your buildings so you can protect asset value and stay ahead of regulation.",
    heroStats: [
      { value: "68%", label: "Of NABERS-rated buildings face star downgrades", source: "Knight Frank" },
      { value: "40\u201350%", label: "Of building energy wasted through HVAC alone", source: "DCCEEW" },
      { value: "43%", label: "Of trades roles going unfilled nationally", source: "Jobs & Skills Australia" },
      { value: "20%+", label: "Vacancy in B/C-grade buildings without upgrades", source: "CBRE" },
    ],

    soundFamiliar: [
      { icon: "trending-down", text: "Your NABERS rating is about to drop because the gas methodology change hits in July 2025 \u2014 and you don\u2019t have an electrification plan" },
      { icon: "clock", text: "Your BMS is 15 years old, half the sensors are unreliable, and the person who knew the system just retired" },
      { icon: "layers", text: "HVAC, fire, lighting, and access control all run on different systems that can\u2019t talk to each other" },
      { icon: "alert", text: "Essential Safety Measures inspections keep finding issues, and the penalties for non-compliance are up to $500K" },
      { icon: "users", text: "You can\u2019t find HVAC technicians or electricians \u2014 43% of trades roles go unfilled and the apprenticeship pipeline has collapsed" },
      { icon: "shield", text: "Mandatory climate reporting started January 2025 and you\u2019re still collecting energy data from spreadsheets" },
      { icon: "puzzle", text: "Tenants want air quality data, smart controls, and sustainability credentials \u2014 and they\u2019ll move to a building that has them" },
      { icon: "clipboard", text: "ESM compliance, NABERS reporting, DDA audits, WHS obligations, climate disclosures \u2014 the regulatory load keeps growing" },
    ],
    soundFamiliarSub:
      "If you\u2019re managing a commercial building or portfolio in Australia right now, you\u2019re probably nodding at most of these.",
    proofPointsSub:
      "These aren\u2019t projections. They\u2019re documented results from building operators who\u2019ve made the shift.",
    processSteps: [
      {
        icon: "search",
        title: "We learn your building",
        body: "We spend time with your facility team, your BMS, your plant rooms, and your data. We look at how energy flows, how maintenance gets done, how compliance gets tracked \u2014 and where the gaps are costing you stars, money, and tenants.",
      },
      {
        icon: "bar-chart",
        title: "We show you the picture",
        body: "You get a clear, straight-talking view of where your building or portfolio is strong and where it\u2019s bleeding energy, compliance risk, and tenant satisfaction. No jargon. Just an honest assessment with real numbers.",
      },
      {
        icon: "tool",
        title: "We build the fix \u2014 with you",
        body: "We set up the right systems and processes for your building\u2019s age, type, and tenant base. We make sure your team and contractors actually use them. We stay until the new way of working sticks.",
      },
      {
        icon: "check-circle",
        title: "You run it from here",
        body: "The goal is a building that runs properly without us. Better energy performance, fewer compliance surprises, happier tenants. You manage by dashboard, not by reactive callouts.",
      },
    ],

    systemProblemTitle: "It\u2019s not the building. It\u2019s how it\u2019s operated.",
    systemProblemBody:
      "Most commercial buildings have invested in plant, equipment, and some level of automation. But the systems connecting them \u2014 how energy is monitored, how maintenance is scheduled, how compliance is tracked, how tenant comfort is managed \u2014 are held together with legacy BMS, disconnected spreadsheets, and tribal knowledge. When your HVAC, fire, lighting, access, and energy systems can\u2019t talk to each other, you\u2019re wasting energy, missing compliance deadlines, and losing tenants to buildings that have their act together. The technology to fix this exists. But most building upgrades fail because nobody changes how the operation actually works around the new systems. That\u2019s the gap we close.",

    sections: [
      {
        id: "energy",
        icon: "zap",
        image: "/images/buildings-energy.webp",
        title: "Stop bleeding energy and start protecting your rating",
        intro:
          "HVAC alone wastes 40\u201350% of a commercial building\u2019s energy. With electricity prices rising 5\u201310% from mid-2025 and 68% of NABERS-rated buildings facing star downgrades under the new gas methodology, the cost of doing nothing is measurable \u2014 in dollars, in ratings, and in tenant appeal.",
        painPoints: [
          {
            icon: "trending-down",
            hook: "NABERS stars about to drop",
            body: "The July 2025 NABERS methodology change penalises gas-dependent buildings. Gas-reliant buildings will lose approximately 0.5 stars immediately, and a full star by 2030. Every star lost hits asset value and leasing competitiveness.",
          },
          {
            icon: "eye-off",
            hook: "Energy waste you can\u2019t see",
            body: "Without proper fault detection, HVAC systems run inefficiently for months or years before anyone notices. Modern BMS analytics and energy monitoring cut energy use 10\u201330% \u2014 with ROI inside 18 months.",
          },
          {
            icon: "alert",
            hook: "Electrification is no longer optional",
            body: "Gas bans are rolling in \u2014 Sydney from 2026, Victoria from 2027, ACT already passed. Green Star v1.1 mandates all-electric from May 2026. Your gas-fired boilers and heating have an expiry date.",
          },
        ],
        outcomes: [
          {
            title: "Energy performance",
            before: "Your building wastes energy through outdated HVAC schedules, faulty sensors, and systems nobody has tuned in years. You find out when the NABERS rating drops.",
            after: "Continuous monitoring, automated fault detection, and optimised schedules. Energy use drops 10\u201330%. Your rating improves or holds \u2014 and you can prove it.",
          },
          {
            title: "Electrification planning",
            before: "You know gas is being phased out but don\u2019t have a plan. The cost feels overwhelming and you don\u2019t know where to start.",
            after: "A staged electrification roadmap that fits your capital cycle. Heat pumps, electric boilers, and controls upgrade sequenced to minimise disruption and maximise rebates.",
          },
          {
            title: "NABERS pathway",
            before: "Your rating is at risk and you\u2019re not sure what it takes to hold or improve it under the new methodology.",
            after: "Clear interventions mapped to star improvements. You know exactly what each upgrade delivers and can make investment decisions with confidence.",
          },
        ],
      },
      {
        id: "compliance",
        icon: "shield",
        image: "/images/buildings-interior.webp",
        title: "Stay on top of compliance before it buries you",
        intro:
          "Essential Safety Measures, mandatory climate disclosures, NABERS reporting, DDA audits, WHS obligations \u2014 the compliance load on Australian building operators has never been heavier. Penalties for ESM non-compliance alone reach $500K for corporations. And mandatory climate reporting started January 2025.",
        painPoints: [
          {
            icon: "clipboard",
            hook: "ESM compliance is a constant scramble",
            body: "Quarterly and annual inspections for fire systems, exits, lighting, and structural elements. Most buildings track this in spreadsheets or paper logs. Miss one, and you\u2019re exposed to penalties and voided insurance.",
          },
          {
            icon: "alert",
            hook: "Climate reporting has arrived",
            body: "Mandatory climate-related financial disclosures commenced January 2025 for the largest entities, with Group 2 and 3 following in 2026\u201327. This means collecting Scope 1, 2, and 3 emissions data across every building \u2014 a massive data challenge.",
          },
          {
            icon: "compass",
            hook: "Regulation keeps expanding",
            body: "The Commercial Building Disclosure program is extending beyond offices to hotels by 2030. Updated DDA standards took effect in late 2024. Each new obligation adds reporting burden to teams already stretched thin.",
          },
        ],
        outcomes: [
          {
            title: "ESM management",
            before: "You track Essential Safety Measures in spreadsheets. Inspections are booked manually. Defects get lost between emails. You\u2019re never quite sure you\u2019re fully compliant.",
            after: "Digital ESM platform with automated scheduling, defect tracking, and audit-ready reporting. You know exactly where every building stands, every quarter.",
          },
          {
            title: "Climate and ESG reporting",
            before: "Collecting energy, water, and emissions data across a portfolio is a months-long manual exercise. Numbers don\u2019t reconcile and you\u2019re not confident in what you\u2019re submitting.",
            after: "Automated data collection from BMS and metering feeds directly into reporting frameworks. Submissions are faster, accurate, and auditable.",
          },
          {
            title: "Regulatory readiness",
            before: "Each new regulation catches you off guard. You scramble to understand the impact and comply by the deadline.",
            after: "A compliance roadmap that maps upcoming obligations to your portfolio. You plan ahead, budget accordingly, and never scramble.",
          },
        ],
      },
      {
        id: "maintenance",
        icon: "tool",
        image: "/images/buildings-workers.webp",
        title: "Get more from your maintenance team \u2014 because you can\u2019t hire more",
        intro:
          "43% of trades roles go unfilled. Apprenticeship commencements have dropped 52% from their peak. The technicians who know your BMS and plant are retiring. You can\u2019t hire your way out of this \u2014 you need to get more from every person and every dollar you\u2019ve got.",
        painPoints: [
          {
            icon: "door-open",
            hook: "The technician who knew everything just left",
            body: "Your most experienced BMS engineer or HVAC tech knew every quirk in the building. Their knowledge lived in their head, not in any system. Now they\u2019re gone and the new person is guessing.",
          },
          {
            icon: "clock",
            hook: "Reactive maintenance eating your budget",
            body: "Emergency callouts for HVAC failures, lift breakdowns, and fire system faults cost 4\u20135x more than planned work. Every reactive job displaces preventive maintenance, and the backlog grows.",
          },
          {
            icon: "users",
            hook: "Contractors with no visibility",
            body: "You rely on multiple specialist contractors \u2014 HVAC, fire, lifts, electrical \u2014 but have no single view of what\u2019s been done, what\u2019s due, or what\u2019s been missed. You manage by inbox, not by system.",
          },
        ],
        outcomes: [
          {
            title: "Knowledge retention",
            before: "Critical building knowledge lives in the heads of long-serving technicians. When they leave, you lose decades of context.",
            after: "Digital asset records, standardised procedures, and maintenance histories captured in the system. New technicians get productive faster because the building\u2019s story is documented.",
          },
          {
            title: "Maintenance approach",
            before: "You fix things when they break. Planned maintenance keeps getting bumped by emergencies. The deferred maintenance backlog grows every quarter.",
            after: "Condition monitoring and fault detection catch problems early. Maintenance shifts from reactive to planned. Fewer emergency callouts, lower costs, longer asset life.",
          },
          {
            title: "Contractor coordination",
            before: "Each contractor manages their own schedule and reporting. You don\u2019t know if last quarter\u2019s fire inspection was actually completed until someone chases it.",
            after: "One platform tracking all contractor work, compliance inspections, and defect resolution. Nothing falls through the cracks.",
          },
        ],
      },
      {
        id: "tenant",
        icon: "monitor",
        image: "/images/buildings-control.webp",
        title: "Give tenants a reason to stay \u2014 and a reason to choose you",
        intro:
          "A two-tier market is emerging. Prime buildings with strong sustainability credentials and smart amenities attract tenants at premium rents. B and C-grade buildings without upgrades face 20%+ vacancy. Indoor air quality, smart controls, and ESG credentials are now lease-renewal factors, not nice-to-haves.",
        painPoints: [
          {
            icon: "trending-down",
            hook: "Tenants leaving for better buildings",
            body: "Tenants with requirements over 1,000 sqm increasingly target new developments with premium amenities and sustainability credentials. If your building can\u2019t compete, they\u2019ll move to one that can.",
          },
          {
            icon: "shield",
            hook: "Air quality is now a brand issue",
            body: "Post-COVID, tenants expect measurable proof of good ventilation and filtration. Buildings that demonstrate air quality metrics attract tenants faster and retain them longer.",
          },
          {
            icon: "puzzle",
            hook: "No smart building capability",
            body: "Tenants want app-based controls, real-time comfort feedback, meeting room booking, and visitor management. Most existing buildings have none of this \u2014 because the underlying BMS can\u2019t support it.",
          },
        ],
        outcomes: [
          {
            title: "Tenant experience",
            before: "Comfort complaints come via email. Temperature issues take days to resolve. Tenants feel ignored and start looking elsewhere.",
            after: "Real-time comfort monitoring, rapid fault response, and tenant-facing dashboards. Issues are detected and fixed before tenants complain.",
          },
          {
            title: "Air quality",
            before: "You have no data on indoor air quality. You can\u2019t answer tenant questions about ventilation rates or filtration effectiveness.",
            after: "Continuous IAQ monitoring with CO2, PM2.5, and VOC sensors. You can prove your building\u2019s air quality and market it as a differentiator.",
          },
          {
            title: "Building positioning",
            before: "Your building is losing tenants to newer, greener, smarter competitors. You\u2019re in a race to the bottom on rent.",
            after: "Targeted upgrades in energy performance, air quality, and smart amenities reposition your building to compete. You attract quality tenants at better rents.",
          },
        ],
      },
    ],

    proofPoints: [
      { value: "10\u201330%", label: "Energy savings from BMS analytics and fault detection", source: "DCCEEW / Industry" },
      { value: "0.5\u20131 star", label: "NABERS rating at risk for gas-dependent buildings", source: "Knight Frank" },
      { value: "<18 mths", label: "Typical ROI on energy monitoring and BMS upgrades", source: "Industry benchmark" },
      { value: "$500K+", label: "Maximum penalty for ESM non-compliance (corporations)", source: "VBA" },
      { value: "20\u201340%", label: "Longer asset life with condition-based maintenance", source: "Industry benchmark" },
      { value: "70%", label: "Of building technology projects fail without proper implementation", source: "Industry benchmark" },
    ],

    ctaHeadline: "Let\u2019s talk about what\u2019s actually costing your building",
    ctaBody:
      "No consultancy theatre. No 200-slide decks. We\u2019ll spend time in your building \u2014 in the plant rooms, at the BMS, with your facility team. You\u2019ll get a clear, honest picture of where your building is bleeding energy, compliance risk, and tenant appeal, and a practical plan to fix it. 30 minutes. No pitch. Just a straight conversation.",
    ctaButtonLabel: "Book a Conversation",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Built for the shop floor. Not the boardroom.",
    heroImage: "/images/manufacturing-hero.webp",
    metaTitle: "Manufacturing Operations & Technology Consulting Australia | Xpedite Partners",
    metaDescription:
      "Helping Australian manufacturers get more from their people, equipment, and systems. Practical consulting for productivity, quality, digital adoption, and operational improvement.",
    heroHeadline:
      "Productivity down for a decade. 61% of trades roles unfilled. And your competitors are automating while you\u2019re still running spreadsheets.",
    heroSub:
      "Australian manufacturing is being squeezed from every direction \u2014 rising costs, shrinking margins, a workforce that\u2019s retiring faster than you can replace it, and global competitors who\u2019ve already gone digital. We help you fix the operating systems on your shop floor so you can actually compete.",
    heroStats: [
      { value: "2.6%", label: "Manufacturing output contracted in 2024", source: "Ai Group" },
      { value: "61%", label: "Recruitment difficulty for trades roles", source: "Jobs & Skills Australia" },
      { value: "34%", label: "Of efficiency losses from unplanned downtime", source: "L2L" },
      { value: "47%", label: "Of manufacturers still facing supply chain disruption", source: "NTI" },
    ],

    soundFamiliar: [
      { icon: "trending-down", text: "Your output per person is lower than it was five years ago \u2014 but your wages bill is 20% higher" },
      { icon: "users", text: "Your best machinist is 58, and the apprentice you hired last year already quit" },
      { icon: "clock", text: "Unplanned breakdowns eat your production schedule every week, and you find out when the line stops" },
      { icon: "layers", text: "Your ERP doesn\u2019t talk to the shop floor, your quality records are in a different system, and inventory is a guess" },
      { icon: "alert", text: "Material costs changed three times this quarter and your quotes are already wrong" },
      { icon: "shield", text: "Mandatory climate reporting is coming and you\u2019ve got no idea what your Scope 3 emissions look like" },
      { icon: "puzzle", text: "You know you need to digitise but you\u2019re stuck with legacy machines, no IT team, and can\u2019t justify the cost" },
      { icon: "clipboard", text: "WHS audits, quality standards, Modern Slavery reporting, environmental compliance \u2014 the paperwork never stops" },
    ],
    soundFamiliarSub:
      "If you\u2019re running a manufacturing operation in Australia right now, you\u2019re probably nodding at most of these.",
    proofPointsSub:
      "These aren\u2019t projections. They\u2019re documented results from manufacturers who\u2019ve made the shift.",
    processSteps: [
      {
        icon: "search",
        title: "We learn your operation",
        body: "We spend time on your shop floor, with your operators, your supervisors, and your data. We look at how work flows from order to dispatch \u2014 where downtime hides, where quality drops, and where systems don\u2019t connect.",
      },
      {
        icon: "bar-chart",
        title: "We show you the picture",
        body: "You get a clear, straight-talking view of where your operation is strong and where it\u2019s bleeding time, yield, and margin. No jargon, no 200-page report. Just an honest assessment with real numbers.",
      },
      {
        icon: "tool",
        title: "We build the fix \u2014 with you",
        body: "We set up the right systems and processes for your plant, your people, and your product. We make sure your operators and supervisors actually use them. We stay until the new way of working sticks.",
      },
      {
        icon: "check-circle",
        title: "You run it from here",
        body: "The goal is a plant that runs properly without us. Better OEE, fewer quality escapes, less firefighting. You manage by dashboard, not by walking the floor putting out fires.",
      },
    ],

    systemProblemTitle: "It\u2019s not the machines. It\u2019s how the operation runs around them.",
    systemProblemBody:
      "Most manufacturers have invested in equipment. But the systems connecting everything \u2014 how orders flow to the floor, how quality gets tracked, how maintenance gets scheduled, how data moves between machines, people, and the office \u2014 are held together with spreadsheets, whiteboards, and tribal knowledge. When your ERP, quality system, maintenance records, and production data live in different worlds, you\u2019re making decisions on partial information. The technology to fix this is more accessible than ever. But most digital transformations in manufacturing fail because nobody changes how the operation actually works around the new tools. That\u2019s the gap we close.",

    sections: [
      {
        id: "productivity",
        icon: "trending-up",
        image: "/images/manufacturing-equipment.webp",
        title: "Get more out of every machine, every shift, every person",
        intro:
          "Australian manufacturing productivity has fallen over the past decade while wages have risen 5.7% in the last year alone. Unplanned downtime accounts for 34% of efficiency losses and costs $5,000\u2013$50,000 per hour. The gap between what your equipment could produce and what it actually does is where the margin is hiding.",
        painPoints: [
          {
            icon: "clock",
            hook: "Downtime you don\u2019t see coming",
            body: "Unplanned breakdowns account for 34% of all efficiency losses. Every unexpected stop cascades through the schedule, creates overtime, and pushes deliveries late. Predictive maintenance reduces unplanned downtime by 30\u201350%.",
          },
          {
            icon: "eye-off",
            hook: "No real-time view of the floor",
            body: "Without OEE tracking, you don\u2019t know your true availability, performance, or quality rates until the end of the shift \u2014 or the end of the month. By then, the losses have already happened.",
          },
          {
            icon: "trending-down",
            hook: "Changeover time eating your capacity",
            body: "Setup and changeover accounts for 29% of efficiency losses. For short-run manufacturers, this can be the difference between profit and loss on a job. Structured changeover programs cut this by 30\u201350%.",
          },
        ],
        outcomes: [
          {
            title: "Equipment effectiveness",
            before: "You don\u2019t know your real OEE. Production targets are based on gut feel. You find out about problems when the line stops.",
            after: "Real-time OEE tracking across every machine. You see availability, performance, and quality in real time and can act before small losses become big ones. Typical gains: 10\u201325%.",
          },
          {
            title: "Maintenance",
            before: "You fix things when they break. Critical equipment goes down mid-run. Spares arrive too late or sit on shelves costing money.",
            after: "Condition monitoring and predictive analytics flag problems before they become failures. Maintenance shifts from reactive to planned. Downtime drops 30\u201350%.",
          },
          {
            title: "Changeover",
            before: "Changeovers take as long as they take. There\u2019s no standard process, and each shift does it differently.",
            after: "Structured SMED methodology with documented procedures. Changeover times drop 30\u201350%, freeing capacity you didn\u2019t know you had.",
          },
        ],
      },
      {
        id: "quality",
        icon: "shield",
        image: "/images/manufacturing-floor.webp",
        title: "Stop rework from eating your margin",
        intro:
          "Rework costs up to 25% of production costs across many manufacturing sectors. Companies with proper corrective action processes see 37% less downtime, 28% higher customer satisfaction, and 19% lower material costs. If your quality system is still paper-based, you\u2019re finding problems too late and fixing the same ones over and over.",
        painPoints: [
          {
            icon: "x-circle",
            hook: "Finding defects at the end of the line",
            body: "Without in-process quality checks and real-time SPC, defects travel through the entire production process before being caught. Every station that adds value to a defective part is waste.",
          },
          {
            icon: "clipboard",
            hook: "Quality records nobody can find",
            body: "Paper-based quality logs, disconnected inspection records, and no traceability. When a customer complaint comes in or an auditor arrives, you\u2019re scrambling to reconstruct what happened.",
          },
          {
            icon: "shuffle",
            hook: "Same problems, different day",
            body: "Without a structured corrective action system, you fix symptoms rather than root causes. The same defects recur, costing you in rework, scrap, customer returns, and reputation.",
          },
        ],
        outcomes: [
          {
            title: "Defect detection",
            before: "Defects are caught at final inspection or \u2014 worse \u2014 by the customer. Rework is a constant drag on margin.",
            after: "In-process checks and real-time quality monitoring catch problems at the source. Scrap and rework drop. Customer complaints fall.",
          },
          {
            title: "Quality system",
            before: "Quality records are paper-based, scattered, and take days to compile for audits. Traceability is manual and incomplete.",
            after: "Digital quality management with full traceability, automated non-conformance tracking, and audit-ready reports generated in minutes.",
          },
          {
            title: "Continuous improvement",
            before: "You know which problems recur but don\u2019t have the data or system to drive root cause analysis and sustained fixes.",
            after: "Structured CAPA processes backed by data. Every defect generates a corrective action with follow-up. Problems get solved permanently, not patched.",
          },
        ],
      },
      {
        id: "people",
        icon: "hard-hat",
        image: "/images/manufacturing-workers.webp",
        title: "Get more from the people you\u2019ve got \u2014 because you can\u2019t find more",
        intro:
          "61% recruitment difficulty for trades. A projected shortfall of 70,000 welders by 2030. Apprenticeship completion rates at just 43%. The manufacturers that win will be the ones that get more from every operator, every supervisor, and every shift \u2014 through better systems, clearer processes, and less time wasted on things that don\u2019t add value.",
        painPoints: [
          {
            icon: "door-open",
            hook: "Knowledge retiring with every departure",
            body: "Your most experienced operators and tool-setters know things that aren\u2019t written down anywhere \u2014 the quirks of Machine 3, the trick to getting the finish right, the supplier that always delivers late. When they leave, that knowledge goes with them.",
          },
          {
            icon: "clock",
            hook: "Operators doing admin, not making parts",
            body: "Manual data entry, paper-based logs, handwritten job cards, and chasing information from the office. Your highest-skilled people are spending hours a day on work that adds no value.",
          },
          {
            icon: "users",
            hook: "New starters take too long to be productive",
            body: "Training is ad-hoc and depends on who\u2019s available to show new people the ropes. With 43% of apprentices not completing, every month of slow onboarding is a risk you can\u2019t afford.",
          },
        ],
        outcomes: [
          {
            title: "Knowledge capture",
            before: "Critical process knowledge lives in the heads of your most experienced people. When they retire, you lose decades of know-how.",
            after: "Digital work instructions, standardised SOPs, and documented setup procedures. The knowledge lives in the system, not just in people\u2019s heads.",
          },
          {
            title: "Operator productivity",
            before: "Operators spend 20\u201330% of their day on paperwork, data entry, and chasing information. Actual production time is lower than it should be.",
            after: "Digital job cards, barcode scanning, and real-time production data entry at the machine. Operators focus on making parts, not filling in forms.",
          },
          {
            title: "Workforce development",
            before: "Training is informal and inconsistent. Skills gaps are discovered when something goes wrong, not before.",
            after: "Skills matrices, structured competency frameworks, and digital training records. You know exactly who can do what, and you can prove it to auditors.",
          },
        ],
      },
      {
        id: "digital",
        icon: "monitor",
        image: "/images/manufacturing-control.webp",
        title: "Connect the shop floor to the top floor",
        intro:
          "99% of Australian manufacturers are SMEs, and most are stuck with a patchwork of disconnected systems \u2014 an ERP that doesn\u2019t talk to the floor, quality records in a different system, inventory in a spreadsheet, and scheduling on a whiteboard. The technology gap between leaders and laggards is widening, but the solutions are more accessible than ever.",
        painPoints: [
          {
            icon: "layers",
            hook: "Data in silos, decisions by gut feel",
            body: "Your ERP knows orders. Your floor knows what\u2019s running. Your quality system knows defects. But nobody has the full picture without hours of manual reconciliation across systems that don\u2019t talk.",
          },
          {
            icon: "x-circle",
            hook: "Legacy equipment you can\u2019t connect",
            body: "CNC machines from the 2000s, PLCs with proprietary protocols, and no APIs. Getting data off the equipment and into a useful system feels impossible \u2014 but IoT retrofits have made it affordable.",
          },
          {
            icon: "compass",
            hook: "Compliance data you can\u2019t compile",
            body: "Mandatory climate reporting, Modern Slavery Act thresholds dropping to $50M, WHS audits, ISO recertification \u2014 every obligation requires data you\u2019re currently collecting manually or not at all.",
          },
        ],
        outcomes: [
          {
            title: "Connected systems",
            before: "Getting a complete picture of production, quality, and inventory means pulling data from 4+ systems and hoping the numbers match.",
            after: "Integrated data from ERP, MES, and quality systems. One view of orders, production status, quality, and delivery. Decisions made in minutes, not days.",
          },
          {
            title: "Equipment connectivity",
            before: "Your machines run in isolation. You have no idea how they\u2019re actually performing until someone walks the floor or reads the logbook.",
            after: "IoT sensors and retrofit solutions pull data from legacy equipment. Real-time machine status, cycle times, and utilisation visible from anywhere.",
          },
          {
            title: "Compliance and reporting",
            before: "Every audit, every compliance submission, every regulatory report is a manual scramble. It takes weeks and you\u2019re never fully confident in the data.",
            after: "Automated data collection feeds directly into reporting frameworks. Emissions tracking, quality audits, and safety reporting generated from operational data, not separate spreadsheets.",
          },
        ],
      },
    ],

    proofPoints: [
      { value: "10\u201325%", label: "OEE improvement from real-time monitoring", source: "Industry benchmark" },
      { value: "30\u201350%", label: "Reduction in unplanned downtime with predictive maintenance", source: "Deloitte / DOE" },
      { value: "25%", label: "Of production costs consumed by rework in typical plants", source: "Industry research" },
      { value: "37%", label: "Less downtime for manufacturers with proper corrective action", source: "Industry benchmark" },
      { value: "10:1", label: "Typical ROI from predictive maintenance programs", source: "U.S. DOE" },
      { value: "70%", label: "Of manufacturing digital transformations fail without proper implementation", source: "Industry benchmark" },
    ],

    ctaHeadline: "Let\u2019s talk about what\u2019s actually costing you production",
    ctaBody:
      "No consultancy theatre. No death-by-PowerPoint. We\u2019ll spend time on your shop floor \u2014 at the machines, with your operators, in your planning meetings. You\u2019ll get a clear, honest picture of where your operation is bleeding time, quality, and margin, and a practical plan to fix it. 30 minutes. No pitch. Just a straight conversation.",
    ctaButtonLabel: "Book a Conversation",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
