import React from 'react';
import { button } from './style.css';
import clsx from 'clsx';

export interface ButtonProps {
  /**
   * color primary | gray
   */
  variant?: 'primary' | 'gray';
  /**
   * Text to display
   */
  text?: string;
  /**
   * Other classes to add
   */
  className?: string;
  /**
   * text color
   */
  color?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const CoreButton = ({ variant, text, className = '', color }: ButtonProps) => {
  return (
    <button className={clsx([button({ variant: variant }), className])}>{text}</button>
  );
};
