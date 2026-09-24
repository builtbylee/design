# Stacked toasts

**Kind:** component · **Tags:** feedback, notification, gesture · **Origin:** study of Sonner by Emil Kowalski (https://sonner.emilkowal.ski · https://github.com/emilkowalski/sonner)
**Demo:** `stacked-toasts.html`

## Why it is excellent
Several notifications take the space of one. They collapse into a deck with a 14px peek, fan out when you reach for them, and pause their timers while you read. Everything about it assumes the person is busy and is only glancing at it.

## What to take
- Collapse a stack into a deck: each toast behind sits 14px higher and 5% smaller, with its content hidden, so only the newest is readable.
- Expand on hover or focus, and pause every timer while the stack is expanded or the tab is hidden.
- Keep the hover alive across the gaps between expanded toasts with an invisible pad, so the stack doesn't collapse as the pointer crosses a gap.
- Swipe down to dismiss past a distance (45px) or on a fast flick (velocity over 0.11px/ms), whichever comes first. Resist upward drags.
- Use a promise toast: "Publishing…" becomes "Post published" in place, rather than one toast replacing another.
- Put the close button on the corner, visible only on hover or focus.

## Anatomy
Values follow Sonner's published defaults where known; the rest are the rebuild's.
| Part | Value | Note |
|---|---|---|
| toast | 356px, padding 16px, radius 8px, 1px border, soft shadow | full width minus 32px on phones |
| deck | 3 visible; each −14px and scale −5% | back toasts take the front toast's height |
| expanded | stacked by real heights, 14px gap | |
| enter / move | 400ms `cubic-bezier(.21,1.02,.73,1)` | from translateY(100%) |
| timer | 4s default; a loading toast waits indefinitely | pauses on hover, focus and hidden tab |
| action | 28px button with a 44px touch area | "Undo" |

## Behaviour
- **Keyboard:** focusing into the stack expands it; Tab reaches the actions and the close buttons.
- **Screen readers:** the list is an `aria-live="polite"` region.
- **Reduced motion:** toasts fade instead of sliding.
- **Errors:** error toasts say what happens next ("Changes will sync when you reconnect").

## Study notes
Kept: the deck, the expand and pause, the swipe thresholds and the promise toast. Changed: plain DOM instead of React, one position (bottom right, bottom on phones), and fewer options. Not reproduced: rich colours, per-toast custom JSX, or multiple toasters.
