import { format, isToday, getDay } from 'date-fns'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { ShiftType } from '../FrankBigCalendar'
import { getEventHeight, getTopOffset, getWeekDates } from '@frankjia9052/shared-utils'
import TimeScale from './TimeScale'
import CalendarGrid, { CalendarGridRef } from './CalendarGrid'
import CalendarShiftComponent from './CalendarShiftComponent'
import { toZonedTime } from 'date-fns-tz'
import { getLocalTimeZone } from '@internationalized/date'
import CurrentTimeIndicator from './CurrentTimeIndicator'

const getGroupShiftsByDateAndDoctor = (shiftsData: ShiftType[]) => {
  return shiftsData.reduce((acc, shift) => {
    const dateKey = format(shift.startTime, 'yyyy-MM-dd');
    const doctorKey = shift.providerUserId;
    if (!acc[dateKey]) {
      acc[dateKey] = {};
    }
    if (!acc[dateKey][doctorKey]) {
      acc[dateKey][doctorKey] = [];
    }
    acc[dateKey][doctorKey].push(shift);
    return acc;
  }, {} as Record<string, Record<string, ShiftType[]>>)
}

export type TimeGridWeekProps = {
  width?: number,
  height?: number,
  shiftsData?: ShiftType[],
  focusedDate?: Date,
  startHour?: number,
  endHour?: number,
  rowHeight?: number,
  intervalPerHour?: number
}

export function TimeGridWeek({
  width,
  height,
  shiftsData = [],
  focusedDate = new Date(),
  startHour = 9,
  endHour = 18,
  rowHeight = 25,
  intervalPerHour = 2,
}: TimeGridWeekProps) {
  const calendarRef = useRef<HTMLDivElement>(null)
  const groupShiftsByDateAndDoctor = getGroupShiftsByDateAndDoctor(shiftsData);
  const dateKeys = Object.keys(groupShiftsByDateAndDoctor);
  const daysOfWeek = getWeekDates(focusedDate);
  const [actualRowHeight, setActualRowHeight] = useState<number>(rowHeight);
  const [actualColumnWidth, setActualColumnWidth] = useState<number>(0);
  const gridRef = useRef<CalendarGridRef>(null);
  const totalRows = (endHour - startHour) * intervalPerHour;

  // 计算实际行高
  useEffect(() => {
    if (gridRef.current) {
      const totalHeight = gridRef.current.getHeight();
      if (totalHeight && totalHeight > 0) {
        const newRowHeight = totalHeight / totalRows;
        setActualRowHeight(newRowHeight);
      }
    }
  }, [shiftsData, startHour, endHour, intervalPerHour, totalRows]);

  // 计算实际列宽
  useEffect(() => {
    if (gridRef.current) {
      const totalWidth = gridRef.current.getWidth();
      if (totalWidth && totalWidth > 0) {
        const newColumnWidth = (totalWidth - 2) / daysOfWeek.length;
        setActualColumnWidth(newColumnWidth);
      }
    }
  }, [daysOfWeek]);

  // 滚动条默认处于中间
  useEffect(() => {
    if (calendarRef.current) {
      const { scrollHeight, clientHeight } = calendarRef.current;
      calendarRef.current.scrollTop = (scrollHeight - clientHeight) / 2;
    }
  }, [])
  return (
    <div
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
      }}
      className='overflow-y-auto overflow-x-hidden font-inter text-[#0f1324]'
      ref={calendarRef}
    >
      {/* Calendar Header */}
      <div
        className='h-8 pl-[33px] sticky left-0 top-0 bg-white z-10 box-content w-full'
      >
        <div
          className='h-full flex relative'
        >
          {
            daysOfWeek.map((day, index) => {
              return (
                <div
                  className={clsx('flex relative')}
                  style={{
                    width: `${actualColumnWidth}px`,
                  }}
                  key={day.toString() + '-' + index}
                >
                  <span
                    className={clsx('flex-1 flex justify-center font-inter text-[12px] leading-4', {
                      'text-[#616161]': !isToday(day),
                      'text-[#003F3C] font-[550]': isToday(day)
                    })}
                  >
                    {format(day, 'EEE d')}
                  </span>
                </div>
              )
            })
          }
          {/* Table */}
          <div
            className='absolute bottom-[-1px] left-0 w-full h-2/3 flex border-b-1'
          >
          </div>
        </div>

      </div>
      {/* Calendar Body */}
      <div
        className="flex h-[calc(100%-38px)]"
      >
        {/* Time Scale */}
        <div
          className="-translate-y-2"
        >
          <TimeScale
            startHour={startHour}
            endHour={endHour}
            rowHeight={actualRowHeight * 2}
          />
        </div>
        {/* 事件相对定位层 */}
        <div
          className="flex-1 relative"
        >
          <CalendarGrid
            startHour={startHour}
            endHour={endHour}
            intervalPerHour={intervalPerHour}
            columnCount={7}
            ref={gridRef}
          />
          {/* 渲染医生shift */}
          <div className="absolute top-0 left-0 w-full z-[5] h-full">
            {
              dateKeys.map((dateKey, i) => {
                const date = new Date(dateKey);
                const zonedDate = toZonedTime(date, getLocalTimeZone());
                // 找到是周几
                const index = getDay(zonedDate);
                return (
                  <div
                    key={dateKey + '-' + i}
                    className='absolute px-[2px]'
                    style={{
                      top: 0,
                      bottom: 0,
                      width: `${100 / daysOfWeek.length}%`,
                      left: `${(index + 1) * (100 / daysOfWeek.length)}%`,
                    }}
                  >
                    {
                      Object.keys(groupShiftsByDateAndDoctor[dateKey]).map((key, colIndex) => {
                        const shifts = groupShiftsByDateAndDoctor[dateKey][key];
                        const totalColumns = Object.keys(groupShiftsByDateAndDoctor[dateKey]).length;
                        const widthPercent = 100 / totalColumns;
                        const leftPercent = colIndex * widthPercent;
                        return (
                          <div
                            key={key}
                            className="absolute px-[2px]"
                            style={{
                              top: 0,
                              bottom: 0,
                              width: `${widthPercent}%`,
                              left: `${leftPercent}%`,
                            }}
                          >
                            {
                              shifts.map((shift) => {
                                const top = getTopOffset(shift.startTime, startHour, actualRowHeight, intervalPerHour);
                                const height = getEventHeight(shift.startTime, shift.endTime, actualRowHeight, intervalPerHour);
                                const containerWidth = width || gridRef.current?.getWidth() || 0;
                                const columnWidth = (containerWidth / 7) * (widthPercent / 100) - 2;
                                return (
                                  <div
                                    className="absolute"
                                    style={{
                                      width: columnWidth,
                                      top,
                                      height,
                                    }}
                                    key={`${shift.providerUserId}-${shift.startTime}-${shift.endTime}`}
                                  >
                                    <CalendarShiftComponent
                                      shift={shift}
                                      rowHeight={actualRowHeight}
                                      intervalPerHour={intervalPerHour}
                                    />
                                  </div>
                                );
                              })}
                          </div>
                        )
                      })
                    }
                    {/* 当前时间指针 */}
                    <CurrentTimeIndicator
                      top={getTopOffset(new Date(), 0, actualRowHeight, intervalPerHour)}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeGridWeek;

