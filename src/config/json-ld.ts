const SITE_URL = "https://kathycleanhouston.com";
const LOGO_URL = `${SITE_URL}/images/logo-nav.webp`;
const CONTACT_EMAIL = "info@kathyclean.com";
const GBP_URL = process.env.NEXT_PUBLIC_GBP_URL;

const SAME_AS_URLS: string[] = [
  GBP_URL,
  "https://www.yelp.com/biz/kathy-clean-houston",
  "https://www.facebook.com/kathycleanhouston",
  "https://www.instagram.com/kathycleanhouston",
].filter((url): url is string => Boolean(url));

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
];

const REVIEWS = [
  {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Person", "name": "Steve M." },
    "datePublished": "2025-04-22",
    "reviewBody": "Service is outstanding, the help is professional, courteous and always on time for scheduled cleaning. I would give Kathy Clean Houston my highest recommendation, you'll be very pleased!"
  },
  {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Person", "name": "Ximena V." },
    "datePublished": "2025-03-10",
    "reviewBody": "Nubia does an amazing job. She is meticulous and always willing to do anything we ask. We enjoy her great work as well as efficiency. We highly recommend Kathy Clean Houston!"
  },
  {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Person", "name": "Donna W." },
    "datePublished": "2025-03-10",
    "reviewBody": "I was referred to Kathy Clean Houston by a neighbor. They were very professional, and I was able to schedule an appointment within just a few days. The person who came did an absolutely AMAZING job. Very professional, and I was truly impressed."
  },
  {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Person", "name": "Rik W." },
    "datePublished": "2025-03-10",
    "reviewBody": "I've used Kathy Clean Houston and am impressed with how the service professionals are personable and have a high attention to detail. The scheduling support is great and works hard to accommodate special requests. Highly recommend Kathy Clean Houston."
  },
  {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "author": { "@type": "Person", "name": "Kerri N." },
    "datePublished": "2025-03-10",
    "reviewBody": "Want the best cleaning service in town? Then you want to call Kathy Clean Houston!! They will provide you with outstanding service, and they are very easy to work with."
  }
];

const AGGREGATE_RATING = {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "14",
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
  "review": REVIEWS
});

export const website = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": "Kathy Clean Houston",
  "publisher": { "@id": `${SITE_URL}/#business` },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
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
    "aggregateRating": AGGREGATE_RATING
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
    "aggregateRating": AGGREGATE_RATING
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
    "aggregateRating": AGGREGATE_RATING
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
    "aggregateRating": AGGREGATE_RATING
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
    "aggregateRating": AGGREGATE_RATING
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
    "aggregateRating": AGGREGATE_RATING
  }
};
