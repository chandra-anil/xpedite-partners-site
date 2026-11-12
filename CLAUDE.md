# xpedite-partners — the Xpedite Partners public website

Next.js 16 (App Router) + React 19 + Tailwind v4, hosted on Vercel at https://xpeditepartners.com.au.
GitHub: `chandra-anil/xpedite-partners-site` (**public** — never commit secrets, client names under NDA, or internal URLs).
Default branch is **`master`** (not `main`): wherever `~/code/CLAUDE.md` or the `ship` skill says `main`, read `master`.

Read `ONBOARDING.md` before changing content: it holds the hard rules (Australian English, no links to the
real XDS tools at `magic.xpeditepartners.com.au`, screenshots show results views, no weak numeric claims,
all images self-hosted in `public/images/`). `XP handover.md` has per-component detail.

## Local
- `npm ci`, then `npm run dev` → http://localhost:3000 (`.claude/launch.json` starts the same thing).
- Checks CI runs on every PR: `npm run lint && npm run build`. Run both before pushing.
- No `.env` is needed to build or run master; any runtime env vars live in the Vercel project, not here.
- Tailwind scans `src/` only (`@import "tailwindcss" source("..")` in `src/app/globals.css`), so all
  class names must live under `src/`.

## Shipping
Follow `~/code/CLAUDE.md` → "Shipping a change" (the `ship` skill), with these differences:
- Branch from and merge into `master`.
- There is no VPS. Merging to `master` runs the `deploy` job in `.github/workflows/ci.yml`, which deploys to
  Vercel production with the `VERCEL_TOKEN` repo secret and then checks that key pages answer 200.
  Watch it with `gh run list --branch master --limit 1` and `timeout 1500 gh run watch <id> --exit-status`;
  the deploy log prints `deployed <sha> -> <url>`.
- Never run `vercel deploy` from this machine; redeploy with `gh workflow run ci.yml --ref master`.
- Visual changes: check them in the dev server (or a screenshot) before opening the PR — there are no
  Vercel previews for PRs.
