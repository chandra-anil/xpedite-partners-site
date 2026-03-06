# Xpedite Partners Website — Developer Handover

## Quick Start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npx vercel --yes --prod  # deploy to Vercel
```

## Project Overview

Marketing website for Xpedite Partners, a specialist delivery consultancy based in Brisbane, Australia. Reproduced from a Wix-hosted original at xpeditepartners.com.au.

- **Live site:** https://xpedite-partners-site.vercel.app
- **Repo:** https://github.com/chandra-anil/xpedite-partners-site
- **Original (Wix):** https://www.xpeditepartners.com.au

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router, Turbopack) | 16.1.6 |
| UI | React | 19.2.3 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animations | Framer Motion + CSS keyframes | 12.x |
| Deployment | Vercel | CLI |

## Architecture

Single-page site. All sections are composed in `src/app/page.tsx`:

```
Header          — Fixed nav bar with scroll-based active section detection
Hero            — Full-screen video background with text fade-in
WhatWeDo        — 6 service cards in a grid
WhoWeServe      — 3 expandable client segment cards
DeliveryPhilosophy — 7 philosophy pillar cards with SVG icons
NetworkModel    — 3 tabbed content panels, each with its own image
WhyUs           — 6 reasons grid + 4 client logos
BannerSection   — Animated quote banner
About           — Founder bio with photo
Footer          — Contact info, copyright
```

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, Geist font
│   ├── page.tsx            # Home page — composes all section components
│   ├── globals.css         # Theme colors, scrollbar, hero animations
│   └── favicon.ico
└── components/
    ├── Header.tsx          # Fixed nav, scroll spy, mobile hamburger
    ├── Logo.tsx            # SVG logo (logo-white.svg)
    ├── Hero.tsx            # Video bg, text fade-in via useEffect
    ├── WhatWeDo.tsx        # 6 service cards, framer-motion stagger
    ├── WhoWeServe.tsx      # 3 cards, click-to-expand details
    ├── DeliveryPhilosophy.tsx  # 7 pillars, SVG icons, 4+3 grid
    ├── NetworkModel.tsx    # 3 tabs with AnimatePresence transitions
    ├── WhyUs.tsx           # Reasons list + client logo grid
    ├── BannerSection.tsx   # Quote with animated floating circles
    ├── About.tsx           # Founder bio, gradient bg
    └── Footer.tsx          # Contact info, logo
public/
└── images/                 # All static assets (see Image Assets below)
```

## Color Palette

Defined in `globals.css` under `@theme inline`:

| Name | Hex | Usage |
|------|-----|-------|
| Orange | `#E8632B` | Primary brand, CTAs, active states, scrollbar |
| Orange Light | `#F07B3F` | Hover states |
| Beige | `#FDEBD5` | Section backgrounds (Philosophy, Network Model, WhyUs) |
| Beige Light | `#FEF5EC` | Lighter variant |
| Dark | `#1a1a1a` | Header, footer, hero overlay |
| Dark Card | `#2a2a2a` | Card backgrounds on dark sections |

## Component Details

### Hero.tsx
- **Background:** `<video>` element with autoPlay, loop, muted, playsInline
- **Video source:** `/images/hero-bg-1080.mp4` (2.8MB, compressed from Wix CDN)
- **Poster fallback:** `/images/hero-bg.jpg` (shown while video loads)
- **Text animation:** CSS keyframes triggered via `useEffect` + `requestAnimationFrame` after client mount. Elements start with Tailwind `opacity-0`, then get `animate-hero-fade-in` class added
- **Why not framer-motion for hero?** Framer-motion had SSR hydration issues on Vercel — the `animate` prop got stuck mid-transition. CSS keyframes with JS-triggered class are more reliable here.

### Header.tsx
- Fixed position, z-50
- `IntersectionObserver`-style scroll detection (actually uses `getBoundingClientRect` in a scroll listener) to highlight the active nav section
- Mobile: hamburger menu toggles a slide-down nav
- Section IDs used for smooth scroll: `what-we-do`, `who-we-serve`, `network-model`, `why-us`, `about`

### NetworkModel.tsx
- 3 tabs, each with its own `image` and `imageAlt` property
- Tab switching uses React state + framer-motion `AnimatePresence`
- Tab content: image (1/3 width) + text with bullet list (2/3 width)

### WhoWeServe.tsx
- Cards on an orange gradient background
- Click "Read More" to expand detailed bullet points with AnimatePresence
- Cards have slight rotation on entrance animation

### All Other Components
- Use framer-motion `whileInView` for scroll-triggered fade/slide animations
- Standard patterns: `initial={{ opacity: 0, y: 30 }}`, `whileInView={{ opacity: 1, y: 0 }}`

## Image Assets

### Critical Assets (referenced in components)
| File | Size | Used In | Notes |
|------|------|---------|-------|
| `hero-bg-1080.mp4` | 2.8MB | Hero.tsx | Background video, loops |
| `hero-bg.jpg` | 20KB | Hero.tsx | Video poster/fallback |
| `logo-white.svg` | 5KB | Logo.tsx | Navigation logo |
| `founder.jpg` | 34KB | About.tsx | B&W profile photo |
| `whatwedo-1.jpg` | 48KB | WhatWeDo.tsx | People collaborating |
| `whatwedo-2.webp` | 571KB | WhatWeDo.tsx | |
| `whatwedo-3.webp` | 248KB | WhatWeDo.tsx | |
| `whatwedo-4.jpg` | **13MB** | WhatWeDo.tsx | ⚠️ Needs optimization |
| `whatwedo-5.webp` | 153KB | WhatWeDo.tsx | |
| `whatwedo-6.jpg` | 147KB | WhatWeDo.tsx | Coding/coaching scene |
| `who-serve-tech-new.jpg` | 46KB | WhoWeServe.tsx | |
| `who-serve-orgs.avif` | 20KB | WhoWeServe.tsx | |
| `who-serve-initiatives.webp` | 1.5MB | WhoWeServe.tsx | |
| `network-model.jpg` | 97KB | NetworkModel.tsx | Tab 1: team workshop |
| `network-model-works.jpg` | 77KB | NetworkModel.tsx | Tab 2: collaboration |
| `network-model-matters.jpg` | 64KB | NetworkModel.tsx | Tab 3: earth/network |
| `why-us.jpg` | **12MB** | WhyUs.tsx | ⚠️ Needs optimization |
| `logo-honeywell.png` | 30KB | WhyUs.tsx | Client logo |
| `logo-atturra.png` | 12KB | WhyUs.tsx | Client logo |
| `logo-riotinto.png` | 16KB | WhyUs.tsx | Client logo |
| `logo-watercorp.png` | 16KB | WhyUs.tsx | Client logo |
| `clarity.svg` | 3.5KB | DeliveryPhilosophy.tsx | Philosophy icon |
| `structure.svg` | 6KB | DeliveryPhilosophy.tsx | |
| `staffing.svg` | 4KB | DeliveryPhilosophy.tsx | |
| `observation.svg` | 4.5KB | DeliveryPhilosophy.tsx | |
| `document.svg` | 5KB | DeliveryPhilosophy.tsx | |
| `responsibility.svg` | 6KB | DeliveryPhilosophy.tsx | |
| `blueprint.svg` | 4.6KB | DeliveryPhilosophy.tsx | |
| `favicon.png` | — | layout.tsx | Browser tab icon |

### Unused/Source Assets (still in public/images)
- `hero-bg.mov` (206MB) — Original video, excluded from git and Vercel
- `banner-bg.avif`, `extra.avif`, `whatwedo-hero.avif` — Source files used during image replacement, not referenced by any component
- `logo.png`, `logo-white.png`, `logo-color.svg` — Alternative logo formats, not currently used
- `clarity2.svg` — Alternative icon, not referenced
- `who-serve-tech.avif` — Original tech image, replaced by `who-serve-tech-new.jpg`

## Deployment

### Vercel
```bash
npx vercel --yes --prod
```

- `.vercelignore` excludes `public/images/hero-bg.mov` (206MB) and root `/images/` source folder
- `.gitignore` also excludes `hero-bg.mov`
- All MP4, JPG, WebP, AVIF, SVG, PNG files in `public/images/` ARE included in deployments

### GitHub
```
https://github.com/chandra-anil/xpedite-partners-site
Branch: master
```

## Known Issues & Gotchas

### 1. Hero animation requires client-side mount trigger
The hero text uses `opacity-0` as default and relies on `useEffect` + `requestAnimationFrame` to add the `animate-hero-fade-in` CSS class. Do NOT use framer-motion for the hero section — it has hydration issues with SSR on Vercel where the `animate` prop gets stuck mid-transition.

### 2. Large images need optimization
`whatwedo-4.jpg` (13MB) and `why-us.jpg` (12MB) are very large. They work but hurt load time. Should be compressed or converted to WebP.

### 3. Hero video won't play in background tabs
Chrome throttles video loading and CSS animations in background/hidden tabs. This is normal browser behavior — the video plays correctly when the user is viewing the tab.

### 4. .vercelignore pattern sensitivity
The pattern `/images/` (with leading slash) excludes only the root-level source images folder. Do NOT use `images/` without the leading slash — it would match `public/images/` and break all images on deployment.

### 5. Smooth scroll CSS affects programmatic scrolling
`globals.css` sets `* { scroll-behavior: smooth }` on all elements. If you need instant programmatic scrolls, override with `document.documentElement.style.scrollBehavior = 'auto'` first.

### 6. Section IDs for navigation
Header scroll spy depends on these exact section IDs: `what-we-do`, `who-we-serve`, `network-model`, `why-us`, `about`. If you rename or reorder sections, update Header.tsx's `navItems` array and the corresponding section `id` attributes.

## Claude Code Dev Server

`.claude/launch.json` is configured for the preview tool:
```json
{
  "version": "0.0.1",
  "configurations": [{
    "name": "dev",
    "runtimeExecutable": "npm",
    "runtimeArgs": ["run", "dev"],
    "port": 3000
  }]
}
```

Use `preview_start` with name `"dev"` to launch.

## Commit History

```
c125d1d Replace Ken Burns still image with actual video background
5f326e3 Add Ken Burns hero animation and per-tab Network Model images
1be8db8 Fix images: hero bg, profile photo, duplicates, context mismatches
08c7df2 Trigger hero animation after client mount
0bc56be Fix hero animation and update logo files
4d147c0 Fix .vercelignore pattern to not exclude public/images
721bad7 Add real images: logos, card images, SVG icons, founder photo
85c9585 Initial build: Xpedite Partners website recreation
```
