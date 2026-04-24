import type { Metadata } from "next";
import { canonicalPath } from "@/lib/canonical";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";
import ResourceArticleTemplate from "@/components/resources/ResourceArticleTemplate";

const articlePath = canonicalPath("resources/what-is-included-house-cleaning");
const articleTitle = "What's Included in a House Cleaning? A Room-by-Room Breakdown";
const articleDescription =
  "Find out exactly what professional house cleaners do in Houston. A complete room-by-room breakdown of standard cleaning, deep cleaning, and what's not included.";

export const metadata: Metadata = {
  title: "What's Included in a House Cleaning? A Room-by-Room Breakdown",
  description: articleDescription,
  alternates: {
    canonical: articlePath,
  },
  openGraph: {
    title: "What's Included in a House Cleaning? A Room-by-Room Breakdown",
    description: articleDescription,
    url: `https://kathycleanhouston.com${articlePath}`,
    siteName: "Kathy Clean Houston",
    locale: "en_US",
    type: "article",
  },
};

export default function WhatIsIncludedHouseCleaningArticle() {
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
      <h1>What&#39;s Included in a House Cleaning? A Room-by-Room Breakdown</h1>

      <p>
        Knowing exactly what&#39;s included in a house cleaning helps you set the right expectations, get an accurate quote, and decide which service type fits your needs. Standard cleaning and deep cleaning have meaningfully different scopes — here&#39;s a complete breakdown of what Kathy Clean Houston covers in each, room by room.
      </p>

      <h2>Standard Cleaning vs Deep Cleaning at a Glance</h2>

      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Area</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Standard</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Deep Clean</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Kitchen counters</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Stovetop</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Appliances (exterior)</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Sink</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Floors (vacuum &amp; mop)</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Bathrooms (full)</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Toilet</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Shower / tub</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Mirrors</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Inside oven</td>
              <td className="border border-gray-300 px-4 py-2 text-center">—</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Inside fridge</td>
              <td className="border border-gray-300 px-4 py-2 text-center">—</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Cabinets (inside)</td>
              <td className="border border-gray-300 px-4 py-2 text-center">—</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Baseboards</td>
              <td className="border border-gray-300 px-4 py-2 text-center">—</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Window sills</td>
              <td className="border border-gray-300 px-4 py-2 text-center">—</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Ceiling fans / light fixtures</td>
              <td className="border border-gray-300 px-4 py-2 text-center">—</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Grout scrubbing</td>
              <td className="border border-gray-300 px-4 py-2 text-center">—</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Behind / under appliances</td>
              <td className="border border-gray-300 px-4 py-2 text-center">—</td>
              <td className="border border-gray-300 px-4 py-2 text-center">✓</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Kitchen</h2>

      <p>
        The kitchen is typically the most time-intensive room in any cleaning visit.
      </p>

      <p><strong>Standard clean includes:</strong></p>
      <ul>
        <li>Countertops wiped and sanitized</li>
        <li>Stovetop cleaned (burners, grates, surface)</li>
        <li>Appliance exteriors (microwave outside, refrigerator outside, dishwasher front)</li>
        <li>Sink scrubbed and polished</li>
        <li>Cabinet fronts wiped down</li>
        <li>Floor vacuumed and mopped</li>
      </ul>

      <p><strong>Deep clean adds:</strong></p>
      <ul>
        <li>Inside oven — racks pulled, walls scrubbed, door glass cleaned</li>
        <li>Inside refrigerator — shelves and drawers removed and cleaned, door panels wiped</li>
        <li>Inside all cabinets and drawers</li>
        <li>Hood vent (filter and exterior)</li>
        <li>Behind and under appliances</li>
      </ul>

      <h2>Bathrooms</h2>

      <p>
        Bathrooms receive full attention on every visit, regardless of service type.
      </p>

      <p><strong>Standard clean includes:</strong></p>
      <ul>
        <li>Toilet — bowl scrubbed, seat cleaned, exterior wiped, base cleaned</li>
        <li>Shower and tub scrubbed</li>
        <li>Mirrors cleaned streak-free</li>
        <li>Sink and faucet cleaned and polished</li>
        <li>Countertops wiped</li>
        <li>Floor vacuumed and mopped</li>
      </ul>

      <p><strong>Deep clean adds:</strong></p>
      <ul>
        <li>Tile grout scrubbing in shower, tub surround, and floor tiles</li>
        <li>Behind the toilet</li>
        <li>Inside vanity cabinets and drawers</li>
        <li>Chrome fixtures polished</li>
      </ul>

      <h2>Bedrooms</h2>

      <p><strong>Standard clean includes:</strong></p>
      <ul>
        <li>All surfaces dusted (nightstands, dressers, shelves)</li>
        <li>Floors vacuumed and mopped or swept</li>
        <li>Mirrors cleaned</li>
        <li>Light fixtures dusted</li>
        <li>High-touch areas (door handles, light switches) wiped</li>
      </ul>

      <p><strong>Deep clean adds:</strong></p>
      <ul>
        <li>Ceiling fans (blades and housing wiped down)</li>
        <li>Baseboards cleaned</li>
        <li>Window sills wiped</li>
        <li>Blinds wiped (horizontal slats)</li>
      </ul>

      <h2>Living Areas &amp; Common Spaces</h2>

      <p><strong>Standard clean includes:</strong></p>
      <ul>
        <li>All surfaces dusted (tables, shelves, entertainment centers)</li>
        <li>Floors vacuumed and mopped</li>
        <li>Mirrors and glass surfaces cleaned</li>
        <li>Light switches and outlets wiped</li>
      </ul>

      <p><strong>Deep clean adds:</strong></p>
      <ul>
        <li>Ceiling fans cleaned</li>
        <li>Baseboards throughout</li>
        <li>Window sills wiped</li>
        <li>Blinds wiped</li>
      </ul>

      <h2>What&#39;s NOT Included in Standard Cleaning</h2>

      <p>
        The following are outside the standard scope for both recurring and one-time standard cleanings:
      </p>

      <ul>
        <li><strong>Exterior windows</strong> — interior windows can be added on request</li>
        <li><strong>Laundry</strong> — washing, drying, or folding</li>
        <li><strong>Dishes</strong> — washing dishes in the sink</li>
        <li><strong>Organizing or decluttering</strong> — we clean surfaces, not sort belongings</li>
        <li><strong>Garage cleaning</strong></li>
        <li><strong>Biohazard or mold remediation</strong></li>
        <li><strong>Moving heavy furniture</strong> — items over 35 lbs are not moved; we clean around them</li>
      </ul>

      <p>
        Many of these can be added as extras at a flat rate when booking. If you have specific needs, mention them when requesting a quote.
      </p>

      <h2>How to Add Extras</h2>

      <p>
        When requesting a quote, mention any extras you&#39;d like included — common add-ons are:
      </p>

      <ul>
        <li>Inside oven (if not booking a deep clean)</li>
        <li>Inside refrigerator (if not booking a deep clean)</li>
        <li>Interior windows</li>
        <li>Laundry (wash and dry a load)</li>
      </ul>

      <p>
        Each add-on is priced at a flat rate and quoted upfront — no surprises at the end of the visit.
      </p>

      <div className="my-8">
        <RequestQuoteButton />
      </div>

      <h2>Frequently Asked Questions</h2>

      <details>
        <summary><strong>Do you bring cleaning supplies and equipment?</strong></summary>
        <p>
          Yes. All supplies, equipment, and cleaning products are included in the price. You don&#39;t need to provide anything.
        </p>
      </details>

      <details>
        <summary><strong>What if I prefer specific products — fragrance-free, pet-safe, or green?</strong></summary>
        <p>
          Mention it when booking and we&#39;ll accommodate. We can use fragrance-free or pet-safe products on request.
        </p>
      </details>

      <details>
        <summary><strong>Is laundry included?</strong></summary>
        <p>
          Not in the standard scope. Laundry (washing and drying one load) can be added as an extra when booking. Folding is not included.
        </p>
      </details>

      <details>
        <summary><strong>Do you clean inside the oven and refrigerator on standard visits?</strong></summary>
        <p>
          No — inside oven and inside fridge are part of the deep clean and move-in/move-out scope only. They can be added as extras to a standard visit if requested in advance.
        </p>
      </details>

      <div className="my-8">
        <RequestQuoteButton />
      </div>
    </ResourceArticleTemplate>
  );
}
