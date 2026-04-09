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
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
