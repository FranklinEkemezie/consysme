import { ChevronDown, ChevronUp } from '@carbon/icons-react'

type LeftSidebarProps = {
  isCollapsed: boolean
  onToggle: () => void
}

function LeftSidebar({ isCollapsed, onToggle }: LeftSidebarProps) {
  return (
    <aside
      className={`border-r border-[#D0D5DD] bg-[#F1F3F5] dark:border-[#1E293B] dark:bg-[#020617] ${
        isCollapsed ? 'w-14' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between px-3 py-3 text-xs uppercase tracking-[0.2em] text-[#4B5563] dark:text-[#CBD5E1]">
        <span className={`${isCollapsed ? 'sr-only' : ''}`}>Toolbox</span>
        <button
          type="button"
          onClick={onToggle}
          className="rounded-none border border-[#D0D5DD] p-1 text-[#4B5563] dark:border-[#1E293B] dark:text-[#CBD5E1]"
        >
          {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </button>
      </div>
      <div className={`${isCollapsed ? 'hidden' : 'block'} px-3 pb-4`}>
        <div className="border-t border-[#D0D5DD] pt-3 text-xs uppercase tracking-[0.18em] text-[#4B5563] dark:border-[#1E293B] dark:text-[#CBD5E1]">
          Blocks
        </div>
        <div className="mt-2 space-y-2 text-sm">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-3 py-2 text-left text-[#1F2937] hover:border-[#6B7280] dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]"
          >
            Gain
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-3 py-2 text-left text-[#1F2937] hover:border-[#6B7280] dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]"
          >
            Integrator
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-3 py-2 text-left text-[#1F2937] hover:border-[#6B7280] dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]"
          >
            Transfer Function
          </button>
        </div>
        <div className="mt-4 border-t border-[#D0D5DD] pt-3 text-xs uppercase tracking-[0.18em] text-[#4B5563] dark:border-[#1E293B] dark:text-[#CBD5E1]">
          Connections
        </div>
        <div className="mt-2 space-y-2 text-sm">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-3 py-2 text-left text-[#1F2937] hover:border-[#6B7280] dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]"
          >
            Signal Line
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-3 py-2 text-left text-[#1F2937] hover:border-[#6B7280] dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]"
          >
            Bus
          </button>
        </div>
        <div className="mt-4 border-t border-[#D0D5DD] pt-3 text-xs uppercase tracking-[0.18em] text-[#4B5563] dark:border-[#1E293B] dark:text-[#CBD5E1]">
          Annotations
        </div>
        <div className="mt-2 space-y-2 text-sm">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-3 py-2 text-left text-[#1F2937] hover:border-[#6B7280] dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]"
          >
            Text Note
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-3 py-2 text-left text-[#1F2937] hover:border-[#6B7280] dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]"
          >
            Callout
          </button>
        </div>
      </div>
    </aside>
  )
}

export default LeftSidebar
