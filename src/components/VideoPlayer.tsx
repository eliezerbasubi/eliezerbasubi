'use client';

import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';
import { HiPlay, HiPause } from 'react-icons/hi2';

type Props = React.ComponentPropsWithoutRef<'video'> & {
  source: string;
};

const VideoPlayer = ({ source, className, ...props }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!ref.current) return;

    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <video
        ref={ref}
        src={source}
        className={cn(
          'absolute inset-0 size-full bg-white object-contain',
          className
        )}
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        playsInline
        {...props}
      />

      <div className="absolute inset-0 group">
        <button
          onClick={handlePlayPause}
          className="h-full w-full grid place-content-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        >
          <div className="size-12 text-2xl rounded-full bg-black/50 text-white grid place-content-center">
            {playing ? <HiPause /> : <HiPlay />}
          </div>
        </button>
      </div>
    </>
  );
};

export default VideoPlayer;
