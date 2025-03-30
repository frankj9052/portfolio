import type { Meta, StoryObj } from '@storybook/react';
import SharedUi from './HeroTitle';

const meta = {
    component: SharedUi,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof SharedUi>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "About Me"
    },
}
