import Link from 'next/link';
import React from 'react';
import { MENU_ITEMS } from '../../helpers/constants';
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

      <DrawerMenu className="flex md:hidden" />
      <div className="hidden md:flex items-center space-x-4 xl:space-x-6">
        {MENU_ITEMS.map((item) => (
          <div
            key={`dsk_${item.href}`}
            className="flex items-center space-x-1 group cursor-pointer"
          >
            <Link href={`/${item.href}`} passHref>
              <>
                <div className="w-5 border border-gray-300 group-hover:self-end transition-all duration-300" />
                <p>{item.name}</p>
              </>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageHeader;
