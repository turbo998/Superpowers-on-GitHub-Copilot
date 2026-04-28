# Writing Plans

## When to Use
When you have a spec or requirements and need to break them into executable tasks.

## Process

1. **Read the spec** (`SPEC.md`) completely before planning.

2. **Break into tasks.** Each task should be:
   - Completable in 2-5 minutes
   - Independently verifiable
   - Specific about which files to create/modify

3. **Task format:**
   ```markdown
   ## Task N: [Title]
   **Files:** `src/routes/tickets.js`, `tests/tickets.test.js`
   **Do:**
   - Create Express route for POST /api/tickets
   - Validate required fields (title, description)
   - Return 201 with created ticket
   **Verify:**
   - [ ] Test passes: `npm test -- --testPathPattern=tickets`
   - [ ] Manual: `curl -X POST localhost:3000/api/tickets -d '{"title":"test"}'`
   ```

4. **Order by dependency.** Infrastructure first, then features, then integration.

5. **Include test tasks.** Every implementation task should have tests written BEFORE it (TDD).

## Output

Save as `PLAN.md` in the project root. Each task gets a checkbox for tracking progress.

## Rules

- No task over 5 minutes. If it's bigger, split it.
- Every task must have a verification step.
- Don't plan what you don't understand — brainstorm first.
