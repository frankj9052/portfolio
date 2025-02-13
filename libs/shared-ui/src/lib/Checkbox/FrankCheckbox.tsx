import { Checkbox, Spacer } from "@heroui/react"
import { CSSProperties, ReactNode } from "react"

export type FrankCheckboxProps = {
    insideContent?: ReactNode
    outsideContent?: ReactNode
    value: string
    isDisabled?: boolean
    defaultSelected?: boolean
    color?: string,
    checkboxHeight?: number,
    gap?: 0 | 1 | "px" | 0.5 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96
}

/**
 * FrankCheckbox Component
 * 
 * This component is a customizable checkbox with optional inside and outside content.
 * It uses the `@heroui/react` Checkbox and Spacer components.
 *
 * Props:
 * - insideContent?: ReactNode - Content displayed inside the checkbox label.
 * - outsideContent?: ReactNode - Content displayed next to the checkbox.
 * - value: string - Value associated with the checkbox.
 * - isDisabled?: boolean - Disables the checkbox when true.
 * - defaultSelected?: boolean - Sets the checkbox as selected by default when true.
 * - color?: string - Background color of the checkbox when selected (default: "#003f3c").
 * - checkboxHeight?: number - Sets the height of the checkbox container.
 * - gap?: 0 | 1 | "px" | ... 96 - Controls the spacing between the checkbox and outside content.
 *
 * Usage Example:
 * <FrankCheckbox
 *   value="agree"
 *   insideContent="I agree to the terms"
 *   outsideContent={<span>Additional info</span>}
 *   color="#ff0000"
 *   checkboxHeight={20}
 *   gap={4}
 * />
 */
export function FrankCheckbox({ insideContent, outsideContent, value, isDisabled, defaultSelected, color = "#003f3c", checkboxHeight, gap }: FrankCheckboxProps) {
    return (
        <div
            className="flex"
        >
            <div
                className="flex items-center"
                style={{
                    ...(checkboxHeight && { height: `${checkboxHeight}px` })
                }}
            >
                <Checkbox
                    value={value}
                    isDisabled={!!isDisabled}
                    defaultSelected={!!defaultSelected}
                    style={{
                        '--after-bg-color': color,
                    } as CSSProperties}
                    classNames={{
                        wrapper: 'border-red-300 before:border-color-bg-fill-fill-brand after:bg-[var(--after-bg-color)]',
                        label: "text-[13px] text-color-text-text font-inter leading-5"
                    }}
                    radius='sm'
                    size='sm'
                >
                    {insideContent && insideContent}
                </Checkbox>
            </div>
            {gap && outsideContent && <Spacer x={gap} />}
            {outsideContent && outsideContent}
        </div>
    )
}

export default FrankCheckbox;