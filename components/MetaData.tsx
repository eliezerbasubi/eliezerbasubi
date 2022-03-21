import Head from 'next/head';
import React from 'react';
import { urlFor } from '../sanity';
import { IMetaTag } from '../typings';

type Props = {
  metatag: IMetaTag;
};

const MetaData = ({ metatag }: Props) => {
  return (
    <Head>
      <title>{metatag?.title}</title>
      <meta name="keywords" content={metatag?.keyWords} key="keywords" />

      <meta
        name="description"
        content={metatag?.description}
        key="description"
      />

      {/* <!-- Primary Meta Tags --> */}

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metatag?.siteURL} />
      <meta property="og:title" content={metatag?.title} />
      <meta property="og:description" content={metatag?.description} />
      <meta property="og:image" content={urlFor(metatag?.coverUrl).url()} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metatag?.siteURL} />
      <meta property="twitter:title" content={metatag?.title} />
      <meta property="twitter:description" content={metatag?.description} />
      <meta
        property="twitter:image"
        content={urlFor(metatag?.coverUrl).url()}
      />
    </Head>
  );
};

export default MetaData;
