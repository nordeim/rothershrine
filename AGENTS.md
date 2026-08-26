# AGENTS — rothershrine

> Clone of the National Shrine of Blessed Stanley Rother (OKC). Static SPA — no backend, no DB, no SSR. For deep conventions, workflow, and design system detail, read `CLAUDE.md`.

## Stack

`React 19.2.8` + `Vite 7.3.6` + `Tailwind CSS 4.3.3` (`@tailwindcss/vite 4.1.17`, CSS-first `@theme` inline in `src/index.css`) + `TypeScript 5.9.3` strict + `React Router 7.18.2` `HashRouter` + `vite-plugin-singlefile 2.3.3` (primary `dist/index.html` + `dist/images/` for GH Pages / S3) + `eslint 9.23` flat + `vitest 3.1` + `@testing-library/react 16` (jsdom) · alias `@` → `src/` (sync `vite.config.ts` ↔ `tsconfig.json` `paths`) · `pnpm` preferred (`--frozen-lockfile` for CI), `npm` works · versions pinned exact in `package.json` (re-pin on upgrade, update docs)

## Commands

All commands verified in `package.json` `scripts`. Don't document a script until it exists there.

| Command | Purpose |
|---|---|
| `pnpm install` | Install deps (Node 20+ for Vite 7) |
| `pnpm dev` | Vite HMR dev server (default `http://localhost:5173`) |
| `pnpm build` | Production single-file build → `dist/index.html` |
| `pnpm preview` | Preview `dist` locally |
| `pnpm typecheck` | Type gate `tsc --noEmit` — **run before every push** |
| `pnpm lint` | ESLint flat (`eslint . --max-warnings 0`) |
| `pnpm test` | Vitest `jsdom` (26 tests) |
| `pnpm lint && pnpm typecheck && pnpm test && pnpm build` | Pre-push gate (all four must be green) |

## Structure

```
src/
  App.tsx              # HashRouter + alias routes (see below)
  main.tsx             # StrictMode + createRoot
  index.css            # @theme tokens (24 colors + 2 shadows) + @layer base/utilities (10)
  components/          # Layout (+SkipLink), Header (useScrolled), Footer, PageHero, Emblem, Timeline, SocialIcons, ui/{Button,Container,SectionHeading,Accordion,Reveal}
  hooks/               # useScrolled.ts
  pages/               # Home, AboutRother, History, WhatToSee, Pilgrimage, NewsEvents, Volunteer, Give, FAQ, NotFound (named exports)
  data/                # nav.ts (with description), content.ts (category+icon), site.ts (canonical address/contact)
  utils/cn.ts          # twMerge(clsx) — always merge via cn()
  test/setup.ts        # vitest jsdom setup (`@testing-library/jest-dom` + IntersectionObserver mock)
  **/*.test.{ts,tsx}   # 5 files / 26 tests adjacent to source (cn, nav, content, site, Button)
eslint.config.js       # flat config (typescript-eslint 8 + react-hooks 5 + react-refresh)
public/images/         # hero-shrine.jpg + shepherd-emblem.jpg via /images/<slug>.jpg (Vite publicDir → dist/images/ — upload alongside dist/index.html); Pexels CDN for hero/whatToSee with local fallback
```

## Quirks — would break if guessed wrong

- **HashRouter is intentional** — static hosts (GH Pages / S3) have no SPA fallback. Don't switch to `BrowserRouter` without adding a `404.html` redirect.
- **`viteSingleFile()` inlines JS+CSS** — `public/images/` is still copied to `dist/images/` (Vite `publicDir` is not inlined; upload both). No assumed code-splitting. Dynamic `import()` that expects chunks will be inlined or break.
- **Alias `@` must stay in sync** — `vite.config.ts` (`path.resolve(__dirname,"src")`) ↔ `tsconfig.json` (`paths: {"@/*":["src/*"]}`, `baseUrl:"."`) — change both.
- **Tailwind v4 has no `tailwind.config.js`** — tokens live only in `src/index.css` `@theme`. Don't add arbitrary `bg-[#...]`; extend `@theme` with a named `shrine-*` token.
- **TS strict will fail on unused code** — `noUnusedLocals:true` + `noUnusedParameters:true` + `noFallthroughCasesInSwitch:true` + `isolatedModules:true` + `noEmit:true`. Clean unused vars/params before commit.
- **Test/lint harness: `eslint 9` flat + `vitest 3` (jsdom) + `@testing-library/react 16`** — gate is `lint && typecheck && test && build` (`26 tests` in `src/**/*.{test,spec}.tsx` via `src/test/setup.ts`).
- **`skills` is a symlink** to `~/.pi/agent/skills` and is `.gitignore`d — don't commit it; resolve skill docs via the symlink.
- **Google Fonts loaded in `index.html`** — `Fraunces` (display) + `Source Sans 3` (body). Don't add runtime font loaders in components.
- **`Layout.tsx` handles hash scroll** — `#hash` smooth-scroll with `setTimeout` + fallback `window.scrollTo`. Preserve when extending layout.

## Conventions

- **Routing:** `App.tsx` is the only route table. Preserve legacy aliases (`/about`↔`/about-blessed-stanley-rother`, `/what-to-see`↔`/grounds-art-architecture`, `/pilgrimage`↔`/visit-planning`↔`/hours-location`, `/news-events`↔`/news-and-events`, `/give`↔`/shrinegift`, `#pilgrim-center|#shrine-church|#tepeyac-hill`). Nav is driven by `src/data/nav.ts` — update there, `Header`/`Footer` render from it.
- **Data:** `src/data/content.ts` is the data layer (`lifeTimeline`, `whatToSee`, `faqs`, `upcomingEvents`, `givingOptions` with typed interfaces). Pages render from it — don't inline copy.
- **Components:** `Button` (discriminated `to`/`href`/native `button` + `icon`; variants `primary|secondary|ghost|outline-light`), `Container` (`max-w-7xl px-5 sm:px-8`), `SectionHeading` (`eyebrow/title/description` + `align/light` + line), `PageHero` (`compact?`, `bg-grain` + dual gradients), `Reveal` (`delay`/`as`), `Accordion` (single-open), `Timeline` (alternating rail). Extend via `cn()`, not ad-hoc class strings.
- **Styling:** Use `shrine-cream/parchment(+dark)/stone/ink/charcoal/maroon-*/gold-*/pine-*/terracotta-*` + `shadow-shrine`/`shadow-shrine-lg` + utilities `text-balance` / `bg-adobe-texture` / `bg-grain` / `divider-weave`/`divider-weave-thin` / `reveal` / `skip-link` / `mask-fade-b`. Mobile-first (`sm:`/`lg:`).

## Don't

- Switch `HashRouter` → `BrowserRouter`, break alias routes, or prop-drill nav arrays.
- Add one-off hex colors or bypass `cn()` (`tailwind-merge` dedup matters).
- Rebuild `Dialog`/`Dropdown` from scratch if `shadcn/ui` (Radix) is adopted — use its primitives.
- Add SSR, API routes, or a CMS without an explicit architecture decision — this is a static SPA (`CLAUDE.md` isolates future CMS behind `lib/cms`).

## Where to look next

- `CLAUDE.md` — full six-phase workflow, detailed conventions, anti-patterns, env contract, and validation checklist.
- `docs/prompts.md` — intent lineage.
- `src/index.css` — authoritative token list.
