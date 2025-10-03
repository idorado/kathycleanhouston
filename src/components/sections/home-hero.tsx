import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CtaButton } from "@/components/ui/CtaButton";
import PhoneButton from "@/components/PhoneButton";
import FeatureBar from "@/components/ui/FeatureBar";

const HomeHero = () => {
  return (
    <HeroSection>
      <div className="space-y-2 text-white text-center p-4 md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-primary">House & Commercial Cleaning</span>
          <br />
          <span className="text-background">Experts in Denver, Centennial, Parker & Castle Rock.</span>
        </h1>
        <p className="text-lg">
          We deliver spotless, healthy, and welcoming environments—perfect for busy homes, productive offices, and everything in between.
        </p>
        <div className="pt-4 flex flex-col md:flex-row gap-4">
          <Button
            variant="default"
            className="font-medium"
            asChild
          >
            <CtaButton href="/request-quote">
              REQUEST A QUOTE
            </CtaButton>
          </Button>
          <PhoneButton />
        </div>
        <FeatureBar />
      </div>
      <div className="relative hidden md:block w-full h-full">
        <Image
          src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOs088CLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu"
          alt="Professional cleaning service"
          width={400}
          height={400}
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 0px, (max-width: 1280px) 50vw, 600px"
          quality={75}
          className="relative w-full h-full object-cover rounded-lg "
        />
      </div>
    </HeroSection>
  );
};

export default HomeHero;
