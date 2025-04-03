import type { Meta, StoryObj } from '@storybook/react';
import { CalendarShiftComponent } from './CalendarShiftComponent';
import { calendarSampleData } from './calendarSampleData';

const meta = {
    component: CalendarShiftComponent,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
        rowHeight: 25,
        intervalPerHour: 2
    },
} satisfies Meta<typeof CalendarShiftComponent>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: 300,
        height: 400,
        shift: calendarSampleData.shiftData_provider01
    },
}

export const NoBookingSlot: Story = {
    args: {
        width: 300,
        height: 200,
        shift: calendarSampleData.shiftData_provider02_01
    },
}
