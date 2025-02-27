import { Avatar, AvatarProps } from "@heroui/react";
import { forwardRef } from "react";
import { GoPerson } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";

export type FrankAvatarProps = {
  name?: string,
  src?: string,
  size?: "sm" | "md" | "lg",
  isDisabled?: boolean,
  isBordered?: boolean,
  radius?: "sm" | "md" | "lg" | "none" | "full",
  className?: string,
} & AvatarProps

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
        showFallback
        fallback={<IoPersonSharp size={20}/>}
        className={className}
        ref={ref}
        {...props}
      />
    )
  }
)

FrankAvatar.displayName = 'FrankAvatar'
export default FrankAvatar;
