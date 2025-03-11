import React, { useEffect } from "react";

import { dateToCalendarDate, formatToMonthName, numberToMonthName } from "@frankjia9052/shared-utils";
import { CalendarDate, DateValue, getLocalTimeZone, today } from "@internationalized/date";
import { useControlledState } from "../useHooks/useControlledState";
import clsx from "clsx";
import { Card, CardBody } from "@heroui/react";
import FrankButtonBase from "../Button/FrankButtonBase";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const currentDay = today(getLocalTimeZone());
type Props = {
  variant?: 'Small' | 'Default' | 'WithShortcut',
  isStartDateSelection?: boolean,
  value?: DateValue | null,
  onValueChange?: (value: DateValue | null) => void,
  focusedValue?: CalendarDate,
  onFocusedValueChange?: (date: CalendarDate) => void,
  // value: number,
  // handleValueChange: (date: CalendarDate) => void,
  // width?: number,
  minValue?: DateValue | null,
  maxValue?: DateValue | null,
}

export const FrankCalendar = ({
  variant = 'Default',
  isStartDateSelection,
  value,
  onValueChange,
  focusedValue,
  onFocusedValueChange,
  minValue,
  maxValue,
}: Props) => {
  const [focusedValueState, setFocusedValueState] = useControlledState(
    focusedValue,
    dateToCalendarDate(new Date())
  )
  const [valueState, setValueState] = useControlledState(
    value,
    null,
  )
  const dateSelectionBtns = isStartDateSelection && variant === 'WithShortcut'
    ? [
      {
        label: 'Today',
        onPress: () => {
          if (setValueState) {
            setValueState(currentDay);
          }
          onValueChange?.(currentDay);
        }
      },
      {
        label: 'Next week',
        onPress: () => {
          const currentWeekDay = currentDay.toDate(getLocalTimeZone()).getDay();
          const daysUtilNextMonday = currentWeekDay === 0 ? 1 : 8 - currentWeekDay;
          const nextMonday = currentDay.add({ days: daysUtilNextMonday });
          if (setValueState) {
            setValueState(nextMonday);
          }
          onValueChange?.(nextMonday);
        }
      },
      {
        label: 'Next month',
        onPress: () => {
          const nextMonth = currentDay.add({ months: 1 }).set({ day: 1 });
          if (setValueState) {
            setValueState(nextMonth);
          }
          onValueChange?.(nextMonth);
        }
      },
    ]
    : [
      {
        label: 'No end day',
        onPress: () => {
          const noEnd = currentDay.add({ years: 65 });
          if (setValueState) {
            setValueState(noEnd);
          }
          onValueChange?.(noEnd);
        }
      },
      {
        label: 'End of this month',
        onPress: () => {
          const endOfThisMonth = currentDay.add({ months: 1 }).set({ day: 1 }).subtract({ days: 1 });
          if (setValueState) {
            setValueState(endOfThisMonth);
          }
          onValueChange?.(endOfThisMonth);
        }
      },
      {
        label: 'End of next month',
        onPress: () => {
          const endOfNextMonth = currentDay.add({ months: 2 }).set({ day: 1 }).subtract({ days: 1 });
          if (setValueState) {
            setValueState(endOfNextMonth);
          }
          onValueChange?.(endOfNextMonth);
        }
      },
    ]

  useEffect(() => {
    if (valueState) {
      if (setFocusedValueState) {
        setFocusedValueState(valueState as CalendarDate);
      }
    }
    onFocusedValueChange?.(valueState as CalendarDate);
  }, [valueState, setFocusedValueState, onFocusedValueChange])

  return (
    <Card
      shadow={variant === 'Small' ? 'none' : 'sm'}

    >
      <div
        className={clsx('flex', {
          'w-[404px] h-[232px]': variant === 'WithShortcut',
          'w-[226px] h-[232px]': variant === 'Default',
          'w-[180px] h-[200px]': variant === 'Small',
        })}
      >
        {/* Left Control */}
        <div
          className={clsx('abg-red-300 w-[140px] h-full py-3 px-[7px] border-r-1 border-[#E3E3E3]', {
            'hidden': variant !== 'WithShortcut'
          })}
        >
          {
            dateSelectionBtns && dateSelectionBtns.map((btn, index) => {
              return (
                <FrankButtonBase
                  customizeContent={
                    <div className="w-full text-left pl-[5px]">
                      {btn.label}
                    </div>
                  }
                  disableRipple
                  variant="light"
                  height={32}
                  radius="sm"
                  onPress={btn.onPress}
                  key={`${btn.label}-${index}`}
                />
              )
            })
          }
        </div>
        {/* Right Calendar */}
        <div
          className="flex-1 h-full py-3 px-4 flex flex-col gap-3 bg-red-300"
        >
          {/* Calendar Header */}
          <div
            className="flex justify-between items-center bg-blue-200"
          >
            <div>{`${numberToMonthName(focusedValueState.month)} ${focusedValueState.year}`}</div>
            <div
              className="flex gap-2"
            >
              <FrankButtonBase
                customizeContent={<IoIosArrowBack />}
                width={24}
                height={24}
                variant="light"
                disableRipple
              />
              <FrankButtonBase
                customizeContent={<IoIosArrowForward />}
                width={24}
                height={24}
                variant="light"
                disableRipple
              />
            </div>
          </div>
          {/* Calendar Body */}
          <div>
            calendar body
          </div>
        </div>
      </div>
    </Card>
  )
}

export default FrankCalendar;
