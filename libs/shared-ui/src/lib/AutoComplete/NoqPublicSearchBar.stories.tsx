import type { Meta, StoryObj } from '@storybook/react';
import { NoqPublicSearchBar } from './NoqPublicSearchBar';

const meta = {
    component: NoqPublicSearchBar,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof NoqPublicSearchBar>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}
