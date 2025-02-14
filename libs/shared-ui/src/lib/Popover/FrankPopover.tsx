import { Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { ReactNode } from "react";

type Props = {
    placement: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end",
    popoverTrigger: ReactNode,
    popoverContent: ReactNode,
    showArrow?: boolean
}
export function FrankPopover({ placement, popoverTrigger, popoverContent, showArrow }: Props) {
    return (
        <Popover
            placement={placement}
            showArrow={showArrow}
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
