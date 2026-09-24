# Skeleton

**Role:** stands in for content that is on its way, in the shape of that content.
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** line · row (52px) · card

## Why it is the way it is
A skeleton tells the truth about what is coming and where; a spinner only says "wait", and zeros say something false. A section holds its skeleton until *its own* data arrives, never on a timer.

## Spec
| Property | Value | Evidence |
|---|---|---|
| block | `--sunk2`, radius 8px, overflow hidden | Measured |
| sheen | a white band (`rgba(255,255,255,.85)`) sliding left to right, 1.25s, infinite | Measured |
| row | height 52px, `--r-md`, full width, 9px apart | Measured |
| reduced motion | no sheen: a static block | Measured (global rule) |
| a11y | `aria-hidden="true"` on the blocks; the region is `aria-busy` | Interpreted |

## States
Loading only. When its content arrives it is replaced in place. It is never shown alongside an error.

## Copy
```css
.sk{position:relative;overflow:hidden;background:var(--sunk2);border-radius:8px;display:block}
.sk::after{content:"";position:absolute;inset:0;transform:translateX(-100%);
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.85),transparent);animation:sheen 1.25s infinite}
@keyframes sheen{to{transform:translateX(100%)}}
.sk-row{height:52px;border-radius:var(--r-md);width:100%;margin-bottom:9px}
```
```html
<div aria-busy="true"><span class="sk sk-row" aria-hidden="true"></span><span class="sk sk-row" aria-hidden="true"></span></div>
```

## Do / Don't
- Do: match the real layout's heights, so nothing jumps when content lands.
- Don't: show an empty-state sentence ("No results") while the request is still in flight.
- Don't: use a spinner.
