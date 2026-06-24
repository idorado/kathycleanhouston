import type { Metadata } from "next";
import { canonicalPath } from "@/lib/canonical";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import ResourceArticleTemplate from "@/components/resources/ResourceArticleTemplate";
import JsonLd from "@/components/json-ld";
import { apartmentPricingJsonLd, buildFaqPageSchema } from "@/config/json-ld";

const articlePath = canonicalPath("resources/apartment-cleaning-cost-houston");
const articleTitle = "How Much Does Apartment Cleaning Cost in Houston?";
const articleDescription =
  "Apartment cleaning in Houston is priced by square footage — bi-weekly from $139, one-time from $199. Full pricing for studios to 1,500 sq ft units, plus what a clean includes.";

const faqs = [
  {
    question: "How much does it cost to clean an apartment in Houston?",
    answer:
      "Apartment cleaning in Houston is priced by square footage. A studio or 1-bedroom under 900 sq ft runs $139 bi-weekly or $199 for a one-time clean; a 1,200 sq ft unit runs $145 bi-weekly. Prices are flat-rate and exclude Texas sales tax (8.25%).",
  },
  {
    question: "Are apartments priced differently than houses?",
    answer:
      "No — the same flat-rate grid applies. Pricing is based on the unit's square footage, not whether it's an apartment, condo, or house. Most Houston apartments fall in the smallest one or two pricing tiers.",
  },
  {
    question: "Do high-rise or gated apartments cost extra?",
    answer:
      "No surcharge for high-rise or gated buildings. Just let us know about visitor parking, gate codes, or front-desk check-in when you book so the team can plan access.",
  },
  {
    question: "What's included in an apartment cleaning?",
    answer:
      "A standard apartment clean covers the kitchen (counters, stovetop, appliance exteriors, sink), full bathroom cleaning, vacuuming and mopping all floors, dusting surfaces and fixtures, and mirrors and high-touch areas. Inside the oven, inside the fridge, and interior windows are deep-clean add-ons.",
  },
];

export const metadata: Metadata = {
  title: "Apartment Cleaning Cost in Houston (2026) — Flat-Rate Pricing",
  description: articleDescription,
  alternates: { canonical: articlePath },
  openGraph: {
    title: "How Much Does Apartment Cleaning Cost in Houston?",
    description: articleDescription,
    url: "https://kathycleanhouston.com/resources/apartment-cleaning-cost-houston",
  },
};

export default function ApartmentCleaningCostHoustonArticle() {
  return (
    <ResourceArticleTemplate
      schema={{
        headline: articleTitle,
        description: articleDescription,
        path: articlePath,
        datePublished: "2026-06-24",
        dateModified: "2026-06-24",
      }}
    >
      <JsonLd data={apartmentPricingJsonLd()} />
      <JsonLd data={buildFaqPageSchema(faqs, articlePath)} />
      <h1>How Much Does Apartment Cleaning Cost in Houston?</h1>

      <p>
        Apartment cleaning in Houston starts at <strong>$139 for a bi-weekly visit</strong> and <strong>$199 for a one-time clean</strong> on units under 900 sq ft. Pricing is by square footage — the same flat-rate grid used for houses — so most Houston apartments and condos fall in the lowest one or two tiers. All prices <strong>exclude Texas sales tax (8.25%)</strong>.
      </p>

      <h2>Apartment Pricing by Unit Size</h2>
      <p>
        Studios and one-bedrooms typically land in the 0–900 sq ft tier; larger two- and three-bedroom units run 901–1,500 sq ft. Here are the tiers most Houston apartments fall into:
      </p>

      <div className="not-prose overflow-x-auto my-6">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">Unit Sq Ft</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Weekly</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Bi-Weekly</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Monthly</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">One-Time</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Deep Clean</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Studio / 1BR (0–900)", "$129", "$139", "$149", "$199", "$285"],
              ["1–2BR (901–1,200)", "$129", "$145", "$159", "$219", "$295"],
              ["2–3BR (1,201–1,500)", "$139", "$149", "$169", "$229", "$329"],
            ].map(([size, weekly, biweekly, monthly, single, deep], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-3 py-2 font-medium whitespace-nowrap">{size}</td>
                <td className="px-3 py-2 text-right">{weekly}</td>
                <td className="px-3 py-2 text-right font-semibold text-primary">{biweekly}</td>
                <td className="px-3 py-2 text-right">{monthly}</td>
                <td className="px-3 py-2 text-right">{single}</td>
                <td className="px-3 py-2 text-right">{deep}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">Per-visit, flat-rate. Excludes Texas sales tax (8.25%). Larger units follow the full <a href="/resources/house-cleaning-cost-houston">house cleaning pricing grid</a>.</p>
      </div>

      <h2>Which Clean Does Your Apartment Need?</h2>
      <ul>
        <li><strong>Move-out / move-in</strong> — Leaving a rental? A move-out clean ($285+ for most units) targets a full deposit return. See our <a href="/resources/move-out-cleaning-checklist-houston">Houston move-out checklist</a>.</li>
        <li><strong>One-time / single clean</strong> — A refresh without a recurring commitment, priced from $199.</li>
        <li><strong>Recurring</strong> — Bi-weekly from $139 keeps a busy apartment consistently clean for less per visit. Compare cadences in our <a href="/resources/recurring-cleaning-cost-houston">recurring cleaning cost guide</a>.</li>
        <li><strong>Deep clean</strong> — A first-time reset that adds inside the oven, inside the fridge, baseboards, and grout, from $285.</li>
      </ul>

      <div className="not-prose bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="text-xl font-semibold mb-3">Get Your Apartment Quote</h3>
        <p className="mb-4 text-gray-700">
          Tell us your unit's square footage and what you need — we'll give a flat-rate price up front.
        </p>
        <RequestQuoteButton />
      </div>

      <h2>Frequently Asked Questions</h2>
      {faqs.map((f, i) => (
        <details key={i} className="border rounded-lg p-4 my-3">
          <summary className="font-semibold cursor-pointer">{f.question}</summary>
          <p className="mt-2 text-gray-700">{f.answer}</p>
        </details>
      ))}

      <div className="not-prose bg-primary text-white p-8 rounded-lg my-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Book Your Apartment Cleaning</h3>
        <p className="mb-6 text-lg">
          Flat-rate pricing, background-checked teams, no surprises. Get a quote in minutes.
        </p>
        <RequestQuoteButton className="bg-white text-primary hover:bg-gray-100" />
      </div>
    </ResourceArticleTemplate>
  );
}
