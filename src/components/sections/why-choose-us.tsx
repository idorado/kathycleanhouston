import type { FC } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center md:items-start text-center md:text-left">
      <div className="mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-navy-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function WhyChooseUs() {
  const features = [
    {
      icon: <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomf784HIMOIyEW8fnCaPxAMTFk0iZhHrQ5NVgb" alt="Satisfaction Guaranteed"/>,
      title: "Satisfaction Guaranteed",
      description: "Our service is so good, we guarantee it. If you are not 100% satisfied with your cleaning, contact us within 48 hours, and we will gladly re-clean any area you're dissatisfied with, at no extra cost."
    },
    {
      icon: <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom5Qw8arRQnkuiVT9l8U1p3SweHAjbqyscPMXW" alt="Checklists"/>,
      title: "Checklists",
      description: "Excellence is in the details. We approach every job with the same rigor as pilots and surgeons, through checklists. Our process ensures nothing is missed, every time."
    },
    {
      icon: <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomxlikN0PQRcBU1VN4YrWbTIXj8k39sPLKdZiv" alt="Fully Insured & Bonded"/>,
      title: "Fully Insured & Bonded",
      description: "For your peace of mind, we are bonded for $1M and covered with up to $5M in General Liability insurance. Our team is made up of 100% legal workers and has one of the lowest turnover rates in the industry."
    },
    {
      icon: <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom4AHAO15dAlomP7EFuMse5X0rqt64ZLkg13W9" alt="Happy Employees = Better Service"/>,
      title: "Happy Employees = Better Service",
      description: "Low turnover means our employees are treated well, which translates to better customer service and a more dedicated team."
    }
  ];

  return (
    <section className="p-16 bg-slate-50" id="why-choose-us">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy-800 mb-4">Why Trust Kathy Clean For Your Cleaning Needs?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Great things start with a clean space. We don't just clean, we care. Every detail matters, every job is done with pride and a smile. If it's not perfect, we make it right. Clean. Professional. Happy. That's who we are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
