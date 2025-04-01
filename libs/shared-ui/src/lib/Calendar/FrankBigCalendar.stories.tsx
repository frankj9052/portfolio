import type { Meta, StoryObj } from '@storybook/react';
import { FrankBigCalendar, ShiftType } from './FrankBigCalendar';
import { set } from 'date-fns';
const today = new Date();

const shiftsData: ShiftType[] = [
    {
        startTime: set(today, {hours: 9, minutes: 0, seconds: 0, milliseconds: 0}),
        endTime: set(today, {hours: 18, minutes: 0, seconds: 0, milliseconds: 0}),
        photo: 'https://www.srjca.com/wp-content/uploads/2020/09/doctor.png',
        doctorUserId: '01',
        doctorName: 'Thomas',
        backgroundColor: '#C530C5',
        appointments: []
    },
    {
        startTime: set(today, {hours: 10, minutes: 0, seconds: 0, milliseconds: 0}),
        endTime: set(today, {hours: 13, minutes: 0, seconds: 0, milliseconds: 0}),
        photo: 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*',
        doctorUserId: '02',
        doctorName: 'Kale',
        backgroundColor: '#0071E9',
        appointments: []
    },
    {
        startTime: set(today, {hours: 15, minutes: 0, seconds: 0, milliseconds: 0}),
        endTime: set(today, {hours: 20, minutes: 0, seconds: 0, milliseconds: 0}),
        photo: 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*',
        doctorUserId: '02',
        doctorName: 'Kale',
        backgroundColor: '#0071E9',
        appointments: []
    }
]
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
        shiftsData,
    },
}


