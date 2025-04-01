import type { Meta, StoryObj } from '@storybook/react';
import { TimeGridWeek } from './TimeGridWeek';

const meta = {
    component: TimeGridWeek,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof TimeGridWeek>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: 1098,
        height: 714
    },
}
