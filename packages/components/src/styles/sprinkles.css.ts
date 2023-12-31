import { transformObject } from '@raoun/design-token';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';
import { SemanticColor } from '@raoun/design-token/esm/tokens/semantic/colors';
import { Space } from '@raoun/design-token/esm/tokens/global/spacing';
import { Colors } from '@raoun/design-token/esm/tokens/global/colors';

export const colors = {
  ...transformObject<SemanticColor>(vars.semantic.color),
  ...transformObject<Colors>(vars.global.colors),
};
export const space = transformObject<Space>({ spacing: vars.global.spacing });

export const basePropertie = defineProperties({
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
    rounded: ['borderRadius'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

export const sprinkles = createSprinkles(basePropertie);

export type Sprinkles = Parameters<typeof sprinkles>[0];
