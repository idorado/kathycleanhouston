"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

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

const STORAGE_KEY = "kc_utm_first_touch";
const COOKIE_NAME = "kc_utm_first_touch";
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

function saveFirstTouch(utmObj: Record<string, string>) {
  const value = JSON.stringify({ ...utmObj, ts: Date.now() });
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {}
  setCookie(COOKIE_NAME, value, COOKIE_MAX_DAYS);
}

function loadFirstTouch(): Record<string, any> | null {
  let val: string | null = null;
  try {
    val = localStorage.getItem(STORAGE_KEY);
  } catch {}
  if (!val) {
    val = getCookie(COOKIE_NAME);
  }
  if (!val) return null;
  try {
    return JSON.parse(val);
  } catch {
    return null;
  }
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

  useEffect(() => {
    const urlUtms = parseSearchUtms(searchString);
    let stored = loadFirstTouch();
    if (urlUtms && !stored) {
      stored = { ...urlUtms };
      saveFirstTouch(stored);
    }
    if (urlUtms) {
      try {
        sessionStorage.setItem(
          "kc_utm_last_click",
          JSON.stringify({ ...urlUtms, ts: Date.now() })
        );
      } catch {}
    }
    const resolved = urlUtms || stored || null;
    pushToDataLayer(resolved);
  }, [pathname, searchString]);

  return null;
}
