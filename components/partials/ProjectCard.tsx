/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { urlFor } from '../../sanity';
import { IProject } from '../../typings';

type Props = {
  project: IProject;
  className?: string;
  isFeatured?: boolean;
};

const ProjectCard = ({ project, isFeatured, className }: Props) => {
  return (
    <div
      className={`w-full h-full border rounded-lg overflow-hidden ${className}`}
    >
      <div className="w-full h-full relative overflow-hidden pb-[100%]">
        <img
          src={urlFor(project.thumbnail).url()}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center overflow-x-auto space-x-1 truncate">
          {project.tags?.map((tag, index) => (
            <p
              key={index.toFixed()}
              className="text-blue-500 font-mono text-xs md:text-sm 2xl:text-lg 5xl:text-2xl"
            >
              #{tag}
            </p>
          ))}
        </div>

        <p
          className={`text-sm md:text-[22px] 5xl:text-5xl leading-[28.6px] font-semibold my-1 md:my-3 ${
            isFeatured ? 'truncate' : 'line-clamp-2'
          }`}
        >
          {project.title}
        </p>
        <p
          className={`text-xs md:text-[15px] 5xl:text-3xl leading-[20px] ${
            isFeatured ? 'truncate' : 'line-clamp-3'
          }`}
        >
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
