import type { Meta, StoryObj } from '@storybook/react';
import FrankButtonBase from './FrankButtonBase';
import { FaArrowAltCircleRight } from "react-icons/fa";

const meta = {
    component: FrankButtonBase,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
        handleClick: () => { console.log("click") },
    },

    decorators: [
        (Story, context) => {
            return (
                <div>
                    <Story />
                </div>
            )
        }
    ]
} satisfies Meta<typeof FrankButtonBase>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: 83,
        height: 26,
        text: {
            content: 'Apply to all',
            fontWeight: 550,
            fontFamily: 'Inter',
            fontColor: '#303030',
            fontSize: 12,
        },
        variant: 'bordered',
        radius: 'sm',
        disableRipple: true,
    },
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
        width: 196,
        height: 65,
        variant: 'solid',
        color: 'primary',
        buttonContent: <ButtonContent />,
        radius: 'sm',
    }
}