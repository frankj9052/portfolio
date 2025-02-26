import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { Key, ReactNode } from "react";

export type DefaultAutocompleteItemsType = {
  label: string | ReactNode,
  key: string,
  description?: string,
}

export type FrankAutocompleteProps = {
  className?: string;
  label?: ReactNode;
  labelPlacement?: "outside" | "outside-left" | "inside";
  placeholder?: string;
  defaultItems?: DefaultAutocompleteItemsType[];
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
        radius: 'sm'
      }}
      classNames={{
        popoverContent: 'text-[13px]',
        selectorButton: 'hidden',
        endContentWrapper: 'aspect-square flex items-center justify-center',
      }}
      endContent={endContent}
      fullWidth
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      inputValue={inputValue}
      onInputChange={onInputChange}
      defaultFilter={() => true}
    >
      {(item) => <AutocompleteItem
        key={item.key}
      >
        {item.label}
      </AutocompleteItem>}
    </Autocomplete>
  )
}

export default FrankAutocomplete;
