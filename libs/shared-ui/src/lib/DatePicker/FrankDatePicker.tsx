import { CalendarDate, DatePicker, DateValue } from "@heroui/react";
import { CalendarDateTime, ZonedDateTime } from "@internationalized/date";
import clsx from "clsx";
import { ReactNode } from "react";

export type FrankDatePickerProps = {
    width?: number,
    height?: number,
    variant?: "flat" | "faded" | "bordered" | "underlined",
    defaultValue?: DateValue | null,
    value?: DateValue | null,
    onChange?: (value: CalendarDate | CalendarDateTime | ZonedDateTime | null) => void,
    radius?: "sm" | "md" | "lg" | "none" | "full",
    endContent?: ReactNode,
    minValue?: DateValue | null,
    maxValue?: DateValue | null,
    // label?: ReactNode,
    // labelPlacement?: "outside" | "outside-left" | "inside"
}
export function FrankDatePicker({
    width,
    height,
    variant,
    defaultValue,
    value,
    onChange,
    radius,
    endContent,
    minValue,
    maxValue,
    // label,
    // labelPlacement
}: FrankDatePickerProps) {
    return (
        <div
            style={{
                width: width ? `${width}px` : '100%',
                height: height ? `${height}px` : '100%',
            }}
            className="flex"
        >
            <DatePicker
                aria-label="Date Picker"
                variant={variant}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                minValue={minValue}
                maxValue={maxValue}
                className={clsx(
                    "[&>div[data-slot='input-wrapper']]:min-h-0 [&>div[data-slot='input-wrapper']]:h-full", {
                    "[&>div[data-slot='input-wrapper']]:border-1": variant === 'bordered' || variant === 'faded'
                }
                )}
                classNames={{
                    selectorButton: 'w-[20px] h-[20px] min-w-0',
                    // inputWrapper: clsx('min-h-0 h-full', {
                    //     'border-1': variant === 'bordered' || variant === 'faded',
                    // }),
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
                        base: clsx('apt-3 bg-transparent shadow-none'),
                        gridHeader: "bg-transparent shadow-none",
                        cellButton: [
                            '[&[data-today="true"]]:bg-[#e3e3e3]',
                            'data-[selected=true]:!bg-[#003f3c]',
                            'data-[hover=true]:!bg-[#0c534f]',
                            'data-[hover=true]:text-[#e4ffe5]',
                        ],
                    }
                }}
            />
        </div>
    )
}

export default FrankDatePicker;
