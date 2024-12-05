export interface SEOItem {
  slug: string;
}

export interface BlogSEOItem extends SEOItem {
  year: string;
  month: string;
}

export interface OtherSubAreaSEO extends SEOItem {}

export interface OtherAreaSEO extends SEOItem {
  otherSubAreas?: OtherSubAreaSEO[];
}

export interface LocationSEO extends SEOItem {
  otherAreas?: OtherAreaSEO[];
}

export interface CaseSEOItem extends SEOItem {
  court?: string;
}

export interface VideoSEOItem extends SEOItem {
  category: string;
}

export interface ProfileSEOItem extends SEOItem {
  type: string;
}

export interface SqueezeSEOItem extends SEOItem {}

export interface AreaSEOItem extends SEOItem {
  primaryLocation: string;
}

export interface SubAreaSEOItem extends SEOItem {
  primaryLocation: string;
  parentAreaSlug: string;
} 