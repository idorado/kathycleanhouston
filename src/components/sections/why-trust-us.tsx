import { ThumbsUp, Users, ShieldCheck } from "lucide-react";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import WhyTrustBenefits from "@/components/sections/why-trust-benefits";

interface WhyTrustUsProps {
  location?: string;
  serviceType?: string;
}

export default function WhyTrustUsSection({ location, serviceType }: WhyTrustUsProps) {
  return (
    <section className="bg-[#F4F4F4] border-t border-b border-border py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-navy-800 mb-4">
          Why {location ? location : "Denver"} Trusts Our {serviceType || 'Cleaning'} Services
        </h2>
        <p className="text-base md:text-lg text-[#454545] max-w-4xl text-left mb-10">
  Since 2010, we've been providing top-quality cleaning services to homes and businesses throughout Denver and the surrounding Colorado communities.<br /><br />
  Our team of experienced professionals is committed to delivering exceptional results with attention to detail and a personal touch that large cleaning chains simply can't match.
</p>
<WhyTrustBenefits />
        
        <div className="flex justify-center">
          <RequestQuoteButton />
        </div>
      </div>
    </section>
  );
}
