import React from 'react';

import SectionHeader from '@/components/common/SectionHeader';
import SkillsCard from '@/components/common/SkillsCard';
import SkillsBackground from '@/components/vectors/SkillsBackground';
import { ISkills } from '@/lib/types';

type Props = {
  skills: ISkills[];
};

const Skills = ({ skills }: Props) => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center"
      id="skills"
    >
      <div className="h-full w-full 2xl:max-w-7xl mx-auto py-12 xl:py-16 px-8 lg:px-12 ml:px-24 2xl:px-0 relative z-10">
        <SectionHeader
          title="Skills"
          description="The skills I use to deliver products with a great user experience"
          className="text-white flex flex-col justify-center items-center lg:mb-6"
          barClassName="border-white"
        />
        <div className="my-12 lg:my-0 xl:my-6 lg:gap-x-36 grid auto-rows-auto lg:grid-cols-2 space-y-4 md:space-y-8 lg:space-y-0">
          {skills.map((skill, index) => (
            <div
              key={skill._id}
              className={
                index % 2 === 0
                  ? 'col-start-1 col-end-1'
                  : 'md:col-start-2 row-start-2'
              }
            >
              <SkillsCard
                title={skill.title}
                description={skill.description}
                skills={skill.skills}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 min-h-screen overflow-y-hidden bg-black">
        <SkillsBackground />
      </div>
    </section>
  );
};

export default Skills;
