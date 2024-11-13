import { client } from "./client";
import {
  getAboutFischerRedavidVideosQuery,
  getAllTestimonialsQuery,
  getArticleBySlugQuery,
  getAttorneysProfilesQuery,
  getCategoriesForBlogsQuery,
  getFilteredBlogsQuery,
  getFilteredCasesQuery,
  getFilteredResultsQuery,
  getLatestBlogsQuery,
  getLatestTestimonialsQuery,
  getPersonalInjuryVideosQuery,
  getPodcastsQuery,
  getPracticeAreaBySlugQuery,
  getProfileBySlugQuery,
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
