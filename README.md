# MICROVERSE COMPLETE
### THE HOLLOW — First-person survival horror

**THE HOLLOW** is the first horror experience inside MICROVERSE COMPLETE. Explore a decaying, isolated house surrounded by a black forest. The current build focuses on one room and its environmental storytelling: damaged wallpaper, damp stains, scattered books, old furniture, a cold fireplace, unsettling portraits, a covered statue, and interactive doors.

![Status](https://img.shields.io/badge/status-prototype-8d1717) ![Platform](https://img.shields.io/badge/platform-web-black) ![Rendering](https://img.shields.io/badge/rendering-Three.js-white)

## Experience

- A dark forest title screen with lightning and a distant axe-bearing silhouette.
- A first-person exploration space with atmospheric fog, shadows, practical lights, and a handheld flashlight.
- Procedural surface textures for worn wallpaper, cracks, aged wood, grime, and stylized blood stains.
- Three interactive doors with opening and closing animation.
- Environmental scares: a portrait whose eyes follow the player, a subtly moving statue, flickering lights, and intermittent lightning.
- A low synthesized ambient drone.

The horror props are fictional environmental set dressing. The current prototype does not contain graphic body-destruction scenes, combat, or a functioning weapon system.

## Controls

- **W / A / S / D** — Move
- **Mouse** — Look around
- **Shift** — Run
- **E** — Open or close a nearby door
- **Esc** — Release pointer lock
- Click the game view to capture the mouse again.

## Run and deploy

This is a static web application. Serve the repository root or deploy it to Vercel.

**Vercel settings**
- Framework preset: **Other**
- Build command: leave empty
- Output directory: **.**
- Install command: leave empty

Three.js is loaded from jsDelivr and fonts from Google Fonts, so an internet connection is required.

## Current scope and known limitations

This is an early playable visual prototype, not a finished horror game. The focus is the first house environment; additional rooms, progression, objectives, enemy AI, save/load, spatial audio, mobile controls, and a full collision/physics system are not implemented yet. Geometry and surface maps are generated procedurally in the browser rather than sourced from scanned or photogrammetric assets. Visual quality and performance still need in-browser testing across devices.

## Technology

- Three.js for real-time 3D rendering.
- Vanilla HTML, CSS, and JavaScript.
- Procedural CanvasTextures and modular geometry.
- WebGL shadows, fog, tone mapping, and animated lighting.

---
**MICROVERSE COMPLETE** is the project. **THE HOLLOW** is its first survival-horror experience.
