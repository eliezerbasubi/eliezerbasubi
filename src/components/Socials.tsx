import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

import { IAbout, TSocial, TSupportedSocials } from '@/lib/types';
import { sanityClient } from '@/lib/utils/sanity';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  items?: Record<TSupportedSocials, string>;
  excludes?: TSupportedSocials[];
};

const SOCIAL_QUERY = `
    *[_type == "about"][0] {
      socials
    }`;

const SOCIAL_ICONS: TSocial = {
  email: {
    icon: <MdAlternateEmail />,
  },
  linkedin: {
    icon: <FaLinkedinIn />,
  },
  twitter: {
    icon: <FaTwitter />,
  },
  github: {
    icon: <FaGithub />,
  },
  telegram: {
    icon: <FaTelegramPlane />,
  },
};

const Socials = async ({ className, items, excludes = [] }: Props) => {
  const result =
    items ??
    (await sanityClient.fetch<{ socials: IAbout['socials'] }>(SOCIAL_QUERY))
      .socials;

  const socialUrls = Object.entries(result).reduce<Partial<TSocial>>(
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
    <div className={cn('flex items-center space-x-2', className)}>
      {Object.entries(socialUrls).map(([key, { icon, url }]) => (
        <a
          href={key === 'email' ? `mailto:${url}` : url}
          target="_blank"
          rel="noopener noreferrer"
          key={key}
          title={key}
          className="[&>svg]:size-3 flex items-center justify-center rounded-full text-foreground hover:text-white hover:border-black/5"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
