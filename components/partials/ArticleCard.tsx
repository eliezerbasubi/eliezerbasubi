/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Router from 'next/router';
import { formatDate } from '../../helpers';
import { urlFor } from '../../sanity';
import { IArticle } from '../../typings';

type Props = {
  article: IArticle;
  className?: string;
  isFeatured?: boolean;
};

const ArticleCard = ({ article, className = '', isFeatured }: Props) => {
  const onClick = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    await Router.push(`/articles/${article.slug}`);
  };

  return (
    <div
      className={`w-full h-full relative transition-transform duration-200 ease-in-out hover:scale-y-105 ${className}`}
    >
      <a href={`/articles/${article.slug}`} onClick={onClick}>
        <div className="border rounded-lg overflow-hidden relative z-[3]">
          <div
            className={`w-full h-full ${
              !isFeatured
                ? 'relative overflow-hidden pb-[100%]'
                : 'h-52 lg:h-64'
            }`}
          >
            <img
              src={urlFor(article.thumbnail).url()}
              alt={article.title}
              className={`w-full h-full object-cover ${
                !isFeatured ? 'absolute inset-0' : ''
              }`}
              loading="lazy"
            />
          </div>

          <div className="p-4">
            <div className="flex items-center space-x-1 truncate">
              {article.tags?.map((tag, index) => (
                <p
                  key={index.toFixed()}
                  className="text-blue-500 font-mono text-xs md:text-sm 2xl:text-lg 5xl:text-2xl"
                >
                  #{tag}
                </p>
              ))}
            </div>

            <p
              className={`text-sm md:text-[22px] 5xl:text-5xl leading-[28.6px] my-2 md:my-3 font-semibold ${
                isFeatured ? 'truncate' : 'line-clamp-2'
              }`}
            >
              {article.title}
            </p>
            <p
              className={`text-xs md:text-[15px] 5xl:text-3xl leading-[20px] ${
                isFeatured ? 'truncate' : 'line-clamp-3'
              }`}
            >
              {article.description}
            </p>

            <div className="mt-3 flex justify-between">
              <div>
                <p className="text-xs md:text-sm 5xl:text-3xl font-medium">
                  {article.author}
                </p>
                {article.publishedOn && (
                  <p className="text-xs md:text-sm 2xl:text-xl 5xl:text-2xl text-gray-400 tracking-75 mt-1">
                    {formatDate(article.publishedOn, {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                )}
              </div>
              <p className="self-end text-xs md:text-sm 2xl:text-xl 5xl:text-2xl text-gray-400 tracking-75">
                {article.readCount} min. read
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1 inset-x-2 z-[2] border-b rounded-lg h-10" />
        <div className="absolute -bottom-2 inset-x-4 z-[1] border-b rounded-lg h-10" />
      </a>
    </div>
  );
};

export default ArticleCard;
