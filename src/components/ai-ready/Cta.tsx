"use client";

import Link from "next/link";
import { track, type AnalyticsParams } from "@/lib/analytics";

/**
 * The only interactive primitives on /ai-ready.
 *
 * Everything else on the route is a server component, so the JS shipped for
 * this page is these two files plus the sticky bar. Each variant fires its
 * analytics event and then lets the browser do the navigation — no
 * preventDefault, so a middle-click, a long-press or JS-off still works.
 */

type Variant = "solid" | "outline" | "text" | "quiet";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150";

const variants: Record<Variant, string> = {
  // #C5521F, not #E8632B: white on #E8632B is ~3.4:1 and fails WCAG AA.
  solid:
    "bg-[#C5521F] text-white px-7 py-3.5 text-base hover:bg-[#A8441A] min-h-[48px]",
  outline:
    "border border-[#E8632B]/60 text-[#E8632B] px-6 py-3 text-[15px] hover:bg-[#E8632B]/10 hover:border-[#E8632B] min-h-[48px]",
  // Inline, not flex: these wrap like sentences, and a flex arrow would detach
  // from the last word and drift to the end of the line box.
  text:
    "inline-block py-2 text-[15px] font-semibold leading-[1.5] text-[#E8632B] hover:text-[#F07B3F] transition-colors",
  // Deliberately understated. Used where a second option must exist without
  // competing with the primary CTA next to it.
  quiet:
    "inline-block py-2 text-[13px] leading-[1.5] text-white/70 underline decoration-white/25 underline-offset-4 hover:text-[#E8632B] hover:decoration-[#E8632B] transition-colors",
};

const isInlineVariant = (v: Variant) => v === "text" || v === "quiet";

interface CtaProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  event: string;
  params?: AnalyticsParams;
  className?: string;
  /** Arrow glyph on text links. Purely decorative, hidden from assistive tech. */
  arrow?: boolean;
}

export default function Cta({
  href,
  children,
  variant = "solid",
  event,
  params,
  className = "",
  arrow = false,
}: CtaProps) {
  const onClick = () => track(event, params);
  const inline = isInlineVariant(variant);
  const cls = inline
    ? `${variants[variant]} ${className}`
    : `${base} ${variants[variant]} ${className}`;
  const isInternal = href.startsWith("/") && !href.startsWith("//");

  const inner = (
    <>
      {children}
      {arrow &&
        (inline ? (
          // Non-breaking space keeps the arrow attached to the last word when
          // the label wraps.
          <span aria-hidden="true">&nbsp;&#8594;</span>
        ) : (
          <span aria-hidden="true">&#8594;</span>
        ))}
    </>
  );

  if (isInternal) {
    return (
      <Link href={href} onClick={onClick} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} onClick={onClick} className={cls}>
      {inner}
    </a>
  );
}

/** External link that opens in a new tab and announces that it does. */
export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#E8632B] underline underline-offset-2 decoration-[#E8632B]/40 hover:decoration-[#E8632B] transition-colors"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
