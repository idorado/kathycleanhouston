const SITE_URL = "https://kathycleanhouston.com";
const LOGO_URL = `${SITE_URL}/images/logo-nav.webp`;
const CONTACT_EMAIL = "info@kathyclean.com";
// Canonical Google Business Profile URL. Hardcoded (with optional env override)
// so the sameAs link is guaranteed in production — previously this relied on
// NEXT_PUBLIC_GBP_URL, which is unset, so the GBP link silently dropped out.
const GBP_URL =
  process.env.NEXT_PUBLIC_GBP_URL ?? "https://maps.app.goo.gl/fHcfZ3iL2R4RFAf98";

const SAME_AS_URLS: string[] = [
  GBP_URL,
  "https://www.yelp.com/biz/kathy-clean-houston",
  "https://www.facebook.com/kathycleanhouston",
  "https://www.instagram.com/kathycleanhouston",
].filter((url): url is string => Boolean(url));

// ReserveAction = the explicit opt-in to Google Search Agents / AI-assistant
// booking on behalf of users. Points at the online quote intake (preferred path).
const RESERVE_ACTION = {
  "@type": "ReserveAction",
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": `${SITE_URL}/request-quote`,
    "inLanguage": "en-US",
    "actionPlatform": [
      "http://schema.org/DesktopWebPlatform",
      "http://schema.org/IOSPlatform",
      "http://schema.org/AndroidPlatform"
    ]
  },
  "result": {
    "@type": "Reservation",
    "name": "House cleaning quote request"
  }
};

const AREA_SERVED = [
  { "@type": "Place", "name": "Houston, TX" },
  { "@type": "Place", "name": "Houston" },
  { "@type": "Place", "name": "Greater Heights" },
  { "@type": "Place", "name": "Rice Military" },
  { "@type": "Place", "name": "Spring Branch" },
  { "@type": "Place", "name": "Spring Branch Central" },
  { "@type": "Place", "name": "Spring Branch East" },
  { "@type": "Place", "name": "Energy Corridor" },
  { "@type": "Place", "name": "Memorial" },
  { "@type": "Place", "name": "Westchase" },
  { "@type": "Place", "name": "Katy, TX" },
  { "@type": "Place", "name": "Sugar Land, TX" },
  { "@type": "Place", "name": "The Woodlands, TX" },
  { "@type": "Place", "name": "Bellaire" },
  { "@type": "Place", "name": "West University Place" },
  { "@type": "Place", "name": "The Memorial Villages" },
  { "@type": "Place", "name": "River Oaks" },
  { "@type": "Place", "name": "Washington Ave. / Memorial Park" },
  { "@type": "Place", "name": "Montrose" },
  { "@type": "Place", "name": "Midtown" },
  { "@type": "Place", "name": "Museum District" },
  { "@type": "Place", "name": "EaDo" },
  { "@type": "Place", "name": "Tanglewood" },
];

const REVIEWS = [
  {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Person", "name": "Steve M." },
    "datePublished": "2026-04-22",
    "reviewBody": "Service is outstanding, the help is professional, courteous and always on time for scheduled cleaning. I would give Kathy Clean Houston my highest recommendation, you'll be very pleased!"
  },
  {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Person", "name": "Ximena V." },
    "datePublished": "2026-03-10",
    "reviewBody": "Nubia does an amazing job. She is meticulous and always willing to do anything we ask. We enjoy her great work as well as efficiency. We highly recommend Kathy Clean Houston!"
  },
  {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Person", "name": "Donna W." },
    "datePublished": "2026-03-10",
    "reviewBody": "I was referred to Kathy Clean Houston by a neighbor. They were very professional, and I was able to schedule an appointment within just a few days. The person who came did an absolutely AMAZING job. Very professional, and I was truly impressed."
  },
  {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Person", "name": "Rik W." },
    "datePublished": "2026-03-10",
    "reviewBody": "I've used Kathy Clean Houston and am impressed with how the service professionals are personable and have a high attention to detail. The scheduling support is great and works hard to accommodate special requests. Highly recommend Kathy Clean Houston."
  },
  {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Person", "name": "Kerri N." },
    "datePublished": "2026-03-10",
    "reviewBody": "Want the best cleaning service in town? Then you want to call Kathy Clean Houston!! They will provide you with outstanding service, and they are very easy to work with."
  }
];

// Source of truth = live GBP (Place ID ChIJnfJyzzHFQIYRpcobYKYNZCw).
// Keep in sync with the Google Business Profile rating/review count.
const AGGREGATE_RATING = {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "15",
  "bestRating": "5",
  "worstRating": "1"
};

const GEO_COORDINATES = {
  "@type": "GeoCoordinates",
  "latitude": 29.7832,
  "longitude": -95.5211
};

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "07:00",
    "closes": "20:00"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Saturday", "Sunday"],
    "opens": "09:00",
    "closes": "20:00"
  }
];

const ADDRESS = {
  "@type": "PostalAddress",
  "streetAddress": "9219 Katy Fwy #136",
  "addressLocality": "Houston",
  "addressRegion": "TX",
  "postalCode": "77024",
  "addressCountry": "US"
};

export const home = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CleaningService"],
  "@id": `${SITE_URL}/#business`,
  "name": "Kathy Clean Houston",
  "description": "Professional house cleaning in Houston, TX. Recurring, deep clean, move-in/out, and post-construction cleaning by insured, background-checked professionals. 48-hour satisfaction guarantee.",
  "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
  "logo": LOGO_URL,
  "email": CONTACT_EMAIL,
  "serviceType": "Residential Cleaning Services",
  "url": SITE_URL,
  "telephone": "+1 346-488-6044",
  "address": ADDRESS,
  "geo": GEO_COORDINATES,
  "openingHoursSpecification": OPENING_HOURS,
  "priceRange": "$$",
  "areaServed": AREA_SERVED,
  "sameAs": SAME_AS_URLS,
  "aggregateRating": AGGREGATE_RATING,
  "review": REVIEWS,
  "potentialAction": RESERVE_ACTION,
  "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2"] }
});

export const website = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": "Kathy Clean Houston",
  "publisher": { "@id": `${SITE_URL}/#business` }
});

export const houseCleaning = (location: string, canonicalPath?: string) => {
  const generatedSlug = location
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const pageSlug = canonicalPath
    ? canonicalPath.replace(/^\/+|\/+$/g, "")
    : `service-areas/${generatedSlug}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${SITE_URL}/${pageSlug}#service`,
    "name": `Kathy Clean Houston — House Cleaning in ${locationTitleCase}`,
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Residential Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": ADDRESS,
    "geo": GEO_COORDINATES,
    "openingHoursSpecification": OPENING_HOURS,
    "priceRange": "$$",
    "sameAs": SAME_AS_URLS,
    "url": `${SITE_URL}/${pageSlug}`,
    "parentOrganization": { "@id": `${SITE_URL}/#business` },
    "areaServed": { "@type": "Place", "name": locationTitleCase },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `House Cleaning in ${locationTitleCase}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "House Cleaning",
            "areaServed": { "@type": "Place", "name": locationTitleCase }
          }
        }
      ]
    },
    "aggregateRating": AGGREGATE_RATING,
    "review": REVIEWS,
    "potentialAction": RESERVE_ACTION,
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2"] }
  }
};

export const commercialCleaning = (location: string) => {
  const slug = `commercial-cleaning-${location.toLowerCase().replace(/ /g, '-')}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${SITE_URL}/${slug}#service`,
    "name": "Kathy Clean Houston",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Commercial Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": ADDRESS,
    "geo": GEO_COORDINATES,
    "openingHoursSpecification": OPENING_HOURS,
    "priceRange": "$$",
    "sameAs": SAME_AS_URLS,
    "url": `${SITE_URL}/${slug}`,
    "parentOrganization": { "@id": `${SITE_URL}/#business` },
    "areaServed": { "@type": "Place", "name": locationTitleCase },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Commercial Cleaning in ${locationTitleCase}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Cleaning",
            "areaServed": { "@type": "Place", "name": locationTitleCase }
          }
        }
      ]
    },
    "aggregateRating": AGGREGATE_RATING,
    "potentialAction": RESERVE_ACTION
  }
};

export const windowCleaning = (location: string) => {
  const slug = `window-cleaning-${location.toLowerCase().replace(/ /g, '-')}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${SITE_URL}/${slug}#service`,
    "name": "Kathy Clean Houston",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Window Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": ADDRESS,
    "geo": GEO_COORDINATES,
    "openingHoursSpecification": OPENING_HOURS,
    "priceRange": "$$",
    "sameAs": SAME_AS_URLS,
    "url": `${SITE_URL}/${slug}`,
    "parentOrganization": { "@id": `${SITE_URL}/#business` },
    "areaServed": { "@type": "Place", "name": locationTitleCase },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Window Cleaning in ${locationTitleCase}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window Cleaning",
            "areaServed": { "@type": "Place", "name": locationTitleCase }
          }
        }
      ]
    },
    "aggregateRating": AGGREGATE_RATING,
    "potentialAction": RESERVE_ACTION
  }
};

export const cleaningServices = (location: string) => {
  const slug = `cleaning-services-${location.toLowerCase().replace(/ /g, '-')}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${SITE_URL}/${slug}#service`,
    "name": "Kathy Clean Houston",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Residential Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": ADDRESS,
    "geo": GEO_COORDINATES,
    "openingHoursSpecification": OPENING_HOURS,
    "priceRange": "$$",
    "sameAs": SAME_AS_URLS,
    "url": `${SITE_URL}/${slug}`,
    "parentOrganization": { "@id": `${SITE_URL}/#business` },
    "areaServed": { "@type": "Place", "name": locationTitleCase },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Cleaning Services in ${locationTitleCase}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "House Cleaning",
            "areaServed": { "@type": "Place", "name": locationTitleCase }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Cleaning",
            "areaServed": { "@type": "Place", "name": locationTitleCase }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window Cleaning",
            "areaServed": { "@type": "Place", "name": locationTitleCase }
          }
        }
      ]
    },
    "aggregateRating": AGGREGATE_RATING,
    "potentialAction": RESERVE_ACTION
  }
};

export const moveInOutCleaning = (location: string) => {
  const slug = `move-in-move-out-cleaning-${location.toLowerCase().replace(/ /g, '-')}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${SITE_URL}/${slug}#service`,
    "name": "Kathy Clean Houston",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Move-In & Move-Out Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": ADDRESS,
    "geo": GEO_COORDINATES,
    "openingHoursSpecification": OPENING_HOURS,
    "priceRange": "$$",
    "sameAs": SAME_AS_URLS,
    "url": `${SITE_URL}/${slug}`,
    "parentOrganization": { "@id": `${SITE_URL}/#business` },
    "areaServed": { "@type": "Place", "name": locationTitleCase },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Move-In & Move-Out Cleaning in ${locationTitleCase}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Move-In & Move-Out Cleaning",
            "areaServed": { "@type": "Place", "name": locationTitleCase }
          }
        }
      ]
    },
    "aggregateRating": AGGREGATE_RATING,
    "potentialAction": RESERVE_ACTION
  }
};

export const postConstructionCleaning = (location: string) => {
  const slug = `post-construction-cleaning-${location.toLowerCase().replace(/ /g, '-')}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${SITE_URL}/${slug}#service`,
    "name": "Kathy Clean Houston",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Post-Construction Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": ADDRESS,
    "geo": GEO_COORDINATES,
    "openingHoursSpecification": OPENING_HOURS,
    "priceRange": "$$",
    "sameAs": SAME_AS_URLS,
    "url": `${SITE_URL}/${slug}`,
    "parentOrganization": { "@id": `${SITE_URL}/#business` },
    "areaServed": { "@type": "Place", "name": locationTitleCase },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Post-Construction Cleaning in ${locationTitleCase}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Construction Cleaning",
            "areaServed": { "@type": "Place", "name": locationTitleCase }
          }
        }
      ]
    },
    "aggregateRating": AGGREGATE_RATING,
    "potentialAction": RESERVE_ACTION
  }
};

export const recurringHouseCleaning = (location: string) => {
  const slug = `recurring-house-cleaning-${location.toLowerCase().replace(/ /g, "-")}`;
  const locationTitleCase = location.replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${SITE_URL}/${slug}#service`,
    "name": `Kathy Clean Houston — Recurring House Cleaning in ${locationTitleCase}`,
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Recurring House Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": ADDRESS,
    "geo": GEO_COORDINATES,
    "openingHoursSpecification": OPENING_HOURS,
    "priceRange": "$$",
    "sameAs": SAME_AS_URLS,
    "url": `${SITE_URL}/${slug}`,
    "parentOrganization": { "@id": `${SITE_URL}/#business` },
    "areaServed": { "@type": "Place", "name": locationTitleCase },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Recurring House Cleaning in ${locationTitleCase}`,
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Weekly House Cleaning", "areaServed": { "@type": "Place", "name": locationTitleCase } } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bi-Weekly House Cleaning", "areaServed": { "@type": "Place", "name": locationTitleCase } } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Monthly House Cleaning", "areaServed": { "@type": "Place", "name": locationTitleCase } } }
      ]
    },
    "aggregateRating": AGGREGATE_RATING,
    "potentialAction": RESERVE_ACTION
  };
};

export const deepCleaning = (location: string) => {
  const slug = `deep-cleaning-${location.toLowerCase().replace(/ /g, "-")}`;
  const locationTitleCase = location.replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${SITE_URL}/${slug}#service`,
    "name": `Kathy Clean Houston — Deep Cleaning in ${locationTitleCase}`,
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Deep Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": ADDRESS,
    "geo": GEO_COORDINATES,
    "openingHoursSpecification": OPENING_HOURS,
    "priceRange": "$$",
    "sameAs": SAME_AS_URLS,
    "url": `${SITE_URL}/${slug}`,
    "parentOrganization": { "@id": `${SITE_URL}/#business` },
    "areaServed": { "@type": "Place", "name": locationTitleCase },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Deep Cleaning in ${locationTitleCase}`,
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Cleaning", "areaServed": { "@type": "Place", "name": locationTitleCase } } }
      ]
    },
    "aggregateRating": AGGREGATE_RATING,
    "potentialAction": RESERVE_ACTION
  };
};

// ---------------------------------------------------------------------------
// Shared builders — breadcrumbs, FAQ, organization entity
// ---------------------------------------------------------------------------

type BreadcrumbItem = { name: string; path: string };

/** BreadcrumbList. "Home" is prepended automatically; pass the rest in order. */
export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ name: "Home", path: "/" }, ...items].map(
    (item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.path}`
    })
  )
});

type FaqItem = { question: string; answer: string };

/** FAQPage. Mirror the on-page <details>/<summary> Q&As so AI Overviews and
 *  rich results can extract them. Pass the page path/URL for mainEntityOfPage. */
export const buildFaqPageSchema = (items: FaqItem[], pageUrl?: string) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  ...(pageUrl
    ? {
        "mainEntityOfPage": pageUrl.startsWith("http")
          ? pageUrl
          : `${SITE_URL}${pageUrl}`
      }
    : {}),
  "mainEntity": items.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": { "@type": "Answer", "text": item.answer }
  }))
});

/** Organization entity for the About page — the page LLMs read to "know" the
 *  business. `founder` is optional and only emitted once the owner confirms a
 *  real name/title/LinkedIn (never fabricate a person). */
export const organization = (founder?: {
  name: string;
  jobTitle?: string;
  sameAs?: string[];
}) => ({
  "@context": "https://schema.org",
  // Same @id as the homepage LocalBusiness node so AI/Google resolve ONE entity
  // (was a separate #organization node = entity split).
  "@type": ["Organization", "LocalBusiness", "CleaningService"],
  "@id": `${SITE_URL}/#business`,
  "name": "Kathy Clean Houston",
  "url": SITE_URL,
  "logo": LOGO_URL,
  "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
  "email": CONTACT_EMAIL,
  "telephone": "+1 346-488-6044",
  "address": ADDRESS,
  "description":
    "Kathy Clean is a professional residential cleaning company with over 15 years of experience, serving the greater Houston area. Fully insured, bonded, and background-checked cleaning teams. 48-hour satisfaction guarantee.",
  "sameAs": SAME_AS_URLS,
  "aggregateRating": AGGREGATE_RATING,
  ...(founder
    ? {
        "founder": {
          "@type": "Person",
          "name": founder.name,
          ...(founder.jobTitle ? { "jobTitle": founder.jobTitle } : {}),
          ...(founder.sameAs ? { "sameAs": founder.sameAs } : {})
        }
      }
    : {})
});

// ---------------------------------------------------------------------------
// Pricing (Offer + UnitPriceSpecification) — makes flat-rate prices extractable
// by AI for "how much does house cleaning cost in Houston" queries. Ranges are
// per-visit and exclude TX sales tax; kept in sync with src/lib/pricing.ts.
// ---------------------------------------------------------------------------
const priceOffer = (name: string, minPrice: number, maxPrice: number) => ({
  "@type": "Offer",
  "name": name,
  "priceCurrency": "USD",
  "priceSpecification": {
    "@type": "UnitPriceSpecification",
    "priceCurrency": "USD",
    "minPrice": minPrice,
    "maxPrice": maxPrice,
    "unitText": "per visit"
  },
  "availability": "https://schema.org/InStock"
});

export const housePricingJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/resources/house-cleaning-cost-houston#pricing`,
  "name": "House Cleaning in Houston",
  "serviceType": "Residential Cleaning Services",
  "provider": { "@id": `${SITE_URL}/#business` },
  "areaServed": { "@type": "Place", "name": "Houston, TX" },
  "offers": [
    priceOffer("Recurring Weekly House Cleaning", 129, 295),
    priceOffer("Recurring Bi-Weekly House Cleaning", 139, 325),
    priceOffer("Recurring Monthly House Cleaning", 149, 355),
    priceOffer("One-Time / Single Cleaning", 199, 569),
    priceOffer("Deep Cleaning", 285, 719),
    priceOffer("Move-In / Move-Out Cleaning", 285, 719)
  ]
});

// Per-resource pricing Service schemas (spokes off the cost hub). Each makes its
// slice of the flat-rate grid extractable for the long-tail cost query it targets.
// Ranges per-visit, ex-TX-tax, synced with src/lib/pricing.ts.
const pricingService = (
  pagePath: string,
  name: string,
  areaName: string,
  offers: ReturnType<typeof priceOffer>[]
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${pagePath}#pricing`,
  "name": name,
  "serviceType": "Residential Cleaning Services",
  "provider": { "@id": `${SITE_URL}/#business` },
  "areaServed": { "@type": "Place", "name": areaName },
  "offers": offers
});

export const recurringPricingJsonLd = () =>
  pricingService(
    "/resources/recurring-cleaning-cost-houston",
    "Recurring House Cleaning in Houston",
    "Houston, TX",
    [
      priceOffer("Weekly Recurring Cleaning", 129, 295),
      priceOffer("Bi-Weekly Recurring Cleaning", 139, 325),
      priceOffer("Monthly Recurring Cleaning", 149, 355)
    ]
  );

export const apartmentPricingJsonLd = () =>
  pricingService(
    "/resources/apartment-cleaning-cost-houston",
    "Apartment Cleaning in Houston",
    "Houston, TX",
    [
      priceOffer("Bi-Weekly Apartment Cleaning", 139, 149),
      priceOffer("Weekly Apartment Cleaning", 129, 139),
      priceOffer("One-Time Apartment Cleaning", 199, 229),
      priceOffer("Apartment Deep Cleaning", 285, 329),
      priceOffer("Apartment Move-Out Cleaning", 285, 329)
    ]
  );

export const katyPricingJsonLd = () =>
  pricingService(
    "/resources/house-cleaning-cost-katy",
    "House Cleaning in Katy, TX",
    "Katy, TX",
    [
      priceOffer("Recurring Weekly House Cleaning", 129, 295),
      priceOffer("Recurring Bi-Weekly House Cleaning", 139, 325),
      priceOffer("Recurring Monthly House Cleaning", 149, 355),
      priceOffer("One-Time / Single Cleaning", 199, 569),
      priceOffer("Deep Cleaning", 285, 719),
      priceOffer("Move-In / Move-Out Cleaning", 285, 719)
    ]
  );

// HowTo for the 3-step booking process shown on /house-cleaning-houston.
export const houseProcessHowToJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to book house cleaning with Kathy Clean Houston",
  "description":
    "Three simple steps to schedule professional house cleaning in Houston.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Get a Quote",
      "text": "Request a free flat-rate quote online or by phone. We confirm your home size and service type to give an exact price."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Get Matched",
      "text": "We schedule your trusted cleaning team and confirm a date and time that works for you."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Enjoy a Clean Home",
      "text": "Your team cleans while you're home or away. Every visit is backed by a 48-hour satisfaction guarantee."
    }
  ]
});
