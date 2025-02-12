import { ImageType } from '@frankjia9052/shared-utils'
import { Button } from '@heroui/react'

type Props = {
    width?: number,
    height?: number,
    handleClick: () => void,
    icon?: ImageType,
    text?: string,
    variant?: "bordered" | "solid" | "light" | "flat" | "faded" | "shadow" | "ghost",
    radius?: "none" | "sm" | "md" | "lg" | "full"
}

export function FrankButtonBase({ width, height, handleClick, icon, text, variant, radius }: Props) {
    return (
        <Button
            variant={variant}
            className='px-0 min-w-0 border-1 border-color-input-border'            
            radius={radius}
            onPress={handleClick}
            style={{
                fontWeight: 'inherit',
                fontSize: 'inherit',
                fontFamily: 'inherit',
                color: 'inherit',
                width: width ? `${width}px` : '100%',
                height: height ? `${height}px` : '100%',
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
}

export default FrankButtonBase;
