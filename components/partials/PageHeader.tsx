import Link from 'next/link';
import React from 'react';
import { MENU_ITEMS } from '../../helpers/constants';
import DrawerMenu from './DrawerMenu';

type Props = {
  title?: string;
};

const PageHeader = ({ title = 'Eliezer Basubi' }: Props) => {
  return (
    <div className="py-4 px-3 md:px-4 flex justify-between items-center">
      <div className="text-xl md:text-2xl font-extrabold hover:text-black/60">
        <Link href="/">{title}</Link>
      </div>

      <DrawerMenu className="flex md:hidden" />
      <div className="hidden md:flex items-center space-x-4 xl:space-x-6 gap-8">
        {MENU_ITEMS.map((item) => (
          <div key={`dsk_${item.href}`} className="hover:border-b-2">
            <Link href={`/${item.href}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageHeader;
