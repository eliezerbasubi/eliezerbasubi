import React from 'react';
import { FEATURED_WORKS } from '../../mocks';
import ArticleCard from '../partials/ArticleCard';
import ProjectCard from '../partials/ProjectCard';
import SectionHeader from '../partials/SectionHeader';
import WorkCard from '../partials/WorkCard';

const Work = () => {
  return (
    <section
      className="min-h-screen bg-gray-200 flex flex-col items-center justify-center"
      id="work"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 ml:px-24 py-12">
        <SectionHeader title="I can" className="flex justify-center mb-8" />

        <div className="grid gap-8 md:gap-10 lg:gap-16 grid-cols-1 md:grid-cols-2">
          <WorkCard title="Design &amp; Build,">
            <div className="flex gap-4 overflow-x-auto">
              {FEATURED_WORKS.projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  isFeatured
                  className="xl:w-80 5xl:w-96 my-6 xl:my-10"
                  project={FEATURED_WORKS.projects[0]}
                />
              ))}
            </div>
          </WorkCard>
          <WorkCard title="Write Articles" btnText="Read my articles">
            <div className="flex w-full gap-4 overflow-x-auto">
              {FEATURED_WORKS.articles.map((article) => (
                <ArticleCard
                  className="xl:w-80 5xl:w-96 my-6 xl:my-10 relative"
                  key={article.id}
                  isFeatured
                  article={article}
                />
              ))}
            </div>
          </WorkCard>
        </div>
      </div>
    </section>
  );
};

export default Work;
