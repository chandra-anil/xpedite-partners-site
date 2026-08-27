import { BAND_LABELS, type BandId } from "@/lib/reality-check/scoring";

/**
 * A score, drawn the way a tolerance sits on an engineering drawing: four
 * labelled segments, the band you landed in filled, your position a caret above
 * the rule.
 *
 * Chosen over the obvious alternatives for reasons that all still hold:
 *   • A radar chart is degenerate at three axes — every result is a triangle,
 *     area distorts low-to-mid scores, and orientation is arbitrary, so shape
 *     comparisons mislead.
 *   • A gauge implies live measurement of a machine. This is a considered
 *     assessment of a business, and a speedometer is the single strongest
 *     "AI quiz" tell.
 *   • Traffic-light colours fail colour-blind readers and turn a diagnostic
 *     into a vendor dashboard.
 *
 * It survives the three places it has to work: a 350px phone, an A4 print, and
 * black and white — position plus a filled segment, never colour alone, with
 * the band name always present as text.
 */

const BANDS: BandId[] = ["emerging", "developing", "established", "leading"];

interface BandScaleProps {
  score: number;
  band: BandId;
  /** Drives the caret animation stagger. 0, 1, 2 down the page. */
  index?: number;
}

export default function BandScale({ score, band, index = 0 }: BandScaleProps) {
  // Clamped so a caret can never escape the rule, whatever arrives.
  const position = Math.min(100, Math.max(0, score));

  return (
    <div className="rc-print-block">
      <div
        className="rc-scale"
        data-index={index}
        role="img"
        aria-label={`Score ${score} out of 100. Band: ${BAND_LABELS[band]}.`}
      >
        {BANDS.map((b) => (
          <div key={b} className="rc-scale-seg" data-you={b === band} />
        ))}
        <span
          className="rc-caret"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />
      </div>
      <div
        className="rc-label mt-1.5 flex text-[0.625rem] tracking-[0.12em]"
        style={{ color: "var(--rc-ink-60)" }}
        aria-hidden="true"
      >
        {BANDS.map((b) => (
          <span key={b} className="flex-1">
            {BAND_LABELS[b]}
          </span>
        ))}
      </div>
    </div>
  );
}
