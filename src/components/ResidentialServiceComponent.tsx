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
import {houseCleaning, buildFaqPageSchema, buildBreadcrumbSchema} from "@/config/json-ld";
import ReviewsCarousel from "@/components/sections/reviews-carousel";
import { HouseCleaningFAQ } from "@/components/sections/house-cleaning-faq";
import { houseCleaningFaqItems } from "@/config/house-cleaning-faq-data";
import JsonLd from "@/components/json-ld";
import { ensureHttps } from "@/lib/images";
import StickyCtaMobile from "@/components/ui/StickyCtaMobile";
import Link from "next/link";

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
      date: "April 2026",
      service: "Recurring Cleaning · Houston",
    },
    {
      quote:
        "Nubia does an amazing job. She is meticulous and always willing to do anything we ask. We enjoy her great work as well as efficiency.",
      author: "Ximena V.",
      date: "March 2026",
      service: "Recurring Cleaning · Houston",
    },
    {
      quote:
        "I was referred by a neighbor and was truly impressed. Very professional and the person who came did an absolutely amazing job.",
      author: "Donna W.",
      date: "March 2026",
      service: "First Cleaning · Houston",
    },
  ];
  
  const faqForSchema = houseCleaningFaqItems.map((i) => ({
    question: i.question.replace(/{Location}/g, displayLocation),
    answer: i.answer.replace(/{Location}/g, displayLocation),
  }));

  return (
    <main className="flex flex-col min-h-screen pb-16 md:pb-0">
      <JsonLd data={houseCleaning(location, schemaCanonicalPath)} />
      <JsonLd data={buildFaqPageSchema(faqForSchema, schemaCanonicalPath)} />
      <JsonLd data={buildBreadcrumbSchema([{ name: `House Cleaning in ${displayLocation}`, path: schemaCanonicalPath ?? "/house-cleaning-houston" }])} />
      <HeroSection>
        <div className="on-dark space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {displayLocation === 'Houston' ? 'Professional House Cleaning Services in Houston' : `House Cleaning in ${displayLocation}`}
          </h1>
          <p className="text-base sm:text-lg mb-6">
            {displayLocation === 'Houston'
              ? <span>The same trusted team, every visit — not a different stranger from an app. Background-checked, insured, and serving <a href="/service-areas/memorial" className="text-primary hover:text-primary/80 underline">Memorial</a>, <a href="/service-areas/greater-heights" className="text-primary hover:text-primary/80 underline">Heights</a>, <a href="/service-areas/spring-branch" className="text-primary hover:text-primary/80 underline">Spring Branch</a>, and West Houston.</span>
              : `Looking for trusted house cleaning services in ${displayLocation}?<br />Kathy Clean Houston delivers affordable, top-rated cleanings backed by years of experience and satisfied customers in ${displayLocation} and surrounding areas.`
            }
          </p>
          <div id="hero-cta" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              variant="default"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full sm:w-auto min-w-[180px]"
              asChild
            >
              <CtaButton href="/request-quote" className="w-full">
                GET A QUOTE
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

      <WhyTrustUsSection location={location} />

      {displayLocation === 'Houston' && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-navy-800 mb-8">
              See Why Customers Like Kathy Clean
            </h2>
            <ReviewsCarousel reviews={featuredReviews} />
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2"><Link href="/recurring-house-cleaning-houston" className="hover:text-[var(--blue-ribbon)]">Recurring Cleaning</Link></h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">Weekly &amp; biweekly service with flat-rate pricing. Save up to 20% vs one-time cleans.</p>
                <Link href="/resources/how-often-house-cleaning-houston" className="text-sm font-medium underline mb-3 text-[var(--blue-ribbon)] hover:text-[var(--space-cadet)]">How often should you clean? →</Link>
                <CtaButton href="/request-quote" className="block text-center bg-primary text-white font-medium px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm">
                  Get a Quote
                </CtaButton>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2"><Link href="/deep-cleaning-houston" className="hover:text-[var(--blue-ribbon)]">One-Time Deep Clean</Link></h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">Thorough top-to-bottom cleaning for first-time or occasional clients.</p>
                <Link href="/resources/deep-cleaning-houston" className="text-sm font-medium underline mb-3 text-[var(--blue-ribbon)] hover:text-[var(--space-cadet)]">What a deep clean includes →</Link>
                <CtaButton href="/request-quote" className="block text-center bg-primary text-white font-medium px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm">
                  Get a Quote
                </CtaButton>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2"><Link href="/move-in-move-out-houston" className="hover:text-[var(--blue-ribbon)]">Move-In / Move-Out</Link></h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">Deposit-ready results for tenants, landlords, and homeowners in transition.</p>
                <Link href="/resources/move-in-move-out-cleaning-houston" className="text-sm font-medium underline mb-3 text-[var(--blue-ribbon)] hover:text-[var(--space-cadet)]">Move-in/out cleaning guide →</Link>
                <CtaButton href="/request-quote" className="block text-center bg-primary text-white font-medium px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm">
                  Get a Quote
                </CtaButton>
              </div>
            </div>
          </div>
        </section>
      )}

      {displayLocation === 'Houston' && (
        <>
          {/* By the numbers — extractable facts for AI/GEO citability */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">Kathy Clean Houston by the Numbers</h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
                Kathy Clean has cleaned homes for over 15 years and serves 25+ Houston-metro neighborhoods across Harris County. We hold a 4.9-star Google rating, price every job flat-rate (recurring bi-weekly cleaning starts at $119 per visit), and back every visit with a 48-hour satisfaction guarantee — with insured, bonded, and background-checked cleaning teams.
              </p>
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div><dt className="text-3xl font-bold text-primary">15+</dt><dd className="text-sm text-gray-600">Years of experience</dd></div>
                <div><dt className="text-3xl font-bold text-primary">4.9★</dt><dd className="text-sm text-gray-600">Google rating</dd></div>
                <div><dt className="text-3xl font-bold text-primary">25+</dt><dd className="text-sm text-gray-600">Neighborhoods served</dd></div>
                <div><dt className="text-3xl font-bold text-primary">48-hr</dt><dd className="text-sm text-gray-600">Satisfaction guarantee</dd></div>
              </dl>
            </div>
          </section>

          {/* Neighborhoods we serve — internal links */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">House Cleaning Across Houston</h2>
              <p className="text-gray-600 text-center mb-8">We serve homes throughout Harris County. Explore your neighborhood:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "Memorial", href: "/service-areas/memorial" },
                  { name: "Greater Heights", href: "/service-areas/greater-heights" },
                  { name: "Rice Military", href: "/service-areas/rice-military" },
                  { name: "Energy Corridor", href: "/service-areas/energy-corridor" },
                  { name: "Spring Branch", href: "/service-areas/spring-branch" },
                  { name: "Bellaire", href: "/service-areas/bellaire" },
                  { name: "West University Place", href: "/service-areas/west-university-place" },
                  { name: "River Oaks", href: "/service-areas/river-oaks" },
                  { name: "Galleria / Uptown", href: "/service-areas/greater-uptown" },
                  { name: "Medical Center", href: "/service-areas/medical-center-area" },
                  { name: "Montrose", href: "/house-cleaning-montrose" },
                  { name: "Midtown", href: "/house-cleaning-midtown" },
                ].map((n) => (
                  <Link key={n.href} href={n.href} className="inline-block rounded-lg border bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:border-primary hover:text-primary">{n.name}</Link>
                ))}
              </div>
              <p className="text-center mt-6"><Link href="/service-areas" className="text-primary font-medium underline">View all Houston service areas →</Link></p>
            </div>
          </section>

          {/* Houston cleaning guides — resource internal links */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Houston Cleaning Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "How much does house cleaning cost in Houston?", href: "/resources/house-cleaning-cost-houston" },
                  { title: "What's included in a house cleaning?", href: "/resources/what-is-included-house-cleaning" },
                  { title: "How often should you schedule cleaning?", href: "/resources/how-often-house-cleaning-houston" },
                  { title: "How to choose the best cleaning service", href: "/resources/best-house-cleaning-service-houston" },
                  { title: "Deep cleaning: what to expect & cost", href: "/resources/deep-cleaning-houston" },
                  { title: "Move-in / move-out cleaning guide", href: "/resources/move-in-move-out-cleaning-houston" },
                ].map((g) => (
                  <Link key={g.href} href={g.href} className="block rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-800 shadow-sm transition-colors hover:border-primary hover:text-primary">{g.title} →</Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* FAQ Section */}
      <HouseCleaningFAQ location={location} />

      <StickyCtaMobile />
    </main>
  );
};

export default ResidentialServiceComponent;
