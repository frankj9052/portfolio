import type { Meta, StoryObj } from '@storybook/react';
import {FrankCard} from './FrankCard';

const meta = {
    component: FrankCard,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankCard>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        cardCover: <div className='bg-red-200 w-[300px] h-[200px]'>card cover</div>,
        cardBody: <div className='bg-yellow-100'>card body</div>,
        cardHeader: <div className='bg-blue-200'>card header</div>,
        cardFooter: <div className='bg-green-200'>card footer</div>,        
    },
}
