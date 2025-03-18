import { RefObject, useCallback, useEffect } from "react";

export function useClickOutside<T extends HTMLElement | null>(ref: RefObject<T>, callback: () => void) {
    const handleClick = useCallback((event: MouseEvent) => {
        if (!ref.current) return;
        if (!ref.current.contains(event.target as Node)) {
            callback();
        }
    }, [callback, ref])

    useEffect(() => {
        if (!ref.current) return;
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [handleClick, ref])
}

export default useClickOutside;