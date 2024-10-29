import { MdPodcasts } from "react-icons/md";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "podcasts",
  title: "Podcasts",
  type: "document",
  icon: MdPodcasts,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "episodeNumber",
      title: "Episode Number",
      type: "number",
      validation: (Rule) => Rule.required().error("Episode Number is required"),
    }),
    defineField({
      name: "url",
      title: "URL from Youtube",
      type: "string",
      validation: (Rule) => Rule.required().error("URL is required"),
    }),
  ],
});
