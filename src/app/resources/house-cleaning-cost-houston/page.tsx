import type { Metadata } from "next";
import { canonicalPath } from "@/lib/canonical";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import ResourceArticleTemplate from "@/components/resources/ResourceArticleTemplate";

const articlePath = canonicalPath("resources/house-cleaning-cost-houston");
const articleTitle = "How Much Does House Cleaning Cost in Houston?";
const articleDescription =
  "Exact flat-rate pricing for house cleaning in Houston by home size and service type — recurring, deep clean, move-in/out. Prices start at $109/visit.";

export const metadata: Metadata = {
  title: "How Much Does House Cleaning Cost in Houston? Pricing Guide 2026",
  description: articleDescription,
  alternates: {
    canonical: articlePath,
  },
  openGraph: {
    title: "How Much Does House Cleaning Cost in Houston? Pricing Guide 2026",
    description: articleDescription,
    url: "https://kathycleanhouston.com/resources/house-cleaning-cost-houston",
  },
};

export default function HouseCleaningCostHoustonArticle() {
  return (
    <ResourceArticleTemplate
      schema={{
        headline: articleTitle,
        description: articleDescription,
        path: articlePath,
        datePublished: "2026-04-23",
        dateModified: "2026-04-23",
      }}
    >
      <h1>How Much Does House Cleaning Cost in Houston?</h1>

      <p>
        House cleaning in Houston starts at <strong>$109 per weekly visit</strong> for homes under 1,000 sq ft and goes up to <strong>$325/week</strong> for homes over 6,000 sq ft. One-time and deep cleans run higher. All prices below are flat-rate and <strong>do not include Texas sales tax (8.25%)</strong>.
      </p>

      <h2>Full Pricing Table: All Service Types by Home Size</h2>

      <p>
        Kathy Clean Houston uses flat-rate pricing based on your home's square footage. You know the exact cost before the team arrives — no hourly surprises.
      </p>

      <div className="not-prose overflow-x-auto my-6">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">Home Sq Ft</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Move Out</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Move In</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Deep Clean</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Single Clean</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Monthly</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Bi-Weekly</th>
              <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Weekly</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0–999", "$345", "$345", "$345", "$225", "$149", "$119", "$109"],
              ["1,000–1,500", "$369", "$369", "$369", "$259", "$159", "$129", "$119"],
              ["1,500–2,000", "$415", "$415", "$415", "$285", "$179", "$145", "$129"],
              ["2,000–2,500", "$459", "$459", "$459", "$299", "$199", "$165", "$145"],
              ["2,500–3,000", "$525", "$525", "$525", "$329", "$229", "$185", "$169"],
              ["3,000–3,500", "$579", "$579", "$545", "$359", "$249", "$205", "$185"],
              ["3,500–4,000", "$625", "$625", "$625", "$415", "$269", "$229", "$205"],
              ["4,000–4,500", "$665", "$665", "$665", "$449", "$289", "$249", "$225"],
              ["4,500–5,000", "$715", "$715", "$715", "$495", "$309", "$279", "$245"],
              ["5,000–5,500", "$789", "$789", "$742", "$539", "$339", "$309", "$269"],
              ["5,500–6,000", "$835", "$835", "$786", "$585", "$359", "$339", "$295"],
              ["6,000+", "$945", "$885", "$945", "$629", "$379", "$375", "$325"],
            ].map(([size, moveOut, moveIn, deep, single, monthly, biweekly, weekly], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-3 py-2 font-medium whitespace-nowrap">{size}</td>
                <td className="px-3 py-2 text-right">{moveOut}</td>
                <td className="px-3 py-2 text-right">{moveIn}</td>
                <td className="px-3 py-2 text-right">{deep}</td>
                <td className="px-3 py-2 text-right">{single}</td>
                <td className="px-3 py-2 text-right">{monthly}</td>
                <td className="px-3 py-2 text-right font-semibold text-primary">{biweekly}</td>
                <td className="px-3 py-2 text-right">{weekly}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">Prices do not include Texas sales tax (8.25%). Bi-weekly highlighted as most popular option.</p>
      </div>

      <div className="not-prose bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="text-xl font-semibold mb-3">Want Your Exact Price?</h3>
        <p className="mb-4 text-gray-700">
          Get a personalized flat-rate quote based on your home's square footage, number of bathrooms, and cleaning needs.
        </p>
        <RequestQuoteButton />
      </div>

      <h2>Understanding Each Service Type</h2>

      <h3>Recurring Cleaning (Weekly, Bi-Weekly, Monthly)</h3>
      <p>
        Recurring cleaning is priced lower per visit because the home maintains better condition between visits — less buildup means less time and effort each visit. <strong>Bi-weekly (every two weeks) is the most popular choice</strong> among Houston homeowners, balancing cost efficiency with consistent cleanliness.
      </p>
      <ul>
        <li><strong>Weekly:</strong> Best for families with young children, pet owners, or homes with high foot traffic. Lowest per-visit cost.</li>
        <li><strong>Bi-weekly:</strong> Right for most Houston households. Prevents visible buildup while managing costs.</li>
        <li><strong>Monthly:</strong> Works for single occupants or smaller homes with careful daily maintenance. Visits run longer due to more accumulated cleaning.</li>
      </ul>

      <h3>Single Clean (One-Time)</h3>
      <p>
        A one-time clean at the standard recurring scope — without committing to a recurring plan. Priced between recurring and deep cleaning rates.
      </p>

      <h3>Deep Cleaning</h3>
      <p>
        A deep clean extends the standard scope to include inside the oven, inside the fridge, inside cabinets, baseboards, window sills, ceiling fans, light fixtures, and grout scrubbing. Recommended for first-time clients before starting a recurring plan, after a long gap in professional cleaning, or as a seasonal reset. <a href="/resources/deep-cleaning-houston">Learn more about deep cleaning →</a>
      </p>

      <h3>Move-In and Move-Out Cleaning</h3>
      <p>
        Both involve cleaning an empty home top-to-bottom — every surface, inside every cabinet and appliance, all fixtures. Move-out focuses on returning a property to original condition for inspection. Move-in ensures the home is genuinely clean before your belongings arrive. <a href="/resources/move-in-move-out-cleaning-houston">See full move-in/out guide →</a>
      </p>

      <h2>What Affects Your Final Price?</h2>

      <ul>
        <li><strong>Square footage</strong> — The primary pricing driver. Measure your livable space, not lot size.</li>
        <li><strong>Number of bathrooms</strong> — Additional bathrooms beyond what's standard for your sq ft may affect the quote.</li>
        <li><strong>Current condition</strong> — Homes not recently cleaned professionally take longer on the first visit.</li>
        <li><strong>Pets</strong> — Pet hair on upholstery, vents, and baseboards adds cleaning time.</li>
        <li><strong>Add-ons</strong> — Inside oven, inside fridge, interior windows, or laundry are quoted separately from the standard scope.</li>
        <li><strong>Sales tax</strong> — Texas sales tax of 8.25% applies to all cleaning services and is not included in the prices above.</li>
      </ul>

      <h2>Does Recurring Service Save Money?</h2>

      <p>
        Yes — significantly. For a 2,000–2,500 sq ft Houston home:
      </p>
      <ul>
        <li>Single clean: <strong>$299</strong> per visit</li>
        <li>Monthly recurring: <strong>$199</strong> per visit (33% less)</li>
        <li>Bi-weekly recurring: <strong>$165</strong> per visit (45% less)</li>
        <li>Weekly recurring: <strong>$145</strong> per visit (52% less)</li>
      </ul>
      <p>
        Switching from periodic one-time cleans to a bi-weekly plan typically cuts cost per visit nearly in half while keeping the home in consistently better condition.
      </p>

      <h2>Frequently Asked Questions</h2>

      <details className="border rounded-lg p-4 my-3">
        <summary className="font-semibold cursor-pointer">Is pricing flat-rate or hourly?</summary>
        <p className="mt-2 text-gray-700">Flat-rate. You receive a fixed price before the team arrives based on your home's square footage. The price doesn't change based on how long the clean takes.</p>
      </details>

      <details className="border rounded-lg p-4 my-3">
        <summary className="font-semibold cursor-pointer">How much does it cost to clean an apartment in Houston?</summary>
        <p className="mt-2 text-gray-700">Apartments are priced the same way as houses — by square footage. A 900 sq ft apartment bi-weekly runs $119; a 1,200 sq ft apartment runs $129 bi-weekly. Prices exclude 8.25% sales tax.</p>
      </details>

      <details className="border rounded-lg p-4 my-3">
        <summary className="font-semibold cursor-pointer">Do prices vary by neighborhood in Houston?</summary>
        <p className="mt-2 text-gray-700">No — pricing is based on square footage regardless of neighborhood. Whether you're in the Heights, Memorial, Sugar Land, or The Woodlands, the same flat-rate applies to the same home size.</p>
      </details>

      <details className="border rounded-lg p-4 my-3">
        <summary className="font-semibold cursor-pointer">What's included in the standard price?</summary>
        <p className="mt-2 text-gray-700">Kitchen cleaning (counters, stovetop, appliance exteriors, sink), full bathroom cleaning, vacuuming and mopping all floors, dusting surfaces and fixtures, and cleaning mirrors and high-touch areas. <a href="/resources/what-is-included-house-cleaning">See full room-by-room breakdown →</a></p>
      </details>

      <details className="border rounded-lg p-4 my-3">
        <summary className="font-semibold cursor-pointer">Do you require a contract for recurring service?</summary>
        <p className="mt-2 text-gray-700">No long-term contract is required. Recurring plans can be paused or adjusted. If you cancel after only one cleaning from a recurring plan, the one-time rate applies to that visit.</p>
      </details>

      <div className="not-prose bg-primary text-white p-8 rounded-lg my-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Get Your Exact Quote</h3>
        <p className="mb-6 text-lg">
          Know your home's square footage? Get a flat-rate quote in minutes.
        </p>
        <RequestQuoteButton className="bg-white text-primary hover:bg-gray-100" />
      </div>
    </ResourceArticleTemplate>
  );
}
