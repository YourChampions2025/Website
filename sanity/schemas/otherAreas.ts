import { MdWork } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "otherAreas",
  title: "Other Areas",
  type: "document",
  icon: MdWork,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "This will be used as a thumbnail.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Image is required"),
    }),

    defineField({
      name: "title",
      title: "Title",
      description: "Ex: Bicycle Accident Lawyer",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Ex: bicycle-accident-lawyer",
      type: "slug",
      options: {
        isUnique: () => true,
      },
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
      name: "excerpt",
      title: "Excerpt",
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
