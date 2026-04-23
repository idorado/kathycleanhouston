import { ReactNode } from "react";
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

  return (
    <>
      <JsonLd data={schemaData} />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          {children}
        </article>
      </main>
    </>
  );
}
