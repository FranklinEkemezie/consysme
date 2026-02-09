import { type ReactNode } from 'react'

type TooltipProps = {
  title: string
  description: string
  shortcut?: string
  children: ReactNode
}

function Tooltip({ title, description, shortcut, children }: TooltipProps) {
  return (
    <div className="group relative inline-flex">
      {children}
      <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-3 py-2 text-left text-xs text-[#1F2937] opacity-0 shadow-none transition-opacity duration-150 group-hover:opacity-100 dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#4B5563] dark:text-[#CBD5E1]">
          <span>{title}</span>
          {shortcut ? <span className="font-mono text-[10px]">{shortcut}</span> : null}
        </div>
        <div className="mt-1 text-xs text-[#4B5563] dark:text-[#CBD5E1]">
          {description}
        </div>
      </div>
    </div>
  )
}

export default Tooltip
