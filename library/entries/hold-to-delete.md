# Hold to delete

**Kind:** component · **Tags:** form, destructive, feedback · **Origin:** original
**Demo:** `hold-to-delete.html`

## Why it is excellent
It replaces the "Are you sure?" dialog with a deliberate gesture that can't happen by accident, and it shows exactly how far along you are. Letting go early is safe and says so. The result states how to undo it.

## What to take
- Confirm with duration instead of a second dialog. About 1.2s is long enough to be intentional and short enough not to annoy.
- Reveal a reverse-colour copy of the label with a clip, so the text inverts cleanly as the fill passes it.
- Fill linearly while holding, then retreat quickly (220ms, ease-out) on release. The asymmetry reads as "safe to let go".
- Say what happened when released early: "Released early. Nothing was deleted."
- Make it reversible anyway: the finished state names the restore deadline and offers "Restore now".

## Anatomy
| Part | Value | Note |
|---|---|---|
| button | full width, 52px, radius 14px | soft red ground, red label |
| fill | clip-path inset(0 100% 0 0) → inset(0), 1200ms linear | a copy of the label in `--on-red` |
| retreat | 220ms `cubic-bezier(.2,.8,.2,1)` | |
| press | scale .985 | |
| done | a tick draws in 400ms, then the card changes to the deleted state | |
| contrast | red on soft red 4.58:1 · white on red 5.34:1 (dark: 5.47:1 · 6.90:1) | Measured |

## Behaviour
- **Keyboard:** holding Space or Enter works the same way. Key repeat is ignored, and blur cancels.
- **Touch:** the long-press menu and text selection are suppressed; pointer capture keeps the hold if the finger drifts.
- **Screen readers:** the accessible name is "Delete Harbour survey", described by "Press and hold for about a second."
- **Reduced motion:** the fill still progresses because it carries information. Only the press scale is removed.
