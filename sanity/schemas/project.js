export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(50),
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
      title: "Project's main image",
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
      name: 'projectUrl',
      title: 'The URL the project',
      type: 'url',
    },
    {
      name: 'workType',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'works' }],
    },
    {
      name: 'featured',
      description: 'Featured project will be displayed on the landing page',
      title: 'Should this project be featured?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'active',
      description:
        'Non-active projects will not be displayed in projects section',
      title: 'Deactivate the project',
      type: 'boolean',
      initialValue: true,
    },
  ],
};
