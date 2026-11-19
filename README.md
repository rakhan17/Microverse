# MICROVERSE COMPLETE
### THE HOLLOW — First-person survival horror

THE HOLLOW is the first survival-horror experience inside MICROVERSE COMPLETE. Explore a decaying house at the edge of a forest, find useful items, and try to leave before the thing outside finds you.

## Current experience

- Black forest title screen with intermittent lightning. The distant figure is only revealed during lightning flashes and changes sides between appearances.
- First-person exploration in one abandoned house, with a real exit opening, window openings, damp wall detailing, old furniture, books, a fireplace, a portrait, and a moving statue.
- Wider flashlight cone and atmospheric fog, shadowing, and flickering practical lights.
- Aim-based interaction: the selected object receives a gold outline and a nearby action label. Press **E** to interact.
- Five-slot inventory bar with pickup items.
- Doors can be opened and closed. The exit triggers a cinematic jumpscare.
- Settings for mouse sensitivity, field of view, and ambience volume.
- A cinematic credits view.

## Controls

- **W / A / S / D** — Move
- **Mouse** — Look around
- **Shift** — Run
- **E** — Interact with the highlighted object
- **1–5** — Select inventory slot
- **Esc** — Release pointer lock
- Click the game view to capture the mouse again.

## External assets and credits

- [Poly Haven](https://polyhaven.com) — CC0 3D asset library and public API. The prototype attempts to load the Arm Chair 01 and Barrel 01 models through the Poly Haven files API. Procedural fallbacks remain in place if a remote asset cannot be loaded.
- [Cesium Man](https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/CesiumMan) by Cesium — CC BY 4.0, used as the external rigged character model for the jumpscare when the remote GLB is available.
- [Three.js](https://threejs.org) — MIT License.

The in-game credits view includes the asset-source acknowledgements. Please retain the original model attribution when redistributing this project.

## Run and deploy

This is a static web application. Serve the repository root or deploy it to Vercel.

**Vercel settings**
- Framework preset: **Other**
- Build command: leave empty
- Output directory: **.**
- Install command: leave empty

The app loads Three.js, GLTFLoader, and remote model assets over HTTPS, so an internet connection is required.

## Current scope and limitations

This is an early playable prototype focused on the first house. The character asset and Poly Haven models load remotely and may fall back if a provider is unavailable or a model format cannot be resolved. The player has basic movement boundaries rather than a complete physics/collision system. The jumpscare is a scripted sequence, not a full combat or damage simulation. Additional rooms, puzzles, save/load, and mobile controls are not implemented yet.

---
**MICROVERSE COMPLETE** is the project. **THE HOLLOW** is its first survival-horror experience.
