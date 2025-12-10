import { ComponentPropsWithoutRef, ElementType } from 'react';
import { Slot as RadixSlot } from 'radix-ui';
import { clsx } from 'clsx';

import { PrimitiveProps, type BoxProps } from '../box/Box';
import { type ButtonVariant, type ButtonSize } from './type';
import { sprinkles } from '../../styles/sprinkles.css';
import { version } from '../../../package.json';
import { buttonClass } from './style.css';

const Slot = RadixSlot.createSlot('@raoun/components/ui/button');

export type ButtonProps = PrimitiveProps<'button'> & {
	variant: ButtonVariant;
	size: ButtonSize;
	isIconOnly: boolean;
	isDanger: boolean;
	isRounded: boolean;
};

export const Button = ({
	asChild,
	children,
	variant,
	size,
	isIconOnly,
	isDanger,
	isRounded,
	...props
}: ButtonProps) => {
	const Component = asChild ? Slot : 'button';

	const { className, style, otherProps } = sprinkles(props);
	const { className: propsClassName, style: propsStyle, ...propsOtherProps } = otherProps;

	return (
		<Component
			data-raoun-version={version}
			className={clsx(
				buttonClass({ buttonType: variant, size, isIconOnly, isDanger, isRounded }),
				className,
				props.className,
			)}
			style={style}
			{...propsOtherProps}
		>
			{children}
		</Component>
	);
};
Button.displayName = 'Button';
