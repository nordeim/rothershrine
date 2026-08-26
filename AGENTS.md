# AGENTS — rothershrine

> Clone of the National Shrine of Blessed Stanley Rother (OKC). Static SPA — no backend, no DB, no SSR. For deep conventions, workflow, and design system detail, read `CLAUDE.md`.

## Stack

`React 19.2.8` + `Vite 7.3.6` + `Tailwind CSS 4.3.3` (`@tailwindcss/vite 4.1.17`, CSS-first `@theme` inline in `src/index.css`) + `TypeScript 5.9.3` strict + `React Router 7.18.2` `HashRouter` + `vite-plugin-singlefile 2.3.3` (primary `dist/index.html` + `dist/images/` for GH Pages / S3) · alias `@` → `src/` (sync `vite.config.ts` ↔ `tsconfig.json` `paths`) · `pnpm` preferred (`--frozen-lockfile` for CI), `npm` works · versions pinned exact in `package.json` (re-pin on upgrade, update docs)

## Commands

All commands verified in `package.json` `scripts`. Don't document a script until it exists there.

| Command | Purpose |
|---|---|
| `pnpm install` | Install deps (Node 20+ for Vite 7) |
| `pnpm dev` | Vite HMR dev server (default `http://localhost:5173`) |
| `pnpm build` | Production single-file build → `dist/index.html` |
| `pnpm preview` | Preview `dist` locally |
| `npx tsc --noEmit` | Type gate — **run before every push** (no `typecheck` script yet) |
| `npx tsc --noEmit && pnpm build` | Pre-push gate (both must be green) |

> No `lint` / `test` / `typecheck` scripts yet. See `CLAUDE.md` for the TODO wiring (`eslint` flat + `vitest` + `playwright`).

## Structure

```
src/
  App.tsx              # HashRouter + alias routes (see below)
  main.tsx             # StrictMode + createRoot
  index.css            # @theme tokens + @layer base/utilities
  components/          # Layout, Header, Footer, PageHero, ui/{Button,Container,SectionHeading}
  pages/               # Home, AboutRother, History, WhatToSee, Pilgrimage, NewsEvents, Volunteer, Give, FAQ, NotFound
  data/                # nav.ts (primaryNav/footerNav — single source), content.ts (typed content arrays)
  utils/cn.ts          # twMerge(clsx) — always merge via cn()
public/images/         # hero-shrine.jpg + shepherd-emblem.jpg via /images/<slug>.jpg (Vite publicDir → dist/images/ — upload alongside dist/index.html); whatToSee cards use Pexels CDN URLs in src/data/content.ts
```

## Quirks — would break if guessed wrong

- **HashRouter is intentional** — static hosts (GH Pages / S3) have no SPA fallback. Don't switch to `BrowserRouter` without adding a `404.html` redirect.
- **`viteSingleFile()` inlines JS+CSS** — `public/images/` is still copied to `dist/images/` (Vite `publicDir` is not inlined; upload both). No assumed code-splitting. Dynamic `import()` that expects chunks will be inlined or break.
- **Alias `@` must stay in sync** — `vite.config.ts` (`path.resolve(__dirname,"src")`) ↔ `tsconfig.json` (`paths: {"@/*":["src/*"]}`, `baseUrl:"."`) — change both.
- **Tailwind v4 has no `tailwind.config.js`** — tokens live only in `src/index.css` `@theme`. Don't add arbitrary `bg-[#...]`; extend `@theme` with a named `shrine-*` token.
- **TS strict will fail on unused code** — `noUnusedLocals:true` + `noUnusedParameters:true` + `noFallthroughCasesInSwitch:true` + `isolatedModules:true` + `noEmit:true`. Clean unused vars/params before commit.
- **No test/lint harness yet** — gate is `tsc --noEmit` only. See `CLAUDE.md` for when to add `vitest`/`playwright`/`eslint`.
- **`skills` is a symlink** to `~/.pi/agent/skills` and is `.gitignore`d — don't commit it; resolve skill docs via the symlink.
- **Google Fonts loaded in `index.html`** — `Fraunces` (display) + `Source Sans 3` (body). Don't add runtime font loaders in components.
- **`Layout.tsx` handles hash scroll** — `#hash` smooth-scroll with `setTimeout` + fallback `window.scrollTo`. Preserve when extending layout.

## Conventions

- **Routing:** `App.tsx` is the only route table. Preserve legacy aliases (`/about`↔`/about-blessed-stanley-rother`, `/what-to-see`↔`/grounds-art-architecture`, `/pilgrimage`↔`/visit-planning`↔`/hours-location`, `/news-events`↔`/news-and-events`, `/give`↔`/shrinegift`, `#pilgrim-center|#shrine-church|#tepeyac-hill`). Nav is driven by `src/data/nav.ts` — update there, `Header`/`Footer` render from it.
- **Data:** `src/data/content.ts` is the data layer (`lifeTimeline`, `whatToSee`, `faqs`, `upcomingEvents`, `givingOptions` with typed interfaces). Pages render from it — don't inline copy.
- **Components:** `Button` (`to` for internal, `href` for external; variants `primary|secondary|ghost|outline-light` via `variantClasses`), `Container` (`max-w-7xl px-5 sm:px-8`), `SectionHeading` (`eyebrow/title/description` + `align/light`), `PageHero` (maroon-900 + image at `opacity-25` + gradients). Extend via `cn()`, not ad-hoc class strings.
- **Styling:** Use `shrine-cream/parchment/stone/ink/charcoal/maroon-*/gold-*/pine-*` + `shadow-shrine` + utilities `text-balance` / `bg-adobe-texture` / `divider-weave`. Mobile-first (`sm:`/`lg:`).

## Don't

- Switch `HashRouter` → `BrowserRouter`, break alias routes, or prop-drill nav arrays.
- Add one-off hex colors or bypass `cn()` (`tailwind-merge` dedup matters).
- Rebuild `Dialog`/`Dropdown` from scratch if `shadcn/ui` (Radix) is adopted — use its primitives.
- Add SSR, API routes, or a CMS without an explicit architecture decision — this is a static SPA (`CLAUDE.md` isolates future CMS behind `lib/cms`).

## Where to look next

- `CLAUDE.md` — full six-phase workflow, detailed conventions, anti-patterns, env contract, and validation checklist.
- `docs/prompts.md` — intent lineage.
- `src/index.css` — authoritative token list.
