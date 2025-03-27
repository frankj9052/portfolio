import type { Meta, StoryObj } from '@storybook/react';
import { NoqPublicSearchBar } from './NoqPublicSearchBar';

const meta = {
    component: NoqPublicSearchBar,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
    decorators: [
        (Story) => {
            return (
                <div
                    className='w-[90vw] h-[300px] flex items-center justify-center'
                >
                    <div
                        className='flex-1'
                    >
                        <Story />
                    </div>
                </div>
            )
        }
    ]
} satisfies Meta<typeof NoqPublicSearchBar>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        height: 64,
    },
}
