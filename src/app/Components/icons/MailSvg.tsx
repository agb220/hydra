import * as React from 'react';
import { SVGProps } from 'react';
const MailSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={65} height={65} fill="none" {...props}>
    <path
      stroke="#C0B7E8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="M8.918 14.335a2.7 2.7 0 0 1 1.915-.793h43.334a2.7 2.7 0 0 1 1.915.793m-47.164 0a2.7 2.7 0 0 0-.793 1.915v32.5a2.708 2.708 0 0 0 2.708 2.708h43.334a2.708 2.708 0 0 0 2.708-2.708v-32.5a2.7 2.7 0 0 0-.793-1.915m-47.164 0L28.67 34.086a5.417 5.417 0 0 0 7.66 0l19.752-19.751"
    />
  </svg>
);
export default MailSvg;
