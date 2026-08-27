import Image from "next/image";
import Cta, { ExternalLink } from "./Cta";
import StickyBookingBar from "./StickyBookingBar";
import {
  aiReady,
  interestMailto,
  scorecardHref,
  type AiReadyDifferentiator,
} from "@/data/ai-ready";

/* ==================================================================
   Xpedite AI Ready

   The page is set as a proposal, not a brochure: a narrow margin rail
   names the kind of claim each section makes (situation, evidence, fit,
   position, sequence, scope, next step), and content hangs off one
   consistent left edge.

   No framer-motion on this route. Every element's base state is visible,
   so the page reads with JS disabled and works with find-in-page. Motion
   is CSS-only and lives in globals.css under `prefers-reduced-motion`.
   ================================================================== */

const GROUND = "bg-[#0F0F0F]";
const SURFACE = "bg-[#1a1a1a]";

/* ---------- section scaffolding ---------- */

function RailLabel({
  children,
  tone = "orange",
  desktopOnly = false,
}: {
  children: string;
  tone?: "orange" | "clay";
  desktopOnly?: boolean;
}) {
  const colour = tone === "clay" ? "text-[#A8441A]" : "text-[#E8632B]";
  const rule = tone === "clay" ? "bg-[#A8441A]" : "bg-[#E8632B]";
  return (
    <div className={desktopOnly ? "hidden lg:block" : "mb-5 lg:mb-0"}>
      <div className={`w-8 h-px ${rule} mb-3`} />
      <p className={`xr-label ${colour}`}>{children}</p>
    </div>
  );
}

function Section({
  id,
  label,
  tone,
  children,
}: {
  id: string;
  label: string;
  tone: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${tone} py-16 md:py-24 px-6`}>
      <div className="max-w-5xl mx-auto">
        <div className="lg:grid lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-14">
          <RailLabel>{label}</RailLabel>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- inline link substitution for the one external claim ---------- */

function DifferentiatorBody({ d }: { d: AiReadyDifferentiator }) {
  if (!d.linkText || !d.linkUrl) return <>{d.body}</>;
  const i = d.body.indexOf(d.linkText);
  if (i === -1) return <>{d.body}</>;
  return (
    <>
      {d.body.slice(0, i)}
      <ExternalLink href={d.linkUrl}>{d.linkText}</ExternalLink>
      {d.body.slice(i + d.linkText.length)}
    </>
  );
}

/* ================================================================== */

export default function AiReadyContent() {
  const { scorecardEnabled } = aiReady;

  return (
    <div className={`xr-page ${GROUND} text-white`}>
      {/* ============================================================
          1. HERO
          No photograph, no video, no glow. Type and one button.
          Budgeted so the primary CTA sits ~400px down on a 390px-wide
          phone with the 56px fixed header in place.
          ============================================================ */}
      <section id="top" className={`${GROUND} px-6 pt-[72px] pb-8 md:pt-32 md:pb-14`}>
        <div className="max-w-5xl mx-auto lg:grid lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-14">
          {/* Desktop only: on a phone this would cost the fold roughly 32px,
              and the fold is worth more than the label. */}
          <RailLabel desktopOnly>AI Ready</RailLabel>
          <div className="xr-hero max-w-3xl">
            <h1 className="xr-h1 font-bold text-white">
              Your biggest customers are starting to ask about{" "}
              <span className="text-[#E8632B]">AI, data and security</span>.
            </h1>

            <p className="mt-3.5 text-[15px] md:text-lg leading-[1.55] text-white/70 max-w-2xl">
              We have sat on their side of the table. Now we sit on yours. Xpedite AI
              Ready makes AI safe, real and scalable in established Queensland
              businesses of 20 to 200 people.
            </p>

            {/* Margin annotation: the credential, set as a note in the margin of
                the claim above it rather than as a badge. */}
            <p className="mt-3.5 border-l-2 border-[#E8632B] pl-4 text-[13px] md:text-sm leading-[1.45] text-white/60 max-w-xl">
              20+ years of delivery leadership across mining, energy, utilities,
              construction, government and industrial technology.
            </p>

            <div className="mt-[18px]">
              <Cta
                href={aiReady.bookingUrl}
                event="book_call_click"
                params={{ section: "hero" }}
              >
                Book a 20-minute call
              </Cta>
              <p className="mt-3 text-[13px] md:text-sm leading-[1.5] text-white/60 max-w-lg">
                20 minutes, no cost, no pitch. You leave with a straight answer on what
                to do and what it would cost — including when the answer is
                &ldquo;nothing yet&rdquo;.
              </p>
            </div>

            <div className="mt-5">
              {scorecardEnabled ? (
                <div>
                  <Cta
                    href={scorecardHref}
                    variant="outline"
                    event="scorecard_start"
                    params={{ section: "hero" }}
                  >
                    Take the free AI Reality Check
                  </Cta>
                  <p className="mt-2 text-[13px] text-white/60">
                    10 minutes. Instant result.
                  </p>
                </div>
              ) : (
                <Cta
                  href={scorecardHref}
                  variant="quiet"
                  event="scorecard_start"
                  params={{ section: "hero_waitlist" }}
                >
                  AI Reality Check — coming shortly. Tell us to let you know
                </Cta>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. THE SITUATION
          Six ruled rows. No bullet glyphs, no cards, no icons — a list
          someone wrote, not a feature grid.
          ============================================================ */}
      <Section id="situation" label="Situation" tone={GROUND}>
        <h2 className="xr-h2 font-bold text-white max-w-2xl">
          Where most established businesses are with AI right now
        </h2>
        <ul className="mt-8 border-t border-white/10">
          {aiReady.situation.map((line) => (
            <li
              key={line}
              className="border-b border-white/10 py-4 md:py-5 text-base md:text-[17px] leading-[1.6] text-white/80"
            >
              {line}
            </li>
          ))}
        </ul>
      </Section>

      {/* ============================================================
          THE TURN — the page's signature.
          One full-bleed light band on an otherwise dark page, edged top
          and bottom in orange like a clause someone ruled off with a pen.
          Used exactly once.
          ============================================================ */}
      <section
        id="the-turn"
        className="bg-[#FDEBD5] border-y-[3px] border-[#E8632B] px-6 py-14 md:py-20"
      >
        <div className="max-w-5xl mx-auto">
          <p className="xr-turn font-semibold text-[#111] max-w-4xl">
            None of this means your business is behind. It means AI has arrived
            without the structure around it.{" "}
            <span className="text-[#A8441A]">
              Building that structure is what we do.
            </span>
          </p>
        </div>
      </section>

      {/* ============================================================
          3. THE PRINCIPAL, THEN EXPERIENCE AND CAPABILITY

          The photograph and the first-person line used to close the
          page. They open this section instead. The turn band directly
          above ends on "building that structure is what we do", and
          the reader's next question is who "we" is. It gets answered
          before a single number, not at 86% scroll depth.

          Sequencing the face into the stat row:
           - No card. The block sits bare on the section surface and
             shares the content column's left edge with the <dl> below,
             so the two read as one run rather than two stacked panels.
           - Name and role sit UNDER the statement, as an attribution
             rather than a bio header. That puts "Founder and Principal"
             hard against the heading "Experience and capability", so
             the numbers that follow read as his record, not a firm's
             brochure figures.
           - The framing line stays below the heading. It qualifies the
             scope of the numbers; it is not an introduction to a
             person, and moving it above the portrait would ask the
             reader to discount a claim they have not seen yet.
           - On a phone the portrait is floated and the statement runs
             around it. That buys a face at real size for roughly the
             height of the statement alone.

          The stat row below is a real <dl>: <dt> is the claim, <dd> is
          what it refers to, so a screen reader gets the pair rather
          than an orphaned number. Values are sized by weight, not
          uniformly.
          ============================================================ */}
      <Section id="evidence" label="Evidence" tone={SURFACE}>
        <figure className="sm:flex sm:gap-8">
          <Image
            src="/images/founder.jpg"
            alt="Anil Chandra"
            width={411}
            height={560}
            sizes="(max-width: 640px) 132px, 208px"
            className="float-left mr-5 mb-2 w-[132px] sm:float-none sm:m-0 sm:w-[208px] h-auto rounded-lg object-cover border border-[#E8632B]/40 shrink-0"
          />
          <div className="min-w-0 sm:flex sm:flex-col sm:flex-1">
            <p className="text-base leading-[1.55] md:text-[1.375rem] md:leading-[1.4] text-white max-w-md">
              I have spent 20 years making technology pay off inside large
              organisations. In a business your size, the same fixes take weeks,
              not years. You will be talking to me, not a sales team.
            </p>
            <figcaption className="clear-left mt-5 sm:mt-auto pt-4 border-t border-white/15 max-w-md">
              <span className="block text-[15px] font-semibold text-white">
                Anil Chandra
              </span>
              {/* Trimmed from "Founder and Principal, Xpedite Partners": the
                  wordmark is 60px above this and the firm name wrapped the
                  mono line onto two at 375px. */}
              <span className="mt-1 block xr-label text-[#E8632B]">
                Founder and Principal
              </span>
            </figcaption>
          </div>
        </figure>

        <h2 className="xr-h2 font-bold text-white mt-12">
          Experience and capability
        </h2>
        <p className="mt-5 text-[15px] md:text-base leading-[1.6] text-white/70 max-w-3xl">
          These results come from enterprise engagements across mining, industrial
          technology, utilities, government and financial services. The same
          disciplines, sized for a business of 20 to 200 people.
        </p>

        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-white/15 lg:border-b lg:border-white/15">
          {aiReady.stats.map((stat) => (
            <div
              key={stat.value}
              className="py-6 border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10 lg:last:border-r-0 lg:px-5 lg:first:pl-0 lg:last:pr-0"
            >
              <dt
                className={`font-bold text-[#E8632B] tracking-tight text-balance ${
                  stat.scale === "lg"
                    ? "text-3xl md:text-[2.5rem] leading-none"
                    : "text-xl md:text-2xl leading-[1.15]"
                }`}
              >
                {stat.value}
              </dt>
              <dd className="mt-2.5 text-[13px] leading-[1.5] text-white/70">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        {/* First-party proof — the only demonstrable claim on the page. */}
        <p className="mt-10 border-l-2 border-[#E8632B] pl-5 text-base md:text-[17px] leading-[1.6] text-white font-medium max-w-3xl">
          We run our own AI systems inside this business — our policy, our register,
          our tools. We will show you ours on the call.
        </p>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white">The team</h3>
          <p className="mt-3 text-[15px] md:text-base leading-[1.6] text-white/70 max-w-3xl">
            Xpedite is a principal-led network of senior practitioners: AI engineers,
            data engineers, analysts, solution architects, delivery leaders and product
            managers. All of them have proven themselves in complex environments:
            production AI systems, operational data platforms, secure and regulated
            settings, large multi-vendor programs. The people who advise your business
            are people who have built and run these systems at scale.
          </p>
        </div>
      </Section>

      {/* ============================================================
          4. WHO THIS IS FOR
          The sector name is the scan target: large, tight, white. A
          reader finds their column by scrolling, not by reading.
          ============================================================ */}
      <Section id="fit" label="Fit" tone={GROUND}>
        <h2 className="xr-h2 font-bold text-white">Who this is for</h2>
        <p className="mt-5 text-[15px] md:text-base leading-[1.6] text-white/70 max-w-3xl">
          We work with established businesses of 20 to 200 people, where the owner or
          managing director can make a decision in one meeting.
        </p>

        <div className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-white/10 border border-white/10 rounded-xl overflow-hidden">
          {aiReady.sectors.map((sector) => (
            <div
              key={sector.name}
              className="bg-[#0F0F0F] p-6 md:p-7 flex flex-col"
            >
              <h3 className="xr-h3-sector font-bold text-white">{sector.name}</h3>
              <p className="mt-4 text-[15px] leading-[1.6] text-white/70 flex-1">
                {sector.body}
              </p>
              <p className="mt-6 pt-5 border-t border-white/10 text-[13px] leading-[1.5] text-[#E8632B]">
                <span aria-hidden="true" className="mr-1.5">
                  &#8594;
                </span>
                {sector.routing}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============================================================
          5. HOW WE ARE DIFFERENT
          Four cards, no icons. One-word headlines do the work an icon
          would do, faster.
          ============================================================ */}
      <Section id="difference" label="Position" tone={SURFACE}>
        <h2 className="xr-h2 font-bold text-white">How we are different</h2>
        <p className="mt-5 text-[15px] md:text-base leading-[1.6] text-white/70 max-w-3xl">
          Your IT provider keeps the systems running. Your accountant keeps the numbers
          straight. Neither is paid to decide how your business runs with AI in it, or
          to answer your biggest customer&rsquo;s questionnaire. That is the gap we
          fill.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {aiReady.differentiators.map((d) => (
            <div
              key={d.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-7"
            >
              <h3 className="text-xl font-bold text-white tracking-tight">{d.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-white/70">
                <DifferentiatorBody d={d} />
              </p>
              {/* Renders only when independencePolicyUrl is set in the content
                  file. It is not set, so no dead link ships. */}
              {d.title === "Independent." && aiReady.independencePolicyUrl && (
                <p className="mt-4">
                  <Cta
                    href={aiReady.independencePolicyUrl}
                    variant="text"
                    event="tier_cta_click"
                    params={{ tier: "independence_policy", section: "difference" }}
                    arrow
                  >
                    Read our independence policy
                  </Cta>
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ============================================================
          6. HOW IT WORKS
          The only numbering on the page, because it is the only actual
          sequence.
          ============================================================ */}
      <Section id="how-it-works" label="Sequence" tone={GROUND}>
        <h2 className="xr-h2 font-bold text-white">How it works</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-7">
          {aiReady.steps.map((step, i) => (
            <li key={step.title} className="border-t-2 border-[#E8632B]/70 pt-5">
              <p className="xr-label text-[#E8632B]">
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-white/70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ============================================================
          7. SERVICES
          Three prominent cards, then a visibly subordinate block of
          three ruled rows. Per-card CTAs are text links; exactly one
          solid button sits under the whole section, so the primary CTA
          keeps its value.
          ============================================================ */}
      <Section id="services" label="Scope" tone={SURFACE}>
        <h2 className="xr-h2 font-bold text-white">Services</h2>
        <div className="mt-5 space-y-4 max-w-3xl">
          <p className="text-[15px] md:text-base leading-[1.6] text-white/70">
            Every service is a fixed price with a defined outcome and a decision point
            at the end. We do not publish prices because the right service depends on
            your size and where you are starting. We do not set the price based on what
            we think you can afford — same scope, same price, every time. You get the
            number on the first call and in writing before any work starts.
          </p>
          <p className="text-[15px] md:text-base leading-[1.6] text-white/70">
            We advise and we implement: we stay hands-on until AI is working in your
            daily operations. We do not build custom software or run managed IT; where
            a technical build is needed, we specify it and oversee it, with your IT
            team or a disclosed partner performing the work.
          </p>
        </div>

        {/* Three primary services */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {aiReady.services.map((s) => {
            const isScorecard = s.name === "AI Reality Check";
            return (
              <div
                key={s.name}
                className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-7 flex flex-col"
              >
                <div className="flex items-start gap-3 flex-wrap">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {s.name}
                  </h3>
                  {s.badge && (
                    <span className="xr-label text-[#E8632B] border border-[#E8632B]/50 rounded px-2 py-1 mt-0.5">
                      {s.badge}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-[15px] leading-[1.5] text-white font-medium">
                  {s.promise}
                </p>
                <p className="mt-3 text-[15px] leading-[1.6] text-white/70 flex-1">
                  {s.body}
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  {isScorecard ? (
                    <Cta
                      href={scorecardHref}
                      variant="text"
                      event={scorecardEnabled ? "scorecard_start" : "tier_cta_click"}
                      params={
                        scorecardEnabled
                          ? { section: "services" }
                          : { tier: s.name, section: "services_waitlist" }
                      }
                      arrow
                    >
                      {scorecardEnabled
                        ? "Start the free check"
                        : "Coming shortly — register interest"}
                    </Cta>
                  ) : (
                    <Cta
                      href={aiReady.bookingUrl}
                      variant="text"
                      event="tier_cta_click"
                      params={{ tier: s.name, section: "services" }}
                      arrow
                    >
                      Book a call
                    </Cta>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary block — deliberately subordinate: no card chrome, smaller
            type, hairline rules. */}
        <div className="mt-14">
          <h3 className="xr-label text-white/60">What comes after</h3>
          <div className="mt-5 border-t border-white/10">
            {aiReady.secondaryServices.map((s) => {
              const isCohort = s.name === "AI Operating Model Cohort";
              return (
                <div
                  key={s.name}
                  className="border-b border-white/10 py-5 md:grid md:grid-cols-[16rem_minmax(0,1fr)] md:gap-8"
                >
                  <div>
                    <h4 className="text-[15px] font-semibold text-white">{s.name}</h4>
                    {/* Renders only when cohortDate is set in the content file. */}
                    {isCohort && aiReady.cohortDate && (
                      <p className="mt-1 xr-label text-[#E8632B]">
                        {aiReady.cohortDate}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="text-[14px] leading-[1.6] text-white/60">{s.body}</p>
                    {isCohort && (
                      <Cta
                        href={interestMailto("AI Operating Model Cohort")}
                        variant="text"
                        event="tier_cta_click"
                        params={{ tier: s.name, section: "services_secondary" }}
                        className="mt-1 text-[14px]"
                        arrow
                      >
                        Register interest
                      </Cta>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* The one solid button in this section. */}
        <div className="mt-10">
          <Cta
            href={aiReady.bookingUrl}
            event="book_call_click"
            params={{ section: "services" }}
          >
            Book a 20-minute call
          </Cta>
        </div>
      </Section>

      {/* ============================================================
          8. CLOSING CTA
          The principal block used to live here. It now opens the
          Evidence section, on reach: most of the traffic never got
          this far. What is left is the ask and nothing else — no
          second portrait, no restated quote. Two photographs of the
          same person on one page reads as a bio, not an offer.
          ============================================================ */}
      <section id="book" className={`${GROUND} py-16 md:py-24 px-6`}>
        <div className="max-w-5xl mx-auto">
          <div className="lg:grid lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-14">
            <RailLabel>Next step</RailLabel>
            <div>
              <h2 className="xr-h2 font-bold text-white">
                Start with a 20-minute call
              </h2>
              <p className="mt-5 text-[15px] md:text-base leading-[1.6] text-white/70 max-w-2xl">
                No cost, no pitch. A straight answer on whether we can help, which
                service fits, and what it costs.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Cta
                  href={aiReady.bookingUrl}
                  event="book_call_click"
                  params={{ section: "closing" }}
                >
                  Book a 20-minute call
                </Cta>
                {scorecardEnabled && (
                  <Cta
                    href={scorecardHref}
                    variant="outline"
                    event="scorecard_start"
                    params={{ section: "closing" }}
                  >
                    Take the free AI Reality Check
                  </Cta>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyBookingBar closingSectionId="book" />
    </div>
  );
}
