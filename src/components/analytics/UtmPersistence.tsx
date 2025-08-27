"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
] as const;

// Store the LATEST (last-touch) UTMs
const STORAGE_KEY = "kc_utm_latest";
const COOKIE_NAME = "kc_utm_latest";
// Legacy keys for backward compatibility (first-touch)
const LEGACY_STORAGE_KEYS = ["kc_utm_first_touch"] as const;
const LEGACY_COOKIE_NAMES = ["kc_utm_first_touch"] as const;
const COOKIE_MAX_DAYS = 90;

function setCookie(name: string, value: string, days: number) {
  try {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const secure = typeof window !== "undefined" && window.location.protocol === "https:" ? ";Secure" : "";
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax${secure}`;
  } catch {}
}

function getCookie(name: string): string | null {
  try {
    const nameEQ = name + "=";
    const segments = document.cookie ? document.cookie.split(";") : [];
    for (let i = 0; i < segments.length; i++) {
      let seg = segments[i] ?? "";
      seg = seg.trimStart();
      if (seg.startsWith(nameEQ)) return decodeURIComponent(seg.substring(nameEQ.length));
    }
  } catch {}
  return null;
}

function parseSearchUtms(search: string | null) {
  try {
    const params = new URLSearchParams(search || "");
    const utm: Record<string, string> = {};
    let hasAny = false;
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) {
        utm[k] = v;
        hasAny = true;
      }
    });
    return hasAny ? utm : null;
  } catch {
    return null;
  }
}

function saveLatest(utmObj: Record<string, string>) {
  const value = JSON.stringify({ ...utmObj, ts: Date.now() });
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {}
  setCookie(COOKIE_NAME, value, COOKIE_MAX_DAYS);
}

function loadLatest(): Record<string, any> | null {
  // Prefer cookies over localStorage
  let val: string | null = null;
  try { val = getCookie(COOKIE_NAME) } catch {}
  if (!val) {
    for (const legacy of LEGACY_COOKIE_NAMES) {
      val = getCookie(legacy);
      if (val) break;
    }
  }
  if (!val) {
    try { val = localStorage.getItem(STORAGE_KEY); } catch {}
  }
  if (!val) {
    for (const legacy of LEGACY_STORAGE_KEYS) {
      try { val = localStorage.getItem(legacy); } catch {}
      if (val) break;
    }
  }
  if (!val) return null;
  try { return JSON.parse(val); } catch { return null; }
}

function pushToDataLayer(resolved: Record<string, string> | null) {
  try {
    (window as any).dataLayer = (window as any).dataLayer || [];
    const payload: Record<string, any> = { event: "utm_persisted" };
    UTM_KEYS.forEach((k) => {
      if (resolved && resolved[k]) payload[k] = resolved[k];
    });
    (window as any).dataLayer.push(payload);
    if (typeof (window as any).gtag === "function") {
      try {
        (window as any).gtag("set", "user_properties", payload);
      } catch {}
    }
  } catch {}
}

export default function UtmPersistence() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchString = searchParams?.toString() ?? "";
  const router = useRouter();

  useEffect(() => {
    // Parse UTMs present in the current URL
    const urlUtms = parseSearchUtms(searchString);

    if (urlUtms) {
      // We HAVE URL UTMs: treat as latest-touch and update storage (cookie preferred)
      saveLatest(urlUtms);
      try {
        sessionStorage.setItem(
          "kc_utm_last_click",
          JSON.stringify({ ...urlUtms, ts: Date.now() })
        );
      } catch {}
      pushToDataLayer(urlUtms);
      return;
    }

    // No URL UTMs: try to surface stored latest UTMs into the URL (no overwrite of existing params)
    const stored = loadLatest();
    if (stored) {
      const params = new URLSearchParams(searchString);
      let changed = false;
      UTM_KEYS.forEach((k) => {
        if (!params.get(k) && stored[k as string]) {
          params.set(k, String(stored[k as string]));
          changed = true;
        }
      });
      if (changed) {
        const qs = params.toString();
        router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
        return; // allow next render to handle push with URL UTMs
      }
      // If nothing changed, still push what we have
      pushToDataLayer(stored as Record<string, string>);
    }
  }, [pathname, searchString]);

  return null;
}
