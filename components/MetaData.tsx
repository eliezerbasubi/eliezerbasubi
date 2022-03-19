import Head from 'next/head';
import React from 'react';
import { IAbout } from '../typings';

type Props = {
  about: IAbout;
};

const MetaData = ({ about }: Props) => {
  return (
    <Head>
      <title>{about?.fullName}</title>
      <meta
        name="description"
        content="Fullstack Software Developer, frontend-heavy"
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
    </Head>
  );
};

export default MetaData;
