import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { TSocial, TSupportedSocials } from '../../typings';

type Props = {
  className?: string;
  socials?: TSocial;
  excludes?: TSupportedSocials[];
};

const DEFAULT_SOCIALS: TSocial = {
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

const Socials = ({
  className = 'mt-3',
  socials = DEFAULT_SOCIALS,
  excludes = [],
}: Props) => {
  return (
    <div className={`flex justify-center items-center space-x-3 ${className}`}>
      {Object.entries(socials)
        .filter(([key]) => !excludes.includes(key as TSupportedSocials))
        .map(([key, { icon }]) => (
          <div
            key={key}
            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-lg text-gray-500 hover:text-black hover:border-black/5"
          >
            {icon}
          </div>
        ))}
    </div>
  );
};

export default Socials;
