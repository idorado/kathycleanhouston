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
    description: "Exact flat-rate pricing for house cleaning in Houston by home size and service type — recurring, deep clean, move-in/out. Prices start at $129/visit.",
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
    description: "Deep cleaning in Houston starts at $285 for homes under 900 sq ft. Learn what's included, how it differs from standard cleaning, and when you need it.",
    publishDate: "2026-04-23",
    category: "guide",
    readTime: 4,
  },
  {
    slug: "move-in-move-out-cleaning-houston",
    title: "Move-In and Move-Out Cleaning in Houston: Cost, Checklist & What to Expect",
    description: "Move-in and move-out cleaning in Houston starts at $285. Full pricing by home size, complete scope checklist, and scheduling tips for a smooth transition.",
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
  {
    slug: "best-house-cleaning-service-houston",
    title: "Best House Cleaning Service in Houston: How to Choose (2026)",
    description: "How to choose the best house cleaning service in Houston — insurance, consistency, flat-rate pricing, reviews, and the questions to ask before you book.",
    publishDate: "2026-06-12",
    category: "guide",
    readTime: 6,
    featured: true,
  },
  {
    slug: "humidity-mold-cleaning-houston",
    title: "Houston Humidity, Mildew & Your Home: A Cleaning Guide",
    description: "How Houston's Gulf humidity drives bathroom and window mildew, what regular cleaning prevents, and when it becomes a job for a remediation specialist.",
    publishDate: "2026-06-12",
    category: "tips",
    readTime: 5,
  },
  {
    slug: "storm-move-out-cleaning-houston",
    title: "Move-Out & Turnover Cleaning in Houston After Storm Season",
    description: "Houston's storm season drives moves and turnovers. What move-out cleaning covers, what's a job for a restoration company, and how to plan around a move date.",
    publishDate: "2026-06-12",
    category: "guide",
    readTime: 5,
  },
  {
    slug: "hard-water-cleaning-houston",
    title: "Hard Water Spots in Houston Homes: How to Clean & Prevent Them",
    description: "Houston has notably hard water that leaves mineral spots on glass, fixtures, and tile. How to remove hard-water buildup and how regular cleaning keeps it from coming back.",
    publishDate: "2026-06-12",
    category: "tips",
    readTime: 4,
  },
  {
    slug: "allergy-pollen-cleaning-houston",
    title: "Cleaning for Houston Allergy & Pollen Season: A Practical Guide",
    description: "Houston's long pollen season and year-round dust load tracks allergens indoors. How cleaning reduces pollen, dust, and dander, and when a deep clean helps most.",
    publishDate: "2026-06-12",
    category: "tips",
    readTime: 5,
  },
  {
    slug: "move-out-cleaning-checklist-houston",
    title: "Move-Out Cleaning Checklist for Houston Renters (Deposit-Ready)",
    description: "A room-by-room move-out cleaning checklist for Houston rentals — exactly what landlords check for a full deposit return, plus what a pro service covers.",
    publishDate: "2026-06-12",
    category: "guide",
    readTime: 5,
  },
  {
    slug: "medical-office-cleaning-houston",
    title: "Medical Office Cleaning in Houston: What to Look For",
    description: "What professional medical and dental office cleaning covers in Houston — waiting rooms, exam rooms, restrooms, and floors — and how to choose a discreet, reliable service.",
    publishDate: "2026-06-12",
    category: "guide",
    readTime: 5,
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
