import React from "react";

// Reusable icon components for better maintainability
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="flex-shrink-0">
    <path fill="#FFD600" d="m12 17.27 6.18 3.73-1.64-7.03L21.82 9.6l-7.19-.61L12 2.5 9.37 8.99l-7.19.61 5.28 4.37-1.64 7.03L12 17.27Z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="flex-shrink-0">
    <path stroke="#B3C6E4" strokeWidth="2" d="M12 3L4 7v5c0 5.25 3.75 10 8 10s8-4.75 8-10V7l-8-4Z"/>
    <path stroke="#B3C6E4" strokeWidth="2" d="M9 11.5 11 13.5 15 9.5"/>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="flex-shrink-0">
    <circle cx="12" cy="12" r="10" stroke="#B3C6E4" strokeWidth="2"/>
    <path stroke="#B3C6E4" strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2"/>
  </svg>
);

const FeatureItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
    {icon}
    <span className="text-white text-xs sm:text-sm whitespace-nowrap">{text}</span>
  </div>
);

export default function FeatureBar() {
  return (
    <div className="w-full mt-3">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
        <FeatureItem 
          icon={<StarIcon />} 
          text="4.9/5 Rating" 
        />
        <FeatureItem 
          icon={<ShieldIcon />} 
          text="Fully Insured & Bonded" 
        />
        <FeatureItem 
          icon={<ClockIcon />} 
          text="48 hr Guarantee" 
        />
      </div>
    </div>
  );
}
