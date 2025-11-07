import type { Metadata } from "next";

import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import FeatureBar from "@/components/ui/FeatureBar";
import JsonLd from "@/components/json-ld";
import { home } from "@/config/json-ld";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";
import PhoneButton from "@/components/PhoneButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { LocationCard } from "@/components/sections/our-locations";
import { canonicalPath } from "@/lib/canonical";

export const metadata = {
  title: "Comprehensive House Cleaning Service in Sheridan, CO",
  description:
    "Kathy Clean provides a comprehensive house cleaning service in Sheridan, CO. Detailed, and full-home cleaning solutions for spotless results. Call now!",
  keywords: [
    "House Cleaning Sheridan CO",
    "Comprehensive House Cleaning",
    "Kathy Clean",
  ],
  alternates: {
    canonical:
      "https://kathyclean.com/service-areas/arapahoe-county-co/sheridan",
  },
};

// NOTE: Si algún día agregamos Server Actions a esta page, la directiva va dentro de la función acción, no a nivel de archivo.

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <JsonLd data={home()} />

      {/* Hero Section */}
      <section className="relative bg-foreground overflow-hidden min-h-[380px] md:min-h-[480px]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-2 text-white text-center p-4 md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-primary">
                  Comprehensive House Cleaning Service
                </span>
                <br />
                <span className="text-background">in Sheridan, CO</span>
              </h1>
              <p className="text-lg">
                Kathy Clean provides a comprehensive house cleaning service in
                Sheridan, CO for homes of every size and style. Our experienced
                team delivers thorough cleaning from top to bottom — ensuring
                spotless kitchens, bathrooms, and living areas for a truly
                refreshed home environment.
              </p>
              <div className="pt-4 flex flex-col md:flex-row gap-4">
                <Button variant="default" className="font-medium" asChild>
                  <CtaButton href="/request-quote">REQUEST A QUOTE</CtaButton>
                </Button>
                <PhoneButton />
                <a
                  href="sms:3036812559"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 w-full sm:w-auto min-w-[180px]
                border border-input bg-background text-foreground
                [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0"
                >
                  <span className="text-black hover:text-cyan-500">
                    TEXT US
                  </span>
                </a>
              </div>
              <FeatureBar />
            </div>
            <div className="relative hidden md:block w-full h-full">
              <Image
                src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOs088CLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu"
                alt="Comprehensive House Cleaning in Sheridan CO"
                width={400}
                height={400}
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 0px, (max-width: 1280px) 50vw, 600px"
                quality={75}
                className="relative w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomlkWQowW1K9N4DUxFng7weyZbAGHESLJh3Ifa"
                  alt="Comprehensive House Cleaning Service in Sheridan CO"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Kathy Clean for a Comprehensive House Cleaning
                Service in Sheridan, CO?
              </h2>
              <p className="text-gray-600 mb-6">
                Thorough, reliable cleaning solutions designed to refresh every
                room of your home in Sheridan.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Complete Cleaning Coverage for Every Space:{" "}
                  </dt>
                  <dd className="inline">
                    Our comprehensive house cleaning service in Sheridan, CO
                    includes kitchens, bathrooms, bedrooms, and common areas.
                    From deep sanitizing to daily upkeep, we ensure your entire
                    home remains spotless, organized, and ready to enjoy at all
                    times.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Flexible Scheduling for Busy Households:{" "}
                  </dt>
                  <dd className="inline">
                    We understand every home has unique needs. Kathy Clean
                    offers convenient scheduling options—weekly, biweekly, or
                    monthly—so your Sheridan home receives consistent, detailed
                    care without disrupting your daily routine or comfort.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Experienced Professionals You Can Trust:{" "}
                  </dt>
                  <dd className="inline">
                    Every cleaning is handled by trained, background-checked
                    professionals who take pride in delivering flawless results.
                    Our team treats your home with respect, precision, and
                    care—making us Sheridan’s trusted choice for comprehensive
                    house cleaning.
                  </dd>
                </div>
              </dl>
              <RequestQuoteButton />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Why Comprehensive House Cleaning Matters in Sheridan, CO
              </h2>
              <p className="text-gray-600 mb-6">
                A complete cleaning routine enhances comfort, hygiene, and the
                overall value of your Sheridan home.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Promotes a Healthier Living Environment:{" "}
                  </dt>
                  <dd className="inline">
                    Regular, detailed cleaning removes dust, germs, and
                    allergens that build up over time. A comprehensive house
                    cleaning service in Sheridan, CO helps maintain fresh air
                    quality and reduces health risks for your family, ensuring a
                    safer, cleaner home.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Extends the Life of Home Interiors and Surfaces:{" "}
                  </dt>
                  <dd className="inline">
                    Routine cleaning prevents dirt buildup and material
                    degradation in homes across{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Sheridan,_Colorado"
                      target="_blank"
                      className="underline text-cyan-500"
                    >
                      Sheridan, CO
                    </a>
                    . Kathy Clean’s comprehensive cleaning techniques protect
                    floors, countertops, and fixtures—preserving the appearance
                    and quality of your home while minimizing wear over time.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Boosts Productivity and Peace of Mind:{" "}
                  </dt>
                  <dd className="inline">
                    A clean, organized home promotes mental clarity and
                    relaxation. When every surface shines, you can focus better,
                    live comfortably, and enjoy a stress-free environment that
                    contributes to a more balanced lifestyle in Sheridan.
                  </dd>
                </div>
              </dl>
              <RequestQuoteButton />
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomLtolu5Ux3aBby7k62UgoriN9lVewuj0m4TMh"
                  alt="Comprehensive House Cleaning in Sheridan CO"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Card className="w-full">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-0">
                    <AccordionTrigger className="text-left">
                      What does a comprehensive house cleaning service in
                      Sheridan, CO include?
                    </AccordionTrigger>
                    <AccordionContent>
                      A comprehensive house cleaning service in Sheridan, CO
                      includes complete coverage for every room—dusting,
                      mopping, sanitizing, vacuuming, and organizing. Our
                      professional team ensures that kitchens, bathrooms, and
                      living spaces are left spotless and refreshed after every
                      visit.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      How often should I schedule a comprehensive cleaning
                      service in Sheridan, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      The frequency of a comprehensive house cleaning service in
                      Sheridan, CO depends on your home’s activity level and
                      personal preference. Many homeowners prefer weekly or
                      biweekly cleanings to maintain a consistently healthy and
                      well-kept environment.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Why choose a professional cleaning company in Sheridan, CO
                      over DIY cleaning?
                    </AccordionTrigger>
                    <AccordionContent>
                      Professional cleaning services provide deeper, more
                      efficient results using advanced tools and proven
                      techniques. Hiring experts in Sheridan, CO saves time,
                      ensures better sanitation, and guarantees spotless
                      finishes that regular household cleaning can’t always
                      achieve.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MAP Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
            <p className="text-gray-600 mb-6 text-center">
              Our comprehensive house cleaning service in Sheridan, CO serves
              homes across local neighborhoods including Fort Logan, River
              Point, and South Platte.{" "}
              <b>
                <a
                  href="https://kathyclean.com/"
                  className="underline text-cyan-500"
                >
                  Kathy Clean
                </a>
              </b>{" "}
              provides full-service cleaning designed to meet every household’s
              needs, ensuring spotless, organized, and comfortable living spaces
              year-round.
            </p>
            <div className="flex justify-center py-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30668.801005291186!2d-105.0323212!3d39.6459603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7f1b5cb3a7c3%3A0x55bfe993c1b6bb8!2sSheridan%2C%20CO%2C%20USA!5e0!3m2!1sen!2sus!4v1761838976321!5m2!1sen!2sus"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
                Comprehensive house cleaning service in Sheridan, CO, full home
                cleaning near me, Kathy Clean Sheridan CO
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
