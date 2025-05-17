import Image from "next/image";

export default function WindowCleaningBenefits() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-800 text-center md:text-left mb-4">Why Clean Your Windows Regularly?</h2>
            <h3 className="text-xl font-semibold text-navy-800 mb-2">The benefits go beyond just appearance</h3>
            <p className="text-lg text-navy-700 mb-4">
              Professional window cleaning does more than improve how your property looks, it also enhances comfort, health, and productivity. At Kathy Clean, we provide reliable residential and commercial window cleaning services in Denver and surrounding areas. Here’s why regular cleanings matter:
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomNUziJxe8Qqho34HzWAgdjRlcDPJntsL1f2TI"
              alt="Clean windows"
              width={400}
              height={300}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F8FAFC] rounded-2xl shadow p-6 flex flex-col items-center text-center">
            <div className="mb-4">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><path d="M20 3v34M3 20h34" stroke="#1E293B" strokeWidth="2" strokeLinecap="round"/><circle cx="20" cy="20" r="18" stroke="#1E293B" strokeWidth="2"/></svg>
            </div>
            <h4 className="text-xl font-bold text-navy-800 mb-2">Boosts Curb Appeal</h4>
            <p className="text-navy-700">Clean windows make your home or business look cared for — inside and out. It’s one of the easiest ways to improve first impressions.</p>
          </div>
          <div className="bg-[#F8FAFC] rounded-2xl shadow p-6 flex flex-col items-center text-center">
            <div className="mb-4">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="8" width="24" height="24" rx="2" stroke="#1E293B" strokeWidth="2"/><path d="M20 8v24" stroke="#1E293B" strokeWidth="2"/></svg>
            </div>
            <h4 className="text-xl font-bold text-navy-800 mb-2">Prevents Glass Damage</h4>
            <p className="text-navy-700">Hard water stains and dirt buildup can etch and damage glass over time. Regular cleaning protects your windows and extends their life.</p>
          </div>
          <div className="bg-[#F8FAFC] rounded-2xl shadow p-6 flex flex-col items-center text-center">
            <div className="mb-4">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="12" stroke="#1E293B" strokeWidth="2"/><path d="M20 8v4M20 28v4M8 20h4M28 20h4" stroke="#1E293B" strokeWidth="2"/></svg>
            </div>
            <h4 className="text-xl font-bold text-navy-800 mb-2">Better Natural Light</h4>
            <p className="text-navy-700">Dirty windows block sunlight. Clean windows let more light in, making your space brighter and more welcoming.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
