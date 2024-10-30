import { type SchemaTypeDefinition } from "sanity";
import categories from "./schemas/categories";
import blogs from "./schemas/blogs";
import testimonials from "./schemas/testimonials";
import results from "./schemas/results";
import profiles from "./schemas/profiles";
import practiceAreas from "./schemas/practiceAreas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categories, blogs, testimonials, results, profiles, practiceAreas],
};
