# Toast

**Role:** a brief confirmation of something that already happened ("Copied 4 components").
**System:** `white-cube@2` · **Source:** builtbylee/dissect `public/styles.css` (v2, 2026-09-17) · **Variants:** default · bad

## Why it is the way it is
A confirmation should be seen without being in the way: a floating pill at the bottom, over nothing important, gone on its own.

## Spec
| Property | Value | Evidence |
|---|---|---|
| stack | fixed, bottom 22px, centred, `min(540px, 100vw − 28px)`, gap 8px, z 80 | Measured |
| pill | `--sheet`, `--r-pill`, `--sh2`, padding 10px 10px 10px 20px, 13.5px | Measured |
| enter | fade + rise 10px, .3s `--spring` (none under reduced motion) | Measured |
| bad | `--warn-bg` + `--warn-ink` | Measured |
| announce | `role="status"` (`alert` for bad) | Interpreted |
| safe area | add `env(safe-area-inset-bottom)` to the bottom offset on phones | Interpreted |

## States
enter · resting · leave · bad.

## Copy
```css
.toasts{position:fixed;left:50%;bottom:22px;transform:translateX(-50%);display:grid;gap:8px;z-index:80;
  width:min(540px,calc(100vw - 28px));pointer-events:none}
.toast{display:flex;align-items:center;gap:12px;background:var(--sheet);border-radius:var(--r-pill);
  box-shadow:var(--sh2);padding:10px 10px 10px 20px;font-size:13.5px;pointer-events:auto}
.toast span{flex:1;min-width:0}
.toast.bad{background:var(--warn-bg);color:var(--warn-ink)}
@media (prefers-reduced-motion:no-preference){.toast{animation:toastin .3s var(--spring) both}
  @keyframes toastin{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}}
```
```html
<div class="toasts" aria-live="polite"><div class="toast" role="status"><span>Copied 4 components</span></div></div>
```

## Do / Don't
- Do: confirm exactly what happened ("Copied 4 components", not "Success").
- Don't: put the only way to undo something in a toast that disappears.
