'use client'
import { FrankButtonBase } from "@frankjia9052/shared-ui"
import { Spacer } from "@heroui/react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const data = {
    title: "Hi, I'm Frank",
    subTitle: "Full-stack Developer",
    description: "I create nice web applications for your business, good at both client and server software development.",
}

export const Info = () => {
    return (
        <div>
            <h2
                className="text-6xl font-semibold leading-[70px]"
            >
                {data.title}
            </h2>
            <h3
                className="text-color-text-gray text-xl font-semibold leading-[50px]"
            >
                {data.subTitle}
            </h3>
            <p
                className="text-color-text-gray md:max-w-[350px]"
            >
                {data.description}
            </p>
            <Spacer y={10}/>
            <div
                className="w-[196px] h-[65px]"
            >
                <FrankButtonBase
                    variant="solid"
                    color="primary"
                    customizeContent={<ButtonContent />}
                    radius="sm"
                />
            </div>

        </div>
    )
}

function ButtonContent() {
    return (
        <div
            className='flex text-white items-center justify-center gap-2'
        >
            <span>
                Contact Me
            </span>
            <span>
                <FaArrowAltCircleRight />
            </span>
        </div>
    )
}