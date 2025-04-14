import type { Meta, StoryObj } from '@storybook/react';
import { FrankProgress } from './FrankProgress';

const meta = {
    title: 'Components/Progress/FrankProgress',
    component: FrankProgress,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankProgress>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: 200
    },
}
