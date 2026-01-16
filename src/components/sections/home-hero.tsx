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
          <span className="text-primary">Top Rated Cleaning Company</span>
          <br />
          <span className="text-background">in Memorial &amp; West University Place</span>
        </h1>
        <p className="text-lg">
          We deliver spotless, healthy, and welcoming environments—perfect for busy families in Memorial, West U & nearby neighborhoods.
        </p>
        <div className="pt-4 flex flex-col md:flex-row gap-4">
          <RequestQuoteButton location="location_components_sections_home_hero" className="font-medium" />
          <PhoneButton />
          <a
            href="sms:+13464886044"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-md px-6 w-full sm:w-auto min-w-[180px] 
                border border-input bg-background text-foreground 
                [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0"
          >
            <span className="text-black hover:text-cyan-500">TEXT US</span>
          </a>
        </div>
        <FeatureBar />
      </div>
      <div className="relative hidden md:block w-full h-full">
        <Image
          src="/images/hero-image.webp"
          alt="Professional cleaner from Kathy Clean Houston holding cleaning supplies"
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
