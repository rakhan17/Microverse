# MICROVERSE COMPLETE
### LIMINAL · A 3D exploration experience

Walk through familiar places that feel subtly wrong. **LIMINAL** is a first-person browser experience built around quiet, atmospheric spaces, architectural repetition, and the strange feeling of being somewhere between places.

![Status](https://img.shields.io/badge/status-experimental-9da56e) ![Platform](https://img.shields.io/badge/platform-web-blue) ![3D](https://img.shields.io/badge/3D-Three.js-black)

## Play

Open the deployed site or run the project locally. This is a static web experience and requires an internet connection to load Three.js and the font.

### Controls
- **W / A / S / D**: move
- **Mouse**: look around (click the scene to recapture the pointer)
- **Shift**: move faster
- **E**: enter the next location when prompted
- **Esc**: release the mouse cursor
- Use the location list in the upper-right to jump between environments.

## Environments
1. **The Yellow Hall**: a warm, repeating office corridor.
2. **Blue Hours**: an empty poolroom with reflective water and cool lighting.
3. **After Hours**: a silent shopping-mall passage.
4. **The Deep Level**: an underground parking structure.

Each environment is assembled procedurally in Three.js. Lighting, fog, materials, architecture, and synthesized ambient hum establish a distinct atmosphere.

## Run locally
This is a static site. Serve the repository root with any static web server, or deploy directly to Vercel:
- Framework preset: **Other**
- Build command: leave empty
- Output directory: **.**

## Current scope and limitations
This is an atmospheric exploration prototype, not a horror game or a physically accurate architectural simulator. Movement is first-person with pointer lock. The environments are procedural geometric scenes; there are no imported photogrammetry assets, NPCs, combat, objectives, or save system yet. The ambience is a synthesized low hum, not recorded environmental audio. Desktop keyboard/mouse is the intended control scheme; mobile touch controls are not implemented.

## Roadmap
- Add richer procedural room layouts and connected doorways.
- Add environmental storytelling, hidden spaces, and discoverable details.
- Add spatial audio and optional recorded ambience.
- Add optimized, higher-detail environmental assets.
- Add accessibility settings and mobile controls.

## Tech
- [Three.js](https://threejs.org/) for real-time 3D rendering.
- Vanilla HTML, CSS, and JavaScript.
- Google Fonts (DM Mono and Manrope).

---
**MICROVERSE COMPLETE** is an experimental interactive-world project. **LIMINAL** is its first exploration experience.
