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
  amount: number;
  title: string;
  slug: string;
  subtitle?: string;
  description?: string;
  categories?: string[];
  content?: TypedObject | TypedObject[];
  caseName?: string;
  caseType?: string;
  caseLocation?: string;
}

export interface CaseProps {
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  court?: string;
  quickTake?: string;
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

export interface ProfileProps {
  type: string;
  name: string;
  slug: string;
  imageUrl: string;
  role: string;
  content: TypedObject | TypedObject[];
  videoUrl?: string;
  barAdmission?: {
    barAdmissionTitle: string;
  }[];
  education?: {
    educationTitle: string;
    educationDescription: string;
  }[];
  awards?: {
    awardsTitle: string;
    awardsImageUrl: string;
  }[];
}

export interface PracticeAreaProps {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  content: TypedObject | TypedObject[];
  secondaryContent?: TypedObject | TypedObject[];
  videoUrl: string;
}

export interface LocationProps {
  location: string;
  title: string;
  description: string;
  slug: string;
  otherAreas: {
    _id: string;
    title: string;
    slug: string;
    otherSubAreas: {
      _id: string;
      title: string;
      slug: string;
    }[];
  }[];
  excerpt?: TypedObject | TypedObject[];
  content: TypedObject | TypedObject[];
}

export interface OtherAreaProps {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  excerpt: TypedObject | TypedObject[];
  content: TypedObject | TypedObject[];
}

export interface SqueezeProps {
  title: string;
  slug: string;
  description: string;
  subTitle: string;
  contactTitle: string;
  contentTitle: string;
  content: TypedObject | TypedObject[];
  quote: string;
}
