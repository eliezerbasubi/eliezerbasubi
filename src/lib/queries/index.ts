export const GENERIC_QUERY = `
  {
    "about": *[_type == "about"][0] {
      avatarUrl,
      fullName,
      greeting,
      jobTitle,
      personalDescription,
      socials,
  },
  "experience": *[_type == "experience" && listed == true] | order(active desc, startDate desc) {
      _id,
      active,
      company,
      duties,
      endDate,
      startDate,
      position,
      listed,
  },
  "projects": *[_type == "project" && listed == true] | order(_createdAt desc) {
    _id,
    _ref,
    title,
    description,
    "slug": slug.current,
    thumbnail,
    projectUrl,
    tags,
  },
  "articles": *[_type == "article" && listed == true] | order(publishedOn desc) {
        _id,
        _ref,
        title,
        description,
        "slug": slug.current,
        thumbnail,
        projectUrl,
        tags,
        featured,
        readCount,
        publishedOn,
        listed,
        "author": author -> name
    },
  "interactions": *[_type == "interaction"] | order(_createdAt desc) {
    _id,
    _ref,
    title,
    description,
    "slug": slug.current,
    clipPath,
    featured,
    "thumbnail": thumbnail.asset->{
      url,
      originalFilename,
      mimeType
    },
  },
}
  `;

export const GET_FEATURED_WORKS = `
    *[_type == "works"] {
      _id,
      title,
      key,
      "project": *[_type == "interaction" && workType._ref == ^._id && featured == true][0] {
        _id,
        _ref,
        title,
        description,
        slug,
        featured,
        clipPath,
        "thumbnail": thumbnail.asset->{
          url,
          originalFilename,
          mimeType
        }
      },
    "article": *[_type == "article" && workType._ref == ^._id && featured == true][0] {
        _id,
        _ref,
        title,
        description,
        "slug": slug.current,
        thumbnail,
        projectUrl,
        tags,
        featured,
        readCount,
        publishedOn,
        "author": author -> name
      }
    }
  `;

export const GET_METATAGS = `
  *[_type == "metatags"][0] {
    _id,
    coverUrl,
    description,
    keyWords,
    siteURL,
    title,
  }
`;

export const GET_ARTICLES = `
     *[_type == "article" && listed == true] | order(publishedOn desc) {
        _id,
        _ref,
        title,
        description,
        "slug": slug.current,
        thumbnail,
        projectUrl,
        tags,
        featured,
        readCount,
        publishedOn,
        listed,
        "author": author -> name
    }
`;

export const GET_ARTICLE = `
    *[_type == "article" && slug.current == $slug][0] {
        _id,
        _ref,
        title,
        description,
        "slug": slug.current,
        thumbnail,
        projectUrl,
        tags,
        body,
        featured,
        readCount,
        publishedOn,
        "author": author -> name
    }`;

export const GET_PROJECTS = `
  *[_type == "project"] {
    _id,
    _ref,
    title,
    description,
    "slug": slug.current,
    thumbnail,
    projectUrl,
    tags,
  }`;

export const GET_INTERACTIONS = `
  *[_type == "interaction"] {
    _id,
    _ref,
    title,
    description,
    "slug": slug.current,
    clipPath,
    featured,
    "thumbnail": thumbnail.asset->{
      url,
      originalFilename,
      mimeType
    }
  }`;
