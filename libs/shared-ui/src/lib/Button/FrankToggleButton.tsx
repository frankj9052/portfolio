import clsx from "clsx";
import React, { forwardRef, ReactNode, useEffect, useState } from "react";

export type FrankToggleButtonProps = {
    defaultSelected?: boolean,
    toggleValue?: (value: boolean) => void,
    content?: ReactNode,
    width?: number,
    height?: number,
}

export const FrankToggleButton = forwardRef<HTMLDivElement, FrankToggleButtonProps>(({
    defaultSelected,
    toggleValue,
    content,
    width,
    height,
    ...props
}, ref) => {
    const [value, setValue] = useState<boolean>(!!defaultSelected);
    useEffect(() => {
        toggleValue && toggleValue(value);
    }, [value, toggleValue])
    return (
        <div
            ref={ref}
            {...props}
            className={clsx("border-[1px] cursor-pointer rounded-full select-none flex items-center justify-center", {
                "bg-[#E8FCFA] border-[#0C534F] text-[#0C534F]": !!value,
                "bg-white border-[#E3E3E3] text-black": !value
            })}
            style={{
                width: width ? `${width}px` : '100%',
                height: height ? `${height}px` : '100%',
            }}
            onClick={() => {
                setValue(!value);
            }}
        >
            {content && content}
        </div>
    )
})

FrankToggleButton.displayName = 'FrankToggleButton';

export default FrankToggleButton;
