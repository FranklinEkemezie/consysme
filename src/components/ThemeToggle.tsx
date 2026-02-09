import Tooltip from './Tooltip'

type ThemeToggleProps = {
  isDark: boolean
  onToggle: () => void
}

function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <Tooltip
      title="Theme"
      description={isDark ? 'Switch to light mode.' : 'Switch to dark mode.'}
      shortcut="Ctrl+Shift+L"
    >
      <button
        type="button"
        aria-label="Toggle dark mode"
        aria-pressed={isDark}
        onClick={onToggle}
        className="flex items-center gap-2 rounded-none border border-[#D0D5DD] px-2 py-1 text-xs text-[#4B5563] dark:border-[#1E293B] dark:text-[#CBD5E1]"
      >
        <span className="uppercase tracking-[0.18em]">Theme</span>
        <span className="text-[11px]">{isDark ? 'Dark' : 'Light'}</span>
        <span
          className={`relative h-4 w-8 border border-[#D0D5DD] dark:border-[#1E293B] ${
            isDark ? 'bg-[#2563EB]/20' : 'bg-[#FFFFFF]'
          }`}
        >
          <span
            className={`absolute top-0 h-full w-4 bg-[#2563EB] transition-transform ${
              isDark ? 'translate-x-4' : 'translate-x-0'
            }`}
          />
        </span>
      </button>
    </Tooltip>
  )
}

export default ThemeToggle
