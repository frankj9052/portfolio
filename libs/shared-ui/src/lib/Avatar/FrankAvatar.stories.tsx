import type { Meta, StoryObj } from '@storybook/react';
import { FrankAvatar } from './FrankAvatar';

const meta = {
    component: FrankAvatar,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankAvatar>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}

export const WithName: Story = {
    args: {
        name: 'Frank'
    },
}

export const WithImage: Story = {
    args: {
        name: 'Frank',
        src: 'https://img.0756bf.com/uploads/allimg/2021042109/uqaqhuvavt0.jpg'
    },
}