import type { Meta, StoryObj } from '@storybook/react';
import FrankCheckbox from './FrankCheckbox';

const meta = {
    component: FrankCheckbox,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
        
    },

    decorators: [
        (Story, context) => {
            return(
                <div>
                    <Story/>
                </div>
            )
        }
    ]
} satisfies Meta<typeof FrankCheckbox>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        insideContent: 'text check',
        value: 'test value 1'
    },
}

export const outSideContent: Story = {
    args: {
        outsideContent: <div className='bg-blue-200 w-[100px] h-[200px]'> big component</div>,
        value: 'test value 1',
        checkboxHeight: 24,
        insideContent: <p className='font-bold'>Mon</p>,
        gap: 2
    },
}