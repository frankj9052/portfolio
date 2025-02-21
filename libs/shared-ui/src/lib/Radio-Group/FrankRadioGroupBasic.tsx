import { Radio, RadioGroup } from "@heroui/react"
import clsx from "clsx";
import { CSSProperties, ReactNode } from "react"

export type FrankRadioBasicDataType = {
  value: string;
  label: ReactNode;
}

export type FrankRadioGroupBasicProps = {
  defaultValue?: string,
  orientation?: 'horizontal' | 'vertical';
  isDisabled?: boolean;
  radioData: FrankRadioBasicDataType[];
  radioColor?: string;
  radioSize?: 'sm' | 'md';
  onValueChange?: (value: string) => void;
  width?: number,
  gap?: number,
}
export function FrankRadioGroupBasic({ radioData, defaultValue, orientation = 'vertical', isDisabled = false, radioColor, radioSize='sm', onValueChange, width, gap=0 }: FrankRadioGroupBasicProps) {
  return (
    <RadioGroup
      defaultValue={defaultValue}
      orientation={orientation}
      isDisabled={isDisabled}
      {...onValueChange && { onValueChange: onValueChange }}
      style={{
        width: width ? `${width}px` : '100%'
      }}
      classNames={{
        wrapper: `gap-${gap}`,
      }}
    >
      {
        radioData && radioData.length > 0 && radioData.map((radio) => (
          <Radio
            key={radio.value}
            value={radio.value}
            style={{
              '--after-bg-color': radioColor,
            } as CSSProperties}
            classNames={{
              control: clsx('',
                { 'bg-[var(--after-bg-color)]': !!radioColor }
              ),
              wrapper: clsx('border-[1px]',
                {
                  'group-data-[selected=true]:border-[var(--after-bg-color)]': !!radioColor,
                  'w-4 h-4': radioSize === 'sm'
                }
              ),
            }}
          >
            {radio.label}
          </Radio>
        ))
      }
    </RadioGroup>
  )
}

export default FrankRadioGroupBasic;
