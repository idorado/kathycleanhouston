"use client";
import React, { useState } from "react";

const services = [
  {
    key: "recurring",
    label: "Recurring Cleaning",
    title: "Recurring Cleaning",
    description: "Our most popular option, trusted by homeowners who value consistency and convenience.",
    bullets: [
      "Customers love our flexibility, allowing them to schedule cleanings that fit their lifestyle.",
      "They also appreciate our trained and dedicated cleaners, who provide reliable, high-quality service every time.",
      "Many of our clients build strong relationships with their preferred cleaners, enjoying the comfort of seeing familiar faces who understand their home and preferences."
    ],
    image: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomAcyI8dPo3cFv8PBRDrpoYXiQwjhVE4KNzqTy"
  },
  {
    key: "move",
    label: "Move-In/Move-Out Cleaning",
    title: "Move-In/Move-Out Cleaning",
    description: "A detailed clean for smooth transitions, leaving your old or new home spotless.",
    bullets: [
      "Perfect for renters, buyers, and sellers.",
      "Includes deep cleaning of all rooms, appliances, and fixtures.",
      "Helps ensure a stress-free move."
    ],
    image: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomwK8gHeLNQAijzTI0JpfGRs6WMerYKm743Voa"
  },
  {
    key: "post-construction",
    label: "Post-Construction Cleaning",
    title: "Post-Construction Cleaning",
    description: "Remove dust and debris after renovations or new builds for a fresh, move-in ready home.",
    bullets: [
      "Thorough dusting and debris removal.",
      "Cleaning of surfaces, floors, and fixtures.",
      "Safe for families and pets."
    ],
    image: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomKs2XeBUMQcNihESfqK8VPHRBylA7XtzCI2bd"
  },
  {
    key: "pressure-washing",
    label: "Pressure Washing",
    title: "Pressure Washing",
    description: "Restore the exterior of your home with our professional pressure washing services.",
    bullets: [
      "Removes dirt, mold, and stains from driveways, siding, and patios.",
      "Improves curb appeal instantly.",
      "Eco-friendly and safe for all surfaces."
    ],
    image: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomxrH024PQRcBU1VN4YrWbTIXj8k39sPLKdZiv"
  },
  {
    key: "window-cleaning",
    label: "Window Cleaning",
    title: "Window Cleaning",
    description: "Get sparkling clean windows inside and out for a brighter, more inviting home.",
    bullets: [
      "Streak-free finish every time.",
      "Safe for all window types and heights.",
      "Enhances natural light and views."
    ],
    image: "https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom0XTbJtnznWpD8lt52ycuGbAavdFLke9Ugf7J"
  }
];

export default function OurResidentialServicesSection() {
  const [active, setActive] = useState("recurring");
  const current = services.find((s) => s.key === active) || services[0];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-navy-800 mb-4">Our Residential Services</h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          A clean home protects your family, creates a comfortable environment, and leaves a lasting impression.<br />
          We help your home thrive with top-quality professional cleaning.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {services.map((service) => (
            <button
              key={service.key}
              className={`px-6 py-2 rounded-full font-semibold text-base transition-all shadow-sm border focus:outline-none ${active === service.key ? 'bg-navy-800 text-white shadow-md' : 'bg-white text-navy-800 border-gray-200 hover:bg-gray-100'}`}
              onClick={() => setActive(service.key)}
            >
              {service.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src={current.image} alt={current.title} className="w-full md:w-1/2 h-72 object-cover object-center" />
          <div className="p-8 flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-800 mb-2">{current.title}</h3>
            <p className="text-lg text-gray-700 mb-4">{current.description}</p>
            <ul className="list-none space-y-2">
              {current.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-navy-800">
                  <span className="text-teal-500 text-xl mt-1">&#10003;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
