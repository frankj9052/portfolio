import type { Meta, StoryObj } from '@storybook/react';
import { TimeScale } from './TimeScale';

const meta = {
    component: TimeScale,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof TimeScale>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        // width: 1066,
        // height: 630,
        // startTime: '2023-08-01T13:00:00.000Z',
        // endTime: '2023-08-01T21:00:00.000Z',
    },
}
