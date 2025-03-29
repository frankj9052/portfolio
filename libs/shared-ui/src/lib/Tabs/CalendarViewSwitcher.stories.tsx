import type { Meta, StoryObj } from '@storybook/react';
import { CalendarViewSwitcher } from './CalendarViewSwitcher';

const meta = {
    component: CalendarViewSwitcher,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof CalendarViewSwitcher>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}
