export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'How would you name this skill?',
      type: 'string',
    },
    {
      name: 'description',
      title: 'How would you describe this skill?',
      type: 'string',
    },
    {
      name: 'key',
      type: 'string',
      options: {
        list: [
          { title: 'Engineering', value: 'engineering' },
          { title: 'Soft Skills', value: 'softSkills' },
        ],
      },
      initialValue: 'engineering',
    },
  ],
};
