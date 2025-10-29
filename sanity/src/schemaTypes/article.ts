import { defineType, defineField } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Article title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Article Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
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
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'code' },
        {
          type: 'image',
          name: 'image',
          fields: [
            defineField({
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description:
                "Some of your visitors cannot see images, be they blind, color-blind, low-sighted; alternative text is of great help for those people that can rely on it to have a good idea of what's on your page.",
              validation: (rule) => {
                // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
                return rule.custom((alt, context) => {
                  if ((context.document?.image as any)?.asset?._ref && !alt) {
                    return 'Required';
                  }
                  return true;
                });
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'thumbnail',
      title: 'Article Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'publishedOn',
      title: 'Publish Date',
      type: 'date',
    }),
    defineField({
      name: 'readCount',
      title: 'Read count',
      type: 'number',
      initialValue: 2,
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
    }),
    defineField({
      name: 'keyWords',
      title: 'SEO Keywords',
      description: 'Separate each keyword with a comma',
      type: 'string',
    }),
    defineField({
      name: 'workType',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'works' }],
    }),
    defineField({
      name: 'featured',
      description: 'Featured article will be displayed on the landing page',
      title: 'Should this article be featured?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'listed',
      description: 'Only listed artices will be visible to users',
      title: 'Should this article be listed?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
