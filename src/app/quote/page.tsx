"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  calculateQuotePrice,
  getFrequencyLabel,
  getServiceLabel,
  MANUAL_QUOTE_SERVICES,
  normalizeFrequency,
  normalizeQuoteType,
  normalizeService,
  type Frequency,
  type ServiceType,
} from "@/lib/pricing";

// ── Service scope details ─────────────────────────────────────────────────────

const SERVICE_DETAILS: Record<
  string,
  { intro?: string; included: string[]; notIncluded?: string[]; closing?: string }
> = {
  onetime: {
    intro:
      "We're excited for the opportunity to clean your home and want to make sure we're aligned on what's included in this one-time service.",
    included: [
      "Full dusting with damp microfiber cloths (under and around items)",
      "Bathroom cleaning: showers, toilets, sinks, floors, and fixtures",
      "Kitchen cleaning: counters, sink, microwave, appliance exteriors, and cabinet fronts",
      "Vacuuming all floors and rugs",
      "Bed-making for up to two beds (if clean linens are left out)",
      "Mopping all floors",
      "Vacuuming fabric furniture",
      "Wiping down dining room table and chairs",
      "Light switch touch points wiped",
      "Cleaning inside patio doors (weather permitting for the outside)",
      "Trash removal and trash can wipe-down",
    ],
    notIncluded: [
      "Scrubbing baseboards, doors, and door frames",
      "Removing light fixtures for cleaning",
      "Wall cleaning",
      "Inside oven or refrigerator",
      "Blinds and vent cleaning",
      "Heavy buildup removal (grease, soap scum, etc.)",
      "Carpet cleaning",
      "Laundry or dishwashing",
    ],
    closing:
      "If there's anything specific you'd like us to focus on, or if you're interested in setting up recurring cleanings, we'd love to help. Just let us know!",
  },
  moveout: {
    intro:
      "Our Move-Out Clean is designed to meet what landlords and apartment complexes look for during final inspections. We focus on the details that matter most, so you don't get charged for cleaning after you've handed over the keys.",
    included: [
      "Full-Scope Dusting: From baseboards to ceiling fans, blinds, vents, and corners — everything gets a thorough dusting and wipe-down",
      "Detailed Kitchen Cleaning: We scrub and sanitize all surfaces, clean the sink, backsplash, countertops, and cabinet faces. Appliance exteriors are wiped clean and polished",
      "Inside Appliances: We deep clean the inside of your oven and refrigerator, removing grime, spills, and odors",
      "Bathroom Deep Sanitation: We disinfect toilets, tubs, showers, and sinks. Mirrors and fixtures are polished, and we scrub grout and tile surfaces",
      "Floors: All floors are vacuumed and mopped, including corners and under appliances where dust and dirt often settle",
      "Final Touches: We wipe door frames, handles, switches, and any other spots that inspectors often check",
    ],
    closing:
      "This isn't just a final clean — it's your insurance against last-minute fees. We clean like your deposit depends on it, because it does.",
  },
  movein: {
    intro:
      "Before you unpack, let us take care of the cleaning. Our Move-In Clean is designed to give you a spotless, sanitized home — so you can settle in with peace of mind.",
    included: [
      "Detailed Dusting: We clean baseboards, vents, ceiling fans, blinds, and all reachable surfaces to remove dust buildup",
      "Kitchen Sanitization: All countertops, sinks, cabinet fronts, and appliance exteriors are cleaned and disinfected. We also deep clean inside the oven and fridge",
      "Bathroom Deep Clean: We scrub and sanitize toilets, showers, tubs, and sinks. Fixtures and mirrors are cleaned and polished",
      "Floors: We vacuum carpets and mop all hard flooring, reaching into corners and under surfaces",
      "Move-In Ready Touches: Door handles, light switches, and common touch points are wiped and disinfected for a truly fresh start",
    ],
    closing:
      "Whether it's a brand-new build or a previously lived-in home, we'll make it feel like no one else has been there before.",
  },
  deep: {
    intro:
      "Our Deep Clean service is a comprehensive top-to-bottom refresh for your home, designed to tackle built-up grime and dirt that regular cleaning often misses. We go beyond the surface to ensure a truly pristine environment.",
    included: [
      "Thorough Dusting: Every surface, from baseboards and crown molding to light fixtures, ceiling fans, and blinds, is meticulously dusted",
      "Detailed Kitchen Cleaning: We meticulously clean and sanitize countertops, sinks, backsplashes, and stovetops. The exterior of all appliances are wiped down. We also clean and polish stainless steel surfaces",
      "Inside Oven & Refrigerator Deep Clean: We thoroughly clean and degrease the interior of your oven, removing baked-on food and grime from racks and surfaces. For the refrigerator, we empty, wipe down, sanitize, and polish all interior shelves, drawers, and walls, eliminating odors and spills",
      "Intensive Bathroom Sanitation: Toilets, showers, bathtubs, and sinks are scrubbed, disinfected, and shined. We pay special attention to grout lines, fixtures, and mirrors, ensuring a hygienic and sparkling result",
      "Vacuuming and Mopping: All floors are thoroughly vacuumed, and hard floors are meticulously mopped, focusing on corners and edges where dirt accumulates",
      "Attention to Detail: We also include wiping down door frames, handles, switch plates, and accessible ledges",
    ],
    closing:
      "Our goal is to leave your home feeling incredibly fresh, clean, and revitalized.",
  },
  recurring: {
    intro:
      "Welcome to worry-free living. With your recurring service, you're not just getting a clean home — you're gaining peace of mind and more time for what matters.",
    included: [
      "Full cleaning of your bathrooms, kitchen, bedrooms, and living areas",
      "Dusting all main surfaces and rotating monthly: baseboards, ceiling fans, blinds, and kitchen cabinet exteriors",
      "Bed-making with fresh linens (up to 3 beds)",
      "Trash emptied and bins wiped",
      "Floors vacuumed and mopped",
      "Your same cleaning technician each time — someone who knows your home and preferences",
    ],
    closing:
      "Have any preferences or areas you'd like us to pay extra attention to? Just let us know. — The Kathy Clean Team",
  },
};

// ── Disclaimer ────────────────────────────────────────────────────────────────

function DisclaimerSection() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="text-sm font-semibold text-gray-700">
          Disclaimer &amp; Terms of Service
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <title>Toggle</title>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 py-5 text-xs text-gray-500 space-y-3 bg-white leading-relaxed">
          <p>
            All prices shown are pre-tax. Texas state and local sales tax (8.25%) will be added at
            checkout.
          </p>
          <p>
            This quote is valid for 30 days. Final pricing may be adjusted if the condition of the
            home requires significantly more time or work beyond the scope of work. Any adjustment
            will be discussed and approved by you before proceeding. We do not move furniture, clean
            walls, do laundry, wash dishes, or handle biohazard materials.
          </p>
          <p>
            If access instructions are unclear or we are unable to enter the property, a trip fee may
            apply.
          </p>
          <p>
            <span className="font-semibold text-gray-600">Cancellations:</span> Cancellations or
            rescheduling requests must be made at least 48 hours before the scheduled service.
            Cancellations made with less than 48 hours&apos; notice will be charged 50% of the
            service value.
          </p>
          <p>
            <span className="font-semibold text-gray-600">Non-Solicitation:</span> You agree not to
            directly or indirectly solicit any Kathy Clean employee to provide cleaning services
            outside of their employment with Kathy Clean during or after their engagement with us. If
            solicitation occurs, this agreement will terminate immediately, and you agree to pay
            $10,000 as liquidated damages. This amount represents a reasonable estimate of the harm
            caused and is not a penalty.
          </p>
          <p className="font-semibold text-gray-600">
            By accepting this quote, you agree to these terms of service.
          </p>
        </div>
      )}
    </div>
  );
}

// ── Service scope card ────────────────────────────────────────────────────────

function ServiceScopeCard({
  service,
  frequency,
}: {
  service: ServiceType;
  frequency?: Frequency | null;
}) {
  const [open, setOpen] = useState(false);
  const details = SERVICE_DETAILS[service];
  if (!details) return null;

  const recurringFrequencyLabel =
    service === "recurring" && frequency ? getFrequencyLabel(frequency) : null;

  const title =
    service === "recurring"
      ? `What's Included in Your ${recurringFrequencyLabel ? `${recurringFrequencyLabel} ` : ""}Recurring Service`
      : "What's Included";

  return (
    <div className="border-t border-gray-100">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between px-4 py-5 text-left transition-colors hover:bg-gray-50 sm:px-8"
      >
        <span className="pr-4 text-base font-semibold text-gray-900 sm:text-lg">{title}</span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <title>Toggle included items</title>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="px-4 pb-6 sm:px-8">
          {details.intro && (
            <p className="mb-4 text-sm leading-relaxed text-gray-600">{details.intro}</p>
          )}

          <ul className="mb-4 space-y-2">
            {details.included.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsla(177,98%,40%,1)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Included</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {details.notIncluded && (
            <>
              <p className="mb-2 mt-5 text-sm font-semibold text-gray-700">What&apos;s not included:</p>
              <ul className="mb-4 space-y-1.5">
                {details.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <title>Not included</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {details.closing && (
            <p className="text-sm italic leading-relaxed text-gray-500">{details.closing}</p>
          )}
        </div>
      )}
    </div>
  );
}

// ── Trust bar ─────────────────────────────────────────────────────────────────

function TrustBar() {
  return (
    <div className="px-4 py-4 sm:px-8 bg-white border-y border-gray-100">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-700">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <title>Insured</title>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Fully Insured &amp; Bonded
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <title>Rating</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          4.8/5 Star Rating
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <title>Guarantee</title>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Satisfaction Guarantee
        </div>
      </div>
    </div>
  );
}

function splitLeadName(fullName: string) {
  const parts = fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) {
    return { firstName: "", lastName: "" };
  }

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

// ── Main content ──────────────────────────────────────────────────────────────

function QuoteContent() {
  const searchParams = useSearchParams();
  const [acceptState, setAcceptState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const inlineAcceptButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isInlineButtonVisible, setIsInlineButtonVisible] = useState(false);

  useEffect(() => {
    if (acceptState === "success") return;
    const el = inlineAcceptButtonRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) setIsInlineButtonVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [acceptState]);

  const market = searchParams.get("market") ?? "houston";
  const typeRaw = searchParams.get("type") ?? "";
  const serviceRaw = searchParams.get("service") ?? "";
  const categoryRaw = searchParams.get("category") ?? "";
  const frequencyRaw = searchParams.get("frequency") ?? "";
  const sqftRaw = searchParams.get("sqft") ?? "";
  const address = searchParams.get("address") ?? "";
  const name = searchParams.get("name") ?? "";
  const email = searchParams.get("email") ?? "";
  const phone = searchParams.get("phone") ?? "";

  const quoteType =
    normalizeQuoteType(typeRaw) ??
    normalizeQuoteType(categoryRaw) ??
    normalizeQuoteType(serviceRaw);

  const normalizedService = normalizeService(serviceRaw) ?? normalizeService(categoryRaw);
  const service: ServiceType | null =
    quoteType === "commercial"
      ? "commercial"
      : quoteType === "window"
        ? "windows"
        : normalizedService;
  const frequency = normalizeFrequency(frequencyRaw);
  const sqft = Number.parseInt(sqftRaw, 10);
  const validSqft = !Number.isNaN(sqft) && sqft > 0;
  const { firstName, lastName } = splitLeadName(name);

  const isResidentialService =
    service === "recurring" ||
    service === "deep" ||
    service === "movein" ||
    service === "moveout" ||
    service === "onetime";
  const isLargeHouseManualQuote = isResidentialService && validSqft && sqft > 6000;
  const isManualQuote =
    isLargeHouseManualQuote || (service ? MANUAL_QUOTE_SERVICES.includes(service) : false);
  const isRecurringNoFrequency = service === "recurring" && !frequency && !isLargeHouseManualQuote;
  const manualQuoteTitle = "Custom Quote Required";
  const manualQuoteServiceLabel = service ? getServiceLabel(service) : "Cleaning Service";
  const manualQuoteMessage = isLargeHouseManualQuote
    ? "Thank you for your request. The size of your home requires a custom quote, and our team will reach out shortly to review the details and finalize pricing."
    : `${manualQuoteServiceLabel} requires review by our team before we can finalize pricing. We received your request and will contact you shortly with the next steps and your custom quote.`;

  const price =
    service && validSqft && !isManualQuote && !isRecurringNoFrequency
      ? calculateQuotePrice(service, sqft, frequency ?? undefined)
      : null;

  const recurringPrices =
    isRecurringNoFrequency && validSqft
      ? {
          weekly: calculateQuotePrice("recurring", sqft, "weekly"),
          biweekly: calculateQuotePrice("recurring", sqft, "biweekly"),
          monthly: calculateQuotePrice("recurring", sqft, "monthly"),
        }
      : null;

  const alternateRecurringFrequencies: {
    frequency: Frequency;
    label: string;
    price: number;
  }[] =
    service === "recurring" && frequency && validSqft
      ? (["weekly", "biweekly", "monthly"] as const)
          .filter((f) => f !== frequency)
          .map((f) => ({
            frequency: f,
            label: getFrequencyLabel(f),
            price: calculateQuotePrice("recurring", sqft, f),
          }))
          .filter(
            (opt): opt is { frequency: Frequency; label: string; price: number } =>
              opt.price !== null,
          )
      : [];

  const recurringBase = `/quote?type=house&service=recurring&sqft=${sqft}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&market=${encodeURIComponent(market)}${address ? `&address=${encodeURIComponent(address)}` : ""}`;

  const handleAcceptQuote = async () => {
    if (!service || price === null || acceptState === "submitting") return;

    setAcceptState("submitting");

    try {
      const response = await fetch("/api/quote-accept", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          fullName: name,
          service,
          serviceLabel: getServiceLabel(service),
          frequency: frequency ?? null,
          frequencyLabel: frequency ? getFrequencyLabel(frequency) : null,
          quotePrice: price,
          sqft: validSqft ? sqft : null,
          address: address || null,
          email: email || null,
          phone: phone || null,
          market,
          quoteUrl: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to notify team");
      }

      setAcceptState("success");
    } catch (error) {
      console.error("[Quote] accept webhook failed", error);
      setAcceptState("error");
    }
  };

  // ── Invalid / missing params ────────────────────────────────────────────
  // For manual-quote services (commercial/windows/postconstruction), sqft is optional —
  // those flows always go to a custom-quote handoff so we don't need it.
  if (!service || (!isManualQuote && !validSqft)) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <title>Error</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Invalid Quote Link</h1>
          <p className="text-gray-600 mb-6">
            This quote link appears to be incomplete. Please fill out our quote request form to get
            your personalized estimate.
          </p>
          <a
            href="/request-quote"
            className="inline-block bg-[hsla(177,98%,50%,1)] text-[hsla(227,47%,21%,1)] font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Request a Quote
          </a>
        </div>
      </div>
    );
  }

  // ── Manual quote ──────────────────────────────────────────────────────────
  if (isManualQuote) {
    return (
      <div className="min-h-screen bg-blue-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[hsla(227,47%,21%,1)] px-8 py-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Thank You, {name || "Valued Customer"}!
              </h1>
              <p className="text-blue-200 mt-1">
                Your {getServiceLabel(service)} request has been received
              </p>
            </div>
            <div className="px-8 py-8">
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[hsla(177,98%,50%,0.15)] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[hsla(177,98%,50%,1)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <title>Custom quote</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-1">{manualQuoteTitle}</h2>
                    <p className="text-gray-600">{manualQuoteMessage}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-gray-900">Your Request Details</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-gray-500">Service</div>
                  <div className="text-gray-900 font-medium">{getServiceLabel(service)}</div>
                  {validSqft && (
                    <>
                      <div className="text-gray-500">Home Size</div>
                      <div className="text-gray-900 font-medium">{sqft.toLocaleString()} sq ft</div>
                    </>
                  )}
                  {address && (
                    <>
                      <div className="text-gray-500">Address</div>
                      <div className="text-gray-900 font-medium">{address}</div>
                    </>
                  )}
                </div>
              </div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Recurring without frequency — show all three options ──────────────────
  if (recurringPrices) {
    const options = [
      {
        key: "weekly" as const,
        label: "Weekly",
        price: recurringPrices.weekly,
        tag: "Best Value",
        tagColor: "bg-green-100 text-green-700",
      },
      {
        key: "biweekly" as const,
        label: "Bi-Weekly",
        price: recurringPrices.biweekly,
        tag: "Most Popular",
        tagColor: "bg-[hsla(177,98%,50%,0.15)] text-[hsla(177,40%,35%,1)]",
      },
      {
        key: "monthly" as const,
        label: "Monthly",
        price: recurringPrices.monthly,
        tag: null,
        tagColor: "",
      },
    ];

    return (
      <div className="min-h-screen bg-blue-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[hsla(227,47%,21%,1)] px-8 py-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Your Recurring Cleaning Quote
              </h1>
              <p className="text-blue-200 mt-1">
                Prepared for {name || "Valued Customer"} · {sqft.toLocaleString()} sq ft
                {address && ` · ${address}`}
              </p>
            </div>

            <TrustBar />

            <div className="px-8 py-8">
              <p className="text-gray-600 mb-6">
                Choose the frequency that works best for you and click any option to view and
                approve that quote:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {options.map(({ key, label, price: p, tag, tagColor }) => (
                  <a
                    key={key}
                    href={`${recurringBase}&frequency=${key}`}
                    className="relative block border-2 border-gray-100 hover:border-[hsla(177,98%,50%,1)] rounded-xl p-5 text-center transition-all hover:shadow-md hover:-translate-y-0.5 group"
                  >
                    {tag && (
                      <span
                        className={`absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagColor}`}
                      >
                        {tag}
                      </span>
                    )}
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 group-hover:text-gray-700">
                      {label}
                    </p>
                    <p className="text-4xl font-bold text-[hsla(227,47%,21%,1)]">${p}</p>
                    <p className="text-xs text-gray-400 mt-1">per visit · + taxes</p>
                    <div className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[hsla(177,98%,50%,0.12)] px-4 py-2 text-xs font-semibold text-[hsla(227,47%,21%,1)] transition-colors group-hover:bg-[hsla(177,98%,50%,0.2)]">
                      <span>{`View ${label} Quote`}</span>
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <title>Open quote</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 space-y-0">
                <DetailRow label="Service" value="Recurring Cleaning" />
                <DetailRow label="Home Size" value={`${sqft.toLocaleString()} sq ft`} />
                {address && <DetailRow label="Address" value={address} />}
                {email && <DetailRow label="Email" value={email} />}
                {phone && <DetailRow label="Phone" value={phone} />}
              </div>
            </div>

            <ServiceScopeCard service="recurring" />

            <div className="px-8 pb-6">
              <DisclaimerSection />
            </div>
          </div>

          <div className="mt-6 bg-white rounded-2xl shadow-lg px-8 py-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Questions About Your Quote?
            </h3>
            <ContactInfo />
          </div>
        </div>
      </div>
    );
  }

  // ── Unable to calculate ───────────────────────────────────────────────────
  if (price === null) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Unable to Calculate Price</h1>
          <p className="text-gray-600 mb-6">
            We couldn&apos;t determine a price for the provided details. Please contact us and we&apos;ll be
            happy to help.
          </p>
          <ContactInfo />
        </div>
      </div>
    );
  }

  // ── Full quote view ───────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 pb-28 sm:pb-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Header */}
          <div className="bg-[hsla(227,47%,21%,1)] px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">Your Cleaning Quote</h1>
                <p className="text-blue-200 mt-1">Prepared for {name || "Valued Customer"}</p>
              </div>
              <div className="hidden sm:block">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[hsla(177,98%,50%,1)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <title>Quote</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Price highlight */}
          <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-gray-100">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                {service === "recurring" && frequency
                  ? `${getFrequencyLabel(frequency)} Price`
                  : "Your Price"}
              </p>
              <p className="text-5xl md:text-6xl font-bold text-[hsla(227,47%,21%,1)]">${price}</p>
              <p className="text-sm text-gray-500 mt-1">
                {service === "recurring" ? "per visit · + taxes" : "+ taxes"}
              </p>
            </div>
          </div>

          <TrustBar />

          {/* Quote details */}
          <div className="px-8 py-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quote Details</h2>
            <div className="space-y-0">
              <DetailRow label="Service" value={getServiceLabel(service)} />
              {service === "recurring" && frequency && (
                <DetailRow label="Frequency" value={getFrequencyLabel(frequency)} />
              )}
              <DetailRow label="Home Size" value={`${sqft.toLocaleString()} sq ft`} />
              {address && <DetailRow label="Address" value={address} />}
              {email && <DetailRow label="Email" value={email} />}
              {phone && <DetailRow label="Phone" value={phone} />}
            </div>
          </div>

          {/* Alternate frequency prices (recurring only) — informational */}
          {alternateRecurringFrequencies.length > 0 && (
            <div className="px-8 pb-6">
              <p className="text-sm text-gray-500 mb-3">
                For reference, here&apos;s what other frequencies would cost:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {alternateRecurringFrequencies.map(({ frequency: f, label, price: p }) => (
                  <div
                    key={f}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {label}
                    </p>
                    <p className="text-lg font-semibold text-[hsla(227,47%,21%,1)]">
                      ${p}
                      <span className="text-xs font-normal text-gray-500"> per visit · + taxes</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <ServiceScopeCard service={service} frequency={frequency} />

          {/* CTA */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
            {acceptState === "success" ? (
              <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-emerald-50 px-6 py-6 text-center shadow-sm animate-in fade-in zoom-in-95 duration-300">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-8 w-8 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Quote accepted</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-green-900">Quote Accepted!</p>
                <p className="mt-2 text-base font-medium text-green-800">
                  Thanks for accepting the quote. We will contact you as soon as possible.
                </p>
                <p className="mt-2 text-sm text-green-700">Our team has been notified.</p>
              </div>
            ) : (
              <>
                <button
                  ref={inlineAcceptButtonRef}
                  type="button"
                  onClick={handleAcceptQuote}
                  disabled={acceptState === "submitting"}
                  className="block w-full bg-[hsla(177,98%,50%,1)] text-[hsla(227,47%,21%,1)] font-bold text-lg py-4 rounded-xl hover:opacity-90 transition-all hover:scale-[1.01] text-center disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {acceptState === "submitting" ? "Sending..." : "Accept Quote"}
                </button>
                <p className="text-center text-gray-500 text-xs mt-3">
                  Prices shown are pre-tax. By accepting this quote, you agree to the terms of
                  service.
                </p>
                {acceptState === "error" && (
                  <p className="mt-3 text-center text-sm text-red-600">
                    We couldn&apos;t send your confirmation right now. Please try again or contact
                    our team directly.
                  </p>
                )}
              </>
            )}
          </div>

          <div className="px-8 py-5 border-t border-gray-100">
            <DisclaimerSection />
          </div>
        </div>

        <div className="mt-6 bg-white rounded-2xl shadow-lg px-8 py-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Questions About Your Quote?
          </h3>
          <ContactInfo />
        </div>
      </div>

      {/* Mobile sticky CTA — only when the inline Accept button is off-screen */}
      {acceptState !== "success" && !isInlineButtonVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] backdrop-blur sm:hidden">
          <button
            type="button"
            onClick={handleAcceptQuote}
            disabled={acceptState === "submitting"}
            className="block w-full rounded-xl bg-[hsla(177,98%,50%,1)] py-3.5 text-center text-base font-bold text-[hsla(227,47%,21%,1)] transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {acceptState === "submitting"
              ? "Sending..."
              : `Accept Quote · $${price} + taxes`}
          </button>
        </div>
      )}
    </div>
  );
}

// ── Shared sub-components ────────────────────────────────────────────────────

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-gray-900 font-medium text-sm text-right max-w-[60%]">{value}</span>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-2 text-gray-600">
        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <title>Phone</title>
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <a href="tel:+13464886044" className="hover:text-cyan-500 transition-colors">
          (346) 488-6044
        </a>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <title>Email</title>
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <a
          href="mailto:info@kathyclean.com"
          className="hover:text-cyan-500 transition-colors"
        >
          info@kathyclean.com
        </a>
      </div>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-blue-50 flex items-center justify-center">
          <div className="animate-pulse text-gray-400">Loading your quote...</div>
        </div>
      }
    >
      <QuoteContent />
    </Suspense>
  );
}
