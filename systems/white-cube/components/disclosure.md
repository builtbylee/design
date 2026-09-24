# Disclosure

**Role:** a sunk block that folds reference material away (advanced settings, "also seen", treatments) without hiding that it exists.
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** block (`.adv`) · group row (`.group`, with a count)

## Why it is the way it is
Reference material a reader consults, not the answer they came for, folds shut. The head names the section and counts what is inside, so the fold defers and never hides. A reason inside a fold is still visible text (Law 5); a reason only on hover is not.

## Spec
| Property | Value | Evidence |
|---|---|---|
| block | `--sunk`, `--r-md`, overflow hidden | Measured |
| summary | flex, gap 10px, padding 15px 18px, min-height 52px, 14.5px/500; hover `--sunk2` | Measured |
| caret | 15px, `--ink3`, rotates 90° when open, .25s `--ease` | Measured |
| body | padding 0 18px 18px | Measured |
| element | native `<details>`/`<summary>` (keyboard and screen readers for free); marker hidden | Measured |

## States
closed · open · hover · focus-visible.

## Copy
```css
.adv{background:var(--sunk);border-radius:var(--r-md);overflow:hidden}
.adv>summary{display:flex;align-items:center;gap:10px;padding:15px 18px;cursor:pointer;list-style:none;min-height:52px;font-size:14.5px;font-weight:500}
.adv>summary::-webkit-details-marker{display:none}
.adv>summary:hover{background:var(--sunk2)}
.adv .caret{width:15px;height:15px;color:var(--ink3);flex:none;transition:transform .25s var(--ease)}
.adv[open] .caret{transform:rotate(90deg)}
.adv-body{padding:0 18px 18px}
```
```html
<details class="adv"><summary><svg class="caret" aria-hidden="true">…</svg>Advanced · 6 settings</summary><div class="adv-body">…</div></details>
```

## Do / Don't
- Do: count what is inside in the summary ("Treatments · 3").
- Don't: fold away the answer the reader came for.
