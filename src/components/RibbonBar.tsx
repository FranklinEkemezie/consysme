import { type TabName } from '../state/uiStore'

const TABS: TabName[] = [
  'File',
  'Edit',
  'Insert',
  'View',
  'Simulation',
  'Analysis',
  'Help',
]

type RibbonBarProps = {
  activeTab: TabName
  onTabChange: (tab: TabName) => void
}

function RibbonBar({ activeTab, onTabChange }: RibbonBarProps) {
  return (
    <div className="flex items-center gap-6 px-4 py-2 text-sm">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4B5563] dark:text-[#CBD5E1]">
        ConSysME
      </span>
      {TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onTabChange(tab)}
          className={`border-b-2 px-1 pb-1 text-sm ${
            activeTab === tab
              ? 'border-[#2563EB] text-[#2563EB] dark:text-[#38BDF8]'
              : 'border-transparent text-[#4B5563] hover:text-[#1F2937] dark:text-[#CBD5E1] dark:hover:text-[#E5E7EB]'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default RibbonBar
