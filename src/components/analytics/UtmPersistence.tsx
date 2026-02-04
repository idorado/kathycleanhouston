"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { updateAttributionFromUrlAndReferrer } from "@/lib/attribution";

function pushAttributionToDataLayer(attribution: Record<string, any> | null) {
  if (!attribution) return;
  try {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "kc_attribution",
      ...attribution,
    });
  } catch {}
}

export default function UtmPersistence() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchString = searchParams?.toString() ?? "";

  useEffect(() => {
    const attr = updateAttributionFromUrlAndReferrer();
    pushAttributionToDataLayer(attr as any);
  }, [pathname, searchString]);

  return null;
}
