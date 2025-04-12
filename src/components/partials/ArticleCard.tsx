/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { cn, formatDate } from '@/lib/helpers';
import { urlFor } from '@/lib/helpers/sanity';
import { IArticle } from '@/lib/types';

type Props = {
  article: IArticle;
  className?: string;
  isFeatured?: boolean;
};

const ArticleCard = ({ article, className = '', isFeatured }: Props) => {
  return (
    <div className={cn('w-full h-full relative group', className)}>
      <Link href={`/articles/${article.slug}`}>
        <div className="h-full border rounded-lg overflow-hidden relative z-[3]">
          <div
            className={cn('w-full h-52 lg:h-64', {
              'h-0 lg:h-0 relative overflow-hidden pb-[100%]': !isFeatured,
            })}
          >
            <Image
              src={urlFor(article.thumbnail).url()}
              alt={article.title}
              className={cn(
                'w-full h-full object-contain transition-transform duration-200 ease-in-out group-hover:scale-105',
                {
                  'absolute inset-0': !isFeatured,
                }
              )}
              width={208}
              height={256}
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
              className={cn(
                'text-sm md:text-[22px] 5xl:text-5xl leading-[28.6px] my-2 md:my-3 font-semibold line-clamp-2',
                {
                  truncate: isFeatured,
                }
              )}
            >
              {article.title}
            </p>
            <p
              className={cn(
                'text-xs md:text-[15px] 5xl:text-3xl leading-[20px] line-clamp-2',
                {
                  truncate: isFeatured,
                }
              )}
            >
              {article.description}
            </p>

            <div className="mt-3 flex justify-between">
              <div>
                <p className="text-xs md:text-sm 5xl:text-3xl font-medium">
                  {article.author}
                </p>
                {article.publishedOn && (
                  <p className="text-xs md:text-sm text-gray-400 tracking-75 mt-1">
                    {formatDate(article.publishedOn, {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                )}
              </div>
              <p className="self-end text-xs md:text-sm text-gray-400 tracking-75">
                {article.readCount} min. read
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1 inset-x-2 z-[2] border-b rounded-lg h-10" />
        <div className="absolute -bottom-2 inset-x-4 z-[1] border-b rounded-lg h-10" />
      </Link>
    </div>
  );
};

export default ArticleCard;
