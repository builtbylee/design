# Rows

**Role:** a key/value list (properties, facts, a small table) as white rows on a hairline grid.
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** default · with evidence (per-row chip) · editable (Dissect's `.props.edit`)

## Why it is the way it is
This is the one legitimate grid of rules (Law 1): a 1px gap of `--hair` between white rows, so the lines are the ground showing through, not borders drawn on.

## Spec
| Property | Value | Evidence |
|---|---|---|
| container | grid, gap 1px, `--hair` background, `--r-sm`, overflow hidden | Measured |
| row | flex, baseline, space-between, gap 14px, `--sheet`, padding 10px 14px | Measured |
| key | `--ui` 14px, `--ink2` | Measured |
| value | `--mono` 12.5px, tabular numbers, right-aligned, wraps | Measured |
| row chip | small evidence chip (2px 8px, 10px) | Measured |

## States
default · linked/hovered (`--sunk2`) · edited (inset 2px ink edge: "this value is yours") · changed.

## Copy
```css
.rows{display:grid;gap:1px;background:var(--hair);border-radius:var(--r-sm);overflow:hidden}
.rows>div{display:flex;align-items:baseline;justify-content:space-between;gap:14px;background:var(--sheet);padding:10px 14px}
.rows .k{font-size:14px;color:var(--ink2)}
.rows .v{font-family:var(--mono);font-size:12.5px;font-variant-numeric:tabular-nums;display:inline-flex;
  align-items:center;gap:8px;flex-wrap:wrap;justify-content:flex-end;text-align:right}
```
```html
<div class="rows"><div><span class="k">Radius</span><span class="v">30px <span class="ev m"><i></i>Measured</span></span></div></div>
```

## Do / Don't
- Do: set values in mono with tabular numbers, so columns of numbers align.
- Don't: draw borders between rows. The hairline is the 1px gap.
