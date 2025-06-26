import React from 'react';
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import PhoneButton from "@/components/PhoneButton";
import { CtaButton } from '@/components/ui/CtaButton';
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Other Cleaning Services in Denver | Kathy Clean',
  description: 'Gutter Cleaning, Pressure Washing, Solar Panel cleaning & Emergency Clean in Denver and nearby. Quality service with a 48h guarantee.',
  openGraph: {
    title: 'Other Cleaning Services in Denver | Kathy Clean',
    description: 'Gutter Cleaning, Pressure Washing, Solar Panel cleaning & Emergency Clean in Denver and nearby. Quality service with a 48h guarantee.',
    url: 'https://www.kathyclean.com/other-services-denver',
    siteName: 'Kathy Clean',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.kathyclean.com/other-services-denver',
  },
};

const services = [
  {
    title: "Pressure Washing",
    description: "Hard water stains and mineral deposits can dull your glass over time. We use safe, effective methods to remove buildup and restore clarity to windows, siding, walkways, and driveways.",
    imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomp9p0B7mIQG02vMEqiTUtkudb5jB1eo97yKV8",
    link: "/pressure-washing-denver"
  },
  {
    title: "Gutter Cleaning",
    description: "Clogged gutters can lead to water damage and costly repairs. Our team removes leaves, debris, and buildup to keep your gutters flowing freely and your property protected year-round.",
    imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomeqbllFgQpAgcBK3Nd2aXOnqjJo4Lvf0YytD6",
    link: "/gutter-cleaning-denver"
  },
  {
    title: "Solar Panel Cleaning",
    description: "Dust and debris can block sunlight and reduce your solar panel efficiency. Our team cleans panels gently but thoroughly, helping you get the most out of your investment.",
    imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomlkCYH8g1K9N4DUxFng7weyZbAGHESLJh3Ifa",
    link: "/solar-panel-cleaning-denver"
  },
  {
    title: "Emergency Cleaning",
    description: "We offer fast-response graffiti removal, biohazard cleanup, and restroom sanitization across Denver. From tough grime and graffiti to hazardous spills and urgent restroom needs, our trained team restores spaces quickly, safely, and thoroughly.",
    imageUrl: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom2TYpafJ6JbmpXdcT7olMHiQWCShrEqx84YZV",
    link: "/emergency-cleaning-denver"
  },
];

export default function OtherServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
            {/* Text Content */}
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Pressure Washing, Gutter Cleaning and More Services in Denver Area
              </h1>
              <p className="text-white mb-8 text-lg">
                We offer pressure washing, gutter cleaning, solar panel cleaning, and emergency cleans across Denver and surrounding areas. Fast, reliable service to keep your home or business spotless and protected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-black">
                  <CtaButton href="/request-quote" className="flex items-center">
                    Request a Quote
                  </CtaButton>
                </Button>
                <PhoneButton />
              </div>
            </div>
            
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <Image
                src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomb7YCHjtkGctfxEFSjXR7am2eDqMn9h1wrd0O"
                alt="Professional cleaning services in Denver"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Other Services by Kathy Clean</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Beyond routine cleaning, Kathy Clean offers a range of specialized services to handle unique situations with precision and care. We provide emergency cleanings, move-in/move-out services, post-construction cleanups, as well as pressure washing, gutter cleaning, and solar panel cleaning for homes and businesses. Every service follows our detailed checklist system to ensure nothing is missed. We proudly serve Denver, Parker, Castle Rock, and nearby areas with the same level of quality and reliability our clients trust.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                <div className="h-64 bg-gray-200 relative">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#17224D] px-6 py-10 flex flex-col items-center text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book One of Our Specialty Services?</h2>
          <p className="text-base md:text-lg text-white mb-8">Get fast, reliable pressure washing, gutter cleaning, solar panel care, or emergency cleanup - done right the first time. Serving Denver and surrounding areas.</p>
          <CtaButton 
            href="/request-quote" 
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 has-[>svg]:px-3 mt-8 font-medium mx-auto px-8 py-3 text-lg shadow-lg hover:scale-105 transition-all"
          >
            REQUEST A QUOTE
          </CtaButton>
        </div>
      </section>
    </main>
  );
}
