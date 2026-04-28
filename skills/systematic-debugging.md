# Systematic Debugging

## When to Use
When encountering any bug, test failure, or unexpected behavior — BEFORE proposing fixes.

## Core Principle

**Random fixes waste time and create new bugs.** ALWAYS find root cause first.

## Process

### 1. OBSERVE — Gather facts, not theories
- What is the exact error message?
- What is the full stack trace?
- When did it start? What changed?
- Is it reproducible? Steps to reproduce?

### 2. HYPOTHESIZE — Form theories based on evidence
- List at least 3 possible causes
- Rank by likelihood
- For each: what evidence would confirm or rule it out?

### 3. TEST — Verify one hypothesis at a time
- Add logging/breakpoints at the suspected location
- Run the minimal reproduction case
- Did the evidence match the hypothesis?
  - YES → proceed to fix
  - NO → next hypothesis

### 4. FIX — Targeted repair
- Fix only the root cause
- Write a test that catches this specific bug (regression test)
- Run full test suite to confirm no side effects

### 5. VERIFY — Confirm the fix works
- Original reproduction case no longer fails
- New regression test passes
- All existing tests still pass

## Anti-Patterns

❌ "Let me try changing this..." without understanding why
❌ Fixing symptoms instead of root cause
❌ Making multiple changes at once (can't tell which fixed it)
❌ Not writing a regression test
❌ Fixing a different bug you found along the way (log it, don't fix it now)

## Debugging Commands

```bash
# Check logs
az containerapp logs show --name <app> --resource-group <rg>

# Check app health
curl -v https://<app>.azurecontainerapps.io/health

# Check environment
az containerapp show --name <app> --resource-group <rg> --query "properties.configuration"
```
