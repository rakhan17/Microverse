# MICROVERSE COMPLETE
### LIMINAL — An atmospheric 3D exploration

LIMINAL is a first-person exploration experience about spaces that feel familiar, quiet, and subtly out of place. Move through four environments built with procedural architecture, restrained materials, atmospheric lighting, and a minimal interface.

![Status](https://img.shields.io/badge/status-experimental-aaa98b) ![Platform](https://img.shields.io/badge/platform-web-blue) ![Rendering](https://img.shields.io/badge/rendering-Three.js-black)

## Environments

| Space | Environment |
|---|---|
| 01 — The Yellow Hall | A warm office corridor with repeating architectural bays and quiet work areas. |
| 02 — Blue Hours | An empty aquatic centre with a recessed pool basin and cool, diffuse light. |
| 03 — After Hours | A closed retail concourse with glass storefronts and sparse seating. |
| 04 — The Deep Level | A subdued underground parking level with structural columns and parking bays. |

## Controls

- **W / A / S / D** — Move
- **Mouse** — Look around
- **Shift** — Move faster
- **E** — Pass through the exit when prompted
- **Esc** — Release pointer lock
- Select a location from the upper-right navigation to travel directly.

Click the scene to capture the mouse again after releasing it.

## Run and deploy

The project is a static web application. It can be served from the repository root or deployed to Vercel.

**Vercel settings**
- Framework preset: **Other**
- Build command: leave empty
- Output directory: **.**
- Install command: leave empty

Three.js is loaded from jsDelivr and fonts from Google Fonts, so an internet connection is required.

## Current scope

This is an atmospheric visual exploration prototype. The environments use procedural Three.js geometry rather than photogrammetry or scanned architectural assets. The ambience is a synthesized low-frequency tone. There are no NPCs, objectives, save system, advanced physics, or mobile touch controls yet. The exit interaction transitions between the four authored spaces.

## Design and technology

- Three.js for real-time 3D rendering.
- Vanilla HTML, CSS, and JavaScript.
- Modular room construction with consistent dimensions and material palettes.
- Fog, hemisphere and directional lighting, shadows, and a restrained interface.

## Roadmap

- Add richer architectural details and unique environmental storytelling.
- Improve surface materials with optimized texture maps.
- Add spatial environmental audio and subtle reactive details.
- Add mobile controls and accessibility options.
- Add more spaces and connected exploration routes.

---
**MICROVERSE COMPLETE** is the project. **LIMINAL** is its first 3D exploration experience.
