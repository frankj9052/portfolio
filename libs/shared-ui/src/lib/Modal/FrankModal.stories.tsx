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
        draggable: true
    },
    argTypes: {
        isOpen: { control: "boolean" },
        onClose: { action: "closed" },
        header: { control: "text" },
        body: { control: "text" },
        footerButtons: { control: "object" },
        imageModal: { control: "boolean" },
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"],
        },
        placement: {
            control: "select",
            options: ["center", "top-center", "auto", "top", "bottom", "bottom-center"],
        },
        backdrop: {
            control: "select",
            options: ["transparent", "opaque", "blur"],
        },
        draggable: { control: "boolean" },
        hideCloseButton: { control: "boolean" },
        zIndex: { control: { type: "number", min: 0, max: 9999 } },
    },
    decorators: [
        (Story, context) => {
            const { onOpen, isOpen, onClose } = useDisclosure();
            return (
                <div
                    className='relative'
                >
                    <FrankButtonBase
                        onPress={onOpen}
                        customizeContent={<div>Open Modal</div>}
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
                    <div className='z-50 absolute left-0 top-0'>Test Area</div>
                </div>
            )
        }
    ]
} satisfies Meta<typeof FrankModal>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        body: <div>This is modal body</div>,
        footerButtons: [
            {
                customizeContent: 'Footer Button',
            }
        ]
    },
}
