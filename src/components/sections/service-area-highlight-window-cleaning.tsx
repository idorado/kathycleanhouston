interface ServiceAreaHighlightWindowCleaningProps {
  location?: string;
}

const MAP_IFRAME_URLS: Record<string, string> = {
  Denver: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204983.3710354381!2d-105.10992795!3d39.76433895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sDenver%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  Parker: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30652.60938438324!2d-104.7809982!3d39.5186001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8b2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sParker%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  "Castle Rock": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30652.60938438324!2d-104.8669!3d39.3722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b1b2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCastle%20Rock%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  "Lone Tree": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30652.60938438324!2d-104.8867!3d39.5364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8b2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sLone%20Tree%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  "Highlands Ranch": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30652.60938438324!2d-104.9719!3d39.5432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8b2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHighlands%20Ranch%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  Centennial: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30652.60938438324!2d-104.8726!3d39.5792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8b2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCentennial%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  "Central Park": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9342517!3d39.757236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCentral%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  Hilltop: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9952517!3d39.728236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHilltop%2C%20Denver%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  "Washington Park": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9712517!3d39.703236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sWashington%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  "Cherry Creek": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9952517!3d39.728236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sCherry%20Creek%2C%20Denver%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  "University Park": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-104.9952517!3d39.668236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sUniversity%20Park%2C%20Denver%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us",
  Highland: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51392.6653018158!2d-105.0152517!3d39.758236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e2e8e5a7f5%3A0x4a6b0b2e8e5a7f5!2sHighland%2C%20Denver%2C%20CO!5e0!3m2!1sen!2us!4v1710516801!5m2!1sen!2us"
};

export default function ServiceAreaHighlightWindowCleaning({ location }: ServiceAreaHighlightWindowCleaningProps) {
  const loc = location || "Denver";
  const mapUrl = MAP_IFRAME_URLS[loc] || MAP_IFRAME_URLS["Denver"];
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto rounded-3xl bg-white px-6 py-10 flex flex-col items-center text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">Servicing the {loc} Area</h2>
        <p className="text-lg text-navy-700 mb-8">
          Our window cleaning team proudly serves Denver and its surrounding neighborhoods, making sure your windows are spotless wherever you are in the city.
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
