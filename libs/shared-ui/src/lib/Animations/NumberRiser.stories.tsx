import type { Meta, StoryObj } from '@storybook/react';
import {NumberRiser} from './NumberRiser';

const meta = {
    component: NumberRiser,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof NumberRiser>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        number: 20,
        duration: 1,
    },
}
