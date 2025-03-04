import { cloneElement, isValidElement, ReactElement, SVGProps } from "react";

interface FrankSVGIconProps extends SVGProps<SVGSVGElement> {
    width?: number,
    height?: number,
    fill?: string,
    viewBox: string,
    children: ReactElement<SVGProps<SVGSVGElement>>;
}

export function FrankSVGIcon({
    width = 24,
    height = 24,
    fill = "currentColor",
    viewBox,
    children,
    ...props
}: FrankSVGIconProps) {
    return (
        <svg
            width={width.toString()}
            height={height.toString()}
            viewBox={viewBox}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {isValidElement(children)
                ? cloneElement(children, { fill: fill })
                : children}
        </svg>
    )
}

export default FrankSVGIcon;
