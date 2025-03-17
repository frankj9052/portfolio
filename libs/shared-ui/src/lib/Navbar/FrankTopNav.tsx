'use client'
import { NavLinkType } from "@frankjia9052/shared-utils";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import { ReactNode, useState } from "react";
import { NavLink } from "./NavLink";

export type FrankTopNavProps = {
    navbarBrand?: ReactNode;
    navLinks?: NavLinkType[];
    navContentEnd?: ReactNode;
}

export const FrankTopNav = ({
    navbarBrand,
    navLinks,
    navContentEnd
}: FrankTopNavProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Navbar
            maxWidth="xl"
            className="h-[80px] abg-[#fefefe] shadow-md"
            classNames={{
                item: [
                    'data-[active=true]:text-primary'
                ]
            }}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent
                justify="start"
            >
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
                <NavbarBrand>
                    {navbarBrand && navbarBrand}
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent
                justify="center"
                className="gap-10 hidden md:flex"
            >
                {navLinks && navLinks.map((link, index) => (
                    <NavLink
                        key={`${link.text}-${index}`}
                        text={link.text}
                        href={link.href}
                    />
                ))}
            </NavbarContent>
            <NavbarContent
                justify="end"
            >
                {navContentEnd && navContentEnd}
            </NavbarContent>
            <NavbarMenu
                className="pt-7"
            >
                {navLinks && navLinks.map((item, index) => (
                    <NavbarMenuItem
                        key={`${item.text}-${index}`}
                    >
                        <NavLink
                            text={item.text}
                            href={item.href}
                        />
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default FrankTopNav;