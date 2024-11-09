import { categoriesOptions, courtOptions } from "@/utils/constants";
import { MdFilePresent } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "cases",
  title: "Cases",
  type: "document",
  icon: MdFilePresent,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Ex: H.S. v. Department of Children and Families",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Ex: h-s-v-department-of-children-and-families",
      type: "slug",
      // options: {
      //   source: "title",
      // },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),

    defineField({
      name: "description",
      title: "Description for SEO",
      description:
        "This will be used for SEO purposes. It should be a short description.",
      type: "text",
      validation: (Rule) => Rule.required().error("Description is required"),
    }),

    defineField({
      name: "date",
      title: "Date",
      description: "Just choose the date of the publication.",
      type: "date",
      validation: (Rule) => Rule.required().error("Date is required"),
    }),

    defineField({
      name: "author",
      title: "Author",
      description: "Ex: Terry P. Roberts, Esq.",
      type: "string",
      validation: (Rule) => Rule.required().error("Author is required"),
    }),

    defineField({
      name: "court",
      title: "Court",
      description: "Ex: 4th DCA",
      type: "string",
      options: {
        list: courtOptions,
      },
    }),

    defineField({
      name: "categories",
      title: "Categories",
      description:
        "Ex: Disqualification or Recusal of Judge, Writ of Prohibition, Terry's Takes, etc.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: categoriesOptions,
      },
    }),

    defineField({
      name: "content",
      title: "Content",
      description:
        "Page content, containing links, lists, headings and paragraphs.",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      validation: (Rule) => Rule.required().error("Content is required"),
    }),
  ],
});
