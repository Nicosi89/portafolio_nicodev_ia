# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev       # Vite dev server on http://localhost:5173 (opens a browser)
npm run build     # output in dist/
npm run preview   # serves the production build
```

There are no tests and no linter or formatter. The project uses plain JSX with no TypeScript.

## Stack

React 18 and Vite 5, with a minimal `vite.config.js` (only the React plugin and port 5173). Styling is one plain CSS file, `src/styles.css`. The design copies Windows 95/98: beveled windows, pixel fonts and pixel-art images. Fonts are VT323 and Pixelify Sans from Google Fonts (loaded in `index.html`) and MS Sans Serif from `public/fonts/`. UI text is in Spanish.

## Architecture

- `src/App.jsx` is the shell. It draws the window chrome, the fake menu bar (the `MENUS` object is decoration only), the toolbar and section navigation, and it renders the `TweaksPanel`. It applies the tweak values as `data-*` attributes on the root element (for example `data-theme={tweaks.theme}`).
- `src/sections.jsx` holds all content: `Hero`, `MyWork`, `Technologies`, `Contact` and the `PROJECTS` data array. Edit content here, not in `App.jsx`. Project images go in `public/images/`.
- `src/icons.jsx` contains pixel-art SVG icon components (`TechIcon`, `TOOL_ICONS`, `BrandStamp`, `Ico*`).
- `src/styles.css` defines the colors and fonts as CSS variables in `:root`. Themes and hero styles are only attribute selectors that override those variables: `[data-theme="midnight|hotpink|terminal|storm"]` and `[data-hero="rainbow|hotwire|ocean|ghost"]`. To add a theme, add a selector here and an option to the matching `TweakRadio` in `App.jsx`.

### Tweaks panel and the visual editor protocol

`src/tweaks-panel.jsx` is a reusable helper meant to run inside a host visual editor (in an iframe). It is not a dev-only feature.

- `useTweaks(defaults)` is a plain `useState` wrapper (no context). `setTweak(key, value)` updates local state, then posts `__edit_mode_set_keys` to `window.parent`. The host then **rewrites the `/*EDITMODE-BEGIN*/{…}/*EDITMODE-END*/` block around `DEFAULT_TWEAKS` in `App.jsx` on disk**. Keep those markers, and keep that block a JSON-style object literal (quoted keys, no expressions).
- The panel stays hidden until the host sends `__activate_edit_mode`. On plain localhost or in production nothing sends it, so the panel never appears. You can safely remove the panel from `App.jsx`.
- The extra controls (`TweakSlider`, `TweakColor`, `TweakSelect`, and so on) are exported but not all used. The deck-stage and rail code in that file belongs to the generic helper and has no effect on this site.
