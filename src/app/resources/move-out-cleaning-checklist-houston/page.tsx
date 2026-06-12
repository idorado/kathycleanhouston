import type { Metadata } from "next";
import { canonicalPath } from "@/lib/canonical";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import ResourceArticleTemplate from "@/components/resources/ResourceArticleTemplate";

const articlePath = canonicalPath("resources/move-out-cleaning-checklist-houston");
const articleTitle = "Move-Out Cleaning Checklist for Houston Renters (Deposit-Ready)";
const articleDescription =
  "A room-by-room move-out cleaning checklist for Houston rentals — exactly what landlords and property managers check for a full deposit return, plus what a pro service covers.";

export const metadata: Metadata = {
  title: "Move-Out Cleaning Checklist for Houston Renters (2026)",
  description: articleDescription,
  alternates: {
    canonical: articlePath,
  },
  openGraph: {
    title: "Move-Out Cleaning Checklist for Houston Renters (2026)",
    description: articleDescription,
    url: "https://kathycleanhouston.com/resources/move-out-cleaning-checklist-houston",
  },
};

export default function MoveOutChecklistHoustonArticle() {
  return (
    <ResourceArticleTemplate
      schema={{
        headline: articleTitle,
        description: articleDescription,
        path: articlePath,
        datePublished: "2026-06-12",
        dateModified: "2026-06-12",
      }}
    >
      <h1>Move-Out Cleaning Checklist for Houston Renters (Deposit-Ready)</h1>

      <p>
        A spotless move-out clean is what stands between you and a full deposit return. This is the room-by-room checklist Houston landlords and property managers actually inspect — use it yourself, or hand it to a pro. For full pricing and scope, see our <a href="/resources/move-in-move-out-cleaning-houston">move-in/move-out cleaning guide</a>.
      </p>

      <h2>Kitchen</h2>
      <ul>
        <li>Inside, outside, and on top of the oven and stovetop; drip pans and racks.</li>
        <li>Inside the refrigerator and freezer (defrosted), plus behind and underneath if movable.</li>
        <li>Inside the microwave and dishwasher.</li>
        <li>Inside and outside all cabinets and drawers.</li>
        <li>Countertops, backsplash, sink, and faucet (mineral deposits removed).</li>
        <li>Floors swept and mopped, including under appliances.</li>
      </ul>

      <h2>Bathrooms</h2>
      <ul>
        <li>Tub, shower, and glass doors — soap scum and <a href="/resources/hard-water-cleaning-houston">hard-water buildup</a> removed.</li>
        <li>Toilet cleaned inside and out, including the base.</li>
        <li>Sink, vanity, mirror, and cabinet interiors.</li>
        <li>Grout scrubbed; exhaust fan cover dusted.</li>
        <li>Floors cleaned and baseboards wiped.</li>
      </ul>

      <h2>Bedrooms, living areas &amp; throughout</h2>
      <ul>
        <li>Closet shelves and floors wiped.</li>
        <li>Baseboards, door frames, and doors.</li>
        <li>Window sills, tracks, and reachable interior glass.</li>
        <li>Ceiling fans, light fixtures, and vent covers dusted.</li>
        <li>Switch plates and outlet covers wiped.</li>
        <li>All floors vacuumed and mopped; carpet edges detailed.</li>
      </ul>

      <h2>Easy-to-miss items landlords check</h2>
      <ul>
        <li>Top of the refrigerator and cabinet tops.</li>
        <li>Inside the washer/dryer area and behind the units.</li>
        <li>Patio or balcony swept.</li>
        <li>Garage swept (if included in the lease).</li>
        <li>Cobwebs in corners and around light fixtures.</li>
      </ul>

      <h2>DIY or hire a pro?</h2>
      <p>
        A full move-out clean on a 2-bedroom takes most people the better part of a day — and a missed oven or grout line can cost part of a deposit. A professional move-out clean is flat-rate by home size (starting at $285, the same as a <a href="/resources/deep-cleaning-houston">deep clean</a>), covers everything on this list, and we coordinate with your landlord or property manager on request. Areas with heavy rental turnover — like <a href="/house-cleaning-westchase">Westchase</a> and the <a href="/house-cleaning-medical-center-area">Medical Center area</a> — book this routinely, especially in summer.
      </p>

      <div className="not-prose bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="text-xl font-semibold mb-3">Get a Deposit-Ready Move-Out Clean</h3>
        <p className="mb-4 text-gray-700">
          Flat-rate by home size, landlord-coordinated, everything on this checklist covered. Tell us your move date for a quote.
        </p>
        <RequestQuoteButton />
      </div>

      <p>
        <a href="/request-quote">Request a free quote</a> with your home size and move date and we&apos;ll schedule around it.
      </p>
    </ResourceArticleTemplate>
  );
}
