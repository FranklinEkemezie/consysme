# ConSysME
Control Systems Modelling Environment (ConSysME) is a professional, desktop-style GUI for visualizing, modeling, simulating, and analyzing control systems with block diagrams.  
This repository contains:
- A **technical GUI workspace** served at `/app`
- A **professional landing page** served at `/`

## Tech Stack
- React + TypeScript
- Vite
- Tailwind CSS
- React Flow (canvas placeholder)
- Zustand (UI state placeholders)
- React Router (landing vs app routes)
- IBM Carbon Icons

## Design System
Fonts (strict):
- IBM Plex Sans (UI)
- JetBrains Mono (code)
- Latin Modern Math (math)

Color palette and component styling follow the provided ConSysME design system in the project brief.

## Routes
- `/` → Landing page
- `/app` → GUI workspace

## Getting Started
Install dependencies:
```bash
pnpm install
```

Run the dev server:
```bash
pnpm dev
```

Build for production:
```bash
pnpm build
```

Preview the production build:
```bash
pnpm preview
```

## Project Structure
Key folders:
- `src/App.tsx` — GUI workspace root
- `src/pages/LandingPage.tsx` — Landing page
- `src/components/` — Modular UI components
- `src/state/uiStore.ts` — Zustand UI store
- `src/index.css` — Tailwind + global styles

## UI Behavior
- **Ribbon + Toolbar**: Tabbed toolbar with tab-specific mock actions.
- **Left Toolbox**: Collapsible block library panel.
- **Right Inspector**: Contextual inspector panel.
- **Canvas**: React Flow placeholder with zoom/pan controls.
- **Bottom Panel**: Collapsible logs/plots/output panel.
- **Theme Toggle**: Available in the **View** tab (toggles light/dark mode).

## Notes
- No backend is included.
- React Flow logic is intentionally minimal; only layout and zoom/pan interactions are wired.
- Fonts are assumed available/bundled in the environment (no font loader included).

## Contributing
Keep changes aligned with the ConSysME design system:
- Use IBM Carbon Icons only
- Maintain the defined palette and typography
- Avoid marketing-style UI in the workspace

## License
TBD
