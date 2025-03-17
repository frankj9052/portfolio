'use client'
import { Spacer } from "@heroui/react"
import { AvatarImage } from "./heroSectionLayout/AvatarImage"
import { Info } from "./heroSectionLayout/Info"
import { MediaIcons } from "./heroSectionLayout/MediaIcons"
import { FrankButtonBase } from "@frankjia9052/shared-ui"
import { motion } from "framer-motion"
import { IoArrowDown } from "react-icons/io5";

export const HeroSectionLayout = () => {
    return (
        <div
            className="flex flex-col gap-8"
        >
            <Spacer y={8} className="md:hidden" />
            <div
                className="flex justify-between items-center lg:gap-[120px] md:gap-[60px] gap-[60px]"
            >
                <MediaIcons />
                <div
                    className="hidden md:block"
                >
                    <Info />
                </div>
                <div
                    className="mr-20 md:mr-0"
                >
                    <AvatarImage />
                </div>
            </div>

            <div
                className="md:hidden"
            >
                <Spacer y={5} />
                <Info />
            </div>

            {/* Scroll down button */}
            <div
                className="flex justify-center items-center"
            >
                <FrankButtonBase
                    customizeContent={
                        <div
                            className="text-[#0E2431] font-[500] font-popins px-2 py-1 flex gap-2 items-center">
                            <span>Scroll Down</span>
                            <motion.span
                                animate={{ y: [0, 5, 0] }}
                                transition={{
                                    duration: 1.5,
                                    ease: 'easeInOut',
                                    repeat: Infinity
                                }}
                            >
                                <IoArrowDown size={20} />
                            </motion.span>
                        </div>
                    }
                    disableRipple
                    onPress={() => { }}
                    radius="sm"
                    variant="light"
                    width={196}
                />
                                <motion.svg
                                    viewBox="0 0 600 600"
                                    width={600}
                                    height={600}
                                    initial='hidden'
                                    animate='show'
                                >
                                    <motion.line
                                        x1="220"
                                        y1="30"
                                        x2="360"
                                        y2="170"
                                        stroke="black"
                                        variants={pathVariants}
                                        custom={1}
                                    />
                                </motion.svg>
            </div>
        </div>
    )
}

const pathVariants = {
    hidden: {
        pathLength: 0,
    },
    show: (i:number) => {
        const delay = i;
        return {
            pathLength: 1,
            transition: {
                pathLength: {
                    delay,
                    type: "spring",
                    duration: 1.5,
                    bounce: 0
                }
            }
        }
    }
}