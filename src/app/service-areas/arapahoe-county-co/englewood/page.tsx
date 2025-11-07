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
  title: "Eco-Friendly House Cleaning Service in Englewood, CO",
  description:
    "Kathy Clean offers an eco-friendly house cleaning service in Englewood, CO. Safe, sustainable, and detailed cleaning solutions for your home. Call now!",
  keywords: [
    "House Cleaning Englewood CO",
    "Eco-Friendly House Cleaning",
    "Kathy Clean",
  ],
  alternates: {
    canonical:
      "https://kathyclean.com/service-areas/arapahoe-county-co/englewood",
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
                  Eco-Friendly House Cleaning Service
                </span>
                <br />
                <span className="text-background">in Englewood, CO</span>
              </h1>
              <p className="text-lg">
                Kathy Clean provides an eco-friendly house cleaning service in
                Englewood, CO. Our green-certified products and sustainable
                methods protect your home and the planet while ensuring every
                surface is spotless. From kitchens to living areas, we deliver
                freshness and care that you can feel good about.
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
                alt="Eco-Friendly House Cleaning in Englewood CO"
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
                  alt="Eco-Friendly House Cleaning Service in Englewood CO"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Kathy Clean for an Eco-Friendly House Cleaning
                Service in Englewood, CO?
              </h2>
              <p className="text-gray-600 mb-6">
                Sustainable cleaning practices that protect your home, family,
                and environment in Englewood.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Green Cleaning for a Healthier Home:{" "}
                  </dt>
                  <dd className="inline">
                    Our eco-friendly house cleaning service in Englewood, CO
                    uses plant-based products free of harsh chemicals. Every
                    cleaning reduces allergens, toxins, and odors while
                    promoting a healthier indoor environment for your family and
                    pets.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Certified Eco-Conscious Products and Methods:{" "}
                  </dt>
                  <dd className="inline">
                    Kathy Clean relies on eco-certified products approved for
                    use in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Englewood,_Colorado"
                      target="_blank"
                      className="underline text-cyan-500"
                    >
                      Englewood, CO
                    </a>
                    . Our cleaning techniques conserve water, minimize waste,
                    and ensure every surface shines naturally without harming
                    your home’s air quality or the environment.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Gentle Yet Effective Deep Cleaning:{" "}
                  </dt>
                  <dd className="inline">
                    Our eco-friendly cleaning solutions are tough on dirt but
                    gentle on delicate surfaces. Whether it’s wood, tile, or
                    stone, Kathy Clean’s specialists use balanced methods to
                    maintain shine, prevent damage, and preserve the natural
                    look of your interiors.
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
                Why Eco-Friendly House Cleaning Matters in Englewood, CO
              </h2>
              <p className="text-gray-600 mb-6">
                Sustainable cleaning supports health, comfort, and a cleaner
                local environment in Englewood.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Improves Air Quality and Well-Being:{" "}
                  </dt>
                  <dd className="inline">
                    Using eco-friendly products reduces the amount of volatile
                    organic compounds and harsh residues left behind after
                    cleaning. Residents who choose an eco-friendly house
                    cleaning service in Englewood, CO enjoy cleaner air, fewer
                    irritants, and a healthier living space.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Protects the Environment and Local Waterways:{" "}
                  </dt>
                  <dd className="inline">
                    By avoiding harmful chemicals and using biodegradable
                    cleaners, eco-friendly house cleaning in Englewood, CO
                    prevents pollution from entering local drainage systems and
                    waterways, contributing to a cleaner and safer community
                    ecosystem.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Creates a Healthier Home for Families and Pets:{" "}
                  </dt>
                  <dd className="inline">
                    Eco-friendly cleaning eliminates the risk of chemical
                    residues on household surfaces. Families and pet owners in
                    Englewood, CO can feel confident that their living spaces
                    remain safe, non-toxic, and inviting after every scheduled
                    cleaning.
                  </dd>
                </div>
              </dl>
              <RequestQuoteButton />
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomLtolu5Ux3aBby7k62UgoriN9lVewuj0m4TMh"
                  alt="Eco-Friendly House Cleaning in Englewood CO"
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
                      What does an eco-friendly house cleaning service in
                      Englewood, CO include?
                    </AccordionTrigger>
                    <AccordionContent>
                      An eco-friendly house cleaning service in Englewood, CO
                      includes full home care using safe, non-toxic products and
                      sustainable techniques.{" "}
                      <b>
                        <a
                          href="https://kathyclean.com/"
                          className="underline text-cyan-500"
                        >
                          Kathy Clean
                        </a>
                      </b>{" "}
                      provides detailed cleaning for kitchens, bathrooms, and
                      living areas, ensuring spotless results while protecting
                      your home’s air quality and the environment.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      Why choose eco-friendly cleaning products for my home in
                      Englewood, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      Choosing eco-friendly cleaning products helps minimize
                      exposure to harsh chemicals that can affect air quality
                      and health. These products are biodegradable, safe for
                      pets and children, and deliver powerful results while
                      supporting a cleaner environment in Englewood, CO.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      How often should I book an eco-friendly house cleaning
                      service in Englewood, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      The frequency of an eco-friendly house cleaning service in
                      Englewood, CO depends on your home size and lifestyle.
                      Many homeowners prefer weekly or bi-weekly cleanings to
                      maintain a consistently fresh and toxin-free living space
                      year-round.
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
              Our eco-friendly house cleaning service in Englewood, CO proudly
              serves neighborhoods across the city, including Cherry Hills,
              South Broadway, and Belleview Park. Kathy Clean offers safe,
              sustainable cleaning methods that ensure every home stays fresh,
              spotless, and toxin-free with every visit.
            </p>
            <div className="flex justify-center py-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30674.346482616205!2d-104.9926541!3d39.6477641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c80a8c3fba0c1%3A0x3e5160b1b8ffad13!2sEnglewood%2C%20CO%2C%20USA!5e0!3m2!1sen!2sus!4v1761829212319!5m2!1sen!2sus"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
                Eco-friendly house cleaning service in Englewood, CO, green
                cleaning near me, sustainable house cleaning Englewood CO
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
