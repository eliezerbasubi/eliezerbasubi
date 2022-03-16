export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Article title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Article Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'thumbnail',
      title: 'Article Main Image',
      type: 'url',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'publishedOn',
      title: 'Publish Date',
      type: 'date',
    },
    {
      name: 'readCount',
      title: 'Read count',
      type: 'number',
      initialValue: 2,
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
    },
    {
      name: 'workType',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'works' }],
    },
  ],
};
