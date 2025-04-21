import React from 'react';

import Experience from '@/components/Home/Experience';
import Hero from '@/components/Home/Hero';
import Skills from '@/components/Home/Skills';
import Work from '@/components/Home/Work';
import Contact from '@/components/Home/Contact';
import { sanityClient } from '@/lib/helpers/sanity';
import { GENERIC_QUERY } from '@/lib/queries';
import { IUser } from '@/lib/types';

const Home = async () => {
  const data = await sanityClient.fetch<IUser>(GENERIC_QUERY);

  return (
    <div className="w-full">
      <Hero about={data.about} />
      <Experience experiences={data.experience} />
      <Skills skills={data.skills} />
      <Work />
      <Contact socials={data.about.socials} />
    </div>
  );
};

export default Home;
