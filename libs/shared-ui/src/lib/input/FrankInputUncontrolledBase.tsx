import { Input } from "@heroui/react"
import clsx from "clsx"
import { ReactNode } from "react"
import styled from "styled-components"

export type FrankInputUncontrolledBaseProps = {
  isRequired?: boolean,
  label?: ReactNode,
  labelPlacement?: "outside" | "outside-left" | "inside",
  name?: string,
  placeholder?: string,
  type?: string,
  variant?: "flat" | "faded" | "bordered" | "underlined",
  radius?: "sm" | "md" | "lg" | "none" | "full",
  isInvalid?: boolean,
  errorMessage?: string,
  endContent?: React.ReactNode,
  width?: number,
  height?: number,
  onValueChange?: (value: string) => void
}

const StyledInput = styled(Input) <{ width?: number, height?: number }>`
  [data-slot='input-wrapper'] {
    ${(props) => props.width && `width:${props.width}px`};
    ${(props) => props.height && `height:${props.height}px`};
  }
`
export function FrankInputUncontrolledBase({ isRequired, label, labelPlacement, name, placeholder, type, variant, radius = 'sm', isInvalid, errorMessage, endContent, width, height, onValueChange }: FrankInputUncontrolledBaseProps) {
  return (
    <StyledInput
      isRequired={isRequired}
      label={label}
      labelPlacement={labelPlacement}
      name={name}
      placeholder={placeholder}
      type={type}
      variant={variant}
      classNames={{
        inputWrapper: clsx('min-h-[0px]', {
          'border-1 border-#B5B5B5': variant === 'bordered' || variant === 'faded',
        })
      }}
      radius={radius}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      endContent={endContent}
      width={width}
      height={height}
      onValueChange={onValueChange}
    />
  )
}

export default FrankInputUncontrolledBase;
