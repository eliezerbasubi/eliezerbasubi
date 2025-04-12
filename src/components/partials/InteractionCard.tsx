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
        {/* <video
          src={data.url}
          className="absolute inset-0 w-full h-full bg-white"
          controls
          //   autoPlay
          //   loop
          //   playsInline
        />

        <button className="absolute inset-0 grid place-content-center invisible group-hover:visible">
          <div className="size-8 rounded-full bg-black text-white grid place-content-center">
            <HiPlay />
          </div>
        </button> */}
      </div>

      <div className="p-4">
        <p
          className={`text-sm md:text-[22px] 5xl:text-5xl leading-[28.6px] font-semibold my-1 md:my-3 ${
            isFeatured ? 'truncate' : 'line-clamp-2'
          }`}
        >
          {data.title}
        </p>
        <p
          className={`text-xs md:text-[15px] 5xl:text-3xl leading-[20px] ${
            isFeatured ? 'truncate' : 'line-clamp-3'
          }`}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default InteractionCard;
