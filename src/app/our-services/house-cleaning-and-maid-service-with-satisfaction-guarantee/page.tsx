import ResidentialServiceComponent from "@/components/ResidentialServiceComponent";
import { canonicalPath } from "@/lib/canonical";

export default function HouseCleaningService() {
  return <ResidentialServiceComponent location="Houston" />;
}

export const metadata = {
  title: "House Cleaning & Maid Service with Satisfaction Guarantee | Kathy Clean Houston",
  description: 'Professional house cleaning and maid services with a satisfaction guarantee. Serving Houston and surrounding areas with top-quality residential cleaning.',
  openGraph: {
    title: "House Cleaning & Maid Service with Satisfaction Guarantee | Kathy Clean Houston",
    description: 'Professional house cleaning and maid services with a satisfaction guarantee. Serving Houston and surrounding areas with top-quality residential cleaning.',
    url: canonicalPath('our-services', 'house-cleaning-and-maid-service-with-satisfaction-guarantee'),
    siteName: "Kathy Clean Houston",
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: canonicalPath('our-services', 'house-cleaning-and-maid-service-with-satisfaction-guarantee'),
  },
};
