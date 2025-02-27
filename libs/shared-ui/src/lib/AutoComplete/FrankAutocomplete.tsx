import { Autocomplete, AutocompleteItem } from "@heroui/react";
import clsx from "clsx";
import { Key, ReactNode } from "react";

export type DefaultAutocompleteItemsType = {
  label: string | ReactNode,
  key: string,
  textValue: string,
  description?: string,
}

export type FrankAutocompleteProps = {
  className?: string;
  label?: ReactNode;
  labelPlacement?: "outside" | "outside-left" | "inside";
  placeholder?: string;
  defaultItems?: DefaultAutocompleteItemsType[];
  defaultFilter?: boolean;
  variant?: "flat" | "faded" | "bordered" | "underlined";
  radius?: "sm" | "md" | "lg" | "none" | "full";
  selectedKey?: string | null;
  onSelectionChange?: (key: Key | null) => void;
  inputValue?: string;
  onInputChange?: (value: string) => void;
  endContent?: ReactNode;
}

export function FrankAutocomplete({
  label,
  labelPlacement,
  placeholder,
  defaultItems,
  defaultFilter,
  variant,
  radius,
  selectedKey,
  onSelectionChange,
  inputValue,
  onInputChange,
  endContent,
}: FrankAutocompleteProps) {
  return (
    <Autocomplete
      label={label}
      labelPlacement={labelPlacement}
      placeholder={placeholder}
      defaultItems={defaultItems ?? []}
      variant={variant}
      inputProps={{
        classNames: {
          label: '!translate-y-[-40px]',
          inputWrapper: 'border-1 h-[32px] min-h-0',
          input: 'text-[13px]'
        }
      }}
      radius={radius}
      popoverProps={{
        radius: 'sm',
      }}
      classNames={{
        selectorButton: clsx('h-[20px] min-w-0 w-[20px]', {
          'hidden': !!endContent
        }),
        endContentWrapper: 'aspect-square flex items-center justify-center',
        clearButton: 'min-w-0 h-[20px] w-[20px]'
      }}
      endContent={endContent}
      fullWidth
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      inputValue={inputValue}
      onInputChange={onInputChange}
      {...(!defaultFilter && { defaultFilter: () => true })}
    >
      {(item) => <AutocompleteItem
        key={item.key}
        textValue={item.textValue}
      >
        {item.label}
      </AutocompleteItem>}
    </Autocomplete>
  )
}

export default FrankAutocomplete;
