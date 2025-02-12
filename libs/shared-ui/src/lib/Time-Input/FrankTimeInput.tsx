import { TimeInput, TimeInputValue } from '@heroui/react';
import { parseTime } from '@internationalized/date';

type Props = {
  width?: number,
  height?: number,
  value: string | null,
  setValue: (value: TimeInputValue | null) => void,
  ariaLabel: string,
  fontSize?: number
}
export function FrankTimeInput({ width, height, value, setValue, ariaLabel, fontSize = 13 }: Props) {
  return (
    <div
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
      }}
      className='flex items-center justify-center'
    >
      <TimeInput
        granularity='minute'
        hourCycle={24}
        radius='sm'
        fullWidth
        className='h-full min-h-0 justify-around'
        classNames={{
          base: "flex items-center justify-center w-full aa!text-inherit",
          inputWrapper: "h-full w-full min-h-0 px-0 border-1 border-color-input-border shadow-none focus-within:border-color-input-border focus-within:hover:border-color-input-border aa!text-inherit",
          innerWrapper: 'h-full !text-inherit',
          input: `flex items-center justify-center text-[${fontSize}px] !text-inherit`,
          segment: 'flex items-center justify-center !text-inherit'
        }}
        value={value ? parseTime(value) : undefined}
        onChange={setValue}
        aria-label={ariaLabel}
        variant='bordered'
      />
    </div>
  )
}

export default FrankTimeInput;
