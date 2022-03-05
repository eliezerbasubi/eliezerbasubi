import React from 'react';
import { IExperience } from '../typings';
import ExperienceCard from './partials/ExperienceCard';
import SectionTitle from './partials/SectionTitle';

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
    <section className="min-h-screen w-full py-12 container mx-auto px-8 lg:px-12 ml:px-24">
      <SectionTitle
        title="Experience"
        description="My track record of creating seamless and scalable user interfaces for successful companies, so far!"
      />

      {/* <div className="py-12 container mx-auto">
        <div className="relative md:flex justify-between flex-wrap">
          <div className="flex-1 flex">
            <ExperienceCard experience={experiences[0]} />
            <div className="w-full h-[2px] bg-gray-300 md:mt-24 hidden md:block" />
          </div>
          <div className="h-full w-[1px] border border-gray-300 absolute left-2/4" />
          <div className="flex-1 flex mt-16 md:mt-32">
            <div className="w-full h-[2px] bg-gray-300 md:mt-24 hidden md:block" />
            <ExperienceCard experience={experiences[1]} />
          </div>
        </div>
        <div className="relative md:flex justify-between flex-wrap">
          <div className="flex-1 flex mt-16 md:mt-0">
            <ExperienceCard experience={experiences[2]} />
            <div className="w-full h-[2px] bg-gray-300 md:mt-24 hidden md:block" />
          </div>
          <div className="h-auto md:h-full w-[1px] border border-gray-300 absolute left-2/4" />
          <div className="flex-1 flex mt-16 md:mt-0" />
        </div>
      </div> */}

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
    </section>
  );
};

export default Experience;
