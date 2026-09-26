import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/biography",
    "/political-journey",
    "/elections",
    "/2019-azamgarh-lok-sabha",
    "/news",
    "/sources",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteMeta.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/news" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
