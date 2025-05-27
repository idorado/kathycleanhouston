import OurServices from "@/components/sections/our-services"

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      <OurServices />
    </main>
  )
}

export const metadata = {
  title: 'Our Services | Residential & Commercial Cleaning in Denver',
  description: 'Explore our comprehensive range of residential and commercial cleaning services in Denver. Professional, reliable, and backed by our 48-hour satisfaction guarantee.',
  openGraph: {
    title: 'Our Services | Residential & Commercial Cleaning in Denver',
    description: 'Explore our comprehensive range of residential and commercial cleaning services in Denver. Professional, reliable, and backed by our 48-hour satisfaction guarantee.',
    url: 'https://www.kathyclean.com/our-services',
    siteName: 'Kathy Clean',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kathyclean.com/our-services',
  },
};
