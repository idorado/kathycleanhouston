"use server";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/CtaButton";
import PhoneButton from "@/components/PhoneButton";
import AdditionalServices from "@/components/AdditionalServices";
import { ServiceCards } from "@/components/cards/services";
import WhyTrustWindowCleaning from "@/components/sections/why-trust-window-cleaning";
import WhyBusinessesHomesChooseUs from "@/components/sections/why-businesses-homes-choose-us";
import ReviewHighlightWindowCleaning from "@/components/sections/review-highlight-window-cleaning";
import ReadyForWindowCleaning from "@/components/sections/ready-for-window-cleaning";
import ThreeStepProcess from "@/components/sections/three-step-process";
import ServiceAreaHighlightWindowCleaning from "@/components/sections/service-area-highlight-window-cleaning";
import WindowCleaningBenefits from "@/components/sections/window-cleaning-benefits";
import { WindowCleaningFAQ } from "@/components/sections/window-cleaning-faq";
import FeatureBar from "@/components/ui/FeatureBar";
import {windowCleaning} from "@/config/json-ld"
import JsonLd from "@/components/json-ld";
import { ensureHttps } from "@/lib/images";

interface WindowsServiceComponentProps {
  location: string;
}

const WindowsServiceComponent: React.FC<WindowsServiceComponentProps> = async ({ location }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <JsonLd data={windowCleaning(location)} />
      <HeroSection>
        <div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Window Cleaning in {location || 'Your Area'}</h1>
          <p className="text-base sm:text-lg">
            We offer thorough window cleaning services that enhance the appearance of your business or home. From standard interior/exterior cleaning to hard water stain removal, we prioritize a spotless view every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              variant="default"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full sm:w-auto min-w-[180px]"
              asChild
            >
              <CtaButton href="/request-quote">
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
          <div className="relative w-[400px] h-[400px]">
            <Image
              src={ensureHttps("https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomkroY4QBMKEtR4Y9c3GgQrxuo7N6XZ2LnleTp")}
              alt="Professional window cleaning service"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover rounded-lg shadow-md"
              priority
            />
          </div>
        </div>
      </HeroSection>

      <WhyTrustWindowCleaning location={location} />
      <ReviewHighlightWindowCleaning location={location} />
      <ThreeStepProcess />
      <ReadyForWindowCleaning location={location} />
      <ServiceAreaHighlightWindowCleaning location={location} />
      <WindowCleaningBenefits />
      
      {/* Window Cleaning Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Window Cleaning Services</h2>
          <p className="text-lg mb-8 mx-auto max-w-3xl">
            Crystal clear windows enhance your property's appearance and let in more natural light. 
            We provide professional window cleaning services that leave your windows spotless and streak-free.
          </p>
          <ServiceCards serviceType="window-cleaning" />
        </div>
      </section>
      
      <WindowCleaningFAQ location={location} />
    </main>
  );
};

export default WindowsServiceComponent;
