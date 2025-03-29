import type { Meta, StoryObj } from '@storybook/react';
import { FrankArrowSwitcher } from './FrankArrowSwitcher';

const meta = {
    component: FrankArrowSwitcher,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
    argTypes: {
        leftArrowDisabled: {
            control: 'boolean',
            description: 'Disables the left arrow button when set to true.',
            defaultValue: false,
        },
        rightArrowDisabled: {
            control: 'boolean',
            description: 'Disables the right arrow button when set to true.',
            defaultValue: false,
        },
        handleLeftArrowClick: {
            action: 'onLeftArrowClick',
            description: 'Callback function triggered when the left arrow is clicked.',
        },
        handleRightArrowClick: {
            action: 'onRightArrowClick',
            description: 'Callback function triggered when the right arrow is clicked.',
        },
    },
} satisfies Meta<typeof FrankArrowSwitcher>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
}
