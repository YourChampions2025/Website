import { MdLocationOn } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "locations",
  title: "Locations",
  type: "document",
  icon: MdLocationOn,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Ex: Coral Gables",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Ex: coral-gables",
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
      name: "otherAreas",
      title: "Other Areas",
      description:
        "This will help relate otherAreas to locations, such as Car Accidents and Prison Injuries are related to Coral Gables.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "otherAreas" }],
        },
      ],
      validation: (Rule) =>
        Rule.required().error("At least one Other Area is required"),
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      description: "Ex: Coral Gables Personal Injury Lawyer",
      type: "string",
      validation: (Rule) => Rule.required().error("Subtitle is required"),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "Text of approximately 3 paragraphs.",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      validation: (Rule) => Rule.required().error("Excerpt is required"),
    }),

    defineField({
      name: "content",
      title: "Content",
      description:
        "Page content, containing links, lists, headings and paragraphs.",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({
          type: "object",
          name: "callToAction",
          title: "Call to Action",
          fields: [
            {
              name: "label",
              type: "string",
              title: "Label",
              readOnly: true,
              initialValue: "Call to action",
            },
          ],
        }),
      ],
      validation: (Rule) => Rule.required().error("Content is required"),
    }),
  ],
});
