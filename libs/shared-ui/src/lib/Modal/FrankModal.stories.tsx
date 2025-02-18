import type { Meta, StoryObj } from '@storybook/react';
import FrankModal from './FrankModal';
import { useDisclosure } from '@heroui/react';
import FrankButtonBase from '../Button/FrankButtonBase';

const meta = {
    component: FrankModal,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
        isOpen: undefined,
        onClose: undefined,
    },
    decorators: [
        (Story, context) => {
            const { onOpen, isOpen, onClose } = useDisclosure();
            return (
                <div>
                    <FrankButtonBase
                        handleClick={onOpen}
                        text={{
                            content: 'Open Modal'
                        }}
                        width={120}
                        height={30}
                        variant='solid'
                    />
                    <Story
                        args={{
                            ...context.args,
                            isOpen,
                            onClose,
                        }}
                    />
                </div>
            )
        }
    ]
} satisfies Meta<typeof FrankModal>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        body:<div>This is modal body</div>,
        footerButtons: [
            {
                text:{
                    content: 'test btn 1'
                }
            }
        ]
    },
}
