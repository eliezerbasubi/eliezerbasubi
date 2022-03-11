import React from 'react';

type Props = {
  className?: string;
};

const WorkExperienceBG = ({ className }: Props) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1439 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_159_644)">
        <path
          d="M1298.74 81.4717C1310.45 52.6824 1397.12 18.495 1439 5V901.168C1353.73 902.834 1176.34 905.167 1148.9 901.168C1114.59 896.17 962.726 952.649 957.68 921.661C952.635 890.672 1053.04 752.723 957.68 661.257C862.325 569.791 1034.87 388.358 1039.92 365.866C1044.96 343.375 1181.69 229.917 1231.13 220.42C1280.58 210.924 1284.11 117.458 1298.74 81.4717Z"
          fill="#F7F7F7"
        />
        <path
          d="M91 321C41.4 310.2 -13 335 -0.50003 366V723.5C36 772 112 695 108 655C103 605 120 594.5 135 573C150 551.5 247 631 258 526.5C262.131 487.255 258 476.5 218 458C178 439.5 173 443 173 394.5C173 346 153 334.5 91 321Z"
          fill="#F7F7F7"
        />
      </g>
      <defs>
        <clipPath id="clip0_159_644">
          <rect
            width="1440"
            height="900"
            fill="white"
            transform="translate(-1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WorkExperienceBG;
