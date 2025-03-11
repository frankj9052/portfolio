import type { Meta, StoryObj } from '@storybook/react';
import { FrankCalendar } from './FrankCalendar';

const meta = {
    component: FrankCalendar,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
    argTypes: {
        variant: {
            options: ['Default', 'Small', 'WithShortcut'],
            control: { type: 'radio' }
        },
        isStartDateSelection: {
            control: { type: 'boolean' }
        }
    }
} satisfies Meta<typeof FrankCalendar>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'WithShortcut'
    },
}
