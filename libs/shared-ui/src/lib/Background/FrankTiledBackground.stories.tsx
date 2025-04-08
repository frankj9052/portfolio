import type { Meta, StoryObj } from '@storybook/react';
import { FrankTiledBackground } from './FrankTiledBackground';

const meta = {
    component: FrankTiledBackground,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankTiledBackground>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <div className='w-[1024px] h-[1080px]'/>,
        imageUrl: 'https://svgsilh.com/png-1024/26432.png'
    },
}
