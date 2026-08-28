import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/* ==================================================================
   /ai-ready share card — 1200×630, generated at build time.

   Shared by opengraph-image.tsx and twitter-image.tsx so there is one
   card, not two that drift apart.

   The card is the page in miniature, not a poster for it: the same
   left-hanging structure (short orange rule, mono field label, display
   line with the accent on the last clause), closed by the page's own
   signature — the #FDEBD5 turn band, edged in #E8632B.

   Legibility target: a LinkedIn feed card on a phone is roughly 350px
   wide, so 1200px scales to ~0.29. The headline at 74px lands at ~21px
   there and is the only thing that has to be read. Everything smaller
   is texture, and nothing depends on it.

   Satori (what next/og renders with) supports a subset of CSS: flexbox
   only, no grid, explicit display:flex on any element with more than
   one child, and fonts supplied as buffers. The two .ttf files are
   vendored under src/assets/fonts (Geist, SIL OFL 1.1, OFL.txt beside
   them) rather than fetched from Google at build time, so the build
   has no network dependency.
   ================================================================== */

export const SIZE = { width: 1200, height: 630 };
export const CONTENT_TYPE = "image/png";
export const ALT =
  "Xpedite AI Ready. Your biggest customers are starting to ask about AI, data and security.";

const FONT_DIR = join(process.cwd(), "src", "assets", "fonts");

const GROUND = "#0F0F0F";
const ACCENT = "#E8632B";
const BAND = "#FDEBD5";
const BAND_INK = "#141414";

/** Three explicit lines, not a wrapped paragraph: the break points are set. */
const HEADLINE = ["Your biggest customers", "are starting to ask about"];
const HEADLINE_ACCENT = "AI, data and security.";

export async function renderShareCard(): Promise<ImageResponse> {
  const [sans, mono] = await Promise.all([
    readFile(join(FONT_DIR, "Geist-Bold.ttf")),
    readFile(join(FONT_DIR, "GeistMono-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: GROUND,
          fontFamily: "Geist",
        }}
      >
        {/* --- dark field: rule, field label, the claim --- */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <div style={{ width: 72, height: 4, backgroundColor: ACCENT }} />

          <div
            style={{
              marginTop: 26,
              fontFamily: "Geist Mono",
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.62)",
            }}
          >
            Queensland businesses of 20 to 200 people
          </div>

          <div
            style={{
              marginTop: 34,
              display: "flex",
              flexDirection: "column",
              fontSize: 74,
              lineHeight: 1.06,
              letterSpacing: "-0.035em",
              color: "#FFFFFF",
            }}
          >
            {HEADLINE.map((line) => (
              <div key={line}>{line}</div>
            ))}
            <div style={{ color: ACCENT }}>{HEADLINE_ACCENT}</div>
          </div>
        </div>

        {/* --- the turn band, the one light surface, exactly as on the page --- */}
        <div
          style={{
            height: 132,
            display: "flex",
            alignItems: "center",
            padding: "0 80px",
            backgroundColor: BAND,
            borderTop: `4px solid ${ACCENT}`,
          }}
        >
          <div
            style={{
              fontSize: 42,
              letterSpacing: "-0.02em",
              color: BAND_INK,
            }}
          >
            Xpedite AI Ready
          </div>
        </div>
      </div>
    ),
    {
      ...SIZE,
      fonts: [
        { name: "Geist", data: sans, weight: 700, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    }
  );
}
