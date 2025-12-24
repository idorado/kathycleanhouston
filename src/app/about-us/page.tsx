import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about-us",
  },
};

export default function About() {
  return (
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
          Our Houston team is managed locally. That means better communication, faster response times, and real accountability.
        </p>

        <h3 className="text-xl font-semibold text-accent">Trained, vetted cleaning professionals</h3>
        <p>
          Every cleaner we work with is carefully vetted and trained to follow detailed cleaning checklists and consistent quality standards.
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
        <h2 className="text-2xl font-bold text-accent">Our Cleaning Services in Houston</h2>
        <p>Kathy Clean Houston offers a full range of residential cleaning services, including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Recurring house cleaning (weekly, bi-weekly, monthly)</li>
          <li>Deep cleaning services</li>
          <li>Move-in and move-out cleaning</li>
          <li>One-time cleanings</li>
          <li>Customized cleaning plans tailored to your home</li>
        </ul>
        <p>
          Whether you live in a house, apartment, or townhome, our team adapts the service to your space — not the other way around.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-accent">A Brand Built to Grow — Without Losing the Local Touch</h2>
        <p>
          Kathy Clean is expanding to multiple cities, but every location operates with a strong local presence. When you book Kathy Clean Houston, you’re not calling a national call center — you’re working with a Houston-based team that understands the area and takes pride in serving it.
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
  );
}
