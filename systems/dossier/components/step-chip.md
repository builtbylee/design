# Step chip

**Role:** numbered pills that switch a screenshot sequence.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 178–183 · **Variants:** one

## Why it is the way it is
Each step carries its number so the order of a workflow is visible even when a later step is on screen.

## Spec
| Property | Value | Evidence |
|---|---|---|
| chip | min 44px, 0 12px, pill, 1px `--line`, white, 12.5px/600 `--muted` | ★ Measured 32px, raised to 44px |
| number | tabular, `--muted` (7.06:1) | ★ source `#9aa8b8` 2.42:1 |
| pressed | no border, `--blue-soft`, `--blue-deep` text and number | Measured (182–183), ★ blue-deep |
| auto-advance | every 6s while on screen and not hovered or focused; never under reduced motion | Measured (script) |
| image swap | cross-fade 450ms `--ease` | Measured (174) |

## States
default · hover (`--ink`) · pressed · focus-visible · paused (hover/focus).

## Copy
```html
<div class="steps" role="group" aria-label="Screen steps"><button class="step" type="button" aria-pressed="true"><b>1</b>Paste the brief</button></div>
```

## Do / Don't
- Do: stop auto-advance the moment the reader touches it.
- Don't: set the number in `--faint`.
