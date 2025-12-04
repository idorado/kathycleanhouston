import HeroSection from "@/components/HeroSection";
import PhoneButton from "@/components/PhoneButton";
import FeatureBar from "@/components/ui/FeatureBar";
import Image from "next/image";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";

interface LandingHeroProps {
  location: string;
  imageUrl: string;
  headline?: string;
  description: string;
}

const LandingHero = ({ location, imageUrl, headline, description }: LandingHeroProps) => {
  return (
    <HeroSection>
      <div className="space-y-2 text-white text-center p-4 md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-primary">House Cleaning in {location}</span>
        </h1>
        {headline && (
          <h2 className="text-xl md:text-2xl font-semibold text-background mb-2">{headline}</h2>
        )}
        <p className="text-lg mb-2">{description}</p>
        <div className="pt-4 flex flex-col md:flex-row gap-4">
          <RequestQuoteButton className="font-medium" />
          <PhoneButton />
        </div>
        <FeatureBar />
      </div>
      <div className="relative hidden md:block w-full h-full">
        <Image
          src={imageUrl}
          alt={`Professional cleaning services in ${location}`}
          width={400}
          height={400}
          className="relative w-full h-full object-cover rounded-lg "
        />
      </div>
    </HeroSection>
  );
};

export default LandingHero;
