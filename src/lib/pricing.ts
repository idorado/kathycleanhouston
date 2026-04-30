// Houston Pricing Grid — Single source of truth
// Used by /quote page and Zapier webhook
// Prices do NOT include Sales Tax (Texas 8.25%).

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
  { minSqFt: 0,    maxSqFt: 999,   moveOut: 345, moveIn: 345, deepClean: 345, singleClean: 225 },
  { minSqFt: 1000, maxSqFt: 1500,  moveOut: 369, moveIn: 369, deepClean: 369, singleClean: 259 },
  { minSqFt: 1501, maxSqFt: 2000,  moveOut: 415, moveIn: 415, deepClean: 415, singleClean: 285 },
  { minSqFt: 2001, maxSqFt: 2500,  moveOut: 459, moveIn: 459, deepClean: 459, singleClean: 299 },
  { minSqFt: 2501, maxSqFt: 3000,  moveOut: 525, moveIn: 525, deepClean: 525, singleClean: 329 },
  { minSqFt: 3001, maxSqFt: 3500,  moveOut: 579, moveIn: 579, deepClean: 545, singleClean: 359 },
  { minSqFt: 3501, maxSqFt: 4000,  moveOut: 625, moveIn: 625, deepClean: 625, singleClean: 415 },
  { minSqFt: 4001, maxSqFt: 4500,  moveOut: 665, moveIn: 665, deepClean: 665, singleClean: 449 },
  { minSqFt: 4501, maxSqFt: 5000,  moveOut: 715, moveIn: 715, deepClean: 715, singleClean: 495 },
  { minSqFt: 5001, maxSqFt: 5500,  moveOut: 789, moveIn: 789, deepClean: 742, singleClean: 539 },
  { minSqFt: 5501, maxSqFt: 6000,  moveOut: 835, moveIn: 835, deepClean: 786, singleClean: 585 },
  { minSqFt: 6001, maxSqFt: 99999, moveOut: 945, moveIn: 885, deepClean: 945, singleClean: 629 },
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
  { minSqFt: 0,    maxSqFt: 999,   weekly: 109, biweekly: 119, monthly: 149 },
  { minSqFt: 1000, maxSqFt: 1500,  weekly: 119, biweekly: 129, monthly: 159 },
  { minSqFt: 1501, maxSqFt: 2000,  weekly: 129, biweekly: 145, monthly: 179 },
  { minSqFt: 2001, maxSqFt: 2500,  weekly: 145, biweekly: 165, monthly: 199 },
  { minSqFt: 2501, maxSqFt: 3000,  weekly: 169, biweekly: 185, monthly: 229 },
  { minSqFt: 3001, maxSqFt: 3500,  weekly: 185, biweekly: 205, monthly: 249 },
  { minSqFt: 3501, maxSqFt: 4000,  weekly: 205, biweekly: 229, monthly: 269 },
  { minSqFt: 4001, maxSqFt: 4500,  weekly: 225, biweekly: 249, monthly: 289 },
  { minSqFt: 4501, maxSqFt: 5000,  weekly: 245, biweekly: 279, monthly: 309 },
  { minSqFt: 5001, maxSqFt: 5500,  weekly: 269, biweekly: 309, monthly: 339 },
  { minSqFt: 5501, maxSqFt: 6000,  weekly: 295, biweekly: 339, monthly: 359 },
  { minSqFt: 6001, maxSqFt: 99999, weekly: 325, biweekly: 375, monthly: 379 },
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
