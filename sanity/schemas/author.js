export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of the Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'avatarUrl',
      title: 'Avatar URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
