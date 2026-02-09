import { create } from 'zustand'

export type TabName =
  | 'File'
  | 'Edit'
  | 'Insert'
  | 'View'
  | 'Simulation'
  | 'Analysis'
  | 'Help'
export type SelectionType = 'block' | 'connection' | 'none'

type UIState = {
  activeTab: TabName
  isLeftCollapsed: boolean
  isBottomCollapsed: boolean
  selection: SelectionType
  theme: 'light' | 'dark'
  setActiveTab: (tab: TabName) => void
  toggleLeftCollapsed: () => void
  toggleBottomCollapsed: () => void
  setSelection: (selection: SelectionType) => void
  toggleTheme: () => void
}

export const useUIStore = create<UIState>((set) => ({
  activeTab: 'Simulation',
  isLeftCollapsed: false,
  isBottomCollapsed: true,
  selection: 'block',
  theme: 'light',
  setActiveTab: (tab) => set({ activeTab: tab }),
  toggleLeftCollapsed: () => set((state) => ({ isLeftCollapsed: !state.isLeftCollapsed })),
  toggleBottomCollapsed: () =>
    set((state) => ({ isBottomCollapsed: !state.isBottomCollapsed })),
  setSelection: (selection) => set({ selection }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}))
