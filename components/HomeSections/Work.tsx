import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../atoms/atom';
import { GET_FEATURED_WORKS } from '../../queries';
import { sanityClient } from '../../sanity';
import { IWork } from '../../typings';
import ArticleCard from '../partials/ArticleCard';
import ProjectCard from '../partials/ProjectCard';
import SectionHeader from '../partials/SectionHeader';
import WorkCard from '../partials/WorkCard';

const Work = () => {
  const [{ works }, setUserInfo] = useRecoilState(userInfoState);
  const fetchFeaturedWorks = useCallback(async () => {
    try {
      const results = (await sanityClient.fetch(GET_FEATURED_WORKS)) as IWork[];

      setUserInfo((currVal) => ({
        ...currVal,
        works: results?.sort((a, b) => {
          if (a.key > b.key) return 1;
          if (a.key < b.key) return -1;
          return 0;
        }),
      }));
    } catch (error) {
      console.log(error);
    }
  }, [setUserInfo]);

  useEffect(() => {
    fetchFeaturedWorks();
  }, [fetchFeaturedWorks]);

  return (
    <section
      className="min-h-screen bg-gray-200 flex flex-col items-center justify-center"
      id="work"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 ml:px-24 py-12">
        <SectionHeader title="I can" className="flex justify-center mb-8" />

        <div className="grid gap-8 md:gap-10 lg:gap-16 grid-cols-1 md:grid-cols-2">
          {works.map((work) => (
            <WorkCard
              key={work._id}
              title={work.title}
              btnText={
                work.key === 'programming'
                  ? 'Explore my work'
                  : 'Read my articles'
              }
              redirectTo={work.key === 'programming' ? 'projects' : 'articles'}
            >
              <div className="flex gap-4 overflow-x-auto">
                {work.project && (
                  <ProjectCard
                    isFeatured
                    className="xl:w-80 5xl:w-96 my-6 xl:my-10"
                    project={work.project}
                  />
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
