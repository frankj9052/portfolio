import type { Meta, StoryObj } from '@storybook/react';
import { FrankAccordion } from './FrankAccordion';

const meta = {
    component: FrankAccordion,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
    argTypes: {
        items: {
            description:
                "An array of accordion items. Each item includes a title, content, optional subtitle, and an ARIA label for accessibility.",
            control: "object",
        },
        selectionMode: {
            description:
                "Defines the selection behavior: 'multiple' allows multiple items to be open, 'single' allows only one, and 'none' disables selection.",
            options: ["multiple", "single", "none"],
            control: { type: "radio" },
            defaultValue: "multiple",
        },
        isCompact: {
            description: "Enables compact mode with reduced padding and spacing.",
            control: "boolean",
            defaultValue: false,
        },
        variant: {
            description: "Defines the visual style of the Accordion. Each variant applies a different design treatment.",
            options: ["splitted", "light", "shadow", "bordered"],
            control: { type: "radio" },
            defaultValue: "light",
        },
    }
} satisfies Meta<typeof FrankAccordion>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {
                ariaLabel: "test aria-label 1",
                title: "test title 1",
                content: <div>This is test content 1</div>
            },
            {
                ariaLabel: "test aria-label 2",
                title: "test title 2",
                content: <div>This is test content 2</div>
            },
        ]
    },
}
