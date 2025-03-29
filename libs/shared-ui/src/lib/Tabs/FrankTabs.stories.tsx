import type { Meta, StoryObj } from '@storybook/react';
import { FrankTabs } from './FrankTabs';

const meta = {
    component: FrankTabs,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankTabs>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}
