# Bottom drawer

**Kind:** component · **Tags:** overlay, mobile, gesture · **Origin:** study of Vaul by Emil Kowalski (https://vaul.emilkowal.ski · https://github.com/emilkowalski/vaul)
**Demo:** `bottom-drawer.html`

## Why it is excellent
The page behind the sheet doesn't just dim: it recedes like a card, scaling down and rounding its corners, so the sheet feels physically on top. While you drag, the page, the dimming and the sheet all follow your finger together, and release decides by distance or speed.

## What to take
- Scale the background to about .93 with a 14px drop and a 12px radius while the sheet is open. It explains depth better than a darker overlay.
- Drive every layer from one number (drag progress 0–1) so they never disagree.
- Close on a quarter of the sheet's height or a flick over 0.4px/ms. Otherwise snap back.
- Resist upward drags with a logarithmic curve so the sheet feels attached rather than stuck.
- Use one long easing for everything: 500ms `cubic-bezier(.32,.72,0,1)`, the curve iOS sheets are usually matched to.
- Make the drag handle a real button that closes the sheet, for people who can't drag.

## Anatomy
Values are the rebuild's own, informed by Vaul's defaults.
| Part | Value | Note |
|---|---|---|
| sheet | radius 14px 14px 0 0, padding 10px 20px 24px + safe area | |
| handle | 36 × 5px pill inside a 24px-tall button | |
| background | translateY(14px) scale(.93), radius 12px | origin top centre |
| overlay | black 40% | fades with the drag |
| timing | 500ms `cubic-bezier(.32,.72,0,1)` | opening, closing and snap-back |
| dismiss | > 25% of height, or > 0.4px/ms | |

## Behaviour
- **Keyboard:** Esc closes; the handle button closes; focus returns to "Share".
- **Focus:** the page behind is `inert` while the sheet is open.
- **Reduced motion:** transitions are effectively instant, and dragging still works.
- **Touch:** `touch-action: none` on the sheet, so the page doesn't scroll during a drag.

## Study notes
Kept: the background scale, unified drag progress, velocity dismiss and the easing. Changed: shown inside a phone-sized stage so the effect reads on desktop. Not reproduced: snap points, nested drawers, and scrolling content inside the sheet (Vaul hands the drag to the scroll area only when it's at the top).
