export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name of the work',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'key',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Programming', value: 'programming' },
          { title: 'Writing', value: 'writing' },
        ],
      },
    },
  ],
};
