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
  title: "Reliable House Cleaning Service in Centennial, CO",
  description:
    "Kathy Clean provides a reliable house cleaning service in Centennial, CO. Trusted, detailed, and eco-conscious cleaning for spotless homes. Call now!",
  keywords: [
    "House Cleaning Centennial CO",
    "Reliable House Cleaning",
    "Kathy Clean",
  ],
  alternates: {
    canonical:
      "https://kathyclean.com/service-areas/arapahoe-county-co/centennial",
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
                  Reliable House Cleaning Service
                </span>
                <br />
                <span className="text-background">in Centennial, CO</span>
              </h1>
              <p className="text-lg">
                <a
                  href="https://kathyclean.com/"
                  className="underline text-secondary"
                >
                  Kathy Clean
                </a>{" "}
                provides a reliable house cleaning service in Centennial, CO.
                Our dedicated cleaners focus on consistent quality, spotless
                results, and eco-friendly methods that refresh every corner of
                your home. Whether for weekly upkeep or a full deep clean, we
                ensure every surface shines with care and precision.
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
                alt="Professional house cleaning service in Centennial, CO"
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
                  alt="Reliable House Cleaning Service in Centennial CO"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Kathy Clean for a Reliable House Cleaning Service in
                Centennial, CO?
              </h2>
              <p className="text-gray-600 mb-6">
                Trusted professionals delivering spotless, healthy, and
                organized homes throughout Centennial.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Detailed Room-by-Room Cleaning:{" "}
                  </dt>
                  <dd className="inline">
                    Our reliable house cleaning service in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Centennial,_Colorado"
                      target="_blank"
                      className="underline text-cyan-500"
                    >
                      Centennial, CO
                    </a>{" "}
                    includes meticulous cleaning for kitchens, bathrooms, living
                    spaces, and bedrooms. From baseboards to ceiling fans, every
                    corner is cleaned with precision to ensure lasting freshness
                    and hygiene.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Safe and Eco-Friendly Cleaning Products:{" "}
                  </dt>
                  <dd className="inline">
                    Kathy Clean uses biodegradable, non-toxic cleaning solutions
                    safe for your family, pets, and the environment. Our
                    products eliminate dirt and allergens effectively while
                    maintaining indoor air quality and promoting a healthier
                    home.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Flexible Scheduling and Consistent Results:{" "}
                  </dt>
                  <dd className="inline">
                    Whether you prefer weekly, bi-weekly, or one-time cleaning,
                    our team adapts to your schedule for maximum convenience.
                    Homeowners in Centennial trust our reliable house cleaning
                    service for dependable timing and consistent results that
                    exceed expectations.
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
                Why House Cleaning Matters in Centennial, CO
              </h2>
              <p className="text-gray-600 mb-6">
                Clean homes support health, comfort, and lasting property value
                in every Centennial neighborhood.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Improves Indoor Air and Family Health:{" "}
                  </dt>
                  <dd className="inline">
                    Regular cleaning reduces allergens, dust mites, and pet
                    dander that accumulate in fabrics, carpets, and vents. A
                    reliable house cleaning service in Centennial, CO helps
                    ensure fresher air, healthier breathing, and a more hygienic
                    home for you and your loved ones.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Protects Home Surfaces and Long-Term Value:{" "}
                  </dt>
                  <dd className="inline">
                    Consistent upkeep prevents buildup of grime, mold, and
                    bacteria that can damage finishes and fixtures. By
                    scheduling a reliable house cleaning service in Centennial,
                    CO, homeowners maintain both cleanliness and the long-term
                    integrity of their property’s interior spaces.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Boosts Comfort, Confidence, and Community Pride:{" "}
                  </dt>
                  <dd className="inline">
                    A clean, organized home enhances mood and productivity while
                    fostering a sense of pride in one’s surroundings. Residents
                    of Centennial trust{" "}
                    <a
                      href="https://kathyclean.com/"
                      className="underline text-cyan-500"
                    >
                      Kathy Clean
                    </a>{" "}
                    to maintain pristine living environments that reflect care,
                    comfort, and community standards.
                  </dd>
                </div>
              </dl>
              <RequestQuoteButton />
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomLtolu5Ux3aBby7k62UgoriN9lVewuj0m4TMh"
                  alt="Reliable House Cleaning in Centennial CO"
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
                      What does a reliable house cleaning service in Centennial,
                      CO include?
                    </AccordionTrigger>
                    <AccordionContent>
                      A reliable house cleaning service in Centennial, CO
                      typically covers dusting, mopping, vacuuming, and
                      sanitizing all major areas of your home including
                      bathrooms, kitchens, and bedrooms. <b>Kathy Clean</b>{" "}
                      delivers thorough cleaning using eco-friendly solutions,
                      leaving every room spotless, fresh, and comfortable for
                      your family.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      How often should I schedule a house cleaning service in
                      Centennial, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      The ideal frequency for a house cleaning service in
                      Centennial, CO depends on lifestyle and household size.
                      Many residents prefer weekly or biweekly cleanings, while{" "}
                      <b>Kathy Clean</b> also provides monthly deep cleans and
                      custom maintenance plans to ensure your home always stays
                      spotless and welcoming.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Do I need to supply cleaning materials for a house
                      cleaning service in Centennial, CO?
                    </AccordionTrigger>
                    <AccordionContent>
                      No, you don’t need to provide any products or tools for a
                      house cleaning service in Centennial, CO.{" "}
                      <b>Kathy Clean</b> arrives with professional-grade,
                      non-toxic supplies and advanced equipment to ensure
                      consistent, high-quality results while protecting your
                      family and home environment.
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
              Our reliable house cleaning service in Centennial, CO extends to
              homes across neighborhoods like Willow Creek, Foxridge, and Piney
              Creek. <b>Kathy Clean</b> delivers consistent, eco-friendly
              cleaning that keeps every home spotless and inviting. We proudly
              serve Centennial residents with dependable quality, attention to
              detail, and customer-focused care.
            </p>
            <div className="flex justify-center py-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30670.930710086667!2d-104.8869616!3d39.5945516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8586c6b0a8cb%3A0xe8c5b8b84cc7eb7b!2sCentennial%2C%20CO%2C%20USA!5e0!3m2!1sen!2sus!4v1761825439021!5m2!1sen!2sus"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
                Reliable house cleaning service in Centennial, CO, Cleaning
                company near me, house cleaning Centennial CO
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
