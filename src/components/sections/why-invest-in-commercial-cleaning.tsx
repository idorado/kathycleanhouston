import React from "react";

const cards = [
  {
    icon: (
      <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomxrH024PQRcBU1VN4YrWbTIXj8k39sPLKdZiv" alt="Preserve your space icon" className="w-16 h-16 object-contain mx-auto" />
    ),
    title: "Preserve your Space",
    description: "Dirt and dust break down flooring, furniture, and equipment. Routine cleaning helps preserve the value of your space and reduces long-term maintenance costs.",
  },
  {
    icon: (
      <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom0XTbJtnznWpD8lt52ycuGbAavdFLke9Ugf7J" alt="Boost team focus icon" className="w-16 h-16 object-contain mx-auto" />
    ),
    title: "Boost Team Focus",
    description: "A clean space helps your team stay focused, reduces sick days, and creates a more enjoyable work environment.",
  },
  {
    icon: (
      <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomKs2XeBUMQcNihESfqK8VPHRBylA7XtzCI2bd" alt="It's your brand icon" className="w-16 h-16 object-contain mx-auto" />
    ),
    title: "It’s Your Brand",
    description: "Clients and visitors notice the little things. A spotless lobby or bathroom can be the difference between a good impression and a lost opportunity.",
  },
];

export default function WhyInvestInCommercialCleaningSection() {
  return (
    <section className="py-16 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-navy-800 text-center mb-8">Why Invest in Commercial Cleaning?</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center mb-10">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">A spotless space says everything about your business</h3>
            <p className="text-base text-gray-700 mb-4">
              A clean workplace sends a message to your clients, your team, and your partners. It shows you care, it boosts productivity, and it protects your assets. At Kathy Clean, we help businesses across Colorado operate in healthier, more organized, and more professional environments. Here’s why consistent commercial cleaning matters:
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomwK8gHeLNQAijzTI0JpfGRs6WMerYKm743Voa" alt="Modern office" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-[#f6f8fe] p-6 rounded-lg flex flex-col items-center shadow-sm">
              <div className="mb-4">{card.icon}</div>
              <h4 className="font-extrabold text-lg text-navy-800 text-center mb-2">{card.title}</h4>
              <p className="text-gray-700 text-center text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
