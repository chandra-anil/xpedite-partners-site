import Link from "next/link";

/**
 * One reusable end-of-page block, shared across all five industry pages.
 *
 * Deliberately quiet: it is a signpost at the end of a page that has already
 * made its own argument, not a second pitch competing with the page's CTA.
 * Server component — no JS, and readable with JS disabled.
 */
export default function AiReadyPromo() {
  return (
    <section className="px-6 pb-16 pt-4 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="border-t-2 border-[#E8632B]/70 pt-6 md:flex md:items-center md:justify-between md:gap-8">
          <p className="text-[15px] leading-[1.6] text-white/70 max-w-2xl">
            Running a business of 20 to 200 people?{" "}
            <span className="text-white font-medium">See Xpedite AI Ready</span>, our
            fixed-price AI advisory and implementation for established businesses.
          </p>
          <Link
            href="/ai-ready"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 shrink-0 min-h-[44px] text-[#E8632B] font-semibold hover:text-[#F07B3F] transition-colors"
          >
            Xpedite AI Ready
            <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
