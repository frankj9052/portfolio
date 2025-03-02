import { CheckboxGroup } from "@heroui/react"
import { ReactNode } from "react"

export type FrankCheckboxGroupProps = {
    children: ReactNode,
    value?: string[],
    onValueChange?: (selected: string[]) => void
}

export function FrankCheckboxGroup({ children, value, onValueChange }: FrankCheckboxGroupProps) {
    return (
        <CheckboxGroup
            value={value}
            onValueChange={onValueChange}
        >
            {children}
        </CheckboxGroup>
    )
}

export default FrankCheckboxGroup;
