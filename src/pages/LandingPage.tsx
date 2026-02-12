import {
  ArrowRight,
  ChartLine,
  Code,
  Flow,
  Settings,
  Workspace,
} from '@carbon/icons-react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1F2937] dark:bg-[#0F172A] dark:text-[#E5E7EB]">
      <header className="border-b border-[#D0D5DD] bg-[#F8F9FA] px-6 py-5 dark:border-[#1E293B] dark:bg-[#0F172A]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-[#D0D5DD] text-[#2563EB] dark:border-[#1E293B] dark:text-[#38BDF8]">
              <Workspace size={20} />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4B5563] dark:text-[#CBD5E1]">
              ConSysME
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[#4B5563] dark:text-[#CBD5E1] md:flex">
            <a className="hover:text-[#1F2937] dark:hover:text-[#E5E7EB]" href="#features">
              Features
            </a>
            <a className="hover:text-[#1F2937] dark:hover:text-[#E5E7EB]" href="#workflow">
              Workflow
            </a>
            <a className="hover:text-[#1F2937] dark:hover:text-[#E5E7EB]" href="#about">
              Technical Focus
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/simulator"
              className="inline-flex items-center gap-2 border border-[#2563EB] px-4 py-2 text-sm text-[#2563EB] hover:border-[#1D4ED8] hover:text-[#1D4ED8] dark:border-[#38BDF8] dark:text-[#38BDF8]"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
            <button
              type="button"
              aria-label="Documentation"
              className="hidden border border-[#D0D5DD] px-4 py-2 text-sm text-[#4B5563] hover:border-[#2563EB] hover:text-[#2563EB] dark:border-[#1E293B] dark:text-[#CBD5E1] md:inline-flex"
            >
              Documentation
            </button>
          </div>
        </div>
      </header>

      <section className="px-6 py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#4B5563] dark:text-[#CBD5E1]">
              Control Systems Modelling Environment
            </p>
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
              Visualize, Simulate, and Analyze Control Systems
            </h1>
            <p className="text-base text-[#4B5563] dark:text-[#CBD5E1]">
              ConSysME is a professional block-diagram modelling environment built
              for engineers and researchers who need precision, speed, and
              clarity across the full control design workflow.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/simulator"
                className="inline-flex items-center gap-2 border border-[#2563EB] bg-[#2563EB] px-4 py-2 text-sm text-white hover:bg-[#1D4ED8]"
              >
                Launch Workspace
                <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                aria-label="Documentation"
                className="inline-flex items-center gap-2 border border-[#D0D5DD] px-4 py-2 text-sm text-[#4B5563] hover:border-[#2563EB] hover:text-[#2563EB] dark:border-[#1E293B] dark:text-[#CBD5E1]"
              >
                Documentation
              </button>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-[#4B5563] dark:text-[#CBD5E1]">
              <span className="border border-[#D0D5DD] px-3 py-2 dark:border-[#1E293B]">
                Solver-ready architecture
              </span>
              <span className="border border-[#D0D5DD] px-3 py-2 dark:border-[#1E293B]">
                Versioned model artifacts
              </span>
              <span className="border border-[#D0D5DD] px-3 py-2 dark:border-[#1E293B]">
                Engineering-grade UI
              </span>
            </div>
          </div>
          <div className="border border-[#D0D5DD] bg-[#F1F3F5] p-6 dark:border-[#1E293B] dark:bg-[#020617]">
            <div className="mb-4 text-xs uppercase tracking-[0.18em] text-[#4B5563] dark:text-[#CBD5E1]">
              Block Diagram Preview
            </div>
            <div className="grid h-64 grid-cols-6 gap-3">
              <div className="col-span-2 border border-[#111827] bg-white p-2 text-xs">
                Gain
              </div>
              <div className="col-span-2 border border-[#111827] bg-white p-2 text-xs">
                Integrator
              </div>
              <div className="col-span-2 border border-[#111827] bg-white p-2 text-xs">
                Transfer Fcn
              </div>
              <div className="col-span-6 flex items-center justify-center border border-dashed border-[#D0D5DD] text-xs text-[#4B5563] dark:border-[#1E293B] dark:text-[#CBD5E1]">
                Canvas placeholder (grid + alignment guides)
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-[#4B5563] dark:text-[#CBD5E1]">
              <span className="font-mono">Zoom 100%</span>
              <span>Snap-to-grid enabled</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-t border-[#D0D5DD] px-6 py-14 dark:border-[#1E293B]">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-2xl font-semibold">Core Capabilities</h2>
          <p className="mt-2 text-sm text-[#4B5563] dark:text-[#CBD5E1]">
            The engineering toolkit required for modern control system design.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Flow,
                title: 'Drag-and-Drop Blocks',
                description: 'Compose models rapidly with library-driven blocks.',
              },
              {
                icon: ChartLine,
                title: 'Real-Time Simulation',
                description: 'Validate responses with live solver feedback.',
              },
              {
                icon: Settings,
                title: 'Precision Parameters',
                description: 'Tune gains, integrators, and custom transfer functions.',
              },
              {
                icon: Workspace,
                title: 'Alignment Guides',
                description: 'Keep diagrams readable with snap, grid, and guides.',
              },
              {
                icon: Code,
                title: 'Equation Export',
                description: 'Generate symbolic representations for documentation.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="border border-[#D0D5DD] bg-[#F1F3F5] p-5 text-sm transition-colors hover:border-[#2563EB] dark:border-[#1E293B] dark:bg-[#020617]"
              >
                <feature.icon size={20} className="text-[#2563EB] dark:text-[#38BDF8]" />
                <h3 className="mt-3 text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-[#4B5563] dark:text-[#CBD5E1]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="px-6 py-14">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-2xl font-semibold">Workflow</h2>
          <p className="mt-2 text-sm text-[#4B5563] dark:text-[#CBD5E1]">
            A focused flow from model creation to analysis.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              'Add Blocks',
              'Connect Signals',
              'Configure Parameters',
              'Simulate & Analyze',
            ].map((step, index) => (
              <div
                key={step}
                className="border border-[#D0D5DD] bg-[#F1F3F5] p-5 dark:border-[#1E293B] dark:bg-[#020617]"
              >
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <span className="flex h-7 w-7 items-center justify-center border border-[#2563EB] text-xs text-[#2563EB]">
                    {index + 1}
                  </span>
                  {step}
                </div>
                <p className="mt-3 text-sm text-[#4B5563] dark:text-[#CBD5E1]">
                  Detailed tooling and responsive inspectors keep each stage
                  precise and auditable.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-[#D0D5DD] px-6 py-14 dark:border-[#1E293B]">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <div>
            <h2 className="text-2xl font-semibold">Technical Focus</h2>
            <p className="mt-2 text-sm text-[#4B5563] dark:text-[#CBD5E1]">
              ConSysME delivers a structured environment for teams building
              robust control systems across aerospace, robotics, and industrial
              automation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
            <div className="border border-[#D0D5DD] bg-[#F1F3F5] p-5 dark:border-[#1E293B] dark:bg-[#020617]">
              <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[#4B5563] dark:text-[#CBD5E1]">
                Workspace Overview
              </div>
              <div className="h-44 border border-dashed border-[#D0D5DD] bg-white p-4 text-xs text-[#4B5563] dark:border-[#1E293B] dark:bg-[#0F172A] dark:text-[#CBD5E1]">
                Canvas + property inspector + simulation logs placeholder.
              </div>
            </div>
            <div className="space-y-4 text-sm text-[#4B5563] dark:text-[#CBD5E1]">
              <p>
                Designed for control engineers who need traceable model
                configuration, ConSysME combines block-based modeling with
                advanced parameter inspection.
              </p>
              <p>
                Built-in logging, plotting, and auto-arrange tooling ensure
                complex systems remain readable and reviewable throughout the
                analysis lifecycle.
              </p>
              <ul className="space-y-2 font-mono text-xs">
                <li>Auto-arrange with constraint-aware routing</li>
                <li>Properties panel with versioned parameters</li>
                <li>Simulation logs + plot overlays</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
            <div className="space-y-4 text-sm text-[#4B5563] dark:text-[#CBD5E1]">
              <p>
                Model outputs can be exported for verification, reporting, or
                integration with downstream tooling.
              </p>
              <p>
                Structured workflows make it easier for teams to audit changes,
                reuse libraries, and maintain consistency across projects.
              </p>
            </div>
            <div className="border border-[#D0D5DD] bg-[#F1F3F5] p-5 dark:border-[#1E293B] dark:bg-[#020617]">
              <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[#4B5563] dark:text-[#CBD5E1]">
                Analysis Outputs
              </div>
              <div className="grid gap-3 text-xs text-[#4B5563] dark:text-[#CBD5E1]">
                <div className="border border-[#D0D5DD] bg-white p-3 dark:border-[#1E293B] dark:bg-[#0F172A]">
                  Step response chart placeholder
                </div>
                <div className="border border-[#D0D5DD] bg-white p-3 dark:border-[#1E293B] dark:bg-[#0F172A]">
                  Bode plot + stability margin summary
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#D0D5DD] bg-[#F1F3F5] px-6 py-10 text-sm text-[#4B5563] dark:border-[#1E293B] dark:bg-[#020617] dark:text-[#CBD5E1]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs uppercase tracking-[0.2em]">ConSysME</div>
          <div className="flex flex-wrap gap-6">
            <button type="button" aria-label="Documentation">
              Documentation
            </button>
            <button type="button" aria-label="GitHub">
              GitHub
            </button>
            <button type="button" aria-label="License">
              License
            </button>
            <button type="button" aria-label="Contact">
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
