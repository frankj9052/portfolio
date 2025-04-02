import { format } from "date-fns";
import { ShiftType } from "../FrankBigCalendar";

export type CalendarEventComponentProps = {
  shift: ShiftType
}

export function CalendarEventComponent({
  shift
}: CalendarEventComponentProps) {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundColor: shift.backgroundColor,
      }}
    >
      <div className="font-semibold truncate">{shift.doctorName}</div>
      <div className="text-[10px]">
        {format(shift.startTime, "HH:mm")} - {format(shift.endTime, "HH:mm")}
      </div>
    </div>
  )
}

export default CalendarEventComponent;
