import type { Metadata } from "next";
import Link from "next/link";
import { canonicalPath } from "@/lib/canonical";
import { getAllResourceArticles } from "@/config/resources";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";

export const metadata: Metadata = {
  title: "House Cleaning Resources & Guides for Houston Homeowners",
  description:
    "Practical guides on house cleaning costs, service types, and scheduling for Houston homeowners. Includes real flat-rate pricing data.",
  alternates: {
    canonical: canonicalPath("resources"),
  },
  openGraph: {
    title: "House Cleaning Resources & Guides for Houston Homeowners",
    description:
      "Practical guides on house cleaning costs, service types, and scheduling for Houston homeowners. Includes real flat-rate pricing data.",
    url: "https://kathycleanhouston.com/resources",
  },
};

const categoryLabel: Record<string, string> = {
  pricing: "Pricing Guide",
  guide: "How-To Guide",
  tips: "Tips & Advice",
};

const categoryStyle: Record<string, string> = {
  pricing: "bg-emerald-100 text-emerald-700",
  guide: "bg-blue-100 text-blue-700",
  tips: "bg-amber-100 text-amber-700",
};

const categoryIcon: Record<string, string> = {
  pricing: "💲",
  guide: "📋",
  tips: "💡",
};

export default function ResourcesPage() {
  const all = getAllResourceArticles();
  const featured = all.find((a) => a.featured);
  const rest = all.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-accent py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Houston Cleaning Resources
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Cleaning Guides for{" "}
            <span className="text-primary">Houston Homeowners</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Practical answers on pricing, service types, and scheduling — based
            on real data from Houston homes.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-14">

        {/* Featured Article */}
        {featured && (
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Most Popular Guide
            </p>
            <Link
              href={`/resources/${featured.slug}`}
              className="group block bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left accent bar */}
                <div className="hidden md:block w-2 bg-primary shrink-0" />

                <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${categoryStyle[featured.category]}`}>
                        {categoryIcon[featured.category]} {categoryLabel[featured.category]}
                      </span>
                      <span className="text-gray-400 text-xs">{featured.readTime} min read</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-2xl">
                      {featured.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>
                        {new Date(featured.publishDate + "T12:00:00").toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded text-xs">
                        Includes full pricing table
                      </span>
                    </div>
                    <span className="text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform inline-block">
                      Read guide →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            All Guides
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-200 overflow-hidden"
              >
                {/* Top color stripe */}
                <div className={`h-1 w-full ${article.category === "pricing" ? "bg-emerald-400" : article.category === "tips" ? "bg-amber-400" : "bg-blue-400"}`} />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryStyle[article.category]}`}>
                      {categoryIcon[article.category]} {categoryLabel[article.category]}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{article.readTime} min read</span>
                    <span className="text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform inline-block">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-accent rounded-2xl p-10 text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Ready to book?
          </p>
          <h2 className="text-3xl font-bold text-white mb-3">
            Get a Flat-Rate Quote for Your Home
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Pricing is based on your home's square footage. Most Houston homes get a response within a few hours.
          </p>
          <RequestQuoteButton className="bg-primary text-accent hover:brightness-110 font-semibold px-8 py-3 text-base" />
        </div>
      </main>
    </>
  );
}
