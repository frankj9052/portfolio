import type { Meta, StoryObj } from '@storybook/react';
import { BreathingGlow } from './BreathingGlow';

const meta = {
    component: BreathingGlow,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof BreathingGlow>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <div
            className='w-[13px] h-[13px] bg-[#27C6AA] rounded-full'
        />,
    },
}
