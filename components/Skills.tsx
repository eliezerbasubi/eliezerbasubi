import React from 'react';
import { SKILLS_MOCKS } from '../mocks';
import SectionTitle from './partials/SectionTitle';
import SkillsCard from './partials/SkillsCard';
import SkillsBackground from './vectors/SkillsBackground';

const Skills = () => {
  return (
    <section className="relative min-h-screen">
      <div className="h-full w-full py-12 xl:py-16 container mx-auto px-8 lg:px-12 ml:px-24 relative z-10">
        <SectionTitle
          title="Skills"
          description="The skills I use to deliver products with a great user experience"
          className="text-white flex flex-col justify-center items-center lg:mb-6"
          barClassName="border-white"
        />
        <div className="my-12 lg:my-0 xl:my-6 flex flex-wrap lg:gap-x-36 lg:grid auto-rows-auto grid-cols-2 space-y-4 md:space-y-8 lg:space-y-0">
          <div className="col-start-1 col-end-1">
            <SkillsCard
              title="Engineering"
              description="As far as building scalable and performant apps is concerned, I am proficient"
              skills={SKILLS_MOCKS.engineering}
            />
          </div>
          <div className="col-start-2 row-start-2">
            <SkillsCard title="Soft Skills" skills={SKILLS_MOCKS.soft} />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 min-h-screen overflow-y-hidden bg-black">
        <SkillsBackground />
      </div>
    </section>
  );
};

export default Skills;
