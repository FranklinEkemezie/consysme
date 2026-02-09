import {
  Add,
  Play,
  Redo,
  Save,
  Settings,
  Stop,
  Undo,
  ZoomIn,
  ZoomOut,
} from '@carbon/icons-react'
import { type ComponentType } from 'react'
import { type SelectionType, type TabName } from '../state/uiStore'
import ThemeToggle from './ThemeToggle'
import ToolbarButton from './ToolbarButton'

type ToolbarRowProps = {
  toolbarLabel: string
  activeTab: TabName
  selection: SelectionType
  onSelectionChange: (selection: SelectionType) => void
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

type ActionItem = {
  id: string
  title: string
  description: string
  shortcut?: string
  Icon: ComponentType<{ size?: number }>
}

const ACTIONS_BY_TAB: Record<TabName, ActionItem[]> = {
  File: [
    {
      id: 'save',
      title: 'Save',
      description: 'Write the current model to disk.',
      shortcut: 'Ctrl+S',
      Icon: Save,
    },
    {
      id: 'export',
      title: 'Export',
      description: 'Export the model to a report bundle.',
      shortcut: 'Ctrl+E',
      Icon: Save,
    },
    {
      id: 'package',
      title: 'Package',
      description: 'Build a deployable model package.',
      Icon: Save,
    },
  ],
  Edit: [
    {
      id: 'undo',
      title: 'Undo',
      description: 'Revert the last action.',
      shortcut: 'Ctrl+Z',
      Icon: Undo,
    },
    {
      id: 'redo',
      title: 'Redo',
      description: 'Re-apply the last action.',
      shortcut: 'Ctrl+Shift+Z',
      Icon: Redo,
    },
    {
      id: 'cut',
      title: 'Cut',
      description: 'Cut selected blocks to clipboard.',
      shortcut: 'Ctrl+X',
      Icon: Undo,
    },
    {
      id: 'copy',
      title: 'Copy',
      description: 'Copy selected blocks to clipboard.',
      shortcut: 'Ctrl+C',
      Icon: Redo,
    },
    {
      id: 'paste',
      title: 'Paste',
      description: 'Paste blocks from clipboard.',
      shortcut: 'Ctrl+V',
      Icon: Add,
    },
  ],
  Insert: [
    {
      id: 'block',
      title: 'Block',
      description: 'Insert a new block on the canvas.',
      shortcut: 'B',
      Icon: Add,
    },
    {
      id: 'connection',
      title: 'Connection',
      description: 'Draw a new signal connection.',
      shortcut: 'L',
      Icon: Add,
    },
    {
      id: 'annotation',
      title: 'Annotation',
      description: 'Add a text annotation.',
      shortcut: 'T',
      Icon: Add,
    },
  ],
  View: [
    {
      id: 'zoom-in',
      title: 'Zoom In',
      description: 'Zoom into the canvas view.',
      shortcut: 'Ctrl++',
      Icon: ZoomIn,
    },
    {
      id: 'zoom-out',
      title: 'Zoom Out',
      description: 'Zoom out of the canvas view.',
      shortcut: 'Ctrl+-',
      Icon: ZoomOut,
    },
    {
      id: 'fit',
      title: 'Fit View',
      description: 'Fit the model to the viewport.',
      shortcut: 'Shift+1',
      Icon: ZoomIn,
    },
    {
      id: 'grid',
      title: 'Grid',
      description: 'Toggle snap-to-grid alignment.',
      Icon: ZoomOut,
    },
  ],
  Simulation: [
    {
      id: 'run',
      title: 'Run',
      description: 'Run the simulation.',
      shortcut: 'F5',
      Icon: Play,
    },
    {
      id: 'stop',
      title: 'Stop',
      description: 'Stop the current simulation.',
      shortcut: 'Shift+F5',
      Icon: Stop,
    },
    {
      id: 'reset',
      title: 'Reset',
      description: 'Reset simulation state and time.',
      Icon: Stop,
    },
    {
      id: 'solver',
      title: 'Solver',
      description: 'Configure solver settings.',
      Icon: Settings,
    },
  ],
  Analysis: [
    {
      id: 'analyze',
      title: 'Analyze',
      description: 'Run stability and response analysis.',
      Icon: Settings,
    },
    {
      id: 'plot',
      title: 'Plot',
      description: 'Generate plots for selected signals.',
      Icon: Settings,
    },
    {
      id: 'sweep',
      title: 'Sweep',
      description: 'Run a parameter sweep study.',
      Icon: Settings,
    },
    {
      id: 'code',
      title: 'Code',
      description: 'Generate equations from the model.',
      Icon: Settings,
    },
  ],
  Help: [
    {
      id: 'help',
      title: 'Help',
      description: 'Open the help workspace.',
      Icon: Settings,
    },
    {
      id: 'shortcuts',
      title: 'Shortcuts',
      description: 'View keyboard shortcuts.',
      Icon: Settings,
    },
  ],
}

function ToolbarRow({
  toolbarLabel,
  activeTab,
  selection,
  onSelectionChange,
  theme,
  onToggleTheme,
}: ToolbarRowProps) {
  const actions = ACTIONS_BY_TAB[activeTab]

  return (
    <div className="flex items-center justify-between border-t border-[#D0D5DD] px-4 py-2 text-sm dark:border-[#1E293B]">
      <div className="flex items-center gap-4 text-[#4B5563] dark:text-[#CBD5E1]">
        <span className="text-xs uppercase tracking-[0.18em]">{toolbarLabel}</span>
        <div className="flex items-center gap-3">
          {actions.map(({ id, title, description, shortcut, Icon }) => (
            <ToolbarButton
              key={id}
              title={title}
              description={description}
              shortcut={shortcut}
            >
              <Icon size={20} />
            </ToolbarButton>
          ))}
          {activeTab === 'View' ? (
            <ThemeToggle isDark={theme === 'dark'} onToggle={onToggleTheme} />
          ) : null}
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-[#4B5563] dark:text-[#CBD5E1]">
        <span>Selection</span>
        <button
          type="button"
          aria-label="Select Block"
          onClick={() => onSelectionChange('block')}
          className={`rounded-none border px-2 py-1 ${
            selection === 'block'
              ? 'border-[#2563EB] text-[#2563EB]'
              : 'border-[#D0D5DD] text-[#4B5563] dark:border-[#1E293B] dark:text-[#CBD5E1]'
          }`}
        >
          Block
        </button>
        <button
          type="button"
          aria-label="Select Connection"
          onClick={() => onSelectionChange('connection')}
          className={`rounded-none border px-2 py-1 ${
            selection === 'connection'
              ? 'border-[#2563EB] text-[#2563EB]'
              : 'border-[#D0D5DD] text-[#4B5563] dark:border-[#1E293B] dark:text-[#CBD5E1]'
          }`}
        >
          Connection
        </button>
        <button
          type="button"
          aria-label="Clear Selection"
          onClick={() => onSelectionChange('none')}
          className="rounded-none border border-[#D0D5DD] px-2 py-1 text-[#4B5563] dark:border-[#1E293B] dark:text-[#CBD5E1]"
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default ToolbarRow
