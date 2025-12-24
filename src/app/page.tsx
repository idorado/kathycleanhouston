import type { Metadata } from "next";

import { Testimonial } from "@/components/cards/testimonial"
import OurServices from "@/components/sections/our-services"
import WhyChooseUs from "@/components/sections/why-choose-us"
import CompaniesCountOnUs from "@/components/sections/companies-count-on-us";
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
      <CompaniesCountOnUs />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443016.33462230774!2d-95.76425224736101!3d29.833542222776323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cc8afd7f30f5%3A0x2eaf5277b2bbd2da!2sHarris%20County%2C%20TX%2C%20USA!5e0!3m2!1sen!2sar!4v1765819264808!5m2!1sen!2sar"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Harris County, TX - Service Area Map"
                ></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Quality Cleaning Services Across Harris County, TX</h2>
              <p className="text-gray-600 mb-6">We provide top-quality cleaning services across the Houston area. From downtown Houston to the surrounding neighborhoods of Harris County, our professional team is committed to delivering spotless results for both homes and businesses.</p>
              <div className="text-gray-600 mb-8">
                <p>We proudly serve: Houston, Spring Branch, Houston Heights, Upper Kirby, Memorial, Uptown, Bellaire, and the Medical Center Area.</p>
                <div className="mt-4">
                  <p className="font-medium">Top Areas We Serve:</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                    <Link href="/service-areas/houston" className="underline">
                      House Cleaning in Houston
                    </Link>
                    <Link href="/service-areas/spring-branch" className="underline">
                      House Cleaning in Spring Branch
                    </Link>
                    <Link href="/service-areas/greater-heights" className="underline">
                      House Cleaning in Greater Heights
                    </Link>
                    <Link href="/service-areas/greenway-upper-kirby-area" className="underline">
                      House Cleaning in Greenway / Upper Kirby Area
                    </Link>
                    <Link href="/service-areas/memorial" className="underline">
                      House Cleaning in Memorial
                    </Link>
                    <Link href="/service-areas/river-oaks" className="underline">
                      House Cleaning in River Oaks
                    </Link>
                    <Link href="/service-areas/bellaire" className="underline">
                      House Cleaning in Bellaire
                    </Link>
                    <Link href="/service-areas/medical-center-area" className="underline">
                      House Cleaning in Medical Center Area
                    </Link>
                    <Link href="/service-areas" className="underline">
                      View all service areas
                    </Link>
                  </div>
                </div>
              </div>
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
