import { defineType, defineField } from 'sanity';
import { BugIcon } from '@sanity/icons';

export default defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  icon: BugIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Name of the work',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'key',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Programming', value: 'programming' },
          { title: 'Writing', value: 'writing' },
        ],
      },
    }),
  ],
});
