import type { Meta, StoryObj } from '@storybook/react';
import { FrankAvatar } from './FrankAvatar';

const meta = {
    component: FrankAvatar,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankAvatar>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}
