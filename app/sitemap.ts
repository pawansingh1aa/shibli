import type { MetadataRoute } from "next";

const BASE = "https://jashwantshiblisingh.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${BASE}/`,                            lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/biography`,                   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/elections`,                   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/party-activities`,            lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/political-journey`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/2019-azamgarh-lok-sabha`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/sources`,                     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/about`,                       lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`,                     lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
