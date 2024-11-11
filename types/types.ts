import type { TypedObject } from "sanity";

export interface SourceSchema {
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface ImageSchema {
  _type: string;
  _key: string;
  caption: string;
  asset: SourceSchema;
}

export type PageProps = {
  params: { slug: string };
};

export interface ResultProps {
  title: string;
  slug: string;
  subtitle?: string;
  description?: string;
  categories?: string[];
  content?: TypedObject | TypedObject[];
}

export interface CaseProps {
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  court?: string;
  categories?: string[];
  content: TypedObject | TypedObject[];
  prev?: {
    court: string;
    slug: string;
  };
  next?: {
    court: string;
    slug: string;
  };
}

export interface TestimonialProps {
  quote: string;
  testimony: TypedObject | TypedObject[];
  name: string;
}

export interface VideoSchema {
  _type: string;
  _key: string;
  title?: string;
  url: string;
}

export interface BlogCategoryProps {
  title: string;
  slug: string;
}

export interface BlogProps {
  date: string;
  imageUrl: string;
  title: string;
  slug: string;
  description: string;
  categories: BlogCategoryProps[];
  author?: string;
  content: TypedObject | TypedObject[];
  prev?: {
    date: string;
    slug: string;
  };
  next?: {
    date: string;
    slug: string;
  };
}

export interface VideoCenterProps {
  title: string;
  slug: string;
  date: string;
  category: string;
  episodeNumber?: number;
  url?: string;
  videoUrl?: string;
}
