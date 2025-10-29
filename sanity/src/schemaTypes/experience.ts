import { defineType, defineField } from 'sanity';
import { CaseIcon } from '@sanity/icons';

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'position',
      title: 'Job position',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
        // calendarTodayLabel: 'Today',
      },
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      hidden: ({ document }) =>
        (document as { active?: boolean }).active === true,
      options: {
        dateFormat: 'MMMM YYYY',
        // calendarTodayLabel: 'Today',
      },
    }),
    defineField({
      name: 'active',
      title: 'Currently working here',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'listed',
      description: 'Only listed positions will be visible to users',
      title: 'Should this position be listed?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'duties',
      title: 'Responsibilities',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      initialValue: [],
    }),
  ],
});
