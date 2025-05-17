import { ThumbsUp, Users, ShieldCheck } from "lucide-react";

export default function WhyTrustBenefits() {
  return (
    <section className="bg-[#fafbfc] py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Satisfaction Guaranteed */}
          <div className="flex flex-col items-center">
            <ThumbsUp className="w-12 h-12 mb-3 text-primary" strokeWidth={2.2} />
            <h3 className="font-bold text-lg mb-1">Satisfaction Guaranteed</h3>
            <p className="text-gray-600 text-base">
              If you’re not 100% satisfied or we missed something, let us know within 48 hours, we’ll re-clean at no extra cost.
            </p>
          </div>
          {/* Lowest Turnover in the Industry */}
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 mb-3 text-primary" strokeWidth={2.2} />
            <h3 className="font-bold text-lg mb-1">Lowest Turnover in the Industry</h3>
            <p className="text-gray-600 text-base">
              Low turnover means a dedicated, motivated team that delivers better service every time.
            </p>
          </div>
          {/* Fully Insured and Bonded */}
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 mb-3 text-primary" strokeWidth={2.2} />
            <h3 className="font-bold text-lg mb-1">Fully Insured and Bonded</h3>
            <p className="text-gray-600 text-base">
              We are fully insured and bonded for your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
