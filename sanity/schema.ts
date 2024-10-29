import { type SchemaTypeDefinition } from "sanity";
import categories from "./schemas/categories";
import blogs from "./schemas/blogs";
import testimonials from "./schemas/testimonials";
import results from "./schemas/results";
import podcasts from "./schemas/podcasts";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categories, blogs, testimonials, results, podcasts],
};
