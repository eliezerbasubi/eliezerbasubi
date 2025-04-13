import React from 'react';

import SectionHeader from '@/components/partials/SectionHeader';
import InteractionCard from '@/components/partials/InteractionCard';
import { INTERACTIONS } from '@/lib/helpers/constants';

const Interactions = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center"
      id="interactions"
    >
      <SectionHeader
        title="Interactions"
        description="A showcase of smooth and engaging user interface interactions I've crafted to enhance user experience."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {INTERACTIONS.map((interaction) => (
          <InteractionCard
            data={interaction}
            key={interaction.title}
            isFeatured
          />
        ))}
      </div>
    </section>
  );
};

export default Interactions;
