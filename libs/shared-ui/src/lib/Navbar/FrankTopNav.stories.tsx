import type { Meta, StoryObj } from '@storybook/react';
import FrankTopNav from './FrankTopNav';
import { NavLinkType } from '@frankjia9052/shared-utils';
import Link from 'next/link';

const meta = {
    component: FrankTopNav,
    tags: ['autodocs'],
    parameters: {
        layout: "top"
    },

    args: {
    },
    decorators: [
        (Story) => {
            return (
                <div className="w-screen">
                    <Story />
                </div>
            )
        }
    ]
} satisfies Meta<typeof FrankTopNav>

export default meta;
type Story = StoryObj<typeof meta>;

const navLinks: NavLinkType[] = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/skill", text: "Skill" },
    { href: "/portfolio", text: "Portfolio" },
    { href: "/contact", text: "Contact" },
]

export const Default: Story = {
    args: {
        navbarBrand: <TextBrand />,
        navLinks: navLinks,
    },
}

function TextBrand() {
    return (
        <Link
            className="text-primary-900 font-semibold text-[1.3rem]"
            href={"/"}
        >
            Frank Jia
        </Link>
    )
}
