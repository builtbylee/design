# List and note

**Role:** blue-dot bullets for responsibilities, and a blue-ruled note for method or caveat.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 139–144, 234–235 · **Variants:** bullets · note · block (hairline-topped group with a small heading)

## Why it is the way it is
The bullet dot and the note's rule are the smallest uses of blue: they mark "read this" at the scale of a line.

## Spec
| Property | Value | Evidence |
|---|---|---|
| block | 20px top padding, 1px `--line` top, 15px/600 navy heading | Measured (139–140) |
| bullets | grid gap 10px; 6px `--blue` dot at .62em; 15px `--ink`, 18px indent | Measured (141–143) |
| note | 2px `--blue` left rule, 18px indent, 15px `--muted`, max 78ch; bold lead-in `--navy` | Measured (234–235) |

## States
Static.

## Copy
```html
<div class="block"><h3>Responsibilities</h3><ul class="bullets"><li>Built the EMEA recruiting team.</li></ul></div>
<p class="note"><b>How.</b> Figures are hires with a start date in the year.</p>
```

## Do / Don't
- Do: begin a note with a bold two-word lead-in.
- Don't: nest bullets.
