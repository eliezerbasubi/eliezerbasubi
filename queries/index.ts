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
