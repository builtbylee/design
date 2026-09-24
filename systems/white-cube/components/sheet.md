# Sheet

**Role:** the raised white card that holds a screen's content on the grey ground.
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** sheet · sunk (nested) · rows (nested white rows, see `rows.md`)

## Why it is the way it is
Surfaces float, so separation comes from light and depth, not lines. Nested surfaces step *down* (sheet → sunk → white rows), so depth always means the same thing.

## Spec
| Property | Value | Evidence |
|---|---|---|
| background | `--sheet` (#fff) on `--bg` (#efeff1) | Measured |
| radius | `--r-lg` (30px) | Measured |
| shadow | `--sh2` | Measured |
| padding | `clamp(18px,2.6vw,30px)`; 14px inline on the narrowest screens | Measured |
| stacking | `.sheet + .sheet` margin-top `clamp(16px,2.4vw,24px)` | Measured |
| nested sunk block | `--sunk`, `--r-md` (22px), no shadow | Interpreted (Law 2) |
| border | none | Measured |

## States
Static. A sheet never animates on its own; its content does.

## Copy
```css
.sheet{background:var(--sheet);border-radius:var(--r-lg);box-shadow:var(--sh2);padding:clamp(18px,2.6vw,30px);position:relative}
.sheet+.sheet{margin-top:clamp(16px,2.4vw,24px)}
.sunk{background:var(--sunk);border-radius:var(--r-md);padding:16px 18px}
```
```html
<section class="sheet" aria-labelledby="s1"><h2 id="s1">…</h2><div class="sunk">…</div></section>
```

## Do / Don't
- Do: step down when nesting (sheet → sunk → rows).
- Don't: put a sheet inside a sheet, or add a border to one.
- Don't: use `--sh3` on a sheet. It is the lift shadow for things that move.
