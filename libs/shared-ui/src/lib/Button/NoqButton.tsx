import React, { forwardRef } from "react"
import clsx from 'clsx'
import FrankSpinner from "../Spinner/FrankSpinner"

export type NoqButtonProps = {
  theme: 'Default' | 'Brand' | 'Ghost'
  size?: 'sm' | 'md' | 'lg'
  isDisabled?: boolean
  loading?: boolean
  icon?: React.ReactNode
  text?: string,
  textStyle?: string,
  handleClick?: () => void
}

const NoqButton = forwardRef<HTMLButtonElement, NoqButtonProps>(({ theme, size, isDisabled, loading, icon, text, textStyle, handleClick, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={clsx('transition duration-200 ease-in-out font-inter min-w-0 w-full rounded-[8px] overflow-hidden text-ellipsis flex items-center justify-center active:shadow-[inset_0px_2px_1px_0px_rgba(0,0,0,0.15)] focus:outline-offset-2 focus:outline-[#0062D3] transition-none disabled:pointer-events-none select-none', {
        'bg-[#fff] border-1 text-[#303030] hover:bg-[#ccc] active:bg-[#EBEBEB] disabled:bg-[#F2F2F2] disabled:text-[#B5B5B5] disabled:border-none': theme === 'Default',
        'bg-[#0C534F] hover:bg-[#0C6A64] focus:bg-[#0C6A64] active:bg-[#003F3C] focus:text-[#E4FFE5] active:text-[#D0FFD1] text-[#E4FFE5] disabled:bg-[#C1C1BD] disabled:text-[#E3E3DE]': theme === 'Brand',
        'focus:bg-[#0000000D] hover:bg-[#0000000D] active:bg-[#00000014] text-[#303030] disabled:text-[#B5B5B5]': theme === 'Ghost',
        'px-1': !text
      }, {
        "px-[8px] py-[4px] aw-[66px] h-[24px] text-[12px] ": size === 'sm',
        "px-[8px] py-[6px] aw-[76px] h-[33px]  text-[13px]": size === 'md',
        "px-[8px] py-[8px] aw-[82px] h-[36px]  text-[14px]": size === 'lg'
      },

      )}
      disabled={isDisabled || loading}
      color="default"
      onClick={handleClick}      
    >
      {loading ? (
        <FrankSpinner
          variant="simple"
          size="sm"
        />

      )
        : (
          <div className={clsx(`flex items-center gap-1 w-full ${textStyle ?? ''}`, {
            'justify-center': !text
          })}>
            {icon && (
              <span className={clsx({ "grayscale opacity-90 flex": isDisabled && theme === "Brand" })}>
                {icon}
              </span>
            )}
            {text}
          </div>
        )}
    </button>

  );
})
NoqButton.displayName = 'NoqButton'
export default NoqButton