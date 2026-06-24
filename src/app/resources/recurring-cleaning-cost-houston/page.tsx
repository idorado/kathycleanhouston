import type { Metadata } from "next";
import { canonicalPath } from "@/lib/canonical";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import ResourceArticleTemplate from "@/components/resources/ResourceArticleTemplate";
import JsonLd from "@/components/json-ld";
import { recurringPricingJsonLd, buildFaqPageSchema } from "@/config/json-ld";

const articlePath = canonicalPath("resources/recurring-cleaning-cost-houston");
const articleTitle = "Recurring House Cleaning Cost in Houston: Weekly, Bi-Weekly & Monthly";
const articleDescription =
  "What recurring house cleaning costs in Houston — weekly from $129, bi-weekly from $139, monthly from $149 per visit. How frequency changes the per-visit price and your annual cost.";

const faqs = [
  {
    question: "How much does recurring house cleaning cost in Houston?",
    answer:
      "Recurring cleaning in Houston starts at $129 per weekly visit for homes under 900 sq ft, $139 bi-weekly, and $149 monthly. Larger homes scale up to $295 weekly, $325 bi-weekly, and $355 monthly for homes up to 6,000 sq ft. All prices are flat-rate and exclude Texas sales tax (8.25%).",
  },
  {
    question: "Why is recurring cleaning cheaper per visit than a one-time clean?",
    answer:
      "A home on a recurring plan stays in better condition between visits, so each clean takes less time and effort. That lower effort is passed on as a lower per-visit price — recurring rates run 30–47% below a one-time single clean for the same home.",
  },
  {
    question: "Which cleaning frequency is most popular in Houston?",
    answer:
      "Bi-weekly (every two weeks) is the most popular choice for Houston households. It keeps visible dust and Gulf-humidity grime from building up while costing less per visit than weekly service.",
  },
  {
    question: "Is there a contract for recurring cleaning?",
    answer:
      "No long-term contract is required. You can pause or adjust your plan. If you book a recurring plan but cancel after a single visit, that visit is billed at the one-time rate.",
  },
];

export const metadata: Metadata = {
  title: "Recurring House Cleaning Cost in Houston (2026) — Weekly, Bi-Weekly, Monthly",
  description: articleDescription,
  alternates: { canonical: articlePath },
  openGraph: {
    title: "Recurring House Cleaning Cost in Houston (2026)",
    description: articleDescription,
    url: "https://kathycleanhouston.com/resources/recurring-cleaning-cost-houston",
  },
};

export default function RecurringCleaningCostHoustonArticle() {
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
      <JsonLd data={recurringPricingJsonLd()} />
      <JsonLd data={buildFaqPageSchema(faqs, articlePath)} />
      <h1>Recurring House Cleaning Cost in Houston</h1>

      <p>
        Recurring house cleaning in Houston starts at <strong>$129 per weekly visit</strong> for homes under 900 sq ft, <strong>$139 bi-weekly</strong>, and <strong>$149 monthly</strong>. Prices scale with home size up to <strong>$295/$325/$355</strong> for homes up to 6,000 sq ft. Every price is flat-rate — set before the team arrives — and <strong>excludes Texas sales tax (8.25%)</strong>.
      </p>

      <h2>Recurring Pricing by Home Size</h2>
      <p>
        Recurring plans are priced lower per visit than one-time cleans because the home stays in better shape between visits. The more often you clean, the lower the per-visit price.
      </p>

      <div className="not-prose overflow-x-auto my-6">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">Home Sq Ft</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Weekly</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Bi-Weekly</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Monthly</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0–900", "$129", "$139", "$149"],
              ["901–1,200", "$129", "$145", "$159"],
              ["1,201–1,500", "$139", "$149", "$169"],
              ["1,501–1,800", "$145", "$159", "$179"],
              ["1,801–2,100", "$149", "$159", "$179"],
              ["2,101–2,300", "$149", "$165", "$185"],
              ["2,301–2,600", "$159", "$175", "$195"],
              ["2,601–2,900", "$179", "$195", "$215"],
              ["2,901–3,500", "$189", "$205", "$225"],
              ["3,501–4,100", "$205", "$225", "$245"],
              ["4,101–4,700", "$239", "$259", "$279"],
              ["4,701–5,300", "$255", "$289", "$309"],
              ["5,301–6,000", "$295", "$325", "$355"],
            ].map(([size, weekly, biweekly, monthly], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-3 py-2 font-medium whitespace-nowrap">{size}</td>
                <td className="px-3 py-2 text-right">{weekly}</td>
                <td className="px-3 py-2 text-right font-semibold text-primary">{biweekly}</td>
                <td className="px-3 py-2 text-right">{monthly}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">Per-visit, flat-rate. Excludes Texas sales tax (8.25%). Bi-weekly highlighted as the most popular plan. Homes over 6,000 sq ft are quoted individually.</p>
      </div>

      <h2>How Frequency Changes Your Cost</h2>
      <p>
        The per-visit price drops as frequency rises, but your <em>total</em> monthly spend depends on how many visits you book. For a 2,200 sq ft Houston home:
      </p>
      <ul>
        <li><strong>Weekly</strong> — $149/visit × ~4.3 visits = <strong>~$641/month</strong>. Best for families with kids, pets, or heavy foot traffic.</li>
        <li><strong>Bi-weekly</strong> — $165/visit × ~2.2 visits = <strong>~$358/month</strong>. The Houston sweet spot: prevents buildup, controls cost.</li>
        <li><strong>Monthly</strong> — $185/visit × 1 = <strong>$185/month</strong>. Lowest monthly cost; visits run longer due to more accumulated cleaning.</li>
      </ul>
      <p>
        Bi-weekly is the most popular plan in Houston because the Gulf-coast humidity and pollen load mean dust and bathroom grime return quickly — two weeks is about the point where a home starts to look like it needs attention again.
      </p>

      <div className="not-prose bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="text-xl font-semibold mb-3">Want Your Exact Recurring Price?</h3>
        <p className="mb-4 text-gray-700">
          Get a flat-rate quote based on your home's square footage and the frequency that fits your household.
        </p>
        <RequestQuoteButton />
      </div>

      <h2>Recurring vs. One-Time: Does It Actually Save Money?</h2>
      <p>
        Yes — per visit, significantly. A one-time single clean for a 2,200 sq ft home is $279. The same home on a bi-weekly plan is $165 per visit — about <strong>41% less</strong> — while staying consistently cleaner. If you find yourself booking one-time cleans every few weeks anyway, switching to a recurring plan lowers the rate and locks in the same team each visit. See the full breakdown in our <a href="/resources/house-cleaning-cost-houston">Houston house cleaning cost guide</a>, or compare cadences in <a href="/resources/how-often-house-cleaning-houston">how often to schedule cleaning</a>.
      </p>

      <h2>Frequently Asked Questions</h2>
      {faqs.map((f, i) => (
        <details key={i} className="border rounded-lg p-4 my-3">
          <summary className="font-semibold cursor-pointer">{f.question}</summary>
          <p className="mt-2 text-gray-700">{f.answer}</p>
        </details>
      ))}

      <div className="not-prose bg-primary text-white p-8 rounded-lg my-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Start a Recurring Plan</h3>
        <p className="mb-6 text-lg">
          The same trusted team, every visit. Get your flat-rate recurring quote in minutes.
        </p>
        <RequestQuoteButton className="bg-white text-primary hover:bg-gray-100" />
      </div>
    </ResourceArticleTemplate>
  );
}
