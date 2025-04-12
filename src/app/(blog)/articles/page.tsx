import React from 'react';
import { Metadata } from 'next';

import ArticleCard from '@/components/partials/ArticleCard';
import SectionHeader from '@/components/partials/SectionHeader';
import { GET_ARTICLES } from '@/lib/queries';
import { sanityClient } from '@/lib/helpers/sanity';
import { IArticle } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Enjoy my collected articles on different topics around blockchain, web performance, UI/UX design and many more.',
};

const Articles = async () => {
  const articles = await sanityClient.fetch<IArticle[]>(GET_ARTICLES);

  return (
    <div className="w-full lg:max-w-4xl 2xl:max-w-7xl mx-auto">
      <div className="min-h-screen py-12">
        <SectionHeader
          title="Articles"
          description="Enjoy my collected articles on different topics around blockchain, web performance, UI/UX design and many more."
          descriptionClassName="md:text-md 2xl:text-xl 5xl:text-3xl font-normal mt-3 text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
