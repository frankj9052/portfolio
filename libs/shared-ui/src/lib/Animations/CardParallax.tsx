import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import { Children, cloneElement, isValidElement, ReactElement, ReactNode, useEffect, useRef } from "react";
import Lenis from 'lenis';

type ScalableChildProps = {
    imageScale?: MotionValue<number>;
    [key: string]: any; // 为了不限制其它 props
};

type CardProps = {
    index: number,
    progress: MotionValue<number>,
    range: number[],
    targetScale: number,
    children: ReactNode,
    isScaled?: boolean,
    gap?: number,
    startPoint?: number,
}

const Card = ({
    index,
    progress,
    range,
    targetScale,
    children,
    isScaled,
    gap = 25,
    startPoint = 5,
}: CardProps) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    // 克隆 children 注入 imageScale 属性
    const enhancedChildren = isValidElement(children)
        ? cloneElement(children as ReactElement<ScalableChildProps>, { imageScale })
        : children;
    return (
        <div
            ref={container}
            className="h-screen flex items-center justify-center sticky top-0"
        >
            {/* Card */}
            <motion.div
                style={{
                    ...(isScaled && { scale }),
                    top: `calc(-${startPoint}vh + ${index * gap}px)`
                }}
                className="flex flex-col relative origin-top"
            >
                {/* body */}
                {enhancedChildren}
            </motion.div>
        </div>
    )
}

export type CardParallaxProps = {
    children: ReactNode,
    isScaled?: boolean,
    gap?: number,
    startPoint?: number,
}
/**
 * A component that creates a parallax effect by scaling and positioning
 * its children based on the scroll position.
 * Require: framer-motion, lenis
 *
 * @param children The children to render inside the parallax. include imageScale:MotionValue<number> in props if it include img and need scale requirement.
 * @param isScaled Whether the children should be scaled.
 * @param gap The gap between each child.
 * @param startPoint The starting point of the parallax effect, in screen view.
 * @returns A JSX element that renders the parallax effect.
 */

export function CardParallax({
    children,
    isScaled,
    gap,
    startPoint,
}: CardParallaxProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, [])

    return (
        <div
            ref={container}
            className="relative"
        >
            {
                Children.map(children, (child, index) => {
                    const targetScale = 1 - ((Children.count(children) - index) * 0.05);
                    return (
                        <Card
                            key={`p_${index}`}
                            index={index}
                            progress={scrollYProgress}
                            range={[index * .25, 1]}
                            targetScale={targetScale}
                            children={child}
                            isScaled={isScaled}
                            gap={gap}
                            startPoint={startPoint}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardParallax;