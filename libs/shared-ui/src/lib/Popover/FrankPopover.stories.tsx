import type { Meta, StoryObj } from '@storybook/react';
import FrankPopover from './FrankPopover';
import FrankButtonBase from '../Button/FrankButtonBase';

const meta = {
    component: FrankPopover,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof FrankPopover>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placement: 'bottom',
        popoverTrigger: <FrankButtonBase customizeContent='test trigger' width={83} height={26}/>,
        popoverContent: <div>test</div>
    },
}
