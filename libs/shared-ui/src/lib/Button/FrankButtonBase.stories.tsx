import type { Meta, StoryObj } from '@storybook/react';
import FrankButtonBase from './FrankButtonBase';

const meta = {
    component: FrankButtonBase,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
        handleClick: () => {console.log("click")},
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
} satisfies Meta<typeof FrankButtonBase>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: 117,
        height: 32,
        text: 'test button',
        variant: 'bordered',
        radius: 'full'
    },
}