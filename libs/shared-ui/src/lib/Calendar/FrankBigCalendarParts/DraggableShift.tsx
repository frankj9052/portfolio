import { ReactNode, useCallback, useEffect, useRef } from "react"
import { ShiftType } from "../FrankBigCalendar"
import { useDrag, useDragLayer } from "react-dnd"

export type DraggableItemType = {
    shift: ShiftType,
    doctorUserId: string,
}

export type DraggableShiftProps = {
    shift: ShiftType,
    children: ReactNode,
    rowHeight: number;
    intervalPerHour: number;
    startHour: number;
}

export const DraggableShift = ({
    shift,
    children,
    rowHeight,
    intervalPerHour,
    startHour
}: DraggableShiftProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const ghostRef = useRef<HTMLDivElement>(null);
    const [{ isDragging }, drag, preview] = useDrag({
        type: 'SHIFT',
        item: {
            shift,
            doctorUserId: shift.doctorUserId
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    })

    // 将ref元素连接到 drag ref
    drag(ref);
    // connect preview
    preview(ref);

    const { isDragging: isDraggingLayer, clientOffset } = useDragLayer((monitor) => ({
        isDragging: monitor.isDragging(),
        clientOffset: monitor.getClientOffset(),
    }));

    const getSnappedTop = useCallback((
        offsetY: number,
        containerTop: number
    ) => {
        const minutePerPixel = (60 / intervalPerHour) / rowHeight;
        const rawMinutes = (offsetY - containerTop) * minutePerPixel;
        const snappedMinutes = Math.round(rawMinutes / 30) * 30;
        const snappedPixel = snappedMinutes / minutePerPixel;
        return snappedPixel;
    }, [intervalPerHour, rowHeight]);

    useEffect(() => {
        if (!isDraggingLayer || !clientOffset || !ghostRef.current) return;

        const containerTop = ref.current?.closest('.relative')?.getBoundingClientRect().top ?? 0;
        const snappedTop = getSnappedTop(clientOffset.y, containerTop);
        console.log("snappedTop ===> ", snappedTop);
        ghostRef.current.style.top = `${snappedTop}px`;
    }, [isDraggingLayer, clientOffset, getSnappedTop]);

    return (
        <div>
            <div
                ref={ref}
                style={{
                    opacity: isDragging ? 0.1 : 1,
                    position: 'relative',
                    zIndex: isDragging ? 0 : 10,
                }}
            >
                {children}
            </div>
            {/* 拖动时的 ghost 显示吸附效果 */}
            {isDraggingLayer && (
                <div
                    ref={ghostRef}
                    className="absolute w-full z-50"
                    style={{
                        top: 0,
                        left: 0,
                        opacity: 0.7,
                    }}
                >
                    {/* {children} */}
                    Draged Me !!!
                </div>
            )}
        </div>
    )
}

export default DraggableShift;