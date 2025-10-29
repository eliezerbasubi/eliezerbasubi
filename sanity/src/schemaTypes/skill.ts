import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'How would you describe this skill?',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'skill',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'skills' }],
    }),
  ],
});
