/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
import { PortableTextComponents } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { urlFor } from '../sanity';

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

        // @ts-ignore
        aspectRatio: width / height,
      }}
    />
  );
};

const components: PortableTextComponents = {
  types: {
    image: ImageComponent,
    code: ({ value = {} }) => {
      const { language, code } = value;

      if (!code) return null;

      return (
        <div
          className="my-8 p-4"
          style={{ backgroundColor: 'rgb(240, 240, 240)' }}
        >
          <SyntaxHighlighter language={language} wrapLongLines>
            {code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
  marks: {
    h1: ({ children }) => (
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{children}</h1>
    ),

    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel="_blank"
          className="text-blue-500"
        >
          {children}
        </a>
      );
    },
  },
};

export default components;
