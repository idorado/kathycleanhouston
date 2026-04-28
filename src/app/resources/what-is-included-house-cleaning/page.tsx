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

// Cell helpers
const Inc = () => (
  <td className="border border-gray-300 px-3 py-2 text-center text-green-600 font-bold">✓</td>
);
const Not = () => (
  <td className="border border-gray-300 px-3 py-2 text-center text-gray-400">—</td>
);
const Bas = () => (
  <td className="border border-gray-300 px-3 py-2 text-center">
    <span className="text-amber-600 text-xs font-semibold whitespace-nowrap">◑ Basic</span>
  </td>
);
const Int = () => (
  <td className="border border-gray-300 px-3 py-2 text-center">
    <span className="text-blue-700 text-xs font-semibold whitespace-nowrap">● Intensive</span>
  </td>
);
const Txt = ({ children }: { children: React.ReactNode }) => (
  <td className="border border-gray-300 px-3 py-2 text-center text-xs text-amber-700 font-semibold whitespace-nowrap">
    {children}
  </td>
);
const Feat = ({ children }: { children: React.ReactNode }) => (
  <td className="border border-gray-300 px-3 py-2 text-gray-800">{children}</td>
);
const Cat = ({ label }: { label: string }) => (
  <tr style={{ backgroundColor: "#dce6f0" }}>
    <td
      colSpan={6}
      className="border border-gray-400 px-3 py-1.5 font-bold text-xs uppercase tracking-wide text-blue-900"
    >
      {label}
    </td>
  </tr>
);

export default function WhatIsIncludedHouseCleaningArticle() {
  return (
    <ResourceArticleTemplate
      schema={{
        headline: articleTitle,
        description: articleDescription,
        path: articlePath,
        datePublished: "2026-04-23",
        dateModified: "2026-04-27",
      }}
    >
      <h1>What&#39;s Included in a House Cleaning? A Room-by-Room Breakdown</h1>

      <p>
        Knowing exactly what&#39;s included in a house cleaning helps you set the right expectations, get an accurate quote, and decide which service type fits your needs. Standard cleaning and deep cleaning have meaningfully different scopes — here&#39;s a complete breakdown of what Kathy Clean Houston covers in each, room by room.
      </p>

      <h2>Full Service Comparison</h2>

      <p>
        Use this table to compare what&#39;s included across all five service types at a glance.
      </p>

      <div className="not-prose overflow-x-auto my-6">
        <div className="flex flex-wrap gap-x-5 gap-y-1 mb-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span className="text-green-600 font-bold">✓</span> Included
          </span>
          <span className="flex items-center gap-1">
            <span className="text-amber-600 font-semibold">◑</span> Basic
          </span>
          <span className="flex items-center gap-1">
            <span className="text-blue-700 font-semibold">●</span> Intensive
          </span>
          <span className="flex items-center gap-1">
            <span className="text-gray-400">—</span> Not included
          </span>
        </div>

        <table className="w-full border-collapse text-sm min-w-[640px]">
          <thead>
            <tr style={{ backgroundColor: "#1e3a5f" }}>
              <th className="border border-gray-500 px-3 py-2 text-left text-white font-semibold">
                Feature
              </th>
              <th className="border border-gray-500 px-3 py-2 text-center text-white font-semibold">
                Recurring
              </th>
              <th className="border border-gray-500 px-3 py-2 text-center text-white font-semibold">
                One-Time
              </th>
              <th className="border border-gray-500 px-3 py-2 text-center text-white font-semibold">
                Deep Clean
              </th>
              <th className="border border-gray-500 px-3 py-2 text-center text-white font-semibold">
                Move-In
              </th>
              <th className="border border-gray-500 px-3 py-2 text-center text-white font-semibold">
                Move-Out
              </th>
            </tr>
          </thead>
          <tbody>
            <Cat label="General Cleaning" />
            <tr>
              <Feat>Full dusting of main surfaces</Feat>
              <Inc /><Inc /><Inc /><Inc /><Inc />
            </tr>
            <tr className="bg-gray-50">
              <Feat>Baseboards</Feat>
              <Bas /><Not /><Int /><Inc /><Inc />
            </tr>
            <tr>
              <Feat>Ceiling fans</Feat>
              <Bas /><Not /><Int /><Inc /><Inc />
            </tr>
            <tr className="bg-gray-50">
              <Feat>Blinds</Feat>
              <Bas /><Not /><Int /><Inc /><Inc />
            </tr>
            <tr>
              <Feat>Vents</Feat>
              <Not /><Not /><Not /><Inc /><Inc />
            </tr>
            <tr className="bg-gray-50">
              <Feat>Crown molding &amp; light fixtures</Feat>
              <Not /><Not /><Int /><Not /><Not />
            </tr>
            <tr>
              <Feat>Door frames &amp; handles</Feat>
              <Not /><Inc /><Inc /><Inc /><Inc />
            </tr>
            <tr className="bg-gray-50">
              <Feat>Light switches</Feat>
              <Not /><Inc /><Inc /><Inc /><Inc />
            </tr>
            <tr>
              <Feat>Trash removal &amp; bin wipe</Feat>
              <Inc /><Inc /><Not /><Not /><Not />
            </tr>

            <Cat label="Kitchen" />
            <tr>
              <Feat>Countertops &amp; sink</Feat>
              <Inc /><Inc /><Inc /><Inc /><Inc />
            </tr>
            <tr className="bg-gray-50">
              <Feat>Backsplash</Feat>
              <Bas /><Not /><Int /><Not /><Inc />
            </tr>
            <tr>
              <Feat>Appliance exteriors</Feat>
              <Inc /><Inc /><Inc /><Inc /><Inc />
            </tr>
            <tr className="bg-gray-50">
              <Feat>Cabinet fronts</Feat>
              <Bas /><Inc /><Not /><Inc /><Inc />
            </tr>
            <tr>
              <Feat>Stainless steel polish</Feat>
              <Not /><Not /><Int /><Not /><Inc />
            </tr>
            <tr className="bg-gray-50">
              <Feat>Inside oven</Feat>
              <Not /><Not /><Int /><Inc /><Inc />
            </tr>
            <tr>
              <Feat>Inside refrigerator</Feat>
              <Not /><Not /><Int /><Inc /><Inc />
            </tr>
            <tr className="bg-gray-50">
              <Feat>Microwave</Feat>
              <Not /><Inc /><Not /><Not /><Not />
            </tr>

            <Cat label="Bathrooms" />
            <tr>
              <Feat>Toilets, showers, tubs &amp; sinks</Feat>
              <Inc /><Inc /><Inc /><Inc /><Inc />
            </tr>
            <tr className="bg-gray-50">
              <Feat>Fixtures &amp; mirrors</Feat>
              <Inc /><Inc /><Int /><Inc /><Inc />
            </tr>
            <tr>
              <Feat>Grout lines &amp; tile scrubbing</Feat>
              <Bas /><Not /><Int /><Not /><Int />
            </tr>

            <Cat label="Floors" />
            <tr>
              <Feat>Vacuuming</Feat>
              <Inc /><Inc /><Inc /><Inc /><Inc />
            </tr>
            <tr className="bg-gray-50">
              <Feat>Mopping</Feat>
              <Inc /><Inc /><Inc /><Inc /><Inc />
            </tr>
            <tr>
              <Feat>Corners &amp; edges focus</Feat>
              <Not /><Not /><Int /><Inc /><Inc />
            </tr>
            <tr className="bg-gray-50">
              <Feat>Under appliances</Feat>
              <Not /><Not /><Not /><Not /><Inc />
            </tr>
            <tr>
              <Feat>Fabric furniture vacuuming</Feat>
              <Not /><Inc /><Not /><Not /><Not />
            </tr>

            <Cat label="Extras" />
            <tr>
              <Feat>Bed-making</Feat>
              <Txt>Up to 3 beds</Txt>
              <Txt>Up to 2 beds</Txt>
              <Not /><Not /><Not />
            </tr>
            <tr className="bg-gray-50">
              <Feat>Dining table &amp; chairs</Feat>
              <Inc /><Inc /><Not /><Not /><Not />
            </tr>
            <tr>
              <Feat>Patio door (interior)</Feat>
              <Not /><Inc /><Not /><Not /><Not />
            </tr>
            <tr className="bg-gray-50">
              <Feat>Same technician every visit</Feat>
              <Inc /><Not /><Not /><Not /><Not />
            </tr>
          </tbody>
        </table>
      </div>


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
