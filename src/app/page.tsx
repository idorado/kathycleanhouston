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

const cleaningServiceSchema = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  name: "Kathy Clean Houston",
  url: "https://kathycleanhouston.com",
  telephone: "+1-346-488-6044",
  email: "info@kathyclean.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9219 Katy Fwy #136",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77024",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Place", name: "Houston, TX" },
    { "@type": "Place", name: "Spring Branch" },
    { "@type": "Place", name: "Spring Branch Central" },
    { "@type": "Place", name: "Spring Branch East" },
    { "@type": "Place", name: "Greater Heights" },
    { "@type": "Place", name: "Greenway / Upper Kirby Area" },
    { "@type": "Place", name: "Memorial" },
    { "@type": "Place", name: "Greater Uptown" },
    { "@type": "Place", name: "Bellaire" },
    { "@type": "Place", name: "Medical Center Area" },
    { "@type": "Place", name: "The Memorial Villages" },
    { "@type": "Place", name: "River Oaks" },
    { "@type": "Place", name: "Mid West" },
    { "@type": "Place", name: "Briar Forest" },
    { "@type": "Place", name: "West University Place" },
    { "@type": "Place", name: "Washington Ave. / Memorial Park" },
  ],
  sameAs: [],
};

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
      <JsonLd data={cleaningServiceSchema} />
      <HomeHero />

      <OurServices />

      <WhyChooseUs />

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

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Reviews From Wonderful Customers</h2>
          <Testimonial />
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
