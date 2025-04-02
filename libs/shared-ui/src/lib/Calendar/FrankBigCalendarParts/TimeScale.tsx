export const TIMESCALE_WIDTH = 32

export type TimeScaleProps = {
    startHour?: number,
    endHour?: number,
    rowHeight?: number; // 每小时的高度
}

export function TimeScale({
    startHour = 0,
    endHour = 24,
    rowHeight = 25,
}: TimeScaleProps) {
    const totalIntervals = endHour - startHour;

    const hours = Array.from({ length: totalIntervals }).map((_, i) => {
        const hour = startHour + i;
        return hour.toString();
    })
    return (
        <div
            className={`grid text-sm font-inter h-full w-[${TIMESCALE_WIDTH}px]`}
            style={{

            }}
        >
            {
                hours.map((hour, i) => (
                    <div
                        key={i}
                        className="flex justify-end pr-2 items-start select-none"
                        style={{
                            height: `${rowHeight}px`,
                            gridTemplateRows: `repeat(${totalIntervals}, minmax(25px, 1fr))`
                        }}
                    >
                        {hour === "0"? "" : hour}
                    </div>
                ))
            }
        </div>
    )
}

export default TimeScale
