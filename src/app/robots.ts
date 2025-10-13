import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/*?utm_*",
          "/api/",
          "/admin/",
        ],
      },
    ],
    sitemap: "https://kathyclean.com/sitemap.xml",
  };
}
