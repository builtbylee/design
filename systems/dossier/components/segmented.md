# Segmented

**Role:** pick one view of a chart or readout, in place.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 287–290, 345 · **Variants:** inline · two-column (phone)

## Why it is the way it is
The chosen segment is navy, not blue, because it is a control (Law 7); the blue goes to the chart row it selects.

## Spec
| Property | Value | Evidence |
|---|---|---|
| track | `--paper`, 4px padding and gap, radius 10px | Measured (287) |
| segment | min 44px, 0 12px, radius 7px, 13.5px/600 `--muted` | ★ Measured 36px, raised to 44px |
| hover | `--ink` | Measured (289) |
| pressed | `--navy` fill, white (15.54:1) | Measured (290) |
| phone | 2 × 2 grid, full width | Measured (345) |
| swap | readout fades out 140ms, changes, fades in | Measured (295–296) |

## States
default · hover · pressed (`aria-pressed`) · focus-visible.

## Copy
```html
<div class="seg" role="group" aria-label="Choose a group"><button type="button" aria-pressed="true">Women</button><button type="button" aria-pressed="false">Managers</button></div>
```

## Do / Don't
- Do: use `aria-pressed` buttons in a labelled group.
- Don't: use it for navigation between pages.
