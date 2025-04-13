import React from 'react';
import { Metadata } from 'next';

import ProjectCard from '@/components/partials/ProjectCard';
import SectionHeader from '@/components/partials/SectionHeader';
import { GET_PROJECTS } from '@/lib/queries';
import { sanityClient } from '@/lib/helpers/sanity';
import { IProject } from '@/lib/types';
import Interactions from '@/components/partials/Interactions';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Enjoy my cool projects on different topics around blockchain, web performance, UI/UX design and many more.',
};

const Projects = async () => {
  const projects = await sanityClient.fetch<IProject[]>(GET_PROJECTS);

  return (
    <div className="w-full min-h-screen py-12 md:max-w-lg lg:max-w-4xl 2xl:max-w-7xl mx-auto">
      <Interactions />
      <SectionHeader
        title="Projects"
        description="Some of the projects I have worked on!"
        descriptionClassName="md:text-md 2xl:text-xl 5xl:text-3xl font-normal mt-4 text-center"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
