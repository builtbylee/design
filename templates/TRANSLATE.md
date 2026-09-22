# Translating a system to a new domain

Use when a project adopts a system from `systems/` for a different kind of product.

1. **Restate the idea** in the new domain's terms. ("The interface has no colour of its own" → "the pieces are the colour.")
2. **Walk every law.** For each: *keep verbatim* / *translate* / *drop*. Write the translated law in the new domain's language and one sentence on why.
3. **Name the exceptions** the domain forces (a game needs gold for a win state; a tool didn't). An exception has exactly one meaning and one role.
4. **Check the numbers** against the new context (touch vs desktop: 40px → 44px).
5. **Add domain laws** the source never needed (a server-owned clock; live state staged by messages).
6. **Record deltas** in the project's `DESIGN.md` header (`derived-from: <system>@<version>`) and as ★ markers on changed values.
7. **Pin.** Projects reference a system version; they don't copy it silently.
