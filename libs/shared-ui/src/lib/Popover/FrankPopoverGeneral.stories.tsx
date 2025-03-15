import type { Meta, StoryObj } from '@storybook/react';
import { FrankPopoverGeneral } from './FrankPopoverGeneral';
import FrankButtonBase from '../Button/FrankButtonBase';

const meta = {
    component: FrankPopoverGeneral,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankPopoverGeneral>

export default meta;
type Story = StoryObj<typeof meta>;

const InputTest = () => {
    return (
        <input className='bg-red-200' />
    )
}

export const Default: Story = {
    args: {
        popoverTrigger: <InputTest />,
        popoverContent: <div
            className='bg-blue-200'
        >test</div>
    },
    decorators: [
        (Story) => {
            return (
                <div
                    className='bg-gray-200 w-[500px] h-[500px] flex items-center justify-center'
                >
                    <Story />
                </div>
            )
        }
    ]
}
