import { ChevronDown, ChevronUp } from '@carbon/icons-react'

type BottomPanelProps = {
  isCollapsed: boolean
  onToggle: () => void
}

function BottomPanel({ isCollapsed, onToggle }: BottomPanelProps) {
  return (
    <div className="border-t border-[#D0D5DD] bg-[#F1F3F5] dark:border-[#1E293B] dark:bg-[#020617]">
      <div className="flex items-center justify-between px-4 py-2 text-sm text-[#4B5563] dark:text-[#CBD5E1]">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em]">
          <button
            type="button"
            className="border-b-2 border-transparent pb-1 text-[#4B5563] hover:text-[#1F2937] dark:text-[#CBD5E1] dark:hover:text-[#E5E7EB]"
          >
            Simulation Logs
          </button>
          <button
            type="button"
            className="border-b-2 border-transparent pb-1 text-[#4B5563] hover:text-[#1F2937] dark:text-[#CBD5E1] dark:hover:text-[#E5E7EB]"
          >
            Plots / Graphs
          </button>
          <button
            type="button"
            className="border-b-2 border-transparent pb-1 text-[#4B5563] hover:text-[#1F2937] dark:text-[#CBD5E1] dark:hover:text-[#E5E7EB]"
          >
            Output Data
          </button>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className="rounded-none border border-[#D0D5DD] p-1 text-[#4B5563] dark:border-[#1E293B] dark:text-[#CBD5E1]"
        >
          {isCollapsed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
      {!isCollapsed && (
        <div className="border-t border-[#D0D5DD] px-4 py-3 text-sm text-[#4B5563] dark:border-[#1E293B] dark:text-[#CBD5E1]">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2 font-mono text-xs">
              <div>[00:00:01] Simulation ready.</div>
              <div>[00:00:03] Solver: ode45.</div>
              <div>[00:00:05] Status: idle.</div>
            </div>
            <div className="text-xs">Placeholder for plotted outputs and scopes.</div>
            <div className="text-xs">Output table placeholder for signal values.</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BottomPanel
