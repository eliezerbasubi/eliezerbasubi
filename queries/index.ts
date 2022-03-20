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
  "experience": *[_type == "experience"] | order(active desc, startDate desc) {
      _id,
      active,
      company,
      duties,
      endDate,
      startDate,
      position,
  },
  "skills": *[_type == "skills"]{
      _id,
      title,
      key,
      description,
      "skills": *[_type == "skill" && skill._ref == ^._id] | order(priority asc) {
          title,
         _id
       }
    }
  }
  `;

export const GET_FEATURED_WORKS = `
    *[_type == "works"] {
      _id,
      title,
      key,
      "project": *[_type == "project" && workType._ref == ^._id && featured == true][0] {
        _id,
        _ref,
        title,
        description,
        slug,
        thumbnail,
        projectUrl,
        tags,
        featured
      },
    "article": *[_type == "article" && workType._ref == ^._id && featured == true][0] {
        _id,
        _ref,
        title,
        description,
        slug,
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
     *[_type == "article"] {
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
`;
