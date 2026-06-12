import { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "@/components/json-ld";

const SITE_URL = "https://kathycleanhouston.com";

interface ResourceSchemaProps {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}

interface ResourceArticleTemplateProps {
  children: ReactNode;
  schema: ResourceSchemaProps;
}

export default function ResourceArticleTemplate({ children, schema }: ResourceArticleTemplateProps) {
  const url = `${SITE_URL}${schema.path}`;
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        "headline": schema.headline,
        "description": schema.description,
        "url": url,
        "datePublished": schema.datePublished,
        "dateModified": schema.dateModified,
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", "p:first-of-type"]
        },
        "author": {
          "@type": "Organization",
          "@id": `${SITE_URL}/#business`,
          "name": "Kathy Clean Houston"
        },
        "publisher": {
          "@type": "Organization",
          "@id": `${SITE_URL}/#business`,
          "name": "Kathy Clean Houston"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Resources",
            "item": `${SITE_URL}/resources`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": schema.headline,
            "item": url
          }
        ]
      }
    ]
  };

  const [y = 0, m = 1] = schema.dateModified.split("-").map(Number);
  const formattedDate = new Date(y, m - 1, 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <>
      <JsonLd data={schemaData} />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <p className="not-prose text-sm text-gray-500 mb-6">
            By <span className="font-medium text-gray-700">Kathy Clean Houston Team</span>
            {" · "}
            <time dateTime={schema.dateModified}>Updated {formattedDate}</time>
          </p>
          {children}
        </article>

        <nav className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold mb-4 text-gray-900">Explore Kathy Clean Houston</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {[
              { href: "/house-cleaning-houston", title: "House Cleaning in Houston" },
              { href: "/resources/house-cleaning-cost-houston", title: "House Cleaning Cost in Houston" },
              { href: "/resources/deep-cleaning-houston", title: "Deep Cleaning Guide" },
              { href: "/resources/move-in-move-out-cleaning-houston", title: "Move-In / Move-Out Cleaning" },
              { href: "/resources/how-often-house-cleaning-houston", title: "How Often to Schedule Cleaning" },
              { href: "/request-quote", title: "Get a Free Quote" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[var(--blue-ribbon)] underline underline-offset-2 hover:text-[var(--space-cadet)]"
                >
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </>
  );
}
