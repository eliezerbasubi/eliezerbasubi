import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { BsGlobe2 } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../atoms/atom';
import { TSocial, TSupportedSocials } from '../../typings';

type Props = {
  className?: string;
  socials?: TSocial;
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

const Socials = ({ className = 'mt-3', socials, excludes = [] }: Props) => {
  const { about } = useRecoilValue(userInfoState);

  const socialUrls = Object.keys({
    ...(socials || about.socials || {}),
  }).reduce(
    (social: Record<string, { url: string; icon: React.ReactNode }>, key) => {
      if (key === '_type') {
        return {};
      }
      social[key] = {
        url: about?.socials?.[key as TSupportedSocials] || '/',
        icon: SOCIAL_ICONS[key as TSupportedSocials]?.icon || (
          <BsGlobe2 className="5xl:h-10 5xl:w-10" />
        ),
      };
      return social;
    },
    {}
  );

  return (
    <div className={`flex justify-center items-center space-x-3 ${className}`}>
      {Object.entries(socialUrls)
        .filter(([key]) => !excludes.includes(key as TSupportedSocials))
        .map(([key, { icon, url }]) => (
          <a
            href={key === 'email' ? `mailto:${url}` : url}
            target="_blank"
            rel="noopener noreferrer"
            key={key}
            className="w-10 h-10 5xl:w-20 5xl:h-20 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-lg text-gray-500 hover:text-black hover:border-black/5"
          >
            {icon}
          </a>
        ))}
    </div>
  );
};

export default Socials;
