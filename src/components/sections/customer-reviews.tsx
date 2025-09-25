import React from "react";

export default function CustomerReviewsSection() {
  return (
    <section className="py-16 w-full">
      <h2 className="text-4xl font-extrabold text-navy-800 text-center mb-10">What our Customers Say</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Imagen y rating */}
        <div className="relative w-full max-w-md">
          <img
            src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomSeskiJfStHrxLGmPWpE9eUN53FzskB4Kfnwa"
            alt="Happy customer"
            className="rounded-xl w-full object-cover shadow-lg"
            style={{height: 320, objectPosition: 'center'}}
          />
          <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-md px-5 py-3 flex flex-col items-center gap-1 w-32">
            <span className="font-bold text-2xl">4.9/5</span>
            <span className="flex text-yellow-400 text-lg">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" /></svg>
              ))}
            </span>
            <span className="text-xs text-gray-600 text-center">Based on verified customer reviews</span>
          </div>
        </div>
        {/* Testimonios */}
        <div className="flex-1 flex flex-col gap-8 w-full max-w-xl">
          <div>
            <span className="flex text-yellow-400 mb-2">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" /></svg>
              ))}
            </span>
            <p className="text-gray-800 text-base md:text-lg mb-2">The house smelled wonderfully clean and it was meticulously cleaned. I highly recommend Kathy Clean if you are looking for reliable service. The cleaner showed up when scheduled and did a great job!</p>
            <span className="font-bold text-navy-800">Becky</span>
          </div>
          <div>
            <span className="flex text-yellow-400 mb-2">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" /></svg>
              ))}
            </span>
            <p className="text-gray-800 text-base md:text-lg mb-2">Kathy Clean does a really nice job. It's a very reliable service. If you don't like something you tell them and they will correct it. They're really easy to work with. We really like the person who cleans for us and Beverly is delightful to work with!</p>
            <span className="font-bold text-navy-800">Kathy Welsh</span>
          </div>
        </div>
      </div>
    </section>
  );
}
