import React from 'react';

type Props = {
  title: string;
  description?: string;
  className?: string;
  barClassName?: string;
};

const SectionTitle = ({
  title,
  description,
  className = 'flex flex-col justify-center items-center',
  barClassName = 'border-black',
}: Props) => {
  return (
    <div className={className}>
      <div className="flex items-center space-x-3">
        <div className={`w-10 border-2 ${barClassName}`} />
        <h2 className="text-3xl ml:text-5xl 2xl:text-6xl font-medium tracking-75">
          {title}
        </h2>
      </div>
      {description && (
        <h3 className="md:text-md 2xl:text-xl font-normal mt-3 tracking-75 lg:leading-10 text-center">
          {description}
        </h3>
      )}
    </div>
  );
};

export default SectionTitle;
