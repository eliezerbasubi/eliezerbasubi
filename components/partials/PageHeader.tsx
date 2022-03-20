import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { PAGE_HEADER_MENUS } from '../../helpers/constants';
import DrawerMenu from './DrawerMenu';

type Props = {
  title?: string;
};

const PageHeader = ({ title = 'Eliezer Basubi' }: Props) => {
  return (
    <div className="py-4 px-3 md:px-4 flex justify-between items-center w-full md:max-w-2xl lg:max-w-5xl mx-auto">
      <div className="text-xl md:text-2xl font-extrabold font-mono hover:text-black/60">
        <Link href="/">{title}</Link>
      </div>

      <DrawerMenu className="flex md:hidden" items={PAGE_HEADER_MENUS} />
      <div className="hidden md:flex items-center space-x-4 xl:space-x-6">
        {PAGE_HEADER_MENUS.map((item) => (
          <a
            key={`dsk_${item.href}`}
            href={item.href}
            onClick={async (e) => {
              e.preventDefault();

              await Router.push(item.href);
            }}
          >
            <div className="flex items-center space-x-1 group cursor-pointer">
              <div className="w-5 border border-gray-300 group-hover:self-end transition-all duration-300" />
              <p>{item.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PageHeader;
