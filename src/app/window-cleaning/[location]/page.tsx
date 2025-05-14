import { notFound } from 'next/navigation';
import WindowsServiceComponent from '@/components/WindowsServiceComponent';

interface WindowCleaningPageProps {
  params: {
    location: string;
  };
}

export default function WindowCleaningPage({ params }: WindowCleaningPageProps) {
  const { location } = params;
  const formattedLocation = location.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <WindowsServiceComponent location={formattedLocation} />
  );
}

export async function generateMetadata({ params }: WindowCleaningPageProps) {
  const { location } = params;
  const formattedLocation = location.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return {
    title: `Window Cleaning in ${formattedLocation} | Kathy Clean`,
    description: `Professional window cleaning services in ${formattedLocation}. Get crystal clear windows with our expert team. Serving homes and businesses in ${formattedLocation} and surrounding areas.`,
    alternates: {
      canonical: `https://www.kathyclean.com/window-cleaning-${location}`
    },
    openGraph: {
      title: `Window Cleaning in ${formattedLocation} | Kathy Clean`,
      description: `Professional window cleaning services in ${formattedLocation}. Get crystal clear windows with our expert team.`,
      url: `https://www.kathyclean.com/window-cleaning-${location}`,
      siteName: 'Kathy Clean',
      locale: 'en_US',
      type: 'website',
    },
  };
}
