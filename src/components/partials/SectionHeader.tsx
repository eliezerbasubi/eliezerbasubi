import React from 'react';
import { cn } from '@/lib/helpers';

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
  className,
  barClassName,
  titleClassName,
  descriptionClassName,
}: Props) => {
  return (
    <div className={cn('flex flex-col justify-center items-center', className)}>
      <div className="flex items-center space-x-3">
        <div className={cn('w-10 border-2 border-black', barClassName)} />
        <h2
          className={cn(
            'text-3xl ml:text-5xl 2xl:text-6xl 5xl:text-7xl font-medium tracking-75',
            titleClassName
          )}
        >
          {title}
        </h2>
      </div>
      {description && (
        <h3
          className={cn(
            'md:text-md 2xl:text-xl 5xl:text-3xl font-normal mt-3 tracking-75 lg:leading-10 text-center',
            descriptionClassName
          )}
        >
          {description}
        </h3>
      )}
    </div>
  );
};

export default SectionHeader;
