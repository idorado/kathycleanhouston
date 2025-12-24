import RequestQuoteButton from "@/components/sections/RequestQuoteButton";

interface ServiceAreaHighlightProps {
  location?: string;
}

const MAP_IFRAME_URLS: Record<string, string> = {
  Houston: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443006.8294086512!2d-95.79082969612489!3d29.835685754864407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1763153833260!5m2!1ses-419!2sar",
  "Houston, TX": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443006.8294086512!2d-95.79082969612489!3d29.835685754864407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1763153833260!5m2!1ses-419!2sar",
}

import WhyCleanWindowsRegularly from "@/components/sections/why-clean-windows-regularly";

export default function ServiceAreaHighlight({ location }: ServiceAreaHighlightProps) {
  const loc = location || "Houston";
  const mapUrl = MAP_IFRAME_URLS[loc] || MAP_IFRAME_URLS["Houston"];

  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-navy-800 text-center mb-8">Servicing the {loc} Area</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4">
        <div className="flex-1 min-w-[300px] max-w-[520px]">
          <div className="mt-6 h-[300px] w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Service area map for ${loc}`}
            />
          </div>
        </div>
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-xl md:text-2xl font-bold text-navy-800 mb-2">Window Cleaning Services in {loc}</h3>
          <p className="font-semibold text-navy-800 mb-2">Residential & Commercial Window Cleaning You can Rely On.</p>
          <p className="text-base md:text-lg text-[#454545] mb-6">
            Kathy Clean Houston provides professional window cleaning services in {loc} for both homes and businesses. Our trained technicians use high-quality equipment to deliver streak-free results — whether it's for storefronts, office buildings, or multi-story homes. Trusted by business owners, property managers and homeowners across {loc}.
          </p>
          <RequestQuoteButton />
        </div>
      </div>
      <WhyCleanWindowsRegularly />
    </section>
  );
}
