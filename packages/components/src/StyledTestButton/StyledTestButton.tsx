import React from 'react';
import { css } from '../../styled-system/css/css';

export const StyledTestButton = () => {
  return (
    <button
      className={css({
        bg: 'red.100',
        color: 'white',
        fontSize: 'lg',
      })}
    >
      Test
    </button>
  );
};
