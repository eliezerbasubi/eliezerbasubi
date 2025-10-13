import React from 'react';

import { cn } from '@/lib/utils';
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
    <div className={cn('size-full mb-12', wrapperClassName)}>
      <div className={detailsClassName}>
        <h2 className="text-sm text-white font-bold mb-4 line-clamp-1">
          {data.title}
        </h2>
      </div>

      <div className="size-full flex justify-center items-center">
        <div
          className={cn(
            'w-full h-0 pb-[100%] [&>video]:object-contain border-[0.5px] border-neutral-700 rounded-lg relative overflow-hidden',
            className
          )}
        >
          <VideoPlayer
            source={data.thumbnail.url}
            style={videoStyle}
            {...(isFeatured ? { autoPlay: true, loop: true } : {})}
          />
        </div>
      </div>
    </div>
  );
};

export default InteractionCard;
