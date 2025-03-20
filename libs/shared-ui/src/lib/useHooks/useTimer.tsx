import { useCallback, useEffect, useRef } from "react"

/**
 * @function useTimer
 * @description A custom hook for managing a timer with a configurable interval.
 * Provides functionality to set and reset a timer. The timer calls
 * a specified callback function at regular intervals.
 * @returns {Object} - An object containing two functions:
 *   - `setTimeInterval`: Sets a timer to call the given callback
 *     function every specified number of seconds.
 *     @param {number} seconds - The interval duration in seconds.
 *     @param {Function} callback - The callback function to execute
 *     at each interval.
 *   - `resetTimer`: Resets the timer using the last set interval
 *     duration and callback function.
 */
export const useTimer = () => {
    // 存储intervalId
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const callBackRef = useRef<(() => void) | null>(null);
    const intervalDurationRef = useRef<number | null>(null);

    const setTimeInterval = useCallback((seconds: number, callback: () => void) => {
        // 现存储callback和事件间隔
        callBackRef.current = callback;
        intervalDurationRef.current = seconds;

        // 清除已有的定时器
        if(intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        // 设置新的定时器
        intervalRef.current = setInterval(() => {
            callBackRef.current?.();
        }, seconds * 1000);        
    }, [])

    const resetTimer = useCallback(() => {
        if(intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        if(callBackRef.current && intervalDurationRef.current) {
            intervalRef.current = setInterval(() => {
                callBackRef.current?.();
            }, intervalDurationRef.current * 1000)
        }
    }, [])

    // 清除 intervalId 防止组件卸载时内存泄露
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, []);

    return {
        setTimeInterval,
        resetTimer,
    }
}

export default useTimer;