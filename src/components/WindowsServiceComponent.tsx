"use server";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PhoneButton from "@/components/PhoneButton";
import AdditionalServices from "@/components/AdditionalServices";
import { ServiceCards } from "@/components/cards/services";
import WhyTrustUsSection from "@/components/sections/why-trust-us";
import WhyBusinessesHomesChooseUs from "@/components/sections/why-businesses-homes-choose-us";
import ReviewHighlight from "@/components/sections/review-highlight";
import ReadyForCleaning from "@/components/sections/ready-for-cleaning";
import ThreeStepProcess from "@/components/sections/three-step-process";
import ServiceAreaHighlight from "@/components/sections/service-area-highlight";
import { ResidentialPriceCalculator } from "@/components/tools/residential-price-calculator";

interface WindowsServiceComponentProps {
  location: string;
}

const WindowsServiceComponent: React.FC<WindowsServiceComponentProps> = async ({ location }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection>
        <div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Window Cleaning in {location || 'Your Area'}</h1>
          <p className="text-base sm:text-lg">
            We offer thorough window cleaning services that enhance the appearance of your business or home. From standard interior/exterior cleaning to hard water stain removal, our team ensures a spotless view every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              variant="default"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full sm:w-auto min-w-[180px]"
              asChild
            >
              <Link className="w-full" href="/request-quote">
                REQUEST A SERVICE
              </Link>
            </Button>
            <div className="w-full sm:w-auto min-w-[180px] h-10">
              <PhoneButton />
            </div>
          </div>
        </div>
        <div className="relative hidden md:flex w-full justify-center items-center">
          <img
            src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom7kikp9ZtXGKlhay63LPE1S0ONMW59oTDszeB"
            alt="Professional window cleaning service"
            width={480}
            height={480}
            className="object-cover rounded-lg shadow-md"
            style={{ color: 'transparent', maxWidth: 480, maxHeight: 480 }}
          />
        </div>
      </HeroSection>

      <WhyTrustUsSection location={location} serviceType="window cleaning" />
      <WhyBusinessesHomesChooseUs />
      <ReviewHighlight location={location} />
      <ThreeStepProcess />
      <ReadyForCleaning location={location} serviceType="window cleaning" />
      <ServiceAreaHighlight location={location} />

      {/* Our Window Cleaning Services */}
      <div
        className="flex flex-col items-center justify-center gap-8 py-24 bg-gray-100"
        id="window-cleaning"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-primary-foreground">
            Our Window Cleaning Services
          </h3>
          <p className="text-lg mb-4 md:mb-6 mx-auto max-w-3xl">
            Crystal clear windows enhance your property's appearance and let in more natural light. We provide professional window cleaning services that leave your windows spotless and streak-free.
          </p>
        </div>
        <ServiceCards serviceType="window-cleaning" />
      </div>
    </main>
  );
};

export default WindowsServiceComponent;
