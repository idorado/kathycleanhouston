"use client";

import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import { cn } from "@/lib/utils";
import { ANALYTICS_BRAND, ANALYTICS_LOCATION } from "@/lib/analytics";

type RequestQuoteButtonProps = {
  location?: string;
  className?: string;
};

export default function RequestQuoteButton({
  location,
  className,
}: RequestQuoteButtonProps) {
  const posthog = usePostHog();

  const handleClick = () => {
    try {
      posthog?.capture("cta_request_quote_click", {
        brand: ANALYTICS_BRAND,
        location: ANALYTICS_LOCATION,
        path:
          typeof window !== "undefined"
            ? window.location.pathname
            : undefined,
        url:
          typeof window !== "undefined"
            ? window.location.href
            : undefined,
      });
    } catch (e) {
      console.error("PostHog CTA click failed", e);
    }
  };

  return (
    <Link
      href="/request-quote"
      onClick={handleClick}
      className={cn(
        "py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 w-full sm:w-auto min-w-[180px] bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        className
      )}
    >
      REQUEST A QUOTE
    </Link>
  );
}
