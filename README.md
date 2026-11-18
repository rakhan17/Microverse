# MICROVERSE 🌍
### Living World Simulator

A realistic 3D world-building sandbox. Shape a small island, place structures and wildlife, and experiment with its environment.

![Status](https://img.shields.io/badge/status-pre--alpha-orange) ![Platform](https://img.shields.io/badge/platform-web-blue) ![3D](https://img.shields.io/badge/3D-Three.js-black)

## Current prototype · v0.1.0
- Procedural 3D island terrain, ocean, shoreline, fog, lighting and shadows.
- Orbit camera: drag to rotate and scroll to zoom.
- Place trees, houses and placeholder wildlife by selecting a tool and clicking the island.
- Daylight control and clear/rain visual modes.
- Basic local save/load for world counters and daylight settings.
- Responsive dark interface with a What If Lab preview.

## Run locally
This is a static web app. You can open `index.html` in a modern browser with an internet connection, or serve the repository with any static web server.

For Vercel, use **Other** as the framework preset, leave the build command empty, and set the output directory to `.`.

## Prototype limitations
This is an early visual and interaction prototype, not a complete simulation. Wildlife does not yet move or reproduce. Residents, economy, real weather physics, terrain sculpting, gravity simulation, undo/redo, and persistence of placed 3D objects are not implemented. The time-speed and gravity controls are interface foundations only. Rain is currently a visual mode rather than a weather system.

## Roadmap
1. Persistent world objects, placement preview, terrain sculpting, undo/redo.
2. Moving wildlife, vegetation growth, population dynamics and ecosystem metrics.
3. Roads, buildings, residents, needs and economy.
4. Character creator and life simulation.
5. Parameter-driven What If Laboratory.
6. Save slots, export/import, optimization and deployment.

## Tech
- [Three.js](https://threejs.org/) for real-time 3D rendering.
- [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) for camera interaction.
- Vanilla HTML, CSS and JavaScript for the prototype interface.

---
**MICROVERSE** is an experimental sandbox project.