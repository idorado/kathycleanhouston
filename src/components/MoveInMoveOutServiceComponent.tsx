



"use server";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/CtaButton";
import PhoneButton from "@/components/PhoneButton";
import WhyTrustUsSection from "@/components/sections/why-trust-us";
import ReviewHighlightHouseCleaning from "@/components/sections/review-highlight-house-cleaning";
import ThreeStepProcess from "@/components/sections/three-step-process";
import ReadyForHouseCleaning from "@/components/sections/ready-for-house-cleaning";
import WhatToExpectMoveInOut from "@/components/sections/what-to-expect-move-in-out";
import { MoveInOutCleaningFAQ } from "@/components/sections/faq/move-in-out-cleaning-faq";
import {moveInOutCleaning} from "@/config/json-ld"
import JsonLd from "@/components/json-ld";



interface MoveInMoveOutServiceComponentProps {
  location?: string;
}

export async function MoveInMoveOutServiceComponent({ location = 'Denver' }: MoveInMoveOutServiceComponentProps) {
  return (
    <main className="flex flex-col min-h-screen">
      <JsonLd data={moveInOutCleaning(location)} />
      <HeroSection>
        <div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Move In & Move Out Cleaning in {location}
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Make your move in {location} stress-free with our professional cleaning services. <br /> We handle the dirty work so you can focus on your new beginning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              variant="default"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full sm:w-auto min-w-[180px]"
              asChild
            >
              <CtaButton href="/request-quote" className="w-full">
                GET A FREE ESTIMATE
              </CtaButton>
            </Button>
            <div className="w-full sm:w-auto min-w-[180px] h-10">
              <PhoneButton />
            </div>
          </div>
        </div>
        <div className="relative hidden md:flex w-full justify-center items-center">
          <img
            src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomlkWQowW1K9N4DUxFng7weyZbAGHESLJh3Ifa"
            alt="Move in and move out cleaning service"
            width={480}
            height={480}
            className="object-cover rounded-lg shadow-md"
            style={{ color: 'transparent', maxWidth: 480, maxHeight: 480 }}
          />
        </div>
      </HeroSection>

      <WhyTrustUsSection location={location} />
      <ReviewHighlightHouseCleaning location={location} />
      <ThreeStepProcess />
      <WhatToExpectMoveInOut />
      <MoveInOutCleaningFAQ />
      <ReadyForHouseCleaning location={location} />

    </main>
  );
}