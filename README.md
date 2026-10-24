# Do Artifacts Have Politics? — Epistemic Map

An interactive epistemic graph for Langdon Winner's *Do Artifacts Have Politics?* The map shows how artifacts can embody social order through chosen designs or through structural relationships with particular forms of authority.

## What the map contains

- Eight top-level domains derived from the study-guide ontology.
- More than 70 explorable concepts organized as a genuine hierarchy.
- Detailed treatments of Robert Moses's overpasses, McCormick's molding machines, the mechanical tomato harvester, nuclear power, and renewable energy.
- Dedicated views for Winner's analytical distinctions, political decision points, relationship vocabulary, and feedback loops.
- Search across cases, concepts, consequences, and relationship terms.
- A focused graph-and-information layout with no presentation-site sections.
- Responsive layouts, keyboard-accessible controls, and reduced-motion support.

## Run locally

No build step or dependencies are required. Serve the repository root with any static HTTP server. For example:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`.

## Structure

- `index.html` — graph and reading-panel structure
- `styles.css` — responsive graph presentation
- `data.js` — structured epistemic-map content
- `app.js` — hierarchy rendering, search, details, and navigation

## Source

Langdon Winner, *Do Artifacts Have Politics?*

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` publishes the repository root whenever `main` is updated. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions** once if it is not already selected.

The expected project URL is:

`https://rvfvn.github.io/do-artifacts-have-politics-epistemic-map/`
