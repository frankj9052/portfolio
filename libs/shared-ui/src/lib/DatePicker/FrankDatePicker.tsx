import { CalendarDate, DatePicker, DateValue } from "@heroui/react";
import { CalendarDateTime, ZonedDateTime } from "@internationalized/date";
import clsx from "clsx";
import { ReactNode } from "react";

export type FrankDatePickerProps = {
    variant?: "flat" | "faded" | "bordered" | "underlined",
    defaultValue?: DateValue | null,
    value?: DateValue | null,
    onChange?: (value: CalendarDate | CalendarDateTime | ZonedDateTime | null) => void,
    radius?: "sm" | "md" | "lg" | "none" | "full",
    endContent?: ReactNode,
    minValue?: DateValue | null,
    maxValue?: DateValue | null,
    label?: ReactNode,
    labelPlacement?: "outside" | "outside-left" | "inside"
}
export function FrankDatePicker({
    variant,
    defaultValue,
    value,
    onChange,
    radius,
    endContent,
    minValue,
    maxValue,
    label,
    labelPlacement
}: FrankDatePickerProps) {
    return (
        <DatePicker
            aria-label="Date Picker"
            variant={variant}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            minValue={minValue}
            maxValue={maxValue}
            label={label}
            labelPlacement={labelPlacement}
            classNames={{
                // label: 'translate-y-0',
                selectorButton: 'w-[20px] h-[20px] min-w-0',
                inputWrapper: clsx('min-h-0 h-[32px]', {
                    'border-1': variant === 'bordered' || variant === 'faded',
                }),
            }}
            radius={radius}
            endContent={endContent}
            fullWidth
            popoverProps={{
                shadow: 'sm',
            }}
            showMonthAndYearPickers
            calendarProps={{
                classNames: {
                    base: clsx('pt-3 bg-transparent shadow-none'),
                    content: clsx("w-full px-4",),
                    headerWrapper: 'px-0',
                    // header: 'bg-blue-300',
                    grid: "w-full",
                    gridWrapper: "w-full",
                    gridHeader: "bg-transparent shadow-none",
                    gridBody: "bg-transparent",
                    cellButton: [
                        '[&[data-today="true"]]:bg-[#e3e3e3]',
                        'data-[selected=true]:!bg-[#003f3c]',
                        'data-[hover=true]:!bg-[#0c534f]',
                        'data-[hover=true]:text-[#e4ffe5]',
                        'font-inter text-[13px] w-[23px] h-[23px]'
                    ],
                    gridHeaderRow: 'justify-between px-0 py-0',
                    gridBodyRow: "justify-between",
                    gridHeaderCell: "w-[23px] h-[23px]"
                }
            }}
        />
    )
}

export default FrankDatePicker;
