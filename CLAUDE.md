# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start

**Install dependencies:**
```bash
npm install
```

**Development:**
```bash
npm run dev
```
Auto-opens at `http://localhost:5173`. Vite provides hot module replacement for instant feedback during development.

**Production build:**
```bash
npm run build
npm run preview
```

The build output goes to the `dist/` directory. Preview runs the production build locally before deployment.

## Tech Stack

**Frontend Framework:** React 18.3.1 with Vite 5.4.10 as the build tool
- **UI:** React functional components with hooks (useState, useEffect, useRef, useCallback, useMemo)
- **Styling:** Plain CSS with CSS custom properties (CSS variables) for theming
- **Fonts:** Google Fonts (VT323, Pixelify Sans) + custom MS Sans Serif font file for Windows 95/98 aesthetic
- **No TypeScript:** Project uses JSX (`.jsx` files) without TypeScript

**Design Theme:** Windows 95/98 retro operating system aesthetic with pixel art and beveled UI elements

## Project Structure

**Core entry points:**
- `index.html` – HTML entry point, loads React app into `<div id="root">`
- `src/main.jsx` – React root initialization (ReactDOM.createRoot)
- `src/App.jsx` – Main application shell component (window chrome, menu bar, toolbar, state management)

**Component modules:**
- `src/sections.jsx` – Page content sections (Hero, MyWork, Technologies, Contact) + PROJECTS data array
- `src/icons.jsx` – Pixel-art SVG icon components (TechIcon, IcoMail, IcoPhone, IcoGlobe, IcoChat, BrandStamp, TOOL_ICONS, IcoInfo)
- `src/tweaks-panel.jsx` – Theme customization panel (TweaksPanel, useTweaks hook, TweakSection, TweakRadio, TweakToggle) with edit mode for visual builder

**Styling:**
- `src/styles.css` – Global styles including CSS custom properties (colors, fonts), retro window chrome styles (`.win`, `.win-inset`, `.title-bar`), responsive layout, theme variations

**Assets:**
- `public/fonts/` – Custom font files (MS Sans Serif Bold)

## Architecture & Patterns

### State Management
App.jsx uses React hooks for state:
- `tweaks` – Theme configuration (theme, heroGradient, welcomePopup, crtMode, showMarquee, etc.)
- `useTweaks` hook – Provides tweaks state and dispatch to child components via context

### Data Organization
All portfolio content (projects, technologies, contact info) is centralized in `sections.jsx`:
- `PROJECTS` array – Project descriptions with title, role, year, tags, color palettes
- Export section components (Hero, MyWork, Technologies, Contact) and supporting data

### Menu System
Fake Windows menu bar (Archivo, Editar, Ver, Favoritos, Acerca) is hardcoded in App.jsx as `MENUS` object for retro aesthetic—not functional, for UI only.

### Theme & Customization
- CSS variables in `:root` define all colors, fonts, and spacing
- Theme names: "midnight", "retro", "light", "dark", etc. (referenced in tweaks)
- TweaksPanel allows real-time theme switching during development; disabled by default in production (won't render if panel hook returns null)
- Edit mode markers (`/*EDITMODE-BEGIN*/.../*EDITMODE-END*/`) in App.jsx for visual builder integration

### Responsive Design
CSS is mobile-responsive; layout adapts via media queries and viewport-based sizing.

## Key Files to Know

- **App.jsx** – Controls all application state (tweaks, menu interactions, section navigation). ~500 lines. Imports all sections and icons.
- **sections.jsx** – All content (projects, tech stack, hero text, contact form). Data-driven; edit here to update portfolio content. ~600 lines.
- **styles.css** – Entire visual appearance (colors, typography, retro window effects, layout). ~600 lines. Contains all CSS custom properties.
- **icons.jsx** – SVG icon components. Each icon is a React component returning `<svg>`. ~400 lines.
- **tweaks-panel.jsx** – Theme customization UI. Exports TweaksPanel component and useTweaks hook. ~700 lines.

## Important Notes

1. **No TypeScript or linting:** This project uses vanilla JavaScript/JSX without TypeScript, ESLint, or Prettier. Type safety is manual.

2. **Tweaks Panel in Dev Only:** The TweaksPanel component is rendered in App.jsx but only appears in localhost when used with the visual editor. In production, the panel logic is disabled or can be removed.

3. **Edit Mode for Visual Builder:** Sections of App.jsx wrapped in `/*EDITMODE-BEGIN*/` comments are designed for live editing in a visual builder environment.

4. **Content is in sections.jsx:** All portfolio data (projects, tech stack, contact) should be edited in sections.jsx, not in App.jsx. Changes to PROJECTS array, technologies, or hero text go there.

5. **CSS Custom Properties:** All theming is controlled through CSS variables in `:root`. Adding a new theme requires defining new color variables in styles.css and updating the tweaks system.

6. **No Build Config Customization:** vite.config.js is minimal (just React plugin + port 5173). Changes to this file are rare.
