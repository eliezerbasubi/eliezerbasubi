import React from 'react';
import SectionTitle from './partials/SectionTitle';
import SkillsBackground from './vectors/SkillsBackground';

const Skills = () => {
  return (
    <div className="relative min-h-screen">
      <div className="h-full w-full py-12 container mx-auto px-8 lg:px-12 ml:px-24 relative z-10">
        <SectionTitle
          title="Skills"
          description="The skills I use to deliver products with a great user experience"
          className="text-white flex flex-col justify-center items-center"
          barClassName="border-white"
        />
      </div>
      <div className="absolute inset-0">
        <SkillsBackground />
      </div>
    </div>
  );
};

export default Skills;
