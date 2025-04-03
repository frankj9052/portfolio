import type { Meta, StoryObj } from '@storybook/react';
import { FrankBigCalendar } from './FrankBigCalendar';
import { calendarSampleData } from './FrankBigCalendarParts/calendarSampleData';

const meta = {
    component: FrankBigCalendar,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankBigCalendar>

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
    args: {
        width: 1098,
        height: 714,
        shiftsData: calendarSampleData.shiftDataAll,
    },
}


