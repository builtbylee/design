# design — Lee Sam's design library

Principles, systems and templates for my projects, written so that any assistant (Claude, Codex, or otherwise) can apply them from the files alone.

## How an assistant should use this
1. Read `PRINCIPLES.md` — always.
2. Read `index.json` and pick the system the project names (or the one I name). Read its `DESIGN.md` fully, then its `tokens.json`. Never guess a value that is in the tokens.
3. Applying a system to a new kind of product? Follow `templates/TRANSLATE.md` and write the project's own `DESIGN.md` from `templates/DESIGN.template.md`, pinned with `derived-from`.
4. When I show a reference, extract principles into `references/`. Do not copy its fonts, palette or components unless I ask for the system itself.

## Layout
- `PRINCIPLES.md` — the layer above systems
- `index.json` — machine-readable list of systems
- `systems/<id>/` — `DESIGN.md` (laws, voice) + `tokens.json` (values) + optional `tokens.css`, `components.css`
- `templates/` — `DESIGN.template.md`, `COMPONENT.template.md` (Dissect-style annotation: role, why, spec table with Measured / Interpreted / Guess evidence chips, states, agent-ready copy), `tokens.schema.json`, `TRANSLATE.md`
- `references/` — principles extracted from things I admire

## Systems
| id | aesthetic | version | status |
|---|---|---|---|
| `white-cube` | soft-tactile gallery minimalism with an instrument-panel voice | 2 | locked 2026-09-17 |
| `star-race` | White Cube translated for a game — the pieces are the colour | 1 | approved 2026-09-22 |

Projects pin a system version (`derived-from: white-cube@2`) and list only their deltas.
