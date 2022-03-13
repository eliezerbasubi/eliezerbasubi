export const ABOUT_QUERY = `*[_type == "about"][0] {
    avatarUrl,
    fullName,
    greeting,
    jobTitle,
    personalDescription,
    socials,
}`;

export const EXPERIENCE_QUERY = `*[_type == "experience"] | order(active desc, startDate desc) {
    _id,
    active,
    company,
    duties,
    endDate,
    startDate,
    position,
}`;

export const SKILLS_QUERY = `*[_type == "skills"]{
    _id,
    title,
    key,
    description,
    "skills": *[_type == "skill" && skill._ref == ^._id] | order(priority asc) {
        title,
       _id
     }
  }`;
