import { CheckboxGroup } from "@heroui/react"
import { ReactNode } from "react"
import FrankCheckbox from "../Checkbox/FrankCheckbox"

type Props = {
    data: {
        children: ReactNode
        value: string
        isDisabled?: boolean
        defaultSelected?: boolean
        color?: string
    }[]
    selectedValue?: string[],
    setSelectedValue: (selected: string[]) => void
}


export function FrankCheckboxGroup({ data, selectedValue, setSelectedValue }: Props) {
    return (
        <CheckboxGroup
            value={selectedValue}
            onValueChange={setSelectedValue}
        >
            {
                data && data.length > 0 && data.map(item => (
                    <FrankCheckbox
                        value={item.value}
                        isDisabled={item.isDisabled}
                        defaultSelected={item.defaultSelected}
                        color={item.color}
                        key={item.value}
                    >
                        {item.children}
                    </FrankCheckbox>                    
                ))
            }
        </CheckboxGroup>
    )
}

export default FrankCheckboxGroup;
