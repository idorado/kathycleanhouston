import { TbHomeStar, TbWindow, TbSun } from "react-icons/tb";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";

export default function WhyCleanBenefits() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Boosts Curb Appeal */}
          <div className="bg-[#f6f8fc] rounded-lg shadow-sm p-6 flex flex-col items-start">
            <span className="text-3xl text-navy-800 mb-3"><TbHomeStar /></span>
            <h4 className="font-bold text-lg text-navy-800 mb-2">Boosts Curb Appeal</h4>
            <p className="text-gray-700 text-base">Clean windows make your home or business look cared for — inside and out. It’s one of the easiest ways to improve first impressions.</p>
          </div>
          {/* Prevents Glass Damage */}
          <div className="bg-[#f6f8fc] rounded-lg shadow-sm p-6 flex flex-col items-start">
            <span className="text-3xl text-navy-800 mb-3"><TbWindow /></span>
            <h4 className="font-bold text-lg text-navy-800 mb-2">Prevents Glass Damage</h4>
            <p className="text-gray-700 text-base">Hard water stains and dirt buildup can etch and damage glass over time. Regular cleaning protects your windows and extends their life.</p>
          </div>
          {/* Better Natural Light */}
          <div className="bg-[#f6f8fc] rounded-lg shadow-sm p-6 flex flex-col items-start">
            <span className="text-3xl text-navy-800 mb-3"><TbSun /></span>
            <h4 className="font-bold text-lg text-navy-800 mb-2">Better Natural Light</h4>
            <p className="text-gray-700 text-base">Dirty windows block sunlight. Clean windows let more light in, making your space brighter and more welcoming.</p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <RequestQuoteButton className="font-medium mx-auto px-8 py-3 text-lg shadow-lg hover:scale-105 transition-all" />
        </div>
      </div>
    </section>
  );
}
