import { ImageType, TextType } from '@frankjia9052/shared-utils'
import { Button, ButtonProps } from '@heroui/react'
import { clsx } from 'clsx'
import { forwardRef, ReactNode } from 'react'
import styled from 'styled-components'

export type FrankButtonBaseProps = {
    width?: number,
    height?: number,
    handleClick?: () => void,
    icon?: ImageType,
    text?: TextType,
    buttonContent?: ReactNode,
    variant?: "bordered" | "solid" | "light" | "flat" | "faded" | "shadow" | "ghost",
    radius?: "none" | "sm" | "md" | "lg" | "full",
    backgroundColor?: string,
    disableRipple?: boolean,
    disableAnimation?: boolean,
    activeColor?: string,
    hoverColor?: string,
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
} & ButtonProps

const StyledButton = styled(Button) <FrankButtonBaseProps>`
    font-family:${(props) => props?.text?.fontFamily ? `${props.text.fontFamily}` : 'inherit'};
    font-weight:${(props) => props?.text?.fontWeight ? `${props.text.fontWeight}` : 'inherit'};
    font-size:${(props) => props?.text?.fontSize ? `${props.text.fontSize}px` : 'inherit'};
    color:${(props) => props?.text?.fontColor ? `${props.text.fontColor}` : 'inherit'};
    width: ${(props) => props.width ? `${props.width}px` : '100%'};
    height: ${(props) => props.height ? `${props.height}px` : '100%'};
    ${(props) => props.backgroundColor && `background-color:${props.backgroundColor}`};
    &:hover {
        ${(props) => props.hoverColor && `background-color: ${props.hoverColor}`};
    }
    &:active {
        ${(props) => props.activeColor && `background-color: ${props.activeColor}`};
    }
`

export const FrankButtonBase = forwardRef<HTMLButtonElement, FrankButtonBaseProps>(({
    width,
    height,
    handleClick,
    icon,
    text,
    variant,
    radius,
    backgroundColor,
    disableRipple,
    disableAnimation,
    activeColor,
    hoverColor,
    buttonContent,
    color = 'default',    
    ...props}, ref) => {
    return (
        <StyledButton
            ref={ref}
            color={color}
            {...props}
            {...handleClick && { onPress: handleClick }}
            activeColor={activeColor}
            hoverColor={hoverColor}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            variant={variant}
            className={clsx(`px-0 min-w-0`, {
                'border-1 border-[#E3E3E3]': variant === 'bordered' || variant === 'ghost' || variant === 'faded',
            })}
            radius={radius}
            disableRipple={disableRipple}
            disableAnimation={disableAnimation}
            text={text}
        >
            <div
                className='w-full h-full flex items-center justify-center gap-0.5'
            >
                {
                    !buttonContent && icon && <img {...icon} alt={icon.alt} />
                }
                {
                    !buttonContent && text && text.content && text.content
                }
                {buttonContent && buttonContent}
            </div>
        </StyledButton>
    )
})

FrankButtonBase.displayName = "FrankButtonBase"

export default FrankButtonBase;

