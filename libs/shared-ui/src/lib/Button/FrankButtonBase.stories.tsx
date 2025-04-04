import type { Meta, StoryObj } from '@storybook/react';
import FrankButtonBase from './FrankButtonBase';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoArrowDown } from "react-icons/io5";
import { motion } from 'framer-motion';

const meta = {
    component: FrankButtonBase,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
        onPress: () => { console.log("click") },
    },
    argTypes: {
        variant: {
            options: ['bordered', 'solid', 'light', 'flat', 'faded', 'shadow', 'ghost'],
            control: { type: 'radio' }
        },
        color: {
            options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
            control: { type: 'radio' }
        },
        radius: {
            options: ['none', 'sm', 'md', 'lg', 'full'],
            control: { type: 'radio' }
        },
    }
} satisfies Meta<typeof FrankButtonBase>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        customizeContent: <p className='font-[550] font-inter text-[#303030] text-[12px]'>Apply to all</p>,
        variant: 'bordered',
        radius: 'sm',
        disableRipple: true,
    },
    decorators: [
        (Story) => {
            return (
                <div
                    className='w-[83px] h-[26px]'
                >
                    <Story />
                </div>
            )
        }
    ]
}

const ButtonContent = () => {
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

export const ContactMeInPortfolio: Story = {
    args: {
        variant: 'solid',
        backgroundColor: 'green',
        customizeContent: <ButtonContent />,
        radius: 'sm',
    },
    decorators: [
        (Story) => {
            return (
                <div
                    className='w-[196px] h-[65px]'
                >
                    <Story />
                </div>
            )
        }
    ]
}

export const ScrollDownButton: Story = {
    args: {
        variant: 'light',
        disableRipple: true,
        radius: 'sm',
        customizeContent: <div
            className='text-[#0E2431] font-[500] font-popins px-2 py-1 flex gap-2 items-center'
        >
            <span>Scroll Down</span>
            <motion.span
                animate={{
                    y: [0, 5, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <IoArrowDown size={20}/>
            </motion.span>
        </div>,
    }
}