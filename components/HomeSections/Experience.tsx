import React from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../atoms/atom';
import ExperienceCard from '../partials/ExperienceCard';
import SectionHeader from '../partials/SectionHeader';
import WorkExperienceBG from '../vectors/WorkExperienceBG';

const Experience = () => {
  const { experience } = useRecoilValue(userInfoState);

  return (
    <section
      className="min-h-screen relative flex flex-col items-center justify-center"
      id="experience"
    >
      <div className="w-full py-12 container mx-auto px-8 lg:px-12 ml:px-24 relative z-10">
        <SectionHeader
          title="Experience"
          description="My track record of creating seamless and scalable user interfaces for successful companies, so far!"
        />

        <div className="container mx-auto my-12 relative 5xl:px-56">
          <div className="h-full w-[1px] border border-gray-300 absolute left-2/4 bottom-0 top-0" />
          {experience.map((experience, index) => (
            <ExperienceCard
              experience={experience}
              key={experience._id}
              arrowPosition={index % 2 === 1 ? 'left' : 'right'}
              className={`my-5 lg:my-0 ${index !== 0 ? 'lg:-mt-20' : ''}`}
            />
          ))}
        </div>
      </div>
      <WorkExperienceBG className="absolute bottom-0" />
    </section>
  );
};

export default Experience;
