import { ImageType } from '@frankjia9052/shared-utils'
import { Button, ButtonProps } from '@heroui/react'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type FrankButtonBaseProps = {
    width?: number,
    height?: number,
    handleClick?: () => void,
    icon?: ImageType,
    text?: string,
    variant?: "bordered" | "solid" | "light" | "flat" | "faded" | "shadow" | "ghost",
    radius?: "none" | "sm" | "md" | "lg" | "full",
    backgroundColor?: string
} & ButtonProps

export const FrankButtonBase = forwardRef<HTMLButtonElement, FrankButtonBaseProps>(({ width, height, handleClick, icon, text, variant, radius, backgroundColor, ...props }, ref) => {
    return (
        <Button
            ref={ref}
            {...props}
            variant={variant}
            className={clsx('px-0 min-w-0', {
                'border-1 border-color-input-border': variant === 'bordered' || variant === 'ghost' || variant === 'faded'
            })}
            radius={radius}
            {...handleClick && { onPress: handleClick }}
            style={{
                fontWeight: 'inherit',
                fontSize: 'inherit',
                fontFamily: 'inherit',
                color: 'inherit',
                width: width ? `${width}px` : '100%',
                height: height ? `${height}px` : '100%',
                ...(backgroundColor && { backgroundColor: backgroundColor })
            }}
        >
            <div
                className='w-full h-full flex items-center justify-center gap-0.5'
            >
                {
                    icon && <img {...icon} alt={icon.alt} />
                }
                {
                    text && text
                }
            </div>
        </Button>
    )
})

FrankButtonBase.displayName = "FrankButtonBase"

export default FrankButtonBase;
