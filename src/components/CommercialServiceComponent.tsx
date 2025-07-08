"use server";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CustomPhoneButton from "@/components/CustomPhoneButton";
import { CtaButton } from "@/components/ui/CtaButton";

import IndustriesSpecialized from "@/components/sections/industries-specialized";
import WhyInvestInCommercialCleaningSection from "@/components/sections/why-invest-in-commercial-cleaning";



import WhyTrustJanitorialSection from "@/components/sections/why-trust-janitorial";
import ReadyForCleanerWorkspaceSection from "@/components/sections/ready-for-cleaner-workspace";
import CustomerReviewsSection from "@/components/sections/customer-reviews";
import FourStepSetupSection from "@/components/sections/four-step-setup";
import ServiceAreaHighlightGeneric from "@/components/sections/service-area-highlight-generic";

interface CommercialServiceComponentProps {
  location: string;
}

const CommercialServiceComponent = async ({ location }: CommercialServiceComponentProps) => {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={`Commercial Cleaning${location ? ` in ${location}` : ''}`}
        description="We offer thorough window cleaning services that enhance the appearance of your business or home. From standard interior/exterior cleaning to hard water stain removal, our team ensures a spotless view every time."
        imgUrl="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomNqiHdB8Qqho34HzWAgdjRlcDPJntsL1f2TIb"
        imgAlt="Professional commercial cleaning service"
        imgWidth={400}
        imgHeight={400}
        imgPriority={true}
      >
        <div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Commercial Cleaning{location ? ` in ${location}` : ''}</h1>
          <p className="text-base sm:text-lg">
            Looking for reliable janitorial services in {location}?<br />
            Kathy Clean provides professional cleaning services for offices, clinics, retail stores, and more throughout {location}. With over 10 years of experience and trusted by brands like IKEA, Starbucks, Whole Foods, and PetSmart, we deliver spotless results tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <CtaButton
              className="py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full sm:w-auto min-w-[180px]"
              href="/request-quote"
            >
              REQUEST A QUOTE
            </CtaButton>
            <div 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 w-full sm:w-auto min-w-[180px] text-base
                        border border-input bg-background text-foreground
                        [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-black">(303) 681-2559</span>
            </div>
          </div>
        </div>
        <div className="relative hidden md:flex w-full justify-center items-center">
          <img
            src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomNqiHdB8Qqho34HzWAgdjRlcDPJntsL1f2TIb"
            alt="Professional commercial cleaning service"
            width={400}
            height={400}
            className="object-cover rounded-lg shadow-md"
            style={{ color: 'transparent', maxWidth: 400, maxHeight: 400 }}
          />
        </div>
      </HeroSection>

      <WhyTrustJanitorialSection location={location} />

      <IndustriesSpecialized location={location} />

      <ReadyForCleanerWorkspaceSection />
      <CustomerReviewsSection />
      <FourStepSetupSection />
      <ServiceAreaHighlightGeneric
        location={location}
        serviceTitle="Commercial Cleaning Services in"
        subtitle="Office, Retail & Janitorial Cleaning You Can Count On"
        description={`Kathy Clean delivers reliable commercial cleaning services in ${location} tailored for offices, retail spaces, and other business environments. Our trained professionals use high-quality products and proven systems to ensure your space is spotless, safe, and welcoming. Whether it’s a small office, a large facility, or a multi-location business. Trusted by business owners and property managers across ${location}.`}
      />
      <WhyInvestInCommercialCleaningSection />
    </main>
  );
};

export default CommercialServiceComponent;
