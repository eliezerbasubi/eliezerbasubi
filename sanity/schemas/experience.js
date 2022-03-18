export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'position',
      title: 'Job position',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      hidden: ({ document }) => document.active,
      options: {
        dateFormat: 'MMMM YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'active',
      title: 'Currently working here',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'duties',
      title: 'Responsibilities',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
};
