# White Cube — components

One file per atom, each in `templates/COMPONENT.template.md` form:
- role;
- the one-sentence *why*;
- a spec table, every row marked **Measured** (taken from Dissect's source), **Interpreted** (derived from a law) or **Guess** (a stated assumption);
- states;
- agent-ready CSS and HTML;
- the do/don'ts people actually get wrong.

| Component | For |
|---|---|
| [bar](bar.md) | the floating pill at the top of every screen |
| [sheet](sheet.md) | the raised white card on the grey ground |
| [button](button.md) | primary (ink, arrow cap) and quiet pills |
| [icon-button](icon-button.md) | round single-action controls |
| [meta-pill](meta-pill.md) | mono values and status, with the live/working/bad dot |
| [segmented](segmented.md) | pick one of a few, in place |
| [evidence-chip](evidence-chip.md) | Measured / Interpreted / Guess |
| [rows](rows.md) | key/value lists on the one legitimate hairline grid |
| [skeleton](skeleton.md) | content on its way, in its own shape |
| [notice](notice.md) | inline information and failures |
| [toast](toast.md) | brief confirmations |
| [selectable-tile](selectable-tile.md) | border-and-lift selection, choice chips, tags |
| [input-search](input-search.md) | fields and the search pill |
| [disclosure](disclosure.md) | folding reference material |

Every component inherits two global rules:
- Focus is `outline: 2px solid var(--ink); outline-offset: 3px` on every focusable element.
- Under `prefers-reduced-motion: reduce`, every animation is cut to a single near-zero frame.

`../components.css` holds the same atoms as one stylesheet.
