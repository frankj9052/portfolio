import type { Meta, StoryObj } from '@storybook/react';
import { FrankInputBase } from './FrankInputBase';

const meta = {
    component: FrankInputBase,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
        onValueChange: (value) => {console.log("Value changed to: ", value)},
    },
} satisfies Meta<typeof FrankInputBase>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: ' ',
        labelPlacement: 'outside',
        label: <div className='font-inter font-[500] text-[13px] text-[#303030]'>Unit <span className='font-[400] text-[#616161]'>(Optional)</span></div>,
        variant: 'bordered',
        height: 32,  
        width: 138,      
    },
}

export const RoomInput: Story = {
    args: {
        placeholder: ' ',
        labelPlacement: 'outside',
        label: <div className='font-inter font-[500] text-[13px] text-[#303030]'>Room <span className='font-[400] text-[#616161]'>(Optional)</span></div>,
        variant: 'bordered',
        height: 32,  
        width: 138,      
    },
}

export const LocationLabelInput: Story = {
    args: {
        placeholder: ' ',
        labelPlacement: 'outside',
        label: <div className='font-inter font-[500] text-[13px] text-[#303030]'>Location Label <span className='font-[400] text-[#616161]'>(Optional)</span></div>,
        variant: 'bordered',
        height: 32,  
        width: 288,      
    },
}


