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
