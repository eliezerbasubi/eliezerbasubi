import React from 'react';
import { Metadata } from 'next';

import SectionHeader from '@/components/common/SectionHeader';
import InteractionCard from '@/components/common/InteractionCard';
import { sanityClient } from '@/lib/helpers/sanity';
import { Interaction } from '@/lib/types';
import { GET_INTERACTIONS } from '@/lib/queries';

export const metadata: Metadata = {
  title: 'Interactions',
  description:
    'Crafting smooth, high-performance web experiences with snappy interactions, modern animations, and thoughtful UI/UX design',
};

const InteractionsPage = async () => {
  const interactions =
    await sanityClient.fetch<Interaction[]>(GET_INTERACTIONS);

  return (
    <div className="w-full min-h-screen py-12 md:max-w-lg lg:max-w-4xl 2xl:max-w-7xl mx-auto">
      <section
        className="relative flex flex-col items-center justify-center"
        id="interactions"
      >
        <SectionHeader
          title="Interactions"
          description="Explore a series of smooth, high-performance UI animations made with Framer Motion — recreated to inspire and elevate modern digital experiences."
          descriptionClassName="pt-4 lg:leading-6"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {interactions.map((interaction) => (
            <InteractionCard
              data={interaction}
              key={interaction.title}
              isFeatured
              videoStyle={{ clipPath: interaction.clipPath }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default InteractionsPage;
