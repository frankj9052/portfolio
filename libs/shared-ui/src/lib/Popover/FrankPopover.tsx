import { Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { ReactNode } from "react";
import { useControlledState } from "../useHooks/useControlledState";

export type FrankPopoverProps = {
    placement: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end",
    popoverTrigger: ReactNode,
    popoverContent: ReactNode,
    showArrow?: boolean,
    shadow?: "sm" | "md" | "lg" | "none",
    radius?: "sm" | "md" | "lg" | "none" | "full",
    isOpen?: boolean,
    onOpenChange?: (open: boolean | undefined) => void,
}
export function FrankPopover({
    placement,
    popoverTrigger,
    popoverContent,
    showArrow,
    shadow = 'md',
    radius = 'md',
    isOpen,
    onOpenChange,
}: FrankPopoverProps) {
    const [isOpenState, setIsOpenState] = useControlledState(
        isOpen,
        false,
    );
    return (
        <Popover
            placement={placement}
            showArrow={showArrow}
            shadow={shadow}
            radius={radius}
            classNames={{
                content: 'p-0'
            }}
            isOpen={isOpenState}
            onOpenChange={(open) => {
                setIsOpenState?.(open);
                onOpenChange?.(open);
            }}
        >
            <PopoverTrigger>
                {popoverTrigger}
            </PopoverTrigger>
            <PopoverContent
            >
                {popoverContent}
            </PopoverContent>
        </Popover>
    )
}

export default FrankPopover;
