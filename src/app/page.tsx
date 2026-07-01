import React from 'react';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';

import { sanityClient } from '@/lib/utils/sanity';
import { GENERIC_QUERY } from '@/lib/queries';
import { IUser } from '@/lib/types';
import { formatDate } from '@/lib/utils';
// import Socials from '@/components/Socials';
import InteractionCard from '@/components/InteractionCard';

const Home = async () => {
  const data = await sanityClient.fetch<IUser>(GENERIC_QUERY);

  return (
    <main className="w-full max-w-[700px] mx-auto px-6 py-12 sm:py-32 md:py-16">
      <header className="w-full mb-12 md:mb-24">
        <h1 className="text-white font-semibold">Sam Henry</h1>
        <p className="text-foreground font-medium">{data.about.jobTitle}</p>

        {/* <Socials className="mt-3" items={data.about.socials} /> */}
      </header>

      <section className="w-full mb-12">
        {data.experience.map((experience) => (
          <div
            key={experience._id}
            className="w-full flex justify-between border-b-[0.5px] border-neutral-700 transition-[padding] ease-in py-4"
          >
            <div className="flex-1">
              <h2 className="text-white text-sm font-medium">
                {experience.company}
              </h2>
              <p className="text-foreground text-sm font-medium mt-1">
                {experience.position}
              </p>
            </div>
            <p className="text-xs font-medium text-foreground">
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
        <h2 className="text-white text-sm font-extrabold mb-4">Projects</h2>

        {data.projects
          .filter((project) => project.title !== 'OnDuka')
          .map((project) => (
            <Link
              key={project._id}
              target="_blank"
              rel="noopener noreferrer"
              href={project.projectUrl}
              className="w-full flex justify-between cursor-pointer border-b-[0.5px] border-neutral-700 transition-all ease-in py-4 px-0 hover:px-1 md:hover:px-2 hover:bg-white/10"
            >
              <div className="flex-1">
                <h2 className="text-white text-sm font-medium">
                  {project.title}
                </h2>
                <h3 className="line-clamp-1 text-foreground text-sm font-medium mt-1">
                  {project.description}
                </h3>
              </div>
              <HiArrowUpRight className="text-foreground size-4" />
            </Link>
          ))}
      </section>

      <section className="w-full mb-12">
        <h2 className="text-white text-sm font-extrabold mb-4">Writing</h2>

        {data.articles.map((article) => (
          <Link
            key={article._id}
            href={`/blog/${article.slug}`}
            className="w-full flex justify-between cursor-pointer border-b-[0.5px] border-neutral-700 transition-all ease-in py-4 px-0 hover:px-1 md:hover:px-2 hover:bg-white/10"
          >
            <div className="flex-1">
              <h2 className="text-white text-sm font-medium">
                {article.title}
              </h2>
              <h3 className="line-clamp-1 text-foreground text-sm font-medium mt-1">
                {article.description}
              </h3>
            </div>
            <HiArrowUpRight className="text-foreground size-4" />
          </Link>
        ))}
      </section>

      <section className="w-full">
        <Link
          href="/interactions"
          className="group flex items-center gap-x-2 mb-8 text-white hover:text-white/90"
        >
          <h2 className="text-sm font-extrabold">Interactions</h2>
          <HiArrowUpRight className="size-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out" />
        </Link>

        <div className="w-full md:gap-x-8 gap-y-8 grid md:grid-cols-2">
          {data.interactions.map((interaction) => (
            <InteractionCard
              data={interaction}
              key={interaction._id}
              isFeatured
              videoStyle={{ clipPath: interaction.clipPath }}
            />
          ))}
        </div>
      </section>

      {/* <footer className="w-full flex items-center justify-between mt-16">
        <p className="text-white text-sm font-semibold">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="ml-2">{data.about.fullName}</span>
        </p>

        <Socials items={data.about.socials} className="[&>a>svg]:size-4" />
      </footer> */}
    </main>
  );
};

export default Home;
