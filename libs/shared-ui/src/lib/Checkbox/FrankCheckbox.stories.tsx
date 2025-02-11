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
        children: 'Check box',
        value: 'test value 1'
    },
}