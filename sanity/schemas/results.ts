import { MdMoney } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "results",
  title: "Results",
  type: "document",
  icon: MdMoney,
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
        // @ts-ignore
        auto: true,
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      validation: (Rule) => Rule.required().error("Subtitle is required"),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Auto Accidents", value: "Auto Accidents" },
          { title: "Brain Injury", value: "Brain Injury" },
          { title: "Burn Injury", value: "Burn Injury" },
          { title: "Catastrophic Injury", value: "Catastrophic Injury" },
          { title: "Civil Rights", value: "Civil Rights" },
          { title: "Medical Malpractice", value: "Medical Malpractice" },
          { title: "Personal Injury", value: "Personal Injury" },
          { title: "Premises Liability", value: "Premises Liability" },
          { title: "Serious Bodily Injury", value: "Serious Bodily Injury" },
        ],
      },
      validation: (Rule) =>
        Rule.required().error("At least one category is required"),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL",
                fields: [
                  {
                    name: "href",
                    type: "string",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
            ],
          },
        }),
      ],
      validation: (Rule) => Rule.required().error("Content is required"),
    }),
  ],
});
