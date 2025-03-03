import { Button, ButtonProps } from '@heroui/react'
import { clsx } from 'clsx'
import { forwardRef, ReactNode } from 'react'

export type FrankButtonBaseProps = {
    customizeContent?: ReactNode,
    width?: number,
    height?: number,
} & ButtonProps

export const FrankButtonBase = forwardRef<HTMLButtonElement, FrankButtonBaseProps>(({
    customizeContent,
    variant,
    width,
    height,
    ...props }, ref) => {
    return (
        <div
            style={{
                width: width ? `${width}px` : '100%',
                height: height ? `${height}px` : '100%',
            }}
        >
            <Button
                ref={ref}
                {...props}
                fullWidth
                variant={variant}
                className={clsx(`px-0 min-w-0 h-full`, {
                    'border-1 border-[#E3E3E3]': variant === 'bordered' || variant === 'ghost' || variant === 'faded',
                })}
            >
                <div
                    className='w-full h-full flex items-center justify-center gap-0.5'
                >
                    {customizeContent && customizeContent}
                </div>
            </Button>
        </div>

    )
})

FrankButtonBase.displayName = "FrankButtonBase"

export default FrankButtonBase;

