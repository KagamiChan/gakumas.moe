import { cn } from '~/lib/utils'

interface Props {
  as?: React.ElementType
  className?: string
}

export const Heading = ({
  as: As = 'h1',
  className,
  ...props
}: React.PropsWithChildren<Props>) => {
  return (
    <As
      {...props}
      className={cn(
        'text-primary-foreground w-full rounded-tr-xl px-2',
        className,
      )}
      style={{
        background:
          'linear-gradient(135deg, transparent 0%, transparent 70%, #ffdca5 70%, #ffdca5), linear-gradient(to right, #ffa91f, #ffc756 70%)',
      }}
    />
  )
}
