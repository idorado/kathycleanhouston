import React from "react";
import { Industry, IndustriesSpecializedProps } from "../types";

export default function IndustriesSpecialized({ location = "Houston" }: IndustriesSpecializedProps) {
  const industries = [
    {
      title: "Preschools & Daycares",
      description:
        "Specialized cleaning for safe, healthy environments for children and educators.",
      icon: (
        <img
          src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomOa14iZLSiAq1CzRhFvEn4ayoQ0bUZewBp3gu"
          alt="Preschools & Daycares"
        />
      ),
    },
    {
      title: "Pet Stores",
      description: "Clean, odor-free spaces for pets and customers alike.",
      icon: (
        <img
          src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom89FJzAKhMCiFKE7nTrZgcpJWtXBskwHlzmqf"
          alt="Pet Stores"
        />
      ),
    },
    {
      title: "Medical Offices & Healthcare",
      description:
        "Strict protocols for hygienic, compliant healthcare environments.",
      icon: (
        <img
          src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUMazhBuxbLyY5TVln2vGePNI6BEHMuo4rXcz"
          alt="Medical Offices & Healthcare"
        />
      ),
    },
    {
      title: "HOA's",
      description:
        "Community-focused cleaning for shared living spaces and amenities.",
      icon: (
        <img
          src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUWa1k9uxbLyY5TVln2vGePNI6BEHMuo4rXcz"
          alt="HOA's"
        />
      ),
    },
    {
      title: "Fitness Centers, Gyms & Studios",
      description:
        "Sanitized equipment and spaces for healthy, active lifestyles.",
      icon: (
        <img
          src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom3s8OSHQ7wMhU5pckd8lfSqEHr2VL9OoNGxPs"
          alt="Fitness Centers, Gyms & Studios"
        />
      ),
    },
    {
      title: "Facility Management Companies",
      description:
        "Comprehensive solutions for large and multi-site properties.",
      icon: (
        <img
          src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomQrFNlQz8aAfRP5i946jBEorHLxSGqWcp3OkX"
          alt="Facility Management Companies"
        />
      ),
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-24 bg-gray-100">
      <div className="container mx-auto px-4 text-left text-sm text-muted">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-800 text-center mb-10">
          Some Industries We Serve in {location}
        </h2>
        <p className="mb-4 text-lg">
          Each industry has unique cleaning needs, from specific processes and products to the ideal cleaning frequency. We tailor our services to ensure the best results for your business, providing the right solutions to keep your space clean, safe, and well-maintained.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {industries.map((industry) => (
          <div key={industry.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                {industry.icon}
                <h4 className="text-xl font-bold">{industry.title}</h4>
              </div>
              <p className="text-gray-600 min-h-[80px]">{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
