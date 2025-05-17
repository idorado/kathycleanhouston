import RequestQuoteButton from "./RequestQuoteButton";

interface ReadyForHouseCleaningProps {
  location?: string;
}

export default function ReadyForHouseCleaning({ location }: ReadyForHouseCleaningProps) {
  return (
    <section className="py-14">
      <div className="max-w-3xl mx-auto rounded-3xl bg-[#17224D] px-6 py-10 flex flex-col items-center text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for your House Cleaning?</h2>
        <p className="text-base md:text-lg text-white mb-8">
          Enjoy a spotless home with our professional house cleaning service. Our {location ? `${location}-based` : 'Denver-based'} team ensures every corner shines, giving you more time to relax and enjoy your space.
        </p>
        <RequestQuoteButton />
      </div>
    </section>
  );
}
