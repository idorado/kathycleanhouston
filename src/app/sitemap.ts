import type { MetadataRoute } from "next";
import { houstonServiceAreas } from "@/lib/service-areas/houstonLocations";

const baseUrl = "https://kathycleanhouston.com";

const staticRoutes: string[] = [
  "/",
  "/about-us",
  "/request-quote",
  "/faq",
  "/work-with-us",
  "/service-areas",
  ...houstonServiceAreas.map((area) => `/service-areas/${area.slug}`),
  "/house-cleaning-houston",
  "/commercial-cleaning-houston",
  "/our-services",
  "/our-services/house-cleaning-and-maid-service-with-satisfaction-guarantee",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map((route) => {
    let priority = 0.7;
    if (route === "/") {
      priority = 1;
    } else if (
      route === "/house-cleaning-houston" ||
      route === "/commercial-cleaning-houston" ||
      route === "/service-areas" ||
      route === "/request-quote"
    ) {
      priority = 0.9;
    } else if (route.startsWith("/service-areas/")) {
      priority = 0.8;
    }

    return {
      url: baseUrl + route,
      lastModified,
      changeFrequency: "monthly",
      priority,
    };
  });
}
