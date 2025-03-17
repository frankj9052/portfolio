'use client';
import { motion } from "framer-motion";

const AnimatedText = () => {
    return (
        <motion.span
            initial={{ y: 0 }}
            animate={{ y: [0, 5, 0] }}
            transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity
            }}
        >
            Animation Test
        </motion.span>
    );
};

export default AnimatedText;
