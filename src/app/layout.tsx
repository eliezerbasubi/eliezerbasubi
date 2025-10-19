import React from 'react';
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import { Metadata } from 'next';

import { GET_METATAGS } from '@/lib/queries';
import { IMetaTag } from '@/lib/types';
import { sanityClient, urlFor } from '@/lib/utils/sanity';

import './globals.css';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-mono',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

type Props = {
  children: React.ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await sanityClient.fetch<IMetaTag>(GET_METATAGS);

  const title = {
    template: '%s',
    default: metadata.title,
  };

  const baseUrl = metadata.siteURL ?? 'https://eliezerbasubi.com';
  const description = metadata.description;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords: metadata.keyWords,
    openGraph: {
      title,
      description,
      url: baseUrl,
      images: [urlFor(metadata.coverUrl).url()],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: baseUrl,
    },
    icons: {
      icon: '/icon-512x512.png',
      apple: '/icon-192x192',
      other: {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'msapplication-TileColor': '#2b5797',
    },
  };
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <body
        suppressHydrationWarning
        className={`${ibmPlexMono.variable} ${ibmPlexMono.className} ${ibmPlexSans.variable} ${ibmPlexSans.className} bg-black font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
