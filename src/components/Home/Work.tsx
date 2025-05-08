import React from 'react';

import { GET_FEATURED_WORKS } from '@/lib/queries';
import { Interaction, IWork } from '@/lib/types';
import ArticleCard from '@/components/common/ArticleCard';
import SectionHeader from '@/components/common/SectionHeader';
import WorkCard from '@/components/common/WorkCard';
import { sanityClient } from '@/lib/helpers/sanity';
import InteractionCard from '@/components/common/InteractionCard';

const Work = async () => {
  const data = await sanityClient.fetch<IWork[]>(GET_FEATURED_WORKS);

  return (
    <section
      className="min-h-screen bg-gray-200 flex flex-col items-center justify-center"
      id="work"
    >
      <div className="w-full 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 ml:px-24 2xl:px-0 py-12">
        <SectionHeader title="I can" className="flex justify-center mb-8" />

        <div className="grid gap-8 md:gap-10 lg:gap-16 grid-cols-1 md:grid-cols-2">
          {data
            .sort((a, b) => {
              if (a.key > b.key) return 1;
              if (a.key < b.key) return -1;
              return 0;
            })
            .map((work) => (
              <WorkCard
                key={work._id}
                title={work.title}
                btnText={
                  work.key === 'programming'
                    ? 'Explore my work'
                    : 'Read my articles'
                }
                redirectTo={
                  work.key === 'programming' ? 'interactions' : 'blog'
                }
              >
                <div className="flex gap-4 overflow-x-auto">
                  {work.project && (
                    <InteractionCard
                      data={work.project as Interaction}
                      wrapperClassName="xl:w-80 5xl:w-96 my-6 xl:my-10 border rounded-lg"
                      className="border-none"
                      detailsClassName="p-4"
                      isFeatured
                      videoStyle={{
                        clipPath: (work.project as Interaction).clipPath,
                      }}
                    />
                    // <ProjectCard
                    //   isFeatured
                    //   className="xl:w-80 5xl:w-96 my-6 xl:my-10"
                    //   project={work.project}
                    // />
                  )}

                  {work.article && (
                    <ArticleCard
                      className="xl:w-80 5xl:w-96 my-6 xl:my-10 relative"
                      isFeatured
                      article={work.article}
                    />
                  )}
                </div>
              </WorkCard>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
