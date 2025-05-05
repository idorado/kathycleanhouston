import { notFound } from 'next/navigation';
import CommercialServiceComponent from "@/components/CommercialServiceComponent";
import WindowsServiceComponent from "@/components/WindowsServiceComponent";
import ResidentialServiceComponent from "@/components/ResidentialServiceComponent";

// Define services and locations
const services = [
  { id: 'house-cleaning', name: 'House Cleaning', description: 'Professional residential cleaning services for your home.' },
  { id: 'commercial-cleaning', name: 'Commercial Cleaning', description: 'Comprehensive cleaning solutions for businesses and commercial spaces.' },
  { id: 'window-cleaning', name: 'Window Cleaning', description: 'Crystal clear windows inside and out for homes and businesses.' },
  { id: 'pressure-washing', name: 'Pressure Washing', description: 'High-powered cleaning for exterior surfaces.' },
  { id: 'gutter-cleaning', name: 'Gutter Cleaning', description: 'Thorough cleaning and maintenance of gutters and downspouts.' },
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const {slug} = await params;
  const { service, location } = getServiceAndLocation(slug);

  if (service?.id === 'house-cleaning') {
    return {
      title: `House Cleaning ${location ? ` in ${location.name}` : ''} | Kathy Clean`,
      description: `Looking for house cleaning near you in ${location?.name}? Kathy Clean offers trusted and affordable services. Book a free quote today.`,
    };
  }

  if (service?.id === 'commercial-cleaning') {
    return {
      title: `Commercial Cleaning ${location ? ` in ${location.name}` : ''} | Kathy Clean`,
      description: `Looking for commercial cleaning near you in ${location?.name}? Kathy Clean offers trusted and affordable services. Book a free quote today.`,
    };
  }

  if (service?.id === 'window-cleaning') {
    return {
      title: `Window Cleaning ${location ? ` in ${location.name}` : ''} | Kathy Clean`,
      description: `Looking for window cleaning near you in ${location?.name}? Kathy Clean offers trusted and affordable services. Book a free quote today.`,
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
