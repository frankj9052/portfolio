import type { Meta, StoryObj } from '@storybook/react';
import FrankTimeInput from './FrankTimeInput';
import { useState } from 'react';

const meta = {
    component: FrankTimeInput,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },
    args: {
        width: 60,
        height: 32,
        // value: null,
        // setValue: (value) => { console.log("value check in args ===> ", value) },
        ariaLabel: 'test time input'
    },
} satisfies Meta<typeof FrankTimeInput>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {

    },
    decorators: [
        (Story, context) => {
            const [value, setValue] = useState<string | null>(null);
            return (
                <Story
                    args={{
                        ...context.args,
                        value,
                        setValue: (value) => {
                            if (value) {
                                setValue(value.toString());
                            }
                        }
                    }}
                />
            )
        }
    ]
}

export const WithError: Story = {
    args: {
        minValue: "11:30",
        errorMessage: "Invalid time!",
        isInvalid: true
    },
}