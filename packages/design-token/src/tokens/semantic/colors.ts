import { type FlattenObjectKeys } from '../../utils';

export const backgroundColors = {
	background: {
		1: 'var(--global-colors-white)',
		2: 'var(--global-colors-gray-5)',
		3: 'var(--global-colors-gray-10)',
		4: 'var(--global-colors-gray-20)',
	},
} as const;

export const borderColors = {
	border: {
		default: 'var(--global-colors-gray-15)',
		1: 'var(--global-colors-gray-30)',
		2: 'var(--global-colors-gray-40)',
		3: 'var(--global-colors-gray-50)',
		4: 'var(--global-colors-gray-60)',
	},
} as const;

export const textColors = {
	text: {
		1: 'var(--global-colors-gray-90)',
		2: 'var(--global-colors-gray-80)',
		3: 'var(--global-colors-gray-70)',
		4: 'var(--global-colors-gray-60)',
		5: 'var(--global-colors-gray-50)',
		6: 'var(--global-colors-white)',
	},
} as const;

export const supportColors = {
	support: {
		error: {
			1: 'var(--global-colors-red-10)',
			2: 'var(--global-colors-red-20)',
			3: 'var(--global-colors-red-50)',
			4: 'var(--global-colors-red-100)',
		},
		warning: {
			1: 'var(--global-colors-orange-10)',
			2: 'var(--global-colors-orange-20)',
			3: 'var(--global-colors-orange-50)',
			4: 'var(--global-colors-orange-100)',
		},
		success: {
			1: 'var(--global-colors-green-10)',
			2: 'var(--global-colors-green-20)',
			3: 'var(--global-colors-green-50)',
			4: 'var(--global-colors-green-100)',
		},
		info: {
			1: 'var(--global-colors-primary-10)',
			2: 'var(--global-colors-primary-20)',
			3: 'var(--global-colors-primary-60)',
			4: 'var(--global-colors-primary-100)',
		},
	},
} as const;

export const focusColors = {
	focus: 'rgb(from var(--global-colors-primary-50) r g b / 20%)',
} as const;

export const iconColors = {
	icon: {
		primary: 'var(--global-colors-gray-90)',
		secondary: 'var(--global-colors-gray-70)',
		tertiary: 'var(--global-colors-gray-50)',
		on: {
			color: {
				default: 'var(--global-colors-white)',
				disabled: 'var(--global-colors-gray-60)',
			},
		},
		interactive: 'var(--global-colors-primary-60)',
	},
} as const;

export const toggleColors = {
	toggle: {
		primary: {
			1: 'var(--global-colors-primary-60)',
			2: 'var(--global-colors-primary-70)',
			3: 'var(--global-colors-primary-100)',
		},
		disabled: {
			bg: 'var(--global-colors-gray-20)',
			border: 'var(--global-colors-gray-40)',
			text: 'var(--global-colors-gray-60)',
		},
		off: {
			bg: 'var(--global-colors-gray-50)',
			hover: 'var(--global-colors-gray-60)',
		},
		hover: {
			bg: 'var(--global-colors-primary-10)',
		},
	},
} as const;

export const color = {
	...backgroundColors,
	...borderColors,
	...textColors,
	...supportColors,
	...focusColors,
	...iconColors,
	...toggleColors,
};

export type SemanticColor = FlattenObjectKeys<typeof color>;
export type SemanticBackgroundColor = FlattenObjectKeys<typeof backgroundColors>;
export type SemanticBorderColor = FlattenObjectKeys<typeof borderColors>;
export type SemanticTextColor = FlattenObjectKeys<typeof textColors>;
export type SemanticsSupportColors = FlattenObjectKeys<typeof supportColors>;
export type SemanticFocusColors = FlattenObjectKeys<typeof focusColors>;
export type SemanticIconColors = FlattenObjectKeys<typeof iconColors>;
export type SemanticToggleColors = FlattenObjectKeys<typeof toggleColors>;
