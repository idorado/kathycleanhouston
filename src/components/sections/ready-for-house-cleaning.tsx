import RequestQuoteButton from "./RequestQuoteButton";

interface ReadyForHouseCleaningProps {
  location?: string;
}

export default function ReadyForHouseCleaning({ location }: ReadyForHouseCleaningProps) {
  return (
    <section className="py-14">
      <div className="max-w-3xl mx-auto rounded-3xl bg-[#17224D] px-6 py-10 flex flex-col items-center text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Your Home Cleaned This Week</h2>
        <p className="text-base md:text-lg text-white mb-8">
          We&apos;re currently accepting new recurring clients in West Houston. Most new clients are scheduled within 3–5 business days. Request your free quote today and we&apos;ll confirm availability for your area.
        </p>
        <RequestQuoteButton />
      </div>
    </section>
  );
}
