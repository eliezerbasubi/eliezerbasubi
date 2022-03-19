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
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="keywords" content={metatag?.keyWords} key="keywords" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        name="description"
        content={metatag?.description}
        key="description"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />

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
