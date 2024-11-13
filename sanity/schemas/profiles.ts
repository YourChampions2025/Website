import { MdPerson } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "profiles",
  title: "Profiles",
  type: "document",
  icon: MdPerson,
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Attorneys", value: "Attorneys" },
          { title: "Staff", value: "Staff" },
        ],
      },
      validation: (Rule) => Rule.required().error("A type is required"),
    }),

    defineField({
      name: "name",
      title: "Name",
      description: "Ex: John Fischer, Esq.",
      type: "string",
      validation: (Rule) => Rule.required().error("Name is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description:
        "After entering the value in the name field, click on the generate button.",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),

    defineField({
      name: "role",
      title: "Role",
      description: "Ex: Founding Partner",
      type: "string",
      validation: (Rule) => Rule.required().error("Role is required"),
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
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/*",
      },
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
    }),

    defineField({
      name: "barAdmission",
      title: "Bar Admission",
      description: "Enter items, each with a title.",
      type: "array",
      of: [
        defineField({
          name: "barAdmissionItem",
          type: "object",
          fields: [
            defineField({
              name: "barAdmissionTitle",
              title: "Bar Admission Title",
              type: "string",
              description: "Ex: District Court of the Virgin Islands",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "education",
      title: "Education",
      description: "Enter items, each with a title and description.",
      type: "array",
      of: [
        defineField({
          name: "educationItem",
          type: "object",
          fields: [
            defineField({
              name: "educationTitle",
              title: "Education Title",
              type: "string",
              description: "Ex: Juris Doctorate",
            }),
            defineField({
              name: "educationDescription",
              title: "Education Description",
              type: "string",
              description: "Ex: University of Miami",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "awards",
      title: "Awards",
      description: "Enter items, each with a title and image.",
      type: "array",
      of: [
        defineField({
          name: "awardsItem",
          type: "object",
          fields: [
            defineField({
              name: "awardsTitle",
              title: "Awards Title",
              type: "string",
              description: "Ex: Multi-Million Dollar Advocates Forum",
            }),
            defineField({
              name: "awardsImage",
              title: "Awards Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),
  ],
});
