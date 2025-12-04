import type { MetadataRoute } from "next";

const baseUrl = "https://luchoscleaning.com";

const staticRoutes: string[] = [
  "/",
  "/about-us",
  "/request-quote",
  "/service-areas",
  "/service-areas/harris-county-tx",
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
      route === "/service-areas/harris-county-tx" ||
      route === "/request-quote"
    ) {
      priority = 0.9;
    }

    return {
      url: baseUrl + route,
      lastModified,
      changeFrequency: "monthly",
      priority,
    };
  });
}
