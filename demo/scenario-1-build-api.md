# Scenario 1: Build a REST API from Zero (15 min)

> Full Superpowers workflow: Brainstorm → Plan → TDD → Implement → Review → Done

## Setup
Open this project in VS Code with GitHub Copilot. Switch to **Agent Mode** in Copilot Chat.

## Step 1: Brainstorm (3 min)

Prompt:
```
I need a Ticket Service REST API. Help me brainstorm the requirements.
```

**Expected behavior:** Copilot will follow the brainstorming skill — ask clarifying questions before jumping to code. It should ask about:
- What fields does a ticket need?
- Do we need authentication?
- What about pagination for listing?
- What's the expected scale?

After discussion, it produces a `SPEC.md`.

## Step 2: Plan (2 min)

Prompt:
```
Great, now write an implementation plan based on our spec.
```

**Expected behavior:** Copilot creates `PLAN.md` with 5-7 small tasks, each with files, steps, and verification.

## Step 3: TDD + Implement (8 min)

Prompt:
```
Execute the plan. Follow TDD — write tests first for each task.
```

**Expected behavior:** For each task, Copilot:
1. Writes test file first
2. Runs `npm test` → shows RED (fail)
3. Writes implementation
4. Runs `npm test` → shows GREEN (pass)
5. Moves to next task

Watch for: Does it actually run tests? Does it follow the plan order?

## Step 4: Review (2 min)

Prompt:
```
@reviewer Review the code we just built against the plan and spec.
```

**Expected behavior:** The reviewer agent produces a structured review with ✅ Passed, ⚠️ Suggestions, and a verdict.

## What to Show the Audience

1. **The agent asks questions** — it doesn't just start coding
2. **PLAN.md is the contract** — traceable, auditable
3. **TDD is enforced** — tests fail first, then pass
4. **Review is structured** — not just "looks good"

## If Something Goes Wrong

- Agent skips brainstorming → remind it: "Check the brainstorming skill first"
- Tests don't run → verify `npm test` works in terminal
- Agent writes code before tests → point out the TDD violation
