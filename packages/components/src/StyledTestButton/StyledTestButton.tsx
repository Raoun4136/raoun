import React from 'react';
import { ReactNode } from 'react';
import { css } from '../../styled-system/css/css';
import '../../styled-system/styles.css';

export interface IButtonProps {
  children: ReactNode;
  bg: string;
  onClick?: () => void;
}

export const StyledTestButton = ({ children, bg, ...props }: IButtonProps) => {
  return (
    <button
      className={css({
        bg: bg,
        fontFamily: 'Inter',
        px: '4',
        py: '8',
        borderRadius: 'md',
        _hover: { bg: 'red.600', cursor: 'pointer' },
      })}
    >
      {children}
    </button>
  );
};
