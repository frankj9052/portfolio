import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export type CalendarGridProps = {
    width?: number;
    startHour?: number; // default 0
    endHour?: number; // default 24
    intervalPerHour?: number; // 一小时分几格，默认2（每30分钟）
    columnCount: number; // 几列， 1=dayView, 7=weekView

}

export type CalendarGridRef = {
    getHeight: () => number | null;
};

export const CalendarGrid = forwardRef<CalendarGridRef, CalendarGridProps>(({
    width,
    startHour = 0,
    endHour = 24,
    intervalPerHour = 2,
    columnCount
}, ref) => {
    const totalRows = (endHour - startHour) * intervalPerHour;
    const gridRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => ({
        getHeight: () => gridRef.current?.offsetHeight ?? null,
    }));

    return (
        <div
            className="grid border-t border-l border-gray-200 min-h-full"
            style={{
                width: width ? `${width}px` : '100%',
                gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
                gridTemplateRows: `repeat(${totalRows}, minmax(25px, 1fr))`,
            }}
            ref={gridRef}
        >
            {
                Array.from({ length: columnCount * totalRows }).map((_, index) => (
                    <div
                        key={index}
                        className="border-gray-200 border-b border-r"
                    />
                ))
            }
        </div>
    )
})

export default CalendarGrid;
