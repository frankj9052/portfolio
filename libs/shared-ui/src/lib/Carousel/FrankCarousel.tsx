import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { Children, ReactNode, useCallback, useEffect, useRef } from 'react'
import { Pagination, Navigation } from 'swiper/modules'
import { useControlledState } from '../useHooks/useControlledState'
import useTimer from '../useHooks/useTimer'

export type FrankCarouselProps = {
    children: ReactNode,
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
    slidesPerView = 1,
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
    const timer = useTimer();

    // 点击slide切换到该slide下
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
        >
            <Swiper
                slidesPerView={slidesPerView}
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