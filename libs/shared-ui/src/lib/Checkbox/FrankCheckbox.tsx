import { truncateString } from "@frankjia9052/shared-utils"
import { Checkbox } from "@heroui/react"
import { CSSProperties, ReactNode } from "react"

type Props = {
    children?: ReactNode
    value: string
    isDisabled?: boolean
    defaultSelected?: boolean
    color?: string
}

export function FrankCheckbox({ children, value, isDisabled, defaultSelected, color = "#003f3c" }: Props) {
    return (
        <Checkbox
            value={value}
            isDisabled={!!isDisabled}
            defaultSelected={!!defaultSelected}
            style={{
                '--after-bg-color': color
            } as CSSProperties}
            classNames={{
                wrapper: 'border-red-300 before:border-color-bg-fill-fill-brand after:bg-[var(--after-bg-color)]',
                label: "text-[13px] text-color-text-text font-inter leading-5"
            }}
            radius='sm'
            size='sm'
        >
            {
                typeof children === 'string' ?
                    truncateString(children, 15) :
                    children
            }
        </Checkbox>
    )
}

export default FrankCheckbox;
