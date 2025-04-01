import type { Meta, StoryObj } from '@storybook/react';
import { TimeGridDay } from './TimeGridDay';

const meta = {
    component: TimeGridDay,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof TimeGridDay>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: 1066,
        height: 630,
        startHour: 0,
        endHour: 24,
    },
}
