import React, { useEffect, useState } from 'react';
import { MENU_ITEMS } from '../../helpers/constants';
import AnimatedMenu from '../vectors/AnimatedMenu';
import SectionHeader from './SectionHeader';
import Socials from './Socials';

interface IProps {
  className?: string;
  items?: { name: string; href: string }[];
}

const DrawerMenu = ({
  className = 'text-white flex md:hidden justify-end p-6 pb-0 relative',
  items = MENU_ITEMS,
}: IProps) => {
  const [open, setOpen] = useState(false);

  const onToggleDrawer = () => {
    setOpen((state) => !state);
    document.body.classList.toggle('drawer-open');
  };

  const onResizeScreen = (event: MediaQueryListEvent | boolean) => {
    const matches = typeof event === 'boolean' ? event : event.matches;
    if (matches) {
      setOpen(false);
    }
  };

  useEffect(() => {
    const watchMedia = window.matchMedia('(min-width: 768px)');
    try {
      watchMedia.addEventListener('change', onResizeScreen);
    } catch (error) {
      watchMedia.addListener(onResizeScreen);
    }

    return () => {
      try {
        watchMedia.removeEventListener('change', onResizeScreen);
      } catch (error) {
        watchMedia.removeListener(onResizeScreen);
      }
    };
  }, []);

  return (
    <>
      <div className={className}>
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
            {items.map((item) => (
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
