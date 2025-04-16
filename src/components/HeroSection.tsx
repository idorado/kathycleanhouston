import type { FC } from "react";

interface HeroSectionProps {
  children: React.ReactNode;
}

const HeroSection: FC<HeroSectionProps> = ({ children }) => {
  return (
    <section className="relative bg-foreground overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
