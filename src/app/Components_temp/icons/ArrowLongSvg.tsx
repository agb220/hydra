import * as React from 'react';
import { SVGProps } from 'react';
const ArrowLongSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={228} height={100} fill="none" {...props}>
    <path
      stroke="#C0B7E8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M198.833 50h-41.666m41.666 0-16.666 16.667M198.833 50l-16.666-16.667"
    />
    <path stroke="#C0B7E8" strokeWidth={3} d="M157.5 50H0" />
  </svg>
);
export default ArrowLongSvg;
