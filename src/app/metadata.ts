import { Metadata } from 'next';

export const homePageMetadata: Metadata = {
  title: "Residential & Commercial Cleaning in Houston | Luchos Cleaning",
  description: "Top-rated cleaning in Houston & nearby, serving Harris County, TX. Residential & commercial cleaning. 48h guarantee",
  icons: [{ rel: "icon", url: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomaYo5lyrN0W8yorQH6lnDudV4OjgIFLEC2YpM" }],
  keywords: "cleaning, Houston, residential, commercial, 48h guarantee",
  alternates: {
    canonical: "https://luchoscleaning.com/",
    languages: {
      "en-US": "https://luchoscleaning.com/"
    }
  },
  other: {
    'application-ld+json': JSON.stringify({
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
    })
  }
};
