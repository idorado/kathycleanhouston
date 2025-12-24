import OurServices from "@/components/sections/our-services"
import { canonicalPath } from "@/lib/canonical";

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      <OurServices />
    </main>
  )
}

export const metadata = {
  title: 'Our Services | Residential & Commercial Cleaning in Houston',
  description: 'Explore our comprehensive range of residential and commercial cleaning services in Houston. Professional, reliable, and backed by our 48-hour satisfaction guarantee.',
  openGraph: {
    title: 'Our Services | Residential & Commercial Cleaning in Houston',
    description: 'Explore our comprehensive range of residential and commercial cleaning services in Houston. Professional, reliable, and backed by our 48-hour satisfaction guarantee.',
    url: canonicalPath('our-services'),
    siteName: "Kathy Clean Houston",
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: canonicalPath('our-services'),
  },
};
