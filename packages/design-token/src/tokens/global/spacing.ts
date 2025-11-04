import { type FlattenObjectKeys } from '../../utils';

export const spacing = {
	0: '0px',
	25: '1px',
	50: '2px',
	100: '4px',
	150: '6px',
	200: '8px',
	250: '10px',
	300: '12px',
	400: '16px',
	500: '20px',
	600: '24px',
	800: '32px',
	1000: '40px',
	1200: '48px',
	1600: '64px',
	2000: '80px',
} as const;

const wrappedSpace = { spacing };

export type Space = FlattenObjectKeys<typeof wrappedSpace>;
