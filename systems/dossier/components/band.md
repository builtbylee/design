# Band

**Role:** the navy closing section: a very large line, one sentence, and the contact buttons.
**System:** `dossier@1` · **Source:** builtbylee/leesam `index.html` lines 271–280, 399 · **Variants:** one

## Why it is the way it is
The page ends on the one inverted surface so the invitation reads as the end of the record, and the italic serif word is the person saying it (Law 4).

## Spec
| Property | Value | Evidence |
|---|---|---|
| ground | `--navy`, 104px padding (72px phone) | Measured (271, 399) |
| line | 500, clamp(56px, 8vw, 104px), .95, −0.045em, white | Measured (272) |
| italic word | Instrument Serif italic 400, `--sky` (7.27:1) | Measured (273) |
| sentence | 17px `--on-navy` (8.98:1), max 60ch, 24px above, 32px below | Measured (274) |
| buttons | `.button` + `.button.secondary` | Measured (275–279) |
| copy result | label "Copied" for 2s, announced in a status region | Measured (script) |

## States
Static; the copy button follows the button states.

## Copy
```html
<section class="band" id="contact"><div class="shell"><h2>Let's <em>talk.</em></h2><p>One sentence on what to get in touch about.</p>
  <div class="button-row"><a class="button" href="mailto:…">Email</a><button class="button secondary" type="button">Copy email</button></div>
  <p role="status"></p></div></section>
```

## Do / Don't
- Do: show the address as text as well as a link.
- Don't: use navy for any other section.
