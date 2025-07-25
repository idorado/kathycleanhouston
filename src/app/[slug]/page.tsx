import { notFound } from 'next/navigation';
import type { Metadata } from "next";

import ResidentialServiceComponent from "@/components/ResidentialServiceComponent";
import CommercialServiceComponent from '@/components/CommercialServiceComponent';
import WindowsServiceComponent from '@/components/WindowsServiceComponent';
import { MoveInMoveOutServiceComponent } from '@/components/MoveInMoveOutServiceComponent';
import PostConstructionServiceComponent from '@/components/PostConstructionServiceComponent';
import CleaningServicesComponent from '@/components/CleaningServicesComponent';

// Define services and locations
const services = [
  { id: 'cleaning-services', name: 'Cleaning Services', description: 'Professional cleaning services for your home or business.' },
  { id: 'house-cleaning', name: 'House Cleaning', description: 'Professional residential cleaning services for your home.' },
  { id: 'commercial-cleaning', name: 'Commercial Cleaning', description: 'Comprehensive cleaning solutions for businesses and commercial spaces.' },
  { id: 'window-cleaning', name: 'Window Cleaning', description: 'Crystal clear windows inside and out for homes and businesses.' },
  { id: 'move-in-move-out', name: 'Move In Move Out', description: 'Crystal clear windows inside and out for homes and businesses.' },
  { id: 'post-construction', name: 'Post Construction', description: 'Crystal clear windows inside and out for homes and businesses.' },
];

const locations = [
  { id: 'denver', name: 'Denver', description: 'Serving the greater Denver metropolitan area.' },
  { id: 'parker', name: 'Parker', description: 'Quality cleaning services throughout Parker.' },
  { id: 'castle-rock', name: 'Castle Rock', description: 'Trusted cleaning professionals in Castle Rock.' },
  { id: 'lone-tree', name: 'Lone Tree', description: 'Dependable cleaning services for Lone Tree residents.' },
  { id: 'englewood', name: 'Englewood', description: 'Professional house cleaning and maid services in Englewood, CO. Enjoy a spotless home with our trusted cleaning services. Satisfaction guaranteed!'},
  { id: 'highlands-ranch', name: 'Highlands Ranch', description: 'Comprehensive cleaning solutions in Highlands Ranch.' },
  { id: 'centennial', name: 'Centennial', description: 'Professional cleaning services for Centennial homes and businesses.' },
  { id: 'central-park', name: 'Central Park', description: 'Dedicated cleaning services for the Central Park neighborhood.' },
  { id: 'hilltop', name: 'Hilltop', description: 'Premium cleaning services for Hilltop residents.' },
  { id: 'washington-park', name: 'Washington Park', description: 'Quality cleaning for the Washington Park area.' },
  { id: 'greenwood-village', name: 'Greenwood Village', description: 'Professional house cleaning and maid services in Greenwood Village, CO. Enjoy a spotless home with our trusted cleaning services. Satisfaction guaranteed!'},
  { id: 'littleton', name: 'Littleton', description: 'Professional house cleaning and maid services in Littleton, CO. Enjoy a spotless home with our trusted cleaning services. Satisfaction guaranteed!'},
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

function parseSlug(slug: string): { serviceId: string | null; locationId: string | null } {
  for (const service of services) {
    if (slug.startsWith(service.id)) {
      const locationId = slug.substring(service.id.length + 1);
      return { serviceId: service.id, locationId };
    }
  }
  return { serviceId: null, locationId: null };
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

  if (!service) {
    return {
      title: 'Service Not Found | Kathy Clean',
      description: 'The requested service could not be found.',
    };
  }

  const locationName = location ? location.name : 'Denver';
  const locationId = location?.id || 'denver';
  
  // Custom title and description for house cleaning service
  const isHouseCleaning = service.id === 'house-cleaning';
  const title = isHouseCleaning 
    ? `House Cleaning in ${locationName} | Kathy Clean`
    : `Professional ${service.name} in ${locationName} | Kathy Clean`;
    
  const description = isHouseCleaning
    ? `Reliable house cleaning in ${locationName}: recurring, deep, and move-out services. Trusted team, spotless results. Schedule your free estimate today!`
    : `Professional ${service.name.toLowerCase()} services in ${locationName}, CO. ${service.description}`;
    
  const canonical = isHouseCleaning
    ? `https://www.kathyclean.com/house-cleaning-${locationId}`
    : `https://www.kathyclean.com/${service.id}${location ? `-${location.id}` : 'denver'}`;


    // Add location-specific overrides

  return {
    title,
    description,
    openGraph: {
      title, 
      description,
      url: canonical,
      siteName: 'Kathy Clean',
      locale: 'en_US',
      type: 'website',
    }, 
    alternates: {
      canonical,
    },
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

  switch (service?.id) {
    case 'cleaning-services':
      return <CleaningServicesComponent location={location?.name || ''} />;
    case 'house-cleaning':
      return <ResidentialServiceComponent location={location?.name || ''} />;
    case 'commercial-cleaning':
      return <CommercialServiceComponent location={location?.name || ''} />;
    case 'window-cleaning':
      return <WindowsServiceComponent location={location?.name || ''} />;
    case 'move-in-move-out':
      return <MoveInMoveOutServiceComponent location={location?.name || ''} />;
    case 'post-construction':
      return <PostConstructionServiceComponent location={location?.name || ''} />;
    default:
      return notFound();
  }
}
