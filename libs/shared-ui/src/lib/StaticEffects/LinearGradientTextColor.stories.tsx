import type { Meta, StoryObj } from '@storybook/react';
import { LinearGradientTextColor } from './LinearGradientTextColor';

const meta = {
    component: LinearGradientTextColor,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof LinearGradientTextColor>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}
