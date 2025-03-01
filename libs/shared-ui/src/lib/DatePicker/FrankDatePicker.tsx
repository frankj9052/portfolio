import { CalendarDate, DatePicker, DateValue } from "@heroui/react";
import { CalendarDateTime, ZonedDateTime } from "@internationalized/date";
import clsx from "clsx";

export type FrankDatePickerProps = {
    variant?: "flat" | "faded" | "bordered" | "underlined",
    defaultValue? : DateValue | null,
    value?: DateValue | null,
    onChange?: (value: CalendarDate | CalendarDateTime | ZonedDateTime | null) => void
}
export function FrankDatePicker({
    variant,
    defaultValue,
    value,
    onChange
}: FrankDatePickerProps) {
    return (
        <DatePicker
            variant={variant}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            classNames={{
                inputWrapper: clsx({
                    'border-1': variant === 'bordered' || variant === 'faded',
                })
            }}
            
        />
    )
}

export default FrankDatePicker;
