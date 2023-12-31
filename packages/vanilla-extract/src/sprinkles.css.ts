import { transformObject } from './utils';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';
import { SemanticColor } from './tokens/semantic/colors';
import { Space } from './tokens/global/spacing';
import { Colors } from './tokens/global/colors';

export const colors = {
  ...transformObject<SemanticColor>(vars.semantic.color),
  ...transformObject<Colors>(vars.global.colors),
};
export const space = transformObject<Space>({ spacing: vars.global.spacing });

export const baseProperties = defineProperties({
  properties: {
    color: colors,
    backgroundColor: colors,
    borderColor: colors,
    borderRadius: {
      none: '0px',
      medium: '6px',
      large: '8px',
      extraLarge: '12px',
      '2xLarge': '16px',
      '3xLarge': '24px',
      '4xLarge': '40px',
      full: '9999px',
    },
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: { ...space, auto: 'auto' },
    marginRight: { ...space, auto: 'auto' },
    gap: { ...space, none: 'none' },
    margin: space,
  },
  shorthands: {
    rounded: ['borderRadius'] as const,
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'] as const,
    paddingX: ['paddingLeft', 'paddingRight'] as const,
    paddingY: ['paddingTop', 'paddingBottom'] as const,
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'] as const,
    marginX: ['marginLeft', 'marginRight'] as const,
    marginY: ['marginTop', 'marginBottom'] as const,
  },
});

export const sprinkles = createSprinkles(baseProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
