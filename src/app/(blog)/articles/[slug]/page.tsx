import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import React from 'react';
import { MdTimer } from 'react-icons/md';

import { formatDate } from '@/lib/helpers';
import { IArticle } from '@/lib/types';
import { sanityClient, urlFor } from '@/lib/helpers/sanity';
import components from '@/lib/serializers/article';
import { GET_ARTICLE } from '@/lib/queries';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const query = `*[_type == "post"] {
      "slug": slug -> current
  }`;
  const articles = await sanityClient.fetch<IArticle[]>(query);

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const article = await sanityClient.fetch<IArticle>(GET_ARTICLE, { slug });

  const title = article.title;
  const description = article.description;

  return {
    title,
    description,
    keywords: article.keyWords,
    openGraph: {
      title,
      description,
      url: `/${slug}`,
      images: [urlFor(article.thumbnail).url()],
      type: 'website',
    },
  };
}

const PostArticle = async ({ params }: Props) => {
  const article = await sanityClient.fetch(GET_ARTICLE, {
    slug: (await params).slug,
  });

  return (
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

        <div className="py-4">
          <PortableText value={article.body as never} components={components} />
        </div>
      </div>
    </div>
  );
};

export default PostArticle;
