export interface ResourceArticle {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  category: "pricing" | "guide" | "tips";
  readTime: number;
  featured?: boolean;
}

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "house-cleaning-cost-houston",
    title: "How Much Does House Cleaning Cost in Houston?",
    description: "Exact flat-rate pricing for house cleaning in Houston by home size and service type — recurring, deep clean, move-in/out. Prices start at $109/visit.",
    publishDate: "2026-04-23",
    category: "pricing",
    readTime: 5,
    featured: true,
  },
  {
    slug: "how-often-house-cleaning-houston",
    title: "How Often Should You Schedule House Cleaning in Houston?",
    description: "Weekly, biweekly, or monthly? Learn which cleaning frequency fits your Houston household, lifestyle, and budget — with Houston-specific factors explained.",
    publishDate: "2026-04-23",
    category: "guide",
    readTime: 4,
  },
  {
    slug: "deep-cleaning-houston",
    title: "Deep Cleaning Services in Houston: What to Expect and What It Costs",
    description: "Deep cleaning in Houston starts at $345 for homes under 1,000 sq ft. Learn what's included, how it differs from standard cleaning, and when you need it.",
    publishDate: "2026-04-23",
    category: "guide",
    readTime: 4,
  },
  {
    slug: "move-in-move-out-cleaning-houston",
    title: "Move-In and Move-Out Cleaning in Houston: Cost, Checklist & What to Expect",
    description: "Move-in and move-out cleaning in Houston starts at $345. Full pricing by home size, complete scope checklist, and scheduling tips for a smooth transition.",
    publishDate: "2026-04-23",
    category: "guide",
    readTime: 5,
  },
  {
    slug: "what-is-included-house-cleaning",
    title: "What's Included in a House Cleaning? A Room-by-Room Breakdown",
    description: "A complete breakdown of what professional house cleaners do in standard vs deep cleaning — kitchen, bathrooms, bedrooms, and what's not included.",
    publishDate: "2026-04-23",
    category: "tips",
    readTime: 4,
  },
  {
    slug: "post-construction-cleaning-houston",
    title: "Post-Construction Cleaning in Houston: What It Is and When You Need It",
    description: "Post-construction cleaning removes drywall dust, construction debris, and residue from new builds and renovations in Houston, Katy, Sugar Land, and The Woodlands.",
    publishDate: "2026-04-23",
    category: "guide",
    readTime: 4,
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
