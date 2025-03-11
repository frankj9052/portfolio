import { dateToCalendarDate } from "@frankjia9052/shared-utils";
import { CalendarDate, DateValue } from "@internationalized/date";
import { useControlledState } from "../useHooks/useControlledState";
import clsx from "clsx";

type Props = {
  // value: number,
  // handleValueChange: (date: CalendarDate) => void,
  variant?: 'Tiny' | 'Default' | 'WithShortcut',
  width?: number,
  isStartDateSelection?: boolean,
  minValue?: DateValue | null,
  maxValue?: DateValue | null,
  // test
  focusedValue?: CalendarDate,
  onFocusedValueChange?: (date: CalendarDate) => void,
}

export const FrankCalendar = ({
  // value,
  // handleValueChange,
  variant = 'Default',
  width,
  isStartDateSelection,
  minValue,
  maxValue,
  focusedValue,
  onFocusedValueChange,
}: Props) => {
  const test = dateToCalendarDate(new Date());
  const test2 = new CalendarDate(2023, 1, 1);
  const abc = useControlledState(
    focusedValue,
    test2
    // new CalendarDate(2023, 1, 1),
  )

  return (
    <div
    className={clsx({
      'flex justify-between rounded-medium shadow-md border-t-[1px] border-[#B5B5B5] ': variant === 'WithShortcut'
    })}
    style={{
      ...(variant === 'WithShortcut' && { width: `${width ? `${width}px` : '100%'}` })
    }}
    >
      Frank test
    </div>
  )
}

export default FrankCalendar;
