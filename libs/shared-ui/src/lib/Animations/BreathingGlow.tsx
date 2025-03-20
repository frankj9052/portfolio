import { motion } from "framer-motion";
import { ReactNode } from "react";

export type BreathingGlowProps = {
    children: ReactNode,
    duration?: number,
}
export function BreathingGlow({
    children,
    duration = 2
}: BreathingGlowProps) {
    return (
        <motion.div
            className=''
            animate={{
                opacity: [1, 0.7, 1],
                scale: [1, 0.7, 1]
            }}
            transition={{
                duration: duration,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror'
            }}
        >
            {
                children
            }
        </motion.div>
    )
}

export default BreathingGlow;
