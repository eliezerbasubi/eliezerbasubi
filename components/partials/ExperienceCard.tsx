import React from 'react';
import { IExperience, TLineDirection } from '../../typings';

type Props = {
  experience: IExperience;
  arrowPosition?: TLineDirection;
  className?: string;
};

const ExperienceCard = ({ experience, arrowPosition, className }: Props) => {
  const isLeft = arrowPosition === 'left';

  return (
    <div className={`${isLeft ? 'flex justify-end' : ''} ${className}`}>
      <div className="relative flex md:w-full lg:w-1/2">
        {arrowPosition === 'left' && (
          <div className="w-full h-[2px] bg-gray-300 lg:mt-24 hidden lg:block" />
        )}
        <div className="w-full lg:w-[420px] xl:w-[465px] min-h-[237px] bg-white border border-gray-300 rounded-2xl p-4 flex-shrink-0">
          <div className="flex justify-between flex-wrap lg:flex-nowrap">
            <div className="flex-initial">
              <p className="text-base md:text-lg font-medium leading-10 tracking-75">
                {experience.position}
              </p>
              <p className="text-sm md:text-sm leading-[17px] tracking-75 text-black/75">
                {experience.company}
              </p>
            </div>
            <p className="text-xs md:text-sm text-gray-500 md:leading-10 tracking-75 self-start">
              {experience.startDate} - {experience.endDate}
            </p>
          </div>
          <div className="py-4">
            {experience.duties.map((duty, index) => (
              <div className="flex space-x-2 mb-3" key={index.toFixed()}>
                <div className="w-[9px] h-[9px] bg-gray-300 self-start rounded-full flex-shrink-0 mt-1" />
                <p className="text-xs tracking-75 font-normal">{duty}</p>
              </div>
            ))}
          </div>
        </div>
        {arrowPosition === 'right' && (
          <div className="w-full h-[2px] bg-gray-300 lg:mt-24 hidden lg:block" />
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
