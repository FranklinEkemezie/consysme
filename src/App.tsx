import { useMemo } from 'react'
import BottomPanel from './components/BottomPanel'
import CanvasArea from './components/CanvasArea'
import LeftSidebar from './components/LeftSidebar'
import RibbonBar from './components/RibbonBar'
import RightSidebar from './components/RightSidebar'
import ToolbarRow from './components/ToolbarRow'
import { useUIStore } from './state/uiStore'

function App() {
  const {
    activeTab,
    setActiveTab,
    isLeftCollapsed,
    toggleLeftCollapsed,
    isBottomCollapsed,
    toggleBottomCollapsed,
    selection,
    setSelection,
    theme,
    toggleTheme,
  } = useUIStore()

  const toolbarLabel = useMemo(() => {
    switch (activeTab) {
      case 'File':
        return 'Project'
      case 'Edit':
        return 'Edit'
      case 'Insert':
        return 'Insert'
      case 'View':
        return 'View'
      case 'Simulation':
        return 'Simulation'
      case 'Analysis':
        return 'Analysis'
      case 'Help':
        return 'Help'
      default:
        return 'Toolbar'
    }
  }, [activeTab])

  return (
    <div
      className={`h-screen w-screen bg-[#F8F9FA] text-[#1F2937] dark:bg-[#0F172A] dark:text-[#E5E7EB] ${
        theme === 'dark' ? 'dark' : ''
      }`}
    >
      <div className="grid h-full grid-rows-[auto_1fr_auto]">
        <div className="border-b border-[#D0D5DD] bg-[#F1F3F5] dark:border-[#1E293B] dark:bg-[#020617]">
          <RibbonBar activeTab={activeTab} onTabChange={setActiveTab} />
          <ToolbarRow
            toolbarLabel={toolbarLabel}
            activeTab={activeTab}
            selection={selection}
            onSelectionChange={setSelection}
            theme={theme}
            onToggleTheme={toggleTheme}
          />
        </div>

        <div className="grid grid-cols-[auto_1fr_auto]">
          <LeftSidebar isCollapsed={isLeftCollapsed} onToggle={toggleLeftCollapsed} />
          <CanvasArea />
          <RightSidebar selection={selection} />
        </div>

        <BottomPanel isCollapsed={isBottomCollapsed} onToggle={toggleBottomCollapsed} />
      </div>
    </div>
  )
}

export default App
