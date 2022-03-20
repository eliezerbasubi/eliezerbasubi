/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
import { PortableText } from '@portabletext/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { MdTimer } from 'react-icons/md';
import PageHeader from '../../components/partials/PageHeader';
import Socials from '../../components/partials/Socials';
import { formatDate } from '../../helpers';
import { sanityClient } from '../../sanity';
import components from '../../serializers/article';
import { IArticle } from '../../typings';

type Props = {
  article: IArticle;
};

const PostArticle = ({ article }: Props) => {
  console.log(JSON.stringify(article.body, null, 2));

  return (
    <div className="w-full">
      <div className="w-full p-4 lg:p-8 xl:py-8 xl:px-24">
        <PageHeader />
        <div className="w-full md:max-w-xl lg:max-w-3xl mx-auto">
          <div className="min-h-screen py-12">
            <div className="w-full flex justify-between items-center flex-wrap lg:flex-nowrap">
              <h1 className="text-gray-500 text-sm w-full lg:w-auto">
                {formatDate(article.publishedOn as string, {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </h1>
              <div className="flex items-center text-gray-500 space-x-1 w-full lg:w-auto">
                <MdTimer />
                <p className="text-sm">{article.readCount} min read</p>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:leading-10 my-6">
              {article.title}
            </h2>

            <div className="py-4 leading-7">
              <PortableText
                value={article.body as never}
                components={components}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black p-4 lg:p-8 xl:py-8 xl:px-24">
        <div className="md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="flex flex-col justify-center items-center text-white py-4">
            Let&apos;s talk about what we can write together.
            <Socials className="py-5" />
          </div>
          <p className="text-xs text-white">
            &copy;Eliezer W. Basubi. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostArticle;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post"] {
        "slug": slug -> current
    }`;

  const articles = await sanityClient.fetch(query);
  const paths = articles.map((article: { slug: string }) => ({
    paths: {
      slug: article.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
    *[_type == "article" && slug.current == $slug][0] {
        _id,
        _ref,
        title,
        description,
        "slug": slug.current,
        thumbnail,
        projectUrl,
        tags,
        body,
        featured,
        readCount,
        publishedOn,
        "author": author -> name
    }`;

  const article = await sanityClient.fetch(query, { slug: params?.slug });

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
    revalidate: 60,
  };
};
