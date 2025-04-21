import React from 'react';
import Link from 'next/link';

type Props = {
  title: string;
  btnText?: string;
  redirectTo?: string;
};

const WorkCard = ({
  title,
  btnText = 'Explore my work',
  children,
  redirectTo = '/work',
}: React.PropsWithChildren<Props>) => {
  return (
    <div className="bg-white p-6 md:p-6 lg:p-8 xl:p-10">
      <p className="text-2xl md:text-2xl xl:text-3xl ml:text-6xl font-bold tracking-75 lg:leading-10 w-32 ml:w-64">
        {title}
      </p>

      {children}

      <Link
        href={redirectTo}
        className="flex items-center justify-center gap-x-px w-full max-w-96 h-12 md:h-14 5xl:h-16 border-2 border-black rounded-lg uppercase font-medium text-sm md:text-lg 5xl:text-2xl group"
      >
        {btnText}

        <div className="w-0 h-0.5 group-hover:w-10 transition-[width] transition-500 bg-black" />
      </Link>
    </div>
  );
};

export default WorkCard;
