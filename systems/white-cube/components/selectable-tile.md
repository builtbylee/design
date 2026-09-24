# Selectable tile

**Role:** anything chosen from a set (a component row, a card, an option), showing that it is chosen.
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** tile (border and lift) · choice chip (ink fill) · tag (mono, ink fill)

## Why it is the way it is
Selection is border and lift (Law 7). The tile rises onto `--sheet` with an inset ink ring. The ring is a shadow, so it follows the radius and costs no layout: choosing never nudges the row by a pixel. Focus keeps its own outline, so a focused tile never reads as a chosen one.

## Spec — tile
| Property | Value | Evidence |
|---|---|---|
| unselected | `--sunk`, no shadow | Measured |
| hover | `--sunk2` | Measured |
| selected | `--sheet` + `inset 0 0 0 1.5px var(--ink), var(--sh1)`, transitioned together over .22s | Measured |
| linked (hovered elsewhere) | `--sunk2` + `inset 2px 0 0 var(--ink)` | Measured |
| row | min-height 52px, padding 13px 16px, 14.5px/600 name | Measured |

## Spec — choice and tag
| Property | Value | Evidence |
|---|---|---|
| choice | `--sunk` pill, 14px `--ink2`, padding 11px 18px, min 44px; hover `--sunk2`; pressed `--ink` + #fff | Measured |
| tag | `--mono` 11px on `--sunk`, padding 7px 12px, min 44px; pressed `--ink` + #fff | Measured |

## States
default · hover · selected/pressed · focus-visible (its own 2px outline, 3px offset) · disabled.

## Copy
```css
.tile{background:var(--sunk);border-radius:var(--r-md);transition:background .22s var(--ease),box-shadow .22s var(--ease)}
.tile:hover{background:var(--sunk2)}
.tile.selected{background:var(--sheet);box-shadow:inset 0 0 0 1.5px var(--ink),var(--sh1)}
.choice{display:inline-flex;align-items:center;gap:9px;background:var(--sunk);border:1px solid transparent;border-radius:var(--r-pill);
  padding:11px 18px;font-size:14px;color:var(--ink2);cursor:pointer;min-height:44px;
  transition:background .18s var(--ease),color .18s var(--ease),box-shadow .18s var(--ease)}
.choice:hover{background:var(--sunk2);color:var(--ink)}
.choice[aria-pressed=true]{background:var(--ink);color:#fff}
```
```html
<button class="choice" type="button" aria-pressed="true">React / Next</button>
```

## Do / Don't
- Do: use the lift for "chosen from a set" and the ink fill for "switched on".
- Don't: show selection with a coloured edge strip or a real border.
- Don't: let the focus ring and the selection ring look alike.
