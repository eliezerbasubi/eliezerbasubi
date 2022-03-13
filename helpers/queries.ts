export const ABOUT_QUERY = `*[_type == "about"] {
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
