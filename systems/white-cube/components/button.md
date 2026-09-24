# Button

**Role:** the pill that does something: one primary per area, the rest quiet.
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** primary (ink, with arrow cap) · quiet (hairline ring)

## Why it is the way it is
The arrow sits in its own circle so the primary reads as a destination, not a label. It is the only solid black thing in its area, so the eye goes there first (Law 3).

## Spec — primary
| Property | Value | Evidence |
|---|---|---|
| height | min 44px | Measured |
| padding | 7px 8px 7px 20px | Measured |
| radius | `--r-pill` | Measured |
| background / text | `--ink` / #fff | Measured |
| type | `--ui` 14.5px / 500 | Measured |
| cap | 30px circle, `rgba(255,255,255,.16)` | Measured |
| cap motion | hover: translate(2px,−2px), .28s `--spring` | Measured |
| press | `scale(.98)`, .2s `--ease` | Measured |
| disabled | opacity .45, `not-allowed` | Measured |
| cap on touch products | 32px (Starkle) | Interpreted |

## Spec — quiet
| Property | Value | Evidence |
|---|---|---|
| background | transparent; hover `--sunk` | Measured |
| ring | `inset 0 0 0 1px var(--hair)`: a shadow, not a border, so no layout shift | Measured |
| padding | 7px 18px, no cap | Measured |
| text | `--ink` | Measured |

## States
default · hover (the cap drifts; quiet fills `--sunk`) · active (scale .98) · focus-visible (2px ink outline, 3px offset) · disabled (opacity .45) · busy (`aria-busy`: it stays in place and inert; the label may change, the size may not).

## Copy
```css
.btn{display:inline-flex;align-items:center;gap:10px;border:none;cursor:pointer;font-family:var(--ui);font-size:14.5px;
  font-weight:500;background:var(--ink);color:#fff;border-radius:var(--r-pill);padding:7px 8px 7px 20px;
  text-decoration:none;min-height:44px;transition:transform .2s var(--ease),opacity .2s var(--ease)}
.btn .cap{width:30px;height:30px;border-radius:var(--r-pill);background:rgba(255,255,255,.16);display:grid;
  place-items:center;flex:none;transition:transform .28s var(--spring)}
.btn:hover .cap{transform:translate(2px,-2px)}
.btn:active{transform:scale(.98)}
.btn[disabled]{opacity:.45;cursor:not-allowed}
.btn.quiet{background:transparent;color:var(--ink);box-shadow:inset 0 0 0 1px var(--hair);padding:7px 18px}
.btn.quiet:hover{background:var(--sunk)}
```
```html
<button class="btn" type="button">Dissect a sample <span class="cap" aria-hidden="true">→</span></button>
<button class="btn quiet" type="button">Choose a file</button>
```

## Do / Don't
- Do: one primary per area, and a verb that says exactly what happens.
- Don't: put two primaries side by side. The second one is quiet.
- Don't: give the quiet button a real border. It must not move when it changes state.
