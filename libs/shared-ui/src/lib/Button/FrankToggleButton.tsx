'use client'
import clsx from "clsx";
import { forwardRef, ReactNode, useState } from "react";
export type FrankToggleButtonProps = {
    content?: ReactNode,
    width?: number,
    height?: number,
    onClick?: () => void,
    active?: boolean,
}

export const FrankToggleButton = forwardRef<HTMLDivElement, FrankToggleButtonProps>(({
    content,
    width,
    height,
    onClick,
    active,
    ...props
}, ref) => {
    const [internalActive, setInternalActive] = useState(false);
    const isControlled = active !== undefined;
    const activeState = isControlled ? active : internalActive;
    return (
        <div
            ref={ref}
            {...props}
            className={clsx("border-[1px] cursor-pointer rounded-full select-none flex items-center justify-center", {
                "bg-[#E8FCFA] border-[#0C534F] text-[#0C534F]": !!activeState,
                "bg-white border-[#E3E3E3] text-black": !activeState
            })}
            style={{
                width: width ? `${width}px` : '100%',
                height: height ? `${height}px` : '100%',
            }}
            onClick={() => {
                if (!isControlled) {
                    setInternalActive((prev) => !prev);
                }
                onClick && onClick();
            }}
        >
            {content && content}
        </div>
    )
})

FrankToggleButton.displayName = 'FrankToggleButton';

export default FrankToggleButton;
