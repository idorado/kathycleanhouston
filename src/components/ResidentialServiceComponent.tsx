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


// Mapeo de ubicaciones a URLs de Google Maps
const locationMapUrls: { [key: string]: string } = {
  'Denver': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.12940378934!2d-104.9951965!3d39.7642549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1620000000000',
  'Englewood': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-104.994167!3d39.647765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sEnglewood%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus',
  'Greenwood Village': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.12940378934!2d-104.9018105!3d39.6092059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sGreenwood%20Village%2C%20CO!5e0!3m2!1sen!2sus!4v1620000000000',
  'Littleton': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-105.008057!3d39.613321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sLittleton%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus',
  'Parker': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30652.60938438324!2d-104.7809982!3d39.5186001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8b2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sParker%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus',
  'Castle Rock': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-104.9594353!3d39.3722128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCastle%20Rock%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus',
  'Lone Tree': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9362517!3d39.534801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sLone%20Tree%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus',
  'Highlands Ranch': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102784.0012590511!2d-105.0212517!3d39.543236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHighlands%20Ranch%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus',
  'Centennial': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-104.9951986!3d39.6470058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7f7a3c25cfa3%3A0x74c9fb8a0c3f23ea!2sCentennial%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus',
  'Central Park': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9342517!3d39.757236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCentral%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus',
  'Hilltop': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9952517!3d39.728236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHilltop%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus',
  'Washington Park': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9712517!3d39.703236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sWashington%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus',
  'Cherry Creek': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9952517!3d39.728236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCherry%20Creek%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus',
  'University Park': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9952517!3d39.668236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sUniversity%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus',
  'Highland': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-105.0152517!3d39.758236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHighland%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus'
};


const ResidentialServiceComponent: React.FC<ResidentialServiceComponentProps> = async ({ location = 'Denver' }) => {
  // Format location for display - asegurando que siempre sea un string
  const displayLocation = typeof location === 'string' ? location : 'Denver';
  const isDenverArea = ['Denver', 'Central Park', 'Hilltop', 'Washington Park', 'Cherry Creek', 'University Park', 'Highland'].includes(displayLocation);
  
  return (
    <main className="flex flex-col min-h-screen">
      <JsonLd data={houseCleaning(location)} />
      <HeroSection>
        <div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            House Cleaning in {displayLocation}
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Looking for trusted house cleaning services in {displayLocation}?<br />
            Lucho's Cleaning delivers affordable, top-rated cleanings backed by a team with 10+ years of experience and satisfied customers in {displayLocation} {isDenverArea ? 'and throughout the Houston metro area' : 'and surrounding areas'}.
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

      {/* FAQ Section */}
      <HouseCleaningFAQ location={location} />

      <div className="mt-12 px-4 md:px-0 max-w-4xl mx-auto text-gray-700">
        <h3 className="text-xl font-semibold mb-2">Service Areas</h3>
        <p>
          We proudly serve all of Harris County, including Houston, Spring Branch, Houston Heights, Upper Kirby, Memorial, Uptown, Bellaire, and the Medical Center Area.
        </p>
      </div>

    </main>
  );
};

export default ResidentialServiceComponent;
