import React from 'react';

import ExperienceCard from '@/components/partials/ExperienceCard';
import SectionHeader from '@/components/partials/SectionHeader';
import WorkExperienceBG from '@/components/vectors/WorkExperienceBG';
import { IExperience } from '@/lib/types';

type Props = {
  experiences: IExperience[];
};

const Experience = ({ experiences }: Props) => {
  return (
    <section
      className="min-h-screen relative flex flex-col items-center justify-center"
      id="experience"
    >
      <div className="w-full 2xl:max-w-7xl mx-auto py-12 px-8 lg:px-12 ml:px-24 2xl:px-0 relative z-10">
        <SectionHeader
          title="Experience"
          description="My track record of creating seamless and scalable user interfaces for successful companies, so far!"
        />

        <div className="my-12 relative 5xl:px-56">
          <div className="h-full w-[1px] bg-gray-300 absolute left-2/4 bottom-0 top-0" />
          {experiences.map((experience, index) => (
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
