import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import React, { cache } from 'react';
import Link from 'next/link';

import { IArticle, IMetaTag } from '@/lib/types';
import { sanityClient, urlFor } from '@/lib/utils/sanity';
import components from '@/lib/serializers/article';
import { GET_ARTICLE, GET_METATAGS } from '@/lib/queries';

type Props = {
  params: Promise<{ slug: string }>;
};

const getArticle = cache(async (slug: string) => {
  return await sanityClient.fetch<IArticle>(GET_ARTICLE, { slug });
});

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
  const article = await getArticle(slug);
  const metadata = await sanityClient.fetch<IMetaTag>(GET_METATAGS);

  const title = article.title;
  const description = article.description;
  const baseUrl = metadata.siteURL ?? 'https://eliezerbasubi.com';
  const articleUrl = new URL(`/${slug}`, baseUrl).toString();

  return {
    title,
    description,
    keywords: article.keyWords,
    creator: article.author,
    authors: { name: article.author },
    openGraph: {
      title,
      description,
      url: articleUrl,
      images: [urlFor(article.thumbnail).url()],
      type: 'article',
      publishedTime: article.publishedOn,
      authors: article.author,
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [urlFor(article.thumbnail).url()],
      creator: article.author,
    },
    alternates: {
      canonical: articleUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

const PostArticle = async ({ params }: Props) => {
  const slug = (await params).slug;

  const article = await getArticle(slug);

  return (
    <div className="w-full text-white/60">
      <Link href="/" className="font-semibold mb-4">
        {article.author}
      </Link>
      <h2 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold lg:leading-10 my-6">
        {article.title}
      </h2>

      <div className="py-4 leading-7">
        <PortableText value={article.body as never} components={components} />
      </div>
    </div>
  );
};

export default PostArticle;
