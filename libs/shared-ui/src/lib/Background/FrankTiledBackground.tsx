import { ReactNode } from "react";

export type FrankTileBackgroundProps = {
    imageUrl: string;
    className?: string;
    children?: ReactNode
}

export function FrankTiledBackground({
    imageUrl,
    className,
    children,
}: FrankTileBackgroundProps) {
    return (
        <div
            className={className}
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
                width: '100%',
                height: '100%'
            }}
        >
            {children}
        </div>
    )
}
export default FrankTiledBackground;
