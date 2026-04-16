import { Metadata } from "next";
import { canonicalPath } from "@/lib/canonical";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import { LocationCard } from "@/components/sections/our-locations";
import { houstonServiceAreas } from "@/lib/service-areas/houstonLocations";
import FeatureBar from "@/components/ui/FeatureBar";
import Image from "next/image";

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
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left">
                House Cleaning Services Across West Houston Neighborhoods
              </h1>
              <p className="text-lg text-gray-300 mb-6 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
                Reliable recurring, deep, and move-in/out cleaning for homes in The Memorial Villages, Bellaire, Greater Heights, and nearby Houston areas.
              </p>
              
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
              
              <FeatureBar />
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-2xl">
                <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                  <div className="absolute left-[-10%] top-1/3 w-[360px] h-[360px] bg-[#00F5D4]/25 rounded-[40%] blur-2xl" />
                  <div className="absolute right-8 top-6 w-3 h-3 bg-[#00F5D4] rounded-full" />
                  <div className="absolute right-16 top-14 w-2.5 h-2.5 bg-[#00F5D4] rounded-full" />
                  <div className="absolute left-10 bottom-10 w-2.5 h-2.5 bg-[#00F5D4] rounded-full" />
                  <div className="absolute right-12 top-1/3 w-5 h-5 bg-[#00F5D4] rotate-45 rounded-[4px]" />
                </div>
                <Image
                  src="/images/Service Areas Houston.png"
                  alt="House cleaning services across Houston neighborhoods"
                  width={600}
                  height={600}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 0px, (max-width: 1280px) 50vw, 600px"
                  quality={75}
                  className="relative w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Cleaning Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Our Cleaning Services in Houston, TX
            </h2>
            <div className="bg-white p-8 rounded-lg">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Kathy Clean Houston provides top-rated residential cleaning services for homeowners and families in Memorial, West University Place, and nearby high-end neighborhoods. Our services are coordinated to deliver reliable, detail-focused cleaning with fast response times and consistent results.
                </p>
                <p>
                  Our service professionals regularly support homes that value trust, quality, and long-term reliability. We understand the unique needs of each neighborhood and tailor service options accordingly.
                </p>
                <p>
                  We specialize in recurring house cleaning, deep cleaning, and move-in/move-out services, delivered by fully insured and background-checked service professionals.
                </p>
                <p>
                  Looking for trusted house cleaning in your neighborhood? Request your free quote today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access by Location - Moved Higher */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              House Cleaning Services in These Houston Areas
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              We currently serve many Houston neighborhoods. Choose your area below to see cleaning services available near you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...houstonServiceAreas]
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

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-12">See Why Customers Like Kathy Clean</h2>
            <div 
              className="trustindex-widget"
              dangerouslySetInnerHTML={{
                __html: `
                  <div class="trustindex-widget" data-locale="en-US" data-template-id="0bb607a64c82262e8c861b2a2d6"></div>
                  <script defer async src="https://cdn.trustindex.io/loader.js?0bb607a64c82262e8c861b2a2d6"></script>
                `
              }}
            />
          </div>
        </div>
      </section>

      {/* Internal Link to Money Page */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Looking for House Cleaning in Houston?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            If you're looking for recurring house cleaning, deep cleaning, or move-in/move-out services in Houston, visit our main service page.
          </p>
          <div className="flex justify-center">
            <a
              href="/house-cleaning-houston"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-6 py-2 has-[>svg]:px-3 font-medium"
            >
              View Houston House Cleaning Services
            </a>
          </div>
        </div>
      </section>

      {/* Simplified Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Our House Cleaning Services
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-6">
                We provide professional residential cleaning services across Houston including:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">•</span>
                  Recurring house cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">•</span>
                  Deep cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">•</span>
                  Move-in and move-out cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">•</span>
                  Post-construction cleaning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for a Cleaner Home?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get a fast quote for house cleaning services in your Houston neighborhood.
          </p>
          <div className="flex justify-center">
            <RequestQuoteButton />
          </div>
        </div>
      </section>
    </main>
  );
}
