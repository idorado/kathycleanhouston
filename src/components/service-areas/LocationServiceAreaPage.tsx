import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import FeatureBar from "@/components/ui/FeatureBar";
import React from "react";
import HeroSection from "@/components/HeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import PhoneButton from "@/components/PhoneButton";
import Link from "next/link";

export interface LocationServiceAreaPageProps {
  title: string;
  description: string;
  canonical: string;
  robotsIndex?: boolean;

  heroTitle: string;
  heroSubtitle: string;
  heroParagraphs: string[];
  heroImage?: { url: string; alt: string };
  ctaPhone: string;
  ctaSmsNumber: string;

  benefitsTitle: string;
  benefitsParagraph: string;
  benefitsItems: { title: string; body: string; href?: string }[];
  benefitsImage: { url: string; alt: string };

  whyTitle: string;
  whyParagraph: string;
  whyItems: { title: string; body: string; href?: string }[];
  whyImage: { url: string; alt: string };

  faqItems: { question: string; answer: string }[];

  mapTitle: string;
  mapParagraph: string;
  mapEmbedUrl: string;
}

export default function LocationServiceAreaPage({
  heroTitle,
  heroSubtitle,
  heroParagraphs,
  heroImage,
  ctaPhone,
  ctaSmsNumber,
  benefitsTitle,
  benefitsParagraph,
  benefitsItems,
  benefitsImage,
  whyTitle,
  whyParagraph,
  whyItems,
  whyImage,
  faqItems,
  mapTitle,
  mapParagraph,
  mapEmbedUrl,
  children,
}: LocationServiceAreaPageProps & { children?: React.ReactNode }) {
  const normalizeBrandText = (value: string) =>
    value
      .replaceAll("Lucho’s Cleaning", "Kathy Clean Houston")
      .replaceAll("Lucho's Cleaning", "Kathy Clean Houston")
      .replaceAll("Luchos Cleaning", "Kathy Clean Houston");

  const finalHeroImage =
    heroImage ?? {
      url: "/images/hero-image.webp",
      alt: "Professional cleaner from Kathy Clean Houston holding cleaning supplies",
    };

  const rawHeroParagraph = normalizeBrandText(heroParagraphs[0] || "");
  const anchorStart = rawHeroParagraph.indexOf("<a ");
  const anchorEnd = anchorStart >= 0 ? rawHeroParagraph.indexOf("</a>", anchorStart) : -1;
  const hasAnchor = anchorStart >= 0 && anchorEnd >= 0;
  const beforeAnchorHtml = hasAnchor ? rawHeroParagraph.slice(0, anchorStart) : rawHeroParagraph;
  const afterAnchorHtml = hasAnchor ? rawHeroParagraph.slice(anchorEnd + "</a>".length) : "";

  return (
    <main className="flex flex-col min-h-screen">
      {children}

      <HeroSection>
        <div className="space-y-2 text-white text-center p-4 md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-primary">{normalizeBrandText(heroTitle)}</span>
            <br />
            <span className="text-background">{normalizeBrandText(heroSubtitle)}</span>
          </h1>
          <p className="text-lg">
            <span dangerouslySetInnerHTML={{ __html: beforeAnchorHtml }} />
            {hasAnchor ? (
              <Link href="/" className="underline text-secondary">
                Kathy Clean Houston
              </Link>
            ) : null}
            <span dangerouslySetInnerHTML={{ __html: afterAnchorHtml }} />
          </p>
          <div className="pt-4 flex flex-col md:flex-row gap-4">
            <RequestQuoteButton
              location="location_components_service_areas_location_service_area_page"
              className="font-medium"
            />
            <PhoneButton phone={ctaPhone} />
            <a
              href={`sms:${ctaSmsNumber}`}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 w-full sm:w-auto min-w-[180px] 
                border border-input bg-background text-foreground 
                [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0"
            >
              <span className="text-black hover:text-cyan-500">TEXT US</span>
            </a>
          </div>
          <FeatureBar />
        </div>
        <div className="relative hidden md:block w-full h-full">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[-10%] top-1/3 w-[360px] h-[360px] bg-[#00F5D4]/25 rounded-[40%] blur-2xl" />
            <div className="absolute right-8 top-6 w-3 h-3 bg-[#00F5D4] rounded-full" />
            <div className="absolute right-16 top-14 w-2.5 h-2.5 bg-[#00F5D4] rounded-full" />
            <div className="absolute left-10 bottom-10 w-2.5 h-2.5 bg-[#00F5D4] rounded-full" />
            <div className="absolute right-12 top-1/3 w-5 h-5 bg-[#00F5D4] rotate-45 rounded-[4px]" />
          </div>
          <Image
            src={finalHeroImage.url}
            alt={normalizeBrandText(finalHeroImage.alt)}
            width={400}
            height={400}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 0px, (max-width: 1280px) 50vw, 600px"
            quality={75}
            className="relative w-full h-full object-cover rounded-lg"
          />
        </div>
      </HeroSection>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={benefitsImage.url}
                  alt={benefitsImage.alt}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{normalizeBrandText(benefitsTitle)}</h2>
              <p className="text-gray-600 mb-6">{normalizeBrandText(benefitsParagraph)}</p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                {benefitsItems.map((item, idx) => (
                  <div key={idx} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <img
                        src="/images/icons/check-icon-accent.svg"
                        className="absolute w-5 left-1 top-1"
                        alt="Check Icon."
                      />
                      {normalizeBrandText(item.title)}{" "}
                    </dt>
                    <dd
                      className="inline"
                      dangerouslySetInnerHTML={{ __html: normalizeBrandText(item.body) }}
                    />
                  </div>
                ))}
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
              <h2 className="text-3xl font-bold mb-6">{normalizeBrandText(whyTitle)}</h2>
              <p className="text-gray-600 mb-6">{normalizeBrandText(whyParagraph)}</p>
              <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                {whyItems.map((item, idx) => (
                  <div key={idx} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <img
                        src="/images/icons/check-icon-accent.svg"
                        className="absolute w-5 left-1 top-1"
                        alt="Check Icon."
                      />
                      {normalizeBrandText(item.title)}{" "}
                    </dt>
                    <dd
                      className="inline"
                      dangerouslySetInnerHTML={{ __html: normalizeBrandText(item.body) }}
                    />
                  </div>
                ))}
              </dl>
              <RequestQuoteButton />
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={whyImage.url}
                  alt={normalizeBrandText(whyImage.alt)}
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
                  {faqItems.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
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
            <h2 className="text-3xl font-bold text-center mb-12">{mapTitle}</h2>
            <p className="text-gray-600 mb-6 text-center">{mapParagraph}</p>
            <div className="flex justify-center py-12">
              <iframe
                src={mapEmbedUrl}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
                {mapTitle}
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
