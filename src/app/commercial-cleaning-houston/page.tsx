import type { Metadata } from "next";
import CommercialServiceComponent from "@/components/CommercialServiceComponent";

export const metadata: Metadata = {
  title: "Commercial Cleaning in Houston, TX",
  description:
    "Professional commercial cleaning in Houston, TX and throughout Harris County. Call (346) 488-6044 for reliable office and business cleaning tailored to your needs.",
  alternates: {
    canonical: "/commercial-cleaning-houston",
  },
};

export default function CommercialCleaningHouston() {
  // Houston-specific commercial cleaning page
  return <CommercialServiceComponent location="Houston" />;
}
