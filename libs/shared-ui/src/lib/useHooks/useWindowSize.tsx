import { useEffect, useState } from 'react';

interface WindowSize {
  width: number | null;
  height: number | null;
}

export function useWindowSize(throttleDelay = 100): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: null,
    height: null,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let timeoutId: NodeJS.Timeout | null = null;

    const handleResize = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
          timeoutId = null;
        }, throttleDelay);
      }
    };

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [throttleDelay]);

  return windowSize;
}

export default useWindowSize;
