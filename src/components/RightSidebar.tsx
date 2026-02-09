import { type SelectionType } from '../state/uiStore'

type RightSidebarProps = {
  selection: SelectionType
}

function RightSidebar({ selection }: RightSidebarProps) {
  const inspectorTitle =
    selection === 'block'
      ? 'Block Parameters'
      : selection === 'connection'
        ? 'Connection Properties'
        : 'Inspector'

  return (
    <aside className="w-72 border-l border-[#D0D5DD] bg-[#F1F3F5] dark:border-[#1E293B] dark:bg-[#020617]">
      <div className="px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#4B5563] dark:text-[#CBD5E1]">
        {inspectorTitle}
      </div>
      <div className="space-y-4 px-4 pb-4 text-sm text-[#1F2937] dark:text-[#E5E7EB]">
        {selection === 'block' && (
          <>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.18em] text-[#4B5563] dark:text-[#CBD5E1]">
                Block Name
              </label>
              <input
                className="w-full rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-2 py-1 text-sm text-[#1F2937] focus:border-[#2563EB] focus:outline-none dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]"
                placeholder="Gain"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.18em] text-[#4B5563] dark:text-[#CBD5E1]">
                Gain Value
              </label>
              <input
                className="w-full rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-2 py-1 font-mono text-sm text-[#1F2937] focus:border-[#2563EB] focus:outline-none dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]"
                placeholder="2.5"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.18em] text-[#4B5563] dark:text-[#CBD5E1]">
                Sample Time
              </label>
              <input
                className="w-full rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-2 py-1 font-mono text-sm text-[#1F2937] focus:border-[#2563EB] focus:outline-none dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]"
                placeholder="0.01 s"
              />
            </div>
          </>
        )}
        {selection === 'connection' && (
          <>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.18em] text-[#4B5563] dark:text-[#CBD5E1]">
                Signal Name
              </label>
              <input
                className="w-full rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-2 py-1 text-sm text-[#1F2937] focus:border-[#2563EB] focus:outline-none dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]"
                placeholder="u(t)"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.18em] text-[#4B5563] dark:text-[#CBD5E1]">
                Line Style
              </label>
              <input
                className="w-full rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-2 py-1 text-sm text-[#1F2937] focus:border-[#2563EB] focus:outline-none dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]"
                placeholder="Solid"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.18em] text-[#4B5563] dark:text-[#CBD5E1]">
                Color
              </label>
              <input
                className="w-full rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-2 py-1 font-mono text-sm text-[#1F2937] focus:border-[#2563EB] focus:outline-none dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#E5E7EB]"
                placeholder="#374151"
              />
            </div>
          </>
        )}
        {selection === 'none' && (
          <div className="text-xs text-[#4B5563] dark:text-[#CBD5E1]">
            Select a block or connection on the canvas to edit parameters.
          </div>
        )}
      </div>
    </aside>
  )
}

export default RightSidebar
