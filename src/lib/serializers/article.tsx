/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';
import { getImageDimensions } from '@sanity/asset-utils';
import { codeToHtml } from 'shiki';

import { urlFor } from '@/lib/helpers/sanity';
import CopyButton from '@/components/common/CopyButton';

const ImageComponent = ({
  value,
  isInline,
}: {
  isInline: boolean;
  value: any;
}) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlFor()
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        display: isInline ? 'inline-block' : 'block',
        aspectRatio: width / height,
      }}
      className="my-4 mb-8"
    />
  );
};

const components: PortableTextComponents = {
  types: {
    image: ImageComponent,
    code: async ({ value = {} }) => {
      const { language, code } = value;

      if (!code) return null;

      const html = await codeToHtml(code, {
        lang: language,
        theme: 'dark-plus',
      });

      return (
        <div
          className="my-8 p-4 text-sm rounded-lg relative group overflow-auto"
          style={{
            backgroundColor: '#1e1e1e',
          }}
        >
          <div
            className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ right: 8, top: 8 }}
          >
            <CopyButton content={html} />
          </div>
          <div
            className="code-block"
            dangerouslySetInnerHTML={{ __html: html }}
            style={{
              maxHeight: 520,
              overflow: 'auto',
            }}
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{children}</h1>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg md:text-xl lg:text-2xl font-semibold my-3">
        {children}
      </h5>
    ),
    normal: ({ children }) => <p className="text-base mt-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{ marginLeft: '2rem' }}>{children}</ul>
    ),
    number: ({ children }) => <ol className="mt-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="my-4" style={{ listStyleType: 'disc' }}>
        {children}
      </li>
    ),
  },
  unknownListItem: ({ children }) => (
    <li className="my-4" style={{ listStyleType: 'disclosure-closed' }}>
      {children}
    </li>
  ),
  marks: {
    h1: ({ children }) => (
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{children}</h1>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg md:text-xl lg:text-2xl font-semibold my-3">
        {children}
      </h5>
    ),

    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    code: ({ children }) => (
      <span
        className="font-mono"
        style={{ backgroundColor: 'rgb(240, 240, 240)', padding: '0 0.5rem' }}
      >
        {children}
      </span>
    ),

    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          rel="_blank"
          className="text-blue-500"
        >
          {children}
        </Link>
      );
    },
  },
};

export default components;
