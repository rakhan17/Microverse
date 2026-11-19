# MICROVERSE COMPLETE
### THE HOLLOW | A psychological survival horror

**THE HOLLOW** follows Libert, an only child raised by his father in an enormous, isolated mansion. After a family tragedy and years of grief, one ordinary night turns into a nightmare. Libert wakes in the mansion's ruined grand hall, injured and disoriented, with the feeling that nearly two days have disappeared.

His father is away. The doors to the rest of the estate are waiting. Somewhere in the house is the answer to three questions: who attacked him, what do they want, and how can he survive long enough to uncover the truth?

## Current build

- Main menu with a dark forest, timed lightning flashes, and a distant axe-bearing silhouette.
- Eight-part cinematic prologue introducing the family's loss, the mother's decline and death, Libert's grief, his father's departure, the bedroom attack, and Libert waking in the grand hall.
- An enlarged mansion reception hall with monumental columns, a multi-tier chandelier, velvet salon seating, a large carpet, portrait gallery, decorative stair flights, fireplace, statue, and scattered debris.
- Early estate grounds: damaged approach, abandoned sedan, disturbed earth mounds, dead trees, broken garden wall, old fountain, weeds, rubble, and a decaying bench.
- First-person movement, mouse look, sprint, pointer lock, and an interaction prompt.
- Doors to future rooms are placed around the main hall and can be opened and closed.
- Five inventory slots, pickup interactions, flashlight, settings for sensitivity/FOV/ambience, and credits.
- A scripted threat sequence and death/retry screen.

## Controls

| Input | Action |
|---|---|
| W / A / S / D | Move |
| Mouse | Look around |
| Shift | Run |
| E | Interact with the highlighted object or door |
| 1–5 | Select inventory slot |
| Esc | Open / close pause menu |
| J | Open journal (planned) |
| Click game view | Capture mouse again |

## Story direction

The first chapter is deliberately focused on the mansion's grand hall. Doors are visible as future destinations, but the rooms behind them are not yet complete. The investigation, clues, enemy AI, combat, save system, and additional chapters remain future development.

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

This is an expanding prototype, not a finished commercial horror game. The current build has no complete enemy AI, clue/puzzle chain, combat system, full collision/physics simulation, save/load, or finished connected rooms. The prologue is a stylized 3D storyboard, not a fully motion-captured short film. Remote assets can fail and fall back to procedural geometry. Browser runtime and visual testing are still required on the deployed site.

---
**MICROVERSE COMPLETE** is the project. **THE HOLLOW** is its first survival-horror chapter.
