import ResidentialServiceComponent from "@/components/ResidentialServiceComponent";

export default function HouseCleaningService() {
  return <ResidentialServiceComponent location="Denver" />;
}

export const metadata = {
  title: 'House Cleaning & Maid Service with Satisfaction Guarantee | Kathy Clean',
  description: 'Professional house cleaning and maid services with a satisfaction guarantee. Serving Denver and surrounding areas with top-quality residential cleaning.',
  openGraph: {
    title: 'House Cleaning & Maid Service with Satisfaction Guarantee | Kathy Clean',
    description: 'Professional house cleaning and maid services with a satisfaction guarantee. Serving Denver and surrounding areas with top-quality residential cleaning.',
    url: 'https://www.kathyclean.com/services/house-cleaning-and-maid-service-with-satisfaction-guarantee',
    siteName: 'Kathy Clean',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kathyclean.com/services/house-cleaning-and-maid-service-with-satisfaction-guarantee',
  },
};
