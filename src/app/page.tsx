import React from 'react';

import Experience from '@/components/HomeSections/Experience';
import Hero from '@/components/HomeSections/Hero';
import Skills from '@/components/HomeSections/Skills';
import Work from '@/components/HomeSections/Work';
import Contact from '@/components/HomeSections/Contact';
import { sanityClient } from '@/lib/helpers/sanity';
import { GENERIC_QUERY } from '@/lib/queries';
import { IUser } from '@/lib/types';
// import Interactions from '@/components/HomeSections/Interactions';

const Home = async () => {
  const data = await sanityClient.fetch<IUser>(GENERIC_QUERY);

  return (
    <div className="w-full">
      <Hero about={data.about} />
      <Experience experiences={data.experience} />
      <Skills skills={data.skills} />
      {/* <Interactions /> */}
      <Work />
      <Contact socials={data.about.socials} />
    </div>
  );
};

export default Home;
