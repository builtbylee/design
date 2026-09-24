# Notice

**Role:** an inline block that tells the reader something about this screen: a limit, an empty result, a failure with its fix.
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** default (sunk) · bad (warn)

## Why it is the way it is
Failures are stated plainly, next to the thing that failed, with what to do next. No modal, no "Oops".

## Spec
| Property | Value | Evidence |
|---|---|---|
| surface | `--sunk`, `--r-md`, padding 16px 18px, margin-bottom 14px | Measured |
| heading | 15px / 600, `-.012em` | Measured |
| body | 14px `--ink2`, max 56ch | Measured |
| bad | `--warn-bg` fill, `--warn-ink` text (body too) | Measured |
| action | a quiet button or copy bar inside, last | Interpreted |

## States
Informational · bad. Dismissal, if any, is an explicit button, never a timer.

## Copy
```css
.notice{background:var(--sunk);border-radius:var(--r-md);padding:16px 18px;margin:0 0 14px}
.notice h3,.notice strong{display:block;margin:0 0 5px;font-size:15px;font-weight:600;letter-spacing:-.012em}
.notice p{margin:0 0 10px;font-size:14px;color:var(--ink2);max-width:56ch}
.notice.bad{background:var(--warn-bg);color:var(--warn-ink)}
.notice.bad p{color:var(--warn-ink)}
```
```html
<div class="notice bad" role="alert"><strong>Couldn't reach the server</strong><p>Your work is saved and goes in as soon as it answers.</p><button class="btn quiet" type="button">Retry now</button></div>
```

## Do / Don't
- Do: say what happened and what to do, in one or two sentences.
- Don't: use a warn notice for anything that isn't a failure or a real risk.
