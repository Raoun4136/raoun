import { Colors } from './tokens/global/colors';
import { SemanticColor } from './tokens/semantic/colors';
import { Space } from './tokens/global/spacing';

export const baseSprinkles = ({
  colors,
  space,
}: {
  colors: Record<Colors | SemanticColor, string>;
  space: Record<Space, string>;
}) => {
  return {
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
  };
};
