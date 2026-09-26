import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/data/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteMeta.baseUrl}/sitemap.xml`,
  };
}
