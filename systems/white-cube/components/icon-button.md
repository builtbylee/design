# Icon button

**Role:** a round control for a single action with an icon and no label (menu, copy, close, zoom).
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** default · pressed (a toggle that is on)

## Why it is the way it is
Circles are for actions, pills are for words (Law 4). A circle with no text says "one thing, here" without competing with the primary pill.

## Spec
| Property | Value | Evidence |
|---|---|---|
| size | 40×40 in the tool · **44×44 on touch products** | Measured · Interpreted (Starkle delta) |
| radius | `--r-pill` | Measured |
| background | `--sheet`, 1px `--hair` border | Measured |
| hover | `--sunk`, border transparent | Measured |
| press | `scale(.95)`, .18s `--ease` | Measured |
| pressed (on) | `--ink` fill, #fff icon | Measured |
| label | `aria-label` + `title` (a tooltip may repeat the label, never replace it) | Interpreted (Law 5) |

## States
default · hover · active · focus-visible · pressed/on · disabled (opacity .4).

## Copy
```css
.icon-btn{width:40px;height:40px;border-radius:var(--r-pill);border:1px solid var(--hair);background:var(--sheet);
  color:var(--ink);display:grid;place-items:center;cursor:pointer;flex:none;position:relative;
  transition:background .18s var(--ease),border-color .18s var(--ease),transform .18s var(--ease)}
.icon-btn:hover{background:var(--sunk);border-color:transparent}
.icon-btn:active{transform:scale(.95)}
.icon-btn[aria-pressed=true]{background:var(--ink);color:#fff;border-color:transparent}
```
```html
<button class="icon-btn" type="button" aria-label="Copy" title="Copy"><svg aria-hidden="true">…</svg></button>
```

## Do / Don't
- Do: use 44px on anything meant for a thumb.
- Don't: use an icon button for a primary action, or for anything whose meaning isn't obvious without a word.
