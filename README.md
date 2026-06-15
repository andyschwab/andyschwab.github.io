# andyschwab.link

Andy Schwab's professional site — a calm, single-page presence for a practice in
human-centered technology and operations. Hosted on GitHub Pages at the
`andyschwab.link` apex (see `CNAME`).

## Stack

Plain HTML, CSS, and a small vanilla JS file. No build step, no framework.

- `index.html` — the page (semantic sections, meta/SEO, JSON-LD).
- `styles.css` — the design system (CSS custom properties, light/dark, fluid type).
- `main.js` — subtle scroll-reveal, disabled under `prefers-reduced-motion`.
- `images/` — portrait and monogram favicon.
- `DESIGN.md` — the source of decisions for copy, voice, and design.

## Editing

Edit the files directly. To preview locally, serve the folder:

```bash
python3 -m http.server
```

then visit `http://localhost:8000`. Copy and voice decisions live in `DESIGN.md`;
keep it in sync with the page.
