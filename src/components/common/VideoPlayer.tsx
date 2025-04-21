'use client';

import { cn } from '@/lib/helpers';
import React, { useRef, useState } from 'react';
import { HiPlay, HiPause } from 'react-icons/hi2';
import { BiFullscreen } from 'react-icons/bi';

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

  const handleFullscreen = () => {
    if (!ref.current) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      ref.current.requestFullscreen();
    }
  };

  return (
    <>
      <video
        ref={ref}
        src={source}
        className={cn('absolute inset-0 w-full h-full bg-white', className)}
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        playsInline
        {...props}
      />

      <div className="absolute inset-0">
        <button
          onClick={handlePlayPause}
          className="h-full w-full grid place-content-center invisible group-hover:visible"
        >
          <div className="size-8 rounded-full bg-black text-white grid place-content-center">
            {playing ? <HiPause /> : <HiPlay />}
          </div>
        </button>

        <button
          onClick={handleFullscreen}
          className="absolute bottom-4 right-4 grid place-content-center invisible group-hover:visible"
        >
          <div className="size-8 rounded-full bg-black text-white grid place-content-center">
            {<BiFullscreen />}
          </div>
        </button>
      </div>
    </>
  );
};

export default VideoPlayer;
