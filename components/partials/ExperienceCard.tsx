import React from 'react';
import { formatDate } from '../../helpers';
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
        <div className="w-full lg:w-[420px] xl:w-[550px] 5xl:w-[800px] min-h-[237px] bg-white border border-gray-300 rounded-2xl p-4 5xl:p-6 flex-shrink-0">
          <div className="flex justify-between flex-wrap lg:flex-nowrap">
            <div className="flex-initial">
              <p className="text-base md:text-lg 5xl:text-2xl font-medium leading-10 5xl:leading-none tracking-75 5xl:tracking-normal">
                {experience.position}
              </p>
              <p className="text-sm md:text-sm 5xl:text-2xl 5xl:leading-none 5xl:mt-2 leading-[17px] tracking-75 text-black/75">
                {experience.company}
              </p>
            </div>
            <p className="text-xs md:text-sm 5xl:text-2xl text-gray-500 md:leading-10 tracking-75 self-start">
              {formatDate(experience.startDate)} -{' '}
              {experience.active ? 'Now' : formatDate(experience.endDate)}
            </p>
          </div>
          <div className="py-4">
            {experience.duties.map((duty, index) => (
              <div className="flex space-x-2 mb-3" key={index.toFixed()}>
                <div className="w-[9px] h-[9px] 5xl:w-4 5xl:h-4 bg-gray-300 self-start rounded-full flex-shrink-0 mt-1 5xl:mt-2" />
                <p className="text-xs 2xl:text-sm 5xl:text-2xl 5xl:tracking-normal tracking-75 2xl:tracking-wide">
                  {duty}
                </p>
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
