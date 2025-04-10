import type { Meta, StoryObj } from '@storybook/react';
import { ListDay } from './ListDay';

const meta = {
    component: ListDay,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof ListDay>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}
