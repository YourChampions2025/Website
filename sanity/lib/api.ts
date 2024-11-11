import { client } from "./client";
import {
  getAllTestimonialsQuery,
  getArticleBySlugQuery,
  getCategoriesForBlogsQuery,
  getFilteredBlogsQuery,
  getFilteredCasesQuery,
  getFilteredResultsQuery,
  getLatestTestimonialsQuery,
  getPodcastsQuery,
  getTerrysTakesBySlugQuery,
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

export const getPodcasts = async () => {
  const data = await client.fetch(getPodcastsQuery);

  if (!data) return undefined;

  return data;
};
