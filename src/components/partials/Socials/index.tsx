import React from 'react';

import { IAbout, TSupportedSocials } from '@/lib/types';
import { sanityClient } from '@/lib/helpers/sanity';
import SocialsList from './SocialsList';

type Props = {
  className?: string;
  excludes?: TSupportedSocials[];
};

const SOCIAL_QUERY = `
    *[_type == "about"][0] {
      socials
    }`;

const Socials = async ({ className = 'mt-3', excludes = [] }: Props) => {
  const { socials } = await sanityClient.fetch<{ socials: IAbout['socials'] }>(
    SOCIAL_QUERY
  );

  return (
    <SocialsList socials={socials} excludes={excludes} className={className} />
  );
};

export default Socials;
