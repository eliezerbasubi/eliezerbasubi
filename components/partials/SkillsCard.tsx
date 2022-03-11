import React from 'react';

type Props = {
  title: string;
  description?: string;
  skills: string[];
};

const SkillsCard = ({ title, description, skills }: Props) => {
  return (
    <div className="w-full text-white">
      <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-5xl 5xl:text-6xl font-medium tracking-75 leading-10">
        {title}
      </p>
      {description && (
        <p className="text-sm md:text-sm 2xl:text-xl 5xl:text-4xl tracking-75 leading-4 my-2 5xl:my-4">
          {description}
        </p>
      )}

      <div className="ml-8 md:ml-10 xl:ml-12 my-3">
        {skills.map((skill, index) => (
          <div key={index.toFixed()} className="flex space-x-3 mb-2 5xl:mb-3">
            <div className="w-[42px] h-[9px] bg-[#2E2D2D] flex-shrink-0 mt-1 5xl:mt-2" />
            <div className="text-sm md:text-sm 2xl:text-xl 5xl:text-3xl tracking-75 leading-5">
              {skill}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
