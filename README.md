# Rise to Stardom — Opening scene

A single playable scene using the supplied `cafe.png`, `ogchar.png`, `arden.png`, and `mina.png` artwork. Character images retain their original aspect ratios and transparency. The café street sits behind the player and Arden; Mina appears when the café side door is clicked.

## Run

Requires Node.js 20+. No dependencies to install.

```sh
npm start
```

Open http://localhost:5173. Progress saves locally in this browser. Install / Add to Home Screen is available through supporting browsers. The app caches its code and artwork for offline use after an initial successful visit.

## Play

- Continue through the opening conversation with Arden.
- Choose one of three responses; each gets its own reply.
- Click the highlighted café door (or the accessible Knock button) to ask Mina for help.
- Continue through Mina’s dialogue to finish this scene.
- Dialogue history, optional knock sound, and replay are available.

Clicking the door early also advances to Mina’s conversation. No timing or failure conditions apply. This scene has its own local save and preserves the earlier chapter prototype’s save.

## Files

- `src/opening.js`: single-scene dialogue, choices, door interaction and local save
- `src/opening.css`: scene composition and responsive interface
- `public/assets/`: supplied artwork, copied without modification
- `public/sw.js`: offline cache

The earlier full-chapter implementation remains in `src/app.js`, `src/game.js`, and `src/style.css`, but the app now opens only this scene. `npm test` runs the earlier chapter state tests; those tests do not cover the new visual scene. The new scene is verified through a browser playthrough.

Saves are device-local. No backend, account sync, telemetry, or native app-store package is included.
