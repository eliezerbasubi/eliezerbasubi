export default {
  name: 'interaction',
  title: 'Interactions',
  type: 'document',
  initialValue: async () => ({
    workType: {
      _type: 'reference',
      _ref: '9e233c55-30dc-4d67-9548-e2198594a9f9',
    },
  }),
  fields: [
    {
      name: 'title',
      title: 'Interaction title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Interaction Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(25),
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
      title: "Project's main asset",
      type: 'file',
      options: {
        hotspot: true,
        accept: 'video/*',
      },
    },
    {
      title: 'ClipPath',
      name: 'clipPath',
      description: 'Clip path will help hide edges of the video',
      type: 'string',
      initialValue: 'inset(0 0 10% 0)',
    },
    {
      name: 'workType',
      type: 'reference',
      to: [{ type: 'works' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featured',
      description: 'Featured interaction will be displayed on the landing page',
      title: 'Should this interaction be featured?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'active',
      description:
        'Non-active interactions will not be displayed in interactions section',
      title: 'Deactivate the interaction',
      type: 'boolean',
      initialValue: true,
    },
  ],
};
