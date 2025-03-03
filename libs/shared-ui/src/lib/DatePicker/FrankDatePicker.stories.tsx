import type { Meta, StoryObj } from '@storybook/react';
import { FrankDatePicker } from './FrankDatePicker';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const meta = {
    component: FrankDatePicker,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
        onChange: (value) => { console.log("value changed ===> ", value) }
    },
    argTypes: {
        variant: {
            options: ["bordered", "flat", "faded", "underlined", undefined],
            control: { type: 'radio' }
        }
    },
} satisfies Meta<typeof FrankDatePicker>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: 144,
        height: 32,
        variant: 'bordered',
        radius: 'sm',
        endContent: <MdOutlineKeyboardArrowDown size={20}/>,
        labelPlacement: 'outside',
        label: <div className='font-inter font-[500] text-[14px] text-[#303030]'>Start Day</div>,
    },
}
