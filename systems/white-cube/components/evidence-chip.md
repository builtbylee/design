# Evidence chip

**Role:** says how certain a value is: **Measured**, **Interpreted** or **Guess**.
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** m (Measured) · f (Interpreted) · s (Guess) · small (inside rows)

## Why it is the way it is
Evidence sits with its claim (Law 5). A reader should never have to wonder whether a number was measured or made up, and the reason is visible text, not a hover-only tooltip.

## Spec
| Property | Value | Evidence |
|---|---|---|
| pill | `--mono` 11px, `--ink2` on `--sunk`, padding 3px 9px, `--r-pill` | Measured |
| mark | 7px circle | Measured |
| Measured | solid `--ink` | Measured |
| Interpreted | half-filled: `linear-gradient(90deg,var(--ink2) 50%,transparent 50%)` + 1px `--ink2` ring | Measured |
| Guess | empty ring, 1px `--ink3` | Measured |
| in rows | padding 2px 8px, 10px | Measured |
| placement | on the section header; a row carries its own only when less certain than its section | Interpreted (Law 5) |

## States
Static. If a chip opens an explanation, the explanation is text that stays visible once opened.

## Copy
```css
.ev{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-family:var(--mono);color:var(--ink2);
  background:var(--sunk);border-radius:var(--r-pill);padding:3px 9px}
.ev i{width:7px;height:7px;border-radius:var(--r-pill);display:block}
.ev.m i{background:var(--ink)}
.ev.f i{background:linear-gradient(90deg,var(--ink2) 50%,transparent 50%);box-shadow:inset 0 0 0 1px var(--ink2)}
.ev.s i{box-shadow:inset 0 0 0 1px var(--ink3)}
```
```html
<span class="ev s"><i aria-hidden="true"></i>Guess</span>
```

## Do / Don't
- Do: always print the word as well as the mark. The mark alone is not accessible.
- Don't: mark something Measured that was inferred. A typeface read from a screenshot is always a Guess.
