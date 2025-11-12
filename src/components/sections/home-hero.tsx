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
          <span className="text-primary">Top Rated Cleaning Company</span>
          <br />
          <span className="text-background">in Houston, TX</span>
        </h1>
        <p className="text-lg">
          We deliver spotless, healthy, and welcoming environments—perfect for
          busy homes, productive offices, and everything in between.
        </p>
        <div className="pt-4 flex flex-col md:flex-row gap-4">
          <Button variant="default" className="font-medium" asChild>
            <CtaButton href="/request-quote">REQUEST A QUOTE</CtaButton>
          </Button>
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
      <div className="relative hidden md:flex w-full items-end justify-center">
        {/* Decorative celeste details behind the image */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-1/3 w-[360px] h-[360px] bg-[#00F5D4]/25 rounded-[40%] blur-2xl" />
          <div className="absolute right-8 top-6 w-3 h-3 bg-[#00F5D4] rounded-full" />
          <div className="absolute right-16 top-14 w-2.5 h-2.5 bg-[#00F5D4] rounded-full" />
          <div className="absolute left-10 bottom-10 w-2.5 h-2.5 bg-[#00F5D4] rounded-full" />
          <div className="absolute right-12 top-1/3 w-5 h-5 bg-[#00F5D4] rotate-45 rounded-[4px]" />
        </div>
        <div className="relative h-[540px] md:h-[560px] overflow-hidden flex items-start bg-transparent">
          <Image
            src="https://tv7odam5so.ufs.sh/f/mVZIBtP0JDKedyyLi2MpvGO2NaeJolDh9SPIMcn7wWiQB3qg"
            alt="Professional cleaner from Lucho's Cleaning holding cleaning supplies"
            width={480}
            height={480}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 0px, (max-width: 1280px) 50vw, 600px"
            quality={85}
            className="relative h-auto w-auto max-h-[700px] object-contain"
          />
        </div>
      </div>
    </HeroSection>
  );
};

export default HomeHero;
