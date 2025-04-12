import React from 'react';

import PageHeader from '@/components/partials/PageHeader';
import Socials from '@/components/partials/Socials';
import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: '%s | Eliezer W. Basubi',
    default: 'Eliezer W. Basubi',
  },
};

const BlogLayout = ({ children }: Props) => {
  return (
    <div className="w-full">
      <div className="w-full p-4 lg:p-8 xl:py-8 xl:px-24">
        <PageHeader />
        {children}
      </div>
      <div className="w-full bg-black p-4 lg:p-8 xl:py-8 xl:px-24">
        <div className="flex flex-col justify-center items-center text-white py-4">
          Let&apos;s build something together.
          <Socials className="py-5" />
        </div>
        <p className="text-xs text-white">
          &copy;Eliezer W. Basubi. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default BlogLayout;
