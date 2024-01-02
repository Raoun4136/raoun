import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../styles/sprinkles.css';
import { vars } from '../styles/theme.css';
import { typoVariant } from '../styles/typography.css';

export const color = createVar();

const parent = style({});

const base = style([
  {
    // width: 500,
    borderWidth: 0,
    borderRadius: 8,
    color: color,
    cursor: 'pointer',
    transition: '0.2s',
  },
]);

const variant = {
  primary: style([
    sprinkles({
      paddingX: 'spacing-300',
      paddingY: 'spacing-500',
      backgroundColor: 'primary-10',
    }),
    typoVariant.body[1],
    {
      vars: {
        [color]: vars.global.colors.primary[100],
      },

      ':hover': {
        backgroundColor: vars.global.colors.primary[20],
        vars: {
          [color]: vars.global.colors.primary[90],
        },
      },
    },
  ]),
  gray: style([
    sprinkles({
      paddingX: 'spacing-300',
      paddingY: 'spacing-500',
      backgroundColor: 'gray-10',
    }),
    typoVariant.body[1],
    {
      vars: {
        [color]: vars.global.colors.gray[80],
      },

      ':hover': {
        backgroundColor: vars.global.colors.gray[30],
        vars: {
          [color]: vars.global.colors.gray[90],
        },
      },
    },
  ]),
};

export const button = recipe({
  base,
  variants: { variant, styleType: { filled: {}, tonal: {} } },
  compoundVariants: [
    {
      variants: { variant: 'primary', styleType: 'filled' },
      style: { borderWidth: 1, borderStyle: 'solid' },
    },
  ],
  defaultVariants: {
    styleType: 'filled',
  },
});
