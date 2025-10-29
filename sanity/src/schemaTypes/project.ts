import { defineType, defineField } from 'sanity';
import { ProjectsIcon } from '@sanity/icons';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Project title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(50),
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
      title: "Project's main image",
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
      name: 'projectUrl',
      title: 'The URL the project',
      type: 'url',
    }),
    defineField({
      name: 'workType',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'works' }],
    }),
    defineField({
      name: 'featured',
      description: 'Featured project will be displayed on the landing page',
      title: 'Should this project be featured?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'listed',
      description: 'Only listed projects will be visible to users',
      title: 'Should this project be listed',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
