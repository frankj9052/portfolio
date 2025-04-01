import { Avatar, AvatarProps } from "@heroui/react";
import { forwardRef } from "react";

export type FrankAvatarProps = {
  name?: string,
  src?: string,
  size?: "sm" | "md" | "lg",
  isDisabled?: boolean,
  isBordered?: boolean,
  radius?: "sm" | "md" | "lg" | "none" | "full",
  className?: string,
} & AvatarProps

/**
 * FrankAvatarProps defines the prop types for the FrankAvatar component.
 * 
 * @property {string} [name] - The user's name or nickname, used to display initials if no image is provided.
 * @property {string} [src] - The URL of the avatar image.
 * @property {"sm" | "md" | "lg"} [size] - The size of the avatar: small (sm), medium (md), or large (lg).
 * @property {boolean} [isDisabled] - Whether to disable avatar interactions, such as click or hover effects.
 * @property {boolean} [isBordered] - Whether to display a border around the avatar.
 * @property {"sm" | "md" | "lg" | "none" | "full"} [radius] - The border radius of the avatar: small, medium, large, none, or full (circle).
 * @property {string} [className] - Custom CSS class for additional styling.
 * 
 * Inherits all original props from AvatarProps provided by @heroui/react.
 */
export const FrankAvatar = forwardRef<HTMLDivElement, FrankAvatarProps>(
  (
    {
      name,
      src,
      size,
      isDisabled,
      isBordered,
      radius,
      className,
      ...props
    }, ref
  ) => {
    return (
      <Avatar
        src={src}
        name={name}
        size={size}
        isDisabled={isDisabled}
        isBordered={isBordered}
        radius={radius}
        className={className}
        ref={ref}
        {...props}
      />
    )
  }
)

FrankAvatar.displayName = 'FrankAvatar'
export default FrankAvatar;
