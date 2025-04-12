import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

import { IAbout, TSocial, TSupportedSocials } from '@/lib/types';
import { cn } from '@/lib/helpers';

type Props = {
  className?: string;
  socials: IAbout['socials'];
  excludes?: TSupportedSocials[];
};

const SOCIAL_ICONS: TSocial = {
  email: {
    icon: <MdAlternateEmail className="5xl:h-10 5xl:w-10" />,
  },
  linkedin: {
    icon: <FaLinkedinIn className="5xl:h-10 5xl:w-10" />,
  },
  twitter: {
    icon: <FaTwitter className="5xl:h-10 5xl:w-10" />,
  },
  github: {
    icon: <FaGithub className="5xl:h-10 5xl:w-10" />,
  },
  telegram: {
    icon: <FaTelegramPlane className="5xl:h-10 5xl:w-10" />,
  },
};

const SocialsList = ({ socials, excludes = [], className }: Props) => {
  const socialUrls = Object.entries(socials).reduce<Partial<TSocial>>(
    (acc, [key, url]) => {
      const socialKey = key as TSupportedSocials;
      if (socialKey in SOCIAL_ICONS && !excludes.includes(socialKey)) {
        acc[socialKey] = {
          url,
          icon: SOCIAL_ICONS[socialKey].icon,
        };
      }
      return acc;
    },
    {}
  );

  return (
    <div
      className={cn('flex justify-center items-center space-x-3', className)}
    >
      {Object.entries(socialUrls).map(([key, { icon, url }]) => (
        <a
          href={key === 'email' ? `mailto:${url}` : url}
          target="_blank"
          rel="noopener noreferrer"
          key={key}
          title={key}
          className="w-10 h-10 5xl:w-20 5xl:h-20 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-lg text-gray-500 hover:text-black hover:border-black/5"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialsList;
