import type { Metadata } from "next";

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
          <h2 className="text-3xl font-bold text-center mb-4">What Houston Homeowners Say About Kathy Clean</h2>
          <p className="text-center text-gray-500 mb-12">5-star rated on Google · Houston, TX</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "Service is outstanding, the help is professional, courteous and always on time for scheduled cleaning. I would give Kathy Clean Houston my highest recommendation, you'll be very pleased!",
                author: "Steve M.",
                date: "April 2025",
              },
              {
                quote: "Nubia does an amazing job. She is meticulous and always willing to do anything we ask. We enjoy her great work as well as efficiency. We highly recommend Kathy Clean Houston!",
                author: "Ximena V.",
                date: "March 2025",
              },
              {
                quote: "I was referred to Kathy Clean Houston by a neighbor. They were very professional, and I was able to schedule an appointment within just a few days. The person who came did an absolutely AMAZING job. Very professional, and I was truly impressed.",
                author: "Donna W.",
                date: "March 2025",
              },
              {
                quote: "I've used Kathy Clean Houston and am impressed with how the service professionals are personable and have a high attention to detail. The scheduling support is great and works hard to accommodate special requests. Highly recommend.",
                author: "Rik W.",
                date: "March 2025",
              },
              {
                quote: "Want the best cleaning service in town? Then you want to call Kathy Clean Houston!! They will provide you with outstanding service, and they are very easy to work with.",
                author: "Kerri N.",
                date: "March 2025",
              },
            ].map((review) => (
              <div key={review.author} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
                <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-sm">{review.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{review.author}</p>
                    <p className="text-xs text-gray-500">Verified Customer · {review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            {[
              { label: "Greater Heights", href: "/service-areas/greater-heights" },
              { label: "Rice Military", href: "/service-areas/rice-military" },
              { label: "Spring Branch", href: "/service-areas/spring-branch" },
              { label: "Energy Corridor", href: "/service-areas/energy-corridor" },
              { label: "Memorial", href: "/service-areas/memorial" },
              { label: "Westchase", href: "/service-areas/westchase" },
              { label: "Katy", href: "/service-areas/katy" },
              { label: "The Woodlands", href: "/service-areas/the-woodlands" },
              { label: "Sugar Land", href: "/service-areas/sugar-land" },
              { label: "West University Place", href: "/service-areas/west-university-place" },
              { label: "Bellaire", href: "/service-areas/bellaire" },
              { label: "The Memorial Villages", href: "/service-areas/the-memorial-villages" },
            ].map((area) => (
              <div key={area.href} className="text-center">
                <a
                  href={area.href}
                  className="text-gray-800 hover:text-gray-900 font-semibold text-lg hover:underline"
                >
                  {area.label}
                </a>
              </div>
            ))}
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
              <h2 className="text-3xl font-bold mb-6">House Cleaning Across Houston and West Houston</h2>
              <div className="text-gray-600 mb-8">
                <p className="mb-6">We provide top-rated residential cleaning for busy households across inner-loop Houston and the western suburbs — from Greater Heights and Rice Military to Katy, Sugar Land, and The Woodlands.</p>
                <p>Our professional, fully insured service delivers consistent, detail-focused cleaning designed for homes that value trust, reliability, and peace of mind.</p>
                <p className="mt-4">
                  <span className="font-medium">Core Service Areas:</span> Greater Heights · Rice Military · Spring Branch · Energy Corridor · Memorial · Westchase · Katy · Sugar Land · The Woodlands
                </p>
              </div>
              <p className="mt-4">We also serve West University Place, Bellaire, and other nearby Houston neighborhoods.</p>
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
