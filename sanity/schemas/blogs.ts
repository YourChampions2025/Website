import { MdArticle } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "blogs",
  title: "Blogs",
  type: "document",
  icon: MdArticle,
  fields: [
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required().error("Date is required"),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Image is required"),
    }),
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
        maxLength: 96,
        // @ts-ignore
        auto: true,
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().error("Description is required"),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "categoriesForBlogs" }] }],
      validation: (Rule) =>
        Rule.required().error("At least one category is required"),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      validation: (Rule) => Rule.required().error("Content is required"),
    }),
  ],
});
