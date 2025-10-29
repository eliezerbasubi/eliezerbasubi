import { defineType, defineField } from 'sanity';
import { UserIcon } from '@sanity/icons';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'greeting',
      title: 'Greeting Message',
      type: 'string',
    }),
    defineField({
      name: 'fullName',
      title: 'Full name',
      type: 'string',
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'personalDescription',
      title: 'Tell us about yourself',
      type: 'string',
    }),
    defineField({
      name: 'avatarUrl',
      title: 'Avatar URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
        }),
        defineField({
          name: 'linkedin',
          title: 'Linkedin',
          type: 'string',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter',
          type: 'string',
        }),
        defineField({
          name: 'github',
          title: 'Github',
          type: 'string',
        }),
        defineField({
          name: 'telegram',
          title: 'Telegram',
          type: 'string',
        }),
      ],
    }),
  ],
});
