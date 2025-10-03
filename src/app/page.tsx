import type { Metadata } from "next";

import { Testimonial } from "@/components/cards/testimonial"
import OurServices from "@/components/sections/our-services"
import WhyChooseUs from "@/components/sections/why-choose-us"
import CompaniesCountOnUs from "@/components/sections/companies-count-on-us";
import HomeHero from "@/components/sections/home-hero"
import { ServicesSection } from "@/components/sections/services-section"
import RequestQuoteButton from "@/components/sections/RequestQuoteButton"
import FeatureBar from "@/components/ui/FeatureBar"
import JsonLd from "@/components/json-ld";
import { home } from "@/config/json-ld";

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

// Keep the 'use server' directive if needed by components
"use server"

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
                <img 
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomniDJSKwNq3haW9IjyTl7dbP5tZX4mrvg1GQH" 
                  alt="Service Areas Map" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Quality Cleaning Services From Denver to Castle Rock</h2>
              <p className="text-gray-600 mb-6">We provide top-quality cleaning services across the Denver metro area, from the heart of Denver to the beautiful city of Castle Rock. Our professional team is committed to delivering exceptional cleaning services to homes and businesses throughout the region.</p>
              <div className="text-gray-600 mb-8">
                <p>Aurora, Bow Mar, Castle Rock, Centennial, Central Park, Cherry Creek, Cherry Hills Village, Denver, Englewood, Glendale, Greenwood Village, Highlands Ranch, Highland, Hilltop, Ken Caryl, Lakewood, Littleton, Lone Tree, Parker, Roxborough Park, Sheridan, The Pinery, University Park, Washington Park</p>
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
    </main>
  )
}
