# MICROVERSE COMPLETE
### THE HOLLOW | A psychological survival horror

**THE HOLLOW** follows Libert, an only child raised by his father in an enormous, isolated mansion. After a family tragedy and years of grief, one ordinary night turns into a nightmare. Libert wakes in the mansion's ruined grand hall, injured and disoriented, with the feeling that nearly two days have disappeared.

His father is away. The doors to the rest of the estate are waiting. Somewhere in the house is the answer to three questions: who attacked him, what do they want, and how can he survive long enough to uncover the truth?

## Current build

- Main menu with a dark forest, timed lightning flashes, and a distant axe-bearing silhouette.
- Eight-part cinematic prologue introducing the family's loss, the mother's decline and death, Libert's grief, his father's departure, the bedroom attack, and Libert waking in the grand hall.
- An enlarged mansion reception hall with monumental columns, a multi-tier chandelier, velvet salon seating, a large carpet, portrait gallery, decorative stair flights, fireplace, statue, and scattered debris.
- Early estate grounds: damaged approach, abandoned sedan, disturbed earth mounds, dead trees, broken garden wall, old fountain, weeds, rubble, and a decaying bench.
- First-person movement, mouse look, sprint, crouch-based stealth, pointer lock, and an interaction prompt.
- Two side wings connect to the main hall: an accessible bedroom and a locked evidence-storage room. Closed doors block movement; the storage door requires the brass key.
- The bedroom wing now has two physical hiding places: a wardrobe and the space beneath the bed. Press E to enter or leave; movement and the flashlight are disabled while hidden, and Marlow can still discover and attack Libert if he gets close.
- Five inventory slots with a flashlight, exit key, rechargeable batteries, first-aid kits, and defensive flares.
- Two connected side wings: an accessible bedroom and a key-locked evidence-storage room, with distinct furniture, shelving, and lighting.
- Survival resources: health and flashlight charge. The flashlight drains while active; batteries replenish it, first-aid restores health, and flares briefly repel the pursuer. Crouching slows Libert and reduces his visibility and footstep noise; sprinting is faster but carries much farther.
- Item use controls: F toggles the flashlight; R uses the selected consumable.
- Three physical investigation clues, a journal, and an evidence-gated chapter exit requiring the mansion key.
- A three-wheel combination lock in the evidence room. The digits are discovered across the three clues; entering 241 opens a hidden compartment containing a new story revelation.
- Puzzle digits, archive state, and the secret discovery persist in browser checkpoints.
- Marlow's patrol, chase, search, and investigation behaviours: he reacts to proximity, flashlight use, sprinting, and short-lived footstep noise positions. After losing Libert, he sweeps several nearby positions around the last known location; if he sees Libert enter a hiding place, he approaches that position to inspect it.
- Local browser checkpoint save/load for position, inventory, and collected clues, with periodic autosaves.
- A scripted threat sequence and death/retry screen.

## Controls

| Input | Action |
|---|---|
| W / A / S / D | Move |
| Mouse | Look around |
| Shift | Run (louder and easier to detect) |
| C / Ctrl (hold) | Crouch (slower and quieter) |
| E | Interact with the highlighted object or door |
| 1–5 | Select inventory slot |
| F | Toggle flashlight (requires the flashlight item) |
| R | Use selected battery, first-aid kit, or flare |
| Esc | Open / close pause menu |
| J | Open / close investigation journal |
| E while hidden | Leave the wardrobe or crawl out from under the bed |
| Click game view | Capture mouse again |

## Story direction

The first playable investigation loop now asks Libert to find three pieces of evidence, connect the name Marlow to the attack, recover the mansion key, and reach the exit. A simple pursuer activates after the second clue. The journal records discovered evidence and browser checkpoints preserve progress. The grand hall, bedroom wing, evidence-storage wing, and estate grounds form the current playable space; full line-of-sight occlusion, room-aware sound propagation, combat, branching mysteries, additional puzzles, and additional chapters are still in development.

The prologue uses stylized 3D tableaux and camera movement rather than motion-captured cinematic performances. The mother's death is treated as a serious family tragedy and is not shown graphically.

## External assets and credits

- [Poly Haven](https://polyhaven.com) — CC0 asset library and API. The project attempts to load selected furniture models through the serverless proxy; procedural substitutes remain available.
- [Cesium Man](https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/CesiumMan) by Cesium — CC BY 4.0, used as a remote rigged character fallback for the scripted scare.
- [Three.js](https://threejs.org) — MIT License.

The in-game credits acknowledge these sources. Keep the original attribution when redistributing the project.

## Run and deploy

Deploy the repository root to Vercel with:
- Framework preset: **Other**
- Build command: empty
- Output directory: **.**
- Install command: empty

The project loads Three.js and selected models over HTTPS. The Poly Haven proxy at `/api/polyhaven` requires a serverless deployment such as Vercel; it will not work from a plain static file opened directly from disk.

## Browser regression tests

The repository includes Playwright smoke tests for the rendered 3D canvas, main-menu settings, cinematic credits, prologue skipping, and the ESC pause flow. GitHub Actions runs these tests on pushes and pull requests. A passing CI run verifies the tested browser paths, not a complete commercial release or every possible GPU/browser combination.

Run locally with:

```bash
npm install
npx playwright install chromium
npm run test:e2e
```

## Known limitations

This is an expanding prototype, not a finished commercial horror game. The current build has a single pursuer with patrol, chase, and search states, plus two hiding spots that use proximity-based discovery rather than full line-of-sight or room-aware sound simulation, a short three-clue investigation with one fixed-code secret rather than a branching mystery, and local browser checkpoints rather than cross-device cloud saves. It still has no combat system or full collision/physics simulation; the current collision handling is limited to closed doors, and the two side wings are early playable spaces rather than fully developed room sequences. The prologue is a stylized 3D storyboard, not a fully motion-captured short film. Remote assets can fail and fall back to procedural geometry. Browser runtime and visual testing are still required on the deployed site.

---
**MICROVERSE COMPLETE** is the project. **THE HOLLOW** is its first survival-horror chapter.
