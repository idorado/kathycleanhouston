export type AttributionChannel = "direct" | "organic" | "social" | "referral";

export type Attribution = {
  landing_page?: string;
  referrer?: string;
  channel?: AttributionChannel;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  ts?: number;
};

const STORAGE_KEY = "kc_attribution";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

type UtmKey = (typeof UTM_KEYS)[number];

function readSession(): Attribution | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Attribution;
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeSession(attr: Attribution) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attr));
  } catch {}
}

function parseUtmFromUrlSearch(search: string): Partial<Attribution> | null {
  try {
    const params = new URLSearchParams(search);
    const out: Partial<Attribution> = {};
    let hasAny = false;

    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) {
        (out as any)[k] = v;
        hasAny = true;
      }
    });

    return hasAny ? out : null;
  } catch {
    return null;
  }
}

function isOrganicHost(host: string) {
  const h = host.toLowerCase();
  return (
    h === "google.com" ||
    h.endsWith(".google.com") ||
    h === "bing.com" ||
    h.endsWith(".bing.com") ||
    h === "yahoo.com" ||
    h.endsWith(".yahoo.com") ||
    h === "duckduckgo.com" ||
    h.endsWith(".duckduckgo.com")
  );
}

function isSocialHost(host: string) {
  const h = host.toLowerCase();
  return (
    h === "facebook.com" ||
    h.endsWith(".facebook.com") ||
    h === "instagram.com" ||
    h.endsWith(".instagram.com") ||
    h === "linkedin.com" ||
    h.endsWith(".linkedin.com") ||
    h === "t.co" ||
    h === "twitter.com" ||
    h.endsWith(".twitter.com") ||
    h === "pinterest.com" ||
    h.endsWith(".pinterest.com") ||
    h === "tiktok.com" ||
    h.endsWith(".tiktok.com")
  );
}

function deriveFromReferrer(referrer: string | null | undefined): Pick<
  Attribution,
  "channel" | "utm_source" | "utm_medium" | "referrer"
> {
  const ref = referrer ?? "";
  if (!ref) return { channel: "direct", utm_source: "direct", utm_medium: "direct" };

  try {
    const url = new URL(ref);
    const host = url.hostname;

    if (isOrganicHost(host)) {
      return {
        channel: "organic",
        utm_source: host,
        utm_medium: "organic",
        referrer: ref,
      };
    }

    if (isSocialHost(host)) {
      return {
        channel: "social",
        utm_source: host,
        utm_medium: "social",
        referrer: ref,
      };
    }

    return {
      channel: "referral",
      utm_source: host,
      utm_medium: "referral",
      referrer: ref,
    };
  } catch {
    return { channel: "referral", utm_source: "referral", utm_medium: "referral", referrer: ref };
  }
}

export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  return readSession();
}

export function updateAttributionFromUrlAndReferrer(): Attribution | null {
  if (typeof window === "undefined") return null;

  const pathname = window.location.pathname;
  const search = window.location.search;
  const urlUtms = parseUtmFromUrlSearch(search);

  if (urlUtms) {
    const next: Attribution = {
      ...urlUtms,
      landing_page: pathname,
      referrer: document.referrer || undefined,
      ts: Date.now(),
    };
    writeSession(next);
    return next;
  }

  const existing = readSession();
  if (existing) return existing;

  const derived = deriveFromReferrer(document.referrer);
  const next: Attribution = {
    ...derived,
    landing_page: pathname,
    ts: Date.now(),
  };
  writeSession(next);
  return next;
}

export function toQueryParams(attr: Attribution | null | undefined): string {
  if (!attr) return "";

  const params = new URLSearchParams();
  UTM_KEYS.forEach((k) => {
    const v = (attr as any)[k] as string | undefined;
    if (v) params.set(k, v);
  });

  const qs = params.toString();
  return qs ? `?${qs}` : "";
}
