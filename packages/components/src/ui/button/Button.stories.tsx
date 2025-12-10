import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
} as Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'contrast',
	},
	render: () => {
		return (
			<Button variant="primary" size="md" isDanger={false} isRounded={false} isIconOnly={false}>
				Button
			</Button>
		);
	},
};
