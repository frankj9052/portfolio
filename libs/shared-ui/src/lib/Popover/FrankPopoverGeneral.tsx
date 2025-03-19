import { ReactNode } from "react";
import { useControlledState } from "../useHooks/useControlledState";
import clsx from "clsx";

export type FrankPopoverGeneralType = {
  isOpen?: boolean,
  popoverTrigger: ReactNode,
  popoverContent: ReactNode,
  zIndex?: number
}
export function FrankPopoverGeneral({
  isOpen,
  popoverTrigger,
  popoverContent,
  zIndex
}: FrankPopoverGeneralType) {
  const [isOpenState, setIsOpenState] = useControlledState(
    isOpen,
    false,
  );
  return (
    <div
      className="relative"
    >
      {/* trigger */}
      <div
        onClick={() => {
          setIsOpenState?.(prev => !prev)
        }}
      >
        {popoverTrigger}
      </div>
      {/* popover */}
      <div
        className={clsx(`z-${zIndex ?? 10}`, {
          'hidden': !isOpenState,
          'absolute': isOpenState
        })}
      >
        {popoverContent}
      </div>
    </div>
  )
}

export default FrankPopoverGeneral;
