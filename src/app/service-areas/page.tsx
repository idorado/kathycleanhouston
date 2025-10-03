import { Metadata } from 'next';
import { canonicalPath } from "@/lib/canonical";
import RequestQuoteButton from '@/components/sections/RequestQuoteButton';

export const metadata: Metadata = {
  title: 'Kathy Clean | Cleaning Services in Denver & Surrounding Areas',
  description: 'Expert Cleaning Services in Denver, Castle Rock, Littleton, Centennial, Englewood, and more. Residential and Commercial Cleaning.',
  alternates: {
    canonical: canonicalPath('service-areas')
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
      <section className="relative bg-[#1C2951] text-white py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left">Kathy Clean Service Locations</h1>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Kathy Clean proudly provides reliable house and commercial cleaning services across the Denver Metro Area and surrounding cities. From Lakewood, Littleton, Highlands Ranch, and Castle Rock, our trusted team is ready to keep your home or business spotless.
                </p>
                <p>
                  We specialize in house cleaning, move-in/move-out cleaning, post-construction cleanup, window cleaning, and janitorial services. Whether you need recurring service or a one-time deep clean, our fully trained, insured, and background-checked cleaners deliver consistent, high-quality results.
                </p>
              </div>

              {/* Image - Visible on mobile only */}
              <div className="block lg:hidden my-8 w-full">
                <div className="relative rounded-xl overflow-hidden shadow-2xl w-full max-w-md mx-auto">
                  <img 
                    src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomhaw6R99pvemGxpEwTUMyYu5sc4j0tqg2836I" 
                    alt="Professional cleaning team"
                    className="w-full h-auto rounded-xl"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                      maxWidth: '100%'
                    }}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-10">
                <a 
                  href="/request-quote" 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-6 py-2 has-[>svg]:px-3 font-medium w-full sm:w-auto text-center"
                >
                  REQUEST A QUOTE
                </a>
                <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 w-full sm:w-auto text-base border border-input bg-white text-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-5 w-5 text-black">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-black">(303) 681-2559</span>
                </div>
              </div>
            </div>

            {/* Image - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block lg:w-[45%] mt-0 lg:pl-8">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 w-fit mx-auto">
                <img 
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomhaw6R99pvemGxpEwTUMyYu5sc4j0tqg2836I" 
                  alt="Professional cleaning team"
                  className="w-full h-auto rounded-xl"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%'
                  }}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Our Cleaning Services in Colorado</h2>
            <div className="bg-white p-8 rounded-lg">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Kathy Clean proudly serves the entire Denver metropolitan area and surrounding communities. Our strategically located service areas ensure we can provide prompt, reliable cleaning services to homes and businesses throughout the region.
                </p>
                <p>
                  Each pin on the map represents one of our service locations where our professional cleaning teams are ready to deliver exceptional results. We understand the unique needs of each community and tailor our services accordingly.
                </p>
                <p>
                  We specialize in house cleaning, move-in/move-out cleaning, post-construction cleanup, window cleaning, and janitorial services. Whether you need recurring service or a one-time deep clean, our fully trained, insured, and background-checked cleaners deliver consistent, high-quality results.
                </p>
                <p>
                  Looking for cleaning services near you? Contact us today to request your free quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access by Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Quick Access by Location</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Select your city below for location-specific information</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'Castle Rock',
                'Centennial',
                'Denver',
                'Englewood',
                'Greenwood Village',
                'Highlands Ranch',
                'Littleton',
                'Lone Tree',
                'Parker'
              ].map((location, index) => (
                <a 
                  key={index}
                  href={`/cleaning-services-${location.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">{location}</span>
                  </div>
                </a>
              ))}
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
