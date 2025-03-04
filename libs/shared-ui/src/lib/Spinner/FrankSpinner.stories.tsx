import type { Meta, StoryObj } from '@storybook/react';
import { FrankSpinner } from './FrankSpinner';

const meta = {
    component: FrankSpinner,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Defines the size of the spinner.',
            table: {
                type: { summary: '"sm" | "md" | "lg"' },
                defaultValue: { summary: 'undefined' }
            }
        },
        color: {
            control: 'select',
            options: ['current', 'white', 'default', 'primary', 'secondary', 'success', 'warning', 'danger'],
            description: 'Defines the color of the spinner.',
            table: {
                type: { summary: '"current" | "white" | "default" | "primary" | "secondary" | "success" | "warning" | "danger"' },
                defaultValue: { summary: '"current"' }
            }
        },
        label: {
            control: 'text',
            description: 'Optional text label displayed next to the spinner.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' }
            }
        },
        labelColor: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'foreground'],
            description: 'Defines the color of the label text.',
            table: {
                type: { summary: '"primary" | "secondary" | "success" | "warning" | "danger" | "foreground"' },
                defaultValue: { summary: 'undefined' }
            }
        },
        variant: {
            control: 'select',
            options: ['default', 'gradient', 'wave', 'dots', 'spinner', 'simple'],
            description: 'Determines the animation style of the spinner.',
            table: {
                type: { summary: '"default" | "gradient" | "wave" | "dots" | "spinner" | "simple"' },
                defaultValue: { summary: '"default"' }
            }
        }
    },
} satisfies Meta<typeof FrankSpinner>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'sm',
        color: 'current',
        variant: 'default'
    },
}
