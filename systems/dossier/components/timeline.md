# Timeline

**Role:** a vertical list of companies and roles on one spine, driving a detail panel (desktop) or accordions (phone).
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 97–126, 374–384, and the timeline script · **Variants:** desktop (list + panel) · phone (accordion)

## Why it is the way it is
Logos and role dots share one spine so a career reads as a single line; one blue indicator slides along it, so moving between roles feels like moving through time.

## Spec
| Property | Value | Evidence |
|---|---|---|
| layout | 320px list + panel, gap 40px; list sticky at 92px on tall desktops | Measured (97, 101) |
| spine | 1px `--spine` at left 14px | Measured (100) |
| company head | 28px logo, 15px/600 name, 12.5px tabular years | Measured (103, 108–109) |
| role row | 28px indent, 8px 12px, 2px transparent left rule, radius 0 8px 8px 0, min 44px | Measured (110, 376) |
| role dot | 7px ring `#b3c0cf` on the spine | Measured (111) |
| selected | `--blue-soft` fill, 2px `--blue` rule, filled dot with 3px halo | Measured (113–114) |
| selected title | `--blue-deep` (5.82:1) | ★ source `--blue` 4.48:1 |
| focus | ring inset −2px so it stays inside the row | Measured (115) |
| indicator | one element slides to the selected row, 380ms `--ease` | Measured (120) |
| panel swap | height eases, three parts slide 18px from the direction of travel, stagger 45ms, 420ms | Measured (script) |
| phone | panel hidden; each role opens an accordion (one at a time), chevron turns 90°, content rises 10px | Measured (374–384, script) |
| semantics | `role=tablist` vertical; rows are `button role=tab` with `aria-selected`; company heads `aria-hidden`, company in an `.sr-only` suffix | Measured (markup) |

## States
row: default · hover (white fill) · selected · focus-visible (inset ring, never mistaken for the fill). Arrow keys move selection. Nothing animates on first render or under reduced motion.

## Copy
```css
/* see components.css "timeline" */
```
```html
<div class="timeline" role="tablist" aria-orientation="vertical" aria-label="Experience">
  <div class="tl-company is-active" role="presentation">
    <div class="tl-company-head" aria-hidden="true"><span class="logo sm">…</span><span class="tl-company-name">Company</span><span class="tl-years">2018 — 2026</span></div>
    <button class="tl-role" type="button" role="tab" aria-selected="true" aria-controls="panel"><span class="tl-role-title">Head of Recruiting<span class="sr-only"> at Company</span></span><span class="tl-years">2022 — 2026</span></button>
  </div>
</div>
```

## Do / Don't
- Do: keep list order and data order in step; buttons index into the data.
- Don't: show years twice for a single-role company; they go on the company head.
