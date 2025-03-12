import { Button } from "@/components/ui/button";
import  Link from "next/link";
import { RequestHouseCleaningJobForm } from "@/components/forms/request-house-cleaning-job";
import { ResidentialPriceCalculator } from "@/components/tools/residential-price-calculator";

export default function ResidentialPage() {
  return (
    <div className="container py-12 max-w-7xl mx-auto">
      <div id="pricing" className="scroll-mt-24 bg-gray-50 p-10 rounded-2xl shadow-md">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-primary">Calculate Your Cleaning Cost</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our interactive calculator to get an instant estimate for your residential cleaning needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <ResidentialPriceCalculator />
        </div>
      </div>
    </div>
  );
}
