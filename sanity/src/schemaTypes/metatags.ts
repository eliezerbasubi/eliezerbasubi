import { defineType, defineField } from 'sanity';
import { TagsIcon } from '@sanity/icons';

export default defineType({
  name: 'metatags',
  title: 'MetaTags',
  type: 'document',
  icon: TagsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Tell us about yourself',
      type: 'string',
    }),
    defineField({
      name: 'keyWords',
      title: 'SEO Keywords',
      description: 'Separate each keyword with a comma',
      type: 'string',
    }),
    defineField({
      name: 'coverUrl',
      title: 'Cover URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'siteURL',
      title: 'Site URL',
      type: 'url',
    }),
  ],
});
