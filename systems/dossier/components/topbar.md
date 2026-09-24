# Topbar

**Role:** the sticky white bar that names the record, lists its sections and holds the one primary action.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 50–68, 387–391 · **Variants:** desktop links · phone menu

## Why it is the way it is
The current section turns blue in the bar, so the reader always knows where they are in a long record (Law 1); under 860px the links fold into a button that names the current section instead of saying "Menu".

## Spec
| Property | Value | Evidence |
|---|---|---|
| height | 68px, sticky, z 40 | Measured (50) |
| ground | rgba(255,255,255,.92) + 14px backdrop blur, 1px `--line` bottom | Measured (50) |
| side padding | max(24px, (100vw − 1180px) / 2) so it aligns with the shell | Measured (50) |
| mark | 36px square, radius 10px, `--navy`, 14px/700 initials | Measured (53) |
| brand | 600 navy name, 12px `--muted` subtitle (hidden under 640px) | Measured (51–52, 396) |
| brand target | min-height 44px | ★ Interpreted (Law: targets) |
| link | 14px/500 `--muted`, 7px 11px, radius 8px; hover `--paper` | Measured (55–56) |
| current link | `--blue` 600 | Measured (57) |
| phone toggle | min 44px, 1px `--line`, radius 10px, chevron rotates 180° in 160ms | Measured (61–64) |
| phone menu | fixed under the bar; 44px rows; current row `--blue-soft` + `--blue-deep` | Measured (65–68), ★ blue-deep |

## States
link: default · hover (fills `--paper`) · current (blue) · focus-visible (2px blue ring, 3px offset). Toggle: collapsed · expanded (chevron flips, menu shows).

## Copy
```css
/* see components.css "topbar": .topbar .brand .mark .topbar nav a .topbar-end .navtoggle .mobile-nav */
```
```html
<header class="topbar">
  <a class="brand" href="#top"><span class="mark">Do</span><span>Dossier<small>Design system v1</small></span></a>
  <nav aria-label="Sections"><a href="#top" class="on">Record</a><a href="#timeline">Timeline</a></nav>
  <div class="topbar-end">
    <a class="cta" href="#close">Decide</a>
    <button type="button" class="navtoggle" aria-expanded="false" aria-controls="mobileNav"><span class="navtoggle-label">Section</span><span>Record</span></button>
  </div>
</header>
<nav class="mobile-nav" id="mobileNav" aria-label="Sections" hidden><a href="#top" class="on">Record</a></nav>
```

## Do / Don't
- Do: update the current link as the reader scrolls; the toggle label follows it.
- Don't: put a second solid button in the bar. The primary is the only filled thing.
- Don't: centre the links. They sit between the brand and the action.
