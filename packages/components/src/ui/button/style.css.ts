import {
	type ComplexStyleRule,
	createTheme,
	createThemeContract,
	createVar,
	globalStyle,
	style,
} from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { type FlattenObjectKeys, transformObject } from '@raoun/design-token/utils';

import * as buttonTokens from './tokens/colors';
import { vars } from '../../styles/theme.css';

const themeObj = {
	colors: {
		button: buttonTokens,
		transparent: 'transparent',
	},
};

// create button token theme
export const themeVars = createThemeContract(themeObj);
export const buttonThemeClass = createTheme(themeVars, themeObj);

export const wrappedButton = { button: buttonTokens, transparent: 'transparent' };
type ButtonColor = FlattenObjectKeys<typeof wrappedButton>;
const buttonColors = {
	...transformObject<ButtonColor>(themeVars.colors),
};

// create button sprinkles
const buttonColorProperties = defineProperties({
	conditions: {
		default: {},
		hover: { selector: '&:hover' },
		active: { selector: '&:active' },
		focus: { selector: '&:focus-visible' },
		disabled: { selector: '&:disabled' },
	},
	defaultCondition: 'default',
	properties: {
		color: buttonColors,
		backgroundColor: buttonColors,
		borderColor: buttonColors,
	},
	shorthands: {
		bgColor: ['backgroundColor'],
	},
});

const buttonSprinkles = createSprinkles(buttonColorProperties);

// button base
const base = style([
	{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		transition: '0.2s',
		flexShrink: 0,
		position: 'relative',

		borderRadius: vars.global.radius['100'],
	},
]);

// button variants
const buttonType: Record<string, ComplexStyleRule> = {
	primary: [
		buttonSprinkles({
			bgColor: {
				default: 'button-primary',
				hover: 'button-primary-hover',
				active: 'button-primary-active',
				focus: 'button-primary-active',
				disabled: 'button-disabled-bg',
			},
			color: {
				default: 'button-primary-text',
				disabled: 'button-disabled-text-on-color',
			},
		}),
	],
	secondary: [
		buttonSprinkles({
			bgColor: {
				default: 'button-secondary',
				hover: 'button-secondary-hover',
				active: 'button-secondary-active',
				focus: 'button-secondary-active',
				disabled: 'button-disabled-bg',
			},
			color: {
				default: 'button-secondary-text',
				hover: 'button-secondary-text',
				active: 'button-secondary-text',
				focus: 'button-secondary-text',
				disabled: 'button-disabled-text-on-color',
			},
		}),
	],
	tertiary: [
		{ borderWidth: 1, borderStyle: 'solid' },
		buttonSprinkles({
			borderColor: {
				default: 'button-tertiary-border',
				disabled: 'button-disabled-border',
			},
			bgColor: {
				default: 'button-tertiary-bg',
				hover: 'button-tertiary-hover',
				active: 'button-tertiary-active',
				focus: 'button-tertiary-active',
				disabled: 'button-tertiary-bg',
			},
			color: {
				default: 'button-tertiary-text',
				hover: 'button-tertiary-text',
				active: 'button-tertiary-text',
				focus: 'button-tertiary-text',
				disabled: 'button-disabled-text-on-color',
			},
		}),
	],
	contrast: [
		buttonSprinkles({
			bgColor: {
				default: 'transparent',
				hover: 'button-contrast-hover-bg',
				active: 'transparent',
				focus: 'transparent',
				disabled: 'transparent',
			},
			color: {
				default: 'button-contrast',
				hover: 'button-contrast-hover-text',
				active: 'button-contrast-active-text',
				focus: 'button-contrast-active-text',
				disabled: 'button-disabled-text',
			},
		}),
	],
};

const buttonTypeDanger: Record<string, ComplexStyleRule> = {
	primary: [
		buttonSprinkles({
			bgColor: {
				default: 'button-danger-primary',
				hover: 'button-danger-primary-hover',
				active: 'button-danger-primary-active',
				focus: 'button-danger-primary-active',
				disabled: 'button-disabled-bg',
			},
			color: {
				default: 'button-primary-text',
				hover: 'button-primary-text',
				active: 'button-primary-text',
				focus: 'button-primary-text',
				disabled: 'button-disabled-text-on-color',
			},
		}),
	],
	tertiary: [
		{ borderWidth: 1, borderStyle: 'solid' },
		buttonSprinkles({
			borderColor: {
				default: 'button-danger-tertiary-border',
				disabled: 'button-disabled-border',
			},
			bgColor: {
				default: 'button-tertiary-bg',
				hover: 'button-danger-tertiary-hover',
				active: 'button-danger-tertiary-active',
				focus: 'button-danger-tertiary-active',
				disabled: 'button-tertiary-bg',
			},
			color: {
				default: 'button-danger-tertiary-text',
				hover: 'button-danger-tertiary-text',
				active: 'button-danger-tertiary-text',
				focus: 'button-danger-tertiary-text',
				disabled: 'button-disabled-text-on-color',
			},
		}),
	],
	contrast: [
		buttonSprinkles({
			bgColor: {
				default: 'transparent',
				hover: 'button-danger-contrast-hover',
				active: 'button-danger-contrast-active',
				focus: 'button-danger-contrast-active',
				disabled: 'transparent',
			},
			color: {
				default: 'button-danger-contrast',
				hover: 'button-danger-contrast',
				active: 'button-danger-contrast',
				focus: 'button-danger-contrast',
				disabled: 'button-disabled-text',
			},
		}),
	],
};

const size = {
	xs: [
		{
			fontSize: vars.semantic.typography.heading[1].fontSize,
			lineHeight: vars.semantic.typography.heading[1].lineHeight,
			fontWeight: vars.semantic.typography.heading[1].fontWeight,
			height: '20px',
		},
	],
	sm: [
		{
			fontSize: vars.semantic.typography.heading[1].fontSize,
			lineHeight: vars.semantic.typography.heading[1].lineHeight,
			fontWeight: vars.semantic.typography.heading[1].fontWeight,
			height: '24px',
		},
	],
	md: [
		{
			fontSize: vars.semantic.typography.heading[2].fontSize,
			lineHeight: vars.semantic.typography.heading[2].lineHeight,
			fontWeight: vars.semantic.typography.heading[2].fontWeight,
			height: '32px',
		},
	],
	lg: [
		{
			fontSize: vars.semantic.typography.heading[2].fontSize,
			lineHeight: vars.semantic.typography.heading[2].lineHeight,
			fontWeight: vars.semantic.typography.heading[2].fontWeight,
			height: '40px',
		},
	],
	xl: [
		{
			fontSize: vars.semantic.typography.heading[3].fontSize,
			lineHeight: vars.semantic.typography.heading[3].lineHeight,
			fontWeight: vars.semantic.typography.heading[3].fontWeight,
			height: '48px',
		},
	],
};

const sizeCompound = {
	xs: { paddingInline: vars.global.spacing['250'], gap: vars.global.spacing['100'] },
	sm: { paddingInline: vars.global.spacing['250'], gap: vars.global.spacing['100'] },
	md: { paddingInline: vars.global.spacing['300'], gap: vars.global.spacing['100'] },
	lg: { paddingInline: vars.global.spacing['400'], gap: vars.global.spacing['150'] },
	xl: { paddingInline: vars.global.spacing['600'], gap: vars.global.spacing['150'] },
};

// button style class
export const buttonClass = recipe({
	base,
	variants: {
		buttonType: { primary: {}, secondary: {}, tertiary: {}, contrast: {} },
		isIconOnly: {
			true: { paddingInline: vars.global.spacing['0'] },
			false: {},
		},
		size,
		isDanger: {
			true: {},
			false: {},
		},
		isRounded: {
			true: [{ borderRadius: vars.global.radius['full'] }],
			false: [{ borderRadius: vars.global.radius['100'] }],
		},
	},
	compoundVariants: [
		// size
		{ variants: { size: 'xs', isIconOnly: false }, style: sizeCompound.xs },
		{ variants: { size: 'sm', isIconOnly: false }, style: sizeCompound.sm },
		{ variants: { size: 'md', isIconOnly: false }, style: sizeCompound.md },
		{ variants: { size: 'lg', isIconOnly: false }, style: sizeCompound.lg },
		{ variants: { size: 'xl', isIconOnly: false }, style: sizeCompound.xl },
		// size + icon
		{
			variants: { size: 'xs', isIconOnly: true },
			style: { width: '20px' },
		},
		{
			variants: { size: 'sm', isIconOnly: true },
			style: { width: '24px' },
		},
		{
			variants: { size: 'md', isIconOnly: true },
			style: { width: '32px' },
		},
		{
			variants: { size: 'lg', isIconOnly: true },
			style: { width: '40px' },
		},
		{
			variants: { size: 'xl', isIconOnly: true },
			style: { width: '48px' },
		},
		// buttonType
		{
			variants: { buttonType: 'primary', isDanger: false },
			style: buttonType.primary,
		},
		{
			variants: { buttonType: 'secondary', isDanger: false },
			style: buttonType.secondary,
		},
		{
			variants: { buttonType: 'tertiary', isDanger: false },
			style: buttonType.tertiary,
		},
		{
			variants: { buttonType: 'contrast', isDanger: false },
			style: buttonType.contrast,
		},
		// buttonType + danger
		{
			variants: { buttonType: 'primary', isDanger: true },
			style: buttonTypeDanger.primary,
		},
		{
			variants: { buttonType: 'tertiary', isDanger: true },
			style: buttonTypeDanger.tertiary,
		},
		{
			variants: { buttonType: 'contrast', isDanger: true },
			style: buttonTypeDanger.contrast,
		},
	],

	defaultVariants: {
		buttonType: 'primary',
		isIconOnly: false,
		size: 'md',
		isDanger: false,
	},
});

export type ButtonClass = RecipeVariants<typeof buttonClass>;

const iconWrapperStyle: ComplexStyleRule = [
	{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'max-content', height: 'max-content' },
];

export const hiddenClass = style({ visibility: 'hidden' });
export const loaderContainerClass = style([
	{ display: 'flex', justifyContent: 'center', alignItems: 'center' },
	{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' },
]);

// set icon size
export const iconWrapper = {
	xs: style(iconWrapperStyle),
	sm: style(iconWrapperStyle),
	md: style(iconWrapperStyle),
	lg: style(iconWrapperStyle),
	xl: style(iconWrapperStyle),
};

globalStyle(`${iconWrapper.xs} > svg`, {
	width: 14,
	height: 14,
});

globalStyle(`${iconWrapper.sm} > svg, ${iconWrapper.md} > svg`, {
	width: 16,
	height: 16,
});

globalStyle(`${iconWrapper.lg} > svg, ${iconWrapper.xl} > svg`, {
	width: 20,
	height: 20,
});
