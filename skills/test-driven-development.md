# Test-Driven Development

## When to Use
Before writing ANY implementation code.

## The Iron Rule

```
No code without a failing test.
No test that doesn't fail first.
```

If you wrote code before the test, DELETE IT. Write the test. Watch it fail. Then rewrite the code.

## Cycle

### 1. RED — Write a failing test
```javascript
it('should return 404 when ticket not found', async () => {
  const res = await request(app).get('/api/tickets/nonexistent');
  expect(res.status).toBe(404);
});
```
Run it: `npm test` → ❌ FAIL (expected)

### 2. GREEN — Minimal implementation
```javascript
router.get('/:id', (req, res) => {
  const ticket = tickets.find(t => t.id === req.params.id);
  if (!ticket) return res.status(404).json({ error: 'Not found' });
  res.json(ticket);
});
```
Run it: `npm test` → ✅ PASS

### 3. REFACTOR — Clean up
- Extract common patterns
- Improve naming
- Remove duplication
- Run tests again → ✅ still passing

## Test Structure

```
tests/
├── unit/
│   ├── tickets.test.js      # Business logic
│   └── validation.test.js   # Input validation
├── integration/
│   └── api.test.js           # Full HTTP request/response
└── setup.js                   # Test helpers
```

## Common Mistakes

❌ Writing test and implementation at the same time
❌ Test that passes without implementation (testing nothing)
❌ Testing implementation details instead of behavior
❌ Skipping the RED phase ("I know it'll fail")
❌ Not running ALL tests after GREEN phase
