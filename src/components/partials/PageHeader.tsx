import Link from 'next/link';
import React from 'react';

import { PAGE_HEADER_MENUS } from '@/lib/helpers/constants';

import DrawerMenu from './DrawerMenu';

type Props = {
  title?: string;
};

const PageHeader = ({ title = 'Eliezer Basubi' }: Props) => {
  return (
    <div className="py-4 px-0 md:px-4 flex justify-between items-center w-full md:max-w-2xl lg:max-w-5xl mx-auto">
      <Link href="/">
        <div className="text-xl md:text-2xl font-extrabold font-mono hover:text-black/60">
          {title}
        </div>
      </Link>

      <DrawerMenu
        className="flex md:hidden text-black p-0"
        items={PAGE_HEADER_MENUS}
      />
      <div className="hidden md:flex items-center space-x-4 xl:space-x-6">
        {PAGE_HEADER_MENUS.map((item) => (
          <Link key={`dsk_${item.href}`} href={item.href}>
            <div className="flex items-center space-x-1 group cursor-pointer text-slate-800 hover:text-black transition-colors duration-500">
              <div className="w-5 h-0.5 bg-gray-300 group-hover:bg-black transition-transform duration-500 translate-y-0 group-hover:translate-y-2" />
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PageHeader;
