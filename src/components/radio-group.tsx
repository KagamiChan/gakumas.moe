import { RadioGroup as RadioGroupPrimitive } from '@radix-ui/react-radio-group'
import { cn } from '~/lib/utils'
import { FormControl, FormItem, FormLabel } from './ui/form'
import { RadioGroupItem } from './ui/radio-group'
import { type ReactNode } from 'react'

interface RadioGroupProps {
  label: ReactNode
  options: {
    key: string
    label: string
  }[]
  className?: string
  onValueChange: (value: string) => void
  value: string
}

export const RadioGroup = ({
  options,
  label,
  onValueChange,
  value,
}: RadioGroupProps) => {
  return (
    <RadioGroupPrimitive
      onValueChange={onValueChange}
      defaultValue={value}
      className="flex gap-4"
    >
      <FormLabel className="sr-only">{label}</FormLabel>
      {options.map(({ key, label }) => (
        <FormItem
          key={key}
          className={cn(
            'flex grow items-center space-y-0 space-x-3 rounded-tr-xl rounded-bl-xl p-2',
            {
              'bg-secondary': value !== key,
              'bg-[#FFE7BF]': value === key,
            },
          )}
        >
          <FormControl>
            <RadioGroupItem value={key} />
          </FormControl>
          <FormLabel className="grow font-normal">{label}</FormLabel>
        </FormItem>
      ))}
    </RadioGroupPrimitive>
  )
}
