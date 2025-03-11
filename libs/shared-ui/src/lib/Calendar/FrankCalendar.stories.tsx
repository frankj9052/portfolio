import type { Meta, StoryObj } from '@storybook/react';
import { FrankCalendar } from './FrankCalendar';

const meta = {
    component: FrankCalendar,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankCalendar>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        // value: 12,
        // handleValueChange: (value) => {console.log("value changed ===> ", value)}
    },
}
