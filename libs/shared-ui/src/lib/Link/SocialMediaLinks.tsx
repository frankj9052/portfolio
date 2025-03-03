import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

export type SocialMediaLinksProps = {
    orientation?: 'horizontal' | 'vertical',
    reactIcons: {
        reactIcon: ReactNode,
        href: string,
    }[];
}

export const SocialMediaLinks = ({
    orientation='horizontal',
    reactIcons,
}: SocialMediaLinksProps) => {
    return (
        <div
            className={clsx({
                'w-full flex justify-between': orientation === 'horizontal',
                'h-full flex flex-col justify-between w-fit': orientation === 'vertical',
            })}
        >
            {
                reactIcons && reactIcons.map((icon, index) => {
                    return (
                        <Link
                            href={icon.href}
                            key={`social-media-link-${index}`}
                        >
                            {icon.reactIcon}
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default SocialMediaLinks;