"use server";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/CtaButton";
import PhoneButton from "@/components/PhoneButton";
import WhyTrustUsSection from "@/components/sections/why-trust-us";
import ReadyForHouseCleaning from "@/components/sections/ready-for-house-cleaning";
import ThreeStepProcess from "@/components/sections/three-step-process";
import FeatureBar from "@/components/ui/FeatureBar";
import {houseCleaning} from "@/config/json-ld";
import { HouseCleaningFAQ } from "@/components/sections/house-cleaning-faq";
import JsonLd from "@/components/json-ld";
import { ensureHttps } from "@/lib/images";

// Accept location as prop
interface ResidentialServiceComponentProps {
  location?: string; // Haciendo location opcional con el operador ?
  schemaCanonicalPath?: string;
}


const ResidentialServiceComponent: React.FC<ResidentialServiceComponentProps> = async ({
  location = 'Houston',
  schemaCanonicalPath,
}) => {
  // Format location for display - asegurando que siempre sea un string
  const displayLocation = typeof location === 'string' ? location : 'Houston';
  const featuredReviews = [
    {
      quote:
        "Service is outstanding, the help is professional, courteous and always on time for scheduled cleaning. I would give Kathy Clean Houston my highest recommendation.",
      author: "Steve M.",
      date: "April 2025",
      service: "Recurring Cleaning · Houston",
    },
    {
      quote:
        "Nubia does an amazing job. She is meticulous and always willing to do anything we ask. We enjoy her great work as well as efficiency.",
      author: "Ximena V.",
      date: "March 2025",
      service: "Recurring Cleaning · Houston",
    },
    {
      quote:
        "I was referred by a neighbor and was truly impressed. Very professional and the person who came did an absolutely amazing job.",
      author: "Donna W.",
      date: "March 2025",
      service: "First Cleaning · Houston",
    },
  ];
  
  return (
    <main className="flex flex-col min-h-screen">
      <JsonLd data={houseCleaning(location, schemaCanonicalPath)} />
      <HeroSection>
        <div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {displayLocation === 'Houston' ? 'Professional House Cleaning Services in Houston' : `House Cleaning in ${displayLocation}`}
          </h1>
          <p className="text-base sm:text-lg mb-6">
            {displayLocation === 'Houston'
              ? <span>Flat-rate pricing. Background-checked cleaners. Recurring, deep clean, and move-in/out service across <a href="/service-areas/memorial" className="text-primary hover:text-primary/80 underline">Memorial</a>, <a href="/service-areas/greater-heights" className="text-primary hover:text-primary/80 underline">Heights</a>, <a href="/service-areas/spring-branch" className="text-primary hover:text-primary/80 underline">Spring Branch</a>, and West Houston.</span>
              : `Looking for trusted house cleaning services in ${displayLocation}?<br />Kathy Clean Houston delivers affordable, top-rated cleanings backed by years of experience and satisfied customers in ${displayLocation} and surrounding areas.`
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              variant="default"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full sm:w-auto min-w-[180px]"
              asChild
            >
              <CtaButton href="/request-quote" className="w-full">
                REQUEST A QUOTE
              </CtaButton>
            </Button>
            <div className="w-full sm:w-auto min-w-[180px] h-10">
              <PhoneButton />
            </div>
          </div>
          <FeatureBar />
        </div>
        <div className="relative hidden md:block w-full h-full">
          <Image
            src="/images/hero-image.webp"
            alt="Professional cleaner from Kathy Clean Houston holding cleaning supplies"
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

      {displayLocation === 'Houston' && (
        <section className="py-10 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">Weekly</p>
                <p className="text-3xl font-bold text-gray-900 mb-1">From $109</p>
                <p className="text-sm text-gray-500">per visit</p>
              </div>
              <div className="bg-white rounded-xl border-2 border-primary p-6 text-center relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">Most popular</span>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">Bi-Weekly</p>
                <p className="text-3xl font-bold text-gray-900 mb-1">From $119</p>
                <p className="text-sm text-gray-500">per visit</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">One-Time / Deep Clean</p>
                <p className="text-3xl font-bold text-gray-900 mb-1">From $225</p>
                <p className="text-sm text-gray-500">per visit</p>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mb-3">Price varies by home size and service type. Prices do not include Sales Tax (8.25%).</p>
            <p className="text-center text-sm text-gray-600 mb-5">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                48-hour satisfaction guarantee — if you&apos;re not happy, we re-clean for free
              </span>
            </p>
            <div className="text-center">
              <CtaButton href="/request-quote" className="inline-flex items-center justify-center bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors">
                Get your exact quote — free, no obligation
              </CtaButton>
            </div>
          </div>
        </section>
      )}

      <WhyTrustUsSection location={location} />

      {displayLocation === 'Houston' && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-navy-800 mb-8">
              See Why Customers Like Kathy Clean
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredReviews.map((review) => (
                <article key={review.author} className="bg-gray-50 rounded-xl border border-gray-100 p-6 text-left">
                  <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-sm leading-relaxed mb-4">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <p className="font-semibold text-sm text-gray-900">{review.author}</p>
                  <p className="text-xs text-gray-500">{review.service}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <ThreeStepProcess />
      <ReadyForHouseCleaning location={location} />

      {/* Service Types */}
      {displayLocation === 'Houston' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">Our Residential Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recurring Cleaning</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">Weekly &amp; biweekly service with flat-rate pricing. Save up to 20% vs one-time cleans.</p>
                <CtaButton href="/request-quote" className="block text-center bg-primary text-white font-medium px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm">
                  Get a Quote
                </CtaButton>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">One-Time Deep Clean</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">Thorough top-to-bottom cleaning for first-time or occasional clients.</p>
                <CtaButton href="/request-quote" className="block text-center bg-primary text-white font-medium px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm">
                  Get a Quote
                </CtaButton>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Move-In / Move-Out</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">Deposit-ready results for tenants, landlords, and homeowners in transition.</p>
                <CtaButton href="/request-quote" className="block text-center bg-primary text-white font-medium px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm">
                  Get a Quote
                </CtaButton>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <HouseCleaningFAQ location={location} />

    </main>
  );
};

export default ResidentialServiceComponent;
