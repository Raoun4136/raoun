import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from './Box';

const meta = {
	title: 'Box',
	component: Box,
	tags: ['autodocs'],
} as Meta<typeof Box>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Render: Story = {
	render: () => {
		return (
			<Box display="flex">
				<Box
					margin="$spacing-100"
					width="100px"
					height="100px"
					asChild
					color=""
					bgColor="$black"
					backgroundColor="$primary-60"
					className="testclassName"
					borderColor=""
					id="test-id"
				>
					<section>
						<span>hihi</span>
					</section>
				</Box>
				<Box width="100px" height="100px" backgroundColor="$primary-50"></Box>
				<Box width="100px" height="100px" backgroundColor="$primary-10"></Box>
				<Box width="100px" height="100px" backgroundColor="$primary-40"></Box>
				<Box width="100px" height="100px" backgroundColor="$primary-30"></Box>
				<Box width="100px" height="100px" backgroundColor="$primary-20"></Box>
				<Box width="100px" height="100px" backgroundColor="$primary-10"></Box>
			</Box>
		);
	},
};
