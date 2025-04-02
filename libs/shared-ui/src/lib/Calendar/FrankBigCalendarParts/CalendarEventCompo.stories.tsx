import type { Meta, StoryObj } from '@storybook/react';
import { CalendarEventComponent } from './CalendarEventComponent';

const meta = {
    component: CalendarEventComponent,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof CalendarEventComponent>

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
