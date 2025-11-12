"use client";

import { useEffect, useState } from "react";

export default function RequestQuote() {
  const [iframeSrc, setIframeSrc] = useState(
    "https://tally.so/embed/wMkPWA?transparentBackground=1"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = window.location.search;
      if (params) {
        setIframeSrc(
          `https://tally.so/embed/wMkPWA?transparentBackground=1&${params.substring(
            1
          )}`
        );
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Header Section */}
        <div className="w-full max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your <span className="text-blue-600">Free Quote</span> Today
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied customers who trust us with their homes.
            Professional, reliable, and affordable cleaning services in the Houston
            area.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
            {/* Happy Customers */}
            <div className="flex items-center space-x-2">
              <div className="text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="font-medium text-gray-900">
                500+ Happy Customers
              </span>
            </div>

            {/* Star Rating */}
            <div className="flex items-center space-x-2">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="font-medium text-gray-900">
                4.9/5 Star Rating
              </span>
            </div>

            {/* Insured & Bonded */}
            <div className="flex items-center space-x-2">
              <div className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className="font-medium text-gray-900">
                Fully Insured & Bonded
              </span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4">
          {/* Right Column - Form - Moved to top on mobile */}
          <div className="w-full lg:hidden mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative pb-[160%] h-0 overflow-hidden">
              <iframe
                src={iframeSrc}
                loading="lazy"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Get your free cleaning quote | Luchos Cleaning"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Left Column - Cards */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Why Choose Luchos Cleaning Card */}
            <div className="bg-white/50 p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Luchos Cleaning?
              </h3>

              {/* Item 1 */}
              <div className="flex items-start mb-5">
                <div className="bg-green-50 p-2 rounded-lg mr-4">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Professional & Trained Staff
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Background-checked team with years of experience.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start mb-5">
                <div className="bg-green-50 p-2 rounded-lg mr-4">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    100% Satisfaction Guarantee
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Not happy? We'll come back and make it right at no extra
                    charge.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start mb-5">
                <div className="bg-green-50 p-2 rounded-lg mr-4">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Eco-Friendly Products
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Safe for your family, pets, and the environment.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start">
                <div className="bg-green-50 p-2 rounded-lg mr-4">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Flexible Scheduling
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Weekly, bi-weekly, monthly, or one-time cleaning options.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials Card */}
            <div className="bg-white/50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                What Our Customers Say
              </h3>

              {/* Testimonial 1 */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="flex flex-col mb-2">
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    "Luchos Cleaning transformed my home! Their attention to detail
                    is incredible and the team is so professional."
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900 ml-8">
                  Sarah Johnson - Weekly Cleaning
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="flex flex-col mb-2">
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    "Best cleaning service in the area. Always on time,
                    thorough, and trustworthy. Highly recommend!"
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900 ml-8">
                  Mike Chen - Deep Cleaning
                </p>
              </div>

              {/* Testimonial 3 */}
              <div>
                <div className="flex flex-col mb-2">
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    "I've tried many cleaning services, but Luchos Cleaning is by
                    far the best. They're reliable and do amazing work."
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900 ml-8">
                  Emily Thompson - Move-out Cleaning
                </p>
              </div>
            </div>

            {/* Get In Touch Card */}
            <div className="bg-white/50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-4">
                Our friendly team is here to answer your questions and help you
                book your cleaning service.
              </p>
              <div className="space-y-3 mt-4">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-700">
                    <a href="tel:+13464886044" className=" hover:text-cyan-500">
                      (346) 488-6044
                    </a>
                  </span>
                </div>

                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-700">info@kathyclean.com</span>
                </div>

                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-600 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Serving Houston and Harris County, including Houston, Spring Branch,
                    Houston Heights, Upper Kirby, Memorial, Uptown, Bellaire, and the
                    Medical Center Area
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form - Hidden on mobile, shown on lg screens */}
          <div className="hidden lg:block w-full lg:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative pb-[160%] h-0 overflow-hidden">
              <iframe
                src={iframeSrc}
                loading="lazy"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Get your free cleaning quote | Kathy Clean"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        <section className="bg-white/60 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 py-12 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8 text-gray-800">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  How soon will I get my quote?
                </h3>
                <p className="mb-2">
                  Most quotes are sent within a few minutes during business
                  hours.
                </p>
                <p>
                  Once we receive your request, our team reviews your home’s
                  details (size, rooms, service type) and sends a customized
                  estimate straight to your inbox or phone.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Is the quote free and with no obligation?
                </h3>
                <p className="mb-2">
                  Yes, all quotes are 100% free and no-obligation.
                </p>
                <p>
                  We’ll give you transparent pricing upfront; no hidden fees, no
                  surprises. You decide if and when to move forward.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  What information do you need to give me a quote?
                </h3>
                <p className="mb-3">We usually ask for:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Your address (to confirm service area)</li>
                  <li>Home size or number of bedrooms/bathrooms</li>
                  <li>
                    Type of cleaning (recurring, deep, move in/out,
                    post-construction, etc.)
                  </li>
                </ul>
                <p className="mt-3">
                  The more details you provide, the more accurate your quote
                  will be.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Do I need someone to come to my home for an estimate?
                </h3>
                <p>
                  Not necessarily. In most cases, we can quote your cleaning
                  online or by phone using your home’s size and condition. For
                  large homes or commercial properties, we might schedule a
                  quick walkthrough if needed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  How do I confirm my cleaning once I receive the quote?
                </h3>
                <p>
                  You can simply let us know by text, calling or just appoving
                  the quote online in one click. We’ll reserve your preferred
                  date and assign a cleaner right away.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Do I have to pay anything upfront?
                </h3>
                <p>
                  For one-time or first-time cleanings, we require a credit card
                  on file to secure your booking, but you’re only charged after
                  the cleaning is complete. Recurring clients are billed
                  automatically after each visit.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Can I change or cancel my appointment after booking?
                </h3>
                <p>
                  Of course. Just let us know at least 24 hours in advance to
                  reschedule without a fee. We’re flexible and can adjust your
                  cleaning day whenever you need.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Do you serve my area?
                </h3>
                <p>
                  We serve Houston and Harris County, including Houston, Spring Branch,
                  Houston Heights, Upper Kirby, Memorial, Uptown, Bellaire, and the
                  Medical Center Area. If you’re nearby, we likely already clean for one of
                  your neighbors!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  What’s included in my cleaning?
                </h3>
                <p>
                  That depends on the service you choose. We’ll confirm exactly
                  what’s included in your quote.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Do you bring your own cleaning supplies?
                </h3>
                <p>
                  Yes, we bring everything needed: products, vacuums, and tools.
                  If you prefer eco-friendly cleaning or want us to use your own
                  products, just let us know.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  What if I’m not happy with my cleaning?
                </h3>
                <p>
                  We stand behind our work. If something wasn’t cleaned to your
                  expectations, contact us within 48 hours and we’ll re-clean
                  the area for free.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Do you offer recurring cleaning discounts?
                </h3>
                <p>
                  Yes! Weekly and bi-weekly clients receive discounted rates and
                  priority scheduling. If you start with a one-time cleaning,
                  you can always switch to recurring later.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Who are your cleaners? Are they background checked?
                </h3>
                <p>
                  All our cleaners are fully trained, background checked, and
                  insured. We only hire experienced professionals who meet our
                  standards for reliability, honesty, and attention to detail.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Why should I choose Luchos Cleaning?
                </h3>
                <p>
                  Because we make cleaning simple, reliable, and stress-free.
                  From your first quote to your regular cleanings, we handle
                  everything with transparency, real-time updates, and a 48-hour
                  satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
