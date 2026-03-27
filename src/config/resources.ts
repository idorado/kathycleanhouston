export interface ResourceArticle {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  category: "pricing" | "guide" | "tips";
}

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "house-cleaning-cost-houston",
    title: "How Much Does House Cleaning Cost in Houston? Flat-Rate Pricing Guide",
    description: "Learn how house cleaning pricing works in Houston. Understand what affects cost including home size, bathrooms, condition, and frequency of recurring cleaning.",
    publishDate: "2024-03-26",
    category: "pricing",
  },
  {
    slug: "how-often-house-cleaning-houston",
    title: "How Often Should You Schedule House Cleaning in Houston?",
    description: "Find out how often you should clean your home in Houston. Learn the best schedule for recurring cleaning based on home size, lifestyle, and family needs.",
    publishDate: "2024-03-26",
    category: "guide",
  },
];

export function getResourceArticle(slug: string): ResourceArticle | undefined {
  return resourceArticles.find(article => article.slug === slug);
}

export function getResourceArticlesByCategory(category: ResourceArticle["category"]): ResourceArticle[] {
  return resourceArticles.filter(article => article.category === category);
}

export function getAllResourceArticles(): ResourceArticle[] {
  return resourceArticles;
}
