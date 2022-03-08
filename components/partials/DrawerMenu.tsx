import React, { useState } from 'react';
import AnimatedMenu from '../vectors/AnimatedMenu';
import SectionHeader from './SectionHeader';
import Socials from './Socials';

const MENU_ITEMS = [
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);

  const onToggleDrawer = () => {
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
          onClick={onToggleDrawer}
        >
          <AnimatedMenu open={open} />
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => null}
        onClick={onToggleDrawer}
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
            {MENU_ITEMS.map((item) => (
              <a key={item.name} href={item.href} onClick={onToggleDrawer}>
                <SectionHeader
                  title={item.name}
                  titleClassName="text-lg"
                  className="block"
                />
              </a>
            ))}
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
