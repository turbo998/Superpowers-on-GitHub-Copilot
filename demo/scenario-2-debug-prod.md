# Scenario 2: Debug a Production Issue (10 min)

> Systematic debugging: Observe → Hypothesize → Test → Fix → Verify

## Setup

The sample-app has a **planted bug**: the `PUT /api/tickets/:id` endpoint silently succeeds but doesn't actually update the ticket. The response says 200 OK but the data is unchanged.

## Step 1: Reproduce (2 min)

In terminal:
```bash
cd sample-app && npm start
```

Then:
```bash
# Create a ticket
curl -s -X POST http://localhost:3000/api/tickets \
  -H "Content-Type: application/json" \
  -d '{"title":"Original","description":"test"}' | jq .

# Try to update it (note the id from above)
curl -s -X PUT http://localhost:3000/api/tickets/<id> \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated"}' | jq .

# Get it — title is still "Original" 🐛
curl -s http://localhost:3000/api/tickets/<id> | jq .
```

## Step 2: Ask Copilot to Debug (5 min)

Prompt:
```
The PUT /api/tickets/:id endpoint returns 200 but doesn't actually update the ticket. Debug this systematically.
```

**Expected behavior:** Copilot follows systematic-debugging skill:
1. **OBSERVE** — reads the route handler, checks the update logic
2. **HYPOTHESIZE** — lists possible causes (wrong variable, no save, shallow copy)
3. **TEST** — adds logging or reads code to narrow down
4. **FIX** — finds the root cause (the bug: object spread creates new obj but doesn't update the store)
5. **VERIFY** — writes a regression test, runs it

## Step 3: Verify the Fix (3 min)

Prompt:
```
Run all tests to make sure the fix works and nothing else broke.
```

## What to Show the Audience

1. **No random guessing** — agent follows a systematic process
2. **Hypotheses are ranked** — not just trying things
3. **Regression test written** — bug can't come back
4. **Process is auditable** — you can trace the reasoning

## The Planted Bug (Spoiler)

In `sample-app/src/routes/tickets.js`, the PUT handler:
```javascript
// BUG: creates new object but doesn't update the array
const updated = { ...ticket, ...req.body };
res.json(updated);
// Missing: tickets[index] = updated;
```
