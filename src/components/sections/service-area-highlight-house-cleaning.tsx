interface ServiceAreaHighlightHouseCleaningProps {
  location?: string;
}

const MAP_IFRAME_URLS: Record<string, string> = {
  Houston:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443006.8294086512!2d-95.79082969612489!3d29.835685754864407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1763153833260!5m2!1ses-419!2sar",
  "Houston, TX":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443006.8294086512!2d-95.79082969612489!3d29.835685754864407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1763153833260!5m2!1ses-419!2sar",
  Denver: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204983.3710354381!2d-105.10992795!3d39.76433895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Parker: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30652.60938438324!2d-104.7809982!3d39.5186001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8b2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sParker%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2us",
  "Castle Rock": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30652.60938438324!2d-104.8669!3d39.3722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b1b2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCastle%20Rock%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  "Lone Tree": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30652.60938438324!2d-104.8867!3d39.5364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8b2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sLone%20Tree%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  "Highlands Ranch": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30652.60938438324!2d-104.9719!3d39.5432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8b2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHighlands%20Ranch%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  Centennial: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30652.60938438324!2d-104.8726!3d39.5792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8b2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCentennial%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  "Central Park": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9342517!3d39.757236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCentral%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  Hilltop: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9952517!3d39.728236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHilltop%2C%20Denver%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  "Washington Park": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9712517!3d39.703236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sWashington%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  "Cherry Creek": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9952517!3d39.728236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCherry%20Creek%2C%20Denver%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  "University Park": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9952517!3d39.668236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sUniversity%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  Highland: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-105.0152517!3d39.758236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHighland%2C%20Denver%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  Englewood: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.12940378934!2d-104.994167!3d39.647765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sEnglewood%2C%20CO!5e0!3m2!1sen!2sus!4v1620000000000",
  Littleton: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-105.008057!3d39.613321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sLittleton%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Greenwood Village": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.12940378934!2d-104.9018105!3d39.6092059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sGreenwood%20Village%2C%20CO!5e0!3m2!1sen!2sus!4v1620000000000"
};

export default function ServiceAreaHighlightHouseCleaning({ location }: ServiceAreaHighlightHouseCleaningProps) {
  const loc = location || "Denver";
  const mapUrl = MAP_IFRAME_URLS[loc] || MAP_IFRAME_URLS["Denver"];
  // Get the base location for the map (Denver for neighborhoods, specific city for others)
  const baseLocation = loc.includes('Park') || loc === 'Highland' || loc === 'Hilltop' || loc === 'Cherry Creek' 
    ? 'Denver' 
    : loc;

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto rounded-3xl bg-white px-6 py-10 flex flex-col items-center text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Servicing {loc}</h2>
        <p className="text-lg text-navy-700 mb-8">
          Our house cleaning team proudly serves {loc} and its surrounding areas, ensuring a spotless home for all our clients in the {baseLocation} region.
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
