import type { Meta, StoryObj } from '@storybook/react';
import { SocialMediaLinks } from './SocialMediaLinks';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiStorybook } from "react-icons/si";

const meta = {
    component: SocialMediaLinks,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
    argTypes: {
        orientation: {
            control: {  type: 'radio' },
            options: ['horizontal', 'vertical']
        }
    },
} satisfies Meta<typeof SocialMediaLinks>

export default meta;
type Story = StoryObj<typeof meta>;

const reactIcons = [
    {
        reactIcon: <FaGithub className="text-primary" size={24}/>,
        href: "#",
    },
    {
        reactIcon: <FaLinkedin className="text-primary" size={24}/>,
        href: "#",
    },
    {
        reactIcon: <SiStorybook className="text-primary" size={24}/>,
        href: "#",
    }
]

export const Default: Story = {
    args: {
        reactIcons: reactIcons
    },
    decorators: [
        (Story) => (
            <div
                className="w-[300px] h-[300px]"
            >
                <Story/>
            </div>
        )
    ]
}
