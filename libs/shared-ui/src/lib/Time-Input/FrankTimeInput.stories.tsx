import type { Meta, StoryObj } from '@storybook/react';
import FrankTimeInput from './FrankTimeInput';

const meta = {
    component: FrankTimeInput,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankTimeInput>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}