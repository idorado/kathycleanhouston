export const home = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Luchos Cleaning",
  "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
  "@id": "https://luchoscleaning.com",
  "url": "https://luchoscleaning.com",
  "telephone": "+1-303-681-2559",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7500 E Arapahoe Rd #200",
    "addressLocality": "Centennial",
    "addressRegion": "CO",
    "postalCode": "80112",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.5952,
    "longitude": -104.9003
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
  "areaServed": [
    { "@type": "Place", "name": "Harris County" },
    { "@type": "Place", "name": "Houston" },
    { "@type": "Place", "name": "Spring Branch" },
    { "@type": "Place", "name": "Houston Heights" },
    { "@type": "Place", "name": "Upper Kirby" },
    { "@type": "Place", "name": "Memorial" },
    { "@type": "Place", "name": "Uptown" },
    { "@type": "Place", "name": "Bellaire" },
    { "@type": "Place", "name": "Medical Center Area" }
  ],
  "sameAs": [
    "https://www.facebook.com/kathyclean",
    "https://www.instagram.com/kathyclean",
    "https://g.co/kgs/tifVeFC"
  ]
});

export const houseCleaning = (location: string) => {
  const slug = `house-cleaning-${location.toLowerCase().replace(/ /g, '-')}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Luchos Cleaning",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "telephone": "+1-303-681-2559",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7500 E Arapahoe Rd #200",
      "addressLocality": "Centennial",
      "addressRegion": "CO",
      "postalCode": "80112",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.5952,
      "longitude": -104.9003
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
    "sameAs": [
      "https://www.facebook.com/kathyclean",
      "https://www.instagram.com/kathyclean",
      "https://g.co/kgs/tifVeFC"
    ],
    "@id": `https://luchoscleaning.com/${slug}`,
    "url": `https://luchoscleaning.com/${slug}`,
    "areaServed": {
      "@type": "Place",
      "name": locationTitleCase
    },
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
    "name": "Luchos Cleaning",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "telephone": "+1-303-681-2559",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7500 E Arapahoe Rd #200",
      "addressLocality": "Centennial",
      "addressRegion": "CO",
      "postalCode": "80112",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.5952,
      "longitude": -104.9003
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
    "sameAs": [
      "https://www.facebook.com/kathyclean",
      "https://www.instagram.com/kathyclean",
      "https://g.co/kgs/tifVeFC"
    ],
    "@id": `https://luchoscleaning.com/${slug}`,
    "url": `https://luchoscleaning.com/${slug}`,
    "areaServed": {
      "@type": "Place",
      "name": locationTitleCase
    },
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
    "name": "Luchos Cleaning",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "telephone": "+1-303-681-2559",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7500 E Arapahoe Rd #200",
      "addressLocality": "Centennial",
      "addressRegion": "CO",
      "postalCode": "80112",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.5952,
      "longitude": -104.9003
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
    "sameAs": [
      "https://www.facebook.com/kathyclean",
      "https://www.instagram.com/kathyclean",
      "https://g.co/kgs/tifVeFC"
    ],
    "@id": `https://luchoscleaning.com/${slug}`,
    "url": `https://luchoscleaning.com/${slug}`,
    "areaServed": {
      "@type": "Place",
      "name": locationTitleCase
    },
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
    "name": "Luchos Cleaning",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "telephone": "+1-303-681-2559",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7500 E Arapahoe Rd #200",
      "addressLocality": "Centennial",
      "addressRegion": "CO",
      "postalCode": "80112",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.5952,
      "longitude": -104.9003
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
    "sameAs": [
      "https://www.facebook.com/kathyclean",
      "https://www.instagram.com/kathyclean",
      "https://g.co/kgs/tifVeFC"
    ],
    "@id": `https://luchoscleaning.com/${slug}`,
    "url": `https://luchoscleaning.com/${slug}`,
    "areaServed": {
      "@type": "Place",
      "name": locationTitleCase
    },
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
    "name": "Luchos Cleaning",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "telephone": "+1-303-681-2559",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7500 E Arapahoe Rd #200",
      "addressLocality": "Centennial",
      "addressRegion": "CO",
      "postalCode": "80112",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.5952,
      "longitude": -104.9003
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
    "sameAs": [
      "https://www.facebook.com/kathyclean",
      "https://www.instagram.com/kathyclean",
      "https://g.co/kgs/tifVeFC"
    ],
    "@id": `https://luchoscleaning.com/${slug}`,
    "url": `https://luchoscleaning.com/${slug}`,
    "areaServed": {
      "@type": "Place",
      "name": locationTitleCase
    },
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
  const slug = `post-construction-cleaning-${location.toLowerCase().replace(/ /g, '-')}`;
  const locationTitleCase = location.replace(/\b\w/g, l => l.toUpperCase());

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kathy Clean",
    "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
    "telephone": "+1-303-681-2559",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7500 E Arapahoe Rd #200",
      "addressLocality": "Centennial",
      "addressRegion": "CO",
      "postalCode": "80112",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.5952,
      "longitude": -104.9003
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
    "sameAs": [
      "https://www.facebook.com/kathyclean",
      "https://www.instagram.com/kathyclean",
      "https://g.co/kgs/tifVeFC"
    ],
    "@id": `https://www.kathyclean.com/${slug}`,
    "url": `https://www.kathyclean.com/${slug}`,
    "areaServed": {
      "@type": "Place",
      "name": locationTitleCase
    },
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

