import type { Metadata } from "next";
import ResidentialServiceComponent from "@/components/ResidentialServiceComponent";

export const metadata: Metadata = {
  title: "House Cleaning in Houston, TX",
  description:
    "Residential house cleaning in Houston, TX and throughout Harris County. We offer recurring cleaning, deep cleaning, move-in/out, and post-construction services. Call (346) 488-6044 for a free quote.",
  openGraph: {
    title: "House Cleaning in Houston, TX",
    description:
      "Residential house cleaning in Houston, TX and throughout Harris County. We offer recurring cleaning, deep cleaning, move-in/out, and post-construction services. Call (346) 488-6044 for a free quote.",
    url: "/house-cleaning-houston",
    siteName: "Kathy Clean Houston",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/house-cleaning-houston",
  },
};

export default function HouseCleaningHouston() {
  // Houston-specific residential/house cleaning page
  // Ensures headings and copy render for Houston via the component's `location` prop.
  return <ResidentialServiceComponent location="Houston" />;
}
