import React from 'react';

import { cn } from '@/lib/helpers';
import VideoPlayer from './VideoPlayer';

type Props = {
  data: { title: string; url: string; description: string };
  className?: string;
  isFeatured?: boolean;
  autoPlay?: boolean;
};

const InteractionCard = ({ data, isFeatured, className }: Props) => {
  return (
    <div
      className={cn(
        'w-full h-full border rounded-lg overflow-hidden group',
        className
      )}
    >
      <div
        className={cn('w-full h-40 relative overflow-hidden', {
          'h-0 pb-[100%]': isFeatured,
        })}
      >
        <VideoPlayer
          source={data.url}
          {...(isFeatured ? { autoPlay: true, loop: true } : {})}
        />
      </div>

      <div className="p-4">
        <p
          className={cn(
            'text-sm md:text-[22px] 5xl:text-5xl leading-[28.6px] font-semibold my-1 md:my-3 line-clamp-2',
            {
              'line-clamp-1': isFeatured,
            }
          )}
        >
          {data.title}
        </p>
        <p
          className={cn(
            'text-xs md:text-[15px] 5xl:text-3xl leading-[20px] line-clamp-3',
            {
              'line-clamp-1': isFeatured,
            }
          )}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default InteractionCard;
