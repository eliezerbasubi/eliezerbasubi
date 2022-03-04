import React from 'react'

type Props = {
  className?: string
}

const LandingWave = ({ className = 'w-full' }: Props) => {
  return (
    <svg
      viewBox="0 0 1440 865"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 851.087V0.00508941L1439.76 0.00506592C1440.75 11.1738 1447.76 105.713 1416.5 116.969C1363.5 136.052 1387.51 196.38 1341.5 214.852C1295.49 233.323 1266.67 209.029 1241.93 235.662C1222.14 256.969 1100.54 298.076 1144 319.5L978 584.5C890 558.5 962.889 666.312 859 724.819C732.354 796.142 735.684 779.692 618.5 786.974C508.18 793.83 556.054 818.009 388.386 851.087C254.5 877.5 72.8946 857.817 0 851.087Z"
        fill="#171414"
      />
    </svg>
  )
}

export default LandingWave
