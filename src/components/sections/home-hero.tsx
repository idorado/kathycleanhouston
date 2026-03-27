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
      <div className="space-y-2 text-white text-center p-4 md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-primary">Top Rated House Cleaning Services</span>
          <br />
          <span className="text-background">in Houston</span>
        </h1>
        <p className="text-lg">
          Professional house cleaning services in Houston with reliable, flat-rate pricing. We offer recurring, deep, and move-in/out cleaning for homes across The Memorial Villages and nearby neighborhoods.
        </p>
        <div className="pt-4 flex flex-col md:flex-row gap-4">
          <RequestQuoteButton location="location_components_sections_home_hero" className="font-medium" />
          <PhoneButton />
        </div>
        <FeatureBar />
      </div>
      <div className="relative hidden md:block w-full h-full">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-1/3 w-[360px] h-[360px] bg-[#00F5D4]/25 rounded-[40%] blur-2xl" />
          <div className="absolute right-8 top-6 w-3 h-3 bg-[#00F5D4] rounded-full" />
          <div className="absolute right-16 top-14 w-2.5 h-2.5 bg-[#00F5D4] rounded-full" />
          <div className="absolute left-10 bottom-10 w-2.5 h-2.5 bg-[#00F5D4] rounded-full" />
          <div className="absolute right-12 top-1/3 w-5 h-5 bg-[#00F5D4] rotate-45 rounded-[4px]" />
        </div>
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
  );
};

export default HomeHero;
