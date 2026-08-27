/**
 * AI Reality Check — results assembly
 * -----------------------------------
 * Turns a scored response into everything the results page renders. Pure: no
 * I/O, no clock, no model call. The same answers produce the same page, which
 * is what lets the methodology page be checkable and the PDF be identical to
 * the screen.
 *
 * Composition order mirrors the page, so reading this file top to bottom tells
 * you what the reader sees top to bottom.
 */

import {
  ARCHETYPES,
  BAND_MAY_NOT_NEED_US,
  CLOSER_EMPHASIS,
  CTA_IN_SEGMENT,
  CTA_OUT_OF_SEGMENT,
  DECISIONS,
  DIMENSION_READOUTS,
  READY_TO_SCALE_TWO_LEADING,
  ROLE_FRAMING,
  ctaVariantFor,
  riskFor,
  routeFor,
  strengthFor,
  type CloserId,
  type Decision,
  type NamedItem,
  type RoleId,
  type RouteId,
} from "@/data/reality-check/narrative";
import {
  BUYER_PRESSURE,
  PROFESSIONAL_CAUTION,
  PROFESSIONAL_OBLIGATIONS,
  PROFESSIONAL_OBLIGATIONS_DISCLAIMER,
  SECTOR_LINES,
  SECTOR_NEXT_STEP,
  SECTOR_RISKS,
  USE_CASES,
  sectorKeyFor,
  type ObligationBlock,
  type PressureBlock,
  type SectorKey,
  type UseCaseBlock,
} from "@/data/reality-check/sectors";
import { DIMENSIONS, type DimensionId } from "@/data/reality-check/questions";
import {
  BAND_LABELS,
  type ArchetypeId,
  type BandId,
  type DimensionScore,
  type ScoreResult,
} from "./scoring";

export interface DimensionView {
  id: DimensionId;
  name: string;
  score: number;
  band: BandId;
  bandLabel: string;
  readout: string;
  /** The "for a business like yours" line. Absent for sector "other". */
  sectorLine?: string;
}

export interface ResultsView {
  archetype: {
    id: ArchetypeId;
    name: string;
    headline: string;
    body: string;
  };
  /** Sector, size band and date — the title block on the findings sheet. */
  titleBlock: {
    sector: string;
    size: string;
    role: string;
    region: string;
  };
  roleFraming?: string;
  dimensions: DimensionView[];
  risk?: NamedItem;
  strength?: NamedItem;
  closerEmphasis?: string;
  decisions: Decision[];
  /** Shown as a full-width band above the CTA, for Compounding leaders only. */
  mayNotNeedUs?: string;
  cta:
    | { variant: "in_segment"; heading: string; body: string; button: string; subline: string }
    | { variant: "out_of_segment"; heading: string; body: string; subline: string };
  sector?: {
    key: SectorKey;
    useCases: UseCaseBlock;
    risks: NamedItem[];
    nextStep: { heading: string; body: string };
    /** Construction and industrial only, keyed on the C5 trigger answer. */
    buyerPressure?: PressureBlock;
    /** Professional services only. */
    obligations?: ObligationBlock[];
    obligationsDisclaimer?: string;
    caution?: string;
  };
  route: RouteId;
}

/* ------------------------------------------------------------------ */
/* Label lookups                                                       */
/* ------------------------------------------------------------------ */

const SECTOR_LABELS: Record<string, string> = {
  construction: "Construction and trades",
  industrial: "Manufacturing and industrial supply",
  professional: "Professional services",
  other: "Other",
};

const SIZE_LABELS: Record<string, string> = {
  under_20: "Under 20 staff",
  "20_50": "20 to 50 staff",
  "51_200": "51 to 200 staff",
  over_200: "Over 200 staff",
};

const ROLE_LABELS: Record<string, string> = {
  owner: "Owner, partner or MD",
  gm_ops: "General manager or operations",
  finance: "Finance",
  asked_to_sort_ai: "Asked to sort out AI",
  other: "Other",
};

const REGION_LABELS: Record<string, string> = {
  brisbane: "Greater Brisbane",
  gc_sc: "Gold Coast or Sunshine Coast",
  regional_qld: "Regional Queensland",
  interstate: "Outside Queensland",
};

function label(map: Record<string, string>, key: string | undefined): string {
  return (key && map[key]) || "Not given";
}

/* ------------------------------------------------------------------ */
/* Assembly                                                            */
/* ------------------------------------------------------------------ */

export function buildResults(
  result: ScoreResult,
  context: Record<string, string>,
  closer: string | null
): ResultsView {
  const sector = context.C1 ?? "other";
  const headcount = context.C2 ?? "";
  const role = (context.C3 ?? "other") as RoleId;
  const trigger = context.C5 ?? "";

  const route = routeFor(sector, headcount);
  const sectorKey = sectorKeyFor(sector);

  /* --- archetype ------------------------------------------------- */
  const archetypeCopy = ARCHETYPES[result.archetype];
  // The two-Leading-one-Developing shape resolves to Ready to scale, correctly,
  // but a reader looking at two full bars and a mid-tier verdict will assume the
  // instrument is broken unless the copy names what it is seeing.
  const body =
    result.archetype === "ready_to_scale" && result.twoLeadingOneDeveloping
      ? `${READY_TO_SCALE_TWO_LEADING} ${archetypeCopy.body}`
      : archetypeCopy.body;

  /* --- dimensions ------------------------------------------------ */
  const dimensions: DimensionView[] = DIMENSIONS.map((d) => {
    const s: DimensionScore = result.dimensions[d.id];
    return {
      id: d.id,
      name: d.publicName,
      score: s.score,
      band: s.band,
      bandLabel: BAND_LABELS[s.band],
      readout: DIMENSION_READOUTS[d.id][s.band],
      sectorLine: sectorKey ? SECTOR_LINES[sectorKey][d.id][s.band] : undefined,
    };
  });

  /* --- risk and strength ----------------------------------------- */
  const weakest = result.dimensions[result.weakest];
  const strongest = result.dimensions[result.strongest];
  const risk = riskFor(weakest.dimension, weakest.band);
  // Omitted entirely when the strongest dimension is still low. Manufacturing a
  // strength to balance the page is exactly the tell this product avoids.
  const strength = strengthFor(strongest.dimension, strongest.band);

  /* --- CTA -------------------------------------------------------- */
  const ctaVariant = ctaVariantFor(headcount);
  const cta =
    ctaVariant === "in_segment"
      ? { variant: "in_segment" as const, ...CTA_IN_SEGMENT }
      : { variant: "out_of_segment" as const, ...CTA_OUT_OF_SEGMENT };

  /* --- sector layer ----------------------------------------------- */
  const sectorBlock = sectorKey
    ? {
        key: sectorKey,
        useCases: USE_CASES[sectorKey],
        risks: SECTOR_RISKS[sectorKey],
        nextStep: SECTOR_NEXT_STEP[sectorKey],
        buyerPressure:
          sectorKey === "professional" ? undefined : BUYER_PRESSURE[trigger],
        obligations: sectorKey === "professional" ? PROFESSIONAL_OBLIGATIONS : undefined,
        obligationsDisclaimer:
          sectorKey === "professional" ? PROFESSIONAL_OBLIGATIONS_DISCLAIMER : undefined,
        caution: sectorKey === "professional" ? PROFESSIONAL_CAUTION : undefined,
      }
    : undefined;

  return {
    archetype: {
      id: result.archetype,
      name: archetypeCopy.name,
      headline: archetypeCopy.headline,
      body,
    },
    titleBlock: {
      sector: label(SECTOR_LABELS, sector),
      size: label(SIZE_LABELS, headcount),
      role: label(ROLE_LABELS, role),
      region: label(REGION_LABELS, context.C4),
    },
    roleFraming: ROLE_FRAMING[role],
    dimensions,
    risk,
    strength,
    closerEmphasis: closer ? CLOSER_EMPHASIS[closer as CloserId] : undefined,
    decisions: DECISIONS[result.archetype][route],
    mayNotNeedUs:
      result.archetype === "compounding_leader" ? BAND_MAY_NOT_NEED_US : undefined,
    cta,
    sector: sectorBlock,
    route,
  };
}
