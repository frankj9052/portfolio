import { NavLinkType } from "@frankjia9052/shared-utils";
import { NavbarItem } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({
    text,
    href
}: NavLinkType) => {
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