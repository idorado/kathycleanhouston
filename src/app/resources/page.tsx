import type { Metadata } from "next";
import Link from "next/link";
import { canonicalPath } from "@/lib/canonical";
import { getAllResourceArticles } from "@/config/resources";
import RequestQuoteButton from "@/components/sections/RequestQuoteButton";

export const metadata: Metadata = {
  title: "House Cleaning Resources for Houston Homes",
  description:
    "Comprehensive guides about house cleaning costs, pricing, and services for Houston homeowners. Learn about recurring cleaning schedules and what affects cleaning prices.",
  alternates: {
    canonical: canonicalPath("resources"),
  },
};

export default function ResourcesPage() {
  const articles = getAllResourceArticles();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Intro Section */}
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">House Cleaning Guides for Houston Homes</h1>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          Houston homeowners use these comprehensive guides to understand house cleaning costs, determine the right cleaning frequency, and choose between different service types. Whether you're a busy professional in Memorial or a growing family in West University Place, these resources help you make informed decisions about maintaining your home.
        </p>
      </div>

      {/* Articles Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Cleaning Guides & Articles</h2>
        
        <div className="grid gap-8 max-w-2xl mx-auto">
          {articles.map((article) => (
            <div key={article.slug} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200 hover:border-primary/20">
              <h3 className="text-xl font-bold mb-4">
                <Link 
                  href={`/resources/${article.slug}`}
                  className="text-primary hover:text-primary/80 no-underline"
                >
                  {article.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {article.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">
                  Published {new Date(article.publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <Link 
                  href={`/resources/${article.slug}`}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">How Often Should You Clean Your Home?</h2>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            The ideal cleaning frequency depends on your household size, lifestyle, and personal standards. Most Houston homes benefit from biweekly cleaning, which maintains cleanliness while managing costs effectively. Weekly service works well for families with children, pets, or heavy foot traffic, while monthly cleaning might suit single professionals or smaller homes.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Understanding Houston Cleaning Pricing</h2>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            House cleaning costs in Houston typically range from $120-$400 per visit, with prices varying based on home size, number of bathrooms, and cleaning frequency. Flat-rate pricing provides better value than hourly billing because you know the exact cost upfront. Recurring cleaning services usually cost 15-25% less per visit than one-time cleanings.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Deep Cleaning vs Recurring Cleaning</h2>
          
          <p className="text-gray-600 leading-relaxed">
            Deep cleaning addresses accumulated dirt and grime that regular maintenance might miss, making it ideal for first-time cleanings or seasonal refreshes. Deep cleaning typically costs 30-50% more than standard cleaning but provides a thorough foundation for ongoing maintenance. Recurring cleaning focuses on maintaining your home's condition through regular visits.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white p-10 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Get Personalized Cleaning Advice</h3>
          <p className="mb-6 text-lg">
            Not sure which cleaning schedule or service type is right for your Houston home? Get a personalized consultation and quote based on your specific needs.
          </p>
          <RequestQuoteButton className="bg-white text-primary hover:bg-gray-100" />
        </div>
      </div>
    </main>
  );
}
