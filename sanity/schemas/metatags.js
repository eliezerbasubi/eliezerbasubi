export default {
  name: 'metatags',
  title: 'MetaTags',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page title',
      type: 'string',
    },
    {
      name: 'description',
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
      name: 'coverUrl',
      title: 'Cover URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'siteURL',
      title: 'Site URL',
      type: 'url',
    },
  ],
};
