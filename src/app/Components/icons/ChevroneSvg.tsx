import * as React from 'react';
import { SVGProps } from 'react';
const ChevroneSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={16}
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path
      stroke="#433D60"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M1.5 2 14 14.5 26.5 2"
    />
  </svg>
);
export default ChevroneSvg;
