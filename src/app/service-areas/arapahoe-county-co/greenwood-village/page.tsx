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
  title: "Luxury House Cleaning Service in Greenwood Village, CO",
  description:
    "Kathy Clean offers a luxury house cleaning service in Greenwood Village, CO. Premium care, finishes, and discreet service for elegant homes. Call now!",
  keywords: [
    "House Cleaning Greenwood Village CO",
    "Luxury House Cleaning",
    "Kathy Clean",
  ],
  alternates: {
    canonical:
      "https://kathyclean.com/service-areas/arapahoe-county-co/greenwood-village",
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
                  Luxury House Cleaning Service
                </span>
                <br />
                <span className="text-background">
                  in Greenwood Village, CO
                </span>
              </h1>
              <p className="text-lg">
                Kathy Clean provides a luxury house cleaning service in
                Greenwood Village, CO tailored for discerning homeowners. Our
                expert team delivers pristine finishes, discreet service, and
                exceptional care for every surface. From polished floors to
                detailed interiors, we ensure every corner of your home reflects
                elegance and excellence.
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
                alt="Luxury House Cleaning in Greenwood Village CO"
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
                  alt="Luxury House Cleaning Service in Greenwood Village CO"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Kathy Clean for a Luxury House Cleaning Service in
                Greenwood Village, CO?
              </h2>
              <p className="text-gray-600 mb-6">
                Exceptional quality and precision cleaning designed for refined
                homes in Greenwood Village.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    White-Glove Attention to Detail:{" "}
                  </dt>
                  <dd className="inline">
                    Our luxury house cleaning service in Greenwood Village, CO
                    is defined by meticulous attention to detail. Every fixture,
                    surface, and finish is cleaned to perfection, ensuring your
                    home maintains an elegant, pristine appearance worthy of its
                    design and quality.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Discreet and Professional Service:{" "}
                  </dt>
                  <dd className="inline">
                    Kathy Clean’s premium team respects your privacy and
                    schedule, offering discreet cleaning that fits seamlessly
                    into your routine. Our specialists maintain quiet, efficient
                    workflows to deliver a polished home without interruption or
                    inconvenience.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Premium Products and Finishing Techniques:{" "}
                  </dt>
                  <dd className="inline">
                    From marble and glass to hardwood and fine upholstery, we
                    use premium-grade cleaning solutions suited to each surface.
                    Our advanced methods enhance natural beauty, protect
                    delicate finishes, and deliver a spotless, luxurious feel
                    throughout your entire home.
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
                Why Luxury House Cleaning Matters in Greenwood Village, CO
              </h2>
              <p className="text-gray-600 mb-6">
                Maintaining elegance and cleanliness enhances both comfort and
                home value in Greenwood Village.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Preserves the Prestige of High-End Homes:{" "}
                  </dt>
                  <dd className="inline">
                    A luxury house cleaning service in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Greenwood_Village,_Colorado"
                      target="_blank"
                      className="underline text-cyan-500"
                    >
                      Greenwood Village, CO
                    </a>{" "}
                    ensures every fine detail of your property remains
                    immaculate. Regular upkeep helps maintain the visual appeal,
                    sophistication, and long-term value of luxury homes in one
                    of Colorado’s most elegant communities.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Promotes Health and a Comfortable Living Space:{" "}
                  </dt>
                  <dd className="inline">
                    Premium cleaning methods remove allergens, dust, and
                    airborne pollutants that can accumulate in large homes.
                    Kathy Clean ensures every room remains hygienic, fresh, and
                    safe for families, combining luxury standards with a healthy
                    living environment.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Enhances Mood and Lifestyle Quality:{" "}
                  </dt>
                  <dd className="inline">
                    Living in a spotless, organized environment boosts
                    relaxation and mental well-being. Kathy Clean’s luxury house
                    cleaning in Greenwood Village, CO transforms living spaces
                    into polished, welcoming retreats that reflect refinement
                    and attention to detail.
                  </dd>
                </div>
              </dl>
              <RequestQuoteButton />
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomLtolu5Ux3aBby7k62UgoriN9lVewuj0m4TMh"
                  alt="Luxury House Cleaning in Greenwood Village CO"
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
                      What makes a luxury house cleaning service in Greenwood
                      Village, CO different?
                    </AccordionTrigger>
                    <AccordionContent>
                      A luxury house cleaning service in Greenwood Village, CO
                      delivers an elevated experience emphasizing precision,
                      quality, and discretion. Professionals use specialized
                      techniques and premium products to protect high-value
                      materials, ensuring your home maintains its refined look
                      and impeccable finish.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      How often should I schedule a luxury house cleaning
                      service in Greenwood Village, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      Homeowners typically schedule luxury house cleaning
                      services on a weekly or bi-weekly basis to maintain
                      flawless interiors. Consistent cleaning helps prevent
                      buildup, preserve finishes, and keep every room looking
                      pristine and inviting year-round.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Do I need to provide supplies for a luxury cleaning
                      service in Greenwood Village, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      No, there’s no need to provide any cleaning supplies.{" "}
                      <b>
                        <a
                          href="https://kathyclean.com/"
                          className="underline text-cyan-500"
                        >
                          Kathy Clean
                        </a>
                      </b>{" "}
                      arrives fully equipped with professional-grade tools and
                      high-end cleaning products tailored for delicate
                      materials. Every visit ensures the same luxury-level care
                      and consistent perfection for your Greenwood Village home.
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
              Our luxury house cleaning service in Greenwood Village, CO caters
              to distinguished neighborhoods such as Cherry Creek, The Preserve,
              and Belleview Acres. Kathy Clean offers premium care and discreet
              service, ensuring every residence reflects elegance, comfort, and
              spotless sophistication from top to bottom.
            </p>
            <div className="flex justify-center py-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30665.844929247336!2d-104.924876!3d39.610695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c86a9c8c29c63%3A0xdea32c9a7c75e32a!2sGreenwood%20Village%2C%20CO%2C%20USA!5e0!3m2!1sen!2sus!4v1761836083491!5m2!1sen!2sus"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
                Luxury house cleaning service in Greenwood Village, CO, premium
                home cleaning near me, luxury cleaning Greenwood Village CO
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
