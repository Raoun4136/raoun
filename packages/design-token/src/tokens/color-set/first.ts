import { type FlattenObjectKeys } from '../../utils';

export const primary = {
	10: '#edf5ff',
	20: '#d0e2ff',
	30: '#a6c8ff',
	40: '#4c9aff',
	50: '#2684ff',
	60: '#0065ff',
	70: '#0052cc',
	80: '#0747a6',
	90: '#001d6c',
	100: '#001141',
} as const;

export const wrappedPrimary = { primary };

export type PrimaryColors = FlattenObjectKeys<typeof wrappedPrimary>;
