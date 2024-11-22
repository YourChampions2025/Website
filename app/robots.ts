import type { MetadataRoute } from "next";
import { BASE_URL } from "../utils/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
