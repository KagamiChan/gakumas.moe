import { cn } from '~/lib/utils'

export const Separator = ({ className }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'my-4 flex w-full items-center gap-2 text-[#ffd200] before:block before:h-0.5 before:flex-grow before:bg-current after:block after:h-0.5 after:flex-grow after:bg-current',
        className,
      )}
      role="separator"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <path
          fillRule="evenodd"
          fill="currentColor"
          d="M7.957.095A10.892 10.892 0 010 8.047a10.89 10.89 0 017.957 7.952 10.774 10.774 0 012.869-5.084 10.78 10.78 0 015.078-2.868 10.788 10.788 0 01-5.078-2.868A10.778 10.778 0 017.957.095z"
        />
      </svg>
    </div>
  )
}
