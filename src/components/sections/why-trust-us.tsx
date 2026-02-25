import { ThumbsUp, Users, ShieldCheck } from "lucide-react";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import WhyTrustBenefits from "@/components/sections/why-trust-benefits";

interface WhyTrustUsProps {
  location?: string;
  serviceType?: string;
  locationContent?: {
    title?: string;
    description?: string;
  };
}

const defaultContent = {
  title: "Why {location} Trusts Our {serviceType} Services",
  description: `For years, we've been providing top-quality cleaning services to homes and businesses throughout Houston and the surrounding communities.\n\nExperienced service professionals are committed to delivering exceptional results with attention to detail and a personal touch that large cleaning chains simply can't match.`
};

export default function WhyTrustUsSection({ location, serviceType, locationContent }: WhyTrustUsProps) {
  const content = locationContent || defaultContent;
  const title = content.title
    ? content.title
      .replace('{location}', location || 'Houston')
      .replace('{serviceType}', serviceType || 'Cleaning')
    : `Why ${location || 'Houston'} Trusts Our ${serviceType || 'Cleaning'} Services`;

  const description =
    (location === "Houston" || location === "Houston, TX")
      ? "Houston families and homeowners choose us because we treat every space like our own. Service is delivered with care and a commitment to spotless results you can feel the moment you walk in."
      : (content.description || defaultContent.description);
  return (
    <section className="bg-[#F4F4F4] border-t border-b border-border py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-navy-800 mb-4">
          {title}
        </h2>
        <p className="text-base md:text-lg text-[#454545] max-w-4xl text-left mb-10 whitespace-pre-line">
          {description}
        </p>
<WhyTrustBenefits />
        
        <div className="flex justify-center">
          <RequestQuoteButton />
        </div>
      </div>
    </section>
  );
}
