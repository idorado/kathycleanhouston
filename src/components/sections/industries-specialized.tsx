export interface Industry {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface IndustriesSpecializedProps {
  industries: Industry[];
}

const IndustriesSpecialized: React.FC<IndustriesSpecializedProps> = ({ industries }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-24 bg-gray-100">
      <div className="container mx-auto px-4 text-center text-sm text-muted">
        <h3 className="font-semibold mb-2 text-2xl md:text-3xl lg:text-4xl text-primary-foreground">
          Industries we specialize in
        </h3>
      <p className="mb-4 text-lg">
        Each industry has unique cleaning needs, from specific processes and products to the ideal cleaning frequency. We tailor our services to ensure the best results for your business, providing the right solutions to keep your space clean, safe, and well-maintained.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl px-4">
      {industries.map((industry) => (
        <div
          key={industry.title}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 md:p-8 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="mb-4 md:mb-6 w-16 h-16 flex items-center justify-center">
            {industry.icon}
          </div>
          <h3 className="font-bold text-lg md:text-xl text-primary-foreground mb-2">
            {industry.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            {industry.description}
          </p>
        </div>
      ))}
    </div>
  </section>
  );
};

export default IndustriesSpecialized;
