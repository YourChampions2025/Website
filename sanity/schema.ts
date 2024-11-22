import { type SchemaTypeDefinition } from "sanity";
import categories from "./schemas/categories";
import blogs from "./schemas/blogs";
import testimonials from "./schemas/testimonials";
import results from "./schemas/results";
import profiles from "./schemas/profiles";
import practiceAreas from "./schemas/practiceAreas";
import videoCenter from "./schemas/videoCenter";
import otherAreas from "./schemas/otherAreas";
import otherSubAreas from "./schemas/otherSubAreas";
import locations from "./schemas/locations";
import cases from "./schemas/cases";
import squeeze from "./schemas/squeeze";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categories,
    blogs,
    testimonials,
    profiles,
    practiceAreas,
    videoCenter,
    cases,
    results,
    locations,
    otherAreas,
    otherSubAreas,
    squeeze,
  ],
};
