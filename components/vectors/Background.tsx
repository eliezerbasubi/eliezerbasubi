import React from 'react'

type Props = {
  className?: string
}

const Background = ({ className = 'w-full' }: Props) => {
  return (
    <svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 869.5V0.00508992L1439.76 0.00506592C1440.75 11.4155 1447.76 108 1416.5 119.5C1363.5 138.996 1387.51 200.629 1341.5 219.5C1295.49 238.371 1266.67 213.551 1241.93 240.761C1222.14 262.528 1127.54 305.613 1171 327.5L1004 607.5C916.931 589.99 962.889 680.727 859 740.5C732.354 813.366 735.684 796.56 618.5 804C508.18 811.004 558.089 848.874 388.386 869.5C252.624 886.001 72.8946 876.375 0 869.5Z"
        fill="#171414"
      />
      <rect
        x="625.462"
        y="460.509"
        width="79.9313"
        height="50.7785"
        fill="#2E2D2D"
      />
      <rect
        x="652.439"
        y="485.898"
        width="74.9356"
        height="46.401"
        fill="#2E2D2D"
      />
      <rect
        x="797.314"
        y="621.599"
        width="35.0918"
        height="22.293"
        fill="#2E2D2D"
      />
      <rect
        x="809.158"
        y="632.746"
        width="32.8986"
        height="20.3712"
        fill="#2E2D2D"
      />
      <rect
        x="107.907"
        y="586.579"
        width="35.0918"
        height="22.293"
        fill="#2E2D2D"
      />
      <rect
        x="125.892"
        y="577.825"
        width="32.8986"
        height="20.3712"
        fill="#2E2D2D"
      />
      <rect
        x="239.794"
        y="741.541"
        width="34.97"
        height="35.8951"
        fill="#2E2D2D"
      />
      <rect
        x="253.782"
        y="747.67"
        width="32.9717"
        height="41.1481"
        fill="#2E2D2D"
      />
      <ellipse
        cx="528.046"
        cy="750.734"
        rx="10.491"
        ry="9.19265"
        fill="#2E2D2D"
      />
      <circle cx="781" cy="218" r="33" fill="#2E2D2D" />
      <circle cx="375.5" cy="246.5" r="148.5" fill="#2E2D2D" />
    </svg>
  )
}

export default Background
