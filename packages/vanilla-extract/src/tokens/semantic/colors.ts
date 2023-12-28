import { FlattenObjectKeys } from '../../utils';

export const backgroundColors = {
  background: {
    '01': 'var(--global-colors-gray-10)',
    '02': 'var(--global-colors-white)',
    '03': 'var(--global-colors-gray-5)',
    '04': 'var(--global-colors-gray-30)',
  },
} as const;

export const borderColors = {
  border: {
    '01': 'var(--global-colors-gray-30)',
    '02': 'var(--global-colors-gray-40)',
    '03': 'var(--global-colors-gray-50)',
    '04': 'var(--global-colors-gray-60)',
  },
} as const;

export const textColors = {
  text: {
    '01': 'var(--global-colors-gray-90)',
    '02': 'var(--global-colors-gray-80)',
    '03': 'var(--global-colors-gray-70)',
    '04': 'var(--global-colors-gray-60)',
  },
};

export const color = {
  ...backgroundColors,
  ...borderColors,
  ...textColors,
};

// const wrappedColors = { color };
// const wrappedBackgroundColors = { color: { ...backgroundColors } };
// const wrappedBorderColors = { color: { ...borderColors } };
// const wrappedTextColors = { color: { ...textColors } };

export type SemanticColor = FlattenObjectKeys<typeof color>;
export type SemanticBackgroundColor = FlattenObjectKeys<typeof backgroundColors>;
export type SemanticBorderColor = FlattenObjectKeys<typeof borderColors>;
export type SemanticTextColor = FlattenObjectKeys<typeof textColors>;
