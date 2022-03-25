import { GetServerSideProps } from 'next';
import React from 'react';
import MetaData from '../../components/MetaData';
import PageHeader from '../../components/partials/PageHeader';
import ProjectCard from '../../components/partials/ProjectCard';
import SectionHeader from '../../components/partials/SectionHeader';
import Socials from '../../components/partials/Socials';
import { GET_METATAGS, GET_PROJECTS } from '../../queries';
import { sanityClient } from '../../sanity';
import { IMetaTag, IProject } from '../../typings';

type Props = {
  projects: IProject[];
  metatag: IMetaTag;
};

const Projects = ({ metatag, projects }: Props) => {
  return (
    <>
      <MetaData metatag={metatag} />
      <div className="w-full">
        <div className="w-full p-4 lg:p-8 xl:py-8 xl:px-24">
          <PageHeader />
          <div className="w-full lg:max-w-4xl 2xl:max-w-7xl mx-auto">
            <div className="min-h-screen py-12">
              <SectionHeader
                title="Projects"
                description="Enjoy my collected articles on different topics around blockchain, web performance, UI/UX design and many more."
                descriptionClassName="md:text-md 2xl:text-xl 5xl:text-3xl font-normal mt-4 text-center"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {projects.map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-black p-4 lg:p-8 xl:py-8 xl:px-24">
          <div className="flex flex-col justify-center items-center text-white py-4">
            Let&apos;s build something together.
            <Socials className="py-5" />
          </div>
          <p className="text-xs text-white">
            &copy;Eliezer W. Basubi. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;

export const getServerSideProps: GetServerSideProps = async () => {
  const [metatag, projects] = await Promise.all([
    sanityClient.fetch(GET_METATAGS),
    sanityClient.fetch(GET_PROJECTS),
  ]);

  return {
    props: {
      metatag,
      projects,
    },
  };
};
