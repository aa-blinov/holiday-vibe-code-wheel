# Holiday Vibe-Code Wheel

A daily spin-the-wheel web app for 20-minute coding prompts across 3,000 combinations of micro-SaaS tools, developer utilities, creative apps, and holiday toys.

Live demo: https://aa-blinov.github.io/holiday-vibe-code-wheel/

## What It Does

- **Fresh wheel on every spin**: Each spin deals 12 distinct ideas from a 3,000-combination pool (`100` base concepts × `30` product/aesthetic twists).
- **Four category decks**: Switch between *All Ideas*, *Micro-SaaS*, *Dev Tools & Engines*, *Creative Apps*, and *Holiday & Play*.
- **Advent lock + Practice mode**: By default, you get one official spin per day tracked across a 25-day Advent streak in `localStorage`. Toggle *Practice mode* for unlimited spins.
- **Spin log & directory**: Review past rolls, mark missions as built, copy prompts, or search the full pool.

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

- `src/data/challenges.js` — 100 base ideas, 30 twists, deck filtering, and wheel sampling
- `src/components/SpinWheel.jsx` — Responsive HTML5 Canvas wheel with `easeOutCubic` spin physics
- `src/components/AdventStrip.jsx` — 25-day Advent progress grid
- `src/components/HistoryPanel.jsx` — Local spin log with built status toggles
- `src/components/CatalogPanel.jsx` — Searchable directory across the 3,000-idea pool
- `src/components/ChallengeModal.jsx` — Prompt reader with copy and completion controls
- `.github/workflows/deploy.yml` — Automated GitHub Pages deployment

## License

[MIT](./LICENSE)
