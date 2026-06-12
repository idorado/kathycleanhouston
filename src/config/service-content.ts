// Content uniqueness engine for the programmatic {service}-{location} pages.
// Each builder weaves the neighborhood's real facts (zips, persona, housing,
// landmarks, climate angle) into SERVICE-SPECIFIC copy, so every page is
// genuinely unique rather than token-swapped. Output plugs straight into the
// existing LocationServiceAreaPage template (same look as the 21 hand-written
// service-area pages).

import type { LocationServiceAreaPageProps } from "@/components/service-areas/LocationServiceAreaPage";
import type { LocationProfile } from "@/config/location-profiles";
import type { HoustonServiceArea } from "@/lib/service-areas/houstonLocations";

export type EngineServiceId =
  | "house-cleaning"
  | "recurring-house-cleaning"
  | "deep-cleaning"
  | "move-in-move-out";

export const ENGINE_SERVICE_IDS: EngineServiceId[] = [
  "house-cleaning",
  "recurring-house-cleaning",
  "deep-cleaning",
  "move-in-move-out",
];

const CTA_PHONE = "(346) 488-6044";

const SERVICE_LABEL: Record<EngineServiceId, string> = {
  "house-cleaning": "House Cleaning",
  "recurring-house-cleaning": "Recurring House Cleaning",
  "deep-cleaning": "Deep Cleaning",
  "move-in-move-out": "Move-In / Move-Out Cleaning",
};

// Service-relevant resource/guide links surfaced on each engine page.
const RESOURCE_LINKS: Record<EngineServiceId, { href: string; title: string }[]> = {
  "house-cleaning": [
    { href: "/resources/house-cleaning-cost-houston", title: "House Cleaning Cost in Houston" },
    { href: "/resources/what-is-included-house-cleaning", title: "What's Included in a Cleaning" },
    { href: "/resources/how-often-house-cleaning-houston", title: "How Often to Schedule Cleaning" },
    { href: "/resources/best-house-cleaning-service-houston", title: "Best House Cleaning Service in Houston" },
  ],
  "recurring-house-cleaning": [
    { href: "/resources/how-often-house-cleaning-houston", title: "How Often to Schedule Cleaning" },
    { href: "/resources/house-cleaning-cost-houston", title: "House Cleaning Cost in Houston" },
    { href: "/resources/hard-water-cleaning-houston", title: "Hard Water Spots in Houston Homes" },
    { href: "/resources/what-is-included-house-cleaning", title: "What's Included in a Cleaning" },
  ],
  "deep-cleaning": [
    { href: "/resources/deep-cleaning-houston", title: "Deep Cleaning: What to Expect & Cost" },
    { href: "/resources/humidity-mold-cleaning-houston", title: "Houston Humidity & Mildew Guide" },
    { href: "/resources/what-is-included-house-cleaning", title: "What's Included in a Cleaning" },
    { href: "/resources/allergy-pollen-cleaning-houston", title: "Allergy & Pollen Season Cleaning" },
  ],
  "move-in-move-out": [
    { href: "/resources/move-in-move-out-cleaning-houston", title: "Move-In / Move-Out Cleaning Guide" },
    { href: "/resources/move-out-cleaning-checklist-houston", title: "Move-Out Cleaning Checklist" },
    { href: "/resources/storm-move-out-cleaning-houston", title: "Storm-Season Move-Out Cleaning" },
    { href: "/resources/house-cleaning-cost-houston", title: "House Cleaning Cost in Houston" },
  ],
};

function zipList(p: LocationProfile): string {
  const z = p.zips;
  if (z.length === 1) return z[0] ?? "";
  if (z.length === 2) return `${z[0]} and ${z[1]}`;
  return `${z.slice(0, -1).join(", ")}, and ${z[z.length - 1]}`;
}

function subAreaList(p: LocationProfile): string | null {
  const s = p.subAreas;
  if (!s || s.length === 0) return null;
  if (s.length === 1) return s[0] ?? "";
  return `${s.slice(0, -1).join(", ")}, and ${s[s.length - 1]}`;
}

export function serviceLocationSlug(serviceId: EngineServiceId, locationId: string): string {
  return `${serviceId}-${locationId}`;
}

export function buildServiceLocationProps(
  serviceId: EngineServiceId,
  profile: LocationProfile,
  area: HoustonServiceArea,
): LocationServiceAreaPageProps {
  const name = profile.name;
  const zips = zipList(profile);
  const subAreas = subAreaList(profile);
  const canonical = `/${serviceLocationSlug(serviceId, profile.id)}`;
  const benefitsImage = { url: area.imageUrl, alt: area.imageAlt };
  const mapEmbedUrl = area.mapEmbedUrl;
  const baseFaq = {
    question: `Do you serve ${name} (${zips})?`,
    answer: `Yes. Kathy Clean Houston provides ${SERVICE_LABEL[serviceId].toLowerCase()} throughout ${name}${subAreas ? `, including ${subAreas}` : ""}. We confirm your address and home size up front for an exact flat-rate quote.`,
  };
  const insuranceFaq = {
    question: "Are your cleaning teams insured and background-checked?",
    answer:
      "Yes. We work with fully insured, bonded, and background-checked cleaning teams, and we back every visit with a 48-hour satisfaction guarantee. A certificate of insurance is available on request.",
  };

  switch (serviceId) {
    case "house-cleaning":
      return {
        title: `House Cleaning in ${name} | Kathy Clean Houston`,
        description: `Professional house cleaning in ${name} (${zips}) for ${profile.persona}. Recurring, deep, and move-out cleaning by insured, background-checked teams. Get a fast quote.`,
        canonical,
        robotsIndex: true,
        breadcrumbName: `House Cleaning in ${name}`,
        heroTitle: "Professional House Cleaning",
        heroSubtitle: `in ${name}`,
        heroParagraphs: [
          `<a href="https://kathycleanhouston.com/" class="underline text-secondary">Kathy Clean Houston</a> provides reliable house cleaning throughout ${name} (${zips}) — recurring, deep, and move-in/move-out cleaning for ${profile.persona}. The same trusted team every visit, never a different stranger from an app.`,
        ],
        ctaPhone: CTA_PHONE,
        ctaSmsNumber: CTA_PHONE,
        benefitsTitle: `Why ${name} Households Choose Kathy Clean`,
        benefitsParagraph: `${name} is ${profile.context}. We tailor every clean to its ${profile.housing}.`,
        benefitsItems: [
          {
            title: "The same trusted team, every visit:",
            body: `Consistency you don't get from gig-app cleaners — your team learns your ${name} home and your preferences.`,
          },
          {
            title: "Built for your home's layout and finishes:",
            body: `We adapt to ${profile.housing} — the materials, surfaces, and priorities specific to ${name} homes.`,
          },
          {
            title: "Flexible scheduling, no need to be home:",
            body: `Most ${name} clients give us secure access and come back to a clean home. You're notified when the team finishes.`,
          },
        ],
        benefitsImage,
        whyTitle: `Why House Cleaning Matters in ${name}`,
        whyParagraph: `Local conditions shape what a ${name} home needs from a cleaning service.`,
        whyItems: [
          {
            title: "Houston's climate is hard on surfaces:",
            body: `${profile.climateAngle}.`,
          },
          {
            title: "Reliability protects your time:",
            body: `Recurring cleaning keeps your ${name} home guest-ready without consuming your weekends.`,
          },
          {
            title: "Insured, background-checked teams:",
            body: "Every visit is backed by our 48-hour satisfaction guarantee — if something isn't right, we re-clean it at no cost.",
          },
        ],
        locationSpecificContent: {
          title: `House Cleaning in ${name} for Houston Households`,
          content: `<p>${name} — spanning ${zips} — is ${profile.context}. Our house cleaning service has become a dependable choice for ${profile.persona} who want professional, consistent cleaning without coordinating with an individual cleaner.${subAreas ? ` We serve neighborhoods throughout the area including ${subAreas}.` : ""}</p>
<p>${name} homes are ${profile.housing}, and we adapt our approach to each one. ${capitalize(profile.climateAngle)}. Whether you want weekly or biweekly <a href="/recurring-house-cleaning-${profile.id}">recurring cleaning</a>, a one-time <a href="/deep-cleaning-${profile.id}">deep clean</a>, or <a href="/move-in-move-out-${profile.id}">move-in/move-out cleaning</a>, we build the visit around your home and schedule.</p>
<p>If you found us through a neighbor's recommendation or a quick search, <a href="/request-quote">request a free quote</a> — we respond the same business day.</p>`,
        },
        recurringCleaningContent: {
          title: `What a ${name} Cleaning Includes`,
          content: `<p>Every visit covers full kitchen and bathroom cleaning, vacuuming and mopping all floors, dusting all surfaces and fixtures, mirrors and glass, and the high-touch areas that accumulate the most grime. We pay extra attention to the issues ${name} homes face — ${profile.climateAngle.toLowerCase()}. Pricing is flat-rate by home size, not hourly, so you always know the cost before we start.</p>`,
        },
        faqItems: [
          baseFaq,
          {
            question: `How much does house cleaning cost in ${name}?`,
            answer:
              "Pricing is flat-rate by square footage, not hourly. Recurring bi-weekly cleaning starts at $119 for smaller homes and scales with size; deep cleans start at $345. Recurring clients save vs. one-time rates. Request a free quote for an exact price.",
          },
          {
            question: `Can you clean my ${name} home while I'm at work?`,
            answer: `Yes. Most ${name} clients provide a key code or lockbox access. We clean while you're away, lock up securely, and notify you when we finish.`,
          },
          insuranceFaq,
          {
            question: "Do you bring your own supplies?",
            answer:
              "Yes — our teams arrive fully equipped with professional-grade products and tools. Eco-friendly products or your own supplies can be used on request.",
          },
        ],
        mapTitle: `Serving ${name} and Surrounding Houston`,
        mapParagraph: `House cleaning across ${name} (${zips})${subAreas ? `, including ${subAreas}` : ""}.`,
        mapEmbedUrl,
        relatedResources: RESOURCE_LINKS[serviceId],
      };

    case "recurring-house-cleaning":
      return {
        title: `Recurring House Cleaning in ${name} TX | Kathy Clean`,
        description: `Weekly, bi-weekly & monthly house cleaning in ${name} (${zips}). The same trusted team every visit, flat-rate pricing, no contracts. Get a free quote.`,
        canonical,
        robotsIndex: true,
        breadcrumbName: `Recurring House Cleaning in ${name}`,
        heroTitle: "Recurring House Cleaning",
        heroSubtitle: `in ${name}`,
        heroParagraphs: [
          `<a href="https://kathycleanhouston.com/" class="underline text-secondary">Kathy Clean Houston</a> keeps ${name} homes (${zips}) consistently clean with weekly, bi-weekly, or monthly service — the same trusted team every visit, flat-rate pricing, and no long-term contracts.`,
        ],
        ctaPhone: CTA_PHONE,
        ctaSmsNumber: CTA_PHONE,
        benefitsTitle: `Recurring Cleaning Built for ${name}`,
        benefitsParagraph: `For ${profile.persona}, a predictable cleaning schedule is the difference between a home that's always ready and one that never quite catches up.`,
        benefitsItems: [
          {
            title: "Same team, every visit:",
            body: `Your ${name} cleaning team learns your home, your finishes, and your preferences — consistency a rotating gig-app cleaner can't match.`,
          },
          {
            title: "Choose your cadence:",
            body: "Weekly for busy, high-traffic homes; bi-weekly (our most popular) to stay consistently guest-ready; monthly for smaller households that maintain between visits.",
          },
          {
            title: "Flat-rate, no contracts:",
            body: "Recurring clients get discounted per-visit rates and priority scheduling, with the freedom to pause or reschedule.",
          },
        ],
        benefitsImage,
        whyTitle: `Why Recurring Cleaning Works in ${name}`,
        whyParagraph: `${capitalize(profile.context)}, and consistent care keeps up with it.`,
        whyItems: [
          {
            title: "Houston conditions don't pause:",
            body: `${capitalize(profile.climateAngle)} — recurring visits stop buildup before it sets in.`,
          },
          {
            title: "Protects your downtime:",
            body: `${name} life is full. A standing cleaning slot means your weekends stay yours.`,
          },
          {
            title: "Reschedule anytime:",
            body: "Flexible rescheduling is always available — your calendar doesn't follow a fixed schedule, and neither do we.",
          },
        ],
        locationSpecificContent: {
          title: `Recurring House Cleaning for ${name} Homes`,
          content: `<p>Bi-weekly cleaning is by far the most popular choice among ${name} clients — it keeps ${profile.housing} consistently clean and guest-ready without the frequency of weekly service. Households with children, pets, or heavy kitchen use often choose weekly to keep pace, while smaller households and frequent travelers do well with monthly visits.</p>
<p>Every recurring visit covers full kitchen and bathroom cleaning, floors, dusting, glass, and high-touch areas, with extra attention to ${name}'s specific challenge: ${profile.climateAngle.toLowerCase()}. Prefer a one-time refresh first? Start with a <a href="/deep-cleaning-${profile.id}">deep clean</a>, then move to a recurring cadence. See our full <a href="/house-cleaning-${profile.id}">${name} house cleaning</a> overview, or <a href="/request-quote">request a quote</a>.</p>`,
        },
        recurringCleaningContent: {
          title: "How Recurring Pricing Works",
          content: `<p>Recurring pricing is flat-rate by home square footage, not hourly — so you know the cost before each visit. Bi-weekly rates start at $119 for smaller ${name} homes and scale with size; weekly runs slightly lower per visit and monthly slightly higher. There's no contract: keep a card on file for automatic billing after each visit, and pause or adjust anytime.</p>`,
        },
        faqItems: [
          baseFaq,
          {
            question: "What's the difference between weekly, bi-weekly, and monthly?",
            answer:
              "Weekly suits busy homes with kids, pets, or heavy use. Bi-weekly (most popular) keeps a home consistently clean and guest-ready. Monthly works for smaller households that maintain between visits.",
          },
          {
            question: "Is there a contract?",
            answer:
              "No long-term contract. Recurring clients get discounted rates and priority scheduling, and can reschedule with 24–48 hours' notice or pause anytime.",
          },
          insuranceFaq,
        ],
        mapTitle: `Recurring Cleaning Across ${name}`,
        mapParagraph: `Weekly, bi-weekly, and monthly cleaning throughout ${name} (${zips}).`,
        mapEmbedUrl,
        relatedResources: RESOURCE_LINKS[serviceId],
      };

    case "deep-cleaning":
      return {
        title: `Deep Cleaning in ${name} Houston | Kathy Clean`,
        description: `One-time deep house cleaning in ${name} (${zips}). Baseboards, vents, inside appliances, grout — everything routine cleaning skips. Get a free quote.`,
        canonical,
        robotsIndex: true,
        breadcrumbName: `Deep Cleaning in ${name}`,
        heroTitle: "Deep House Cleaning",
        heroSubtitle: `in ${name}`,
        heroParagraphs: [
          `<a href="https://kathycleanhouston.com/" class="underline text-secondary">Kathy Clean Houston</a> provides one-time deep cleaning for ${name} homes (${zips}) — a top-to-bottom reset that reaches baseboards, vents, behind and inside appliances, grout, and the build-up routine cleaning leaves behind.`,
        ],
        ctaPhone: CTA_PHONE,
        ctaSmsNumber: CTA_PHONE,
        benefitsTitle: `What a ${name} Deep Clean Covers`,
        benefitsParagraph: `A deep clean goes well beyond a standard visit — ideal before recurring service starts, after a busy season, or when a home needs to be reset.`,
        benefitsItems: [
          {
            title: "Everything routine cleaning skips:",
            body: "Baseboards, door frames, vents, light fixtures, inside the oven and fridge on request, cabinet fronts, grout, and detailed bathroom scrubbing.",
          },
          {
            title: `Tuned to ${name} homes:`,
            body: `We focus on ${profile.housing} and the build-up that Houston's climate creates — ${profile.climateAngle.toLowerCase()}.`,
          },
          {
            title: "A clean baseline:",
            body: `Most ${name} clients book a deep clean first, then switch to <a href="/recurring-house-cleaning-${profile.id}">recurring service</a> to keep that level with less effort.`,
          },
        ],
        benefitsImage,
        whyTitle: `When to Book a Deep Clean in ${name}`,
        whyParagraph: "A few situations call for a deep clean rather than a standard visit:",
        whyItems: [
          {
            title: "Before starting recurring service:",
            body: "A deep clean resets the home so recurring visits can maintain it efficiently.",
          },
          {
            title: "Seasonal and humidity buildup:",
            body: `${capitalize(profile.climateAngle)} — a deep clean clears what accumulates between regular cleanings.`,
          },
          {
            title: "Before guests or after a busy stretch:",
            body: `Holidays, events, or a long stretch without help — a one-time deep clean gets a ${name} home back to baseline.`,
          },
        ],
        locationSpecificContent: {
          title: `Deep Cleaning for ${name} Homes`,
          content: `<p>Our deep cleaning service gives ${name} homes a thorough, one-time reset. We work through ${profile.housing} methodically — kitchens and bathrooms in detail, baseboards and trim, vents and fixtures, glass, and the spots a quick clean never reaches.</p>
<p>${name}'s specific challenge is real: ${profile.climateAngle.toLowerCase()}. A deep clean tackles that directly. Many clients pair it with a move — see <a href="/move-in-move-out-${profile.id}">move-in/move-out cleaning</a> — or use it as the starting point for <a href="/recurring-house-cleaning-${profile.id}">recurring cleaning</a>. <a href="/request-quote">Request a free quote</a> for your ${name} home.</p>`,
        },
        recurringCleaningContent: {
          title: "Deep Clean Pricing",
          content: `<p>Deep cleans are flat-rate by home size, not hourly. Pricing starts at $345 for smaller ${name} homes and scales with square footage. Inside-oven and inside-fridge cleaning are available on request. We confirm your home size and any add-ons up front so the quote is exact.</p>`,
        },
        faqItems: [
          baseFaq,
          {
            question: "What's the difference between a deep clean and a standard cleaning?",
            answer:
              "A standard clean maintains an already-clean home. A deep clean is a one-time, top-to-bottom reset: baseboards, vents, inside appliances on request, grout, fixtures, and detailed scrubbing that routine visits don't include.",
          },
          {
            question: `How much does a deep clean cost in ${name}?`,
            answer:
              "Flat-rate by square footage, starting at $345 for smaller homes and scaling with size. Inside-oven and inside-fridge add-ons are available. Request a free quote for an exact price.",
          },
          insuranceFaq,
        ],
        mapTitle: `Deep Cleaning Across ${name}`,
        mapParagraph: `One-time deep cleaning throughout ${name} (${zips}).`,
        mapEmbedUrl,
        relatedResources: RESOURCE_LINKS[serviceId],
      };

    case "move-in-move-out":
      return {
        title: `Move-In / Move-Out Cleaning in ${name} | Kathy Clean`,
        description: `Move-in and move-out cleaning in ${name} (${zips}). Deposit-ready, landlord-coordinated, inside cabinets and appliances. Get a fast quote.`,
        canonical,
        robotsIndex: true,
        breadcrumbName: `Move-In / Move-Out Cleaning in ${name}`,
        heroTitle: "Move-In / Move-Out Cleaning",
        heroSubtitle: `in ${name}`,
        heroParagraphs: [
          `<a href="https://kathycleanhouston.com/" class="underline text-secondary">Kathy Clean Houston</a> handles move-in and move-out cleaning for ${name} homes and rentals (${zips}) — thorough, deposit-ready cleaning that covers inside cabinets, appliances, baseboards, and everything a full turnover requires.`,
        ],
        ctaPhone: CTA_PHONE,
        ctaSmsNumber: CTA_PHONE,
        benefitsTitle: `Move Cleaning Built for ${name}`,
        benefitsParagraph: `${capitalize(profile.context)} — which means leases, sales, and relocations are constant, and a spotless handoff matters.`,
        benefitsItems: [
          {
            title: "Deposit-ready, landlord-coordinated:",
            body: "We cover inside appliances, cabinet and drawer interiors, baseboards, and bathrooms — everything required for a full deposit return. We coordinate with landlords and property managers on request.",
          },
          {
            title: "Fresh start for move-ins:",
            body: `A move-in clean makes a new ${name} home genuinely fresh before you unpack — every surface cleaned before your furniture arrives.`,
          },
          {
            title: `Tuned to ${name} properties:`,
            body: `Whether it's ${profile.housing}, we scope the clean to the property type and its condition.`,
          },
        ],
        benefitsImage,
        whyTitle: `Why Move Cleaning Matters in ${name}`,
        whyParagraph: "A turnover clean protects your deposit, your sale, and your first impression.",
        whyItems: [
          {
            title: "Houston humidity between tenants:",
            body: `${capitalize(profile.climateAngle)} — vacant units especially need attention before the next occupant moves in.`,
          },
          {
            title: "Full turnover scope:",
            body: "Inside cabinets, inside appliances, baseboards, vents, grout, and floors — the items inspections and walkthroughs check.",
          },
          {
            title: "Flat-rate by home size:",
            body: "Priced like a deep clean by square footage, not hourly — you know the cost before we start.",
          },
        ],
        locationSpecificContent: {
          title: `Move-In & Move-Out Cleaning in ${name}`,
          content: `<p>Moving in or out of a ${name} home (${zips}) is stressful enough without the final clean. Our move-out service is landlord-ready — inside appliances, cabinet and drawer interiors, baseboards, bathrooms, and floors, covering everything required for a full deposit return. Move-in cleans make a new home feel genuinely fresh before you unpack.</p>
<p>${name} sees steady turnover among ${profile.persona}, and Houston's climate adds its own factor: ${profile.climateAngle.toLowerCase()}. We scope each clean to the property — ${profile.housing}. Pair it with a <a href="/deep-cleaning-${profile.id}">deep clean</a> for a deeper reset, or start <a href="/recurring-house-cleaning-${profile.id}">recurring cleaning</a> in your new home. <a href="/request-quote">Request a free quote</a>.</p>`,
        },
        recurringCleaningContent: {
          title: "Move Cleaning Pricing",
          content: `<p>Move-in and move-out cleans are priced like a deep clean — flat-rate by square footage, starting at $345 for smaller ${name} homes and scaling with size. Larger homes are quoted on request. Let us know your move date and we'll schedule around it.</p>`,
        },
        faqItems: [
          baseFaq,
          {
            question: "Is your move-out cleaning deposit-ready?",
            answer:
              "Yes. We cover inside appliances, cabinet and drawer interiors, baseboards, bathrooms, and floors — the areas landlords and property managers check. We coordinate with them on request.",
          },
          {
            question: `How much does move-out cleaning cost in ${name}?`,
            answer:
              "Flat-rate by square footage, like a deep clean — starting at $345 for smaller homes and scaling with size. Request a free quote with your home size and move date.",
          },
          insuranceFaq,
        ],
        mapTitle: `Move Cleaning Across ${name}`,
        mapParagraph: `Move-in and move-out cleaning throughout ${name} (${zips}).`,
        mapEmbedUrl,
        relatedResources: RESOURCE_LINKS[serviceId],
      };
  }
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
