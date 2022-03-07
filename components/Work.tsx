import React from 'react';
import { FEATURED_WORKS } from '../mocks';
import ArticleCard from './partials/ArticleCard';
import ProjectCard from './partials/ProjectCard';
import SectionTitle from './partials/SectionTitle';
import WorkCard from './partials/WorkCard';

const Work = () => {
  return (
    <section className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="container mx-auto px-8 lg:px-12 ml:px-24 py-12">
        <SectionTitle title="I can" className="flex justify-center mb-8" />

        <div className="grid gap-8 md:gap-10 lg:gap-16 grid-cols-1 md:grid-cols-2">
          <WorkCard title="Design &amp; Build,">
            <div className="xl:w-80 my-6 xl:my-10">
              <ProjectCard project={FEATURED_WORKS.projects[0]} />
            </div>
          </WorkCard>
          <WorkCard title="Write Articles" btnText="Read my articles">
            <div className="xl:w-80 my-6 xl:my-10">
              <ArticleCard isFeatured article={FEATURED_WORKS.articles[0]} />
            </div>
          </WorkCard>
        </div>
      </div>
    </section>
  );
};

export default Work;
