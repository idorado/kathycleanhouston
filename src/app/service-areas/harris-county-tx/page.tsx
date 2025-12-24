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
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Comprehensive House and Commercial Cleaning Service in Harris County, TX",
  description:
    "Kathy Clean Houston offers a comprehensive house and commercial cleaning service in Harris County, TX. Detailed, and eco-friendly cleaning solutions. Call now!",
  keywords: [
    "Cleaning Harris County TX",
    "Comprehensive Cleaning",
    "Kathy Clean Houston",
  ],
  alternates: {
    canonical: "https://kathycleanhouston.com/service-areas",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Home() {
  redirect("/service-areas");
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
                  Comprehensive House and Commercial Cleaning Service
                </span>
                <br />
                <span className="text-background">in Harris County, TX</span>
              </h1>
              <p className="text-lg">
                <a
                  href="https://kathycleanhouston.com/"
                  className="underline text-secondary"
                >
                  Kathy Clean Houston
                </a>{" "}
                provides a comprehensive cleaning service in Harris County, TX.
                From detailed deep cleans to routine maintenance, our trusted
                professionals deliver spotless results that make every room
                shine. Whether you’re preparing for guests or maintaining a
                healthy space, our team ensures your home or business stays
                fresh, organized, and inviting.
              </p>
              <div className="pt-4 flex flex-col md:flex-row gap-4">
                <Button variant="default" className="font-medium" asChild>
                  <CtaButton href="/request-quote">REQUEST A QUOTE</CtaButton>
                </Button>
                <PhoneButton />
                <a
                  href="sms:+13464886044"
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
                src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOs088CLSiG9Z87dAevx4W3BMCKN5nR0IhOq1"
                alt="Professional cleaning service"
                width={400}
                height={400}
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 0px, (max-width: 1280px) 50vw, 600px"
                quality={75}
                className="relative w-full h-full object-cover rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access by Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Cities We Serve in Harris County
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Houston, TX",
                  imageUrl:
                    "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKerPRAhrgFAwqQ4Bx97YSaJmXiMCRycHO6sIlv",
                  imageAlt: "Cleaning Service in Houston, TX",
                  link: "/service-areas/harris-county-tx/houston",
                },
                {
                  title: "Spring Branch, TX",
                  imageUrl:
                    "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKeCJVSdDTbvrsSFZYTU9dOXWt4AK3hpN8y1cQ7",
                  imageAlt: "Cleaning Service in Spring Branch, TX",
                  link: "/service-areas/harris-county-tx/spring-branch",
                },
                {
                  title: "Houston Heights, TX",
                  imageUrl:
                    "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKeHsVvhc03fjtVXkYx94QSdW0bKvNOe6Ms1uUR",
                  imageAlt: "Cleaning Service in Houston Heights, TX",
                  link: "/service-areas/harris-county-tx/houston-heights",
                },
                {
                  title: "Upper Kirby, TX",
                  imageUrl:
                    "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKeqfPmAjrplLSJ5y74UtdbjwOHGFRf2Y86QX0m",
                  imageAlt: "Cleaning Service in Upper Kirby, TX",
                  link: "/service-areas/harris-county-tx/upper-kirby",
                },
                {
                  title: "Memorial, TX",
                  imageUrl:
                    "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKeVwKVGcXSiG9Z87dAevx4W3BMCKN5nR0IhOq1",
                  imageAlt: "Cleaning Service in Memorial, TX",
                  link: "/service-areas/harris-county-tx/memorial",
                },
                {
                  title: "Uptown, TX",
                  imageUrl:
                    "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKe8EYzrkxtkZSlms1oIuXejnzJNr9D84OidBGh",
                  imageAlt: "Cleaning Service in Uptown, TX",
                  link: "/service-areas/harris-county-tx/uptown",
                },
                {
                  title: "Bellaire, TX",
                  imageUrl:
                    "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKeh4p3y3J6MaugieZ84fAlqrsUB1phdGnY7jSW",
                  imageAlt: "Cleaning Service in Bellaire, TX",
                  link: "/service-areas/harris-county-tx/bellaire",
                },
                {
                  title: "Medical Center Area, TX",
                  imageUrl:
                    "https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKeid10QrZ8JaU1WVTRvhHDklsYA5QFM2r8nOqS",
                  imageAlt: "Cleaning Service in Medical Center Area, TX",
                  link: "/service-areas/harris-county-tx/medical-center-area",
                },
              ].map((location, index) => (
                <LocationCard
                  key={index}
                  title={location.title}
                  imageUrl={location.imageUrl}
                  imageAlt={location.imageAlt}
                  link={location.link}
                />
              ))}
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
                  alt="Harris County Cleaning Service"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Kathy Clean Houston for Cleaning in Harris County, TX?
              </h2>
              <p className="text-gray-600 mb-6">
                Dedicated professionals ensuring spotless, healthy homes and
                businesses across Harris County.
              </p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Complete Cleaning Solutions:{" "}
                  </dt>
                  <dd className="inline">
                    Our comprehensive cleaning service in Harris County, TX
                    covers every detail—from dusting high surfaces to sanitizing
                    kitchens and bathrooms. We bring care and consistency to
                    every visit, ensuring your space always looks and feels
                    refreshed.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Eco-Friendly and Safe Products:{" "}
                  </dt>
                  <dd className="inline">
                    Kathy Clean Houston uses only non-toxic, biodegradable
                    cleaning supplies that are safe for children, pets, and the
                    environment. Our approach combines sustainability with
                    effective cleaning power for peace of mind.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <img
                      src="/images/icons/check-icon-accent.svg"
                      className="absolute w-5 left-1 top-1"
                      alt="Check Icon."
                    />
                    Consistent Quality with Flexible Scheduling:{" "}
                  </dt>
                  <dd className="inline">
                    Whether you need a weekly clean or a one-time deep service,
                    our flexible scheduling ensures your home or business stays
                    spotless without interrupting your lifestyle. Harris County
                    clients rely on our trusted cleaning experts for reliable,
                    on-time results.
                  </dd>
                </div>
              </dl>
              <RequestQuoteButton />
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
                      What does a cleaning service in Harris County, TX include?
                    </AccordionTrigger>
                    <AccordionContent>
                      A comprehensive cleaning service in Harris County, TX
                      typically includes complete dusting, floor mopping,
                      vacuuming, and disinfecting of all living areas, kitchens,
                      and bathrooms. <b>Kathy Clean Houston</b> ensures every
                      surface is spotless using eco-friendly products and
                      attention to detail that leaves spaces refreshed and
                      inviting.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      How often should I schedule a cleaning service in Harris
                      County, TX?
                    </AccordionTrigger>
                    <AccordionContent>
                      The frequency depends on your household or business needs.
                      Most clients choose weekly or biweekly cleanings, while{" "}
                      <b>Kathy Clean Houston</b> also offers flexible monthly
                      and deep-cleaning options to maintain long-term
                      cleanliness.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Do I need to provide supplies for a cleaning service in
                      Harris County, TX?
                    </AccordionTrigger>
                    <AccordionContent>
                      No, professional cleaners bring all necessary tools and
                      products for a cleaning service in Harris County, TX.{" "}
                      <b>Kathy Clean Houston</b> arrives fully equipped with
                      safe, biodegradable cleaning agents and professional-grade
                      equipment to guarantee exceptional results.
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
              Our comprehensive cleaning service in Harris County, TX covers
              homes and businesses across Houston, Spring Branch, and surrounding
              areas. <b>Kathy Clean Houston</b> provides detailed, dependable
              cleaning that ensures every space remains spotless, fresh, and
              welcoming for residents and business owners.
            </p>
            <div className="flex justify-center py-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d555670.178!2d-95.823268!3d29.775183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf3d948e6f77%3A0xcea68a1c4496f9d7!2sHarris%20County%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
                Cleaning service in Harris County, TX, Cleaning company near me,
                house cleaning service near me
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
