export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Enter contact Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Enter contact Email',
      type: 'email',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'message',
      title: 'Type message',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
};
