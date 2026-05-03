# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

mathlet — 737 interactive math formula visualizations. Vite + TS strict + KaTeX + Three.js, custom 80-LOC reactive runtime, SSG to Cloudflare Pages.

- Production: https://math.htpu.net
- CF Pages: https://mathlet.pages.dev (project: `mathlet`)
- GitHub: `htpu/mathlet`

## Commands

```
npm run dev        # Vite dev server (HMR)
npm run registry   # regenerate src/formulas/_registry.generated.ts + _loaders.generated.ts after adding/removing/renaming a formula file
npm run build      # registry → vite build → ssg (prerenders index + 737 detail pages + sitemap)
npm run preview    # preview built dist on :4173
npm run deploy     # full build + wrangler pages deploy
```

`wrangler` auth: the env var `CLOUDFLARE_API_TOKEN` lacks Pages perms. Always run wrangler with `env -u CLOUDFLARE_API_TOKEN` so it falls back to the OAuth login.

## Architecture

### Reactive core
`src/runtime/signal.ts` — ~80 LOC `signal`/`computed`/`effect`. Used by `main-index.ts` and `main-detail.ts` to drive URL-synced filters and parameter sliders. Read with `.peek()`, write with `.value =`.

### Formula module shape
Every file in `src/formulas/<domain>/<slug>.ts` exports `default` of type `Formula` (`src/formulas/types.ts`):
- `meta`: `{ slug, title, domain, level, tex, blurb, surface, animated?, notes? }`
- `params`: `ParamSpec[]` (helpers `n/i/b/s/c/t` for number/int/bool/select/color/text)
- `init?(surface, p)` and `render(surface, p, t)` — `surface.kind` is `'canvas2d'` or `'three'`

Most formulas use a template (`src/templates/`) — `fn1d`, `param2d`, `polar`, `escape`, `ode2d`, `ode3d`, `surface3d`, `ifs`, `ca1d`, `ca2d`, `vfield2d`, `rwalk`, `matrix2d`, `histogram`. Templates already set `surface: 'canvas2d'` and handle clear/axes/animation loop.

### Surface defaulting (load-bearing)
`main-detail.ts` defaults `surface` to `canvas2d` if undefined. Only set `surface: 'three'` explicitly for 3D formulas — leaving it off for a 3D formula will silently produce a blank canvas.

### Registry generation
`scripts/generate-registry.ts` scans `src/formulas/<domain>/<slug>.ts`, regex-extracts `meta`, and writes:
- `_registry.generated.ts` — metadata array used by index/SSG
- `_loaders.generated.ts` — `slug → () => import(...)` map for lazy chunk-split

Both files are `_` prefixed and skipped by the scanner. **Run `npm run registry` after any add/remove/rename.**

### SSG (`scripts/ssg.ts`)
Re-parses the registry source (regex, no TS execution), then for each entry uses JSDOM to inject:
- title, OG/Twitter/canonical/JSON-LD into `dist/f/<slug>.html` (cloned from `detail.html`)
- a noscript fallback with KaTeX + blurb
- `sitemap.xml`, `_headers`, `_redirects`

Index cards are also pre-rendered into `dist/index.html` for SEO; the runtime overwrites them via `replaceChildren` once JS boots.

### i18n
`src/i18n/strings.ts` — `UI`, `DOMAIN_LABELS_I18N`, `LANG_LABELS` (short: `中` / `EN` / `ES`), `LANG_FULL` (full names for `aria-label`/`title`). Lang detected from `?lang=` then `localStorage`. Per-formula translations in `src/i18n/formulas.ts`; missing keys fall back to Chinese metadata in the formula file itself.

### Card thumbnails
`scripts/generate-thumbs.ts` uses Playwright + ffmpeg + `img2webp` (homebrew `webp`) to capture 24 frames at 320×240 per formula and encode an animated WebP into `public/thumbs/<slug>.webp`. Hides params/header overlays via `addStyleTag` before screenshotting. Use `--force` to regenerate all; default skips existing files. Run against a local `npm run preview` (not prod): `THUMB_URL=http://127.0.0.1:4173 npx tsx scripts/generate-thumbs.ts`.

### Render audit
`scripts/audit-renders.ts` Playwright-walks every slug in `public/all-slugs.json`, samples canvas pixels, flags blank renders. Pass criterion accepts both line-drawn (low non-bg + stdev) and uniform-fill (CA-style) outputs. Run after large refactors:
```
AUDIT_URL=https://math.htpu.net npx tsx scripts/audit-renders.ts
```

## Adding a formula

1. Create `src/formulas/<domain>/<slug>.ts`. Use a template (`fn1d` is the simplest):
   ```ts
   import { n } from '../types';
   import { fn1d } from '../../templates/fn1d';
   export default fn1d({
     meta: { slug:'foo', title:'…', domain:'algebra', level:2, tex:'…', blurb:'…' },
     params: [n('a','a',1,-3,3,0.01)],
     fn: p => x => Math.sin((p.a as number) * x),
     view: { cx:0, cy:0, scale:60 },
   });
   ```
2. Slug must be ASCII URL-safe (no `ç`, no spaces — they break Cloudflare routing). Also check the slug isn't already used in another domain (`grep "slug: '<slug>'" src/formulas/_registry.generated.ts`) — collisions silently hide one entry.
3. `npm run registry`
4. `npm run dev` and check `/f/<slug>`
5. `npm run build` (or `npm run deploy`)
6. **Generate the thumbnail** — required, not optional. Cards without `public/thumbs/<slug>.webp` show a broken image on the home grid. Run:
   ```
   npm run preview &              # serve dist on :4173
   THUMB_URL=http://localhost:4173 npx tsx scripts/generate-thumbs.ts
   kill %1                        # stop preview
   ```
   The script skips slugs whose `.webp` already exists, so this only generates the new ones. Commit `public/thumbs/<slug>.webp` alongside the formula file.
7. **Update the formula count and domain count** wherever they appear. After `npm run registry`, the canonical count is `grep -c "slug:" src/formulas/_registry.generated.ts`. Sync to:
   - `README.md` — both the hero number and the domain-list paragraph
   - `index.html` — `<title>`, `meta[name="description"]`, all `og:*` and `twitter:*` tags
   - `src/i18n/strings.ts` — `siteTagline`, `docTitle`, `docDescription`, `heroBody` for **all three** languages (zh/en/es)
   - this `CLAUDE.md` — line 7 ("X interactive math formula visualizations") and the SSG line in the Commands block, plus the `Domain list (N)` heading at the bottom if a new domain was added
   Quick check: `grep -nE "[0-9]+ (formula|公式|fórmula|domain|领域|dominio)" README.md CLAUDE.md index.html src/i18n/strings.ts` — every match should show the new count.

Optional but encouraged: add zh→en/es to `src/i18n/formulas.ts`.

## Tracked state
- `localStorage['mathlet:lang']` — language
- `localStorage['mathlet:recents']` — last 8 visited slugs (rendered as ↺ Recent strip)
- `localStorage['mathlet:collapsed']` — collapsed domain section slugs
- URL params on `/`: `q`, `domain`, `level`, `surface`, `lang`
- URL params on `/f/<slug>`: `mode=play`, `lang`, plus every formula's own `params[].key`

## Domain list (26)
`algebra`, `geometry`, `calculus`, `linalg`, `ode`, `pde`, `probability`, `fractal`, `topology`, `numbertheory`, `signals`, `optimization`, `vectorfield`, `cellular`, `biology`, `chemistry`, `quantum`, `graph`, `crypto`, `music`, `gr`, `astronomy`, `economics`, `statmech`, `fluid`, `chaos`.
