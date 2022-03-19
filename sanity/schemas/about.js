export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'greeting',
      title: 'Greeting Message',
      type: 'string',
    },
    {
      name: 'fullName',
      title: 'Full name',
      type: 'string',
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'personalDescription',
      title: 'Tell us about yourself',
      type: 'string',
    },
    {
      name: 'keyWords',
      title: 'SEO Keywords',
      description: 'Separate each keyword with a comma',
      type: 'string',
    },
    {
      name: 'avatarUrl',
      title: 'Avatar URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'document',
      fields: [
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
        },
        {
          name: 'linkedin',
          title: 'Linkedin',
          type: 'string',
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'string',
        },
        {
          name: 'github',
          title: 'Github',
          type: 'string',
        },
        {
          name: 'telegram',
          title: 'Telegram',
          type: 'string',
        },
      ],
    },
  ],
};
