import { useMemo, useEffect, useRef } from 'react';
import debounce from 'lodash.debounce';

export const useDebouncedCallback = <T extends (...args: any[]) => void>(
    callback: T,
    delay = 500
) => {
    const callbackRef = useRef(callback);

    // 每次 callback 更新时，更新 ref
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const debouncedFn = useMemo(() => {
        return debounce((...args: Parameters<T>) => {
            callbackRef.current(...args);
        }, delay ?? 500);
    }, [delay]);

    useEffect(() => {
        return () => {
            debouncedFn.cancel();
        };
    }, [debouncedFn]);

    return debouncedFn;
};

export default useDebouncedCallback;
