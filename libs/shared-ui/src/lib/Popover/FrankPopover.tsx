import { Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { ReactNode } from "react";

type Props = {
    placement: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end",
    popoverTrigger: ReactNode,
    popoverContent: ReactNode,
    showArrow?: boolean,
    shadow?: "sm" | "md" | "lg" | "none"
}
export function FrankPopover({ placement, popoverTrigger, popoverContent, showArrow, shadow = 'md' }: Props) {
    return (
        <Popover
            placement={placement}
            showArrow={showArrow}
            shadow={shadow}
        >
            <PopoverTrigger>
                {popoverTrigger}
            </PopoverTrigger>
            <PopoverContent>
                {popoverContent}
            </PopoverContent>
        </Popover>
    )
}

export default FrankPopover;
