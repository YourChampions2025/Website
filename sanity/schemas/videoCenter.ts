import { MdVideocam } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "videoCenter",
  title: "Video Center",
  type: "document",
  icon: MdVideocam,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description:
        "Ex: Protecting Clients from Fraud - With Guest Sean McCleary | Episode 36",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Ex: protecting-clients-from-fraud-with-guest-sean-mc",
      type: "slug",
      // options: {
      //   source: "title",
      // },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "date",
      title: "Date",
      description: "Just choose the date of the episode.",
      type: "date",
      validation: (Rule) => Rule.required().error("Date is required"),
    }),
    defineField({
      name: "category",
      title: "Category",
      description: "Ex: Podcast, Personal Injury or About Fischer Redavid",
      type: "string",
      options: {
        list: [
          { title: "Podcast", value: "Podcast" },
          { title: "Personal Injury", value: "Personal Injury" },
          { title: "About Fischer Redavid", value: "About Fischer Redavid" },
        ],
      },
      validation: (Rule) => Rule.required().error("A category is required"),
    }),
    // Conditional fields for "Podcast"
    defineField({
      name: "episodeNumber",
      title: "Episode Number",
      description: "Ex: 36",
      type: "number",
      hidden: ({ parent }) => parent?.category !== "Podcast",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const category = (context.parent as any)?.category;
          if (category === "Podcast" && !value) {
            return "Episode Number is required";
          }
          return true;
        }),
    }),
    defineField({
      name: "url",
      title: "URL from YouTube",
      description: "Ex: https://youtu.be/xrfOP890cuo?si=s7hTqbsOMonGOCn5",
      type: "string",
    }),
    // Conditional field for "Personal Injury" and "About Fischer Redavid"
    defineField({
      name: "video",
      title: "Video",
      description: "Upload a video file.",
      type: "file",
      options: {
        accept: "video/*",
      },
      hidden: ({ parent }) =>
        !["Personal Injury", "About Fischer Redavid"].includes(
          parent?.category
        ),
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const category = (context.parent as any)?.category;
          if (
            ["Personal Injury", "About Fischer Redavid"].includes(category) &&
            !value
          ) {
            return "Video is required";
          }
          return true;
        }),
    }),
  ],
});
