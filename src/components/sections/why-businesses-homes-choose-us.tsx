import { UserPlus, SquareEqual, PartyPopper, Sparkles, LayoutPanelTop, Clock } from "lucide-react";

interface WhyBusinessesHomesChooseUsProps {
  location?: string;
}

export default function WhyBusinessesHomesChooseUs({ location = 'Houston' }: WhyBusinessesHomesChooseUsProps) {
  const loc = location || 'Houston';
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-navy-800">Why Businesses and Homes Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#F4F7FE] rounded-lg shadow-sm p-6 flex flex-col items-start">
            <UserPlus size={36} className="text-navy-800 mb-4" />
            <h3 className="font-bold text-lg mb-1 text-navy-800">We don’t send just anyone</h3>
            <p className="text-gray-700">We focus on thorough, detail-oriented results.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#F4F7FE] rounded-lg shadow-sm p-6 flex flex-col items-start">
            <SquareEqual size={36} className="text-navy-800 mb-4" />
            <h3 className="font-bold text-lg mb-1 text-navy-800">Streak-Free Guarantee</h3>
            <p className="text-gray-700">If you're not 100% satisfied, we'll come back and clean again for free.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#F4F7FE] rounded-lg shadow-sm p-6 flex flex-col items-start">
            <PartyPopper size={36} className="text-navy-800 mb-4" />
            <h3 className="font-bold text-lg mb-1 text-navy-800">15+ Years of Experience</h3>
            <p className="text-gray-700">Trusted across {loc} for years. Experienced service professionals deliver consistent results with care and professionalism.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#F4F7FE] rounded-lg shadow-sm p-6 flex flex-col items-start">
            <Sparkles size={36} className="text-navy-800 mb-4" />
            <h3 className="font-bold text-lg mb-1 text-navy-800">No Disruption, No Mess</h3>
            <p className="text-gray-700">Service is delivered efficiently and with minimal disruption to your customers or people.</p>
          </div>
          {/* Card 5 */}
          <div className="bg-[#F4F7FE] rounded-lg shadow-sm p-6 flex flex-col items-start">
            <LayoutPanelTop size={36} className="text-navy-800 mb-4" />
            <h3 className="font-bold text-lg mb-1 text-navy-800">We Make Your Storefront Look Good</h3>
            <p className="text-gray-700">Clean windows = more light, better visibility, and a stronger first impression.</p>
          </div>
          {/* Card 6 */}
          <div className="bg-[#F4F7FE] rounded-lg shadow-sm p-6 flex flex-col items-start">
            <Clock size={36} className="text-navy-800 mb-4" />
            <h3 className="font-bold text-lg mb-1 text-navy-800">We Show Up On Time</h3>
            <p className="text-gray-700">No chasing. No excuses. Just consistent service that respects your business hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
