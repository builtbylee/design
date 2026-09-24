# Bar

**Role:** the floating pill at the top of every screen: the product's name on the left, the screen's status and actions on the right.
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** default · compact (≤ 620px)

## Why it is the way it is
It floats as a pill instead of spanning the page, so the chrome reads as an instrument panel resting on the gallery wall, not a header bolted to it.

## Spec
| Property | Value | Evidence |
|---|---|---|
| layout | flex, `align-items:center`, gap 14px | Measured |
| background | `--sheet` | Measured |
| radius | `--r-pill` | Measured |
| shadow | `--sh1` | Measured |
| padding | 9px 10px 9px 18px | Measured |
| margin | `clamp(14px,2.6vw,26px) auto clamp(16px,2.6vw,26px)` | Measured |
| max-width | `--maxw` (1240px) | Measured |
| compact (≤ 620px) | gap 8px, padding-left 14px, quiet pills hidden | Measured |
| wordmark | 22px glyph + Instrument Sans 16px / 600, `-.02em`; the word hides ≤ 430px | Measured |
| nav links | 14px `--ink2`, 7px 12px, pill; hover and `aria-current` → `--sunk` + `--ink` | Measured |
| height | ≈ 58px (a 40px circle plus padding) | Interpreted |

## States
default · nav link hover (`--sunk` fill) · current page (`--sunk` fill, `--ink` text) · narrow (the word and quiet pills drop out; the glyph stays).

## Copy
```css
.bar{display:flex;align-items:center;gap:14px;background:var(--sheet);border-radius:var(--r-pill);box-shadow:var(--sh1);
  padding:9px 10px 9px 18px;margin:clamp(14px,2.6vw,26px) auto clamp(16px,2.6vw,26px);max-width:var(--maxw)}
.bar .sp{flex:1}
.wordmark{display:flex;align-items:center;gap:9px;font-weight:600;letter-spacing:-.02em;font-size:16px;color:var(--ink);text-decoration:none}
.glyph{width:22px;height:22px;flex:none}
@media(max-width:620px){.bar{gap:8px;padding-left:14px}.bar .pill-quiet{display:none}}
@media(max-width:430px){.wordmark span{display:none}}
```
```html
<header class="bar">
  <a class="wordmark" href="/"><svg class="glyph" aria-hidden="true">…</svg><span>Product</span></a>
  <span class="sp"></span>
  <span class="meta"><i class="dot"></i>Dissected in 6s</span>
  <button class="icon-btn" type="button" aria-label="Menu">…</button>
</header>
```

## Do / Don't
- Do: keep one status meta pill and at most one circle on the right on a phone.
- Don't: span the bar edge to edge or give it a border. It floats on `--sh1`.
- Don't: put the primary action in the bar. It belongs to the screen (Law 3).
