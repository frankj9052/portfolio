import { Spinner } from "@heroui/react"

export type FrankSpinnerProps = {
    size?: "sm" | "md" | "lg",
    color?: "current" | "white" | "default" | "primary" | "secondary" | "success" | "warning" | "danger",
    label?: string,
    labelColor?: "primary" | "secondary" | "success" | "warning" | "danger" | "foreground",
    variant?: "default" | "gradient" | "wave" | "dots" | "spinner" | "simple"
}
export function FrankSpinner({
    size,
    color = "current",
    label,
    labelColor,
    variant = 'default',
}: FrankSpinnerProps) {
    return (
        <Spinner
            size={size}
            color={color}
            label={label}
            labelColor={labelColor}
            variant={variant}
        />
    )
}

export default FrankSpinner
