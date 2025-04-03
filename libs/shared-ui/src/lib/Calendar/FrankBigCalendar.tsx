import { Card } from "@heroui/react";
import { useControlledState } from "../useHooks/useControlledState";
import { addDays, format, isSameDay, subDays } from "date-fns";
import FrankButtonBase from "../Button/FrankButtonBase";
import FrankArrowSwitcher from "../Tabs/FrankArrowSwitcher";
import CalendarViewSwitcher from "../Tabs/CalendarViewSwitcher";
import TimeGridWeek from "./FrankBigCalendarParts/TimeGridWeek";
import TimeGridDay from "./FrankBigCalendarParts/TimeGridDay";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export type ViewType = 'timeGridWeek' | 'timeGridDay' | 'listDay';
export type BookingStatus = "AVAILABLE" | "BOOKED" | "UNAVAILABLE" | "PENDING" | "CANCELLED" | "ARRIVED" | "COMPLETE" | "MISS"
export type AppointmentType = {
  startTime: Date,
  endTime: Date,
  patientUserId?: string,
  patientName?: string,
  clinicLocation?: string,
  appointmentType?: string,
  patientGender?: string,
  patientAge?: number,
  doctorName?: string, // 可能不需要
  id?: string, // 可能不需要
  src?: string, // 可能不需要
  status?: BookingStatus,
  room?: string
}
export type ShiftType = {
  startTime: Date,
  endTime: Date,
  photo: string,
  doctorUserId: string,
  doctorName?: string,
  backgroundColor: string,
  appointments?: AppointmentType[]
}

export type FrankBigCalendarProps = {
  width?: number,
  height?: number,
  curerntView?: ViewType,
  onCurrentViewChange?: (viewType: ViewType) => void,
  focusedDate?: Date,
  onFocusedDateChange?: (newDate: Date) => void,
  shiftsData?: ShiftType[],
}


export function FrankBigCalendar({
  width,
  height,
  curerntView,
  onCurrentViewChange,
  focusedDate,
  onFocusedDateChange,
  shiftsData = [],
}: FrankBigCalendarProps) {
  const [currentViewState, setCurrentViewState] = useControlledState<ViewType>(
    curerntView,
    'timeGridWeek'
  );
  const [focusedDateState, setFocusedDateState] = useControlledState(
    focusedDate,
    new Date()
  );
  const getDateBasedOnView = (date: Date): string => {
    switch (currentViewState) {
      case 'timeGridWeek':
        return `${format(date, 'MMMM')} ${format(date, 'yyyy')}`;
      default:
        return `${format(date, 'dd')} ${format(date, 'MMMM')} ${format(date, 'yyyy')}`;
    }
  }

  const getCalendar = (view: ViewType) => {
    switch (view) {
      case 'timeGridWeek':
        return <TimeGridWeek />
      case 'timeGridDay':
        return <TimeGridDay
          shiftsData={shiftsData.filter(shift => isSameDay(shift.startTime, focusedDateState))}
          startHour={0}
          endHour={24}
        />
      case 'listDay':
        return <div>list day</div>
      default:
        return <div>view</div>
    }
  }

  // 切换视图
  return (
    <DndProvider
      backend={HTML5Backend}
    >
      <Card
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : '100%',
        }}
        shadow="sm"
        className="px-4 pt-4 pb-7"
      >
        {/* Calendar Controller */}
        <div
          className='flex justify-between items-center pb-4'
        >
          {/* Date */}
          <div
            className='font-[500] text-2xl tracking-[-0.2px] text-[#303030]'
          >
            {
              getDateBasedOnView(focusedDateState)
            }
          </div>
          {/* Control */}
          <div
            className='flex gap-3'
          >
            <FrankButtonBase
              customizeContent={<div
                className='font-inter text-[13px] text-[#303030] font-[500]'
              >
                Today
              </div>}
              variant='bordered'
              height={32}
              width={62}
              disableRipple
              backgroundColor='#FFF'
              radius='sm'
              onPress={() => {
                setFocusedDateState?.(new Date());
                onFocusedDateChange?.(new Date());
              }}
            />
            <FrankArrowSwitcher
              handleLeftArrowClick={() => {
                if (currentViewState === 'timeGridWeek') {
                  setFocusedDateState?.(subDays(focusedDateState, 7));
                  onFocusedDateChange?.(subDays(focusedDateState, 7));
                  return;
                }
                setFocusedDateState?.(subDays(focusedDateState, 1));
                onFocusedDateChange?.(subDays(focusedDateState, 1));
              }}
              handleRightArrowClick={() => {
                if (currentViewState === 'timeGridWeek') {
                  setFocusedDateState?.(addDays(focusedDateState, 7));
                  onFocusedDateChange?.(addDays(focusedDateState, 7));
                  return;
                }
                setFocusedDateState?.(addDays(focusedDateState, 1));
                onFocusedDateChange?.(addDays(focusedDateState, 1));
              }}
            />
            <CalendarViewSwitcher
              handleClickLeftButton={() => {
                setCurrentViewState?.('listDay');
                onCurrentViewChange?.('listDay');
              }}
              handleClickMiddleButton={() => {
                setCurrentViewState?.('timeGridDay');
                onCurrentViewChange?.('timeGridDay');
              }}
              handleClickRightButton={() => {
                setCurrentViewState?.('timeGridWeek');
                onCurrentViewChange?.('timeGridWeek');
              }}
            />
          </div>
        </div>
        {/* Calendar Body */}
        <div
          className="min-h-[calc(100%-48px)]"
        >
          {getCalendar(currentViewState)}
        </div>
      </Card>
    </DndProvider>
  )
}

export default FrankBigCalendar;
