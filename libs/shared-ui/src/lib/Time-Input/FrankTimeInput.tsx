import { TimeInput } from '@heroui/react'

type Props = {
  width?: number,
  height?: number,
  value: string,
  setValue: 
}
export default function FrankTimeInput({width, height, value, setValue}:Props) {
  return (
    <TimeInput
      granularity='minute'
      hourCycle={24}
      radius='sm'
      className='h-[32px] min-h-0 w-[160px] justify-around'
      classNames={{
        base: "flex items-center justify-center w-full",
        inputWrapper: "h-full min-h-0",
        input: 'flex items-center justify-around'
      }}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%'
      }}
    />
  )
}
