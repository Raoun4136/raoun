import React from 'react';
import { ReactNode } from 'react';
import { css } from '../../styled-system/css/css';
import '../../styled-system/styles.css';

export interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const StyledTestButton = ({ children, ...props }: IButtonProps) => {
  return (
    <button
      className={css({
        bg: 'red.500',
        fontFamily: 'Inter',
        px: '4',
        py: '8',
        borderRadius: 'md',
        _hover: { bg: 'red.400', cursor: 'pointer' },
      })}
    >
      {children}
    </button>
  );
};
