import type { Meta, StoryObj } from '@storybook/react';
import { UserListItem } from './UserListItem';

const meta = {
    component: UserListItem,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
} satisfies Meta<typeof UserListItem>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        user: {
            name: 'Frank',
            email: 'frank@test.com'
        }
    },
}
