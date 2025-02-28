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

export const WithImage: Story = {
    args: {
        user: {
            name: 'Frank',
            email: 'frank@test.com',
            image: 'https://img.0756bf.com/uploads/allimg/2021042109/uqaqhuvavt0.jpg'
        }
    },
}