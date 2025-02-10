import { CalendarDate } from '@internationalized/date'

/**
 * check if value is valid date
 * e.g. 2025-02-33 is false
 * @param value string | number
 * @returns boolean
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

const dateToCalendarDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return new CalendarDate(year, month, day)
}

export {
    isValidDate,
    dateToCalendarDate
}