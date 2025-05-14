import Image from "next/image";

import WhyCleanBenefits from "@/components/sections/why-clean-benefits";

export default function WhyCleanWindowsRegularly() {
  return (
    <section className="py-14 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-10 mt-8">Why Clean Your Windows Regularly?</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">The benefits go beyond just appearance</h3>
          <p className="text-base md:text-lg text-gray-700 mb-2">
            At Kathy Clean, we provide reliable residential and commercial window cleaning services in {typeof location === 'string' ? location : 'Denver'} and surrounding areas. Here’s why regular cleanings matter:
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomNUziJxe8Qqho34HzWAgdjRlcDPJntsL1f2TI"
            alt="Clean window with plants"
            width={420}
            height={300}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
      <div className="mt-12">
        <WhyCleanBenefits />
      </div>
    </section>
  );
}
