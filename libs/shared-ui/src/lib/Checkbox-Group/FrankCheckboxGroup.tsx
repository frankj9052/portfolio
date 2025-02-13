import { CheckboxGroup } from "@heroui/react"
import FrankCheckbox, { FrankCheckboxProps } from "../Checkbox/FrankCheckbox"

type Props = {
    data: FrankCheckboxProps[],
    selectedValue?: string[],
    setSelectedValue: (selected: string[]) => void
}

/**
 * FrankCheckboxGroup Component
 * 
 * This component renders a group of FrankCheckbox components using `@heroui/react` CheckboxGroup.
 *
 * Props:
 * - data: FrankCheckboxProps[] - An array of checkbox data objects to render.
 * - selectedValue?: string[] - An optional array of selected checkbox values.
 * - setSelectedValue: (selected: string[]) => void - A function to update the selected values.
 *
 * Usage Example:
 * <FrankCheckboxGroup
 *   data={[{ value: 'option1', insideContent: 'Option 1' }, { value: 'option2', insideContent: 'Option 2' }]}
 *   selectedValue={['option1']}
 *   setSelectedValue={(values) => console.log(values)}
 * />
 *
 * This component maps through the provided `data` array and renders individual `FrankCheckbox` components.
 * The `CheckboxGroup` manages the state of selected values and passes them to the parent via `setSelectedValue`.
 */
export function FrankCheckboxGroup({ data, selectedValue, setSelectedValue }: Props) {
    return (
        <CheckboxGroup
            value={selectedValue}
            onValueChange={setSelectedValue}
        >
            {
                data && data.length > 0 && data.map(item => (
                    <FrankCheckbox
                        {...item}
                    />
                ))
            }
        </CheckboxGroup>
    )
}

export default FrankCheckboxGroup;
