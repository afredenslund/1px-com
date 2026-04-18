# 1px.com — Discipline

Premium 3-character domain-sale microsite. Every change must reinforce
the "premium domain" pitch.

## Division of labor

**Visual/design surface** — free to iterate:
- Color palette, typography choices, spacing scale
- Hero, card layouts, illustrations, microtypography
- Component visuals (buttons, tables, callouts)

**UX and interaction patterns — LOCKED, do not remove or replace:**
- Sliding grey hover-indicator on primary nav (slides from active to
  hovered, slides back on leave)
- Global `:focus-visible` outline for keyboard users
- Horizontal scroll-snap timeline on `/history/` with tick-highlighting
  synced to visible card
- Sticky header behavior + domain banner at top
- `<details>` disclosure menu on mobile (<768px)
- Breadcrumbs, fat footer, RelatedArticles, TrustLine, PioneerQuote,
  RetinaCompare — components stay, visuals may change
- Scroll-depth GA events

## Hard constraints (never compromise)

- **Lighthouse 100/100** on Performance, Accessibility, Best Practices,
  SEO. Publicly advertised. Regressions are product bugs.
- **SEO integrity**: JSON-LD schemas (Article, FAQPage, BreadcrumbList,
  WebSite, Organization, Product), canonical URLs, auto-sitemap.
- **Speed**: static output, minimal vanilla JS in `<script is:inline>`,
  no JS frameworks beyond Astro's build-time rendering.
- **Canonical URL**: `https://1px.com` (no www). Set in astro.config.

## CSS discipline — scale over pixels

Prefer fluid, scalable primitives over fixed pixel values:

- **Typography**: `clamp(min, preferred, max)` for font-size. Example:
  `font-size: clamp(0.8rem, 1.4vw, 1rem)`.
- **Spacing**: existing `--space-*` scale (rem-based). Add
  `clamp()`-based values when something must flex with viewport.
- **Widths**: prefer `max-width` with `ch`/`rem`/`%` over fixed px.
  Content column uses `var(--measure)` (65ch).
- **Layout**: flex and grid first. Only reach for fixed pixel
  dimensions for borders, shadows, dividers, and 1–2px visual details.
- **Viewport units**: `dvh` (dynamic) over `vh` for mobile-safe
  full-height. `vw` for truly fluid sizing.
- **min() / max() / clamp()** instead of media-query-driven pixel
  breakpoints wherever it reads naturally.
- **Scroll interactions**: scroll-snap, scroll-padding, scroll-margin
  are preferred over JS-driven scroll math. Existing history-timeline
  uses this pattern — match it for any new scroll UI.

Hard pixel values are acceptable only for:
- Borders (`1px solid`)
- Fine dividers, outlines, shadows
- Under-2px hairline details

## Dark mode

Every color must reference a CSS custom property. Both light and dark
palettes are defined at `:root` and inside
`@media (prefers-color-scheme: dark)`. No hex values hard-coded in
component styles.

## Accessibility

- Keyboard focus outlines must remain visible on all interactive
  elements (global `:focus-visible` rule handles the default).
- Respect `prefers-reduced-motion`: all non-essential transitions and
  scroll animations must be disabled under that media query.
- Semantic HTML first, ARIA only where semantics fall short.

## Tooling

- Build: `astro build`. TypeScript strict.
- No linter, no formatter, no test harness — don't propose adding
  these unasked.
- Cloudflare Pages deploys automatically on push to `main`.

## Asking price

Never displayed on the site. The GoDaddy forsale link is the
price-discovery mechanism.
