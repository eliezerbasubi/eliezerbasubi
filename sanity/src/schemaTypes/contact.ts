import { defineType, defineField } from 'sanity';
import { BookIcon } from '@sanity/icons';

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Enter contact Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Enter contact Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'message',
      title: 'Type message',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
