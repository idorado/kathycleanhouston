import type { Metadata } from "next";
import ResidentialServiceComponent from "@/components/ResidentialServiceComponent";

const OG_IMAGE =
  "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOs088CLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu";

export const metadata: Metadata = {
  title: "House Cleaning Houston, TX — Recurring, Deep & Move-Out",
  description:
    "Professional house cleaning in Houston, TX and across Harris County — the same trusted, insured team every visit. Recurring, deep, and move-in/out cleaning, flat-rate from $109/visit. Get a free quote.",
  openGraph: {
    title: "House Cleaning Houston, TX — Recurring, Deep & Move-Out",
    description:
      "Professional house cleaning in Houston, TX and across Harris County — the same trusted, insured team every visit. Recurring, deep, and move-in/out cleaning. Get a free quote.",
    url: "/house-cleaning-houston",
    siteName: "Kathy Clean Houston",
    locale: "en_US",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Kathy Clean Houston — house cleaning services" }],
  },
  alternates: {
    canonical: "/house-cleaning-houston",
  },
};

export default function HouseCleaningHouston() {
  // Houston-specific residential/house cleaning page
  // Ensures headings and copy render for Houston via the component's `location` prop.
  return (
    <ResidentialServiceComponent
      location="Houston"
      schemaCanonicalPath="/house-cleaning-houston"
    />
  );
}
