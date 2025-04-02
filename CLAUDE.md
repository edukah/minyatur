# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Minyatur is a zero-dependency vanilla JavaScript image/video slider library with zoom, fullscreen, and thumbnail navigation. It exports as a **UMD** global (`Minyatur`) and supports configuration via both JavaScript API and HTML `data-*` attributes. Part of the workbench monorepo — consumed by Dukkan, Bikonuvar, and Burtest via the `@minyatur` webpack alias.

## Commands

```bash
npm run dev      # Webpack dev server on localhost:9006 (or https://minyatur.dev:9006 with local SSL)
npm run build    # Production build → dist/minyatur.min.js + dist/minyatur.min.css
npm run release  # Build + copy dist/ to docs/assets/
```

No test framework is configured. ESLint runs automatically on every build.

## Architecture

**Entry point:** `src/js/index.js` → assigns `Slider` class to `globalThis.Minyatur`

### Core Classes (`src/js/core/`)

| File | Role |
|------|------|
| `slider.js` | Main `Slider` class — uses ES2022 `#` private fields for internal state/methods. Public surface: module-facing (`sliderItems`, `config`, `activeIndex`, `boardList`, `boardWrapper`, `mainContainer`, `language`, `boardListOnShift`, `insertItem()`, `prevItem()`, `nextItem()`, `handleError()`) + consumer API (`add`, `remove`, `destroy`, `enable`, `disable`). All other state/methods are `#private`. |
| `item.js` | Base `Item` class — `show()`, `hide()`, `setElement()`, `getElement()` interface |
| `module.js` | Base `Module` class — reads config from both JS object and HTML `data-{moduleName}-*` attributes |
| `language.js` | Static `Language` class — async i18n loader with Map storage, fallback to `'en'` |
| `ratio-sizer.js` | `RatioSizer` — parses responsive aspect ratio DSL and calculates padding-top for the slider container |

### Item Types (`src/js/item/`)

Items are loaded dynamically via `import(`../item/${tagName}.js`)` based on the child element's `tagName`:

| File | Behavior |
|------|----------|
| `img.js` | Extends `Item` (no overrides) |
| `picture.js` | Extends `Item` (no overrides) |
| `div.js` | Extends `Item` (no overrides) |
| `video.js` | Extends `Item` — calls `this.element.pause()` on `hide()` |

### Modules (`src/js/modules/`)

Modules are loaded dynamically via `import(`../modules/${moduleName}.js`)` based on the `module` config array. All extend `Module` base class.

| Module | Purpose | Config key |
|--------|---------|------------|
| `control` | Prev/next navigation buttons — lazy init via `createButtons()`/`removeButtons()` | `control` |
| `thumbnail` | Thumbnail navigation — delegates to a type subclass | `thumbnail` |
| `zoom` | Magnifying lens on hover with result container positioned in largest available screen space | `zoom` |
| `fullscreen` | Click-to-fullscreen overlay — dynamically loads per-tagName handlers from `fullscreen/` | `fullscreen` |
| `mouse` | Mouse drag navigation (mousedown → mousemove → mouseup) | `mouse` |
| `message` | Text overlay on slides (from `data-message` attribute) with responsive font sizing | `message` |

### Thumbnail Type System (`src/js/modules/thumbnail/`)

`thumbnail.js` (entry) delegates to a type based on `thumbnail.type` config:

| Type | Class | Description |
|------|-------|-------------|
| `dot` (default) | `type/dot.js` | Simple dot indicators |
| `basic` | `type/basic.js` | Image thumbnail strip |
| `slider` | `type/slider.js` | Scrollable thumbnail strip with forward/backward buttons |

All types extend `thumbnail/thumbnail.js` (base), which extends `Module` and provides `previewGenerator()`, `addPreviewItem()`, `removePreviewItem()`, `insertItem()`, and `clickHandler()`.

Preview elements are generated per item type via `preview/{tagName}.js` (img, div, picture, video).

### Aspect Ratio DSL (`ratio-sizer.js`)

Supports responsive aspect ratios via a compact string syntax:

```
"16:9"                          → fixed ratio
"800<16:9"                      → min-width: 800px
"16:9<1200"                     → max-width: 1199px
"800<16:9<1200"                 → range: 800px to 1199px
"1:1<800,800<16:9<1200,1200<4:1" → multiple breakpoints
```

### Config Merge Priority (highest wins)

HTML `data-minyatur-*` attributes → JS config object → `config.js` DEFAULTS

### Default Configuration (`config.js`)

```javascript
{
  aspectRatio: '16:9',
  maxWidth: null,
  maxHeight: null,
  contentWidthLimit: '1250px',
  loop: false,
  startIndex: 1,            // 1-based
  styleAutoload: true,       // auto-injects CSS into <head>
  languageCode: 'en',
  onError: null,           // (error, context) => {} — consumer error callback
  module: ['thumbnail', 'control']
}
```

### Slider Public API

The constructor returns a limited API object (not the Slider instance):

```javascript
const slider = new Minyatur({ target: '#container' });
slider.next({ behavior: 'smooth' });
slider.prev({ behavior: 'smooth' });
slider.insert(2, { behavior: 'smooth' });

// Dynamic item management
slider.add(element);        // append to end
slider.add(element, 0);     // insert at index
slider.remove();             // remove last item
slider.remove(2);            // remove item at index

// Lifecycle
slider.disable();            // disable all interactions
slider.enable();             // re-enable interactions
slider.destroy();            // full cleanup (listeners, observers, DOM)
```

`add(element, index?)` accepts `<img>`, `<picture>`, `<div>`, and `<video>` elements (validated against `Slider.SUPPORTED_TYPES`). Unsupported element types are rejected with a console error. The method is async — it dynamically imports the matching item type handler, updates the slider Map, adjusts `activeIndex`, and notifies control/thumbnail modules.

`remove(index?)` removes the item at the given index (defaults to last). Handles `activeIndex` adjustment, hides the active item if it's being removed, and cleans up control buttons when items drop to 1 or fewer.

`destroy()` removes all event listeners (global resize, boardList touch/scroll/transition), disconnects observers, clears timeouts, calls `destroy()` on each module, removes generated DOM (`boardWrapper`), deletes `__minyatur` back-reference, and clears `sliderItems`/`config` Maps.

`disable()` / `enable()` sets `_disabled` flag and toggles `is-disabled` CSS class. When disabled, `prevItem`, `nextItem`, `touchStart`, `add`, `remove` are no-ops.

### Error Handling

Merkezi `handleError(error, context)` metodu tüm kurtarılabilir hataları yakalar. Consumer `onError` config callback'i ile hataları dinleyebilir:

```javascript
const slider = new Minyatur({
  target: '#container',
  onError: (error, context) => {
    // context: { module, operation, element?, tagName?, moduleName? }
    console.log(error, context);
  }
});
```

`onError` verilmezse hatalar `console.error` ile loglanır. Callback hata fırlatırsa slider kırılmaz.

Sarılan noktalar: `initItems` (dynamic import), `initModules` (dynamic import), `add()` (DOM + import), `fullscreen.eventRouter` (null guard + import), `thumbnail.addPreviewItem` (preview import). Constructor boş item durumunda no-op API döndürür (`next`, `prev`, `insert`, `add`, `remove` sessiz çalışır).

### Style Autoloading

When `styleAutoload: true` (default), the slider injects the compiled CSS directly into `<head>` via a `<style class="minyatur-default-style">` element — no external CSS file needed. This uses a webpack css-loader string import at build time.

## SCSS Structure

Entry: `src/scss/main.scss`

- `base/_variables.scss` — CSS custom properties
- `base/_minyatur.scss` — Core slider styles (container, board, list)
- `base/_buttons.scss` — Prev/next button styles
- `modules/_fullscreen.scss` — Fullscreen overlay styles
- `modules/_zoom.scss` — Zoom lens and result container styles
- `modules/_message.scss` — Message overlay styles
- `modules/thumbnail/{_dot,_basic,_slider}.scss` — Thumbnail type styles

## Build System

Webpack 5 + Babel 7 + Dart Sass (modern API) + ESLint 9. Three config files:

- `webpack.common.js` — Babel transpilation, SCSS extraction, ESLint plugin, sass `loadPaths` set to parent dir for cross-project imports
- `webpack.dev.js` — Dev server with hot reload, CORS headers, optional SSL; outputs to `dev/`; UMD global name: `minyatur` (lowercase)
- `webpack.prod.js` — TerserPlugin minification (drops console, strips comments); outputs to `dist/`; UMD global name: `Minyatur`

CSS is extracted via a `.junk` entry trick — SCSS entry produces a `.junk` file that gets cleaned up post-build.

## Demo Pages

`docs/` contains demo HTML pages: `index.html`, `all.html`, `aspect_ratio.html`, `buttons.html`, `fullscreen.html`, `message.html`, `mouse.html`, `thumbnails.html`, `zoom.html`. The `release` script copies built assets into `docs/assets/`.

## Conventions

- Dynamic imports for items and modules based on tag name / config strings
- `Module` base class provides dual config source (JS + HTML `data-*` attributes)
- `WeakMap` used in fullscreen module to cache per-type class instances
- `Map` used for config storage throughout (`this.config`)
- Turkish used for some inline dev comments; English for all public API and docs
- `Slider` stores a back-reference on the DOM element: `mainContainer.__minyatur = this`
