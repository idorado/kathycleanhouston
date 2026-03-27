"use server";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/CtaButton";
import PhoneButton from "@/components/PhoneButton";
import AdditionalServices from "@/components/AdditionalServices";
import { ServiceCards } from "@/components/cards/services";
import WhyTrustUsSection from "@/components/sections/why-trust-us";
import ReviewHighlightHouseCleaning from "@/components/sections/review-highlight-house-cleaning";
import ReadyForHouseCleaning from "@/components/sections/ready-for-house-cleaning";
import ThreeStepProcess from "@/components/sections/three-step-process";
import ServiceAreaHighlightHouseCleaning from "@/components/sections/service-area-highlight-house-cleaning";
import WellnessBenefits from "@/components/sections/wellness-benefits";
import FeatureBar from "@/components/ui/FeatureBar";
import {houseCleaning} from "@/config/json-ld";
import { HouseCleaningFAQ } from "@/components/sections/house-cleaning-faq";
import JsonLd from "@/components/json-ld";
import { ensureHttps } from "@/lib/images";

// Accept location as prop
interface ResidentialServiceComponentProps {
  location?: string; // Haciendo location opcional con el operador ?
}


const ResidentialServiceComponent: React.FC<ResidentialServiceComponentProps> = async ({ location = 'Houston' }) => {
  // Format location for display - asegurando que siempre sea un string
  const displayLocation = typeof location === 'string' ? location : 'Houston';
  
  return (
    <main className="flex flex-col min-h-screen">
      <JsonLd data={houseCleaning(location)} />
      <HeroSection>
        <div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {displayLocation === 'Houston' ? 'Recurring House Cleaning Services in Houston' : `House Cleaning in ${displayLocation}`}
          </h1>
          <p className="text-base sm:text-lg mb-6">
            {displayLocation === 'Houston' 
              ? <span>Weekly and biweekly house cleaning with reliable, flat-rate pricing. Serving <a href="/service-areas/memorial" className="text-primary hover:text-primary/80 underline">Memorial</a>, <a href="/service-areas/greater-heights" className="text-primary hover:text-primary/80 underline">Heights</a>, <a href="/service-areas/spring-branch" className="text-primary hover:text-primary/80 underline">Spring Branch</a>, and West Houston neighborhoods with consistent, trusted service.</span>
              : `Looking for trusted house cleaning services in ${displayLocation}?<br />Kathy Clean Houston delivers affordable, top-rated cleanings backed by years of experience and satisfied customers in ${displayLocation} and surrounding areas.`
            }
          </p>
          {displayLocation === 'Houston' && (
            <p className="text-base text-gray-200 mb-6">
              Most of our Houston customers choose recurring cleaning to keep their homes consistently clean while saving time and cost.
            </p>
          )}
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
        <div className="relative hidden md:flex w-full justify-center items-center">
          <div className="relative w-[480px] h-[480px]">
            <Image
              src={ensureHttps("https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomlkWQowW1K9N4DUxFng7weyZbAGHESLJh3Ifa")}
              alt="Professional residential cleaning service"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover rounded-lg shadow-md"
              priority
            />
          </div>
        </div>
      </HeroSection>

      <WhyTrustUsSection location={location} />

      {displayLocation === 'Houston' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Why Recurring Cleaning Works Best for Houston Homes
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Consistent Results</h3>
                    <p className="text-gray-600">Regular cleanings maintain your home's condition week after week, preventing buildup and keeping everything consistently fresh.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Lower Long-Term Cost</h3>
                    <p className="text-gray-600">Recurring service costs less per visit than one-time cleanings, with discounted pricing for regular customers.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">No Deep Buildup</h3>
                    <p className="text-gray-600">Frequent cleanings prevent dirt and grime from accumulating, eliminating the need for intensive deep cleaning sessions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Predictable Schedule</h3>
                    <p className="text-gray-600">Set weekly or biweekly appointments give you peace of mind and a clean home without having to think about it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <ReviewHighlightHouseCleaning location={location} />
      <ThreeStepProcess />
      <ReadyForHouseCleaning location={location} />
      <ServiceAreaHighlightHouseCleaning location={location} />
      <WellnessBenefits />

      {/* Our Residential Services */}
      <div
        className="flex flex-col items-center justify-center gap-8 py-24 bg-gray-100"
        id="residential"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-primary-foreground">
            Our Residential Services
          </h3>
          <p className="text-lg mb-4 md:mb-6 mx-auto max-w-3xl">
            A clean home protects your family, creates a comfortable environment, and leaves a lasting impression. We help your home thrive with top-quality professional cleaning.
          </p>
        </div>
        <ServiceCards />
      </div>

      {/* Houston Resources Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              House Cleaning Guides for Houston Homes
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most homeowners in Houston start by understanding pricing and how often to schedule cleaning before booking. These guides help you make informed decisions about your cleaning service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                <a 
                  href="/resources/house-cleaning-cost-houston" 
                  className="text-primary hover:text-primary/80 no-underline"
                >
                  How Much Does House Cleaning Cost in Houston?
                </a>
              </h4>
              <p className="text-gray-600">
                Learn about pricing factors, what affects house cleaning costs, and how flat-rate pricing works for Houston homes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                <a 
                  href="/resources/how-often-house-cleaning-houston" 
                  className="text-primary hover:text-primary/80 no-underline"
                >
                  How Often Should You Schedule House Cleaning in Houston?
                </a>
              </h4>
              <p className="text-gray-600">
                Discover weekly, biweekly, and recurring cleaning schedules to find the perfect frequency for your Houston home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <HouseCleaningFAQ location={location} />

    </main>
  );
};

export default ResidentialServiceComponent;
