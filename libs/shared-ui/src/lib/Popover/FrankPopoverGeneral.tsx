import { ReactNode } from "react";
import { useControlledState } from "../useHooks/useControlledState";
import clsx from "clsx";

export type FrankPopoverGeneralType = {
  isOpen?: boolean,
  popoverTrigger: ReactNode,
  popoverContent: ReactNode,
}
export function FrankPopoverGeneral({
  isOpen,
  popoverTrigger,
  popoverContent
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
        className={clsx('', {
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
