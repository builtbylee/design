# Award row

**Role:** a flat card for one recognition, with a mark, meta, title, description and a pill.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 237–245, 407–408 · **Variants:** one

## Why it is the way it is
It is flat, not shadowed, because it supports the section's figure rather than competing with it (Law 3).

## Spec
| Property | Value | Evidence |
|---|---|---|
| grid | 56px mark, text, pill; gap 20px; 22px 24px; 1px `--line`, radius 16px | Measured (237) |
| mark | 56px, radius 12px, `--paper` | Measured (238) |
| meta | 13px `--muted`, subject `--blue` 600, 3px dot separator | Measured (240–242) |
| title | 20px/600, −0.02em, `--navy` | Measured (243) |
| description | 14.5px `--muted`, max 60ch | Measured (244) |
| pill | 6px 12px, pill, `--paper`, 1px `--line`, 13px/600 navy | Measured (245) |
| phone | one column; pill left-aligned | Measured (407–408) |

## States
Static.

## Copy
```html
<div class="award"><span class="award-mark"><img src="award.png" alt=""></span>
  <div><p class="award-meta"><b>Award</b><span class="dot-sep"></span>2021</p><p class="award-title">Maple Leaf Award</p><p class="award-desc">For …</p></div>
  <span class="pill">Top 1%</span></div>
```

## Do / Don't
- Do: keep the pill to a fact (a rank, a year).
- Don't: shadow it.
