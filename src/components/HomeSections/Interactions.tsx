import React from 'react';

import SectionHeader from '@/components/partials/SectionHeader';
import InteractionCard from '@/components/partials/InteractionCard';

const interactions = [
  {
    url: '/videos/share_interaction.mov',
    title: 'Share Interaction',
    description: 'Smooth interaction for sharing contents',
  },
  {
    url: '/videos/send_money_interaction.mov',
    title: 'Send Money Interaction',
    description: 'Smooth transaction for sending money',
  },
  {
    url: '/videos/pull_for_stats_interaction.mov',
    title: 'Pull for Stats',
    description: 'Smooth transaction for pulling to see more stats data',
  },
];

const Interactions = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center"
      id="interactions"
    >
      <div className="w-full py-12 lg:max-w-4xl 2xl:max-w-7xl mx-auto px-8 lg:px-12 ml:px-24 2xl:px-0 relative z-10">
        <SectionHeader
          title="Interactions"
          description="A showcase of smooth and engaging user interface interactions I've crafted to enhance user experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-12">
          {interactions.map((interaction) => (
            <InteractionCard
              data={interaction}
              key={interaction.title}
              isFeatured
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interactions;
