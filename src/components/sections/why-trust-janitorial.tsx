import { ThumbsUp, Users, ShieldCheck } from "lucide-react";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";

interface WhyTrustJanitorialProps {
  location?: string;
}

export default function WhyTrustJanitorialSection({ location }: WhyTrustJanitorialProps) {
  return (
    <section className="bg-[#F4F4F4] border-t border-b border-border py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-navy-800 mb-4">
          Why {location} Trusts Our Janitorial Services
        </h2>
        <p className="text-base md:text-lg text-[#454545] max-w-4xl text-left mb-10">
          For over a decade, Kathy Clean has delivered high-quality commercial cleaning across Colorado, from offices and retail stores to restaurants and medical facilities. Our professional team is known for consistency, reliability, and attention to detail, helping businesses maintain clean, safe, and welcoming environments.
        </p>
        <div className="w-full flex flex-col items-center justify-center py-8">
          <h3 className="text-2xl md:text-3xl font-bold text-navy-800 mb-8 text-center">We've earned the trust of {location}'s top businesses through consistent quality, reliability, and attention to detail.</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 items-center justify-center mb-8">
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden bg-white flex items-center justify-center p-2">
                <img alt="Whole Foods logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom1BSvmBcbi0AF12cfU9NxXt6GPROaEWyeIhLd" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Whole Foods</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 mb-2 rounded-full overflow-hidden bg-white p-4">
                <img alt="Chuck & Don's logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomWnYvJlhvM9rmixlERctSJWydYD1B0G2wqHse" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Chuck & Don's</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden bg-white flex items-center justify-center p-2">
                <img alt="Starbucks logo" className="h-16 w-16 object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom8eXAnJKhMCiFKE7nTrZgcpJWtXBskwHlzmqf" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Starbucks</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden bg-white flex items-center justify-center p-2">
                <img alt="Fedex logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomZMWdw6sScL928NU7WORg5Vux30lHqPhzC6Ti" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Fedex</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 mb-2 rounded-full overflow-hidden bg-white p-4">
                <img alt="Floyd's 99 Barbershop logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomkZ7fk9kBMKEtR4Y9c3GgQrxuo7N6XZ2LnleT" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Floyd's 99 Barbershop</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden bg-white flex items-center justify-center p-2">
                <img alt="Lululemon logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomgcagMY07oMnJUltKIuW62gREasYvcL4ed0kp" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Lululemon</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden bg-white flex items-center justify-center p-2">
                <img alt="Petsmart logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom8u5LbdSKhMCiFKE7nTrZgcpJWtXBskwHlzmq" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Petsmart</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden bg-white flex items-center justify-center p-2">
                <img alt="Rivian logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomCDvQ2DWmdS94e3Vt5PNnp8hM7jiI6fuBvsZx" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Rivian</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden bg-white flex items-center justify-center p-2">
                <img alt="Tesla logo" className="h-full w-full object-contain scale-75" loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Tesla</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 mb-2 rounded-full overflow-hidden bg-white flex items-center justify-center p-2">
                <img alt="Gorjana logo" className="h-full w-full object-contain" loading="lazy" src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomKIrAmFUMQcNihESfqK8VPHRBylA7XtzCI2bd" />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">Gorjana</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <span className="text-lg text-gray-700">And by many businesses across {location || 'Denver'}…</span>
          </div>
        </div>
        <div className="flex justify-center">
          <RequestQuoteButton />
        </div>
      </div>
    </section>
  );
}
