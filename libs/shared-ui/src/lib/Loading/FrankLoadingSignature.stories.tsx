import type { Meta, StoryObj } from '@storybook/react';
import { FrankLoadingSignature } from './FrankLoadingSignature';

const meta = {
    component: FrankLoadingSignature,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankLoadingSignature>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}
