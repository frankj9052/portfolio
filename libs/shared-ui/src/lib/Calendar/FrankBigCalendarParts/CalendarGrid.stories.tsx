import type { Meta, StoryObj } from '@storybook/react';
import { CalendarGrid } from './CalendarGrid';

const meta = {
    component: CalendarGrid,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof CalendarGrid>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        columnCount: 7,
        width: 515*2,
        startHour: 9,
        endHour: 18,
    },
}
