# mathlet

100 interactive math formula visualizations. Vite + TS + KaTeX + D3 + Three.js, Observable-style mini reactive runtime, SSG to Cloudflare Pages.

## Live
- Production: https://math.htpu.net
- CF Pages: https://mathlet.pages.dev

## Stack
- Vite 5 + TypeScript strict
- KaTeX (server-prerendered)
- Three.js (lazy-loaded for 3D formulas)
- Custom signal/effect runtime (~80 LOC, no external state lib)
- 14 reusable templates (fn1d, param2d, polar, escape, ode2d, ode3d, surface3d, ifs, ca1d, ca2d, vfield2d, rwalk, matrix2d, histogram)

## Layout
- `src/runtime/` reactive primitives
- `src/render/` canvas2d + three helpers + numerics (rk4, rng)
- `src/templates/` formula authoring shortcuts
- `src/formulas/<domain>/<slug>.ts` — 100 modules across 14 domains
- `src/formulas/_registry.generated.ts` — built by `scripts/generate-registry.ts`
- `scripts/ssg.ts` — pre-renders index + 100 detail HTMLs with KaTeX

## Scripts
- `npm run dev` — Vite dev
- `npm run registry` — regenerate `_registry.generated.ts` after adding/removing a formula
- `npm run build` — registry + Vite + SSG
- `npm run deploy` — build + `wrangler pages deploy dist --project-name=mathlet`

## Adding a formula
1. Create `src/formulas/<domain>/<slug>.ts` exporting `default` Formula (use a template)
2. `npm run registry`
3. Test locally
4. `npm run deploy`

## DNS
Custom domain bound via Pages API + Cloudflare CNAME (proxied) `math → mathlet.pages.dev`.

## Counts (current)
- 100 formulas across 14 domains, L1-L5 difficulty
- algebra/geometry/calculus/linalg/pde/probability/topology/numbertheory/signals/optimization/vectorfield/cellular: 7 each
- ode + fractal: 8 each
