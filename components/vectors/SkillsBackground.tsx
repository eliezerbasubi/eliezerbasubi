import React from 'react';

type Props = {
  className?: string;
};

const SkillsBackground = ({ className }: Props) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1440" height="900" fill="black" />
      <path
        d="M1194.17 797.839C1195.08 806.456 1201.38 822.977 1219.29 820.129C1241.68 816.569 1235.08 820.746 1243.81 826.362C1252.54 831.978 1282.07 838.093 1294.32 834.462"
        stroke="#2E2D2D"
        strokeWidth="3"
      />
      <path
        d="M114.649 70.8661L121.831 87.4561H101.311L108.493 104.228H85.101L94.9503 119.36H72.5841L85.101 139.961L61.914 134.309"
        stroke="#2E2D2D"
        strokeWidth="3"
      />
      <path
        d="M1168.68 341.963L1163.73 361.662L1134.12 352.609L1133.54 374.106L1107.77 357.283L1105.79 376.547"
        stroke="#2E2D2D"
        strokeWidth="3"
      />
      <rect
        x="0.998596"
        y="280.807"
        width="38.0905"
        height="98.8627"
        transform="rotate(-90 0.998596 280.807)"
        fill="#2E2D2D"
      />
      <circle cx="133.5" cy="264.5" r="21.5" fill="#2E2D2D" />
      <rect
        x="1214.31"
        y="547.441"
        width="38.0905"
        height="135.811"
        transform="rotate(90 1214.31 547.441)"
        fill="#2E2D2D"
      />
      <circle cx="1045.5" cy="565.5" r="21.5" fill="#2E2D2D" />
      <path
        d="M1362.61 192.224C1339.14 207.726 1150.4 302.067 1008.6 192.224C934.835 135.086 937.014 60.868 960.557 1.32874H1439V134.646C1421.36 148.671 1381.38 179.823 1362.61 192.224Z"
        fill="#2E2D2D"
      />
    </svg>
  );
};

export default SkillsBackground;
