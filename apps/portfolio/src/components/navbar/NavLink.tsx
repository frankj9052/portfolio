'use client'

import { NavbarItem } from "@heroui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
    href: string,
    text: string
}
export const NavLink = ({href, text}:Props) => {
    const pathname = usePathname();
    return (
        <NavbarItem
            isActive={pathname === href}
            as={Link}
            href={href}
            className="font-[500] hover:text-primary"
        >
            {text}
        </NavbarItem>
    )
}