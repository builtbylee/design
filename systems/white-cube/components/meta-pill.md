# Meta pill

**Role:** a small mono value in a sunk pill: a status, a count, a code, a dimension. Optionally with a status dot.
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** meta · button (tappable) · working (pulsing ink dot) · bad (warn) · quiet (bar only, hidden on phones)

## Why it is the way it is
Values are set in mono so they read as measurements, not prose (the instrument-panel voice). The sunk pill keeps them quiet enough to sit beside a headline.

## Spec
| Property | Value | Evidence |
|---|---|---|
| type | `--mono` 11.5px, `--ink2` | Measured |
| background | `--sunk` | Measured |
| padding | 5px 11px (quiet: 6px 12px) | Measured |
| radius | `--r-pill` | Measured |
| overflow | one line, ellipsis | Measured |
| dot | 6px circle, `--live` | Measured |
| working | `--ink` text; the dot turns ink and pulses (1.15s ease-in-out, opacity 1→.35, scale 1→.8) | Measured |
| bad | `--warn-bg` fill, `--warn-ink` text and dot, no pulse | Measured |
| button | hover `--sunk2` + `--ink` | Measured |

## States
idle (green dot: done or live) · working (pulsing ink dot + a count: "Dissecting… 12s") · bad (warn) · hover (button variant).

## Copy
```css
.meta{font-family:var(--mono);font-size:11.5px;color:var(--ink2);background:var(--sunk);border-radius:var(--r-pill);
  padding:5px 11px;display:inline-flex;align-items:center;gap:6px;flex:none;max-width:100%;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.meta.button{border:none;cursor:pointer;transition:background .18s var(--ease),color .18s var(--ease)}
.meta.button:hover{background:var(--sunk2);color:var(--ink)}
.dot{width:6px;height:6px;border-radius:var(--r-pill);background:var(--live);flex:none;transition:background .3s var(--ease)}
.meta.working{color:var(--ink)}
.meta.working .dot{background:var(--ink);animation:pulse 1.15s ease-in-out infinite}
.meta.bad{color:var(--warn-ink);background:var(--warn-bg)}
.meta.bad .dot{background:var(--warn-ink);animation:none}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.8)}}
```
```html
<span class="meta working" role="status"><i class="dot" aria-hidden="true"></i>Dissecting… 12s</span>
```

## Do / Don't
- Do: let a waiting pill name what is outstanding and count the seconds (a wait that has gone quiet says so).
- Don't: use `--live` green for anything but a status dot.
- Don't: put prose in a meta pill. Values only.
