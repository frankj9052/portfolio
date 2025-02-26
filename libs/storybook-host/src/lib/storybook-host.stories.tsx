import type { Meta, StoryObj } from '@storybook/react';
import StorybookHost from './storybook-host';

const meta = {
    component: StorybookHost,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof StorybookHost>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}