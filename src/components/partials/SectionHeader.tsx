import React from 'react';

type Props = {
  title: string;
  description?: string;
  className?: string;
  barClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const SectionHeader = ({
  title,
  description,
  className = 'flex flex-col justify-center items-center',
  barClassName = 'border-black',
  titleClassName = 'text-3xl ml:text-5xl 2xl:text-6xl 5xl:text-7xl font-medium tracking-75',
  descriptionClassName = 'md:text-md 2xl:text-xl 5xl:text-3xl font-normal mt-3 tracking-75 lg:leading-10 text-center',
}: Props) => {
  return (
    <div className={className}>
      <div className="flex items-center space-x-3">
        <div className={`w-10 border-2 ${barClassName}`} />
        <h2 className={titleClassName}>{title}</h2>
      </div>
      {description && <h3 className={descriptionClassName}>{description}</h3>}
    </div>
  );
};

export default SectionHeader;
