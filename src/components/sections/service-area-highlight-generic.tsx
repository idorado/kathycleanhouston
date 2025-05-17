import React from "react";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";

interface ServiceAreaHighlightGenericProps {
  location?: string;
  serviceTitle?: string;
  description?: string;
  subtitle?: string;
}

const MAP_IFRAME_URLS: Record<string, string> = {
  Denver: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204983.3710354381!2d-105.10992795!3d39.76433895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Parker: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102384.45652882094!2d-104.857163!3d39.5186009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sParker%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Castle Rock": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-104.9594353!3d39.3722128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCastle%20Rock%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Lone Tree": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9362517!3d39.534801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sLone%20Tree%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Highlands Ranch": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102784.0012590511!2d-105.0212517!3d39.543236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHighlands%20Ranch%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Centennial: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102823.62253929685!2d-104.9951986!3d39.6470058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7f7a3c25cfa3%3A0x74c9fb8a0c3f23ea!2sCentennial%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Central Park": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9342517!3d39.757236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCentral%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Hilltop": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9492517!3d39.728236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHilltop%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Washington Park": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9652517!3d39.704236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sWashington%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "Cherry Creek": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9552517!3d39.719236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCherry%20Creek%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  "University Park": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9952517!3d39.668236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sUniversity%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
  Highland: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-105.0152517!3d39.758236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHighland%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1710516801!5m2!1sen!2sus",
};

export default function ServiceAreaHighlightGeneric({ location = "Denver", serviceTitle = "Cleaning Services in", description = "We provide professional cleaning services in your area for homes and businesses. Our trained technicians deliver reliable results for all types of properties.", subtitle = "Residential & Commercial Cleaning You can Rely On." }: ServiceAreaHighlightGenericProps) {
  const mapUrl = MAP_IFRAME_URLS[location] || MAP_IFRAME_URLS["Denver"];

  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-navy-800 text-center mb-8">Servicing the {location} Area</h2>
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
              title={`Service area map for ${location}`}
            />
          </div>
        </div>
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-xl md:text-2xl font-bold text-navy-800 mb-2">{serviceTitle} {location}</h3>
          <p className="font-semibold text-navy-800 mb-2">{subtitle}</p>
          <p className="text-base md:text-lg text-[#454545] mb-6">
            {description}
          </p>
          <RequestQuoteButton />
        </div>
      </div>
    </section>
  );
}
