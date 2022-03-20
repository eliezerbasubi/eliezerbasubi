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
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'code' },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
              be they blind, color-blind, low-sighted; 
              alternative text is of great help for those 
              people that can rely on it to have a good idea of 
              what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'thumbnail',
      title: 'Article Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'keyWords',
      title: 'SEO Keywords',
      description: 'Separate each keyword with a comma',
      type: 'string',
    },
    {
      name: 'workType',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'works' }],
    },
    {
      name: 'featured',
      description: 'Featured article will be displayed on the landing page',
      title: 'Should this article be featured?',
      type: 'boolean',
      initialValue: false,
    },
  ],
};
