import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { Children, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Pagination, Navigation } from 'swiper/modules'
import { useControlledState } from '../useHooks/useControlledState'
import useTimer from '../useHooks/useTimer'

export type FrankCarouselProps = {
    children: ReactNode,
    childWidth?: number,
    slidesPerView?: number,
    spaceBetween?: number,
    centeredSlides?: boolean,
    initialSlide?: number,
    loop?: boolean,
    autoPlay?: boolean,
    activeIndex?: number,
    onActiveIndexChange?: (index: number) => void,
    width?: number,
}
/**
 * A carousel component that wraps the Swiper library.
 *
 * @param props
 * @param props.children The children nodes to render inside the carousel.
 * @param props.slidesPerView The number of slides to show per view.
 * @param props.spaceBetween The space between each slide.
 * @param props.centeredSlides Whether to center the slides.
 * @param props.initialSlide The initial slide index.
 * @param props.loop Whether to loop the slides.
 * @param props.autoPlay Whether to auto play the slides.
 * @param props.activeIndex The active index of the slide.
 * @param props.onActiveIndexChange The callback function when the active index changes.
 * @param props.width The width of the carousel.
 * @returns
 */
export function FrankCarousel({
    children,
    childWidth,
    slidesPerView,
    spaceBetween = 64,
    centeredSlides,
    initialSlide = 0,
    loop,
    autoPlay,
    activeIndex,
    onActiveIndexChange,
    width,
}: FrankCarouselProps) {
    const [activeIndexState, setActiveIndexState] = useControlledState(
        activeIndex,
        0
    );
    const swiperRef = useRef<SwiperClass | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const timer = useTimer();
    const [slidesPerViewState, setSlidesPerViewState] = useState(1);

    // 计算 slidesPerView
    const updateSlidesPerView = useCallback(() => {
        if (!containerRef.current || !childWidth || slidesPerView) return;
        const containerWidth = containerRef.current.clientWidth;
        const newSlidesPerView = Math.floor((containerWidth + spaceBetween) / (childWidth + spaceBetween));
        setSlidesPerViewState(newSlidesPerView || 1);
    }, [childWidth, spaceBetween, slidesPerView]);

    useEffect(() => {
        // 初始化时计算一次
        updateSlidesPerView();

        // 监听窗口大小变化
        const resizeObserver = new ResizeObserver(updateSlidesPerView);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, [updateSlidesPerView]);

    // 点击slide切换到该slide下 => 自动播放
    const handleSlideClick = useCallback((index: number) => {
        if (swiperRef.current && swiperRef?.current?.loopedSlides) {
            swiperRef.current.slideToLoop(index, undefined, true);
        }
        setActiveIndexState?.(index);
        onActiveIndexChange?.(index);
    }, [onActiveIndexChange, setActiveIndexState])

    const clickNextSlide = useCallback(() => {
        const nextIndex = (activeIndexState + 1) % Children.count(children)
        handleSlideClick(nextIndex)
    }, [activeIndexState, children, handleSlideClick])

    useEffect(() => {
        if (autoPlay && loop) {
            timer.setTimeInterval(10, () => {
                clickNextSlide();
            })
        }
    }, [autoPlay, timer, loop, clickNextSlide])

    return (
        <div
            style={{
                width: width ? `${width}px` : '100%',
            }}
            ref={containerRef}
        >
            <Swiper
                slidesPerView={slidesPerView ?? slidesPerViewState}
                spaceBetween={spaceBetween}
                centeredSlides={centeredSlides}
                pagination={false}
                navigation={false}
                modules={[Pagination, Navigation]}
                initialSlide={initialSlide}
                loop={loop}
                onSlideChange={(swiper) => {
                    setActiveIndexState?.(swiper.realIndex);
                    onActiveIndexChange?.(swiper.realIndex);
                }}
                slideToClickedSlide={true}
                onSwiper={(swiper) => { swiperRef.current = swiper }}
            >
                {
                    Children.map(children, (child, index) => (
                        <SwiperSlide
                            key={`swiper-item-${index}`}
                        >
                            {child}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default FrankCarousel;