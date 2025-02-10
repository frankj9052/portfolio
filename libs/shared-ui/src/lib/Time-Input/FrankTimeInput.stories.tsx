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
        height: 32
    },
    decorators: [
        (Story, context) => {
            const [value, setValue] = useState<string | undefined>(undefined);
            return (
                <Story
                    args={{
                        ...context.args,
                        value,
                        setValue
                    }}
                />
            )
        }
    ]
} satisfies Meta<typeof FrankTimeInput>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}