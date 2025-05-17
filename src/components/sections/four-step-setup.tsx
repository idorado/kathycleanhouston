import React from "react";

const steps = [
  {
    number: 1,
    title: "Site Walk and Assesment",
    description: "We visit your facility  to understand your specific requirements, schedules, and expectations.",
  },
  {
    number: 2,
    title: "Custom Proposal and Pricing",
    description: "Based on your needs, we provide a tailored proposal with a clear checklist and service details.",
  },
  {
    number: 3,
    title: "Onboarding and Service Launch",
    description: "Once approved, we set up your account, align with your team, and begin service with trained staff and a dedicated account manager.",
  },
  {
    number: 4,
    title: "Quality Control and Ongoing Support",
    description: "We monitor service quality regularly and stay in touch to ensure your standards are consistently met.",
  },
];

export default function FourStepSetupSection() {
  return (
    <section className="py-16 w-full">
      <h2 className="text-4xl font-extrabold text-navy-800 text-center mb-10">Our 4-Step Setup</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-2">
        {steps.map((step) => (
          <div key={step.number} className="bg-[#f6f8fe] rounded-lg flex flex-col items-center p-8 shadow-sm">
            <span className="text-6xl font-extrabold text-navy-800 mb-2 drop-shadow-sm">{step.number}</span>
            <h3 className="text-lg font-extrabold text-navy-800 text-center mb-2" style={{fontFamily: 'Quicksand, Arial, sans-serif'}}>{step.title}</h3>
            <p className="text-gray-700 text-center text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
