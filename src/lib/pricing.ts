// Houston Pricing Grid — Single source of truth
// Used by /quote page and Zapier webhook
// Prices do NOT include Sales Tax (Texas 8.25%).
// Grid tops out at 6,000 sq ft. Homes over 6,000 sq ft return null from
// calculateQuotePrice and are routed to the custom/manual-quote flow in /quote.

export type ServiceType =
  | "recurring"
  | "deep"
  | "movein"
  | "moveout"
  | "onetime"
  | "postconstruction"
  | "commercial"
  | "windows";

export type Frequency = "weekly" | "biweekly" | "monthly";
export type QuoteType = "house" | "commercial" | "window";

export const HOUSTON_SALES_TAX_RATE = 0.0825;

export const MANUAL_QUOTE_SERVICES: ServiceType[] = [
  "postconstruction",
  "commercial",
  "windows",
];

// ---------------------------------------------------------------------------
// One-Time Services (Move Out, Move In, Deep Clean, Single Clean)
// ---------------------------------------------------------------------------
type OneTimeTier = {
  minSqFt: number;
  maxSqFt: number;
  moveOut: number;
  moveIn: number;
  deepClean: number;
  singleClean: number;
};

export const HOUSTON_ONE_TIME_PRICES: OneTimeTier[] = [
  { minSqFt: 0,    maxSqFt: 900,  moveOut: 285, moveIn: 285, deepClean: 285, singleClean: 199 },
  { minSqFt: 901,  maxSqFt: 1200, moveOut: 295, moveIn: 295, deepClean: 295, singleClean: 219 },
  { minSqFt: 1201, maxSqFt: 1500, moveOut: 329, moveIn: 329, deepClean: 329, singleClean: 229 },
  { minSqFt: 1501, maxSqFt: 1800, moveOut: 359, moveIn: 359, deepClean: 359, singleClean: 259 },
  { minSqFt: 1801, maxSqFt: 2100, moveOut: 379, moveIn: 379, deepClean: 379, singleClean: 259 },
  { minSqFt: 2101, maxSqFt: 2300, moveOut: 399, moveIn: 399, deepClean: 399, singleClean: 279 },
  { minSqFt: 2301, maxSqFt: 2600, moveOut: 415, moveIn: 415, deepClean: 415, singleClean: 289 },
  { minSqFt: 2601, maxSqFt: 2900, moveOut: 445, moveIn: 445, deepClean: 445, singleClean: 329 },
  { minSqFt: 2901, maxSqFt: 3500, moveOut: 495, moveIn: 495, deepClean: 495, singleClean: 329 },
  { minSqFt: 3501, maxSqFt: 4100, moveOut: 549, moveIn: 549, deepClean: 549, singleClean: 369 },
  { minSqFt: 4101, maxSqFt: 4700, moveOut: 599, moveIn: 599, deepClean: 599, singleClean: 425 },
  { minSqFt: 4701, maxSqFt: 5300, moveOut: 649, moveIn: 649, deepClean: 649, singleClean: 499 },
  { minSqFt: 5301, maxSqFt: 6000, moveOut: 719, moveIn: 719, deepClean: 719, singleClean: 569 },
];

// ---------------------------------------------------------------------------
// Recurring Services (Weekly, Bi-Weekly, Monthly)
// ---------------------------------------------------------------------------
type RecurringTier = {
  minSqFt: number;
  maxSqFt: number;
  weekly: number;
  biweekly: number;
  monthly: number;
};

export const HOUSTON_RECURRING_PRICES: RecurringTier[] = [
  { minSqFt: 0,    maxSqFt: 900,  weekly: 129, biweekly: 139, monthly: 149 },
  { minSqFt: 901,  maxSqFt: 1200, weekly: 129, biweekly: 145, monthly: 159 },
  { minSqFt: 1201, maxSqFt: 1500, weekly: 139, biweekly: 149, monthly: 169 },
  { minSqFt: 1501, maxSqFt: 1800, weekly: 145, biweekly: 159, monthly: 179 },
  { minSqFt: 1801, maxSqFt: 2100, weekly: 149, biweekly: 159, monthly: 179 },
  { minSqFt: 2101, maxSqFt: 2300, weekly: 149, biweekly: 165, monthly: 185 },
  { minSqFt: 2301, maxSqFt: 2600, weekly: 159, biweekly: 175, monthly: 195 },
  { minSqFt: 2601, maxSqFt: 2900, weekly: 179, biweekly: 195, monthly: 215 },
  { minSqFt: 2901, maxSqFt: 3500, weekly: 189, biweekly: 205, monthly: 225 },
  { minSqFt: 3501, maxSqFt: 4100, weekly: 205, biweekly: 225, monthly: 245 },
  { minSqFt: 4101, maxSqFt: 4700, weekly: 239, biweekly: 259, monthly: 279 },
  { minSqFt: 4701, maxSqFt: 5300, weekly: 255, biweekly: 289, monthly: 309 },
  { minSqFt: 5301, maxSqFt: 6000, weekly: 295, biweekly: 325, monthly: 355 },
];

// ---------------------------------------------------------------------------
// Price Calculation
// ---------------------------------------------------------------------------
export function calculateQuotePrice(
  service: ServiceType,
  sqft: number,
  frequency?: Frequency,
): number | null {
  if (MANUAL_QUOTE_SERVICES.includes(service)) return null;

  if (service === "recurring") {
    if (!frequency) return null;
    const tier = HOUSTON_RECURRING_PRICES.find(
      (t) => sqft >= t.minSqFt && sqft <= t.maxSqFt,
    );
    if (!tier) return null;
    return tier[frequency];
  }

  const tier = HOUSTON_ONE_TIME_PRICES.find(
    (t) => sqft >= t.minSqFt && sqft <= t.maxSqFt,
  );
  if (!tier) return null;

  const serviceMap: Record<string, keyof OneTimeTier> = {
    deep: "deepClean",
    movein: "moveIn",
    moveout: "moveOut",
    onetime: "singleClean",
  };

  const key = serviceMap[service];
  if (!key) return null;
  return tier[key] as number;
}

// ---------------------------------------------------------------------------
// Normalizers — map Tally's human-readable labels to internal slugs
// ---------------------------------------------------------------------------

function cleanLabel(raw: string): string {
  return raw
    .replace(/[\u{1F000}-\u{1FFFF}]/gu, "")
    .replace(/[⭐✨🔄🧹📦🚪🔨🏠🏢🪟]/gu, "")
    .toLowerCase()
    .trim();
}

export function normalizeService(raw: string | null | undefined): ServiceType | null {
  if (!raw) return null;

  const asSlug = raw.trim().toLowerCase();
  const allServices: ServiceType[] = [
    "recurring", "deep", "movein", "moveout",
    "onetime", "postconstruction", "commercial", "windows",
  ];
  if (allServices.includes(asSlug as ServiceType)) return asSlug as ServiceType;

  const cleaned = cleanLabel(raw);

  const patterns: [RegExp, ServiceType][] = [
    [/move[\s-]?in/i, "movein"],
    [/move[\s-]?out/i, "moveout"],
    [/post[\s-]?construction|construction/i, "postconstruction"],
    [/deep/i, "deep"],
    [/recurring/i, "recurring"],
    [/one[\s-]?time|standard/i, "onetime"],
    [/commercial/i, "commercial"],
    [/window/i, "windows"],
  ];

  for (const [pattern, slug] of patterns) {
    if (pattern.test(cleaned)) return slug;
  }

  return null;
}

export function normalizeFrequency(raw: string | null | undefined): Frequency | null {
  if (!raw) return null;

  const asSlug = raw.trim().toLowerCase();
  if (asSlug === "weekly" || asSlug === "biweekly" || asSlug === "monthly") {
    return asSlug;
  }
  if (asSlug === "bi-weekly" || asSlug === "bi_weekly") return "biweekly";

  const cleaned = cleanLabel(raw);

  if (/bi[\s-]?weekly/i.test(cleaned)) return "biweekly";
  if (/every[\s-]?(2|two)\s+weeks?/i.test(cleaned)) return "biweekly";
  if (/weekly/i.test(cleaned)) return "weekly";
  if (/every[\s-]?(1|one)\s+weeks?/i.test(cleaned)) return "weekly";
  if (/monthly/i.test(cleaned)) return "monthly";
  if (/every[\s-]?(4|four)\s+weeks?/i.test(cleaned)) return "monthly";

  return null;
}

export function normalizeQuoteType(raw: string | null | undefined): QuoteType | null {
  if (!raw) return null;

  const cleaned = cleanLabel(raw);

  if (cleaned === "house") return "house";
  if (cleaned === "commercial") return "commercial";
  if (cleaned === "window" || cleaned === "windows") return "window";

  if (/commercial/i.test(cleaned)) return "commercial";
  if (/window/i.test(cleaned)) return "window";
  if (/house|residential|home/i.test(cleaned)) return "house";

  return null;
}

// ---------------------------------------------------------------------------
// Labels
// ---------------------------------------------------------------------------
export function getServiceLabel(service: ServiceType): string {
  const labels: Record<ServiceType, string> = {
    recurring: "Recurring Cleaning",
    deep: "Deep Cleaning",
    movein: "Move-In Cleaning",
    moveout: "Move-Out Cleaning",
    onetime: "One-Time Cleaning",
    postconstruction: "Post-Construction Cleaning",
    commercial: "Commercial Cleaning",
    windows: "Window Cleaning",
  };
  return labels[service] ?? service;
}

export function getFrequencyLabel(frequency: Frequency): string {
  const labels: Record<Frequency, string> = {
    weekly: "Weekly",
    biweekly: "Bi-Weekly",
    monthly: "Monthly",
  };
  return labels[frequency] ?? frequency;
}
