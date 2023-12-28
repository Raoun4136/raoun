import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';

export const IconCreditCard = (
  {
    size = 16,
    fill,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: '16px' | '20px' | '24px' | '32px' | number;
    fill?: string;
  },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={size}
    height={size}
    fill={fill ?? 'currentColor'}
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    shapeRendering="geometricPrecision"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill={fill ?? 'currentColor'}
      fillOpacity={0.01}
      style={{
        mixBlendMode: 'multiply',
      }}
      d="M0 0h16v16H0z"
    />
    <path
      d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zm0 1v1.5H2V4h12zM2 12V6.5h12V12H2z"
      fill={fill ?? 'currentColor'}
    />
    <path d="M8 10H3v1h5v-1z" fill={fill ?? 'currentColor'} />
  </svg>
);
