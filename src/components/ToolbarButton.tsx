import { type ReactNode } from 'react'
import Tooltip from './Tooltip'

type ToolbarButtonProps = {
  title: string
  description: string
  shortcut?: string
  onClick?: () => void
  children: ReactNode
}

function ToolbarButton({
  title,
  description,
  shortcut,
  onClick,
  children,
}: ToolbarButtonProps) {
  return (
    <Tooltip title={title} description={description} shortcut={shortcut}>
      <button
        type="button"
        aria-label={title}
        onClick={onClick}
        className="rounded-none border border-transparent px-2 py-1 text-[#4B5563] hover:border-[#2563EB] hover:text-[#2563EB] dark:text-[#CBD5E1]"
      >
        {children}
      </button>
    </Tooltip>
  )
}

export default ToolbarButton
