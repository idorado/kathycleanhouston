import type { MetadataRoute } from "next";
import { houstonServiceAreas } from "@/lib/service-areas/houstonLocations";
import { SERVICE_LOCATION_SLUGS } from "@/lib/location-seo";
import { getAllResourceArticles } from "@/config/resources";

const baseUrl = "https://kathycleanhouston.com";

const staticRoutes: string[] = [
  "/",
  "/about-us",
  "/request-quote",
  "/faq",
  "/service-areas",
  "/resources",
  // Derived from the resource registry so new articles are always included.
  ...getAllResourceArticles().map((a) => `/resources/${a.slug}`),
  ...houstonServiceAreas.map((area) => `/service-areas/${area.slug}`),
  // Programmatic service×location matrix (4 services × 20 Harris neighborhoods).
  ...SERVICE_LOCATION_SLUGS.map((slug) => `/${slug}`),
  "/house-cleaning-houston",
  "/commercial-cleaning-houston",
  "/our-services",
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
    } else if (route.startsWith("/resources")) {
      priority = 0.8;
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
