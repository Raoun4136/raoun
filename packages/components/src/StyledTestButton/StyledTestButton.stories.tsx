import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../styled-system/css/css';
import '../index.css';

import { StyledTestButton } from './StyledTestButton';

const meta = {
  title: 'Components/StyledTestButton',
  component: StyledTestButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof StyledTestButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RedButton: Story = {
  args: {
    children: 'Click me!',
    bg: 'red.500',
  },
};

export const NodeButton: Story = {
  args: {
    children: (
      <div
        className={css({
          bg: 'blue.500',
          fontFamily: 'Inter',
          px: '4',
          py: '8',
          borderRadius: 'sm',
          _hover: { bg: 'green.400', cursor: 'pointer' },
        })}
      >
        Click me!
      </div>
    ),
    bg: 'blue.500',
  },
};
