import { MdWork } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "practiceAreas",
  title: "Practice Areas",
  type: "document",
  icon: MdWork,
  fields: [
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
      name: "content",
      title: "Content",
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
