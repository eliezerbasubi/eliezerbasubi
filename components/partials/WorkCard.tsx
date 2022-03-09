import Router from 'next/router';
import React, { FC } from 'react';

type Props = {
  title: string;
  btnText?: string;
  redirectTo?: string;
};

const WorkCard: FC<Props> = ({
  title,
  btnText = 'Explore my work',
  children,
  redirectTo = 'work',
}) => {
  const onClick = async () => {
    await Router.push(redirectTo);
  };

  return (
    <div className="bg-white p-6 md:p-6 lg:p-8 xl:p-10">
      <p className="text-2xl md:text-2xl xl:text-3xl ml:text-6xl font-bold tracking-75 lg:leading-10 w-32 ml:w-64">
        {title}
      </p>

      {children}

      <button
        type="button"
        onClick={onClick}
        className="w-full lg:w-96 h-12 md:h-14 border-2 border-black rounded-lg text-center uppercase font-medium text-sm md:text-lg"
      >
        {btnText}
      </button>
    </div>
  );
};

export default WorkCard;
