import type { Meta, StoryObj } from '@storybook/react';
import { AccordionItemType, FrankAccordion } from './FrankAccordion';

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
        variant: {
            description: "Defines the visual style of the Accordion. Each variant applies a different design treatment.",
            options: ["splitted", "light", "shadow", "bordered"],
            control: { type: "radio" },
            defaultValue: "light",
        },
        defaultExpandedKeys: {
            description: "Iterable of item keys that should be expanded by default.",
            control: "object",
        },
        disabledKeys: {
            description: "Iterable of item keys that should be disabled (not expandable).",
            control: "object",
        },
        selectedKeys: {
            description: "Iterable of keys currently selected (controlled behavior).",
            control: "object",
        },
        setSelectedKeys: {
            description: "Callback function triggered when selection changes (controlled behavior).",
            control: false, // functions usually not controllable in Storybook
        },
        hideShadow: {
            description: "If true, hides box-shadow styling for the accordion container.",
            control: "boolean",
            defaultValue: false,
        },
        width: {
            description: "Sets a fixed width (in pixels) for the accordion container.",
            control: { type: "number" },
            defaultValue: undefined,
        },
    }
} satisfies Meta<typeof FrankAccordion>

export default meta;
type Story = StoryObj<typeof meta>;

const items: AccordionItemType[] = [
    {
        ariaLabel: "What is Noq Clinic, and how does it work?",
        title: "What is Noq Clinic, and how does it work?",
        content: "Noq Clinic is an online healthcare booking platform that helps you find and book appointments with trusted doctors, specialists, and healthcare providers. Simply search for a doctor based on specialty, location, or availability, select a time that works for you, and confirm your appointment—all in just a few clicks.",
    },
    {
        ariaLabel: "How do I search for a doctor on Noq Clinic?",
        title: "How do I search for a doctor on Noq Clinic?",
        content: "Noq Clinic is an online healthcare booking platform that helps you find and book appointments with trusted doctors, specialists, and healthcare providers. Simply search for a doctor based on specialty, location, or availability, select a time that works for you, and confirm your appointment—all in just a few clicks.",
    },
    {
        ariaLabel: "Is Noq Clinic free to use for patients?",
        title: "Is Noq Clinic free to use for patients?",
        content: "Noq Clinic is an online healthcare booking platform that helps you find and book appointments with trusted doctors, specialists, and healthcare providers. Simply search for a doctor based on specialty, location, or availability, select a time that works for you, and confirm your appointment—all in just a few clicks.",
    },
    {
        ariaLabel: "What types of healthcare providers are available on Noq Clinic?",
        title: "What types of healthcare providers are available on Noq Clinic?",
        content: "Noq Clinic is an online healthcare booking platform that helps you find and book appointments with trusted doctors, specialists, and healthcare providers. Simply search for a doctor based on specialty, location, or availability, select a time that works for you, and confirm your appointment—all in just a few clicks.",
    },
    {
        ariaLabel: "How do I know if a doctor is accepting new patients?",
        title: "How do I know if a doctor is accepting new patients?",
        content: "Noq Clinic is an online healthcare booking platform that helps you find and book appointments with trusted doctors, specialists, and healthcare providers. Simply search for a doctor based on specialty, location, or availability, select a time that works for you, and confirm your appointment—all in just a few clicks.",
    },
    {
        ariaLabel: "Can I book appointments for family members?",
        title: "Can I book appointments for family members?",
        content: "Noq Clinic is an online healthcare booking platform that helps you find and book appointments with trusted doctors, specialists, and healthcare providers. Simply search for a doctor based on specialty, location, or availability, select a time that works for you, and confirm your appointment—all in just a few clicks.",
    },
]

export const Default: Story = {
    args: {
        hideShadow: true,
        width: 512,
        variant: 'splitted',
        items: items.map((item, index) => ({
            ariaLabel: item.ariaLabel,
            title: <div
                className='font-[500] font-inter text-[#313131]'
            >{item.title}</div>,
            content: <div
                className='text-[14px] font-inter text-[#666]'
            >{item.content}</div>,
            key: index,
        }))
    },
}
