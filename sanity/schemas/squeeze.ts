import { MdFileOpen } from 'react-icons/md';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'squeeze',
  title: 'Squeeze',
  type: 'document',
  icon: MdFileOpen,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required().error('Slug is required'),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),

    defineField({
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required().error('Subtitle is required'),
    }),

    defineField({
      name: 'contactTitle',
      title: 'Contact Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Contact title is required'),
    }),

    defineField({
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Content title is required'),
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              options: {
                hotspot: true,
              },
            },
          ],
        }),
        defineArrayMember({
          type: 'object',
          name: 'video',
          title: 'Video',
          fields: [
            {
              name: 'url',
              title: 'Video URL',
              type: 'url',
              description: 'URL of the YouTube, Vimeo or .mp4 video',
              validation: (Rule) => Rule.required().error('A URL is required'),
            },
          ],
        }),
        defineArrayMember({ type: 'block' }),
      ],
      validation: (Rule) => Rule.required().error('Content is required'),
    }),

    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule) => Rule.required().error('Quote is required'),
    }),
  ],
});
