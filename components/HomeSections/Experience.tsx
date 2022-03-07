import React from 'react';
import { IExperience } from '../../typings';
import ExperienceCard from '../partials/ExperienceCard';
import SectionTitle from '../partials/SectionTitle';
import WorkExperienceBG from '../vectors/WorkExperienceBG';

const experiences: IExperience[] = [
  {
    id: 1,
    position: 'Senior Software Developer',
    company: 'Xeco',
    startDate: 'July 2020',
    endDate: 'Now',
    duties: [
      'Worked on a justice bot messenger app',
      'Worked with tailwind to build a customer support application',
    ],
  },
  {
    id: 2,
    position: 'Software Developer',
    company: 'Justice Chatbot Ltd',
    startDate: 'February 2020',
    endDate: 'March 2021',
    duties: [
      'Worked on a justice bot messenger app',
      'Worked with tailwind to build a customer support application',
    ],
  },
  {
    id: 3,
    position: 'Freelancer',
    company: 'Justice Chatbot Ltd',
    startDate: 'November 2018',
    endDate: 'January 2020',
    duties: [
      'Worked on a justice bot messenger app',
      'Worked with tailwind to build a customer support application',
      'Worked on a justice bot messenger app',
      'Worked with tailwind to build a customer support application',
      'Worked on a justice bot messenger app',
      'Worked with tailwind to build a customer support application',
      'Worked on a justice bot messenger app',
      'Worked with tailwind to build a customer support application',
      'Worked on a justice bot messenger app',
      'Worked with tailwind to build a customer support application',
    ],
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen relative">
      <div className="w-full py-12 container mx-auto px-8 lg:px-12 ml:px-24 relative z-10">
        <SectionTitle
          title="Experience"
          description="My track record of creating seamless and scalable user interfaces for successful companies, so far!"
        />

        <div className="container mx-auto my-12 relative">
          <div className="h-full w-[1px] border border-gray-300 absolute left-2/4 bottom-0 top-0" />
          {experiences.map((experience, index) => (
            <ExperienceCard
              experience={experience}
              key={experience.id}
              arrowPosition={index % 2 === 1 ? 'left' : 'right'}
              className={`my-5 lg:my-0 ${index !== 0 ? 'lg:-mt-20' : ''}`}
            />
          ))}
        </div>
      </div>
      {/* <WorkExperienceBG className="absolute top-0 md:hidden" /> */}
      <WorkExperienceBG className="absolute bottom-0" />
    </section>
  );
};

export default Experience;
