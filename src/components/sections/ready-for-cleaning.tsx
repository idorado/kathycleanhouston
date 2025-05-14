import RequestQuoteButton from "@/components/sections/RequestQuoteButton";

interface ReadyForCleaningProps {
  location?: string;
  serviceType?: string;
}

export default function ReadyForCleaning({ location, serviceType }: ReadyForCleaningProps) {
  return (
    <section className="py-14">
      <div className="max-w-3xl mx-auto rounded-3xl bg-[#17224D] px-6 py-10 flex flex-col items-center text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready For your Window Cleaning?</h2>
        <p className="text-base md:text-lg text-white mb-8">
          Let the light in with a professional window cleaning you can count on. Our {location ? `${location}-based` : 'Denver-based'} team makes your windows spotless, so you and your customers enjoy the view without the hassle.
        </p>
        <RequestQuoteButton />
      </div>
    </section>
  );
}
