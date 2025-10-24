"use server";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/CtaButton";
import PhoneButton from "@/components/PhoneButton";
import WhyTrustUsSection from "@/components/sections/why-trust-us";
import ReviewHighlightHouseCleaning from "@/components/sections/review-highlight-house-cleaning";
import ThreeStepProcess from "@/components/sections/three-step-process";
import ReadyForHouseCleaning from "@/components/sections/ready-for-house-cleaning";
import {postConstructionCleaning} from "@/config/json-ld"
import JsonLd from "@/components/json-ld";
import { ensureHttps } from "@/lib/images";
import FeatureBar from "@/components/ui/FeatureBar";

interface PostConstructionServiceComponentProps {
  location?: string;
}

export default async function PostConstructionServiceComponent({ location = 'Denver' }: PostConstructionServiceComponentProps) {
  return (
    <main className="flex flex-col min-h-screen">
      <JsonLd data={postConstructionCleaning(location)} />
      <HeroSection>
        <div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Post-Construction Cleaning in {location}
          </h1>
          <p className="text-base sm:text-lg mb-6">
            From dust and debris to final touches, we handle the cleanup so you can admire the results. <br /> Our post-construction cleaning services in {location} ensure your new space is spotless and ready for occupancy.
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
          <FeatureBar />
        </div>
        <div className="relative hidden md:flex w-full justify-center items-center">
          <div className="relative w-[480px] h-[440px]">
            <Image
              src={ensureHttps("https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomlHpefl1K9N4DUxFng7weyZbAGHESLJh3Ifa2")}
              alt="Post-construction cleaning service"
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

    </main>
  );
}
