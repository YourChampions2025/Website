import { MdLocationOn } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "locations",
  title: "Locations",
  type: "document",
  icon: MdLocationOn,
  fields: [
    defineField({
      name: "location",
      title: "Location",
      description: "Ex: Coral Gables, Miami, etc.",
      type: "string",
      options: {
        list: [
          { title: "Florida", value: "florida" },
          { title: "Georgia", value: "georgia" },
          { title: "U.S. Virgin Islands", value: "u-s-virgin-islands" },
        ],
      },
      validation: (Rule) => Rule.required().error("A location is required"),
    }),

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

    // defineField({
    //   name: "otherAreas",
    //   title: "Other Areas",
    //   description:
    //     "This will help relate otherAreas to locations, such as Car Accidents and Prison Injuries are related to Coral Gables.",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "otherAreas" }],
    //     },
    //   ],
    // }),

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
    }),
  ],
});
