import { groq } from "next-sanity";

export const getFilteredResultsQuery = (
  title: string,
  category: string,
  limit: number
) => groq`
  {
    "results": *[_type == "results" ${
      title ? `&& title match "*${title}*"` : ""
    } ${
      category ? `&& "${category}" in categories` : ""
    }] | order(_createdAt asc) [0..${limit}-1] {
      title,
      subtitle,
      description,
      "slug": slug.current,
      categories,
      content
    },
    "totalResults": count(*[_type == "results" ${
      title ? `&& title match "*${title}*"` : ""
    } ${category ? `&& "${category}" in categories` : ""}])
  }
`;

export const getFilteredCasesQuery = (
  title: string,
  category: string,
  court: string,
  limit: number
) => groq`
  {
    "cases": *[_type == "cases" ${title ? `&& title match "*${title}*"` : ""} ${
      category ? `&& "${category}" in categories` : ""
    } ${
      court ? `&& court == "${court}"` : ""
    }] | order(date desc) [0..${limit}-1] {
      title,
      description,
      "slug": slug.current,
      date,
      author,
      court,
      categories
    },
    "totalCases": count(*[_type == "cases" ${
      title ? `&& title match "*${title}*"` : ""
    } ${category ? `&& "${category}" in categories` : ""} ${
      court ? `&& court == "${court}"` : ""
    }])
  }
`;

export const getCategoriesForBlogsQuery = groq`
  *[_type == "categoriesForBlogs"] {
    title,
    "slug": slug.current
  }
`;

export const getFilteredBlogsQuery = (
  title: string,
  category: string,
  year: string,
  month: string,
  limit: number
) => groq`
  {
    "blogs": *[_type == "blogs" ${title ? `&& title match "*${title}*"` : ""} ${
      category ? `&& "${category}" in categories[]->slug.current` : ""
    } ${year ? `&& date >= "${year}-01-01" && date <= "${year}-12-31"` : ""} ${
      month && year
        ? `&& date >= "${year}-${month}-01" && date < "${year}-${month + 1}-01"`
        : ""
    }] | order(date desc) [0..${limit}-1] {
      title,
      description,
      "slug": slug.current,
      date,
      author,
      categories[]->{
        title,
        "slug": slug.current
      },
      "imageUrl": image.asset->url
    },
    "totalBlogs": count(*[_type == "blogs" ${
      title ? `&& title match "*${title}*"` : ""
    } ${category ? `&& "${category}" in categories[]->slug.current` : ""} ${
      year ? `&& date >= "${year}-01-01" && date <= "${year}-12-31"` : ""
    } ${
      month && year
        ? `&& date >= "${year}-${month}-01" && date < "${year}-${month + 1}-01"`
        : ""
    }])
  }
`;

export const getArticleBySlugQuery = groq`
  {
    "blog": *[_type == "blogs" && slug.current == $slug][0] {
      title,
      description,
      "slug": slug.current,
      date,
      author,
      categories[]->{
        title,
        "slug": slug.current
      },
      "imageUrl": image.asset->url,
      content,
      "prev": *[_type == "blogs" && date < ^.date] | order(date desc)[0] {
        date,
        "slug": slug.current
      },
      "next": *[_type == "blogs" && date > ^.date] | order(date asc)[0] {
        date,
        "slug": slug.current
      }
    }
  }
`;

export const getTerrysTakesBySlugQuery = groq`
 {
    "caseItem": *[_type == "cases" && slug.current == $slug][0] {
      title,
      description,
      "slug": slug.current,
      date,
      author,
      court,
      categories,
      content,
      "prev": *[_type == "cases" && date < ^.date] | order(date desc)[0] {
        "slug": slug.current,
        court
      },
      "next": *[_type == "cases" && date > ^.date] | order(date asc)[0] {
        "slug": slug.current,
        court
      }
    }
  }
  
`;

export const getAllTestimonialsQuery = groq`
  *[_type == "testimonials"] {
    quote,
    testimony,
    name
  }
`;

export const getLatestTestimonialsQuery = groq`
  *[_type == "testimonials"] | order(_createdAt desc) [0..5] {
    quote,
    testimony,
    name
  }
`;

export const getPodcastsQuery = (limit?: number) => groq`
  *[_type == "videoCenter" && category == "Podcast"] | order(episodeNumber desc) ${!!limit ? `[0..${limit - 1}]` : ""} {
    title,
    "slug": slug.current,
    date,
    episodeNumber,
    url,
    category
  }
`;

export const getPersonalInjuryVideosQuery = (limit?: number) => groq`
  *[_type == "videoCenter" && category == "Personal Injury"] | order(date desc) ${!!limit ? `[0..${limit - 1}]` : ""} {
    title,
    "slug": slug.current,
    date,
    "videoUrl": video.asset->url,
    category
  }
`;

export const getAboutFischerRedavidVideosQuery = (limit?: number) => groq`
  *[_type == "videoCenter" && category == "About Fischer Redavid"] | order(date desc) ${!!limit ? `[0..${limit - 1}]` : ""} {
    title,
    "slug": slug.current,
    date,
    "videoUrl": video.asset->url,
    category
  }
`;

export const getVideoCenterBySlugQuery = groq`
  *[_type == "videoCenter" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    date,
    episodeNumber,
    url,
    category,
    "videoUrl": video.asset->url
  }
`;

export const getAttorneysProfilesQuery = groq`
  *[_type == "profiles" && type == "Attorneys"] {
    type,
    name,
    "slug": slug.current,
    role,
    "imageUrl": image.asset->url
  }
`;

export const getStaffProfilesQuery = groq`
  *[_type == "profiles" && type == "Staff"] {
    type,
    name,
    "slug": slug.current,
    role,
    "imageUrl": image.asset->url
  }
`;

export const getProfileBySlugQuery = groq`
  *[_type == "profiles" && slug.current == $slug][0] {
    type,
    name,
    "slug": slug.current,
    role,
    "imageUrl": image.asset->url,
    "videoUrl": video.asset->url,
    content,
    barAdmission,
    education,
    awards[]{
      "awardsImageUrl": awardsImage.asset->url
    }
  }
`;
