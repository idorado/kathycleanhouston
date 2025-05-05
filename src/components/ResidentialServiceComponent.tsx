"use server";
import HeroSection from "@/components/HeroSection";
import AdditionalServices from "@/components/AdditionalServices";
import { ServiceCards } from "@/components/cards/services";
import { ResidentialPriceCalculator } from "@/components/tools/residential-price-calculator";

// Accept location as prop
interface ResidentialServiceComponentProps {
  location: string;
}


const ResidentialServiceComponent: React.FC<ResidentialServiceComponentProps> = async ({ location }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection
        category="SERVICES"
        title={`Residential Services${location ? ` in ${location}` : ""}`}
        description="A clean home protects your family, creates a comfortable environment, and leaves a lasting impression. We help your home thrive with top-quality professional cleaning."
        linkUrl="https://clienthub.getjobber.com/client_hubs/40b56a75-dbed-4f70-b807-d9a216f025a3/public/work_request/new?source=new_webpage"
        linkText="REQUEST A SERVICE"
        imgUrl="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomWu0pGghvM9rmixlERctSJWydYD1B0G2wqHse"
        imgAlt="Professional residential cleaning service"
        imgWidth={400}
        imgHeight={400}
        imgPriority
      />

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

      <section className="p-16 flex flex-col md:flex-row items-center gap-8">
        <div className="bg-white rounded-lg p-6 w-full md:w-1/2">
          <h3 className="text-5xl font-bold mb-4">Request a Quote</h3>
          <p className="text-gray-600 mb-4">
            For more than a decade, we've been delivering spotless, streak-free windows to homes and businesses. Formerly known as C-Thru Cleaning Services, we now operate under Kathy Clean, continuing our commitment to excellence with the same trusted quality and expertise.
          </p>
        </div>
        <ResidentialPriceCalculator />
      </section>

      {/* Additional Services */}
      <AdditionalServices />
    </main>
  );
};

export default ResidentialServiceComponent;
