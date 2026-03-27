import HeroSection from "@/components/HeroSection";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import PhoneButton from "@/components/PhoneButton";
import FeatureBar from "@/components/ui/FeatureBar";

const HomeHero = () => {
  return (
    <HeroSection>
      <div className="space-y-4 text-white text-center p-4 md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-primary">Recurring House Cleaning Services</span>
          <br />
          <span className="text-background">in Houston</span>
        </h1>
        <p className="text-lg">
          Weekly and biweekly cleaning with reliable, flat-rate pricing for Houston homes in Memorial, West University Place, and nearby neighborhoods.
        </p>
        <div className="pt-4 flex flex-col md:flex-row gap-4">
          <RequestQuoteButton location="location_components_sections_home_hero" className="font-medium" />
          <PhoneButton />
        </div>
        <FeatureBar />
      </div>
      <div className="relative hidden md:flex w-full justify-center items-center">
        <Image
          src="/images/hero-image.webp"
          alt="Professional cleaner from Kathy Clean Houston holding cleaning supplies"
          width={400}
          height={400}
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 0px, (max-width: 1280px) 50vw, 600px"
          quality={75}
          className="object-cover rounded-lg"
        />
      </div>
    </HeroSection>
  );
};

export default HomeHero;
