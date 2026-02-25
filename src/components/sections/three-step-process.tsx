export default function ThreeStepProcess() {
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-10">Simple Process</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
        {/* Step 1 */}
        <div className="bg-[#F5F7FB] rounded-lg p-8 w-full md:w-1/3 flex flex-col items-center shadow-sm">
          <span className="text-6xl font-bold text-navy-800 mb-2 drop-shadow-sm" style={{ WebkitTextStroke: '2px #17224D', color: 'white' }}>1</span>
          <h3 className="text-lg font-bold text-navy-800 mb-2">Request a Quote</h3>
          <p className="text-base text-navy-800 text-center">Fill out our form or call us. We'll reach out to understand what you need.</p>
        </div>
        {/* Step 2 */}
        <div className="bg-[#F5F7FB] rounded-lg p-8 w-full md:w-1/3 flex flex-col items-center shadow-sm">
          <span className="text-6xl font-bold text-navy-800 mb-2 drop-shadow-sm" style={{ WebkitTextStroke: '2px #17224D', color: 'white' }}>2</span>
          <h3 className="text-lg font-bold text-navy-800 mb-2">Get Matched</h3>
          <p className="text-base text-navy-800 text-center">We’ll coordinate service details based on your needs</p>
        </div>
        {/* Step 3 */}
        <div className="bg-[#F5F7FB] rounded-lg p-8 w-full md:w-1/3 flex flex-col items-center shadow-sm">
          <span className="text-6xl font-bold text-navy-800 mb-2 drop-shadow-sm" style={{ WebkitTextStroke: '2px #17224D', color: 'white' }}>3</span>
          <h3 className="text-lg font-bold text-navy-800 mb-2">Enjoy the Clean</h3>
          <p className="text-base text-navy-800 text-center">Relax while we take care of the rest</p>
        </div>
      </div>
    </section>
  );
}
