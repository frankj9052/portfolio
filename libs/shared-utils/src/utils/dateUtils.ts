import { CalendarDate, getLocalTimeZone, Time } from '@internationalized/date'
import { differenceInYears, format, formatDistance } from "date-fns";

/**
 * Validates whether the given value represents a valid date.
 * 
 * This function checks if the input is a valid date string in the `YYYY-MM-DD` format 
 * or a valid timestamp. It ensures that the provided date values are correctly 
 * interpreted by JavaScript’s `Date` object (e.g., rejecting invalid dates like `2025-02-33`).
 * 
 * @param {string | number} value - The input value to validate. It can be a date string in 
 *        `YYYY-MM-DD` format or a timestamp.
 * @returns {boolean} Returns `true` if the value represents a valid date, otherwise `false`.
 * 
 * @example
 * isValidDate("2025-02-28"); // true
 * isValidDate("2025-02-33"); // false
 * isValidDate(1672531199000); // true (valid timestamp)
 * isValidDate("invalid-date"); // false
 * isValidDate(""); // false
 */
const isValidDate = (value: string | number): boolean => {
    if (!value) {
        return false;
    }
    if (typeof value !== 'string' && typeof value !== 'number') {
        return false;
    }
    if (typeof value === 'string' && value.trim() === '') {
        return false;
    }
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
        const [year, month, day] = value.split('-').map(Number);
        const constructedDate = new Date(year, month - 1, day);
        return (
            constructedDate.getFullYear() === year &&
            constructedDate.getMonth() + 1 === month &&
            constructedDate.getDate() === day
        );
    }
    const date = new Date(value);
    return date instanceof Date && !isNaN(date.getTime());
}

/**
 * Converts a JavaScript `Date` object into a `CalendarDate` object.
 * 
 * This function extracts the year, month, and day from the given `Date` 
 * object and constructs a new `CalendarDate` instance.
 * 
 * @param {Date} date - The JavaScript `Date` object to be converted.
 * @returns {CalendarDate} A `CalendarDate` instance representing the same date.
 * 
 * @example
 * const date = new Date(2025, 0, 15); // January 15, 2025
 * const calendarDate = dateToCalendarDate(date);
 * console.log(calendarDate); // CalendarDate { year: 2025, month: 1, day: 15 }
 */
const dateToCalendarDate = (date: Date): CalendarDate => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return new CalendarDate(year, month, day)
}

/**
 * Converts a JavaScript `Date` object into a `Time` instance.
 * 
 * This function extracts the hour, minute, second, and millisecond from the given `Date` object 
 * and constructs a new `Time` instance, representing only the time portion of the date.
 * 
 * @param {Date} date - The JavaScript `Date` object from which to extract the time.
 * @returns {Time} A `Time` instance containing the extracted hour, minute, second, and millisecond.
 * 
 * @example
 * const date = new Date(2025, 0, 15, 14, 30, 45, 500); // 2025-01-15 14:30:45.500
 * const calendarTime = dateToCalendarTime(date);
 * console.log(calendarTime); // Time { hour: 14, minute: 30, second: 45, millisecond: 500 }
 */
const dateToCalendarTime = (date: Date): Time => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const millisecond = date.getMilliseconds();
    return new Time(hour, minute, second, millisecond);
}

function calendarDateToUnixTime(date: CalendarDate): number {
    return date.toDate(getLocalTimeZone()).getTime()
}

function numberToMonthName(month: number): string {
    return format(new Date(0, month - 1), 'MMMM')
}

// get age based on date of birth
function calculateAge(dob: Date) {
    return differenceInYears(new Date(), dob);
}

// format the time format
function formatShortDateTime(date: Date) {
    return format(date, 'dd MMM yy h:mm a')
}

// get how long it passed until now based on the given date
function timeAgo(date: string) {
    return formatDistance(new Date(date), new Date()) + ' ago';
}

/**
 * Generates an array of dates with 30-minute intervals between the given start time and end time.
 * 
 * @param {Date} startTime - The start time of the time range.
 * @param {Date} endTime - The end time of the time range.
 * @returns {Date[]} An array of dates with 30-minute intervals between the start time and end time.
 * 
 * @example
 * const startTime = new Date(2025, 0, 15, 8, 0, 0, 0); // 2025-01-15 08:00:00
 * const endTime = new Date(2025, 0, 15, 18, 0, 0, 0); // 2025-01-15 18:00:00
 * const timeArray = generateTimeArray(startTime, endTime);
 * console.log(timeArray);
 * // [
 * //   2025-01-15T08:00:00.000Z,
 * //   2025-01-15T08:30:00.000Z,
 * //   2025-01-15T09:00:00.000Z,
 * //   ...,
 * //   2025-01-15T17:30:00.000Z,
 * // ]
 */
function generateTimeArray(startTime: Date, endTime: Date): Date[] {
    const timeArray: Date[] = [];
    const currentTime = new Date(startTime);

    while (currentTime <= endTime) {
        timeArray.push(new Date(currentTime));
        currentTime.setMinutes(currentTime.getMinutes() + 30);
    }

    return timeArray
}

export {
    isValidDate,
    dateToCalendarDate,
    dateToCalendarTime,
    calendarDateToUnixTime,
    numberToMonthName,
    calculateAge,
    formatShortDateTime,
    timeAgo,
    generateTimeArray
}