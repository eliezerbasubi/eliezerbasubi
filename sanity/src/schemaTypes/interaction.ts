import { defineType, defineField } from 'sanity';
import { SparklesIcon } from '@sanity/icons';

export default defineType({
  name: 'interaction',
  title: 'Interactions',
  type: 'document',
  icon: SparklesIcon,
  initialValue: async () => ({
    workType: {
      _type: 'reference',
      _ref: '9e233c55-30dc-4d67-9548-e2198594a9f9',
    },
  }),
  fields: [
    defineField({
      name: 'title',
      title: 'Interaction title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Interaction Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(25),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'thumbnail',
      title: "Project's main asset",
      type: 'file',
      options: {
        // hotspot: true,
        accept: 'video/*',
      },
    }),
    defineField({
      title: 'ClipPath',
      name: 'clipPath',
      description: 'Clip path will help hide edges of the video',
      type: 'string',
      initialValue: 'inset(0 0 10% 0)',
    }),
    defineField({
      name: 'workType',
      type: 'reference',
      to: [{ type: 'works' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      description: 'Featured interaction will be displayed on the landing page',
      title: 'Should this interaction be featured?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'active',
      description:
        'Non-active interactions will not be displayed in interactions section',
      title: 'Deactivate the interaction',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
