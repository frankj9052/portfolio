import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react"
import Link from "next/link"
import { NavLink } from "./NavLink"

type LinkType = {
    href: string,
    text: string
}

const publicLinks: LinkType[] = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/skill", text: "Skill" },
    { href: "/portfolio", text: "Portfolio" },
    { href: "/contact", text: "Contact" },
]

export const TopNav = () => {
    return (
        <Navbar
            maxWidth="xl"
            className="h-[80px] bg-[#fefefe] shadow-md"
            classNames={{
                item: [
                    'data-[active=true]:text-primary'
                ]
            }}
        >
            <NavbarBrand>
                <Link
                    className="text-primary-900 font-semibold text-[1.3rem]"
                    href={"/"}
                >
                    Frank Jia
                </Link>
            </NavbarBrand>
            <NavbarContent
                justify="center"
                className="gap-10"
            >
                {publicLinks.map((link) => (
                    <NavLink
                        key={link.text}
                        text={link.text}
                        href={link.href}
                    />
                ))}
            </NavbarContent>
            <NavbarContent
                justify="end"
            >
            </NavbarContent>
        </Navbar>
    )
}