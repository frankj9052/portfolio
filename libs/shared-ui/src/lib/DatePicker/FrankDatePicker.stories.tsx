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
    decorators: [
        (Story) => {
            return (
                <div className='w-[144px]'>
                    <Story />
                </div>
            )
        }
    ]
} satisfies Meta<typeof FrankDatePicker>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'bordered',
        radius: 'sm',
        endContent: <MdOutlineKeyboardArrowDown size={20}/>,
    },
}
