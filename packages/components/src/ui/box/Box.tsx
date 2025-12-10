import { ElementType, ComponentPropsWithoutRef } from 'react';
import { Slot as RadixSlot } from 'radix-ui';
import { clsx } from 'clsx';

import { sprinkles, Sprinkles } from '../../styles/sprinkles.css';
import { version } from '../../../package.json';

const Slot = RadixSlot.createSlot('@raoun/components/ui/box');

export type PrimitiveProps<C extends ElementType> = Sprinkles &
	ComponentPropsWithoutRef<C> & {
		asChild?: boolean;
	};

export type BoxProps = PrimitiveProps<'div'>;

export const Box = ({ asChild, children, ...props }: BoxProps) => {
	const Component = asChild ? Slot : 'div';

	const { className, style, otherProps } = sprinkles(props);
	const { className: propsClassName, style: propsStyle, ...propsOtherProps } = otherProps;

	console.log(props.id, className, props.className, clsx(className, props.className));

	return (
		<Component
			data-raoun-version={version}
			className={clsx(className, props.className)}
			style={style}
			{...propsOtherProps}
		>
			{children}
		</Component>
	);
};

Box.displayName = 'Box';
