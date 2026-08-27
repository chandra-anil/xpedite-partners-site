# AI Reality Check — handover

Built 27–28 August 2026 on branch `feature/ai-reality-check`. Spec, question set and design
plan live in the parent project folder (`reality-check-spec.md`,
`reality-check-questions.md`, `reality-check-design-plan.md`).

**Status: complete and working, deliberately not launched.** Everything runs. One flag turns
it on, and it should not be turned on until the four checklist items below are done.

---

## The one switch

`src/data/ai-ready.ts` → `scorecardEnabled: false`

Flipping it to `true` does all of this at once:

- the three CTAs on `/ai-ready` become live links instead of "coming shortly"
- the three Reality Check routes enter `sitemap.xml`

It is deliberately one switch and not two, so the launch cannot be half-done by forgetting
one. The routes themselves work either way — you can walk the whole thing on the preview
right now without launching anything.

---

## Before you flip it

**1. A privacy lawyer reads `/ai-ready/reality-check/privacy`.**
The note is accurate — every claim in it was checked against what the code actually does —
but accuracy and compliance are different things, and this is the one item on the list that
none of us can substitute for. While you are there, confirm the two retention periods (90
days for the hashed IP, 24 months for a response with an email attached). Those numbers are
a proposal, not a decision.

**2. Open the two National AI Centre pages and confirm three figures.**
`src/data/reality-check/benchmarks.ts` holds them with `verified: false`, which means **none
of them renders**. That is the fail-safe working as intended, not an omission. A research
pass on 28 Aug could not load ai.gov.au directly — five timeouts across two pages — so the
figures are corroborated from secondary sources only, and that is not good enough to publish
under a claim of having checked. Open the source, set `published` and `checked`, flip
`verified`. Ten minutes.

Three corrections are already baked into the wording and should not drift back:

- NAIC says **"approximately half"** of users check outputs. It does **not** publish 50%.
  Our own earlier documents had turned that hedge into a number. Never sharpen a source.
- 43% is a **quarter** figure (Dec 2025 – Feb 2026) and it **fell** from 45%. Nothing may
  describe it as rising.
- The newest wave is six months old. Every figure is dated to its wave for that reason.

**3. Decide the booking destination.**
The results CTA currently opens a pre-filled email to `info@xpeditepartners.com.au`. Set
`NEXT_PUBLIC_BOOKING_URL` in Vercel to a real scheduler and it switches over with no deploy.
A calendar link will convert better than a mailto.

**4. Read the results copy.**
Around 40 blocks in `src/data/reality-check/narrative.ts` and `sectors.ts`. It is written in
your voice and reviewed by the sector specialists, but your name is on it. The fastest way to
read it is to take the check a few times on the preview and pick different answers.

---

## Connecting the services (about ten minutes, no rush)

Everything works without either of these. Nothing breaks when they are absent — the code
tells the user the truth instead of pretending.

**Database — Neon Postgres.** Vercel dashboard → Storage → Neon → create, **region Sydney
(ap-southeast-2)**. Vercel injects `DATABASE_URL` automatically. The schema creates itself on
the first write; there is no migration step to forget.

Until it is connected the app uses an in-memory store: results still score and render
perfectly, but nothing survives a restart, and the email form says so rather than taking an
address it cannot honour.

**Email — Kit.** Set `KIT_API_KEY` and `KIT_FORM_ID` (use a double-opt-in form), and
optionally `KIT_BRIEFING_TAG_ID`. Subscribers are tagged by sector and archetype
automatically. Without these the address is still stored against the result and the UI says
Anil will send the PDF by hand — which is true and, at low volume, is fine.

**One more, worth setting:** `REALITY_CHECK_IP_SALT` to any long random string. Rate limiting
works without it, but the stored hashes are stronger with it.

---

## What was built

| Path | What |
|---|---|
| `/ai-ready/reality-check` | The instrument: entry, 22 taps, findings sheet |
| `/ai-ready/reality-check/methodology` | The full method, the AI6 mapping, the limits, and our own AI register entry for this tool |
| `/ai-ready/reality-check/privacy` | Privacy note |
| `src/data/reality-check/questions.ts` | The instrument. 16 scored + 5 context + 1 closer |
| `src/data/reality-check/narrative.ts` | Results copy library |
| `src/data/reality-check/sectors.ts` | Sector layer — construction, industrial, professional |
| `src/data/reality-check/benchmarks.ts` | The only statistics in the product, in one file |
| `src/lib/reality-check/scoring.ts` | Pure scoring and archetype rules |
| `src/lib/reality-check/results.ts` | Assembles a results page from a score |
| `src/lib/reality-check/storage.ts` | Neon, or in-memory when no database is configured |
| `src/lib/reality-check/email.ts` | Kit, or a no-op that reports honestly |

**No AI runs anywhere in the results path.** That is the product decision, not a limitation:
for an audience whose main objection is distrust of AI decisions, a machine writing a live
verdict about their business re-enacts the fear, and one hallucinated sentence in a trust
product is unrecoverable. The expertise is demonstrated by the published method and the
register entry instead. The results-page disclosure line says exactly this, and it is true —
which the spec's original draft of that line was not.

---

## Verified

Scoring and assembly were exercised against the running app, not just typechecked:

- all five archetypes fire on the score shapes that should produce them
- the maths is exact (33.3 / 66.7 / 100, not the drifted "mean × 33.3")
- under-20 businesses route to the free government programs with **zero** references to
  Xpedite in their three decisions
- a 60-person business in an unlisted sector gets generic decisions but a real offer of a call
- two Leading dimensions plus one Developing resolves to Ready to scale **and** shows the
  line acknowledging the two strong areas, so the reader doesn't think the tool is broken
- no risk is shown when nothing is weak; no strength is invented when nothing is strong
- incomplete submissions and invalid sectors are rejected; the honeypot is silently discarded
- rate limiting holds at 5 per hour per hashed IP
- an implausibly fast completion still returns a result but is flagged out of the dataset

Lint and typecheck are clean.

**Not verified here:** a production build, because Turbopack could not reach Google Fonts
from this sandbox — an environment limit in `layout.tsx`'s `next/font/google` calls, not a
code fault. It will build on Vercel. If it somehow does not, that is the first place to look.

Also not done, and worth doing before real traffic: the paper prototype with five owners
(protocol is in `reality-check-questions.md`), and an accessibility pass with a real screen
reader. I checked focus management and keyboard operation, but assistive-technology testing
needs a person using one.

---

## Two things to know about the branch

The first commit on it, `280fc2c`, is **your** pre-existing `/ai-ready` work, which was
sitting uncommitted in the working tree. It is committed separately so it can be reviewed,
split or reverted independently of anything I did. Everything after it is the Reality Check.

That commit also gitignores the root-level `images/` folder — raw source photos, not
referenced by the app and not served by Next, and some filenames are past the Windows path
limit under git. `public/images` is untouched and is what the site actually uses.
