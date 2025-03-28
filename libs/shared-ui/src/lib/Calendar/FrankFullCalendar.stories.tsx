import type { Meta, StoryObj } from '@storybook/react';
import { FrankFullCalendar } from './FrankFullCalendar';

const meta = {
    component: FrankFullCalendar,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankFullCalendar>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}
