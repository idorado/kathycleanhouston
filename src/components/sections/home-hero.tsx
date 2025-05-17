import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import PhoneButton from "@/components/PhoneButton";

const HomeHero = () => {
  return (
    <HeroSection>
      <div className="space-y-2 text-white text-center p-4 md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
          Top-rated <span className="text-background">Residential & Commercial</span><br />
          Cleaning Services<span className="text-background"> in Denver</span> 
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
            <Link href="/request-quote">
              REQUEST A QUOTE
            </Link>
          </Button>
          <PhoneButton />
        </div>
      </div>
      <div className="relative hidden md:block w-full h-full">
        <Image
          src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomWu0pGghvM9rmixlERctSJWydYD1B0G2wqHse"
          alt="Professional cleaning service"
          width={400}
          height={400}
          className="relative w-full h-full object-cover rounded-lg "
        />
      </div>
    </HeroSection>
  );
};

export default HomeHero;
