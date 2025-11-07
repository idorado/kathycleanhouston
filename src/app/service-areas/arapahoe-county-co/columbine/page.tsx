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
  title: "Affordable House Cleaning Service in Columbine, CO",
  description:
    "Kathy Clean provides an affordable house cleaning service in Columbine, CO. Quality, reliable, and budget-friendly cleaning for every home. Call now!",
  keywords: [
    "House Cleaning Columbine CO",
    "Affordable House Cleaning",
    "Kathy Clean",
  ],
  alternates: {
    canonical:
      "https://kathyclean.com/service-areas/arapahoe-county-co/columbine",
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
                  Affordable House Cleaning Service
                </span>
                <br />
                <span className="text-background">in Columbine, CO</span>
              </h1>
              <p className="text-lg">
                Kathy Clean offers an affordable house cleaning service in
                Columbine, CO designed for every household budget. We combine
                expert attention to detail with efficient cleaning routines to
                deliver spotless results without the high cost—keeping your home
                fresh, clean, and inviting every day.
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
                alt="Affordable House Cleaning in Columbine CO"
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
                  alt="Affordable House Cleaning Service in Columbine CO"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Kathy Clean for an Affordable House Cleaning Service
                in Columbine, CO?
              </h2>
              <p className="text-gray-600 mb-6">
                Professional cleaning that fits your lifestyle and your budget
                in Columbine, CO.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Reliable Cleaning at Budget-Friendly Rates:{" "}
                  </dt>
                  <dd className="inline">
                    Our affordable house cleaning service in Columbine, CO
                    provides top-quality results without breaking the bank. We
                    combine efficiency, precision, and consistency to make
                    professional cleaning accessible for every homeowner, no
                    matter the budget or schedule.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Customized Cleaning Plans for Every Home:{" "}
                  </dt>
                  <dd className="inline">
                    Kathy Clean offers flexible cleaning options tailored to
                    your household needs. Whether it’s a deep clean, weekly
                    refresh, or move-out service, our affordable house cleaning
                    plans are designed to provide maximum cleanliness and
                    comfort at the best value.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Trusted Local Team Serving Columbine, CO:{" "}
                  </dt>
                  <dd className="inline">
                    Homeowners in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Columbine,_Colorado"
                      target="_blank"
                      className="underline text-cyan-500"
                    >
                      Columbine, CO
                    </a>{" "}
                    count on Kathy Clean for friendly, dependable cleaning
                    backed by transparent pricing. Our trusted local team
                    ensures your home shines from top to bottom, delivering
                    lasting freshness and satisfaction every visit.
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
                Why Affordable House Cleaning Matters in Columbine, CO
              </h2>
              <p className="text-gray-600 mb-6">
                Affordable cleaning ensures that every household can enjoy a
                clean, healthy home without overspending.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Keeps Homes Clean Without Financial Strain:{" "}
                  </dt>
                  <dd className="inline">
                    Choosing an affordable house cleaning service in Columbine,
                    CO allows homeowners to maintain spotless living spaces on a
                    regular basis without exceeding their budgets. Clean homes
                    contribute to a healthier environment and greater overall
                    comfort for every family.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Enhances Quality of Life and Daily Routine:{" "}
                  </dt>
                  <dd className="inline">
                    An affordable cleaning plan allows busy families and working
                    professionals to enjoy more free time without sacrificing
                    cleanliness. Regular maintenance ensures that every surface,
                    corner, and room stays tidy, creating a more peaceful and
                    organized home life.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Supports Long-Term Property Upkeep:{" "}
                  </dt>
                  <dd className="inline">
                    Regular, affordable cleaning prevents dust buildup, wear,
                    and surface damage that can lead to costly repairs over
                    time. For Columbine homeowners, consistent upkeep not only
                    maintains appearance but also preserves the value and
                    condition of their homes.
                  </dd>
                </div>
              </dl>
              <RequestQuoteButton />
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomLtolu5Ux3aBby7k62UgoriN9lVewuj0m4TMh"
                  alt="Affordable House Cleaning in Columbine CO"
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
                      What does an affordable house cleaning service in
                      Columbine, CO include?
                    </AccordionTrigger>
                    <AccordionContent>
                      An affordable house cleaning service in Columbine, CO
                      includes full-home cleaning covering dusting, vacuuming,
                      mopping, and sanitizing of all living spaces, kitchens,
                      and bathrooms. Every service is designed to maintain high
                      standards of cleanliness without exceeding your budget.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      How often should I book a house cleaning service in
                      Columbine, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      The frequency of a house cleaning service in Columbine, CO
                      depends on your lifestyle and household size. Weekly or
                      bi-weekly visits are most common, while{" "}
                      <b>
                        <a
                          href="https://kathyclean.com/"
                          className="underline text-cyan-500"
                        >
                          Kathy Clean
                        </a>
                      </b>{" "}
                      also offers monthly and one-time cleaning options for
                      complete flexibility and consistent results that fit your
                      schedule and budget.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      What makes an affordable cleaning service different from a
                      standard one?
                    </AccordionTrigger>
                    <AccordionContent>
                      An affordable cleaning service focuses on providing
                      excellent results at reasonable rates through efficient
                      methods and time-saving processes. Homeowners in
                      Columbine, CO benefit from professional-quality cleaning
                      without paying premium prices.
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
              Our affordable house cleaning service in Columbine, CO proudly
              serves neighborhoods such as Leawood, Columbine Knolls, and
              Normandy Estates. Kathy Clean offers dependable, high-quality
              cleaning solutions that keep every home fresh, organized, and
              spotless—all while fitting comfortably within your budget.
            </p>
            <div className="flex justify-center py-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30661.94070142353!2d-105.0805482!3d39.5867686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7f3ddda66c53%3A0xdefc5a8df64b6e3a!2sColumbine%2C%20CO%2C%20USA!5e0!3m2!1sen!2sus!4v1761832154250!5m2!1sen!2sus"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
                Affordable house cleaning service in Columbine, CO, local
                cleaning company near me, budget-friendly house cleaning
                Columbine CO
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
