import * as React from 'react';
import { SVGProps } from 'react';
const ArrowRightSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={33} height={27} fill="none" {...props}>
    <path
      stroke="#C0B7E8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M30.458 13.5H2.542m27.916 0L19.292 24.667M30.458 13.5 19.292 2.333"
    />
  </svg>
);
export default ArrowRightSvg;
