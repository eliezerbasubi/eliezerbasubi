import React from 'react';

import { cn } from '@/lib/helpers';
import VideoPlayer from './VideoPlayer';
import { Interaction } from '@/lib/types';

type Props = {
  data: Interaction;
  className?: string;
  wrapperClassName?: string;
  detailsClassName?: string;
  isFeatured?: boolean;
  autoPlay?: boolean;
  videoStyle?: React.CSSProperties;
};

const InteractionCard = ({
  data,
  isFeatured,
  className,
  detailsClassName,
  wrapperClassName,
  videoStyle,
}: Props) => {
  return (
    <div className={cn('w-full h-full', wrapperClassName)}>
      <div
        className={cn(
          'w-full h-0 pb-[100%] [&>video]:object-cover border rounded-lg relative overflow-hidden',
          className
        )}
      >
        <VideoPlayer
          source={data.thumbnail.url}
          style={videoStyle}
          {...(isFeatured ? { autoPlay: true, loop: true } : {})}
        />
      </div>

      <div className={detailsClassName}>
        <p className="text-sm md:text-base text-neutral-700 font-medium 5xl:font-semibold my-1 md:mt-3 line-clamp-1">
          {data.title}
        </p>
        <p className="text-xs md:text-sm line-clamp-2 text-neutral-600">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default InteractionCard;
