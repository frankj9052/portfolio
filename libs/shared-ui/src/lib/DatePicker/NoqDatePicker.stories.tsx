import type { Meta, StoryObj } from '@storybook/react';
import { NoqDatePicker } from './NoqDatePicker';

const meta = {
    component: NoqDatePicker,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
        width: 144,
    },
} satisfies Meta<typeof NoqDatePicker>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}
