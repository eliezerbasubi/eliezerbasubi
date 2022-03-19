import React from 'react';

type Props = {
  open: boolean;
  onClick?: () => void;
};

const AnimatedMenu = ({ open, onClick }: Props) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={() => null}
      onClick={onClick}
      className="w-5 h-5 flex flex-col justify-end items-end outline-none"
      aria-labelledby="about"
    >
      <span
        aria-hidden="true"
        className={`block absolute h-0.5 w-5 rounded-lg bg-current transform transition duration-500 ease-in-out ${
          open ? 'rotate-45' : '-translate-y-1.5'
        }`}
      />
      <span
        aria-hidden="true"
        className={`block absolute h-0.5 w-5 rounded-lg bg-current transform transition duration-500 ease-in-out ${
          open ? 'opacity-0' : ''
        }`}
      />
      <span
        aria-hidden="true"
        className={`block absolute h-0.5 rounded-lg bg-current transform transition duration-500 ease-in-out ${
          open ? '-rotate-45 w-5' : 'translate-y-1.5 w-3'
        }`}
      />
    </div>
  );
};

export default AnimatedMenu;
