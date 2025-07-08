import { notFound } from 'next/navigation';
import CommercialServiceComponent from "@/components/CommercialServiceComponent";
import WindowsServiceComponent from "@/components/WindowsServiceComponent";
import ResidentialServiceComponent from "@/components/ResidentialServiceComponent";
import type { Metadata } from "next";

// Define services and locations
const services = [
  { id: 'house-cleaning', name: 'House Cleaning', description: 'Professional residential cleaning services for your home.' },
  { id: 'commercial-cleaning', name: 'Commercial Cleaning', description: 'Comprehensive cleaning solutions for businesses and commercial spaces.' },
  { id: 'window-cleaning', name: 'Window Cleaning', description: 'Crystal clear windows inside and out for homes and businesses.' },
];

const locations = [
  { id: 'denver', name: 'Denver', description: 'Serving the greater Denver metropolitan area.' },
  { id: 'parker', name: 'Parker', description: 'Quality cleaning services throughout Parker.' },
  { id: 'castle-rock', name: 'Castle Rock', description: 'Trusted cleaning professionals in Castle Rock.' },
  { id: 'lone-tree', name: 'Lone Tree', description: 'Dependable cleaning services for Lone Tree residents.' },
  { id: 'highlands-ranch', name: 'Highlands Ranch', description: 'Comprehensive cleaning solutions in Highlands Ranch.' },
  { id: 'centennial', name: 'Centennial', description: 'Professional cleaning services for Centennial homes and businesses.' },
  { id: 'central-park', name: 'Central Park', description: 'Dedicated cleaning services for the Central Park neighborhood.' },
  { id: 'hilltop', name: 'Hilltop', description: 'Premium cleaning services for Hilltop residents.' },
  { id: 'washington-park', name: 'Washington Park', description: 'Quality cleaning for the Washington Park area.' },
  { id: 'cherry-creek', name: 'Cherry Creek', description: 'Expert cleaning services in Cherry Creek.' },
  { id: 'university-park', name: 'University Park', description: 'Reliable cleaning for University Park homes and businesses.' },
  { id: 'highland', name: 'Highland', description: 'Comprehensive cleaning solutions for Highland residents.' },
  { id: 'englewood', name: 'Englewood', description: 'Expert cleaning services for homes and businesses in Englewood.' },
  { id: 'aurora', name: 'Aurora', description: 'Professional cleaning for Aurora residents and businesses.' },
  { id: 'lakewood', name: 'Lakewood', description: 'Reliable and thorough cleaning services in Lakewood.' },
  { id: 'littleton', name: 'Littleton', description: 'Top-rated house cleaning in Littleton.' },
  { id: 'sheridan', name: 'Sheridan', description: 'Affordable cleaning for Sheridan homes and offices.' },
  { id: 'greenwood-village', name: 'Greenwood Village', description: 'Premium cleaning services for Greenwood Village.' },
  { id: 'cherry-hills-village', name: 'Cherry Hills Village', description: 'Exceptional cleaning services for Cherry Hills Village.' },
  { id: 'roxborough-park', name: 'Roxborough Park', description: 'Trusted cleaning for Roxborough Park homes.' },
  { id: 'ken-caryl', name: 'Ken Caryl', description: 'Professional cleaning solutions in Ken Caryl.' },
  { id: 'glendale', name: 'Glendale', description: 'Top-quality cleaning for Glendale residents.' },
  { id: 'bow-mar', name: 'Bow Mar', description: 'Reliable and detailed cleaning in Bow Mar.' },
  { id: 'the-pinery', name: 'The Pinery', description: 'Comprehensive cleaning services for The Pinery.' },
  { id: 'watkins', name: 'Watkins', description: 'Affordable and expert cleaning in Watkins.' },
];

function parseSlug(slug: string) {
  const parts = slug.split('-');
  let serviceEndIndex = 1;
  if (['house', 'commercial', 'window'].includes(parts[0] || '')) {
    serviceEndIndex = 2;
  }
  const serviceId = parts.slice(0, serviceEndIndex).join('-');
  const locationId = parts.slice(serviceEndIndex).join('-');
  return { serviceId, locationId };
}

function getServiceAndLocation(slug: string) {
  const { serviceId, locationId } = parseSlug(slug);
  const service = services.find(s => s.id === serviceId);
  const location = locations.find(l => l.id === locationId);
  return { service, location };
}
// Generate static params for dynamic routes
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return services.flatMap(service => locations.map(location => ({
    slug: `${service.id}-${location.id}`,
  })));
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const {slug} = await params;
  const { service, location } = getServiceAndLocation(slug);

  if (service?.id === 'house-cleaning') {
    return {
      title: `House Cleaning ${location ? ` in ${location.name}` : ''} | Kathy Clean`,
      description: `Looking for house cleaning near you in ${location?.name}? Kathy Clean offers trusted and affordable services. Book a free quote today.`,
      alternates: {
        canonical: `https://www.kathyclean.com/house-cleaning-${location?.id}`
      },
      openGraph: {
        title: `House Cleaning ${location ? ` in ${location.name}` : ''} | Kathy Clean`,
        description: `Looking for house cleaning near you in ${location?.name}? Kathy Clean offers trusted and affordable services. Book a free quote today.`,
        url: `https://www.kathyclean.com/house-cleaning-${location?.id}`,
        siteName: 'Kathy Clean',
        locale: 'en_US',
        type: 'website',
      },
    };
  }

  if (service?.id === 'commercial-cleaning') {
    return {
      title: `Commercial Cleaning Services in ${location?.name || 'Denver'} | Kathy Clean`,
      description: `Professional commercial cleaning services${location ? ` in ${location.name}` : ''}. Trusted by businesses across the area.`,
      alternates: {
        canonical: `https://www.kathyclean.com/commercial-cleaning-${location?.id}`
      },
      openGraph: {
        title: `Commercial Cleaning Services in ${location?.name || 'Denver'} | Kathy Clean`,
        description: `Professional commercial cleaning services${location ? ` in ${location.name}` : ''}. Trusted by businesses across the area.`,
        url: `https://www.kathyclean.com/commercial-cleaning-${location?.id}`,
        siteName: 'Kathy Clean',
        locale: 'en_US',
        type: 'website',
      },
    };
  }

  if (service?.id === 'window-cleaning') {
    return {
      title: `Window Cleaning ${location ? ` in ${location.name}` : ''} | Professional Window Cleaners`,
      description: `If you're looking for window cleaning companies in ${location?.name || 'Denver'}, CO, look no further than Kathy Clean Window Cleaning. Learn more about our services.`,
      alternates: {
        canonical: `https://www.kathyclean.com/window-cleaning-${location?.id}`
      },
      openGraph: {
        title: `Window Cleaning in ${location?.name || 'Denver'} | Kathy Clean`,
        description: `If you're looking for window cleaning companies in ${location?.name || 'Denver'}, CO, look no further than Kathy Clean Window Cleaning. Learn more about our services.`,
        url: `https://www.kathyclean.com/window-cleaning-${location?.id}`,
        siteName: 'Kathy Clean',
        locale: 'en_US',
        type: 'website',
      },
    };
  }


  return {
    title: '404 Not Found | Kathy Clean',
    description: 'Page not found',
  };
} 

export default async function ServiceLocationPage({ params }: { params: Promise<{ slug: string }> }) {
  // Check if slug is valid
  const {slug} = await params;
  console.log(slug);
  if (!parseSlug(slug)) {
    notFound();
  }
  
  const { service, location } = getServiceAndLocation(slug);
 

  if (service?.id === 'house-cleaning'){
    return <ResidentialServiceComponent location={location?.name || ''} />;
  }

  if (service?.id === 'commercial-cleaning'){
    return <CommercialServiceComponent location={location?.name || ''} />
  }

  if (service?.id === 'window-cleaning'){
    return <WindowsServiceComponent location={location?.name || ''} />
  }



  return notFound();
}
