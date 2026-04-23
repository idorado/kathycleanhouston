import type { Metadata } from "next";

import { Testimonial } from "@/components/cards/testimonial"
import OurServices from "@/components/sections/our-services"
import WhyChooseUs from "@/components/sections/why-choose-us"
import HomeHero from "@/components/sections/home-hero"
import { ServicesSection } from "@/components/sections/services-section"
import RequestQuoteButton from "@/components/sections/RequestQuoteButton"
import { FAQ } from "@/components/sections/faq"
import FeatureBar from "@/components/ui/FeatureBar"
import JsonLd from "@/components/json-ld";
import { home } from "@/config/json-ld";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

// NOTE: Si algún día agregamos Server Actions a esta page, la directiva va dentro de la función acción, no a nivel de archivo.

export default async function Home() {
  return (
        <main className="flex flex-col min-h-screen">
      <JsonLd data={home()} />
      <HomeHero />

      <OurServices />

      <WhyChooseUs />

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">See Why Customers Like Kathy Clean</h2>
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
      </section>

      {/* Areas We Serve Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Areas We Serve in West Houston
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on West Houston and Inner Loop neighborhoods where recurring cleaning is most common among busy households.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <a 
                href="/service-areas/memorial" 
                className="text-gray-800 hover:text-gray-900 font-semibold text-lg hover:underline"
              >
                Memorial
              </a>
            </div>
            <div className="text-center">
              <a 
                href="/service-areas/the-memorial-villages" 
                className="text-gray-800 hover:text-gray-900 font-semibold text-lg hover:underline"
              >
                The Memorial Villages
              </a>
            </div>
            <div className="text-center">
              <a 
                href="/service-areas/greater-heights" 
                className="text-gray-800 hover:text-gray-900 font-semibold text-lg hover:underline"
              >
                Greater Heights
              </a>
            </div>
            <div className="text-center">
              <a 
                href="/service-areas/spring-branch" 
                className="text-gray-800 hover:text-gray-900 font-semibold text-lg hover:underline"
              >
                Spring Branch
              </a>
            </div>
            <div className="text-center">
              <a 
                href="/service-areas/washington-ave-memorial-park" 
                className="text-gray-800 hover:text-gray-900 font-semibold text-lg hover:underline"
              >
                Washington Ave / Memorial Park
              </a>
            </div>
            <div className="text-center">
              <a 
                href="/service-areas/west-university-place" 
                className="text-gray-800 hover:text-gray-900 font-semibold text-lg hover:underline"
              >
                West University Place
              </a>
            </div>
            <div className="text-center">
              <a 
                href="/service-areas/bellaire" 
                className="text-gray-800 hover:text-gray-900 font-semibold text-lg hover:underline"
              >
                Bellaire
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=Houston,+TX,+USA&z=10&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Houston, TX - Service Area Map"
                ></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Quality Cleaning Services Across Houston, TX</h2>
              <div className="text-gray-600 mb-8">
                <p className="mb-6">We provide top-rated residential cleaning services for busy families and homeowners in Memorial, West University Place, and nearby high-end neighborhoods in Houston.</p>
                <p>Our professional, fully insured service delivers consistent, detail-focused cleaning designed for homes that value trust, reliability, and peace of mind.</p>
                <p className="mt-4">
                  <span className="font-medium">Primary Service Areas:</span> Memorial · West University Place · The Memorial Villages · Bellaire · River Oaks
                </p>
              </div>
              <p className="mt-4">We also serve select nearby neighborhoods in Houston.</p>
              <RequestQuoteButton />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              House Cleaning Guides for Houston Homes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about pricing, cleaning frequency, and choosing the right service for your Houston home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                <a 
                  href="/resources/house-cleaning-cost-houston" 
                  className="text-gray-900 hover:text-gray-700 no-underline"
                >
                  How Much Does House Cleaning Cost in Houston?
                </a>
              </h3>
              <p className="text-gray-600">
                Understand pricing factors, what affects house cleaning costs, and how flat-rate pricing works for Houston homes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                <a 
                  href="/resources/how-often-house-cleaning-houston" 
                  className="text-gray-900 hover:text-gray-700 no-underline"
                >
                  How Often Should You Schedule House Cleaning in Houston?
                </a>
              </h3>
              <p className="text-gray-600">
                Discover weekly, biweekly, and recurring cleaning schedules to find the perfect frequency for your Houston home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <FAQ hideTitle={true} />
          </div>
        </div>
      </section>
    </main>
  )
}
