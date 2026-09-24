# Input and search

**Role:** text entry: a named field, or a search pill with its icon inside.
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** search pill · field (label above)

## Why it is the way it is
Fields are sunk pills, the same family as meta and choice, so typing into one feels like writing on the surface, not into a box drawn on it. The focus ring goes on the pill, not the bare input, so the whole target shows it.

## Spec
| Property | Value | Evidence |
|---|---|---|
| search pill | `--sunk`, `--r-pill`, padding 0 14px, min-height 44px (48 on phones), `--ink3` icon | Measured |
| input | no border, transparent, 14px, width `min(220px,44vw)` | Measured |
| focus | `:focus-within` → 2px `--ink` outline, 3px offset | Measured |
| label | visible `<label>` in the eyebrow style (mono 11px, `.14em`, uppercase), `--ink2` for contrast | Measured · Interpreted |
| font | inherits (`button,input,select,textarea{font:inherit}`) | Measured |
| mobile text size | ≥ 16px on phones, or iOS zooms on focus | Guess → rule |

## States
empty (the placeholder is an example, like `ABC123`, never the instruction) · focused · filled · invalid (a warn sentence below it, not only a red border) · disabled.

## Copy
```css
.search{display:inline-flex;align-items:center;gap:8px;background:var(--sunk);border-radius:var(--r-pill);padding:0 14px;min-height:44px;color:var(--ink3)}
.search:focus-within{outline:2px solid var(--ink);outline-offset:3px}
.search input{border:none;background:transparent;outline:none;font-size:14px;width:min(220px,44vw);padding:10px 0;color:var(--ink)}
```
```html
<label class="eyebrow" for="q">Search</label>
<div class="search"><svg aria-hidden="true">…</svg><input id="q" type="search" placeholder="badges"></div>
```

## Do / Don't
- Do: keep a visible label. A placeholder is not a label.
- Don't: remove the outline without moving it onto the pill.
