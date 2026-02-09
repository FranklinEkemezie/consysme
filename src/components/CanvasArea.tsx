import { Add, ZoomIn, ZoomOut } from '@carbon/icons-react'
import { useCallback, useState } from 'react'
import ReactFlow, { type ReactFlowInstance, ReactFlowProvider } from 'reactflow'
import 'reactflow/dist/style.css'
import ToolbarButton from './ToolbarButton'

function CanvasSurface() {
  const [instance, setInstance] = useState<ReactFlowInstance | null>(null)

  const handleZoomIn = useCallback(() => {
    instance?.zoomIn({ duration: 120 })
  }, [instance])

  const handleZoomOut = useCallback(() => {
    instance?.zoomOut({ duration: 120 })
  }, [instance])

  const handleFit = useCallback(() => {
    instance?.fitView({ duration: 180, padding: 0.1 })
  }, [instance])

  return (
    <main className="relative overflow-hidden bg-[#F8F9FA] dark:bg-[#0F172A]">
      <div className="absolute inset-0 canvas-grid" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-[#2563EB]/20" />
      <div className="absolute top-1/2 h-px w-full bg-[#2563EB]/20" />
      <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
        <div className="rounded-none border border-[#D0D5DD] bg-[#FFFFFF] p-0 dark:border-[#1E293B] dark:bg-[#020617]">
          <ToolbarButton
            title="Zoom In"
            description="Zoom into the canvas view."
            shortcut="Ctrl++"
            onClick={handleZoomIn}
          >
            <ZoomIn size={20} />
          </ToolbarButton>
        </div>
        <div className="rounded-none border border-[#D0D5DD] bg-[#FFFFFF] p-0 dark:border-[#1E293B] dark:bg-[#020617]">
          <ToolbarButton
            title="Zoom Out"
            description="Zoom out of the canvas view."
            shortcut="Ctrl+-"
            onClick={handleZoomOut}
          >
            <ZoomOut size={20} />
          </ToolbarButton>
        </div>
        <div className="rounded-none border border-[#D0D5DD] bg-[#FFFFFF] p-0 dark:border-[#1E293B] dark:bg-[#020617]">
          <ToolbarButton
            title="Fit View"
            description="Fit the model to the viewport."
            shortcut="Shift+1"
            onClick={handleFit}
          >
            <Add size={20} />
          </ToolbarButton>
        </div>
      </div>
      <div className="absolute left-4 top-4 z-10 rounded-none border border-[#D0D5DD] bg-[#FFFFFF] px-3 py-2 text-xs text-[#4B5563] dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#CBD5E1]">
        Zoom 100% · Pan enabled · Snap-to-grid
      </div>
      <div className="h-full w-full">
        <ReactFlow
          className="h-full w-full"
          nodes={[]}
          edges={[]}
          fitView
          panOnDrag
          zoomOnScroll
          zoomOnPinch
          onInit={(rfInstance) => {
            setInstance(rfInstance)
            rfInstance.fitView({ duration: 0, padding: 0.1 })
          }}
        />
      </div>
    </main>
  )
}

function CanvasArea() {
  return (
    <ReactFlowProvider>
      <CanvasSurface />
    </ReactFlowProvider>
  )
}

export default CanvasArea
