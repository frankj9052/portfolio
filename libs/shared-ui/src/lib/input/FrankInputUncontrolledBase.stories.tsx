import type { Meta, StoryObj } from '@storybook/react';
import FrankInputUncontrolledBase from './FrankInputUncontrolledBase';
import React from 'react';

const meta = {
    component: FrankInputUncontrolledBase,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankInputUncontrolledBase>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Placeholder',
        labelPlacement: 'outside',
        label: <div className='bg-red-300'>123</div>,
        variant: 'bordered',
        height: 32,  
        width: 288,      
    },
}
