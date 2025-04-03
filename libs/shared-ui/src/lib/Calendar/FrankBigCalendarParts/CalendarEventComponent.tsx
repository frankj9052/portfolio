import { format } from "date-fns";
import { ShiftType } from "../FrankBigCalendar";
import { convertHexToRGBA, shiftColor } from "@frankjia9052/shared-utils";

export type CalendarEventComponentProps = {
  shift: ShiftType
}

export function CalendarEventComponent({
  shift
}: CalendarEventComponentProps) {
  return (
    <div
      className="w-full h-full flex gap-0.5"
    >
      <div
        className="w-2 rounded-t rounded-b"
        style={{
          // backgroundColor: shiftColor({ hex: shift.backgroundColor, shiftLevel: 1 }),
          backgroundColor: convertHexToRGBA(shift.backgroundColor, 0.4),

        }}
      />
      <div
        className=""
        style={{
          // backgroundColor: shiftColor({ hex: shift.backgroundColor, shiftLevel: 2 }),
          backgroundColor: convertHexToRGBA(shift.backgroundColor, 0.2),
          // backgroundColor: shift.backgroundColor,
          color: shiftColor({ hex: shift.backgroundColor, shiftLevel: 3 }),
          filter: 'saturate(130%)'
        }}
      >
        <div>
          <div className="font-semibold truncate">{shift.doctorName}</div>
        </div>
        <div className="text-[10px]">
          {format(shift.startTime, "HH:mm")} - {format(shift.endTime, "HH:mm")}
        </div>
      </div>
    </div>
  )
}

export default CalendarEventComponent;
