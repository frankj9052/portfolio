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
  ariaLabel: string;
  className?: string;
  placeholder?: string;
  defaultItems?: DefaultAutocompleteItemsType[];
  defaultFilter?: boolean;
  variant?: "flat" | "faded" | "bordered" | "underlined" | "ghost";
  radius?: "sm" | "md" | "lg" | "none" | "full";
  selectedKey?: string | null;
  onSelectionChange?: (key: Key | null) => void;
  inputValue?: string;
  onInputChange?: (value: string) => void;
  endContent?: ReactNode;
  startContent?: ReactNode;
  customizeStyles?: {
    inputTextStyle?: string;
    clearButtonStyle?: string;
    contentStyle?: string;
  },
  width?: number,
  height?: number,
}

export function FrankAutocomplete({
  ariaLabel,
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
  startContent,
  customizeStyles,
  width,
  height,
}: FrankAutocompleteProps) {
  return (
    <div
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
      }}
    >
      <Autocomplete
        className="h-full"
        placeholder={placeholder}
        defaultItems={defaultItems ?? []}
        variant={variant === "ghost" ? "bordered" : variant}
        inputProps={{
          classNames: {
            label: 'hidden',
            inputWrapper: clsx('h-full min-h-0', {
              'border-none shadow-none': variant === 'ghost',
              'border-1': variant !== 'ghost'
            }),
            input: `${customizeStyles?.inputTextStyle ? customizeStyles.inputTextStyle : 'text-[13px]'}`
          }
        }}
        radius={radius}
        popoverProps={{
          radius: 'sm',
          classNames: {
            content: `${customizeStyles?.contentStyle ? customizeStyles.contentStyle : ''}`
          }
        }}
        classNames={{
          selectorButton: clsx('h-[20px] min-w-0 w-[20px]', {
            'hidden': !!endContent || !!startContent
          }),
          endContentWrapper: 'aspect-square flex items-center justify-center',
          clearButton: `${customizeStyles?.clearButtonStyle ? customizeStyles.clearButtonStyle : 'min-w-0 w-[20px] h-[20px]'}`
        }}
        endContent={endContent}
        startContent={startContent}
        fullWidth
        selectedKey={selectedKey}
        onSelectionChange={onSelectionChange}
        inputValue={inputValue}
        onInputChange={onInputChange}
        aria-label={ariaLabel}
        {...(!defaultFilter && { defaultFilter: () => true })}
      >
        {(item) => <AutocompleteItem
          key={item.key}
          textValue={item.textValue}
        >
          {item.label}
        </AutocompleteItem>}
      </Autocomplete>
    </div>
  )
}

export default FrankAutocomplete;
