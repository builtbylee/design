# Segmented control

**Role:** pick one of a few options in place (a level, a period, an output format).
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** default · wrapping (settings, < 640px)

## Why it is the way it is
The chosen option lifts onto `--sheet` inside a sunk track, the same border-and-lift that selection means everywhere (Law 7). The choice reads as an object you moved, not a colour you painted.

## Spec
| Property | Value | Evidence |
|---|---|---|
| track | `--sunk`, `--r-pill`, padding 3px, gap 2px | Measured |
| segment | `--ui` 13px, `--ink2`, padding 7px 13px, min-height 38px | Measured |
| hover | `--ink` text | Measured |
| selected | `--sheet` + `--sh1`, `--ink` text | Measured |
| label | `--mono` 11px, `.12em`, uppercase; `--ink2` where it is text under 24px | Measured · Interpreted (contrast) |
| touch height | 44px (the tool uses 38) | Interpreted (Law 8) |
| thumb | one element sliding between segments, 260ms `cubic-bezier(.22,1,.36,1)`, by **WAAPI** (Starkle found CSS transitions unreliable on Android) | Interpreted |

## States
default · hover · selected (`aria-pressed=true`) · focus-visible · disabled.

## Copy
```css
.seg{display:inline-flex;align-items:center;gap:2px;background:var(--sunk);border-radius:var(--r-pill);padding:3px}
.seg button{border:none;background:transparent;color:var(--ink2);font-size:13px;font-family:var(--ui);
  border-radius:var(--r-pill);padding:7px 13px;cursor:pointer;min-height:38px;white-space:nowrap;
  transition:background .18s var(--ease),color .18s var(--ease)}
.seg button:hover{color:var(--ink)}
.seg button[aria-pressed=true]{background:var(--sheet);color:var(--ink);box-shadow:var(--sh1)}
```
```html
<div class="seg" role="group" aria-label="Output format">
  <button type="button" aria-pressed="true">CSS</button><button type="button" aria-pressed="false">Tailwind</button>
</div>
```

## Do / Don't
- Do: keep to 2–5 short words or numbers.
- Don't: paint the selected segment ink. That is a toggle chip, a different component.
- Don't: remount the control when the value changes. The thumb has to slide from where it was.
