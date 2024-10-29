import { MdCategory } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "categoriesForBlogs",
  title: "Categories for Blogs",
  type: "document",
  icon: MdCategory,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
  ],
});
