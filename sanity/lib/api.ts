import { client } from "./client";
import {
  getAboutFischerRedavidVideosQuery,
  getAllTestimonialsQuery,
  getArticleBySlugQuery,
  getAttorneysProfilesQuery,
  getBiggestResultsQuery,
  getCategoriesForBlogsQuery,
  getFilteredBlogsQuery,
  getFilteredCasesQuery,
  getFilteredResultsQuery,
  getLatestBlogsQuery,
  getLatestTestimonialsQuery,
  getLocationsBySlugQuery,
  getLocationsQuery,
  getOtherAreaBySlugsQuery,
  getOtherSubAreaBySlugsQuery,
  getPersonalInjuryVideosQuery,
  getPodcastsQuery,
  getPracticeAreaBySlugQuery,
  getProfileBySlugQuery,
  getSqueezeBySlugQuery,
  getSqueezesQuery,
  getStaffProfilesQuery,
  getTerrysTakesBySlugQuery,
  getVideoCenterBySlugQuery,
} from "./queries";

export const getFilteredResults = async (
  limit: number,
  title?: string,
  category?: string
) => {
  const query = getFilteredResultsQuery(title || "", category || "", limit);
  const data = await client.fetch(query);

  if (!data) return undefined;

  return data;
};

export const getFilteredCases = async (
  limit: number,
  title?: string,
  category?: string,
  court?: string
) => {
  const query = getFilteredCasesQuery(
    title || "",
    category || "",
    court || "",
    limit
  );
  const data = await client.fetch(query);

  if (!data) return undefined;

  return data;
};

export const getCategoriesForBlogs = async () => {
  const data = await client.fetch(getCategoriesForBlogsQuery);

  if (!data) return undefined;

  return data;
};

export const getFilteredBlogs = async (
  limit: number,
  title?: string,
  category?: string,
  year?: string,
  month?: string
) => {
  const query = getFilteredBlogsQuery(
    title || "",
    category || "",
    year || "",
    month || "",
    limit
  );
  const data = await client.fetch(query);

  if (!data) return undefined;

  return data;
};

export const getArticleBySlug = async (slug: string) => {
  if (!slug) return null;

  const data = await client.fetch(getArticleBySlugQuery, {
    slug,
  });

  if (!data) return undefined;

  return data;
};

export const getTerrysTakesBySlug = async (slug: string) => {
  if (!slug) return null;

  const data = await client.fetch(getTerrysTakesBySlugQuery, {
    slug,
  });

  if (!data) return undefined;

  return data;
};

export const getLocationsBySlug = async (slug: string) => {
  if (!slug) return null;

  const data = await client.fetch(getLocationsBySlugQuery, {
    slug,
  });

  if (!data) return undefined;

  return data;
};

export const getAllTestimonials = async () => {
  const data = await client.fetch(getAllTestimonialsQuery);

  if (!data) return undefined;

  return data;
};

export const getLatestTestimonials = async () => {
  const data = await client.fetch(getLatestTestimonialsQuery);

  if (!data) return undefined;

  return data;
};

export const getLatestBlogs = async () => {
  const data = await client.fetch(getLatestBlogsQuery);

  if (!data) return undefined;

  return data;
};

export const getPodcasts = async (limit?: number) => {
  const query = getPodcastsQuery(limit);
  const data = await client.fetch(query);

  if (!data) return undefined;

  return data;
};

export const getPersonalInjuryVideos = async (limit?: number) => {
  const query = getPersonalInjuryVideosQuery(limit);
  const data = await client.fetch(query);

  if (!data) return undefined;

  return data;
};

export const getAboutFischerRedavidVideos = async (limit?: number) => {
  const query = getAboutFischerRedavidVideosQuery(limit);
  const data = await client.fetch(query);

  if (!data) return undefined;

  return data;
};

export const getVideoCenterBySlug = async (slug: string) => {
  if (!slug) return null;

  const data = await client.fetch(getVideoCenterBySlugQuery, {
    slug,
  });

  if (!data) return undefined;

  return data;
};

export const getAttorneysProfiles = async () => {
  const data = await client.fetch(getAttorneysProfilesQuery);

  if (!data) return undefined;

  return data;
};

export const getStaffProfiles = async () => {
  const data = await client.fetch(getStaffProfilesQuery);

  if (!data) return undefined;

  return data;
};

export const getProfileBySlug = async (slug: string) => {
  if (!slug) return null;

  const data = await client.fetch(getProfileBySlugQuery, {
    slug,
  });

  if (!data) return undefined;

  return data;
};

export const getPracticeAreaBySlug = async (slug: string) => {
  if (!slug) return null;

  const data = await client.fetch(getPracticeAreaBySlugQuery, {
    slug,
  });

  if (!data) return undefined;

  return data;
};

export const getBiggestResults = async () => {
  const data = await client.fetch(getBiggestResultsQuery);

  if (!data) return undefined;

  return data;
};

export const getLocations = async () => {
  const data = await client.fetch(getLocationsQuery);

  if (!data) return undefined;

  return data;
};

export const getOtherAreaBySlugs = async (
  locationSlug: string,
  otherAreaSlug: string
) => {
  if (!locationSlug || !otherAreaSlug) return null;

  const data = await client.fetch(getOtherAreaBySlugsQuery, {
    locationSlug,
    otherAreaSlug,
  });

  if (!data) return undefined;

  return data;
};

export const getOtherSubAreaBySlugs = async (
  locationSlug: string,
  otherAreaSlug: string,
  otherSubAreaSlug: string
) => {
  if (!locationSlug || !otherAreaSlug || !otherSubAreaSlug) return null;

  const data = await client.fetch(getOtherSubAreaBySlugsQuery, {
    locationSlug,
    otherAreaSlug,
    otherSubAreaSlug,
  });

  if (!data) return undefined;

  return data;
};

export const getSqueezes = async () => {
  const data = await client.fetch(getSqueezesQuery);

  if (!data) return undefined;

  return data;
};

export const getSqueezeBySlug = async (slug: string) => {
  if (!slug) return null;

  const data = await client.fetch(getSqueezeBySlugQuery, { slug });

  if (!data) return undefined;

  return data;
};

export const getBlogsForSEO = async () => {
  const query = `*[_type == "blogs"] {
    "slug": slug.current,
    "date": date
  }`;
  const data = await client.fetch(query);

  if (!data) return [];

  const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 
    'july', 'august', 'september', 'october', 'november', 'december'];

  return data.map((item: { slug: string; date: string }) => ({
    slug: item.slug,
    year: item.date.split('-')[0],
    month: monthNames[parseInt(item.date.split('-')[1]) - 1]
  }));
};

export const getPracticeAreasForSEO = async () => {
  const query = `*[_type == "practiceAreas"] {
    "slug": slug.current
  }`;
  const data = await client.fetch(query);

  if (!data) return [];

  return data;
};

export const getLocationsForSEO = async () => {
  const query = `*[_type == "locations"] {
    "slug": slug.current,
    "otherAreas": otherAreas[]->{
      "slug": slug.current,
      "otherSubAreas": *[_type == "otherSubAreas" && parentOtherArea._ref == ^._id]{
        "slug": slug.current
      }
    }
  }`;
  const data = await client.fetch(query);

  if (!data) return [];

  return data;
};

export const getCasesForSEO = async () => {
  const query = `*[_type == "cases"] {
    "slug": slug.current
  }`;
  const data = await client.fetch(query);

  if (!data) return [];

  return data;
};

export const getVideoForSEO = async () => {
  const query = `*[_type == "videoCenter"] {
    "slug": slug.current,
    "category": category
  }`;
  const data = await client.fetch(query);

  if (!data) return [];

  return data;
};

export const getProfilesForSEO = async () => {
  const query = `*[_type == "profiles"] {
    "slug": slug.current,
    "type": type
  }`;
  const data = await client.fetch(query);

  if (!data) return [];

  return data;
};

export const getSqueezesForSEO = async () => {
  const query = `*[_type == "squeeze"] {
    "slug": slug.current
  }`;
  const data = await client.fetch(query);

  if (!data) return [];

  return data;
};
