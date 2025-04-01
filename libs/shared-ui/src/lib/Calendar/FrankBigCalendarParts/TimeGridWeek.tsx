import { startOfWeek, addDays, format, setHours, setMinutes } from 'date-fns'
import { useEffect, useRef } from 'react'
import clsx from 'clsx'

const resources = ['Dr. A', 'Dr. B', 'Dr. C']
const hours = Array.from({ length: 10 }, (_, i) => i + 8) // 08:00 – 18:00

export function TimeGridWeek() {
  const now = new Date()
  const weekStart = startOfWeek(now, { weekStartsOn: 1 }) // 周一开始
  const scrollRef = useRef<HTMLDivElement>(null)

  // 自动滚动到当前时间（粗略版）
  useEffect(() => {
    const hour = now.getHours()
    const offset = (hour - 8) * 60 // 每小时 60px 假设
    scrollRef.current?.scrollTo({ top: offset, behavior: 'smooth' })
  }, [])

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header：日期 + 资源名 */}
      <div className="grid grid-cols-[80px_repeat(3,minmax(0,1fr))] border-b">
        <div className="bg-white"></div>
        {resources.map((resource, idx) => (
          <div key={idx} className="text-center py-2 font-medium bg-gray-50 border-l">
            {resource}
          </div>
        ))}
      </div>

      {/* 时间 + 网格主体 */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto relative">
        <div className="grid grid-cols-[80px_repeat(3,minmax(0,1fr))]">
          {/* 左侧时间栏 */}
          <div className="flex flex-col">
            {hours.map((hour) => (
              <div key={hour} className="h-16 text-xs text-right pr-2 border-t">
                {format(setHours(setMinutes(now, 0), hour), 'HH:mm')}
              </div>
            ))}
          </div>

          {/* 每个资源列 */}
          {resources.map((_, resourceIdx) => (
            <div key={resourceIdx} className="flex flex-col border-l">
              {hours.map((hour, i) => (
                <div key={i} className="h-16 border-t relative group">
                  {/* 未来放事件 */}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* 当前时间线 */}
        <div className="absolute left-0 right-0 pointer-events-none">
          <TimeIndicator />
        </div>
      </div>
    </div>
  )
}

function TimeIndicator() {
  const now = new Date()
  const hour = now.getHours()
  const minutes = now.getMinutes()
  const offset = ((hour - 8) * 60 + minutes) // 1分钟1px
  return (
    <div style={{ top: `${offset}px` }} className="h-px bg-red-500 w-full absolute z-10">
      <div className="w-2 h-2 bg-red-500 rounded-full -mt-1" />
    </div>
  )
}

export default TimeGridWeek;

