import type { Meta, StoryObj } from '@storybook/react';
import { FrankAddressInput } from './FrankAddressInput';
const meta = {
    component: FrankAddressInput,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankAddressInput>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}
