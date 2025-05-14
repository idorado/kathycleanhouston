import { ThumbsUp, Users, ShieldCheck } from "lucide-react";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";

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
          We've been cleaning windows across Colorado for over a decade, from homes to storefronts, and even solar panels. Previously known as <strong>Cthru Cleaning Services</strong>, our experienced team delivers spotless results with care, professionalism, and attention to detail.
        </p>
        <div className="w-full flex flex-col items-center justify-center py-8">
          <h3 className="text-2xl md:text-3xl font-bold text-navy-800 mb-8 text-center">Trusted for Window Cleaning by Iconic Brands</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 items-center justify-center mb-8">
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden">
                <img alt="Whole Foods logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom1BSvmBcbi0AF12cfU9NxXt6GPROaEWyeIhLd" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Whole Foods</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden">
                <img alt="Chuck & Dons logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomWnYvJlhvM9rmixlERctSJWydYD1B0G2wqHse" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Chuck & Don's</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden">
                <img alt="Fedex logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomZMWdw6sScL928NU7WORg5Vux30lHqPhzC6Ti" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Fedex</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden">
                <img alt="Floyd's 99 Barber Shop logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomkZ7fk9kBMKEtR4Y9c3GgQrxuo7N6XZ2LnleT" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Floyd's 99 Barber Shop</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden">
                <img alt="JMcLaughlin logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomnY1X8uwNq3haW9IjyTl7dbP5tZX4mrvg1GQH" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">JMcLaughlin</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden">
                <img alt="Smash Burger logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomJoIHQBqjvTxoXV9D2iqbpnGgyKMaCYt3F0h6" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Smash Burger</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden">
                <img alt="Tesla logo" className="h-full w-full object-contain scale-75" loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Tesla</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden">
                <img alt="Kendra Scott logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomRj1GNyo2yJFOX0UapEADMgb9ks3NP81RBuj4" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Kendra Scott</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden">
                <img alt="alo Yoga logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomNSjV0o8Qqho34HzWAgdjRlcDPJntsL1f2TIb" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">alo Yoga</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden">
                <img alt="Rivian logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomCDvQ2DWmdS94e3Vt5PNnp8hM7jiI6fuBvsZx" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Rivian</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <span className="text-lg text-gray-700">And by many homes across {location || 'Denver'}…</span>
          </div>
        </div>
        <div className="flex justify-center">
          <RequestQuoteButton />
        </div>
      </div>
    </section>
  );
}
