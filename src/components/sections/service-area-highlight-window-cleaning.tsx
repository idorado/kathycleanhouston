interface ServiceAreaHighlightWindowCleaningProps {
  location?: string;
}

const MAP_IFRAME_URLS: Record<string, string> = {
  Houston: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443006.8294086512!2d-95.79082969612489!3d29.835685754864407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1763153833260!5m2!1ses-419!2sar",
  "Houston, TX": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443006.8294086512!2d-95.79082969612489!3d29.835685754864407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1763153833260!5m2!1ses-419!2sar"
};

export default function ServiceAreaHighlightWindowCleaning({ location }: ServiceAreaHighlightWindowCleaningProps) {
  const loc = location || "Houston";
  const mapUrl = MAP_IFRAME_URLS[loc] || MAP_IFRAME_URLS["Houston"];
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto rounded-3xl bg-white px-6 py-10 flex flex-col items-center text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Servicing the {loc} Area</h2>
        <p className="text-lg text-navy-700 mb-8">
          Window cleaning service is available throughout {loc} and surrounding areas, helping keep your windows spotless wherever you are.
        </p>
        <div className="w-full h-96 rounded-xl overflow-hidden">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
