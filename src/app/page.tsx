import React from 'react';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';

import { sanityClient } from '@/lib/utils/sanity';
import { GENERIC_QUERY } from '@/lib/queries';
import { IUser } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import Socials from '@/components/Socials';
import InteractionCard from '@/components/InteractionCard';

const Home = async () => {
  const data = await sanityClient.fetch<IUser>(GENERIC_QUERY);

  return (
    <main className="w-full">
      <header className="w-full mb-32">
        <h1 className="text-white font-semibold">{data.about.fullName}</h1>
        <p className="text-white/60">{data.about.jobTitle}</p>

        <Socials className="mt-3" items={data.about.socials} />
      </header>

      <section className="w-full mb-12">
        {data.experience.map((experience) => (
          <div
            key={experience._id}
            className="w-full flex justify-between border-b-[0.5px] border-neutral-500 transition-[padding] ease-in py-4 px-0 hover:px-4 md:hover:px-6 hover:bg-white/10"
          >
            <div className="flex-1">
              <h2 className="text-white text-sm font-medium">
                {experience.company}
              </h2>
              <p className="text-white/60 text-sm font-medium md:font-normal">
                {experience.position}
              </p>
            </div>
            <p className="text-xs font-medium text-white/60">
              {formatDate(experience.startDate, {
                month: 'short',
                year: 'numeric',
              })}{' '}
              -{' '}
              {experience.active
                ? 'Present'
                : formatDate(experience.endDate, {
                    month: 'short',
                    year: 'numeric',
                  })}
            </p>
          </div>
        ))}
      </section>

      <section className="w-full mb-12">
        <h2 className="text-white text-sm font-bold mb-4">Projects</h2>

        {data.projects.map((project) => (
          <Link
            key={project._id}
            target="_blank"
            rel="noopener noreferrer"
            href={project.projectUrl}
            className="w-full flex justify-between cursor-pointer border-b-[0.5px] border-neutral-500 transition-[padding] ease-in py-4 px-0 hover:px-4 md:hover:px-6 hover:bg-white/10"
          >
            <div className="flex-1">
              <h2 className="text-white text-sm font-medium">
                {project.title}
              </h2>
              <h3 className="line-clamp-1 text-white/60 text-sm">
                {project.description}
              </h3>
            </div>
            <HiArrowUpRight className="text-white/60 size-4" />
          </Link>
        ))}
      </section>

      <section className="w-full mb-12">
        <h2 className="text-white text-sm font-bold mb-4">Writing</h2>

        {data.articles.map((article) => (
          <Link
            key={article._id}
            href={`/blog/${article.slug}`}
            className="w-full flex justify-between cursor-pointer border-b-[0.5px] border-neutral-500 transition-[padding] ease-in py-4 px-0 hover:px-4 md:hover:px-6 hover:bg-white/10"
          >
            <div className="flex-1">
              <h2 className="text-white text-sm font-medium">
                {article.title}
              </h2>
              <h3 className="line-clamp-1 text-white/60 text-sm">
                {article.description}
              </h3>
            </div>
            <HiArrowUpRight className="text-white/60 size-4" />
          </Link>
        ))}
      </section>

      <section className="w-full">
        <h2 className="text-white text-sm font-bold mb-8">Interactions</h2>

        <div className="w-full space-y-4">
          {data.interactions.map((interaction) => (
            <InteractionCard
              data={interaction}
              key={interaction._id}
              isFeatured
              // videoStyle={{ clipPath: interaction.clipPath }}
            />
          ))}
        </div>
      </section>

      <footer className="w-full flex items-center justify-between mt-16">
        <p className="text-white text-sm font-semibold">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="ml-2">{data.about.fullName}</span>
        </p>

        <Socials items={data.about.socials} className="[&>a>svg]:size-4" />
      </footer>
    </main>
  );
};

export default Home;
