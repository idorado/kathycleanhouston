import type { Metadata } from "next";
import { canonicalPath } from "@/lib/canonical";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import ResourceArticleTemplate from "@/components/resources/ResourceArticleTemplate";
import JsonLd from "@/components/json-ld";
import { katyPricingJsonLd, buildFaqPageSchema } from "@/config/json-ld";

const articlePath = canonicalPath("resources/house-cleaning-cost-katy");
const articleTitle = "House Cleaning Cost in Katy, TX: Flat-Rate Pricing Guide";
const articleDescription =
  "Flat-rate house cleaning prices for Katy and Cinco Ranch homes — recurring from $129, deep clean from $285. Same transparent pricing across Katy, no neighborhood surcharge.";

const faqs = [
  {
    question: "How much does house cleaning cost in Katy, TX?",
    answer:
      "House cleaning in Katy starts at $129 per weekly visit for homes under 900 sq ft and scales with square footage to $295/week for homes up to 6,000 sq ft. Deep cleans and move-out cleans start at $285. Pricing is flat-rate and excludes Texas sales tax (8.25%).",
  },
  {
    question: "Is cleaning more expensive in Katy or Cinco Ranch than central Houston?",
    answer:
      "No. Kathy Clean uses one flat-rate grid based on home square footage — there is no neighborhood surcharge for Katy, Cinco Ranch, or anywhere in the service area. A 2,500 sq ft home costs the same in Katy as it does in Memorial or the Heights.",
  },
  {
    question: "Do you serve Cinco Ranch and the Grand Parkway area?",
    answer:
      "Yes. We serve Katy including Cinco Ranch, Seven Meadows, Cross Creek Ranch, and neighborhoods along the Grand Parkway (99) and I-10 Energy Corridor corridor. See our Katy service area page for details.",
  },
  {
    question: "Why do larger Katy homes cost more?",
    answer:
      "Square footage is the main price driver. Katy's master-planned communities trend toward larger homes (2,500–4,000+ sq ft), which fall into higher pricing tiers simply because there's more space to clean — not because of location.",
  },
];

export const metadata: Metadata = {
  title: "House Cleaning Cost in Katy, TX (2026) — Flat-Rate Pricing Guide",
  description: articleDescription,
  alternates: { canonical: articlePath },
  openGraph: {
    title: "House Cleaning Cost in Katy, TX (2026)",
    description: articleDescription,
    url: "https://kathycleanhouston.com/resources/house-cleaning-cost-katy",
  },
};

export default function HouseCleaningCostKatyArticle() {
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
      <JsonLd data={katyPricingJsonLd()} />
      <JsonLd data={buildFaqPageSchema(faqs, articlePath)} />
      <h1>House Cleaning Cost in Katy, TX</h1>

      <p>
        House cleaning in Katy starts at <strong>$129 per weekly visit</strong> for homes under 900 sq ft and scales with square footage up to <strong>$295/week</strong> for homes up to 6,000 sq ft. Deep cleans and move-out cleans start at <strong>$285</strong>. The price is the same flat-rate grid used across the whole service area — <strong>there's no Katy or Cinco Ranch surcharge</strong> — and all prices exclude Texas sales tax (8.25%).
      </p>

      <h2>Katy Pricing by Home Size</h2>
      <p>
        Katy's master-planned communities — Cinco Ranch, Seven Meadows, Cross Creek Ranch — trend toward larger homes, so many Katy households land in the mid and upper tiers below.
      </p>

      <div className="not-prose overflow-x-auto my-6">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">Home Sq Ft</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Weekly</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Bi-Weekly</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Monthly</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Deep / Move</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0–900", "$129", "$139", "$149", "$285"],
              ["1,201–1,500", "$139", "$149", "$169", "$329"],
              ["1,801–2,100", "$149", "$159", "$179", "$379"],
              ["2,301–2,600", "$159", "$175", "$195", "$415"],
              ["2,901–3,500", "$189", "$205", "$225", "$495"],
              ["3,501–4,100", "$205", "$225", "$245", "$549"],
              ["4,701–5,300", "$255", "$289", "$309", "$649"],
              ["5,301–6,000", "$295", "$325", "$355", "$719"],
            ].map(([size, weekly, biweekly, monthly, deep], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-3 py-2 font-medium whitespace-nowrap">{size}</td>
                <td className="px-3 py-2 text-right">{weekly}</td>
                <td className="px-3 py-2 text-right font-semibold text-primary">{biweekly}</td>
                <td className="px-3 py-2 text-right">{monthly}</td>
                <td className="px-3 py-2 text-right">{deep}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">Per-visit, flat-rate. Excludes Texas sales tax (8.25%). Abbreviated tiers shown — see the full <a href="/resources/house-cleaning-cost-houston">Houston pricing grid</a> for every size band.</p>
      </div>

      <h2>Why Katy Pricing Is the Same as the Rest of Houston</h2>
      <p>
        We price on square footage, not zip code. A 2,500 sq ft home costs the same whether it's in Katy, Memorial, or the Heights. That keeps quotes honest and predictable — you'll never pay a "suburb premium." What does move the price is home size, current condition, pets, and add-ons like inside the oven or interior windows. See the full list of factors in our <a href="/resources/house-cleaning-cost-houston">Houston house cleaning cost guide</a>.
      </p>

      <h2>Cleaning for Katy Homes</h2>
      <p>
        Larger suburban homes benefit most from a <a href="/resources/recurring-cleaning-cost-houston">recurring bi-weekly plan</a> — more square footage means dust and Gulf-coast humidity grime spread across more surfaces, so consistent visits keep the per-visit price down. First-time clients with a larger home often start with a deep clean, then move to recurring. Learn more on our <a href="/service-areas/katy">Katy service area page</a>.
      </p>

      <div className="not-prose bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="text-xl font-semibold mb-3">Get Your Katy Quote</h3>
        <p className="mb-4 text-gray-700">
          Flat-rate pricing for Katy and Cinco Ranch homes — know your exact price before the team arrives.
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
        <h3 className="text-2xl font-bold mb-4">Cleaning in Katy, TX</h3>
        <p className="mb-6 text-lg">
          The same trusted team, every visit — no neighborhood surcharge. Get your flat-rate Katy quote.
        </p>
        <RequestQuoteButton className="bg-white text-primary hover:bg-gray-100" />
      </div>
    </ResourceArticleTemplate>
  );
}
