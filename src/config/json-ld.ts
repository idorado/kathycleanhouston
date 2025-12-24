const SITE_URL = "https://kathycleanhouston.com";
const LOGO_URL = `${SITE_URL}/images/logo-nav.webp`;
const CONTACT_EMAIL = "info@kathyclean.com";
const AREA_SERVED = [
  { "@type": "Place", "name": "Houston, TX" },
  { "@type": "Place", "name": "Houston" },
  { "@type": "Place", "name": "Spring Branch" },
  { "@type": "Place", "name": "Spring Branch Central" },
  { "@type": "Place", "name": "Spring Branch East" },
  { "@type": "Place", "name": "Greater Heights" },
  { "@type": "Place", "name": "Greenway / Upper Kirby Area" },
  { "@type": "Place", "name": "Memorial" },
  { "@type": "Place", "name": "Greater Uptown" },
  { "@type": "Place", "name": "Bellaire" },
  { "@type": "Place", "name": "Medical Center Area" },
  { "@type": "Place", "name": "The Memorial Villages" },
  { "@type": "Place", "name": "River Oaks" },
  { "@type": "Place", "name": "Mid West" },
  { "@type": "Place", "name": "Briar Forest" },
  { "@type": "Place", "name": "West University Place" },
  { "@type": "Place", "name": "Washington Ave. / Memorial Park" },
];

export const home = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Kathy Clean Houston",
  "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
  "logo": LOGO_URL,
  "email": CONTACT_EMAIL,
  "serviceType": "Residential Cleaning Services",
  "@id": SITE_URL,
  "url": SITE_URL,
  "telephone": "+1 346-488-6044",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.7604,
    "longitude": -95.3698
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      "opens": "07:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday", "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "priceRange": "$$",
  "areaServed": AREA_SERVED,
  "sameAs": []
});

export const houseCleaning = (location: string) => {
  const slug = `house-cleaning-${location.toLowerCase().replace(/ /g, '-')}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kathy Clean Houston",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Residential Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7604,
      "longitude": -95.3698
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": [],
    "@id": `${SITE_URL}/${slug}`,
    "url": `${SITE_URL}/${slug}`,
    "areaServed": AREA_SERVED,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `House Cleaning in ${locationTitleCase}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "House Cleaning",
            "areaServed": {
              "@type": "Place",
              "name": locationTitleCase
            }
          }
        }
      ]
    }
  }
};

export const commercialCleaning = (location: string) => {
  const slug = `commercial-cleaning-${location.toLowerCase().replace(/ /g, '-')}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kathy Clean Houston",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Residential Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7604,
      "longitude": -95.3698
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": [],
    "@id": `${SITE_URL}/${slug}`,
    "url": `${SITE_URL}/${slug}`,
    "areaServed": AREA_SERVED,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Commercial Cleaning in ${locationTitleCase}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Cleaning",
            "areaServed": {
              "@type": "Place",
              "name": locationTitleCase
            }
          }
        }
      ]
    }
  }
};

export const windowCleaning = (location: string) => {
  const slug = `window-cleaning-${location.toLowerCase().replace(/ /g, '-')}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kathy Clean Houston",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Residential Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7604,
      "longitude": -95.3698
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": [],
    "@id": `${SITE_URL}/${slug}`,
    "url": `${SITE_URL}/${slug}`,
    "areaServed": AREA_SERVED,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Window Cleaning in ${locationTitleCase}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window Cleaning",
            "areaServed": {
              "@type": "Place",
              "name": locationTitleCase
            }
          }
        }
      ]
    }
  }
};

export const cleaningServices = (location: string) => {
  const slug = `cleaning-services-${location.toLowerCase().replace(/ /g, '-')}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kathy Clean Houston",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Residential Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7604,
      "longitude": -95.3698
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": [],
    "@id": `${SITE_URL}/${slug}`,
    "url": `${SITE_URL}/${slug}`,
    "areaServed": AREA_SERVED,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Cleaning Services in ${locationTitleCase}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "House Cleaning",
            "areaServed": {
              "@type": "Place",
              "name": locationTitleCase
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Cleaning",
            "areaServed": {
              "@type": "Place",
              "name": locationTitleCase
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window Cleaning",
            "areaServed": {
              "@type": "Place",
              "name": locationTitleCase
            }
          }
        }
      ]
    }
  }
};

export const moveInOutCleaning = (location: string) => {
  const slug = `move-in-move-out-cleaning-${location.toLowerCase().replace(/ /g, '-')}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kathy Clean Houston",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Residential Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7604,
      "longitude": -95.3698
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": [],
    "@id": `${SITE_URL}/${slug}`,
    "url": `${SITE_URL}/${slug}`,
    "areaServed": AREA_SERVED,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Move-In & Move-Out Cleaning in ${locationTitleCase}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Move-In & Move-Out Cleaning",
            "areaServed": {
              "@type": "Place",
              "name": locationTitleCase
            }
          }
        }
      ]
    }
  }
};

export const postConstructionCleaning = (location: string) => {
  const slug = `post-construction-cleaning-${location
    .toLowerCase()
    .replace(/ /g, '-')}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kathy Clean Houston",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "logo": LOGO_URL,
    "email": CONTACT_EMAIL,
    "serviceType": "Residential Cleaning Services",
    "telephone": "+1 346-488-6044",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7604,
      "longitude": -95.3698
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": [],
    "@id": `${SITE_URL}/${slug}`,
    "url": `${SITE_URL}/${slug}`,
    "areaServed": AREA_SERVED,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Post-Construction Cleaning in ${locationTitleCase}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Construction Cleaning",
            "areaServed": {
              "@type": "Place",
              "name": locationTitleCase
            }
          }
        }
      ]
    }
  }
};

