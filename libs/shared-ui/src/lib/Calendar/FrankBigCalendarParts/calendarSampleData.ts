import { set } from "date-fns";
import { ShiftType } from "../FrankBigCalendar";

const today = new Date();

const shiftData_provider01: ShiftType = {
    startTime: set(today, { hours: 9, minutes: 0, seconds: 0, milliseconds: 0 }),
    endTime: set(today, { hours: 18, minutes: 0, seconds: 0, milliseconds: 0 }),
    photo: 'https://www.srjca.com/wp-content/uploads/2020/09/doctor.png',
    providerUserId: '01',
    providerName: 'Thomas',
    backgroundColor: '#C530C5',
    bookings: [
        {
            startTime: set(today, { hours: 10, minutes: 0, seconds: 0, milliseconds: 0 }),
            endTime: set(today, { hours: 11, minutes: 0, seconds: 0, milliseconds: 0 }),
            clientUserId: '01',
            clientName: 'John',
            location: 'locationId01',
            bookingMethod: ['ONLINE'],
            clientGender: 'Male',
            clientAge: 20,
            status: 'BOOKED',
        },
        {
            startTime: set(today, { hours: 11, minutes: 0, seconds: 0, milliseconds: 0 }),
            endTime: set(today, { hours: 12, minutes: 0, seconds: 0, milliseconds: 0 }),
            clientUserId: '02',
            clientName: 'Peter',
            location: 'locationId01',
            bookingMethod: ['ONLINE'],
            clientGender: 'Male',
            clientAge: 20,
            status: 'BOOKED',
        },
        {
            startTime: set(today, { hours: 12, minutes: 30, seconds: 0, milliseconds: 0 }),
            endTime: set(today, { hours: 13, minutes: 0, seconds: 0, milliseconds: 0 }),
            clientUserId: '02',
            clientName: 'Juliana',
            location: 'locationId01',
            bookingMethod: ['ONLINE'],
            clientGender: 'Female',
            clientAge: 20,
            status: 'PENDING',
        },
        {
            startTime: set(today, { hours: 13, minutes: 30, seconds: 0, milliseconds: 0 }),
            endTime: set(today, { hours: 14, minutes: 0, seconds: 0, milliseconds: 0 }),
            clientUserId: '03',
            clientName: 'Eric',
            location: 'locationId01',
            bookingMethod: ['ONLINE'],
            clientGender: 'Male',
            clientAge: 20,
            status: 'BOOKED',
        },
        {
            startTime: set(today, { hours: 15, minutes: 0, seconds: 0, milliseconds: 0 }),
            endTime: set(today, { hours: 16, minutes: 0, seconds: 0, milliseconds: 0 }),
            location: 'locationId01',
            bookingMethod: ['ONLINE'],
            status: 'AVAILABLE',
        },
        {
            startTime: set(today, { hours: 16, minutes: 0, seconds: 0, milliseconds: 0 }),
            endTime: set(today, { hours: 17, minutes: 0, seconds: 0, milliseconds: 0 }),
            bookingMethod: ['ONLINE', 'PHONE'],
            location: 'locationId01',
            status: 'AVAILABLE',
        },
    ]
}

const shiftData_provider02_01: ShiftType = {
    startTime: set(today, { hours: 10, minutes: 0, seconds: 0, milliseconds: 0 }),
    endTime: set(today, { hours: 13, minutes: 0, seconds: 0, milliseconds: 0 }),
    photo: 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*',
    providerUserId: '02',
    providerName: 'Kale',
    backgroundColor: '#0071E9',
    bookings: []
}

const shiftData_provider02_02: ShiftType = {
    startTime: set(today, { hours: 15, minutes: 0, seconds: 0, milliseconds: 0 }),
    endTime: set(today, { hours: 20, minutes: 0, seconds: 0, milliseconds: 0 }),
    photo: 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*',
    providerUserId: '02',
    providerName: 'Kale',
    backgroundColor: '#0071E9',
    bookings: []
}

const shiftData_provider03_01: ShiftType = {
    startTime: set(today, { hours: 7, minutes: 0, seconds: 0, milliseconds: 0 }),
    endTime: set(today, { hours: 9, minutes: 0, seconds: 0, milliseconds: 0 }),
    photo: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
    providerUserId: '03',
    providerName: 'Lily',
    backgroundColor: '#E5A500',
    bookings: []
}

const shiftData_provider03_02: ShiftType = {
    startTime: set(today, { hours: 12, minutes: 15, seconds: 0, milliseconds: 0 }),
    endTime: set(today, { hours: 15, minutes: 15, seconds: 0, milliseconds: 0 }),
    photo: 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*',
    providerUserId: '03',
    providerName: 'Lily',
    backgroundColor: '#E5A500',
    bookings: []
}

const shiftData_provider03_03: ShiftType = {
    startTime: set(today, { hours: 16, minutes: 30, seconds: 0, milliseconds: 0 }),
    endTime: set(today, { hours: 21, minutes: 30, seconds: 0, milliseconds: 0 }),
    photo: 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*',
    providerUserId: '03',
    providerName: 'Lily',
    backgroundColor: '#E5A500',
    bookings: []
}

const shiftDataAll: ShiftType[] = [
    shiftData_provider01,
    shiftData_provider02_01,
    shiftData_provider02_02,
    shiftData_provider03_01,
    shiftData_provider03_02,
    shiftData_provider03_03
]

export const calendarSampleData = {
    shiftData_provider01, // with booking slots
    shiftData_provider02_01, // No booking slots
    shiftDataAll,
}