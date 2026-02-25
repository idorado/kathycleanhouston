import { ThumbsUp, Users, ShieldCheck } from "lucide-react";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import WhyTrustBenefits from "@/components/sections/why-trust-benefits";

interface WhyTrustWindowCleaningProps {
  location?: string;
}

export default function WhyTrustWindowCleaning({ location }: WhyTrustWindowCleaningProps) {
  return (
    <section className="bg-[#F4F4F4] border-t border-b border-border py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-navy-800 mb-4">
          Why {location || 'Houston'} Trusts Our Window Cleaning Services
        </h2>
        <p className="text-base md:text-lg text-[#454545] max-w-4xl mx-auto text-left mb-10">
          We provide professional window cleaning for homes and businesses with careful attention to detail. Experienced service professionals deliver spotless results with care, professionalism, and consistent quality.
        </p>
        <WhyTrustBenefits />
        
        <div className="flex justify-center">
          <RequestQuoteButton />
        </div>
      </div>
    </section>
  );
}
