# Xpedite Partners Website — Onboarding Guide

For developers and AI agents contributing to the public website.

---

## Quick Start

```bash
cd projects/xpedite-partners-site
npm install
npm run dev          # Local dev server at http://localhost:3000
npm run build        # Production build (must pass before deploying)
```

## Stack

| Layer | Tech | Version |
|-------|------|---------|
| Framework | Next.js (App Router) | 16.x |
| UI | React | 19.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | v4 |
| Animations | Framer Motion | 12.x |
| Hosting | Vercel | Production |
| Domain | xpeditepartners.com.au | (currently on Vercel, Wix DNS pending) |

## Repo Structure

```
src/
├── app/
│   ├── page.tsx                      # Homepage
│   ├── layout.tsx                    # Root layout (fonts, metadata)
│   ├── sitemap.ts                    # Auto-generated sitemap
│   ├── frameworks/
│   │   ├── page.tsx                  # Tools hub (all 14 XDS tools)
│   │   └── [slug]/page.tsx           # Dynamic tool detail pages
│   └── path-to-value/
│       └── page.tsx                  # PTV dedicated marketing page
├── components/
│   ├── Header.tsx                    # Nav bar
│   ├── Footer.tsx                    # Site footer
│   ├── Hero.tsx                      # Homepage hero
│   ├── About.tsx                     # About section
│   ├── WhatWeDo.tsx                  # Services section
│   ├── WhoWeServe.tsx                # Target audience
│   ├── WhyUs.tsx                     # Differentiators
│   ├── NetworkModel.tsx              # Network model section
│   ├── DeliveryPhilosophy.tsx        # Philosophy section
│   ├── BannerSection.tsx             # CTA banner
│   ├── Logo.tsx                      # SVG logo component
│   ├── FrameworksContent.tsx         # Tools hub content (phases + cards)
│   ├── ToolDetailContent.tsx         # Shared tool detail page layout
│   ├── PathToValueContent.tsx        # PTV page content
│   └── PtvFrameworkVisual.tsx        # Animated SVG framework visual
├── data/
│   └── xds-tools.ts                 # Tool definitions (13 tools, used by hub + detail pages)
public/
├── images/
│   ├── ptv-*.webp                    # PTV screenshots
│   ├── xds-*.webp                    # XDS tool screenshots (one per tool)
│   └── *.jpg / *.webp               # Other site images
```

## Brand

| Element | Value |
|---------|-------|
| Primary colour | `#E8632B` (orange) |
| Background | `#1a1a1a` (dark) |
| Accent light | `#FDEBD5` (beige) |
| Font | System default (Tailwind) |
| Language | Australian English (colour, organisation, realise) |
| Tone | Direct, professional, confident — no corporate fluff |

## Pages & Routes

| Route | Purpose | Key Component |
|-------|---------|---------------|
| `/` | Homepage | Multiple section components |
| `/frameworks` | XDS tools hub — all 14 tools by phase | `FrameworksContent.tsx` |
| `/frameworks/[slug]` | Individual tool detail | `ToolDetailContent.tsx` + `xds-tools.ts` |
| `/frameworks/path-to-value` | Redirects (307) to `/path-to-value` | — |
| `/path-to-value` | PTV dedicated marketing page | `PathToValueContent.tsx` |

## Adding a New XDS Tool

1. **Add tool data** to `src/data/xds-tools.ts` — follow the `XdsTool` interface
2. **Add screenshot** to `public/images/xds-{slug}.webp` (must show output/results view, not input)
3. **Assign to correct phase** in `FrameworksContent.tsx` phases array
4. The detail page at `/frameworks/{slug}` is generated automatically from `xds-tools.ts`
5. Run `npm run build` to verify static generation succeeds

## Deployment

```bash
# Build must pass first
npm run build

# Deploy to Vercel production
npx vercel --yes --prod --token $VERCEL_TOKEN
```

**Git author MUST be:** `Anil Chandra <chandra.anil@gmail.com>` — Vercel rejects other authors.

```bash
git -c user.name="Anil Chandra" -c user.email="chandra.anil@gmail.com" commit -m "your message"
git push
```

## Hard Rules

- **No links to actual XDS tools** — the tools run behind auth at `magic.xpeditepartners.com.au`. Marketing pages describe capabilities and invite enquiry only.
- **Australian English** in all copy
- **Screenshots must show output/results views**, not empty input screens
- **No "See it in action"** as a section heading — use outcome-oriented language
- **Avoid weak numeric claims** that could undermine tool credibility
- **Test locally** (`npm run build`) before pushing — broken builds block the team
- **All images in `public/images/`** — self-hosted, no external CDN dependencies

## Related

- **XDS tools repo:** `github.com/chandra-anil/xpedite-delivery-system` (the actual tools)
- **XDS architecture:** See `XDS_ARCHITECTURE.md` in the tools repo
- **Build skill:** `skills/framework-tool-factory/SKILL.md` in workspace (XDS tool creation standards)
