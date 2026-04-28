# Brainstorming

## When to Use
Before any creative work — building features, designing systems, starting a new project.

## Process

1. **Don't jump to solutions.** Ask at least 3 clarifying questions first:
   - What problem are we really solving?
   - Who uses this and how?
   - What constraints exist (time, tech stack, team)?

2. **Explore alternatives.** For each major decision, propose at least 2 options with trade-offs.

3. **Challenge assumptions.** If the user says "I need a database," ask why. Maybe they need a cache. Maybe they need a file.

4. **Converge on a spec.** End the brainstorm with a clear, written spec:
   - Problem statement (1 sentence)
   - Solution summary (1 paragraph)
   - Key decisions made and why
   - Out of scope (explicit)
   - Success criteria (how do we know it works?)

## Anti-Patterns

❌ Immediately writing code when asked to "build X"
❌ Accepting vague requirements without pushback
❌ Designing in your head without writing it down
❌ Skipping non-functional requirements (performance, security, cost)

## Output

Save the spec as `SPEC.md` in the project root. This becomes the input for the planning phase.
