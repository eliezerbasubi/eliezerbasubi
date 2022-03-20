import React from 'react';
import MetaData from '../../components/MetaData';
import ArticleCard from '../../components/partials/ArticleCard';
import PageHeader from '../../components/partials/PageHeader';
import SectionHeader from '../../components/partials/SectionHeader';
import Socials from '../../components/partials/Socials';
import { GET_ARTICLES, GET_METATAGS } from '../../queries';
import { sanityClient } from '../../sanity';
import { IArticle, IMetaTag } from '../../typings';

type Props = {
  articles: IArticle[];
  metatag?: IMetaTag;
};

const Articles = ({ articles, metatag }: Props) => {
  const metatags = {
    ...metatag,
    title: 'Articles',
    description:
      'Enjoy my collected articles on different topics around blockchain, web performance, UI/UX design and many more.',
  };

  return (
    <>
      <MetaData metatag={metatags as IMetaTag} />
      <div className="w-full">
        <div className="w-full p-4 lg:p-8 xl:py-8 xl:px-24">
          <PageHeader />
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
        </div>
        <div className="w-full bg-black p-4 lg:p-8 xl:py-8 xl:px-24">
          <div className="flex flex-col justify-center items-center text-white py-4">
            Let&apos;s talk about what we can write together.
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

export const getServerSideProps = async () => {
  const [metatag, articles] = await Promise.all([
    sanityClient.fetch(GET_METATAGS),
    sanityClient.fetch(GET_ARTICLES),
  ]);

  return {
    props: {
      articles,
      metatag,
    },
  };
};

export default Articles;
