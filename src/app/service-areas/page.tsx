import { Metadata } from 'next';
import RequestQuoteButton from '@/components/sections/RequestQuoteButton';

export const metadata: Metadata = {
  title: 'Kathy Clean | Cleaning Services in Denver & Surrounding Areas',
  description: 'Serving Denver, Aurora, Lakewood & more with expert house cleaning, window cleaning, and pressure washing. Trusted local cleaners. Free quotes available.',
  alternates: {
    canonical: 'https://www.kathyclean.com/service-areas'
  }
};

export default function ServiceAreas() {
  const areas = [
    'Aurora',
    'Bow Mar',
    'Castle Rock',
    'Centennial',
    'Central Park',
    'Cherry Creek',
    'Cherry Hills Village',
    'Denver',
    'Englewood',
    'Glendale',
    'Greenwood Village',
    'Highlands Ranch',
    'Highland',
    'Hilltop',
    'Ken Caryl',
    'Lakewood',
    'Littleton',
    'Lone Tree',
    'Parker',
    'Roxborough Park',
    'Sheridan',
    'The Pinery',
    'University Park',
    'Washington Park'
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-white py-20" style={{ color: '#1C2951' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kathy Clean Service Locations</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Kathy Clean proudly provides residential and commercial cleaning services across the Denver Metro Area and surrounding cities. From Aurora to Littleton, Lakewood, Westminster, and Highlands Ranch, our trusted team is ready to keep your home or business spotless.
          </p>
          <p className="text-xl max-w-3xl mx-auto mt-4">
            We specialize in house cleaning, move-in/move-out cleaning, post-construction cleanup, window cleaning, and pressure washing. Whether you need recurring service or a one-time deep clean, our fully trained, insured, and background-checked cleaners deliver consistent, high-quality results.
          </p>
          <p className="text-xl max-w-3xl mx-auto mt-4">
            Looking for cleaning services near you? Browse our full list of service areas below and request your free quote today.
          </p>
        </div>
      </section>

      {/* Centered Image */}
      <section className="w-full bg-white py-8">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="relative w-full max-w-3xl" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
            <img 
              src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomai17bhrN0W8yorQH6lnDudV4OjgIFLEC2YpM" 
              alt="Kathy Clean Service Areas Map" 
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Locations We Serve in Colorado</h2>
            <div className="bg-white p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                {areas.map((area, index) => (
                  <span key={index}>
                    {area}
                    {index < areas.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Book your professional cleaning service today and enjoy a spotless home in our service area.
          </p>
          <div className="flex justify-center">
            <RequestQuoteButton />
          </div>
        </div>
      </section>
    </main>
  );
}
