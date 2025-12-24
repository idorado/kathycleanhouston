import { Metadata } from 'next';

export const homePageMetadata: Metadata = {
  title: "Residential & Commercial Cleaning in Houston | Kathy Clean Houston",
  description: "Top-rated cleaning in Houston & nearby, serving Harris County, TX. Residential & commercial cleaning. 48h guarantee",
  icons: [{ rel: "icon", url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomaYo5lyrN0W8yorQH6lnDudV4OjgIFLEC2YpM" }],
  keywords: "cleaning, Houston, residential, commercial, 48h guarantee",
  alternates: {
    canonical: "https://kathycleanhouston.com/",
    languages: {
      "en-US": "https://kathycleanhouston.com/"
    }
  },
  other: {
    'application-ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Kathy Clean Houston",
      "image": "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOPRZ6SALSiAq1CzRhFvEn4ayoQ0bUZewBp3g",
      "logo": "https://kathycleanhouston.com/images/logo-nav.webp",
      "email": "info@kathyclean.com",
      "serviceType": "Residential Cleaning Services",
      "@id": "https://kathycleanhouston.com",
      "url": "https://kathycleanhouston.com",
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
      ],
      "priceRange": "$$",
      "areaServed": [
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
        { "@type": "Place", "name": "Washington Ave. / Memorial Park" }
      ],
      "sameAs": []
    })
  }
};
