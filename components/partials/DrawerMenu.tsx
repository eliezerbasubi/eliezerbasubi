import Link from 'next/link';
import React, { useState } from 'react';
import AnimatedMenu from '../vectors/AnimatedMenu';
import SectionHeader from './SectionHeader';
import Socials from './Socials';

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen((state) => !state);
    document.body.classList.toggle('drawer-open');
  };

  return (
    <>
      <div className="text-white flex md:hidden justify-end p-6 pb-0 relative">
        <div
          className={open ? 'z-50 text-black' : ''}
          role="button"
          tabIndex={0}
          onKeyDown={() => null}
          onClick={onClick}
        >
          <AnimatedMenu open={open} />
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => null}
        onClick={onClick}
        className={`fixed inset-0 z-40 flex justify-end ease-in-out duration-700 transform outline-none ${
          open
            ? 'translate-x-0 backdrop-blur-sm bg-black/50'
            : 'translate-x-full'
        }`}
      >
        <div
          role="presentation"
          onClick={(e) => e.stopPropagation()}
          className="w-4/5 h-full flex flex-col justify-between bg-white text-black py-6 pt-20"
        >
          <div className="flex flex-col text-lg sm:text-xl space-y-4 tracking-75 font-medium px-7">
            <Link href={'#experience'} passHref>
              <SectionHeader
                title="Experience"
                titleClassName="text-lg"
                className="block"
              />
            </Link>
            <Link href={'#skills'} passHref>
              <SectionHeader
                title="Skills"
                titleClassName="text-lg"
                className="block"
              />
            </Link>
            <Link href={'#work'} passHref>
              <SectionHeader
                title="Work"
                titleClassName="text-lg"
                className="block"
              />
            </Link>
            <Link href={'#contact'} passHref>
              <SectionHeader
                title="Contact"
                titleClassName="text-lg"
                className="block"
              />
            </Link>
          </div>

          <div className="border-t py-4">
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawerMenu;
