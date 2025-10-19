import React from 'react';

import { cn } from '@/lib/utils';
import { Interaction } from '@/lib/types';
import VideoPlayer from './VideoPlayer';

type Props = {
  data: Interaction;
  className?: string;
  isFeatured?: boolean;
  autoPlay?: boolean;
  videoStyle?: React.CSSProperties;
};

const InteractionCard = ({
  data,
  isFeatured,
  className,
  videoStyle,
}: Props) => {
  return (
    <div className={cn('size-full', className)}>
      <div className="relative w-full pt-[100%] bg-white overflow-hidden rounded-2xl ring-6 ring-white/20">
        <VideoPlayer
          source={data.thumbnail.url}
          style={videoStyle}
          {...(isFeatured ? { autoPlay: true, loop: true } : {})}
        />
      </div>
      <h2 className="text-sm text-neutral-300 font-bold mt-4 line-clamp-1">
        {data.title}
      </h2>
    </div>
  );
};

export default InteractionCard;
