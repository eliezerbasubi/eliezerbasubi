import Head from 'next/head';
import React from 'react';
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
      <meta
        property="og:description"
        content="A dynamic Senior Frontend Engineer"
      />
      <meta property="og:image" content={metatag?.coverUrl} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metatag?.siteURL} />
      <meta property="twitter:title" content={metatag?.title} />
      <meta
        property="twitter:description"
        content="A dynamic Senior Frontend Engineer"
      />
      <meta property="twitter:image" content={metatag?.coverUrl}></meta>
    </Head>
  );
};

export default MetaData;
