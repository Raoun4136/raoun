import { type FlattenObjectKeys } from '../../utils';

export const font = {
	sans: `Pretendard Variable, Pretendard, sans-serif`,
} as const;

export const fontWeight = {
	thin: '100',
	extraLight: '200',
	light: '300',
	regular: '400',
	medium: '500',
	semiBold: '600',
	bold: '700',
	extraBold: '800',
	black: '900',
} as const;

export const fontSize = {
	100: '11px',
	200: '12px',
	300: '14px',
	400: '16px',
	450: '18px',
	500: '20px',
	600: '24px',
	700: '32px',
	800: '40px',
} as const;

export const lineHeight = {
	100: '16px',
	200: '18px',
	300: '22px',
	400: '24px',
	450: '26px',
	500: '28px',
	600: '34px',
	700: '40px',
	800: '52px',
} as const;

const wrappedFont = { font };
const wrappedFontWeight = { fontWeight };
const wrappedFontSize = { fontSize };
const wrappedLineHeight = { lineHeight };

export type Font = FlattenObjectKeys<typeof wrappedFont>;
export type FontWeight = FlattenObjectKeys<typeof wrappedFontWeight>;
export type FontSize = FlattenObjectKeys<typeof wrappedFontSize>;
export type LineHeight = FlattenObjectKeys<typeof wrappedLineHeight>;
