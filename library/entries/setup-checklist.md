# Setup checklist

**Kind:** component · **Tags:** onboarding, progress, disclosure · **Origin:** original
**Demo:** `setup-checklist.html`

## Why it is excellent
It always shows exactly one next thing. Finishing a step draws its tick, then the next step opens with its button already focused. The ring and the time-left line count down together, and when it's done it gets out of the way with a plain summary.

## What to take
- Keep one step open at a time, and open the next as soon as the current one completes.
- Estimate time per step and show the total left ("3 steps left, about 6 minutes"). It's more motivating than a percentage.
- Draw the tick with a stroke-dashoffset after the fill (80ms delay), then wait for it before moving on (360ms).
- Animate height with a `grid-template-rows: 0fr → 1fr` transition, with no measuring.
- End on a statement of what's now true ("Reminders go out on Monday mornings"), not a celebration.

## Anatomy
| Part | Value | Note |
|---|---|---|
| card | 440px max, radius 20px, padding 20px | |
| ring | 44px, 4px stroke, arc 600ms `cubic-bezier(.2,.8,.2,1)` | count in the centre, tabular |
| row | 52px, radius 14px; the open row fills `--well` | |
| tick | 22px circle; fill 200ms; stroke draw 280ms after 80ms | |
| detail | grid-rows 320ms | indented 46px to align with the title |
| time | 12.5px, hidden once done | |

## Behaviour
- **Semantics:** rows are disclosure buttons (`aria-expanded`, `aria-controls`); each title adds ", done" or ", not done" for screen readers; the summary is a live region.
- **Focus:** it moves to the next step's action, and to "Show the checklist again" when everything is complete.
- **Reduced motion:** every transition is instant.
