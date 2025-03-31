import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export function NumberRiser({
  number,
  duration = 1,
}: {
  number: number;
  duration?: number;
}) {
  const count = useMotionValue(1);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString()
  );
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isStarted) {
      const controls = animate(count, number, {
        duration: duration,
        onComplete: () => {},
      });

      return () => controls.stop();
    } else {
      count.set(1);
    }
  }, [isStarted, number, duration]);

  return (
    <motion.div
      onViewportEnter={() => setIsStarted(true)}
      onViewportLeave={() => setIsStarted(false)}
      viewport={{ once: false }}
    >
      <motion.div>{rounded}</motion.div>
    </motion.div>
  );
}

export default NumberRiser;
