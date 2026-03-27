import { ReactNode } from "react";

interface ResourceArticleTemplateProps {
  children: ReactNode;
}

export default function ResourceArticleTemplate({ children }: ResourceArticleTemplateProps) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        {children}
      </article>
    </main>
  );
}
