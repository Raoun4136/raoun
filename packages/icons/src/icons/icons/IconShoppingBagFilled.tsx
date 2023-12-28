import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';

export const IconShoppingBagFilled = (
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
      d="M14.38 5.675A.5.5 0 0014 5.5h-3v-2A1.5 1.5 0 009.5 2h-3A1.5 1.5 0 005 3.5v2H2a.5.5 0 00-.5.575l.94 6.075a1 1 0 001 .85h9.13a1 1 0 001-.85l.93-6.075a.5.5 0 00-.12-.4zM6 3.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v2H6v-2z"
      fill={fill ?? 'currentColor'}
    />
  </svg>
);
