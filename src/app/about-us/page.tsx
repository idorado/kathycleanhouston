import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { home } from "@/config/json-ld";

export const metadata: Metadata = {
  title: "About Kathy Clean Houston | Local House Cleaning Company",
  description:
    "Kathy Clean Houston is a locally operated residential cleaning company serving Houston, TX. Fully insured, bonded, and background-checked professionals with a 48-hour satisfaction guarantee.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Kathy Clean Houston | Local House Cleaning Company",
    description:
      "Kathy Clean Houston is a locally operated residential cleaning company serving Houston, TX. Fully insured, bonded, and background-checked professionals with a 48-hour satisfaction guarantee.",
    url: "https://kathycleanhouston.com/about-us",
  },
};

export default function About() {
  return (
    <>
      <JsonLd data={home()} />
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-center text-accent mb-2">
        About Us — Kathy Clean Houston
      </h1>

      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-accent">Who We Are</h2>
        <p>
          Kathy Clean Houston is a locally operated residential cleaning company proudly serving homeowners across Houston and surrounding areas. We provide high-quality house cleaning services designed for busy families, professionals, and anyone who wants a consistently clean home — without the stress.
        </p>
        <p>
          While we operate locally in Houston, Kathy Clean is part of a growing cleaning brand built on a simple principle: cleaning services should be reliable, transparent, and delivered by people you feel comfortable trusting in your home.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-accent">Our Story</h2>
        <p>
          Kathy Clean Houston was created after years of hands-on experience providing residential cleaning services and listening closely to what homeowners actually want. Not flashy promises — but consistency, clear communication, and peace of mind.
        </p>
        <p>Over time, we learned that great cleaning isn’t just about spotless kitchens and sparkling bathrooms. It’s about:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>showing up on time,</li>
          <li>respecting your space,</li>
          <li>using professional-grade products, and</li>
          <li>delivering the same level of quality on every visit.</li>
        </ul>
        <p>
          Our Houston location was built specifically to serve this community, with local management, local teams, and a deep understanding of Houston homes, layouts, and cleaning needs.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-accent">What Makes Kathy Clean Houston Different</h2>
        <p>
          There are many cleaning services in Houston. What sets Kathy Clean Houston apart is how we operate day-to-day.
        </p>

        <h3 className="text-xl font-semibold text-accent">Local focus, professional standards</h3>
        <p>
          Services are coordinated locally. That means better communication, faster response times, and clear accountability.
        </p>

        <h3 className="text-xl font-semibold text-accent">Vetted cleaning professionals</h3>
        <p>
          Every cleaning professional we work with is carefully vetted and selected for consistent, detail-focused results.
        </p>

        <h3 className="text-xl font-semibold text-accent">Fully insured and reliable service</h3>
        <p>
          We operate as a professional cleaning company — not a gig platform. Your home is protected, and our work is backed by a satisfaction guarantee.
        </p>

        <h3 className="text-xl font-semibold text-accent">Clear pricing and honest expectations</h3>
        <p>
          No hidden fees. No surprise charges. We provide clear quotes based on your home and your needs.
        </p>

        <h3 className="text-xl font-semibold text-accent">48-hour satisfaction guarantee</h3>
        <p>If something isn’t right, we’ll make it right. Simple as that.</p>
      </div>

      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-accent">Home Cleaning That Fits Your Life</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Reliable weekly, bi-weekly, or monthly cleanings</li>
          <li>Deep cleaning and move-in/move-out options</li>
          <li>Fully insured and background-checked professionals</li>
          <li>Customized cleaning plans tailored to your home</li>
        </ul>
        <p>
          Whether you live in a house, apartment, or townhome, we adapt the service to your space — not the other way around.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-accent">A Brand Built to Grow — Without Losing the Local Touch</h2>
        <p>
          Kathy Clean is expanding to multiple cities, but every location operates with a strong local presence. When you book Kathy Clean Houston, you’re not calling a national call center — you’re working with a Houston-based service that understands the area and takes pride in serving it.
        </p>
        <p>As we grow, our commitment remains the same:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>local service,</li>
          <li>consistent quality, and</li>
          <li>respectful care of your home.</li>
        </ul>
      </div>
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-accent">Where We Operate in Houston</h2>
        <p>
          Our cleaners are based near the Katy Freeway corridor, which gives us practical reach across West Houston and the inner loop without the long drive times that affect service reliability. We serve homeowners across a wide range of Houston neighborhoods, including:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Inner Loop:</strong> Greater Heights, Rice Military, Spring Branch, Memorial, River Oaks, Bellaire, West University Place</li>
          <li><strong>West Houston:</strong> Energy Corridor, Briar Forest, Westchase, Memorial Villages</li>
          <li><strong>Suburbs:</strong> Katy, Sugar Land, The Woodlands, Oak Forest</li>
        </ul>
        <p>
          Our office is located at 9219 Katy Fwy #136, Houston, TX 77024. Service is available Monday through Friday, 7 AM–8 PM, and weekends 9 AM–8 PM.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-accent">A Brand Built to Grow — Without Losing the Local Touch</h2>
        <p>
          Kathy Clean is expanding to multiple cities, but every location operates with a strong local presence. When you book Kathy Clean Houston, you're not calling a national call center — you're working with a Houston-based service that understands the area and takes pride in serving it.
        </p>
        <p>As we grow, our commitment remains the same:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>local service,</li>
          <li>consistent quality, and</li>
          <li>respectful care of your home.</li>
        </ul>
      </div>
      <div className="flex justify-center mt-8">
        <img src="/images/logo-nav.webp" alt="Kathy Clean Houston logo" width={200} height={100} className="rounded" />
      </div>
    </section>
    </>
  );
}
