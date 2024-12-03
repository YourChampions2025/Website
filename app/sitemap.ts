import { MetadataRoute } from "next";
import { SITEMAP_LOCAL_SLUGS } from "./local-sitemap";
import { BASE_URL } from "../utils/constants";
import {
  getBlogsForSEO,
  getPracticeAreasForSEO,
  getLocationsForSEO,
  getCasesForSEO,
  getVideoForSEO,
  getProfilesForSEO,
  getSqueezesForSEO,
} from "../sanity/lib/api";

interface SEOItem {
  slug: string;
}

interface BlogItem extends SEOItem {
  year: string;
  month: string;
}

interface OtherSubArea extends SEOItem {}

interface OtherArea extends SEOItem {
  otherSubAreas?: OtherSubArea[];
}

interface Location extends SEOItem {
  otherAreas?: OtherArea[];
}

interface VideoItem extends SEOItem {
  category: string;
}

interface ProfileItem extends SEOItem {
  type: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Check generate-local-sitemap.js, or, run `pnpm generate-sitemap`
  const localSlugs: MetadataRoute.Sitemap = SITEMAP_LOCAL_SLUGS.map((slug) => ({
    url: `${BASE_URL}${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Fetch all dynamic slugs
  const [
    blogs,
    practiceAreas,
    locations,
    cases,
    videos,
    profiles,
    squeezes,
  ] = await Promise.all([
    getBlogsForSEO(),
    getPracticeAreasForSEO(),
    getLocationsForSEO(),
    getCasesForSEO(),
    getVideoForSEO(),
    getProfilesForSEO(),
    getSqueezesForSEO(),
  ]);

  // Process location-based URLs (including other areas and sub-areas)
  const locationUrls = locations.flatMap((location: Location) => {
    const baseUrl = `/${location.slug}`;
    const otherAreaUrls = location.otherAreas?.flatMap((otherArea: OtherArea) => {
      const otherAreaUrl = `${baseUrl}/${otherArea.slug}`;
      const subAreaUrls = otherArea.otherSubAreas?.map(
        (subArea: OtherSubArea) => `${otherAreaUrl}/${subArea.slug}`
      ) || [];
      return [otherAreaUrl, ...subAreaUrls];
    }) || [];
    return [baseUrl, ...otherAreaUrls];
  });

  // Combine all dynamic URLs
  const dynamicSlugs: MetadataRoute.Sitemap = [
    // Blogs
    ...blogs.map((item: BlogItem) => `/articles/${item.year}/${item.month}/${item.slug}`),
    // Practice Areas
    ...practiceAreas.map((item: SEOItem) => `/practice-areas/${item.slug}`),
    // Locations (including other areas and sub-areas)
    ...locationUrls,
    // Cases (Terry's Takes)
    ...cases.map((item: SEOItem) => `/terrys-takes/${item.slug}`),
    // Video Center
    ...videos.map((item: VideoItem) => {
      const typeSlug = item.category === 'Podcast' ? 'podcast' :
        item.category === 'Personal Injury' ? 'personal-injury' :
        'about-fischer-redavid';
      return `/video-center/${typeSlug}/${item.slug}`;
    }),
    // Team Profiles
    ...profiles.map((item: ProfileItem) => {
      const section = item.type === 'Attorneys' ? 'our-attorneys' : 'our-staff';
      return `/about-us/${section}/${item.slug}`;
    }),
    // Squeeze Pages
    ...squeezes.map((item: SEOItem) => `/${item.slug}`),
  ].map((slug) => ({
    url: `${BASE_URL}${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...localSlugs,
    ...dynamicSlugs,
  ];
}

export const revalidate = 3600; // Revalidate every hour
