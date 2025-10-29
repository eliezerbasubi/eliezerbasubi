import { defineType, defineField } from 'sanity';
import { BulbOutlineIcon } from '@sanity/icons';

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'How would you name this skill?',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'How would you describe this skill?',
      type: 'string',
    }),
    defineField({
      name: 'key',
      type: 'string',
      options: {
        list: [
          { title: 'Engineering', value: 'engineering' },
          { title: 'Soft Skills', value: 'softSkills' },
        ],
      },
      initialValue: 'engineering',
    }),
  ],
});
