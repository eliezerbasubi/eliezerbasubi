import React from 'react';

import Socials from '@/components/partials/Socials';

import Menu from './Menu';

const DrawerMenu = (
  props: Omit<React.ComponentProps<typeof Menu>, 'children'>
) => {
  return (
    <Menu {...props}>
      <Socials />
    </Menu>
  );
};

export default DrawerMenu;
