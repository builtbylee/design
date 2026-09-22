# <Component name>

**Role:** one sentence — what a person rebuilding this would use it for.
**System:** `<system-id>@<version>` · **Variants:** primary · quiet · icon (each variant carries its own spec and copy block)

## Why it is the way it is
One sentence. Not what it looks like — why. ("The arrow sits in its own circle so the button reads as a destination, not a label.")

## Spec
| Property | Value | Evidence |
|---|---|---|
| height | 48px | Measured |
| padding | 7px 8px 7px 20px | Measured |
| radius | `--r-pill` | Measured |
| background | `--ink` | Measured |
| type | `--ui` 15px / 500 | Measured |
| motion | `.cap` translate(2px,−2px) on hover · `--ease` .18s | Interpreted |
| touch target | ≥ 44px | Guess → rule |

Evidence chips, as in Dissect: **Measured** (taken from source or pixels), **Interpreted** (derived from a law or pattern), **Guess** (stated assumption). Any row less certain than the component carries its own chip. Reasons are visible text, never a tooltip.

## States
default · hover · active · focus-visible · disabled · (selected / pressed where applicable). Each state names the one thing that changes.

## Copy
```css
/* agent-ready: paste as-is */
```
```html
<!-- minimal markup with real elements: <button>, <a href>, <input> + <label> -->
```
Optional: Tailwind / React blocks when the project's stack asks for them.

## Do / Don't
- Do: …
- Don't: … (one line each; the don'ts are the ones people actually get wrong)
