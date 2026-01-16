import { Metadata } from "next";
import { canonicalPath } from "@/lib/canonical";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import { LocationCard } from "@/components/sections/our-locations";
import { houstonServiceAreas } from "@/lib/service-areas/houstonLocations";

export const metadata: Metadata = {
  title: "House & Commercial Cleaning Service Areas in Houston",
  description:
    "Browse Kathy Clean Houston service areas across Houston and nearby neighborhoods. Find your area and request a fast quote for house or commercial cleaning.",
  alternates: {
    canonical: "/service-areas",
  },
};

export default function ServiceAreas() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-[#1C2951] text-white py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-full lg:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left">
                House Cleaning Services in Memorial, West University Place & Nearby Houston Neighborhoods
              </h1>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Kathy Clean Houston specializes in professional house cleaning services for homes located in Memorial, West University Place, The Memorial Villages, Bellaire, and River Oaks. Our residential cleaning teams focus on neighborhoods where homeowners expect consistent quality, trusted professionals, and dependable service.
                </p>
                <p>
                  We provide recurring house cleaning, deep cleaning, move-in/move-out cleaning, and post-renovation cleanups for select residential communities across West Houston.
                </p>
                <p>
                  All services are delivered by fully insured, background-checked cleaners and backed by our 48-hour satisfaction guarantee.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-10">
                <a
                  href="/request-quote"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-6 py-2 has-[>svg]:px-3 font-medium w-full sm:w-auto text-center"
                >
                  REQUEST A QUOTE
                </a>
                <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 w-full sm:w-auto text-base border border-input bg-white text-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone h-5 w-5 text-black"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-black">
                    <a href="tel:+13464886044" className=" hover:text-cyan-500">
                      (346) 488-6044
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Our Cleaning Services in Houston, TX
            </h2>
            <div className="bg-white p-8 rounded-lg">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Kathy Clean Houston provides top-rated residential cleaning services for homeowners and families in Memorial, West University Place, and nearby high-end neighborhoods. Our strategically located teams allow us to deliver reliable, detail-focused cleaning with fast response times and consistent results.
                </p>
                <p>
                  Our professional cleaning teams regularly serve homes that value trust, quality, and long-term reliability. We understand the unique needs of each neighborhood and tailor our services accordingly.
                </p>
                <p>
                  We specialize in recurring house cleaning, deep cleaning, and move-in/move-out services, delivered by fully trained, insured, and background-checked professionals.
                </p>
                <p>
                  Looking for trusted house cleaning in your neighborhood? Request your free quote today.
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
            <h2 className="text-3xl font-bold mb-4">
              Locations We Serve
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Select your city below for location-specific information
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...houstonServiceAreas]
                .filter(
                  (location) =>
                    location.slug !== "houston" &&
                    location.slug !== "spring-branch" &&
                    location.slug !== "medical-center-area",
                )
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((location, index) => (
                <LocationCard
                  key={index}
                  title={location.name}
                  imageUrl={location.imageUrl}
                  imageAlt={location.imageAlt}
                  link={`/service-areas/${location.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Book your professional cleaning service today and enjoy a spotless
            home in our service area.
          </p>
          <div className="flex justify-center">
            <RequestQuoteButton />
          </div>
        </div>
      </section>
    </main>
  );
}
