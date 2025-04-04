import TimeScale from "./TimeScale";
import CalendarGrid, { CalendarGridRef } from "./CalendarGrid";
import { ShiftType } from "../FrankBigCalendar";
import { format } from "date-fns";
import FrankAvatar from "../../Avatar/FrankAvatar";
import { useEffect, useRef, useState } from "react";
import {CalendarShiftComponent} from "./CalendarShiftComponent";
import CurrentTimeIndicator from "./CurrentTimeIndicator";
import { getEventHeight, getTopOffset } from "@frankjia9052/shared-utils";

export type TimeGridDayProps = {
    width?: number;
    height?: number;
    startHour?: number,
    endHour?: number,
    intervalPerHour?: number,
    rowHeight?: number,
    shiftsData?: ShiftType[],
}

export function TimeGridDay({
    width,
    height,
    startHour = 9,
    endHour = 18,
    rowHeight = 25,
    intervalPerHour = 2,
    shiftsData = [],
}: TimeGridDayProps) {
    const gridRef = useRef<CalendarGridRef>(null);
    const [actualRowHeight, setActualRowHeight] = useState<number>(rowHeight);
    const calenderRef = useRef<HTMLDivElement>(null);

    // 滚动条默认处于中间
    useEffect(() => {
        if (calenderRef.current) {
            const { scrollHeight, clientHeight } = calenderRef.current;
            calenderRef.current.scrollTop = (scrollHeight - clientHeight) / 2;
        }
    }, [])
    const totalRows = (endHour - startHour) * intervalPerHour;

    useEffect(() => {
        if (gridRef.current) {
            const totalHeight = gridRef.current.getHeight();
            if (totalHeight && totalHeight > 0) {
                const newRowHeight = totalHeight / totalRows;
                setActualRowHeight(newRowHeight);
            }
        }
    }, [shiftsData, startHour, endHour, intervalPerHour, totalRows]);

    // 按医生+日期分组
    const groupedByDoctorPerDay = shiftsData?.reduce((acc, shift) => {
        const dateKey = format(shift.startTime, 'yyyy-MM-dd');
        const key = `${shift.providerUserId}-${dateKey}`;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(shift);
        return acc;
    }, {} as Record<string, ShiftType[]>);

    const groupedKeys = Object.keys(groupedByDoctorPerDay);
    const totalColumns = groupedKeys.length || 1;
    return (
        <div
            style={{
                width: width ? `${width}px` : '100%',
                height: height ? `${height}px` : '100%',
            }}
            className="overflow-y-auto font-inter text-[#0f1324]"
            ref={calenderRef}
        >
            {/* Calendar Header */}
            <div
                className="h-[38px] pl-8 sticky left-0 top-0 bg-white z-10"
            >
                <div
                    className="h-full flex"
                >
                    {
                        groupedKeys.map((key) => {
                            const firstShift = groupedByDoctorPerDay[key][0]
                            return (
                                <div
                                    key={`${firstShift.providerUserId}-${format(firstShift.startTime, 'yyyy-MM-dd')}`}
                                    className="flex-1"
                                >
                                    <div
                                        className="flex items-center justify-center gap-2 select-none"
                                    >
                                        {/* doctor avatar */}
                                        <div>
                                            <FrankAvatar
                                                name={firstShift.providerUserId}
                                                src={firstShift.photo}
                                                radius="full"
                                                className="w-[24px] h-auto aspect-square"
                                            />
                                        </div>
                                        {/* doctor name */}
                                        <div
                                            className="font-inter font-[500] text-[13px] leading-[20px] text-[#303030]"
                                        >
                                            {firstShift.providerName}
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
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
                        rowHeight={50}
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
                        columnCount={1}
                        ref={gridRef}
                    />

                    {/* 当前时间指针 */}
                    <CurrentTimeIndicator
                        top={getTopOffset(new Date(), 0, actualRowHeight, intervalPerHour)}
                    />

                    {/* 渲染医生shift */}
                    <div className="absolute top-0 left-0 w-full z-[5] h-full">
                        {groupedKeys.map((key, colIndex) => {
                            const shifts = groupedByDoctorPerDay[key];
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

                                    {shifts.map((shift) => {
                                        const top = getTopOffset(shift.startTime, startHour, actualRowHeight, intervalPerHour);
                                        const height = getEventHeight(shift.startTime, shift.endTime, actualRowHeight, intervalPerHour);
                                        const containerWidth = width || gridRef.current?.getWidth() || 0;
                                        const columnWidth = containerWidth * (widthPercent / 100) - 2;
                                        return (

                                            <div
                                                className="absolute"
                                                style={{
                                                    width: columnWidth,
                                                    top,
                                                    height,
                                                }}
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
                            );
                        })}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default TimeGridDay;
