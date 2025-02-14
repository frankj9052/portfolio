import type { Meta, StoryObj } from '@storybook/react';
import FrankRadioGroupBasic from './FrankRadioGroupBasic';

const meta = {
    component: FrankRadioGroupBasic,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
        onValueChange: (value) => { console.log("value changed ===> ", value) }
    },
} satisfies Meta<typeof FrankRadioGroupBasic>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultValue: '03',
        radioData: [
            {
                value: '01',
                label: 'Frank'
            },
            {
                value: '02',
                label: 'Lu'
            },
            {
                value: '03',
                label: 'Rohan'
            },
            {
                value: '04',
                label: 'Leo'
            },
            {
                value: '05',
                label: 'Keith'
            },
        ]
    },
    decorators: [
        (Story, context) => {
            return (
                <div
                    className=''
                >
                    <Story
                        args={{
                            ...context.args,
                        }}
                    />
                </div>
            )
        }
    ]
}
