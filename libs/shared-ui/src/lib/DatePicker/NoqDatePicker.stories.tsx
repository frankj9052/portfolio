import type { Meta, StoryObj } from '@storybook/react';
import { NoqDatePicker } from './NoqDatePicker';

const meta = {
    component: NoqDatePicker,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
        width: 144,
    },
    argTypes: {
        width: {
            control: { type: 'number' },
            description: 'Component width (px)',
            defaultValue: 300,
        },
        height: {
            control: { type: 'number' },
            description: 'Component height (px)',
            defaultValue: 40,
        },
        value: {
            control: { type: 'object' },
            description: 'Currently selected date value',
        },
        onValueChange: {
            action: 'date changed',
            description: 'Callback for date value changes',
        },
        isStartDateSelection: {
            control: { type: 'boolean' },
            description: 'Whether it is the start date selection',
            defaultValue: false,
        },
        endContent: {
            control: { type: 'text' },
            description: 'Optional custom end content (e.g., an icon)',
        },
        zIndex: {
            control: { type: 'number' },
            description: 'Controls the z-index of the calendar popover',
            defaultValue: 1000,
        },
        minValue: {
            control: { type: 'object' },
            description: 'The minimum selectable date',
        },
        maxValue: {
            control: { type: 'object' },
            description: 'The maximum selectable date',
        },
        rangeStart: {
            control: { type: 'object' },
            description: 'The start date for a range selection',
        },
        rangeEnd: {
            control: { type: 'object' },
            description: 'The end date for a range selection',
        },
    },
} satisfies Meta<typeof NoqDatePicker>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
    decorators: [
        (Story) => {
            return (
                <div
                    className='w-[500px] h-[500px] bg-gray-300 px-3 py-3'
                >
                    <Story />
                </div>
            )
        }
    ]
}
