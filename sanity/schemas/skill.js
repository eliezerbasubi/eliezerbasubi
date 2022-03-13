export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'How would you describe this skill?',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      initialValue: 1,
    },
    {
      name: 'skill',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'skills' }],
    },
  ],
};
