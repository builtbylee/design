# Principles

The layer above any system. True of all my work regardless of palette or typeface. An assistant applying a system from `systems/` applies these first.

1. **Restraint over intensity.** Playful is allowed; cheap is not. Intent, not volume. Dominant surfaces with a sharp accent beat evenly-distributed colour.
2. **The content carries the colour.** The interface is quiet so the thing it presents can be loud. If the UI needs an accent, it means one thing and appears in one role.
3. **Motion with intent, then stillness.** A handful of moments animate — the reveal, the pick-up, the finish, a state change. Nothing else moves. No confetti; the result is the celebration. `prefers-reduced-motion` is honoured everywhere.
4. **The number is the hero.** Times, counts, prices, scores set in a monospaced value face, large where they are the point. Every number says what it is in visible text.
5. **Space, not borders.** Separate with surface and gap. Rules are a last resort.
6. **Real elements, even in mockups.** `<button>`, `<a href>`, `<input>` + `<label>`. Targets ≥ 44px on touch. Contrast ≥ 4.5:1 (3:1 above 24px). Focus rings distinct from selection.
7. **One filled thing per area.** The primary action is the only solid element in its region.
8. **Plain voice.** Specific, confident about what is known, blunt about what isn't. No exclamation marks, no "Oops", no marketing verbs, no emoji as UI.
9. **References are principles, not templates.** When I show a site I admire — mine or anyone's — extract *why* it works. A product never ships another's fonts, palette or components. The one exception is `library/`: credited study rebuilds of public designs, kept for reference, never shipped as-is and never carrying the original's logo or proprietary font files.
10. **Translate, don't transplant.** A system built for one domain (a tool) is adapted for another (a game) law by law: keep what transfers, change what the domain demands, and write down why. See `templates/TRANSLATE.md`.
11. **Every state is designed.** Empty, loading, failed, offline, rate-limited, reconnecting. Never a blank panel, never a spinner where a skeleton would tell the truth.
12. **No filler.** No lorem ipsum, invented stats or decorative data. A missing fact is a visible placeholder.
