import RequestQuoteButton from "@/components/sections/RequestQuoteButton";

interface ServiceAreaHighlightProps {
  location?: string;
}

const MAP_IFRAME_URLS: Record<string, string> = {
  "Cherry Hills Village": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204983.3710354381!2d-104.9973!3d39.6419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCherry%20Hills%20Village%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Roxborough Park": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204983.3710354381!2d-105.1282!3d39.4753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sRoxborough%20Park%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Ken Caryl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204983.3710354381!2d-105.1622!3d39.5764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sKen%20Caryl%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Glendale: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204983.3710354381!2d-104.9831!3d39.7047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sGlendale%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Bow Mar": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204983.3710354381!2d-105.0983!3d39.6232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sBow%20Mar%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "The Pinery": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204983.3710354381!2d-104.7842!3d39.4532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sThe%20Pinery%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Watkins: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204983.3710354381!2d-104.6547!3d39.7536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sWatkins%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Denver: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204983.3710354381!2d-105.10992795!3d39.76433895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Parker: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102384.45652882094!2d-104.857163!3d39.5186009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sParker%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Castle Rock": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-104.9594353!3d39.3722128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCastle%20Rock%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Lone Tree": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9362517!3d39.534801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sLone%20Tree%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Highlands Ranch": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102784.0012590511!2d-105.0212517!3d39.543236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHighlands%20Ranch%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Centennial: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-104.9951986!3d39.6470058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7f7a3c25cfa3%3A0x74c9fb8a0c3f23ea!2sCentennial%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Central Park": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9342517!3d39.757236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCentral%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Hilltop: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9952517!3d39.728236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHilltop%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Washington Park": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9712517!3d39.703236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sWashington%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Cherry Creek": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9952517!3d39.728236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCherry%20Creek%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "University Park": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9952517!3d39.668236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sUniversity%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Highland: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-105.0152517!3d39.758236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHighland%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Englewood: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-104.994167!3d39.647765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sEnglewood%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Aurora: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-104.83192!3d39.729431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sAurora%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Lakewood: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-105.11757!3d39.704709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sLakewood%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Littleton: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-105.008057!3d39.613321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sLittleton%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Sheridan: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-105.014153!3d39.646432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sSheridan%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Greenwood Village": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-104.882065!3d39.617211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sGreenwood%20Village%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
}

import WhyCleanWindowsRegularly from "@/components/sections/why-clean-windows-regularly";

export default function ServiceAreaHighlight({ location }: ServiceAreaHighlightProps) {
  const loc = location || "Denver";
  const mapUrl = MAP_IFRAME_URLS[loc] || MAP_IFRAME_URLS["Denver"];

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
            Kathy Clean provides professional window cleaning services in {loc} for both homes and businesses. Our trained technicians use high-quality equipment to deliver streak-free results — whether it's for storefronts, office buildings, or multi-story homes. Trusted by business owners, property managers and homeowners across {loc}.
          </p>
          <RequestQuoteButton />
        </div>
      </div>
      <WhyCleanWindowsRegularly />
    </section>
  );
}
