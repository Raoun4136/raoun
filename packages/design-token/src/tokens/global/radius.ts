import { type FlattenObjectKeys } from '../../utils';

export const radius = {
	50: '2px',
	100: '4px',
	200: '8px',
	300: '12px',
	400: '16px',
	full: '999px',
} as const;

const wrappedRadius = { radius };

export type Radius = FlattenObjectKeys<typeof wrappedRadius>;
