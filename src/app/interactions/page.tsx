import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { HiArrowUpLeft } from 'react-icons/hi2';

import { Interaction } from '@/lib/types';
import { GET_INTERACTIONS } from '@/lib/queries';
import { sanityClient } from '@/lib/utils/sanity';
import InteractionCard from '@/components/InteractionCard';

export const metadata: Metadata = {
  title: 'Interactions',
  description:
    'Crafting smooth, high-performance web experiences with snappy interactions, modern animations, and thoughtful UI/UX design',
};

const InteractionsPage = async () => {
  const interactions =
    await sanityClient.fetch<Interaction[]>(GET_INTERACTIONS);

  return (
    <section
      id="interactios"
      className="w-full max-w-4xl mx-auto px-6 py-12 sm:py-32 md:py-16"
    >
      <div className="w-full">
        <Link
          href="/"
          className="flex items-center font-medium mb-4 text-sm md:text-base gap-x-2"
        >
          <HiArrowUpLeft className="size-3 md:size-4 stroke-2 text-white/50 -ml-5 md:-ml-5.5" />
          <span className="text-white/60">Home</span>
        </Link>
        <h1 className="text-xl font-semibold text-white">Interactions</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        {interactions.map((interaction) => (
          <InteractionCard
            data={interaction}
            key={interaction.title}
            isFeatured
            videoStyle={{ clipPath: interaction.clipPath }}
            className="mb-4"
          />
        ))}
      </div>
    </section>
  );
};

export default InteractionsPage;
