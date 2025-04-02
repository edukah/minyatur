# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-03-11

### Added
- TypeScript definitions (`dist/minyatur.d.ts`)
- ESM build output (`dist/minyatur.esm.js`) alongside UMD
- `languageCode` config now defaults to `'auto'` (detects from `<html lang>`, falls back to `'en'`)

### Changed
- README Script Tag examples now include copy instructions for clarity

### Fixed
- Memory leak in fullscreen module — event listeners now properly removed in `destroy()`
- Duplicate keydown listener guard in fullscreen `show()`/`hide()` cycle
- Static state bug in message module — resize handler changed from shared static to per-instance

### Removed
- `globalThis.Minyatur` assignment from library source (consumers are now responsible for global assignment)
