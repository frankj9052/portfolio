import type { Meta, StoryObj } from '@storybook/react';
import { FrankDatePicker } from './FrankDatePicker';

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
    }
} satisfies Meta<typeof FrankDatePicker>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'bordered'
    },
}
