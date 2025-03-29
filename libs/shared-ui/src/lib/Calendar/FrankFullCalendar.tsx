import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import styles from './FrankFullCalendar.module.css'
import { useEffect, useRef, useState } from 'react';
import { useControlledState } from '../useHooks/useControlledState';
import { format } from 'date-fns';
import NoqButton from '../Button/NoqButton';
import FrankButtonBase from '../Button/FrankButtonBase';

export type FrankFullCalendarProps = {
    width?: number,
    height?: number,
    curerntView?: CurrentViewType,
    onCurrentViewChange?: (viewType: CurrentViewType) => void,
    focusedDate?: Date,
    onFocusedDateChange?: (newDate: Date) => void
}

export type CurrentViewType = 'timeGridWeek' | 'timeGridDay' | 'listDay'

export function FrankFullCalendar({
    width,
    height,
    curerntView,
    onCurrentViewChange,
    focusedDate,
    onFocusedDateChange
}: FrankFullCalendarProps) {
    const calendarWrapperRef = useRef<HTMLDivElement | null>(null);
    const calendarRef = useRef<FullCalendar | null>(null);
    const [currentViewState, setCurrentViewState] = useControlledState(
        curerntView,
        'timeGridWeek'
    );
    const [focusedDateState, setFocusedDateState] = useControlledState(
        focusedDate,
        new Date()
    );

    // 切换视图
    useEffect(() => {
        if (calendarRef.current) {
            const calendarApi = calendarRef.current.getApi();
            calendarApi.changeView(currentViewState);
        }
    }, [currentViewState])

    // 切换焦点日期
    useEffect(() => {
        if (calendarRef.current) {
            const calendarApi = calendarRef.current.getApi();
            calendarApi.gotoDate(focusedDateState);
        }
    })

    // 改元素
    useEffect(() => {
        if (calendarWrapperRef.current) {
            const todayBtn = calendarWrapperRef.current.querySelector('.fc-today-button');
            if (todayBtn instanceof HTMLElement) {
                todayBtn.classList.add(styles['fc-today-button']);
            }
        }
    }, [])

    const getDateBasedOnView = (date: Date): string => {
        switch (currentViewState) {
            case 'timeGridWeek':
                return `${format(date, 'MMMM')} ${format(date, 'yyyy')}`;
            default:
                return `${format(date, 'dd')} ${format(date, 'MMMM')} ${format(date, 'yyyy')}`;
        }
    }
    return (
        <div
            style={{
                width: width ? `${width}px` : '100%',
                height: height ? `${height}px` : '100%',
            }}
            className={`${styles.fullCalendar} font-inter flex flex-col`}
            ref={calendarWrapperRef}
        >
            {/* Customer Header */}
            <div
                className='bg-red-200 flex justify-between items-center'
            >
                {/* Date */}
                <div>
                    {
                        getDateBasedOnView(focusedDateState)
                    }
                </div>
                {/* Control */}
                <div>
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
                </div>
            </div>

            <FullCalendar
                ref={calendarRef}
                titleFormat={{
                    year: 'numeric',
                    month: 'long'
                }}
                height='100%'
                plugins={[
                    timeGridPlugin,
                    dayGridPlugin,
                    interactionPlugin,
                    listPlugin
                ]}
                initialView='timeGridWeek'
                headerToolbar={false}
                weekends={true}
                allDaySlot={false}
            // views={{
            //     timeGridDay: {
            //         titleFormat: {
            //             day: 'numeric',
            //             month: 'long',
            //             year: 'numeric',
            //         },
            //     },
            //     timeGridWeek: {
            //         titleFormat: {
            //             month: 'long',
            //             year: 'numeric',
            //         }
            //     },
            // }}
            />
        </div>
    )
}

export default FrankFullCalendar;
